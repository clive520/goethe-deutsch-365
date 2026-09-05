import React, { useState } from 'react';
import {
  Mic,
  MicOff,
  Volume2,
  Sparkles,
  Award,
  AlertCircle,
  CheckCircle,
  MessageSquare,
  HelpCircle,
} from 'lucide-react';
import type { SpeakingExercise } from '../types/curriculum';
import { SpeechService } from '../services/speechService';

interface Props {
  exercise: SpeakingExercise;
}

export const SpeakingModule: React.FC<Props> = ({ exercise }) => {
  const [activeSentenceId, setActiveSentenceId] = useState<string>(
    exercise.targetSentences[0]?.id || ''
  );
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [scoreResult, setScoreResult] = useState<{
    score: number;
    matchedWords: string[];
    missedWords: string[];
  } | null>(null);

  // Role Play state
  const [rolePlayActive, setRolePlayActive] = useState<boolean>(false);

  const currentSentence =
    exercise.targetSentences.find((s) => s.id === activeSentenceId) ||
    exercise.targetSentences[0];

  const handlePlayReference = (text: string) => {
    SpeechService.speak(text, 0.9);
  };

  const handleStartSpeaking = (targetText: string) => {
    setErrorMessage(null);
    setTranscript('');
    setScoreResult(null);

    if (!SpeechService.isRecognitionSupported()) {
      setErrorMessage(
        '您的瀏覽器未支援 Web Speech 語音辨識（建議使用 Chrome / Edge 瀏覽器）。您仍可點擊播放鈕進行跟讀與聽覺模仿！'
      );
      return;
    }

    setIsRecording(true);
    const recognizer = SpeechService.createRecognizer(
      (resultText, isFinal) => {
        setTranscript(resultText);
        if (isFinal) {
          const score = SpeechService.calculateScore(targetText, resultText);
          setScoreResult(score);
          setIsRecording(false);
        }
      },
      (error) => {
        setErrorMessage(error);
        setIsRecording(false);
      },
      () => {
        setIsRecording(false);
      }
    );

    if (recognizer) {
      try {
        recognizer.start();
      } catch {
        setIsRecording(false);
      }
    }
  };

  const handleStartRolePlay = () => {
    if (!exercise.rolePlay) return;
    setRolePlayActive(true);
    // Speak examiner prompt first
    SpeechService.speak(exercise.rolePlay.promptDe, 1.0);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 rounded-2xl p-6 text-white shadow-lg">
        <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-300 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-400/30 w-fit mb-2">
          <Mic className="w-3.5 h-3.5" />
          <span>歌德檢定口說訓練 (Sprechen)</span>
        </div>
        <h3 className="text-xl font-bold tracking-tight">{exercise.title}</h3>
        <p className="text-xs text-emerald-200/80 mt-1 max-w-xl">{exercise.instruction}</p>
      </div>

      {/* Target Sentences Selector & Practice */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column: Sentence tabs */}
        <div className="lg:col-span-1 space-y-2">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
            今日口說精選目標句
          </h4>
          <div className="space-y-2">
            {exercise.targetSentences.map((sent, idx) => {
              const isSelected = sent.id === activeSentenceId;
              return (
                <button
                  key={sent.id}
                  onClick={() => {
                    setActiveSentenceId(sent.id);
                    setTranscript('');
                    setScoreResult(null);
                    setErrorMessage(null);
                  }}
                  className={`w-full text-left p-3.5 rounded-xl border transition flex items-start space-x-3 ${
                    isSelected
                      ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500/20 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                      isSelected
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-slate-900 truncate">{sent.de}</p>
                    <p className="text-xs text-slate-500 truncate mt-0.5">{sent.zh}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right column: Interactive Recording & AI Feedback Card */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-xs p-6 flex flex-col justify-between">
          {currentSentence && (
            <div className="space-y-6">
              {/* Sentence Display Card */}
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                    德語目標句 (Ziel-Satz)
                  </span>
                  <button
                    onClick={() => handlePlayReference(currentSentence.de)}
                    className="flex items-center space-x-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow-2xs transition active:scale-95"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>聽範例發音</span>
                  </button>
                </div>

                <p className="text-xl font-bold text-slate-900 tracking-wide">
                  {currentSentence.de}
                </p>
                <p className="text-sm text-slate-600 mt-1">{currentSentence.zh}</p>

                {currentSentence.phoneticTip && (
                  <div className="mt-3 p-3 bg-amber-50 border border-amber-200/80 rounded-xl text-xs text-amber-900 flex items-start space-x-2">
                    <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>發音秘訣：</strong> {currentSentence.phoneticTip}
                    </div>
                  </div>
                )}
              </div>

              {/* Recording Action Area */}
              <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
                <button
                  onClick={() => handleStartSpeaking(currentSentence.de)}
                  disabled={isRecording}
                  className={`relative flex items-center justify-center w-20 h-20 rounded-full shadow-lg transition-all active:scale-95 cursor-pointer ${
                    isRecording
                      ? 'bg-rose-500 text-white animate-ping'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white hover:shadow-emerald-500/25'
                  }`}
                >
                  {isRecording ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
                </button>

                <p className="text-xs font-semibold text-slate-600 mt-4">
                  {isRecording ? (
                    <span className="text-rose-600 animate-pulse font-bold flex items-center space-x-1">
                      <span>● 正在辨識您的德語發音...請清楚朗讀</span>
                    </span>
                  ) : (
                    '點擊麥克風開始德語口說辨識'
                  )}
                </p>
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Evaluation Results */}
              {transcript && (
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-3 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">
                      系統辨識到的口說內容：
                    </span>
                    {scoreResult && (
                      <div
                        className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-extrabold ${
                          scoreResult.score >= 80
                            ? 'bg-emerald-100 text-emerald-800'
                            : scoreResult.score >= 50
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>準確度：{scoreResult.score}%</span>
                      </div>
                    )}
                  </div>

                  <p className="text-base font-medium text-slate-800 italic">
                    "{transcript}"
                  </p>

                  {scoreResult && (
                    <div className="pt-2 border-t border-slate-100 flex items-center space-x-4 text-xs">
                      <span className="text-emerald-700 flex items-center space-x-1">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>吻合詞彙：{scoreResult.matchedWords.length} 字</span>
                      </span>
                      {scoreResult.missedWords.length > 0 && (
                        <span className="text-amber-700 flex items-center space-x-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>需加強：{scoreResult.missedWords.join(', ')}</span>
                        </span>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Role Play Simulation Section (Simulated Goethe Examiner) */}
      {exercise.rolePlay && (
        <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl border border-indigo-200 p-6 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 bg-indigo-600 text-white rounded-xl">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">
                  歌德口試考官實戰模擬 (Prüfungsgespräch)
                </h4>
                <p className="text-xs text-indigo-700">
                  角色：{exercise.rolePlay.partnerName}（{exercise.rolePlay.partnerRole}）
                </p>
              </div>
            </div>

            <button
              onClick={handleStartRolePlay}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl shadow-xs transition active:scale-95 flex items-center space-x-1.5"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>考官開始提問</span>
            </button>
          </div>

          <div className="p-4 bg-white rounded-xl border border-indigo-100 space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                考官
              </div>
              <div>
                <p className="text-base font-bold text-slate-900">
                  {exercise.rolePlay.promptDe}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">{exercise.rolePlay.promptZh}</p>
              </div>
            </div>

            {rolePlayActive && (
              <div className="mt-4 pt-3 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-500 mb-2">建議應答參考句子：</p>
                <div className="space-y-1.5">
                  {exercise.rolePlay.sampleReplies.map((reply, i) => (
                    <div
                      key={i}
                      onClick={() => SpeechService.speak(reply, 0.9)}
                      className="text-xs font-medium text-indigo-900 bg-indigo-50/80 p-2.5 rounded-lg hover:bg-indigo-100 transition cursor-pointer flex items-center justify-between"
                    >
                      <span>{reply}</span>
                      <Volume2 className="w-3.5 h-3.5 text-indigo-600" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
