import React, { useState, useRef, useEffect } from 'react';
import {
  Mic,
  MicOff,
  Volume2,
  Sparkles,
  Award,
  AlertCircle,
  CheckCircle,
  CheckCircle2,
  XCircle,
  Play,
  Pause,
  RotateCcw,
  Headphones,
  Radio,
  MessageSquare,
  HelpCircle,
} from 'lucide-react';
import type { SpeakingExercise } from '../types/curriculum';
import {
  SpeechService,
  VoiceRecorder,
  SpeechEvaluationResult,
} from '../services/speechService';

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
  const [evaluation, setEvaluation] = useState<SpeechEvaluationResult | null>(null);

  // Audio recording playback state
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [isPlayingUserAudio, setIsPlayingUserAudio] = useState<boolean>(false);

  // Refs for audio and recorders
  const voiceRecorderRef = useRef<VoiceRecorder>(new VoiceRecorder());
  const activeAudioRef = useRef<HTMLAudioElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognizerRef = useRef<any>(null);

  // Role Play state
  const [rolePlayActive, setRolePlayActive] = useState<boolean>(false);

  const currentSentence =
    exercise.targetSentences.find((s) => s.id === activeSentenceId) ||
    exercise.targetSentences[0];

  // Cleanup audio URLs on unmount
  useEffect(() => {
    return () => {
      if (recordedAudioUrl) {
        URL.revokeObjectURL(recordedAudioUrl);
      }
      voiceRecorderRef.current.cancel();
      if (activeAudioRef.current) {
        activeAudioRef.current.pause();
      }
    };
  }, [recordedAudioUrl]);

  const handlePlayReference = (text: string) => {
    if (activeAudioRef.current) {
      activeAudioRef.current.pause();
      activeAudioRef.current = null;
      setIsPlayingUserAudio(false);
    }
    SpeechService.speak(text, 0.9);
  };

  const handlePlayUserAudio = () => {
    if (!recordedAudioUrl) return;
    SpeechService.stopSpeaking();

    if (activeAudioRef.current) {
      activeAudioRef.current.pause();
      activeAudioRef.current = null;
      setIsPlayingUserAudio(false);
      return;
    }

    const audio = new Audio(recordedAudioUrl);
    activeAudioRef.current = audio;
    setIsPlayingUserAudio(true);

    audio.onended = () => {
      setIsPlayingUserAudio(false);
      activeAudioRef.current = null;
    };
    audio.onerror = () => {
      setIsPlayingUserAudio(false);
      activeAudioRef.current = null;
    };

    audio.play().catch(() => {
      setIsPlayingUserAudio(false);
      activeAudioRef.current = null;
    });
  };

  const finishRecording = async (targetText: string, finalTranscript: string) => {
    setIsRecording(false);
    const audioUrl = await voiceRecorderRef.current.stop();
    if (audioUrl) {
      setRecordedAudioUrl(audioUrl);
    }

    const textToEvaluate = finalTranscript.trim() || transcript.trim();
    if (textToEvaluate) {
      const detailed = SpeechService.calculateDetailedScore(targetText, textToEvaluate);
      setEvaluation(detailed);
      setScoreResult({
        score: detailed.score,
        matchedWords: detailed.matchedWords,
        missedWords: detailed.missedWords,
      });
    } else {
      setErrorMessage('未辨識到清晰的德語聲音，請再試一次或靠近麥克風朗讀。');
    }
  };

  const handleStartSpeaking = async (targetText: string) => {
    setErrorMessage(null);
    setTranscript('');
    setScoreResult(null);
    setEvaluation(null);

    if (recordedAudioUrl) {
      URL.revokeObjectURL(recordedAudioUrl);
      setRecordedAudioUrl(null);
    }
    if (activeAudioRef.current) {
      activeAudioRef.current.pause();
      activeAudioRef.current = null;
      setIsPlayingUserAudio(false);
    }
    SpeechService.stopSpeaking();

    if (!SpeechService.isRecognitionSupported()) {
      setErrorMessage(
        '您的瀏覽器未支援 Web Speech 語音辨識（建議使用 Chrome / Edge 瀏覽器）。您仍可點擊播放鈕進行跟讀與聽覺模仿！'
      );
      return;
    }

    setIsRecording(true);

    // Start audio recorder concurrently
    voiceRecorderRef.current.start().catch((err) => {
      console.warn('VoiceRecorder start error', err);
    });

    let liveTranscript = '';
    const recognizer = SpeechService.createRecognizer(
      (resultText, isFinal) => {
        liveTranscript = resultText;
        setTranscript(resultText);
        if (isFinal) {
          finishRecording(targetText, resultText);
        }
      },
      (error) => {
        setErrorMessage(error);
        finishRecording(targetText, liveTranscript);
      },
      () => {
        finishRecording(targetText, liveTranscript);
      }
    );

    recognizerRef.current = recognizer;
    if (recognizer) {
      try {
        recognizer.start();
      } catch {
        setIsRecording(false);
      }
    }
  };

  const handleStopRecordingManually = () => {
    if (recognizerRef.current) {
      try {
        recognizerRef.current.stop();
      } catch {
        // ignore
      }
    }
  };

  const handleSentenceChange = (sentenceId: string) => {
    setActiveSentenceId(sentenceId);
    setTranscript('');
    setScoreResult(null);
    setEvaluation(null);
    setErrorMessage(null);
    if (recordedAudioUrl) {
      URL.revokeObjectURL(recordedAudioUrl);
      setRecordedAudioUrl(null);
    }
    if (activeAudioRef.current) {
      activeAudioRef.current.pause();
      activeAudioRef.current = null;
      setIsPlayingUserAudio(false);
    }
    SpeechService.stopSpeaking();
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
                  onClick={() => handleSentenceChange(sent.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition flex items-start space-x-3 cursor-pointer ${
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
                    className="flex items-center space-x-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow-2xs transition active:scale-95 cursor-pointer"
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
                      ? 'bg-rose-500 text-white animate-pulse ring-4 ring-rose-200'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white hover:shadow-emerald-500/25'
                  }`}
                >
                  {isRecording ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
                </button>

                <p className="text-xs font-semibold text-slate-600 mt-4 text-center">
                  {isRecording ? (
                    <span className="text-rose-600 animate-pulse font-bold flex items-center justify-center space-x-1">
                      <span>● 正在辨識並錄下您的德語發音...請清楚朗讀</span>
                    </span>
                  ) : (
                    '點擊麥克風開始德語朗讀與錄音'
                  )}
                </p>

                {isRecording && (
                  <button
                    onClick={handleStopRecordingManually}
                    className="mt-3 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl shadow-md transition active:scale-95 flex items-center space-x-1.5 cursor-pointer"
                  >
                    <Radio className="w-3.5 h-3.5 animate-pulse" />
                    <span>讀完了（結束錄音並進行評估）</span>
                  </button>
                )}
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Evaluation Results & Voice Recording Playback */}
              {(evaluation || transcript || recordedAudioUrl) && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-3 duration-300">
                  {/* 1. Explicit Verdict Card (念得好不好、正不正確) */}
                  {evaluation && (
                    <div
                      className={`p-5 rounded-2xl border transition shadow-xs ${
                        evaluation.verdict === 'EXCELLENT'
                          ? 'bg-emerald-50/90 border-emerald-200 text-emerald-950'
                          : evaluation.verdict === 'GOOD'
                          ? 'bg-teal-50/90 border-teal-200 text-teal-950'
                          : evaluation.verdict === 'NEEDS_WORK'
                          ? 'bg-amber-50/90 border-amber-200 text-amber-950'
                          : 'bg-rose-50/90 border-rose-200 text-rose-950'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-black/5">
                        <div className="flex items-center space-x-2">
                          {evaluation.isCorrect ? (
                            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                          ) : (
                            <XCircle className="w-6 h-6 text-rose-600 shrink-0" />
                          )}
                          <h4 className="text-base font-extrabold tracking-tight">
                            {evaluation.verdictTitle}
                          </h4>
                        </div>

                        <div className="flex items-center space-x-2 shrink-0">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-black shadow-2xs ${
                              evaluation.isCorrect
                                ? 'bg-emerald-600 text-white'
                                : 'bg-rose-600 text-white'
                            }`}
                          >
                            {evaluation.isCorrect ? '判定：正確' : '判定：不正確'}
                          </span>
                          <span className="px-2.5 py-1 bg-white/80 rounded-full text-xs font-bold text-slate-800 shadow-2xs">
                            準確度：{evaluation.score}%
                          </span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm mt-3 leading-relaxed opacity-90 font-medium">
                        {evaluation.verdictMessage}
                      </p>
                    </div>
                  )}

                  {/* 2. Audio Playback Area: Student's Voice vs. Native Model */}
                  <div className="p-4 bg-slate-900 text-white rounded-2xl shadow-md space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs font-bold text-amber-300">
                        <Headphones className="w-4 h-4" />
                        <span>雙軌錄音對比（聽自己的發音 vs. 老師示範）</span>
                      </div>
                      <span className="text-[11px] text-slate-400 hidden sm:inline">
                        交叉聆聽以對比語調與咬字
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      {/* Student's Recording Playback */}
                      <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex flex-col justify-between space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-200 flex items-center space-x-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                            <span>我的錄音回饋</span>
                          </span>
                          {recordedAudioUrl ? (
                            <span className="text-[10px] text-emerald-400 font-mono">錄音就緒</span>
                          ) : (
                            <span className="text-[10px] text-slate-400">無錄音檔</span>
                          )}
                        </div>

                        {recordedAudioUrl ? (
                          <button
                            onClick={handlePlayUserAudio}
                            className={`w-full py-2.5 px-3 rounded-lg text-xs font-bold flex items-center justify-center space-x-2 transition active:scale-95 cursor-pointer ${
                              isPlayingUserAudio
                                ? 'bg-amber-500 text-slate-950 shadow-md'
                                : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs'
                            }`}
                          >
                            {isPlayingUserAudio ? (
                              <>
                                <Pause className="w-4 h-4 fill-current" />
                                <span>暫停播放我的錄音</span>
                              </>
                            ) : (
                              <>
                                <Play className="w-4 h-4 fill-current" />
                                <span>🎧 播放我的錄音</span>
                              </>
                            )}
                          </button>
                        ) : (
                          <div className="py-2 text-center text-xs text-slate-400">
                            未擷取到麥克風音訊檔（但已完成發音辨識）
                          </div>
                        )}
                      </div>

                      {/* Native Model Reference Audio */}
                      <div className="p-3 rounded-xl bg-white/10 border border-white/10 flex flex-col justify-between space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-200 flex items-center space-x-1.5">
                            <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                            <span>德語標準示範音</span>
                          </span>
                          <span className="text-[10px] text-indigo-300 font-mono">母語發音</span>
                        </div>

                        <button
                          onClick={() => handlePlayReference(currentSentence.de)}
                          className="w-full py-2.5 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center justify-center space-x-2 shadow-xs transition active:scale-95 cursor-pointer"
                        >
                          <Volume2 className="w-4 h-4" />
                          <span>🔊 聆聽標準發音</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 3. Word-by-Word Diagnosis (單字逐詞正誤標記) */}
                  {evaluation && evaluation.wordDetails.length > 0 && (
                    <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                        <span>逐詞發音診斷：</span>
                        <span className="text-slate-400 font-normal text-[11px]">
                          點擊單字可單獨反覆聆聽示範
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {evaluation.wordDetails.map((w, wIdx) => (
                          <button
                            key={wIdx}
                            onClick={() => SpeechService.speak(w.clean || w.raw, 0.85)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition active:scale-95 cursor-pointer border ${
                              w.isCorrect
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                                : 'bg-rose-50 text-rose-800 border-rose-300 hover:bg-rose-100 ring-1 ring-rose-200'
                            }`}
                            title="點擊單獨播放此字發音"
                          >
                            <span>{w.raw}</span>
                            {w.isCorrect ? (
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <XCircle className="w-3.5 h-3.5 text-rose-600" />
                            )}
                          </button>
                        ))}
                      </div>

                      <div className="flex items-center space-x-4 text-[11px] text-slate-500 pt-1">
                        <span className="flex items-center text-emerald-700">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          念得正確：{evaluation.matchedWords.length} 字
                        </span>
                        {evaluation.missedWords.length > 0 && (
                          <span className="flex items-center text-rose-600 font-semibold">
                            <XCircle className="w-3 h-3 mr-1" />
                            念錯或未辨識：{evaluation.missedWords.length} 字
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* 4. Recognized Transcript & Re-record Action */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                    <div>
                      <span className="text-slate-500 font-medium">系統聽到的口說內容：</span>
                      <p className="text-slate-800 font-bold text-sm italic mt-0.5">
                        „{transcript || '(無收音)'}“
                      </p>
                    </div>

                    <button
                      onClick={() => handleStartSpeaking(currentSentence.de)}
                      className="px-4 py-2 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 rounded-xl font-bold flex items-center space-x-1.5 shadow-2xs transition active:scale-95 shrink-0 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>再念一次（重新錄音）</span>
                    </button>
                  </div>
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
