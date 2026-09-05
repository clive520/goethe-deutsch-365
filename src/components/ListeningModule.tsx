import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  Gauge,
  HelpCircle,
  CheckCircle2,
  XCircle,
  Eye,
  EyeOff,
  Languages,
} from 'lucide-react';
import type { ListeningExercise, DialogueLine } from '../types/curriculum';
import { SpeechService } from '../services/speechService';
import { QuizQuestionCard } from './QuizQuestionCard';

interface Props {
  exercise: ListeningExercise;
  onCompleteExercise?: () => void;
}

export const ListeningModule: React.FC<Props> = ({ exercise }) => {
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [activeLineIndex, setActiveLineIndex] = useState<number | null>(null);
  const [pausedLineIndex, setPausedLineIndex] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(1.0);
  const [showTranslation, setShowTranslation] = useState<boolean>(true);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [showChineseHint, setShowChineseHint] = useState<boolean>(false);

  const stopPlayAllRef = useRef<boolean>(false);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Automatically scroll the currently spoken sentence right to the center of the viewport
  useEffect(() => {
    if (activeLineIndex !== null && lineRefs.current[activeLineIndex]) {
      lineRefs.current[activeLineIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [activeLineIndex]);

  useEffect(() => {
    // Reset state on exercise change or unmount
    return () => {
      stopPlayAllRef.current = true;
      SpeechService.stopSpeaking();
      setIsPlayingAll(false);
      setActiveLineIndex(null);
      setPausedLineIndex(0);
    };
  }, [exercise]);

  // Play a single line
  const handlePlayLine = async (line: DialogueLine, index: number) => {
    stopPlayAllRef.current = true;
    SpeechService.stopSpeaking();
    setIsPlayingAll(false);
    setActiveLineIndex(index);
    setPausedLineIndex(index);
    await SpeechService.speak(line.de, speed);
    setActiveLineIndex(null);
  };

  // Play full conversation from start or resume from paused location
  const handlePlayAll = async (fromBeginning: boolean = false) => {
    if (isPlayingAll) {
      // Immediate Pause
      stopPlayAllRef.current = true;
      SpeechService.stopSpeaking();
      setIsPlayingAll(false);
      return;
    }

    // Resume from pausedLineIndex or restart from 0
    const startIndex = fromBeginning ? 0 : pausedLineIndex;
    stopPlayAllRef.current = false;
    setIsPlayingAll(true);

    for (let i = startIndex; i < exercise.dialogue.length; i++) {
      if (stopPlayAllRef.current) break;
      setActiveLineIndex(i);
      setPausedLineIndex(i);
      await SpeechService.speak(exercise.dialogue[i].de, speed);
      if (stopPlayAllRef.current) break;
      // Brief pause between speakers
      await new Promise((r) => setTimeout(r, 450));
      if (stopPlayAllRef.current) break;
    }

    if (!stopPlayAllRef.current) {
      setActiveLineIndex(null);
      setPausedLineIndex(0);
      setIsPlayingAll(false);
    }
  };

  const handleReplayFromStart = () => {
    handlePlayAll(true);
  };

  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: optionIndex,
    });
  };

  return (
    <div className="space-y-6">
      {/* Listening Header Context Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-2xl p-6 text-white shadow-lg">
        <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-2">
          <Volume2 className="w-3.5 h-3.5" />
          <span>歌德檢定聽力訓練 (Hören)</span>
        </div>
        <h3 className="text-xl font-bold tracking-tight">{exercise.title}</h3>
        <p className="text-xs text-blue-200/80 mt-1 max-w-xl">{exercise.situation}</p>
      </div>

      {/* Sticky Audio Controller Bar (Follows user screen on scroll) */}
      <div className="sticky top-16 md:top-16 z-30 bg-slate-950/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 text-white shadow-2xl border border-slate-700/80 transition-all ring-1 ring-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Status & Progress Indicator */}
          <div className="flex items-center space-x-3">
            <div
              className={`p-2.5 rounded-xl shrink-0 ${
                isPlayingAll
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : pausedLineIndex > 0
                  ? 'bg-amber-500/20 text-amber-300'
                  : 'bg-blue-500/20 text-blue-300'
              }`}
            >
              <Volume2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-bold text-white tracking-tight">
                  {isPlayingAll
                    ? '語音朗讀中...'
                    : pausedLineIndex > 0
                    ? `已暫停於第 ${pausedLineIndex + 1} 句`
                    : '對話音訊控制台'}
                </span>
                {isPlayingAll && (
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                目前進度：第 {activeLineIndex !== null ? activeLineIndex + 1 : pausedLineIndex > 0 ? pausedLineIndex + 1 : 1} / {exercise.dialogue.length} 句
              </p>
            </div>
          </div>

          {/* Action Buttons & Speed Toggle */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Play / Pause / Resume Button */}
            <button
              onClick={() => handlePlayAll(false)}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition active:scale-95 cursor-pointer ${
                isPlayingAll
                  ? 'bg-amber-500 hover:bg-amber-600 text-white animate-pulse'
                  : pausedLineIndex > 0
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white'
              }`}
            >
              {isPlayingAll ? (
                <>
                  <Pause className="w-4 h-4 fill-white" />
                  <span>暫停播放</span>
                </>
              ) : pausedLineIndex > 0 ? (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>繼續播放 (第 {pausedLineIndex + 1} 句)</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>播放整段對話</span>
                </>
              )}
            </button>

            {/* Replay from Start Button (Visible when paused or has progress) */}
            {pausedLineIndex > 0 && (
              <button
                onClick={handleReplayFromStart}
                className="flex items-center space-x-1.5 px-3.5 py-2.5 rounded-xl font-semibold text-xs bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 transition active:scale-95 cursor-pointer"
                title="從第一句重新播放"
              >
                <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                <span>從頭重聽</span>
              </button>
            )}

            {/* Speed Toggle */}
            <div className="flex items-center space-x-1 bg-black/40 p-1 rounded-xl border border-white/10">
              <Gauge className="w-3.5 h-3.5 text-slate-400 ml-1.5" />
              {[0.8, 1.0, 1.2].map((s) => (
                <button
                  key={s}
                  onClick={() => setSpeed(s)}
                  className={`px-2 py-1 text-xs rounded-lg font-medium transition cursor-pointer ${
                    speed === s
                      ? 'bg-white text-slate-950 font-bold shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dialogue Script Section */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <h4 className="text-sm font-bold text-slate-800">對話文字稿 (Transkription)</h4>
            <span className="text-xs text-slate-400">點擊句子可單句重播發音</span>
          </div>

          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className="flex items-center space-x-1.5 text-xs text-indigo-600 hover:text-indigo-800 font-medium px-2.5 py-1 rounded-lg hover:bg-indigo-50 transition"
          >
            {showTranslation ? (
              <>
                <EyeOff className="w-3.5 h-3.5" />
                <span>隱藏中文翻譯</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5" />
                <span>顯示中文翻譯</span>
              </>
            )}
          </button>
        </div>

        <div className="p-6 space-y-4">
          {exercise.dialogue.map((line, idx) => {
            const isCurrentActive = activeLineIndex === idx;
            const isPausedHere = !isPlayingAll && pausedLineIndex === idx && pausedLineIndex > 0;

            let rowStyle = 'bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50/60';
            if (isCurrentActive) {
              rowStyle = 'bg-blue-50/90 border-blue-400 ring-2 ring-blue-400/30 shadow-sm';
            } else if (isPausedHere) {
              rowStyle = 'bg-amber-50/70 border-amber-300 ring-2 ring-amber-300/30 shadow-2xs';
            }

            return (
              <div
                key={idx}
                ref={(el) => {
                  lineRefs.current[idx] = el;
                }}
                onClick={() => handlePlayLine(line, idx)}
                className={`group p-4 rounded-xl transition cursor-pointer border ${rowStyle}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <button
                      className={`p-2 rounded-lg transition shrink-0 mt-0.5 ${
                        isCurrentActive
                          ? 'bg-blue-600 text-white'
                          : isPausedHere
                          ? 'bg-amber-500 text-white'
                          : 'bg-slate-100 group-hover:bg-blue-100 text-slate-500 group-hover:text-blue-700'
                      }`}
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold text-indigo-900 bg-indigo-50 px-2 py-0.5 rounded-md">
                          {line.speaker}
                        </span>
                        {isCurrentActive && (
                          <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full flex items-center space-x-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                            <span>朗讀中</span>
                          </span>
                        )}
                        {isPausedHere && (
                          <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                            ⏸ 暫停於此句
                          </span>
                        )}
                      </div>
                      <p className="text-base font-semibold text-slate-900 mt-1 tracking-wide">
                        {line.de}
                      </p>
                      {showTranslation && (
                        <p className="text-sm text-slate-500 mt-1 font-normal">{line.zh}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Comprehension Questions */}
      {exercise.questions && exercise.questions.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
            <div>
              <h4 className="text-base font-bold text-slate-900">歌德聽力理解測驗 (Hörverständnis)</h4>
              <p className="text-xs text-slate-500">依據上述對話回答問題，檢驗聽力理解能力（預設隱藏中文提示）</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setShowChineseHint(!showChineseHint)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition cursor-pointer ${
                  showChineseHint
                    ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
                    : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-600'
                }`}
                title="切換所有題目與選項的中文提示"
              >
                <Languages className="w-3.5 h-3.5" />
                <span>{showChineseHint ? '隱藏中文提示' : '顯示中文提示'}</span>
              </button>

              {showResults && (
                <button
                  onClick={() => {
                    setSelectedAnswers({});
                    setShowResults(false);
                  }}
                  className="flex items-center space-x-1 text-xs text-slate-500 hover:text-slate-800"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>重新作答</span>
                </button>
              )}
            </div>
          </div>

          <div className="space-y-4">
            {exercise.questions.map((q, qIdx) => (
              <QuizQuestionCard
                key={q.id || qIdx}
                q={q}
                qIdx={qIdx}
                selectedOption={selectedAnswers[qIdx]}
                onSelectOption={(optIdx) => handleSelectOption(qIdx, optIdx)}
                showResults={showResults}
                globalShowChinese={showChineseHint}
              />
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
            {!showResults ? (
              <button
                onClick={() => setShowResults(true)}
                disabled={Object.keys(selectedAnswers).length === 0}
                className="px-5 py-2 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm transition"
              >
                檢查聽力作答
              </button>
            ) : (
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-lg flex items-center space-x-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>聽力練習已完成！</span>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
