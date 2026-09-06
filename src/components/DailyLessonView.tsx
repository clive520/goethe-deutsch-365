import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  BookOpen,
  Volume2,
  Mic,
  FileCheck,
  ChevronLeft,
  ChevronRight,
  Clock,
  Award,
  Sparkles,
  CheckCircle2,
  BookmarkPlus,
  HelpCircle,
  Lightbulb,
  Languages,
} from 'lucide-react';
import type { DayLesson, UserProgress } from '../types/curriculum';
import { ListeningModule } from './ListeningModule';
import { SpeakingModule } from './SpeakingModule';
import { ReadingModule } from './ReadingModule';
import { SpeechService } from '../services/speechService';
import { QuizQuestionCard } from './QuizQuestionCard';
import { GrammarExplanationView } from './GrammarExplanationView';

interface Props {
  lesson: DayLesson;
  onSelectDay: (day: number) => void;
  user: UserProgress | null;
  onCompleteDay: (day: number, score: number) => void;
  onSaveVocab: (word: string, meaning: string, article?: 'der' | 'die' | 'das') => void;
}

type TabType = 'overview' | 'listening' | 'speaking' | 'reading' | 'quiz';

export const DailyLessonView: React.FC<Props> = ({
  lesson,
  onSelectDay,
  user,
  onCompleteDay,
  onSaveVocab,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [showQuizChineseHint, setShowQuizChineseHint] = useState<boolean>(false);

  const switchTab = (newTab: TabType) => {
    SpeechService.stopSpeaking();
    setActiveTab(newTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isCompleted = user?.completedDays?.includes(lesson.day) || false;

  // Aggregate questions for final quiz
  const allQuestions = [
    ...lesson.listening.questions,
    ...lesson.reading.questions,
  ];

  const handleFinishDay = () => {
    // Calculate quiz score
    let correctCount = 0;
    allQuestions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correctIndex) {
        correctCount++;
      }
    });

    const score = allQuestions.length > 0 ? Math.round((correctCount / allQuestions.length) * 100) : 100;
    setQuizSubmitted(true);

    // Trigger fireworks
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#10b981', '#6366f1', '#f59e0b', '#ec4899'],
      });
    } catch {
      // ignore
    }

    onCompleteDay(lesson.day, score);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* Top Header Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-slate-950 text-amber-300 text-xs font-bold rounded-full tracking-wider">
                DAY {lesson.day} / 365
              </span>
              <span className="px-2.5 py-0.5 bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-semibold rounded-full">
                第 {lesson.week} 週 • {lesson.stage} 階段
              </span>
              <span className="flex items-center text-xs text-slate-500 font-medium">
                <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
                預計學習 {lesson.estimatedMinutes} 分鐘
              </span>
              {isCompleted && (
                <span className="flex items-center space-x-1 px-2.5 py-0.5 bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>今日已結業打卡</span>
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {lesson.title}
            </h1>
            <p className="text-sm font-semibold text-slate-500 mt-1 italic">
              {lesson.germanTitle}
            </p>
          </div>

          {/* Day Navigation */}
          <div className="flex items-center space-x-2 self-start md:self-auto">
            <button
              onClick={() => onSelectDay(Math.max(1, lesson.day - 1))}
              disabled={lesson.day <= 1}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
              title="上一天"
            >
              <ChevronLeft className="w-5 h-5 text-slate-700" />
            </button>

            <div className="px-3 py-1 bg-slate-100 rounded-xl text-xs font-bold text-slate-700">
              第 {lesson.day} 天
            </div>

            <button
              onClick={() => onSelectDay(Math.min(365, lesson.day + 1))}
              disabled={lesson.day >= 365}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
              title="下一天"
            >
              <ChevronRight className="w-5 h-5 text-slate-700" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-slate-200 pb-1">
          <button
            onClick={() => switchTab('overview')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'overview'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>課程導讀與文法</span>
          </button>

          <button
            onClick={() => switchTab('listening')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'listening'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Volume2 className="w-4 h-4" />
            <span>聽力 (Hören)</span>
          </button>

          <button
            onClick={() => switchTab('speaking')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'speaking'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Mic className="w-4 h-4" />
            <span>口說 (Sprechen)</span>
          </button>

          <button
            onClick={() => switchTab('reading')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'reading'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <FileCheck className="w-4 h-4" />
            <span>閱讀 (Lesen)</span>
          </button>

          <button
            onClick={() => switchTab('quiz')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
              activeTab === 'quiz'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>每日驗收 (Quiz)</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Overview & Grammar */}
      {activeTab === 'overview' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Grammar Focus Card */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  文法焦點 (Grammatik im Fokus)
                </span>
                <h3 className="text-xl font-bold text-slate-900">{lesson.grammar.title}</h3>
              </div>
            </div>

            <GrammarExplanationView explanation={lesson.grammar.explanation} />

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                例句解析與結構示範
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {lesson.grammar.ruleExample.map((ex, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start justify-between group hover:border-indigo-200 transition"
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="font-bold text-slate-900 text-base">{ex.de}</p>
                        <button
                          onClick={() => SpeechService.speak(ex.de)}
                          className="p-1 text-slate-400 hover:text-indigo-600 transition"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-sm text-slate-600 mt-1">{ex.zh}</p>
                      {ex.note && (
                        <span className="inline-block mt-2 px-2 py-0.5 bg-indigo-100 text-indigo-800 text-[11px] font-mono rounded">
                          {ex.note}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Today's Key Vocabulary */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  今日歌德核心詞彙 (Wortschatz)
                </h3>
                <p className="text-xs text-slate-500">掌握今日高頻生詞，點擊即可聆聽或加入個人詞庫</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {lesson.vocabulary.map((voc) => (
                <div
                  key={voc.id}
                  className="p-4 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-300 hover:shadow-sm transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-slate-900">{voc.word}</span>
                      <button
                        onClick={() => SpeechService.speak(voc.word)}
                        className="p-1.5 rounded-lg bg-slate-200 hover:bg-indigo-100 text-slate-600 hover:text-indigo-600 transition"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-xs text-slate-600 font-medium mt-1">{voc.meaning}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                    <p className="text-[11px] text-slate-500 italic truncate max-w-[160px]">
                      {voc.example}
                    </p>
                    <button
                      onClick={() => onSaveVocab(voc.word, voc.meaning, voc.article)}
                      className="text-indigo-600 hover:text-indigo-800 p-1"
                      title="收藏至生詞本"
                    >
                      <BookmarkPlus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Exam Tip Card */}
          {lesson.examTip && (
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl border border-amber-200 p-6 flex items-start space-x-4">
              <div className="p-3 bg-amber-500 text-white rounded-2xl shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wide">
                  歌德檢定應試錦囊 • {lesson.examTip.skill}
                </span>
                <h4 className="font-bold text-slate-900 text-base mt-0.5">
                  {lesson.examTip.title}
                </h4>
                <p className="text-sm text-slate-700 mt-1 leading-relaxed whitespace-pre-line">
                  {lesson.examTip.content}
                </p>
              </div>
            </div>
          )}

          {/* Next Step Action Button */}
          <div className="flex justify-end pt-2">
            <button
              onClick={() => switchTab('listening')}
              className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition flex items-center space-x-2"
            >
              <span>前往第一步：聽力訓練 (Hören)</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: Listening */}
      {activeTab === 'listening' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <ListeningModule exercise={lesson.listening} />
          <div className="flex justify-between items-center pt-4">
            <button
              onClick={() => switchTab('overview')}
              className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 font-medium"
            >
              ← 返回文法焦點
            </button>
            <button
              onClick={() => switchTab('speaking')}
              className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition flex items-center space-x-2"
            >
              <span>前往第二步：口說練習 (Sprechen)</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 3: Speaking */}
      {activeTab === 'speaking' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <SpeakingModule exercise={lesson.speaking} />
          <div className="flex justify-between items-center pt-4">
            <button
              onClick={() => switchTab('listening')}
              className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 font-medium"
            >
              ← 返回聽力訓練
            </button>
            <button
              onClick={() => switchTab('reading')}
              className="px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition flex items-center space-x-2"
            >
              <span>前往第三步：閱讀理解 (Lesen)</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 4: Reading */}
      {activeTab === 'reading' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <ReadingModule
            exercise={lesson.reading}
            onSaveVocab={onSaveVocab}
            savedWords={user?.savedVocabIds || []}
          />
          <div className="flex justify-between items-center pt-4">
            <button
              onClick={() => switchTab('speaking')}
              className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 font-medium"
            >
              ← 返回口說練習
            </button>
            <button
              onClick={() => switchTab('quiz')}
              className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition flex items-center space-x-2"
            >
              <span>最後一步：完成每日驗收 (Quiz)</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 5: Daily Quiz & Completion */}
      {activeTab === 'quiz' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-indigo-600 text-white rounded-2xl">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Day {lesson.day} 學習總驗收與打卡
                  </h3>
                  <p className="text-xs text-slate-500">
                    回答今日精選題型，確認吸收成效，並記錄今日打卡！（預設隱藏中文提示）
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowQuizChineseHint(!showQuizChineseHint)}
                className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition cursor-pointer self-start sm:self-auto ${
                  showQuizChineseHint
                    ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
                    : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-600 shadow-2xs'
                }`}
                title="切換所有驗收題目與選項的中文提示"
              >
                <Languages className="w-4 h-4" />
                <span>{showQuizChineseHint ? '隱藏中文提示' : '顯示中文提示'}</span>
              </button>
            </div>

            <div className="space-y-4">
              {allQuestions.map((q, idx) => (
                <QuizQuestionCard
                  key={q.id || idx}
                  q={q}
                  qIdx={idx}
                  selectedOption={quizAnswers[idx]}
                  onSelectOption={(optIdx) => {
                    if (!quizSubmitted) {
                      setQuizAnswers({ ...quizAnswers, [idx]: optIdx });
                    }
                  }}
                  showResults={quizSubmitted}
                  globalShowChinese={showQuizChineseHint}
                  disabled={quizSubmitted}
                />
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                已作答 {Object.keys(quizAnswers).length} / {allQuestions.length} 題
              </div>

              {!quizSubmitted ? (
                <button
                  onClick={handleFinishDay}
                  disabled={Object.keys(quizAnswers).length === 0}
                  className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-700 hover:to-emerald-700 text-white font-extrabold text-sm rounded-2xl shadow-lg transition active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>提交測驗並完成 Day {lesson.day} 打卡！</span>
                </button>
              ) : (
                <div className="flex items-center space-x-3">
                  <span className="px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-extrabold rounded-xl flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>恭喜完成！進度與打卡已自動同步</span>
                  </span>
                  <button
                    onClick={() => onSelectDay(Math.min(365, lesson.day + 1))}
                    className="px-5 py-2 rounded-xl bg-slate-950 text-white text-xs font-bold hover:bg-slate-800 transition"
                  >
                    前往 Day {lesson.day + 1} →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
