import React, { useState } from 'react';
import { X, Key, Database, ShieldCheck, HelpCircle } from 'lucide-react';
import { firebaseService, type FirebaseCustomConfig } from '../services/firebase';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfigSaved: () => void;
}

export const FirebaseModal: React.FC<Props> = ({ isOpen, onClose, onConfigSaved }) => {
  const currentConfig = firebaseService.getConfig() || {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
  };

  const [form, setForm] = useState<FirebaseCustomConfig>(currentConfig);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    firebaseService.saveConfig(form);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onConfigSaved();
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in duration-200">
        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 p-6 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-amber-400/20 text-amber-300 rounded-lg">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Firebase 與 Google 登入設定</h3>
              <p className="text-xs text-slate-300">連線您的 Firebase 專案以同步學生 365 天學習歷程</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 flex items-start space-x-2">
            <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>提示：</strong>本系統已內建「免設定 Google 示範模式」，若尚未建立 Firebase 專案，您可直接關閉此視窗體驗完整課程！當您需要正式上線部署時，請在下方填入 Firebase 控制台提供的 Web 應用程式憑證。
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              API Key <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Key className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={form.apiKey}
                onChange={(e) => setForm({ ...form, apiKey: e.target.value })}
                placeholder="AIzaSy..."
                className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Project ID <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.projectId}
                onChange={(e) => setForm({ ...form, projectId: e.target.value })}
                placeholder="german-cert-365"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Auth Domain</label>
              <input
                type="text"
                value={form.authDomain}
                onChange={(e) => setForm({ ...form, authDomain: e.target.value })}
                placeholder="proj.firebaseapp.com"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">App ID</label>
              <input
                type="text"
                value={form.appId || ''}
                onChange={(e) => setForm({ ...form, appId: e.target.value })}
                placeholder="1:12345:web:..."
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-mono text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Storage Bucket</label>
              <input
                type="text"
                value={form.storageBucket || ''}
                onChange={(e) => setForm({ ...form, storageBucket: e.target.value })}
                placeholder="proj.appspot.com"
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-mono text-xs"
              />
            </div>
          </div>

          <div className="pt-3 flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                firebaseService.saveConfig({
                  apiKey: '',
                  authDomain: '',
                  projectId: '',
                });
                onConfigSaved();
                onClose();
              }}
              className="text-xs text-slate-500 hover:text-slate-800 underline"
            >
              切換回示範模擬模式
            </button>

            <div className="flex space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition"
              >
                取消
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md transition flex items-center space-x-1"
              >
                {savedSuccess ? (
                  <>
                    <ShieldCheck className="w-4 h-4 text-emerald-300" />
                    <span>已儲存設定！</span>
                  </>
                ) : (
                  <span>儲存並套用</span>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
