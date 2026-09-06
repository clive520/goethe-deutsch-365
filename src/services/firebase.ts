import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as fbSignOut,
  onAuthStateChanged,
  type Auth,
  type User,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  type Firestore,
} from 'firebase/firestore';
import type { UserProgress } from '../types/curriculum';

export interface FirebaseCustomConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId?: string;
  databaseURL?: string;
}

// 採用小說連載專案 (test-reading-71839) 之 Firebase 預設配置
export const DEFAULT_FIREBASE_CONFIG: FirebaseCustomConfig = {
  apiKey: 'AIzaSyB9NJXQwdKweStTbATahldDgvtbuGclo34',
  authDomain: 'test-reading-71839.firebaseapp.com',
  projectId: 'test-reading-71839',
  storageBucket: 'test-reading-71839.firebasestorage.app',
  messagingSenderId: '499192051513',
  appId: '1:499192051513:web:717a1276cc6dfeed995ae8',
  databaseURL: 'https://test-reading-71839-default-rtdb.asia-southeast1.firebasedatabase.app',
};

const STORAGE_CONFIG_KEY = 'deutsch_cert_firebase_config';
const STORAGE_PROGRESS_KEY = 'deutsch_cert_user_progress';
const STORAGE_USER_KEY = 'deutsch_cert_mock_user';

class FirebaseService {
  private app: FirebaseApp | null = null;
  private auth: Auth | null = null;
  private db: Firestore | null = null;
  private currentUser: User | null = null;
  private isConfigured: boolean = false;

  constructor() {
    this.init();
  }

  public init() {
    try {
      const savedConfig = this.getConfig();
      if (savedConfig && savedConfig.apiKey && savedConfig.projectId) {
        if (!getApps().length) {
          this.app = initializeApp(savedConfig);
        } else {
          this.app = getApps()[0];
        }
        this.auth = getAuth(this.app);
        this.db = getFirestore(this.app);
        this.isConfigured = true;
      }
    } catch (err) {
      console.warn('Firebase initialization note: Running in local/demo mode until Firebase config is supplied.', err);
      this.isConfigured = false;
    }
  }

  public getConfig(): FirebaseCustomConfig | null {
    if (typeof window === 'undefined') return DEFAULT_FIREBASE_CONFIG;
    const stored = localStorage.getItem(STORAGE_CONFIG_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.apiKey) return parsed;
      } catch {
        // ignore
      }
    }

    // Fallback to env vars if present
    if (import.meta.env.VITE_FIREBASE_API_KEY && import.meta.env.VITE_FIREBASE_PROJECT_ID) {
      return {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
        appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
      };
    }

    return DEFAULT_FIREBASE_CONFIG;
  }

  public saveConfig(config: FirebaseCustomConfig) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_CONFIG_KEY, JSON.stringify(config));
    }
    this.init();
  }

  public isFirebaseReady(): boolean {
    return this.isConfigured && this.auth !== null;
  }

  /**
   * Google Sign-In (支援真實 Google 帳號與彈窗阻擋/未授權網域友善降級處理)
   */
  public async signInWithGoogle(): Promise<{ user: Partial<UserProgress>; isDemo: boolean }> {
    if (this.isFirebaseReady() && this.auth) {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      provider.addScope('profile');
      provider.addScope('email');

      try {
        const cred = await signInWithPopup(this.auth, provider);
        const user = cred.user;
        this.currentUser = user;

        // Sync progress from Firestore or create initial
        const progress = await this.loadProgress(user.uid, {
          displayName: user.displayName || '德語學員',
          email: user.email || '',
          photoURL: user.photoURL || '',
        });

        return { user: progress, isDemo: false };
      } catch (err: any) {
        console.error('[FirebaseService] Google 登入異常:', err);
        if (err.code === 'auth/unauthorized-domain') {
          alert(
            '【Google 認證網域授權提醒】\n\n' +
            '當前網址 (' + window.location.hostname + ') 尚未加入 Firebase 控制台的已授權網域。\n\n' +
            '請至 Firebase 控制台 (專案 test-reading-71839)：\n' +
            'Authentication ➜ Settings ➜ Authorized domains ➜ 新增網域：\n' +
            window.location.hostname + '\n\n' +
            '目前將先為您以示範模式登入，讓您能順暢體驗學習！'
          );
          return this.signInDemoUser();
        } else if (err.code === 'auth/popup-blocked') {
          alert('登入視窗已被瀏覽器封鎖，請允許快顯視窗後重試。');
          throw err;
        } else if (err.code === 'auth/popup-closed-by-user') {
          console.log('使用者手動關閉了 Google 登入視窗');
          throw err;
        } else {
          alert('Google 登入失敗：' + (err.message || err.code));
          throw err;
        }
      }
    } else {
      return this.signInDemoUser();
    }
  }

  private signInDemoUser(): { user: Partial<UserProgress>; isDemo: boolean } {
    const demoUser: UserProgress = {
      uid: 'google-demo-user-365',
      displayName: 'Google 學生示範帳號',
      email: 'student@german-cert.edu',
      photoURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      streak: 7,
      lastActiveDate: new Date().toISOString().split('T')[0],
      completedDays: [1, 2, 3],
      savedVocabIds: ['w1', 'w3'],
      quizScores: { 1: 100, 2: 95, 3: 100 },
      currentDay: 4,
    };

    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(demoUser));
      localStorage.setItem(STORAGE_PROGRESS_KEY, JSON.stringify(demoUser));
    }

    return { user: demoUser, isDemo: true };
  }

  public async signOut(): Promise<void> {
    if (this.isFirebaseReady() && this.auth) {
      await fbSignOut(this.auth);
    }
    this.currentUser = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_USER_KEY);
    }
  }

  public subscribeAuth(callback: (user: Partial<UserProgress> | null) => void) {
    if (this.isFirebaseReady() && this.auth) {
      return onAuthStateChanged(this.auth, async (fbUser: any) => {
        if (fbUser) {
          this.currentUser = fbUser;
          const progress = await this.loadProgress(fbUser.uid, {
            displayName: fbUser.displayName || '德語學員',
            email: fbUser.email || '',
            photoURL: fbUser.photoURL || '',
          });
          callback(progress);
        } else {
          this.currentUser = null;
          callback(null);
        }
      });
    } else {
      // Check demo user
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem(STORAGE_USER_KEY);
        if (stored) {
          try {
            callback(JSON.parse(stored));
            return () => {};
          } catch {
            // ignore
          }
        }
      }
      callback(null);
      return () => {};
    }
  }

  /**
   * Load User Progress from Firestore with local fallback
   */
  public async loadProgress(
    uid: string,
    initialProfile?: { displayName: string; email: string; photoURL?: string }
  ): Promise<UserProgress> {
    // 1. Try Firestore if configured
    if (this.db) {
      try {
        const userDocRef = doc(this.db, 'users', uid);
        const snapshot = await getDoc(userDocRef);
        if (snapshot.exists()) {
          const data = snapshot.data() as UserProgress;
          this.saveLocalProgress(data);
          return data;
        }
      } catch (err) {
        console.warn('Firestore load failed, falling back to local storage:', err);
      }
    }

    // 2. Try Local Storage
    const local = this.getLocalProgress();
    if (local && local.uid === uid) {
      return local;
    }

    // 3. New User Default Template
    const today = new Date().toISOString().split('T')[0];
    const newProgress: UserProgress = {
      uid,
      displayName: initialProfile?.displayName || '德語學員',
      email: initialProfile?.email || '',
      photoURL: initialProfile?.photoURL || '',
      streak: 1,
      lastActiveDate: today,
      completedDays: [],
      savedVocabIds: [],
      quizScores: {},
      currentDay: 1,
    };

    await this.saveProgress(newProgress);
    return newProgress;
  }

  /**
   * Save User Progress to both Firestore & LocalStorage
   */
  public async saveProgress(progress: UserProgress): Promise<void> {
    this.saveLocalProgress(progress);

    if (this.db && this.currentUser) {
      try {
        const userDocRef = doc(this.db, 'users', progress.uid);
        await setDoc(userDocRef, progress, { merge: true });
      } catch (err) {
        console.error('Failed to sync to Firestore:', err);
      }
    }
  }

  private saveLocalProgress(progress: UserProgress) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_PROGRESS_KEY, JSON.stringify(progress));
    }
  }

  public getLocalProgress(): UserProgress | null {
    if (typeof window === 'undefined') return null;
    const stored = localStorage.getItem(STORAGE_PROGRESS_KEY);
    if (!stored) return null;
    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  }
}

export const firebaseService = new FirebaseService();
