import { useState, useEffect, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { RoadmapView } from './components/RoadmapView';
import { DailyLessonView } from './components/DailyLessonView';
import { firebaseService } from './services/firebase';
import { loadLessonByDay, getCachedLessonByDay } from './data/curriculumData';
import type { UserProgress, SavedWordCard, DayLesson } from './types/curriculum';

// Code-split secondary views on demand
const AlphabetCourseView = lazy(() =>
  import('./components/AlphabetCourseView').then((m) => ({ default: m.AlphabetCourseView }))
);
const ExamGuideView = lazy(() =>
  import('./components/ExamGuideView').then((m) => ({ default: m.ExamGuideView }))
);
const VocabularyNotebook = lazy(() =>
  import('./components/VocabularyNotebook').then((m) => ({ default: m.VocabularyNotebook }))
);


const LOCAL_SAVED_WORDS_KEY = 'deutsch_cert_saved_words_list';

export function App() {
  const [activeTab, setActiveTab] = useState<'journey' | 'lesson' | 'vocab' | 'guide' | 'alphabet'>('journey');
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [user, setUser] = useState<UserProgress | null>(null);
  const [savedWordsList, setSavedWordsList] = useState<SavedWordCard[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(LOCAL_SAVED_WORDS_KEY);
        if (stored) return JSON.parse(stored);
      } catch (err) {
        console.warn('Failed to parse savedWordsList from local storage', err);
      }
    }
    return [];
  });

  // Helper to persist saved words to both LocalStorage and Firebase user profile
  const syncSavedWords = (newWords: SavedWordCard[], currentUser: UserProgress | null) => {
    setSavedWordsList(newWords);
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCAL_SAVED_WORDS_KEY, JSON.stringify(newWords));
    }
    const wordStrings = newWords.map((w) => w.word);

    const baseUser = currentUser || {
      uid: 'guest-student',
      displayName: '德語學員',
      email: '',
      photoURL: '',
      streak: 1,
      lastActiveDate: new Date().toISOString().split('T')[0],
      completedDays: [],
      savedVocabIds: [],
      savedWords: [],
      quizScores: {},
      currentDay: 1,
    };

    const updatedUser: UserProgress = {
      ...baseUser,
      savedVocabIds: wordStrings,
      savedWords: newWords,
    };

    setUser(updatedUser);
    firebaseService.saveProgress(updatedUser);
  };

  // Initialize Auth & Progress
  useEffect(() => {
    // 1. Initial local load
    const local = firebaseService.getLocalProgress();
    if (local) {
      setUser(local);
      setSelectedDay(local.currentDay || 1);
      if (local.savedWords && local.savedWords.length > 0) {
        setSavedWordsList(local.savedWords);
        if (typeof window !== 'undefined') {
          localStorage.setItem(LOCAL_SAVED_WORDS_KEY, JSON.stringify(local.savedWords));
        }
      }
    }

    // 2. Subscribe to Firebase Auth changes
    const unsubscribe = firebaseService.subscribeAuth((updatedUser) => {
      if (updatedUser) {
        setUser(updatedUser as UserProgress);
        if (updatedUser.currentDay) {
          setSelectedDay(updatedUser.currentDay);
        }
        if (updatedUser.savedWords && updatedUser.savedWords.length > 0) {
          setSavedWordsList(updatedUser.savedWords);
          if (typeof window !== 'undefined') {
            localStorage.setItem(LOCAL_SAVED_WORDS_KEY, JSON.stringify(updatedUser.savedWords));
          }
        }
      } else {
        setUser(null);
      }
    });

    return () => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, []);

  const handleLogin = async () => {
    try {
      const res = await firebaseService.signInWithGoogle();
      if (res.user) {
        setUser(res.user as UserProgress);
        if (res.user.currentDay) {
          setSelectedDay(res.user.currentDay);
        }
        if (res.user.savedWords) {
          setSavedWordsList(res.user.savedWords);
        }
      }
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  const handleLogout = async () => {
    await firebaseService.signOut();
    setUser(null);
  };

  const handleSelectDay = (day: number) => {
    setSelectedDay(day);
    setActiveTab('lesson');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle or Save Vocabulary Word
  const handleSaveVocab = (
    word: string,
    meaning: string,
    article?: 'der' | 'die' | 'das',
    example?: string,
    exampleTr?: string
  ) => {
    const isAlreadySaved = savedWordsList.some((w) => w.word.toLowerCase() === word.toLowerCase());

    if (isAlreadySaved) {
      // Toggle off: remove
      const updatedList = savedWordsList.filter((w) => w.word.toLowerCase() !== word.toLowerCase());
      syncSavedWords(updatedList, user);
    } else {
      // Toggle on: add
      const newWord: SavedWordCard = {
        id: `user_vocab_${Date.now()}_${word}`,
        word,
        meaning,
        article,
        example: example || `Beispiel mit ${word}`,
        exampleTr,
        savedAt: new Date().toISOString(),
      };
      const updatedList = [newWord, ...savedWordsList];
      syncSavedWords(updatedList, user);
    }
  };

  const handleRemoveWord = (wordIdOrWord: string) => {
    const updatedList = savedWordsList.filter(
      (w) => w.id !== wordIdOrWord && w.word !== wordIdOrWord
    );
    syncSavedWords(updatedList, user);
  };

  const handleCompleteDay = (day: number, score: number) => {
    const todayStr = new Date().toISOString().split('T')[0];

    const currentCompleted = user?.completedDays || [];
    const isNewCompletion = !currentCompleted.includes(day);

    const updatedCompleted = isNewCompletion
      ? [...currentCompleted, day].sort((a, b) => a - b)
      : currentCompleted;

    const nextDay = Math.min(365, day + 1);

    const updatedScores = {
      ...(user?.quizScores || {}),
      [day]: score,
    };

    const newStreak = isNewCompletion ? (user?.streak || 0) + 1 : user?.streak || 1;

    const updatedUser: UserProgress = {
      uid: user?.uid || 'guest-student',
      displayName: user?.displayName || '德語學員',
      email: user?.email || '',
      photoURL: user?.photoURL || '',
      streak: newStreak,
      lastActiveDate: todayStr,
      completedDays: updatedCompleted,
      savedVocabIds: user?.savedVocabIds || savedWordsList.map((w) => w.word),
      savedWords: user?.savedWords || savedWordsList,
      quizScores: updatedScores,
      currentDay: nextDay,
    };

    setUser(updatedUser);
    firebaseService.saveProgress(updatedUser);
  };

  const [currentLesson, setCurrentLesson] = useState<DayLesson | null>(() => getCachedLessonByDay(selectedDay));
  const [isLoadingLesson, setIsLoadingLesson] = useState<boolean>(false);

  // Dynamically load lesson data when selectedDay changes
  useEffect(() => {
    let isCancelled = false;
    const cached = getCachedLessonByDay(selectedDay);
    if (cached) {
      setCurrentLesson(cached);
      return;
    }

    setIsLoadingLesson(true);
    loadLessonByDay(selectedDay)
      .then((lesson) => {
        if (!isCancelled) {
          setCurrentLesson(lesson);
          setIsLoadingLesson(false);
        }
      })
      .catch((err) => {
        console.error('Failed to load lesson for day', selectedDay, err);
        if (!isCancelled) {
          setIsLoadingLesson(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [selectedDay]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={user}
        onLoginClick={handleLogin}
        onLogout={handleLogout}
      />

      {/* Main View Area */}
      <main className="flex-1">
        <Suspense
          fallback={
            <div className="max-w-4xl mx-auto px-4 py-24 flex flex-col items-center justify-center space-y-4 text-center">
              <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-slate-600 text-sm font-medium">頁面載入中...</p>
            </div>
          }
        >
          {activeTab === 'journey' && (
            <RoadmapView
              user={user}
              onSelectDay={handleSelectDay}
              onOpenAlphabet={() => {
                setActiveTab('alphabet');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}

          {activeTab === 'alphabet' && (
            <AlphabetCourseView
              onBackToRoadmap={() => {
                setActiveTab('journey');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}

          {activeTab === 'lesson' && (
            isLoadingLesson || !currentLesson ? (
              <div className="max-w-4xl mx-auto px-4 py-24 flex flex-col items-center justify-center space-y-4 text-center">
                <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-slate-700 font-bold text-lg">正在載入 Day {selectedDay} 德語完整教案...</p>
                <p className="text-slate-500 text-sm">德意志歌德 365 檢定直通車</p>
              </div>
            ) : (
              <DailyLessonView
                lesson={currentLesson}
                onSelectDay={handleSelectDay}
                user={user}
                onCompleteDay={handleCompleteDay}
                onSaveVocab={handleSaveVocab}
              />
            )
          )}

          {activeTab === 'vocab' && (
            <VocabularyNotebook
              user={user}
              savedWordsList={savedWordsList}
              onRemoveWord={handleRemoveWord}
              onNavigateToLesson={() => {
                setActiveTab('lesson');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}

          {activeTab === 'guide' && <ExamGuideView />}
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-10 mt-16 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 rounded-lg bg-amber-400/20 text-amber-400 font-bold flex items-center justify-center text-[10px]">
              GZ
            </div>
            <div>
              <p className="text-white font-bold text-sm">德語歌德 365 檢定養成網</p>
              <p className="text-slate-500">Goethe-Zertifikat A1 • A2 • B1 完整認證訓練計畫</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <button
              onClick={() => setActiveTab('journey')}
              className="hover:text-white transition"
            >
              365 學習地圖
            </button>
            <span>•</span>
            <button
              onClick={() => {
                setActiveTab('alphabet');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-amber-400 text-amber-300/90 font-medium transition"
            >
              德語 30 字母特訓
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveTab('lesson')}
              className="hover:text-white transition"
            >
              今日課堂
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveTab('vocab')}
              className="hover:text-white transition"
            >
              生詞抽認卡
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveTab('guide')}
              className="hover:text-white transition"
            >
              應試攻略指南
            </button>
          </div>

          <p className="text-slate-500 text-center sm:text-right">
            © {new Date().getFullYear()} 德語歌德 365 認證. 遵循歐洲共同語言參考標準 CEFR 設計.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

