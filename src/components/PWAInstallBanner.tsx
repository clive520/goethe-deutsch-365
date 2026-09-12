import React, { useState } from 'react';
import { Download, Share, X, Smartphone, WifiOff, Check } from 'lucide-react';
import { usePWA } from '../hooks/usePWA';

export const PWAInstallBanner: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, installApp } = usePWA();
  const [isDismissed, setIsDismissed] = useState<boolean>(false);
  const [showIOSGuide, setShowIOSGuide] = useState<boolean>(false);
  const [installedSuccess, setInstalledSuccess] = useState<boolean>(false);

  // If already running in standalone mode or user dismissed, don't show
  if (isInstalled || isDismissed) {
    return null;
  }

  // Only show on mobile / installable situations
  if (!isInstallable && !isIOS) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      const success = await installApp();
      if (success) {
        setInstalledSuccess(true);
        setTimeout(() => setIsDismissed(true), 3000);
      }
    } else if (isIOS) {
      setShowIOSGuide(true);
    }
  };

  return (
    <>
      {/* Floating Bottom Capsule for Mobile / Desktop Install */}
      <aside aria-label="安裝應用程式提示" className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 animate-in fade-in slide-in-from-bottom-5 duration-300">
        <div className="bg-slate-900/95 backdrop-blur-md text-white p-4 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center justify-between gap-3">
          <div className="flex items-center space-x-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shrink-0 shadow-md">
              <Smartphone className="w-5 h-5 text-amber-300" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-white truncate">安裝歌德德語 365 App</p>
              <p className="text-xs text-slate-300 truncate">加入手機桌面，秒開且支援離線複習</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            {installedSuccess ? (
              <span className="inline-flex items-center px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                <Check className="w-3.5 h-3.5 mr-1" /> 已安裝
              </span>
            ) : (
              <button
                onClick={handleInstallClick}
                className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white text-xs font-bold shadow-md hover:shadow-indigo-500/30 transition flex items-center space-x-1.5 cursor-pointer"
              >
                {isIOS ? (
                  <>
                    <Share className="w-3.5 h-3.5" />
                    <span>安裝教學</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>立即安裝</span>
                  </>
                )}
              </button>
            )}

            <button
              onClick={() => setIsDismissed(true)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition cursor-pointer"
              title="稍後再說"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* iOS "Add to Home Screen" Modal Guide */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-sm w-full text-white space-y-4 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base flex items-center space-x-2 text-indigo-400">
                <Smartphone className="w-5 h-5" />
                <span>iPhone / iPad 加入主畫面</span>
              </h3>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              在 Safari 瀏覽器中僅需兩步，即可將德語 365 變成全螢幕獨立運行的原生 App：
            </p>

            <div className="space-y-3 bg-slate-800/80 p-3.5 rounded-2xl border border-slate-700 text-xs">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  1
                </div>
                <p className="text-slate-200 pt-0.5">
                  點擊 Safari 底部工具列中央的 <span className="text-indigo-400 font-bold">分享按鈕</span>（帶箭頭的方形圖示）。
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  2
                </div>
                <p className="text-slate-200 pt-0.5">
                  向下滑動選單並點選 <span className="text-amber-400 font-bold">「加入主畫面 (Add to Home Screen)」</span>。
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowIOSGuide(false)}
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition cursor-pointer"
            >
              我知道了
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export const OfflineStatusBar: React.FC = () => {
  const { isOnline } = usePWA();

  if (isOnline) {
    return null;
  }

  return (
    <div className="bg-amber-500 text-slate-950 px-4 py-2 text-xs font-bold flex items-center justify-center space-x-2 shadow-sm sticky top-0 z-50">
      <WifiOff className="w-4 h-4 text-slate-950" />
      <span>離線學習模式中 • 您目前無網路連線，仍可順暢複習已載入的課程與單字本！</span>
    </div>
  );
};
