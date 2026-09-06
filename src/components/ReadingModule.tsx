import React, { useState } from 'react';
import {
  BookOpen,
  Eye,
  EyeOff,
  Plus,
  Check,
  Volume2,
  BookmarkPlus,
  BookmarkCheck,
  HelpCircle,
  FileText,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Languages,
} from 'lucide-react';
import type { ReadingExercise } from '../types/curriculum';
import { SpeechService } from '../services/speechService';
import { QuizQuestionCard } from './QuizQuestionCard';

interface Props {
  exercise: ReadingExercise;
  onSaveVocab?: (
    word: string,
    meaning: string,
    article?: 'der' | 'die' | 'das',
    example?: string,
    exampleTr?: string
  ) => void;
  savedWords?: string[];
}

export const ReadingModule: React.FC<Props> = ({
  exercise,
  onSaveVocab,
  savedWords = [],
}) => {
  const [showTranslation, setShowTranslation] = useState<boolean>(false);
  const [selectedWord, setSelectedWord] = useState<{
    word: string;
    info?: { pos: string; meaning: string; gender?: string };
  } | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [showChineseHint, setShowChineseHint] = useState<boolean>(false);

  // Handle word click
  const handleWordClick = (rawWord: string) => {
    const cleanWord = rawWord.replace(/[.,!?;:"()„“\n]/g, '').trim();
    if (!cleanWord) return;

    // Check glossary
    let info = exercise.glossary[cleanWord];
    if (!info) {
      // Check case-insensitive
      const matchKey = Object.keys(exercise.glossary).find(
        (k) => k.toLowerCase() === cleanWord.toLowerCase()
      );
      if (matchKey) {
        info = exercise.glossary[matchKey];
      }
    }

    setSelectedWord({
      word: cleanWord,
      info: info || {
        pos: 'word',
        meaning: '德語常用詞彙（點擊右側喇叭可聆聽標準發音）',
      },
    });

    SpeechService.speak(cleanWord, 0.9);
  };

  const isWordSaved = (word: string) => {
    return savedWords.includes(word);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-900 via-orange-950 to-slate-900 rounded-2xl p-6 text-white shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/30 mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>歌德檢定閱讀理解 (Leseverstehen)</span>
            </div>
            <h3 className="text-xl font-bold tracking-tight">{exercise.title}</h3>
            {exercise.sourceInfo && (
              <p className="text-xs text-amber-200/80 mt-1">{exercise.sourceInfo}</p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-white/10 text-amber-200 text-xs font-bold rounded-lg backdrop-blur-xs border border-white/10 flex items-center space-x-1.5">
              <FileText className="w-3.5 h-3.5" />
              <span>文本格式：{exercise.documentType}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Reading Passage & Interactive Click-to-lookup */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <h4 className="text-sm font-bold text-slate-800">德語真實情境文本</h4>
            <span className="text-xs text-slate-400 hidden sm:inline">
              點擊內文任何單字可即時查義與發音
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowTranslation(!showTranslation)}
              className="flex items-center space-x-1.5 text-xs text-indigo-600 hover:text-indigo-800 font-medium px-2.5 py-1 rounded-lg hover:bg-indigo-50 transition"
            >
              {showTranslation ? (
                <>
                  <EyeOff className="w-3.5 h-3.5" />
                  <span>隱藏譯文</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5" />
                  <span>對照中文譯文</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Document container styled like realistic German notice / letter */}
          <div className="p-6 bg-amber-50/30 rounded-2xl border border-amber-100/80 font-serif leading-relaxed text-slate-800 text-base sm:text-lg whitespace-pre-line selection:bg-amber-200">
            {exercise.content.split('\n').map((paragraph, pIdx) => (
              <p key={pIdx} className="mb-4 last:mb-0">
                {paragraph.split(' ').map((token, tIdx) => {
                  const clean = token.replace(/[.,!?;:"()„“]/g, '');
                  const hasGlossary = exercise.glossary[clean] !== undefined;

                  return (
                    <span
                      key={tIdx}
                      onClick={() => handleWordClick(clean)}
                      className={`inline-block mx-0.5 px-0.5 rounded cursor-pointer transition select-none ${
                        hasGlossary
                          ? 'border-b-2 border-amber-500 font-medium hover:bg-amber-100 text-slate-900'
                          : 'hover:bg-slate-200/70 hover:text-indigo-900'
                      }`}
                      title="點擊查義與發音"
                    >
                      {token}
                    </span>
                  );
                })}
              </p>
            ))}
          </div>

          {/* Word Popover / Lookup Card */}
          {selectedWord && (
            <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-2 duration-150">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => SpeechService.speak(selectedWord.word, 0.9)}
                  className="p-2 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-lg shadow-sm transition active:scale-95"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-base font-bold text-amber-300">
                      {selectedWord.word}
                    </span>
                    {selectedWord.info?.pos && (
                      <span className="px-2 py-0.5 bg-white/20 text-white rounded text-[10px] font-mono">
                        {selectedWord.info.pos}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-200 mt-0.5">
                    {selectedWord.info?.meaning || '德文詞彙'}
                  </p>
                </div>
              </div>

              {onSaveVocab && (
                <button
                  onClick={() => {
                    const art =
                      selectedWord.info?.pos === 'der' ||
                      selectedWord.info?.pos === 'die' ||
                      selectedWord.info?.pos === 'das'
                        ? (selectedWord.info.pos as 'der' | 'die' | 'das')
                        : undefined;
                    onSaveVocab(
                      selectedWord.word,
                      selectedWord.info?.meaning || '德文單字',
                      art
                    );
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition self-start sm:self-auto ${
                    isWordSaved(selectedWord.word)
                      ? 'bg-emerald-600 hover:bg-red-600 text-white shadow-xs'
                      : 'bg-white/20 hover:bg-white/30 text-white'
                  }`}
                  title={
                    isWordSaved(selectedWord.word)
                      ? '已加入生詞本（點擊可取消收藏）'
                      : '加入生詞本'
                  }
                >
                  {isWordSaved(selectedWord.word) ? (
                    <>
                      <BookmarkCheck className="w-3.5 h-3.5 fill-white" />
                      <span>已在生詞本 (點擊移除)</span>
                    </>
                  ) : (
                    <>
                      <BookmarkPlus className="w-3.5 h-3.5" />
                      <span>加入生詞本</span>
                    </>
                  )}
                </button>
              )}
            </div>
          )}

          {/* Full Translation Drawer */}
          {showTranslation && (
            <div className="mt-4 p-5 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-slate-700 text-sm whitespace-pre-line leading-relaxed animate-in fade-in duration-200">
              <div className="text-xs font-bold text-indigo-900 mb-2 flex items-center space-x-1.5">
                <Eye className="w-3.5 h-3.5" />
                <span>中文對照翻譯</span>
              </div>
              {exercise.translation}
            </div>
          )}
        </div>
      </div>

      {/* Reading Comprehension Questions */}
      {exercise.questions && exercise.questions.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
            <div>
              <h4 className="text-base font-bold text-slate-900">歌德閱讀題型驗證</h4>
              <p className="text-xs text-slate-500">
                仔細比對文本細節，選擇正確答案（每題均為歌德檢定經典題型，預設隱藏中文提示）
              </p>
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
                onSelectOption={(optIdx) =>
                  setSelectedAnswers({
                    ...selectedAnswers,
                    [qIdx]: optIdx,
                  })
                }
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
                檢查閱讀作答
              </button>
            ) : (
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1.5 rounded-lg flex items-center space-x-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>閱讀理解已完成！</span>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
