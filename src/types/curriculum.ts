export type CefrLevel = 'A1' | 'A2' | 'B1' | 'EXAM';

export interface GrammarPoint {
  title: string;
  explanation: string;
  ruleExample: {
    de: string;
    zh: string;
    note?: string;
  }[];
}

export interface VocabularyItem {
  id: string;
  word: string;
  article?: 'der' | 'die' | 'das';
  plural?: string;
  meaning: string;
  ipa?: string;
  example: string;
  exampleTr: string;
}

export interface DialogueLine {
  speaker: string;
  de: string;
  zh: string;
  audioStartSec?: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type?: 'single' | 'true_false' | 'dictation';
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ListeningExercise {
  title: string;
  situation: string;
  dialogue: DialogueLine[];
  questions: QuizQuestion[];
}

export interface SpeakingExercise {
  title: string;
  instruction: string;
  targetSentences: {
    id: string;
    de: string;
    zh: string;
    phoneticTip?: string;
    keywords?: string[];
  }[];
  rolePlay?: {
    partnerName: string;
    partnerRole: string;
    scenario: string;
    promptDe: string;
    promptZh: string;
    sampleReplies: string[];
  };
}

export interface ReadingExercise {
  title: string;
  documentType: 'E-Mail' | 'Aushang' | 'Anzeige' | 'Nachricht' | 'Artikel' | 'Kurznachricht';
  sourceInfo?: string;
  content: string; // Plain text or tagged
  translation: string;
  glossary: Record<string, { pos: string; meaning: string; gender?: string }>;
  questions: QuizQuestion[];
}

export interface ExamTip {
  skill: 'Hören' | 'Lesen' | 'Schreiben' | 'Sprechen';
  title: string;
  content: string;
}

export interface DayLesson {
  day: number;
  stage: CefrLevel;
  week: number;
  dayOfWeek: number; // 1-7
  title: string;
  germanTitle: string;
  theme: string;
  estimatedMinutes: number;
  grammar: GrammarPoint;
  vocabulary: VocabularyItem[];
  listening: ListeningExercise;
  speaking: SpeakingExercise;
  reading: ReadingExercise;
  examTip?: ExamTip;
}

export interface UserProgress {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
  streak: number;
  lastActiveDate: string; // YYYY-MM-DD
  completedDays: number[]; // e.g. [1, 2, 3]
  savedVocabIds: string[];
  quizScores: Record<number, number>; // day -> score
  currentDay: number;
}
