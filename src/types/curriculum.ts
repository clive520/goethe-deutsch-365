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
  text?: string;
  translation?: string;
}

export interface QuizQuestion {
  id?: string;
  question: string;
  type?: 'single' | 'true_false' | 'dictation';
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ListeningExercise {
  title: string;
  situation?: string;
  audioUrl?: string;
  dialogue: DialogueLine[];
  questions?: QuizQuestion[];
  comprehensionQuestions?: QuizQuestion[];
}

export interface SpeakingExercise {
  title: string;
  instruction?: string;
  targetSentences: {
    id?: string;
    de: string;
    zh: string;
    phoneticTip?: string;
    phoneticTips?: string;
    keywords?: string[];
  }[];
  rolePlay?: {
    partnerName?: string;
    partnerRole?: string;
    scenario?: string;
    promptDe?: string;
    promptZh?: string;
    sampleReplies?: string[];
    role?: string;
    prompt?: string;
    modelAnswer?: string;
    examinerRole?: string;
    studentRole?: string;
    modelAnswerDe?: string;
  };
}

export interface ReadingExercise {
  title: string;
  documentType: string;
  sourceInfo?: string;
  content: string; // Plain text or tagged
  translation?: string;
  zh?: string;
  glossary: Record<string, { pos: string; meaning: string; gender?: string }>;
  questions: QuizQuestion[];
}

export interface ExamTip {
  skill: 'Hören' | 'Lesen' | 'Schreiben' | 'Sprechen' | string;
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
  quiz?: {
    title: string;
    questions: QuizQuestion[];
  };
}

export interface SavedWordCard {
  id: string;
  word: string;
  article?: 'der' | 'die' | 'das';
  meaning: string;
  example?: string;
  exampleTr?: string;
  savedAt?: string;
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
  savedWords?: SavedWordCard[];
  quizScores: Record<number, number>; // day -> score
  currentDay: number;
}

