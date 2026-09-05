import React, { useState } from 'react';
import {
  BookmarkCheck,
  Volume2,
  Trash2,
  Sparkles,
  RotateCw,
  Search,
  CheckCircle,
} from 'lucide-react';
import { SpeechService } from '../services/speechService';
import type { UserProgress } from '../types/curriculum';

interface WordCard {
  id: string;
  word: string;
  article?: 'der' | 'die' | 'das';
  meaning: string;
  example?: string;
  exampleTr?: string;
}

const DEFAULT_GOETHE_VOCAB: WordCard[] = [
  { id: 'gw1', word: 'Guten Tag', meaning: '你好、日安 (正式問候)', example: 'Guten Tag, Herr Müller!' },
  { id: 'gw2', word: 'das Buch', article: 'das', meaning: '書本 (複數: die Bücher)', example: 'Das Buch ist sehr nützlich.' },
  { id: 'gw3', word: 'die Sprache', article: 'die', meaning: '語言 (複數: die Sprachen)', example: 'Deutsch ist eine logische Sprache.' },
  { id: 'gw4', word: 'der Kaffee', article: 'der', meaning: '咖啡', example: 'Ich möchte bitte einen Kaffee.' },
  { id: 'gw5', word: 'die Vorbereitung', article: 'die', meaning: '準備、複習 (歌德檢定)', example: 'Gute Vorbereitung bringt Erfolg.' },
  { id: 'gw6', word: 'das Zertifikat', article: 'das', meaning: '證書、檢定證明', example: 'Ich lerne für das Goethe-Zertifikat.' },
  { id: 'gw7', word: 'der Bahnhof', article: 'der', meaning: '火車站', example: 'Der Zug fährt am Hauptbahnhof ab.' },
  { id: 'gw8', word: 'die Fahrkarte', article: 'die', meaning: '車票', example: 'Bitte zeigen Sie Ihre Fahrkarte.' },
];

interface Props {
  user: UserProgress | null;
  savedWordsList: WordCard[];
  onRemoveWord?: (wordId: string) => void;
}

export const VocabularyNotebook: React.FC<Props> = ({
  user,
  savedWordsList = [],
  onRemoveWord,
}) => {
  const [viewMode, setViewMode] = useState<'flashcard' | 'list'>('flashcard');
  const [cardIndex, setCardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  // Combine default sample words with user saved words
  const allVocab: WordCard[] = [
    ...savedWordsList,
    ...DEFAULT_GOETHE_VOCAB.filter((dv) => !savedWordsList.some((sv) => sv.word === dv.word)),
  ];

  const filteredVocab = allVocab.filter(
    (v) =>
      v.word.toLowerCase().includes(search.toLowerCase()) ||
      v.meaning.toLowerCase().includes(search.toLowerCase())
  );

  const currentCard = filteredVocab[cardIndex] || filteredVocab[0];

  const handleNextCard = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev + 1) % Math.max(1, filteredVocab.length));
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev - 1 + filteredVocab.length) % Math.max(1, filteredVocab.length));
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
            共累積 {filteredVocab.length} 個德語檢定高頻詞彙，透過正反面翻卡機制加深大腦突觸連結
          </p>
        </div>

        {/* View Toggle */}
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
      </div>

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

      {/* Flashcard Mode */}
      {viewMode === 'flashcard' && currentCard && (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 px-2">
            <span>單字卡 {cardIndex + 1} / {filteredVocab.length}</span>
            <span>點擊卡片任何位置即可翻轉</span>
          </div>

          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full min-h-[300px] sm:min-h-[340px] bg-white rounded-3xl border-2 border-slate-200 hover:border-indigo-400 shadow-md p-8 flex flex-col justify-between items-center text-center cursor-pointer transition-all duration-300 group select-none hover:shadow-xl"
          >
            <div className="w-full flex justify-between items-center text-xs text-slate-400">
              <span className="font-mono">
                {currentCard.article ? `冠詞：${currentCard.article}` : '德語詞彙'}
              </span>
              <span className="flex items-center space-x-1 text-indigo-600 font-semibold group-hover:underline">
                <RotateCw className="w-3.5 h-3.5" />
                <span>翻轉卡片</span>
              </span>
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
                key={item.id}
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
                      <p className="text-xs text-slate-400 italic mt-0.5">{item.example}</p>
                    )}
                  </div>
                </div>

                {onRemoveWord && (
                  <button
                    onClick={() => onRemoveWord(item.id)}
                    className="text-slate-300 hover:text-red-500 p-2 transition"
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
    </div>
  );
};
