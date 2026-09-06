import React, { useState } from 'react';
import {
  BookmarkCheck,
  Volume2,
  Trash2,
  RotateCw,
  Search,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import { SpeechService } from '../services/speechService';
import type { UserProgress, SavedWordCard } from '../types/curriculum';

interface Props {
  user: UserProgress | null;
  savedWordsList: SavedWordCard[];
  onRemoveWord?: (wordIdOrWord: string) => void;
  onNavigateToLesson?: () => void;
}

export const VocabularyNotebook: React.FC<Props> = ({
  user: _user,
  savedWordsList = [],
  onRemoveWord,
  onNavigateToLesson,
}) => {
  const [viewMode, setViewMode] = useState<'flashcard' | 'list'>('flashcard');
  const [cardIndex, setCardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  // Use only user saved words
  const allVocab: SavedWordCard[] = savedWordsList;

  const filteredVocab = allVocab.filter(
    (v) =>
      v.word.toLowerCase().includes(search.toLowerCase()) ||
      v.meaning.toLowerCase().includes(search.toLowerCase())
  );

  const safeIndex = Math.min(cardIndex, Math.max(0, filteredVocab.length - 1));
  const currentCard = filteredVocab[safeIndex];

  const handleNextCard = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev + 1) % Math.max(1, filteredVocab.length));
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev - 1 + filteredVocab.length) % Math.max(1, filteredVocab.length));
  };

  const handleDeleteCard = (card: SavedWordCard, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (onRemoveWord) {
      onRemoveWord(card.id || card.word);
      if (cardIndex >= filteredVocab.length - 1) {
        setCardIndex(Math.max(0, filteredVocab.length - 2));
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-xs font-bold mb-2">
            <BookmarkCheck className="w-3.5 h-3.5" />
            <span>個人生詞本庫 (Wortschatz-Kasten)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            艾賓浩斯單字複習卡
          </h2>
          <p className="text-xs sm:text-sm text-indigo-200 mt-1">
            共收藏 {allVocab.length} 個專屬單字，透過正反面翻卡機制加深記憶連結
          </p>
        </div>

        {/* View Toggle */}
        {allVocab.length > 0 && (
          <div className="flex items-center space-x-2 bg-white/10 p-1.5 rounded-2xl backdrop-blur-xs self-start sm:self-auto">
            <button
              onClick={() => setViewMode('flashcard')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                viewMode === 'flashcard' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
            >
              翻轉抽認卡
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                viewMode === 'list' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
            >
              列表檢視
            </button>
          </div>
        )}
      </div>

      {/* Empty State when no words saved */}
      {allVocab.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-5 shadow-xs">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto shadow-inner">
            <BookOpen className="w-8 h-8" />
          </div>
          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="text-xl font-bold text-slate-900">生詞本目前空空如也</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              在每日課程的「今日核心詞彙」或「閱讀練習」中，點擊單字旁的書籤圖示即可將重要生詞加入個人生詞本！
            </p>
          </div>
          {onNavigateToLesson && (
            <button
              onClick={onNavigateToLesson}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-xs transition"
            >
              <Sparkles className="w-4 h-4" />
              <span>前往今日課程學習</span>
            </button>
          )}
        </div>
      ) : (
        <>
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCardIndex(0);
              }}
              placeholder="搜尋德語單字或中文釋義..."
              className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 shadow-2xs"
            />
          </div>

          {filteredVocab.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-10 text-center text-slate-500 text-sm">
              沒有找到符合「{search}」的收藏單字。
            </div>
          ) : (
            <>
              {/* Flashcard Mode */}
              {viewMode === 'flashcard' && currentCard && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 px-2">
                    <span>單字卡 {safeIndex + 1} / {filteredVocab.length}</span>
                    <span>點擊卡片任何位置即可翻轉</span>
                  </div>

                  <div
                    onClick={() => setIsFlipped(!isFlipped)}
                    className="w-full min-h-[300px] sm:min-h-[340px] bg-white rounded-3xl border-2 border-slate-200 hover:border-indigo-400 shadow-md p-8 flex flex-col justify-between items-center text-center cursor-pointer transition-all duration-300 group select-none hover:shadow-xl relative"
                  >
                    <div className="w-full flex justify-between items-center text-xs text-slate-400">
                      <span className="font-mono">
                        {currentCard.article ? `冠詞：${currentCard.article}` : '德語詞彙'}
                      </span>
                      <div className="flex items-center space-x-3">
                        <span className="flex items-center space-x-1 text-indigo-600 font-semibold group-hover:underline">
                          <RotateCw className="w-3.5 h-3.5" />
                          <span>翻轉卡片</span>
                        </span>
                        {onRemoveWord && (
                          <button
                            type="button"
                            onClick={(e) => handleDeleteCard(currentCard, e)}
                            className="p-1 text-slate-300 hover:text-red-500 transition rounded-lg hover:bg-red-50"
                            title="從生詞本移除"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Front & Back Content */}
                    <div className="my-auto space-y-3">
                      {!isFlipped ? (
                        <>
                          <div className="flex items-center justify-center space-x-3">
                            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-wide">
                              {currentCard.article && (
                                <span className="text-indigo-600 mr-2 font-normal">
                                  {currentCard.article}
                                </span>
                              )}
                              {currentCard.word}
                            </h3>
                          </div>
                          <p className="text-xs text-slate-400 mt-2">（點擊卡片查看中文釋義與例句）</p>
                        </>
                      ) : (
                        <div className="space-y-3 animate-in fade-in zoom-in-95 duration-150">
                          <h4 className="text-2xl sm:text-3xl font-bold text-indigo-950">
                            {currentCard.meaning}
                          </h4>
                          {currentCard.example && (
                            <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 max-w-lg mx-auto">
                              <p className="text-sm font-semibold text-slate-800 italic">
                                {currentCard.example}
                              </p>
                              {currentCard.exampleTr && (
                                <p className="text-xs text-slate-500 mt-1">
                                  {currentCard.exampleTr}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Bottom actions */}
                    <div className="w-full flex justify-between items-center pt-4 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          SpeechService.speak(
                            `${currentCard.article || ''} ${currentCard.word}`.trim()
                          );
                        }}
                        className="p-2.5 rounded-xl bg-slate-100 hover:bg-indigo-100 text-slate-700 hover:text-indigo-700 transition"
                        title="聆聽德語標準發音"
                      >
                        <Volume2 className="w-5 h-5" />
                      </button>

                      <div className="flex space-x-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePrevCard();
                          }}
                          className="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 hover:bg-slate-100 transition"
                        >
                          上一張
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNextCard();
                          }}
                          className="px-5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition"
                        >
                          下一張 →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* List Mode */}
              {viewMode === 'list' && (
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
                  <div className="divide-y divide-slate-100">
                    {filteredVocab.map((item) => (
                      <div
                        key={item.id || item.word}
                        className="p-4 sm:p-5 flex items-center justify-between hover:bg-slate-50/70 transition"
                      >
                        <div className="flex items-center space-x-4">
                          <button
                            onClick={() =>
                              SpeechService.speak(
                                `${item.article || ''} ${item.word}`.trim()
                              )
                            }
                            className="p-2 rounded-xl bg-slate-100 hover:bg-indigo-100 text-slate-600 hover:text-indigo-600 transition shrink-0"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                          <div>
                            <div className="flex items-center space-x-2">
                              {item.article && (
                                <span className="text-xs font-bold text-indigo-600 font-mono">
                                  {item.article}
                                </span>
                              )}
                              <span className="text-base font-bold text-slate-900">{item.word}</span>
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5">{item.meaning}</p>
                            {item.example && (
                              <p className="text-xs text-slate-400 italic mt-0.5">
                                {item.example}
                                {item.exampleTr && (
                                  <span className="ml-1.5 not-italic text-slate-400">
                                    ({item.exampleTr})
                                  </span>
                                )}
                              </p>
                            )}
                          </div>
                        </div>

                        {onRemoveWord && (
                          <button
                            onClick={() => onRemoveWord(item.id || item.word)}
                            className="text-slate-300 hover:text-red-500 p-2 transition rounded-lg hover:bg-red-50"
                            title="移除單字"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};
