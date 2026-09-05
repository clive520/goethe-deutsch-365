import React, { useState } from 'react';
import { CheckCircle2, XCircle, HelpCircle, Languages, Eye, EyeOff } from 'lucide-react';
import type { QuizQuestion } from '../types/curriculum';
import { parseGermanWithChineseHint } from '../utils/textParser';

interface Props {
  q: QuizQuestion;
  qIdx: number;
  selectedOption: number | undefined;
  onSelectOption: (optionIndex: number) => void;
  showResults: boolean;
  globalShowChinese: boolean;
  disabled?: boolean;
}

export const QuizQuestionCard: React.FC<Props> = ({
  q,
  qIdx,
  selectedOption,
  onSelectOption,
  showResults,
  globalShowChinese,
  disabled = false,
}) => {
  const [localShowChinese, setLocalShowChinese] = useState<boolean>(false);

  const shouldShowChinese = globalShowChinese || localShowChinese;
  const qParsed = parseGermanWithChineseHint(q.question);
  const isAnswered = selectedOption !== undefined;
  const isCorrect = isAnswered && selectedOption === q.correctIndex;

  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90 space-y-3.5 transition-all">
      {/* Question Title & Per-Question Chinese Toggle */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start space-x-2.5">
          <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
            {qIdx + 1}
          </span>
          <div>
            <h5 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
              {qParsed.de}
            </h5>
            {shouldShowChinese && qParsed.zh && (
              <p className="text-xs text-indigo-700 font-medium mt-1 bg-indigo-50/80 px-2 py-0.5 rounded-md inline-block border border-indigo-100 animate-in fade-in duration-150">
                {qParsed.zh}
              </p>
            )}
          </div>
        </div>

        {/* Per-Question Chinese Hint Button (if question or options have Chinese hints) */}
        {!globalShowChinese && (
          <button
            type="button"
            onClick={() => setLocalShowChinese(!localShowChinese)}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition shrink-0 flex items-center space-x-1 cursor-pointer border ${
              localShowChinese
                ? 'bg-indigo-100 text-indigo-800 border-indigo-200'
                : 'bg-white hover:bg-slate-100 text-slate-600 border-slate-200 shadow-2xs'
            }`}
            title="點擊切換本題的中文提示"
          >
            <Languages className="w-3.5 h-3.5" />
            <span>{localShowChinese ? '隱藏中文' : '中文提示'}</span>
          </button>
        )}
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pl-0 sm:pl-8">
        {q.options.map((opt, optIdx) => {
          const optParsed = parseGermanWithChineseHint(opt);
          const isOptionSelected = selectedOption === optIdx;
          let btnStyle = 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50';

          if (showResults) {
            if (optIdx === q.correctIndex) {
              btnStyle =
                'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold ring-1 ring-emerald-400';
            } else if (isOptionSelected && !isCorrect) {
              btnStyle = 'bg-rose-50 border-rose-400 text-rose-950 ring-1 ring-rose-400';
            }
          } else if (isOptionSelected) {
            btnStyle =
              'bg-indigo-50 border-indigo-500 text-indigo-950 font-bold ring-1 ring-indigo-500 shadow-2xs';
          }

          return (
            <button
              key={optIdx}
              type="button"
              disabled={disabled || showResults}
              onClick={() => onSelectOption(optIdx)}
              className={`p-3 text-left text-xs sm:text-sm rounded-xl border transition flex items-center justify-between cursor-pointer disabled:cursor-default ${btnStyle}`}
            >
              <div className="flex flex-col">
                <span className="font-semibold text-slate-900">{optParsed.de}</span>
                {shouldShowChinese && optParsed.zh && (
                  <span className="text-[11px] text-slate-500 font-normal mt-0.5">
                    ({optParsed.zh})
                  </span>
                )}
              </div>

              {showResults && optIdx === q.correctIndex && (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
              )}
              {showResults && isOptionSelected && !isCorrect && (
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 ml-2" />
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation when checked */}
      {showResults && q.explanation && (
        <div
          className={`ml-0 sm:ml-8 p-3.5 rounded-xl text-xs flex items-start space-x-2 border ${
            isCorrect
              ? 'bg-emerald-50/80 text-emerald-900 border-emerald-200'
              : 'bg-slate-100 text-slate-700 border-slate-200'
          }`}
        >
          <HelpCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <div>
            <strong>解析：</strong> {q.explanation}
          </div>
        </div>
      )}
    </div>
  );
};
