import React, { useState } from 'react';
import {
  Flame,
  Award,
  BookOpen,
  Map,
  BookmarkCheck,
  Settings,
  LogOut,
  Sparkles,
} from 'lucide-react';
import type { UserProgress } from '../types/curriculum';
import { firebaseService } from '../services/firebase';

interface Props {
  activeTab: 'journey' | 'lesson' | 'vocab' | 'guide';
  setActiveTab: (tab: 'journey' | 'lesson' | 'vocab' | 'guide') => void;
  user: UserProgress | null;
  onLoginClick: () => void;
  onOpenFirebaseModal: () => void;
  onLogout: () => void;
}

export const Navbar: React.FC<Props> = ({
  activeTab,
  setActiveTab,
  user,
  onLoginClick,
  onOpenFirebaseModal,
  onLogout,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isFirebaseActive = firebaseService.isFirebaseReady();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('journey')}>
            <div className="relative flex flex-col items-center justify-center w-10 h-10 rounded-xl bg-slate-950 text-white shadow-md overflow-hidden group">
              <span className="font-extrabold text-xs tracking-wider text-amber-400">GZ</span>
              <span className="text-[10px] font-bold text-slate-300">365</span>
              {/* German flag strip */}
              <div className="absolute bottom-0 w-full h-1.5 flex">
                <div className="w-1/3 bg-black"></div>
                <div className="w-1/3 bg-red-600"></div>
                <div className="w-1/3 bg-amber-400"></div>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-bold text-lg text-slate-900 tracking-tight">
                  德語歌德 365 檢定養成網
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300 rounded-full">
                  Goethe-Zertifikat
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">一年 365 天循序漸進攻克 A1 - B1 認證</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => setActiveTab('journey')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition ${
                activeTab === 'journey'
                  ? 'bg-indigo-50 text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Map className="w-4 h-4" />
              <span>365 旅程地圖</span>
            </button>

            <button
              onClick={() => setActiveTab('lesson')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition ${
                activeTab === 'lesson'
                  ? 'bg-indigo-50 text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>今日課程</span>
              {user && (
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('vocab')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition ${
                activeTab === 'vocab'
                  ? 'bg-indigo-50 text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <BookmarkCheck className="w-4 h-4" />
              <span>個人生詞本</span>
              {user && user.savedVocabIds?.length > 0 && (
                <span className="px-1.5 py-0.2 text-[10px] font-bold bg-slate-200 text-slate-700 rounded-full">
                  {user.savedVocabIds.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('guide')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition ${
                activeTab === 'guide'
                  ? 'bg-indigo-50 text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>歌德檢定攻略</span>
            </button>
          </nav>

          {/* User Progress Badges & Google Login */}
          <div className="flex items-center space-x-3">
            {user ? (
              <>
                {/* Streak Badge */}
                <div
                  className="flex items-center space-x-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-full shadow-2xs"
                  title="連續打卡天數"
                >
                  <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-bounce" />
                  <span className="text-xs font-bold text-orange-800">{user.streak} 天連勝</span>
                </div>

                {/* Progress indicator */}
                <div className="hidden lg:flex items-center space-x-2 text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
                  <span>進度：</span>
                  <span className="font-bold text-indigo-600">{user.completedDays.length}</span>
                  <span>/ 365 天</span>
                </div>

                {/* User Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex items-center space-x-2 p-1 rounded-full hover:ring-2 hover:ring-indigo-300 transition"
                  >
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={user.displayName}
                        className="w-8 h-8 rounded-full border border-slate-300 object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
                        {user.displayName.charAt(0) || '德'}
                      </div>
                    )}
                  </button>

                  {menuOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="px-4 py-2 border-b border-slate-100">
                        <p className="text-sm font-semibold text-slate-900 truncate">
                          {user.displayName}
                        </p>
                        <p className="text-xs text-slate-500 truncate">{user.email}</p>
                        <div className="mt-1 flex items-center space-x-1">
                          <span
                            className={`inline-block w-2 h-2 rounded-full ${
                              isFirebaseActive ? 'bg-emerald-500' : 'bg-amber-500'
                            }`}
                          ></span>
                          <span className="text-[10px] text-slate-500">
                            {isFirebaseActive ? 'Firebase 已連線' : '本機 / 示範同步模式'}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setMenuOpen(false);
                          onOpenFirebaseModal();
                        }}
                        className="w-full px-4 py-2 text-left text-xs text-slate-700 hover:bg-slate-50 flex items-center space-x-2"
                      >
                        <Settings className="w-4 h-4 text-slate-400" />
                        <span>Firebase 專案設定</span>
                      </button>

                      <button
                        onClick={() => {
                          setMenuOpen(false);
                          onLogout();
                        }}
                        className="w-full px-4 py-2 text-left text-xs text-red-600 hover:bg-red-50 flex items-center space-x-2"
                      >
                        <LogOut className="w-4 h-4 text-red-400" />
                        <span>登出帳號</span>
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <button
                onClick={onLoginClick}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 shadow-sm transition active:scale-95 cursor-pointer"
              >
                {/* Google "G" Colorful Icon */}
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <span>Google 登入</span>
              </button>
            )}

            {/* Quick Firebase Settings Icon */}
            <button
              onClick={onOpenFirebaseModal}
              title="Firebase 設定"
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Sub-Navigation Bar */}
        <div className="md:hidden flex items-center justify-around py-2 border-t border-slate-100 text-xs font-medium">
          <button
            onClick={() => setActiveTab('journey')}
            className={`flex flex-col items-center py-1 px-2 ${
              activeTab === 'journey' ? 'text-indigo-600 font-bold' : 'text-slate-500'
            }`}
          >
            <Map className="w-4 h-4 mb-0.5" />
            <span>地圖</span>
          </button>
          <button
            onClick={() => setActiveTab('lesson')}
            className={`flex flex-col items-center py-1 px-2 ${
              activeTab === 'lesson' ? 'text-indigo-600 font-bold' : 'text-slate-500'
            }`}
          >
            <BookOpen className="w-4 h-4 mb-0.5" />
            <span>課程</span>
          </button>
          <button
            onClick={() => setActiveTab('vocab')}
            className={`flex flex-col items-center py-1 px-2 ${
              activeTab === 'vocab' ? 'text-indigo-600 font-bold' : 'text-slate-500'
            }`}
          >
            <BookmarkCheck className="w-4 h-4 mb-0.5" />
            <span>生詞</span>
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`flex flex-col items-center py-1 px-2 ${
              activeTab === 'guide' ? 'text-indigo-600 font-bold' : 'text-slate-500'
            }`}
          >
            <Award className="w-4 h-4 mb-0.5" />
            <span>攻略</span>
          </button>
        </div>
      </div>
    </header>
  );
};
