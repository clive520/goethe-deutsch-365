import React from 'react';
import {
  Award,
  Volume2,
  FileCheck,
  PenTool,
  Mic,
  CheckCircle,
  HelpCircle,
  Clock,
  Target,
  Sparkles,
} from 'lucide-react';

export const ExamGuideView: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>歌德學院官方檢定 (Goethe-Zertifikat)</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          歌德德語檢定應試全指南
        </h1>
        <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
          歌德德語檢定是由德國歌德學院主辦、全球最權威的德語能力認證。無論是用於家庭團聚簽證（A1）、長期居留生活（A2），或是德國大學申請與工作簽證（B1/B2），本指南為您拆解四項模組的應試秘訣！
        </p>
      </div>

      {/* 4 Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Module 1: Hören */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
              <Volume2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                模組一 • 聽力
              </span>
              <h3 className="text-lg font-bold text-slate-900">Hören (約 20 - 40 分鐘)</h3>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            題型涵蓋車站或機場廣播、電話答錄機留言、生活簡短交談及廣播電台訪問。
          </p>
          <div className="bg-blue-50/60 p-4 rounded-2xl border border-blue-100 text-xs space-y-2 text-slate-700">
            <div className="font-bold text-blue-900 flex items-center space-x-1">
              <Target className="w-3.5 h-3.5" />
              <span>高分應試心法：</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>音檔播放前有數十秒審題時間，務必先劃出題目疑問詞與選項關鍵字。</li>
              <li>注意數字反轉陷阱（例如 25 fünfundzwanzig 與 52 zweiundfünfzig）。</li>
              <li>注意否定詞轉折：音檔常先說「原本想去... aber leider (但可惜)... 最後決定...」，聽完轉折才是正解。</li>
            </ul>
          </div>
        </div>

        {/* Module 2: Lesen */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wide">
                模組二 • 閱讀
              </span>
              <h3 className="text-lg font-bold text-slate-900">Lesen (約 25 - 65 分鐘)</h3>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            題型包含布告欄（Aushänge）、分類廣告（Kleinanzeigen）、短訊（E-Mails）、報章雜誌專欄與網站論壇。
          </p>
          <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-100 text-xs space-y-2 text-slate-700">
            <div className="font-bold text-amber-900 flex items-center space-x-1">
              <Target className="w-3.5 h-3.5" />
              <span>高分應試心法：</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>不用逐字完全讀懂！善用 Scanning（尋找具體人名、地名、營業時間）。</li>
              <li>廣告配對題（Zuordnung）：先確認每個人的具體需求，再排除不符合條件的項目。</li>
              <li>注意同義替換（Synonyme）：題目詞彙往往不會原封不動出現在文章中。</li>
            </ul>
          </div>
        </div>

        {/* Module 3: Schreiben */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
              <PenTool className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">
                模組三 • 寫作
              </span>
              <h3 className="text-lg font-bold text-slate-900">Schreiben (約 15 - 60 分鐘)</h3>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            題型包含表格填空（Formular ausfüllen）、私人信件（道歉、邀請、感謝）及半正式/正式電子郵件（詢問、投訴）。
          </p>
          <div className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-100 text-xs space-y-2 text-slate-700">
            <div className="font-bold text-emerald-900 flex items-center space-x-1">
              <Target className="w-3.5 h-3.5" />
              <span>高分應試心法：</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>熟記標準開頭結尾套語（Liebe/Lieber vs. Sehr geehrte Damen und Herren）。</li>
              <li>題目的提示點（Leitpunkte）每一點都必須回答，漏點會被大幅扣分。</li>
              <li>名詞首字母必須大寫，動詞現在完成式或從句動詞位置務必放句末。</li>
            </ul>
          </div>
        </div>

        {/* Module 4: Sprechen */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
              <Mic className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide">
                模組四 • 口說
              </span>
              <h3 className="text-lg font-bold text-slate-900">Sprechen (約 15 分鐘，雙人搭檔)</h3>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            通常為兩人一組與考官面試。Part 1 自我介紹、Part 2 主題簡報/提問抽卡、Part 3 兩人共同規劃任務。
          </p>
          <div className="bg-indigo-50/60 p-4 rounded-2xl border border-indigo-100 text-xs space-y-2 text-slate-700">
            <div className="font-bold text-indigo-900 flex items-center space-x-1">
              <Target className="w-3.5 h-3.5" />
              <span>高分應試心法：</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>眼神交流與互動意識至關重要，不要死背演講稿，展現自然交談態勢。</li>
              <li>聽不懂對方時切忌沉默，可用「Wie bitte?」或「Können Sie das wiederholen?」。</li>
              <li>共同規劃時主動提出建議：「Was hältst du davon, wenn wir...? (你覺得如果我們...如何？)」。</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Passing Criteria Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-amber-100 text-amber-800 rounded-xl">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">及格標準與證書發放 (Bestehensgrenze)</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <span className="text-xs font-bold text-slate-400">總分門檻</span>
            <p className="text-xl font-extrabold text-slate-900 mt-1">60 分及格 (60%)</p>
            <p className="text-xs text-slate-500 mt-0.5">總分 100 分需達到至少 60 分才能獲頒合格證書</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <span className="text-xs font-bold text-slate-400">分項模組 (B1 模組制)</span>
            <p className="text-xl font-extrabold text-slate-900 mt-1">獨立考取與累積</p>
            <p className="text-xs text-slate-500 mt-0.5">B1 可分開報名單科，各科滿 60 分即發單科證書</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <span className="text-xs font-bold text-slate-400">證書效期</span>
            <p className="text-xl font-extrabold text-slate-900 mt-1">終身有效</p>
            <p className="text-xs text-slate-500 mt-0.5">歌德證書無使用期限，全球各國移民署與大學廣泛承認</p>
          </div>
        </div>
      </div>
    </div>
  );
};
