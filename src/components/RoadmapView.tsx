import React, { useState } from 'react';
import {
  CheckCircle2,
  Lock,
  Sparkles,
  Flame,
  Award,
  Search,
  BookOpen,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import { STAGES, getLessonByDay } from '../data/curriculumData';
import type { CefrLevel, UserProgress } from '../types/curriculum';

interface Props {
  user: UserProgress | null;
  onSelectDay: (day: number) => void;
}

export const RoadmapView: React.FC<Props> = ({ user, onSelectDay }) => {
  const [selectedStage, setSelectedStage] = useState<CefrLevel | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const completedDays = user?.completedDays || [];
  const currentDay = user?.currentDay || 1;

  // Total 365 days
  const allDayNumbers = Array.from({ length: 365 }, (_, i) => i + 1);

  const filteredDays = allDayNumbers.filter((day) => {
    // Filter stage
    if (selectedStage !== 'ALL') {
      const stageMeta = STAGES.find((s) => s.id === selectedStage);
      if (stageMeta && (day < stageMeta.startDay || day > stageMeta.endDay)) {
        return false;
      }
    }

    // Filter search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const lesson = getLessonByDay(day);
      const matchesDay = day.toString() === q || `day ${day}`.includes(q);
      const matchesTitle = lesson.title.toLowerCase().includes(q) || lesson.germanTitle.toLowerCase().includes(q);
      return matchesDay || matchesTitle;
    }

    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Hero Header Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white p-8 sm:p-12 shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>一年 365 天循序漸進 • 歌德檢定直通車</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            從零基礎到通過 <span className="text-amber-400">歌德德語檢定</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            我們為您規劃好整整 365 天的學習節奏，每天只需專注 20 分鐘完成「聽、說、讀」三大體驗與實戰測驗，系統會全程記錄您的學習軌跡，伴您穩健拿到德語檢定證書！
          </p>

          {/* Quick Continue Today's Mission Button */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onSelectDay(currentDay)}
              className="px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-extrabold text-sm rounded-2xl shadow-lg transition active:scale-95 flex items-center space-x-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>進入今日課程：Day {currentDay}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-4 text-xs font-semibold text-slate-300 bg-white/10 px-4 py-3 rounded-2xl backdrop-blur-xs">
              <span className="flex items-center text-amber-300">
                <Flame className="w-4 h-4 mr-1 fill-amber-400 text-amber-400" />
                連續打卡：{user?.streak || 0} 天
              </span>
              <span className="w-1 h-3 bg-white/20"></span>
              <span className="flex items-center text-emerald-300">
                <CheckCircle2 className="w-4 h-4 mr-1" />
                已攻克：{completedDays.length} / 365 天
              </span>
            </div>
          </div>
        </div>

        {/* Subtle Background Glow */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* 4 CEFR Stage Cards Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STAGES.map((stage) => {
          const isSelected = selectedStage === stage.id;
          const stageDays = allDayNumbers.filter(
            (d) => d >= stage.startDay && d <= stage.endDay
          );
          const stageCompleted = stageDays.filter((d) => completedDays.includes(d)).length;
          const percent = Math.round((stageCompleted / stageDays.length) * 100);

          return (
            <div
              key={stage.id}
              onClick={() => setSelectedStage(isSelected ? 'ALL' : stage.id)}
              className={`p-5 rounded-3xl border transition cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-white border-indigo-600 ring-2 ring-indigo-500/20 shadow-md'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold border ${stage.badgeBg}`}>
                    {stage.daysRange}
                  </span>
                  <span className="text-xs font-bold text-slate-400">{stage.id}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900">{stage.name}</h3>
                <p className="text-xs text-slate-500 line-clamp-2 mt-1">{stage.description}</p>
              </div>

              {/* Progress Bar for this stage */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <div className="flex justify-between text-[11px] font-semibold text-slate-500 mb-1">
                  <span>進度</span>
                  <span className="text-indigo-600">{stageCompleted} / {stageDays.length} 天 ({percent}%)</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-indigo-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Stage Pills */}
        <div className="flex flex-wrap items-center gap-1.5 self-start sm:self-auto">
          <button
            onClick={() => setSelectedStage('ALL')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              selectedStage === 'ALL'
                ? 'bg-slate-950 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            全部 365 天
          </button>
          {STAGES.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedStage(s.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                selectedStage === s.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {s.id} 階段 ({s.daysRange})
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜尋天數或課次關鍵字..."
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* 365 Days Grid Map */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <span>365 天學習歷程地圖</span>
            <span className="text-xs font-normal text-slate-500">
              （顯示 {filteredDays.length} 個課次）
            </span>
          </h2>
          <span className="text-xs text-slate-400">點擊任意天數即可進入學習</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3">
          {filteredDays.map((day) => {
            const isFinished = completedDays.includes(day);
            const isToday = day === currentDay;
            const lesson = getLessonByDay(day);

            let cardStyle =
              'bg-white border-slate-200 hover:border-slate-400 hover:shadow-md';
            if (isFinished) {
              cardStyle =
                'bg-emerald-50/70 border-emerald-300 hover:border-emerald-400 text-emerald-950 shadow-2xs';
            } else if (isToday) {
              cardStyle =
                'bg-indigo-50/80 border-indigo-500 ring-2 ring-indigo-500/30 text-indigo-950 shadow-md';
            }

            return (
              <div
                key={day}
                onClick={() => onSelectDay(day)}
                className={`p-3.5 rounded-2xl border transition cursor-pointer flex flex-col justify-between h-32 group ${cardStyle}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-black px-2 py-0.5 rounded-md ${
                        isFinished
                          ? 'bg-emerald-200/80 text-emerald-900'
                          : isToday
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      Day {day}
                    </span>

                    {isFinished ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    ) : isToday ? (
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                      </span>
                    ) : null}
                  </div>

                  <p className="text-xs font-bold text-slate-800 line-clamp-2 mt-2 leading-tight group-hover:text-indigo-600 transition">
                    {lesson.title.replace(`Day ${day}: `, '')}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-100">
                  <span className="font-semibold">{lesson.stage}</span>
                  <span>W{lesson.week}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
