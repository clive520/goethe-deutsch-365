import type { CefrLevel, DayLesson } from '../types/curriculum';
import { getDaySummary, DAY_MANIFEST } from './curriculumManifest';
import { loadLessonByDay, getCachedLessonByDay, getWeekByDay } from './curriculumLoader';

export interface StageMetadata {
  id: CefrLevel;
  name: string;
  germanName: string;
  daysRange: string;
  startDay: number;
  endDay: number;
  color: string;
  badgeBg: string;
  accentBorder: string;
  description: string;
  goetheTarget: string;
}

export const STAGES: StageMetadata[] = [
  {
    id: 'A1',
    name: 'A1 基礎啟蒙',
    germanName: 'Grundstufe A1 (Start Deutsch 1)',
    daysRange: 'Day 1 - 75',
    startDay: 1,
    endDay: 75,
    color: 'from-emerald-500 to-teal-600',
    badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    accentBorder: 'border-emerald-500',
    description: '掌握德語發音規律、日常招呼、基本自我介紹、購物問路與三大性別基礎句型。',
    goetheTarget: '達標 Goethe-Zertifikat A1：能理解日常簡短對話與告示牌，進行基礎溝通。',
  },
  {
    id: 'A2',
    name: 'A2 日常深化',
    germanName: 'Aufbaustufe A2',
    daysRange: 'Day 76 - 180',
    startDay: 76,
    endDay: 180,
    color: 'from-blue-500 to-indigo-600',
    badgeBg: 'bg-blue-100 text-blue-800 border-blue-300',
    accentBorder: 'border-blue-500',
    description: '日常生活、就醫租屋、工作旅行情境，第三格（Dativ）、分離動詞、過去完成式與介系詞。',
    goetheTarget: '達標 Goethe-Zertifikat A2：能就直接相關領域（個人、家庭、購物、近郊）描述與協商。',
  },
  {
    id: 'B1',
    name: 'B1 核心突破',
    germanName: 'Mittelstufe B1 (Zertifikat Deutsch)',
    daysRange: 'Day 181 - 300',
    startDay: 181,
    endDay: 300,
    color: 'from-amber-500 to-orange-600',
    badgeBg: 'bg-amber-100 text-amber-800 border-amber-300',
    accentBorder: 'border-amber-500',
    description: '主從子句、虛擬二式、被動態、社會議題陳述與歌德檢定重點論證邏輯。',
    goetheTarget: '達標 Goethe-Zertifikat B1：具備獨立德語使用能力，達到德國留學與工作簽證標準。',
  },
  {
    id: 'EXAM',
    name: '歌德全真模擬衝刺',
    germanName: 'Goethe Prüfungstraining',
    daysRange: 'Day 301 - 365',
    startDay: 301,
    endDay: 365,
    color: 'from-rose-500 to-purple-600',
    badgeBg: 'bg-rose-100 text-rose-800 border-rose-300',
    accentBorder: 'border-rose-500',
    description: '聽、說、讀、寫四大模組計時刷題、答題陷阱規避、口說考官互動全套演練。',
    goetheTarget: '實戰奪高分：掌握應試心理與技巧，穩操勝券通過官方歌德各項模組認證。',
  },
];

// Re-export loaders & manifest
export { loadLessonByDay, getCachedLessonByDay, getWeekByDay } from './curriculumLoader';
export { getDaySummary, DAY_MANIFEST } from './curriculumManifest';

/**
 * Synchronous getLessonByDay helper for backward compatibility.
 * Returns cached full lesson if already loaded, or a lightweight fallback placeholder.
 */
export function getLessonByDay(dayNumber: number): DayLesson {
  const day = Math.max(1, Math.min(dayNumber, 365));
  const cached = getCachedLessonByDay(day);
  if (cached) return cached;

  const summary = getDaySummary(day);
  return {
    day: summary.day,
    stage: summary.stage,
    week: summary.week,
    dayOfWeek: summary.dayOfWeek,
    title: summary.title,
    germanTitle: summary.germanTitle,
    theme: summary.theme,
    estimatedMinutes: summary.estimatedMinutes,
    grammar: {
      title: summary.title,
      explanation: '教案內容動態載入中...',
      ruleExample: [],
    },
    vocabulary: [],
    listening: {
      title: summary.title,
      dialogue: [],
    },
    speaking: {
      title: summary.title,
      targetSentences: [],
    },
    reading: {
      title: summary.title,
      documentType: 'Lektion',
      content: '',
      glossary: {},
      questions: [],
    },
  };
}
