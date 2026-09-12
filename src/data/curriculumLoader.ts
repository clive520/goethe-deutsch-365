import type { DayLesson } from '../types/curriculum';

// Module loaders for each of the 52 weeks (code-split by Vite into independent chunks)
const weekLoaders: Record<number, () => Promise<Record<string, Record<number, DayLesson>>>> = {
  1: () => import('./lessons/week1'),
  2: () => import('./lessons/week2'),
  3: () => import('./lessons/week3'),
  4: () => import('./lessons/week4'),
  5: () => import('./lessons/week5'),
  6: () => import('./lessons/week6'),
  7: () => import('./lessons/week7'),
  8: () => import('./lessons/week8'),
  9: () => import('./lessons/week9'),
  10: () => import('./lessons/week10'),
  11: () => import('./lessons/week11'),
  12: () => import('./lessons/week12'),
  13: () => import('./lessons/week13'),
  14: () => import('./lessons/week14'),
  15: () => import('./lessons/week15'),
  16: () => import('./lessons/week16'),
  17: () => import('./lessons/week17'),
  18: () => import('./lessons/week18'),
  19: () => import('./lessons/week19'),
  20: () => import('./lessons/week20'),
  21: () => import('./lessons/week21'),
  22: () => import('./lessons/week22'),
  23: () => import('./lessons/week23'),
  24: () => import('./lessons/week24'),
  25: () => import('./lessons/week25'),
  26: () => import('./lessons/week26'),
  27: () => import('./lessons/week27'),
  28: () => import('./lessons/week28'),
  29: () => import('./lessons/week29'),
  30: () => import('./lessons/week30'),
  31: () => import('./lessons/week31'),
  32: () => import('./lessons/week32'),
  33: () => import('./lessons/week33'),
  34: () => import('./lessons/week34'),
  35: () => import('./lessons/week35'),
  36: () => import('./lessons/week36'),
  37: () => import('./lessons/week37'),
  38: () => import('./lessons/week38'),
  39: () => import('./lessons/week39'),
  40: () => import('./lessons/week40'),
  41: () => import('./lessons/week41'),
  42: () => import('./lessons/week42'),
  43: () => import('./lessons/week43'),
  44: () => import('./lessons/week44'),
  45: () => import('./lessons/week45'),
  46: () => import('./lessons/week46'),
  47: () => import('./lessons/week47'),
  48: () => import('./lessons/week48'),
  49: () => import('./lessons/week49'),
  50: () => import('./lessons/week50'),
  51: () => import('./lessons/week51'),
  52: () => import('./lessons/week52'),
};

// In-memory cache of loaded week data
const weekCache: Record<number, Record<number, DayLesson>> = {};

/**
 * Determine which week file a given day belongs to.
 * Days 1-357 are 7 days per week (Weeks 1-51).
 * Days 358-365 (8 days) belong to Week 52.
 */
export function getWeekByDay(dayNumber: number): number {
  const day = Math.max(1, Math.min(dayNumber, 365));
  if (day >= 358) return 52;
  return Math.ceil(day / 7);
}

/**
 * Dynamically loads the full DayLesson for a given day on demand.
 * If the week has already been fetched, returns from memory cache immediately.
 */
export async function loadLessonByDay(dayNumber: number): Promise<DayLesson> {
  const day = Math.max(1, Math.min(dayNumber, 365));
  const week = getWeekByDay(day);

  // Check memory cache
  if (weekCache[week] && weekCache[week][day]) {
    return weekCache[week][day];
  }

  const loader = weekLoaders[week];
  if (!loader) {
    throw new Error(`No loader registered for week ${week}`);
  }

  const mod = await loader();
  // Each week module exports `week${n}Lessons`
  const exportKey = Object.keys(mod).find((k) => k.startsWith('week') && k.endsWith('Lessons')) || Object.keys(mod)[0];
  const lessons = mod[exportKey];

  if (!lessons || typeof lessons !== 'object') {
    throw new Error(`Failed to parse lesson data from week ${week}`);
  }

  weekCache[week] = lessons;

  const lesson = lessons[day];
  if (!lesson) {
    throw new Error(`Lesson for day ${day} not found in week ${week}`);
  }

  return lesson;
}

/**
 * Synchronously checks if a lesson is already in cache.
 */
export function getCachedLessonByDay(dayNumber: number): DayLesson | null {
  const day = Math.max(1, Math.min(dayNumber, 365));
  const week = getWeekByDay(day);
  return weekCache[week]?.[day] || null;
}
