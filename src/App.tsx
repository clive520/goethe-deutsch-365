import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { RoadmapView } from './components/RoadmapView';
import { DailyLessonView } from './components/DailyLessonView';
import { VocabularyNotebook } from './components/VocabularyNotebook';
import { ExamGuideView } from './components/ExamGuideView';
import { FirebaseModal } from './components/FirebaseModal';
import { firebaseService } from './services/firebase';
import { getLessonByDay } from './data/curriculumData';
import type { UserProgress } from './types/curriculum';

export function App() {
  const [activeTab, setActiveTab] = useState<'journey' | 'lesson' | 'vocab' | 'guide'>('journey');
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [user, setUser] = useState<UserProgress | null>(null);
  const [isFirebaseModalOpen, setIsFirebaseModalOpen] = useState<boolean>(false);
  const [savedWordsList, setSavedWordsList] = useState<
    Array<{ id: string; word: string; article?: 'der' | 'die' | 'das'; meaning: string; example?: string }>
  >([]);

  // Initialize Auth & Progress
  useEffect(() => {
    // 1. Initial local load
    const local = firebaseService.getLocalProgress();
    if (local) {
      setUser(local);
      setSelectedDay(local.currentDay || 1);
    }

    // 2. Subscribe to Firebase Auth changes
    const unsubscribe = firebaseService.subscribeAuth((updatedUser) => {
      if (updatedUser) {
        setUser(updatedUser as UserProgress);
        if (updatedUser.currentDay) {
          setSelectedDay(updatedUser.currentDay);
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

  const handleSaveVocab = (
    word: string,
    meaning: string,
    article?: 'der' | 'die' | 'das'
  ) => {
    const newWord = {
      id: `user_vocab_${Date.now()}_${word}`,
      word,
      meaning,
      article,
      example: `Beispiel mit ${word}`,
    };

    setSavedWordsList((prev) => {
      if (prev.some((w) => w.word === word)) return prev;
      return [newWord, ...prev];
    });

    if (user) {
      const updatedUser: UserProgress = {
        ...user,
        savedVocabIds: Array.from(new Set([...(user.savedVocabIds || []), word])),
      };
      setUser(updatedUser);
      firebaseService.saveProgress(updatedUser);
    }
  };

  const handleRemoveWord = (id: string) => {
    setSavedWordsList((prev) => prev.filter((w) => w.id !== id));
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
      savedVocabIds: user?.savedVocabIds || [],
      quizScores: updatedScores,
      currentDay: nextDay,
    };

    setUser(updatedUser);
    firebaseService.saveProgress(updatedUser);
  };

  const currentLesson = getLessonByDay(selectedDay);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        user={user}
        onLoginClick={handleLogin}
        onOpenFirebaseModal={() => setIsFirebaseModalOpen(true)}
        onLogout={handleLogout}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {activeTab === 'journey' && (
          <RoadmapView user={user} onSelectDay={handleSelectDay} />
        )}

        {activeTab === 'lesson' && (
          <DailyLessonView
            lesson={currentLesson}
            onSelectDay={handleSelectDay}
            user={user}
            onCompleteDay={handleCompleteDay}
            onSaveVocab={handleSaveVocab}
          />
        )}

        {activeTab === 'vocab' && (
          <VocabularyNotebook
            user={user}
            savedWordsList={savedWordsList}
            onRemoveWord={handleRemoveWord}
          />
        )}

        {activeTab === 'guide' && <ExamGuideView />}
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
              onClick={() => setActiveTab('guide')}
              className="hover:text-white transition"
            >
              歌德檢定攻略
            </button>
            <span>•</span>
            <button
              onClick={() => setIsFirebaseModalOpen(true)}
              className="hover:text-white transition"
            >
              Firebase 連線設定
            </button>
          </div>

          <p className="text-slate-500">
            © 2026 Goethe 365 Deutsch. Alles Gute beim Deutschlernen!
          </p>
        </div>
      </footer>

      {/* Firebase Config Modal */}
      <FirebaseModal
        isOpen={isFirebaseModalOpen}
        onClose={() => setIsFirebaseModalOpen(false)}
        onConfigSaved={() => {
          const local = firebaseService.getLocalProgress();
          if (local) setUser(local);
        }}
      />
    </div>
  );
}

export default App;
