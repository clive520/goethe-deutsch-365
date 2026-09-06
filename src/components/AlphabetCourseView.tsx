import React, { useState, useRef, useEffect } from 'react';
import {
  Volume2,
  Mic,
  MicOff,
  BookOpen,
  Headphones,
  PenTool,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  Search,
  Check,
  Award,
  Play,
  Pause,
  Radio,
} from 'lucide-react';
import {
  GERMAN_ALPHABET,
  SPELLING_QUIZ_ITEMS,
  type GermanLetter,
} from '../data/alphabetData';
import { SpeechService, VoiceRecorder } from '../services/speechService';
import confetti from 'canvas-confetti';

interface Props {
  onBackToRoadmap?: () => void;
}

type TabMode = 'listen' | 'speak' | 'read' | 'write' | 'quiz';

export const AlphabetCourseView: React.FC<Props> = ({ onBackToRoadmap }) => {
  const [activeTab, setActiveTab] = useState<TabMode>('listen');
  const [selectedLetter, setSelectedLetter] = useState<GermanLetter>(GERMAN_ALPHABET[0]);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Speaking state & Voice Recorder
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [spokenTranscript, setSpokenTranscript] = useState<string>('');
  const [speakingScore, setSpeakingScore] = useState<number | null>(null);
  const [speakErrorMessage, setSpeakErrorMessage] = useState<string | null>(null);
  const [recordedVoiceUrl, setRecordedVoiceUrl] = useState<string | null>(null);
  const [isPlayingVoice, setIsPlayingVoice] = useState<boolean>(false);

  const voiceRecorderRef = useRef<VoiceRecorder>(new VoiceRecorder());
  const activeAudioRef = useRef<HTMLAudioElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognizerRef = useRef<any>(null);

  // Writing / Canvas state
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [strokeColor, setStrokeColor] = useState<string>('#4338ca'); // indigo-700
  const [hasDrawn, setHasDrawn] = useState<boolean>(false);

  // Quiz state
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  // Filter letters
  const filteredLetters = GERMAN_ALPHABET.filter((l) => {
    const matchesCategory =
      filterCategory === 'all' || l.category === filterCategory;
    const matchesSearch =
      l.char.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.zhSound.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  // Cleanup audio URLs on unmount
  useEffect(() => {
    return () => {
      if (recordedVoiceUrl) {
        URL.revokeObjectURL(recordedVoiceUrl);
      }
      voiceRecorderRef.current.cancel();
      if (activeAudioRef.current) {
        activeAudioRef.current.pause();
      }
    };
  }, [recordedVoiceUrl]);

  // Play user's recorded voice
  const handlePlayUserVoice = () => {
    if (!recordedVoiceUrl) return;
    SpeechService.stopSpeaking();

    if (activeAudioRef.current) {
      activeAudioRef.current.pause();
      activeAudioRef.current = null;
      setIsPlayingVoice(false);
      return;
    }

    const audio = new Audio(recordedVoiceUrl);
    activeAudioRef.current = audio;
    setIsPlayingVoice(true);

    audio.onended = () => {
      setIsPlayingVoice(false);
      activeAudioRef.current = null;
    };
    audio.onerror = () => {
      setIsPlayingVoice(false);
      activeAudioRef.current = null;
    };

    audio.play().catch(() => {
      setIsPlayingVoice(false);
      activeAudioRef.current = null;
    });
  };

  // Play letter pronunciation
  const handlePlayLetter = (letter: GermanLetter) => {
    if (activeAudioRef.current) {
      activeAudioRef.current.pause();
      activeAudioRef.current = null;
      setIsPlayingVoice(false);
    }
    SpeechService.speak(letter.char, 0.85);
  };

  const handlePlayWord = (word: string) => {
    if (activeAudioRef.current) {
      activeAudioRef.current.pause();
      activeAudioRef.current = null;
      setIsPlayingVoice(false);
    }
    SpeechService.speak(word, 0.9);
  };

  const finishLetterRecording = async (targetChar: string, resultText: string) => {
    setIsRecording(false);
    const audioUrl = await voiceRecorderRef.current.stop();
    if (audioUrl) {
      setRecordedVoiceUrl(audioUrl);
    }

    const cleanText = resultText.trim().toLowerCase();
    const cleanTarget = targetChar.trim().toLowerCase();
    const letterName = selectedLetter.name.toLowerCase();

    if (
      cleanText.includes(cleanTarget) ||
      cleanText.includes(letterName) ||
      cleanText === cleanTarget
    ) {
      setSpeakingScore(100);
      confetti({ particleCount: 30, spread: 60, origin: { y: 0.7 } });
    } else if (cleanText.length > 0) {
      const scoreObj = SpeechService.calculateScore(targetChar, resultText);
      setSpeakingScore(scoreObj.score > 50 ? scoreObj.score : 65);
    } else {
      setSpeakingScore(30);
    }
  };

  // Start speech recognition for letter
  const handleStartSpeaking = async (targetChar: string) => {
    setSpeakErrorMessage(null);
    setSpokenTranscript('');
    setSpeakingScore(null);

    if (recordedVoiceUrl) {
      URL.revokeObjectURL(recordedVoiceUrl);
      setRecordedVoiceUrl(null);
    }
    if (activeAudioRef.current) {
      activeAudioRef.current.pause();
      activeAudioRef.current = null;
      setIsPlayingVoice(false);
    }
    SpeechService.stopSpeaking();

    if (!SpeechService.isRecognitionSupported()) {
      setSpeakErrorMessage('您的瀏覽器未支援語音辨識，請使用 Chrome / Edge 或直接點擊發音進行模仿！');
      return;
    }

    setIsRecording(true);

    // Start audio recorder concurrently
    voiceRecorderRef.current.start().catch((err) => {
      console.warn('VoiceRecorder start error', err);
    });

    let liveText = '';
    const recognizer = SpeechService.createRecognizer(
      (resultText, isFinal) => {
        liveText = resultText;
        setSpokenTranscript(resultText);
        if (isFinal) {
          finishLetterRecording(targetChar, resultText);
        }
      },
      (err) => {
        setSpeakErrorMessage(err);
        finishLetterRecording(targetChar, liveText);
      },
      () => {
        finishLetterRecording(targetChar, liveText);
      }
    );

    recognizerRef.current = recognizer;
    if (recognizer) {
      try {
        recognizer.start();
      } catch {
        setIsRecording(false);
      }
    }
  };

  const handleStopLetterRecordingManually = () => {
    if (recognizerRef.current) {
      try {
        recognizerRef.current.stop();
      } catch {
        // ignore
      }
    }
  };

  // Canvas drawing functions
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    setHasDrawn(true);

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = strokeColor;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
  };

  // Quiz submission
  const handleQuizAnswer = (optionIndex: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(optionIndex);
    const currentQ = SPELLING_QUIZ_ITEMS[quizIndex];
    if (optionIndex === currentQ.correctIndex) {
      setQuizScore((prev) => prev + 20);
    }
  };

  const handleNextQuiz = () => {
    if (quizIndex < SPELLING_QUIZ_ITEMS.length - 1) {
      setQuizIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
      confetti({ particleCount: 80, spread: 80, origin: { y: 0.6 } });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 text-white p-8 sm:p-12 shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>德語入門第一課 • 歌德檢定口試必備</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            德語 30 字母發音與筆順全集
            <span className="block text-2xl sm:text-3xl text-indigo-300 font-normal mt-1">
              Das deutsche Alphabet • 聽、說、讀、寫四合一特訓
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            德語共有 26 個基礎字母、3 個變音字母（Ä, Ö, Ü）與 1 個特殊字母（ß）。在歌德 A1 口語考試第一部分，考官一定會要求您「拼出名字（Buchstabieren）」。掌握這 30 個字母的正確讀音與特徵，為您的德語奠定最純粹的發音基石！
          </p>

          {onBackToRoadmap && (
            <div className="pt-2">
              <button
                onClick={onBackToRoadmap}
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold rounded-2xl backdrop-blur-xs transition"
              >
                ← 返回 365 學習地圖
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 4 Core Skills + Quiz Tabs Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveTab('listen')}
            className={`px-4 py-2.5 rounded-2xl text-sm font-bold flex items-center space-x-2 transition ${
              activeTab === 'listen'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Headphones className="w-4 h-4" />
            <span>🎧 聽：字母原音與拼讀</span>
          </button>

          <button
            onClick={() => setActiveTab('speak')}
            className={`px-4 py-2.5 rounded-2xl text-sm font-bold flex items-center space-x-2 transition ${
              activeTab === 'speak'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Mic className="w-4 h-4" />
            <span>🗣️ 說：AI 語音發音挑戰</span>
          </button>

          <button
            onClick={() => setActiveTab('read')}
            className={`px-4 py-2.5 rounded-2xl text-sm font-bold flex items-center space-x-2 transition ${
              activeTab === 'read'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>📖 讀：發音特徵與經典字</span>
          </button>

          <button
            onClick={() => setActiveTab('write')}
            className={`px-4 py-2.5 rounded-2xl text-sm font-bold flex items-center space-x-2 transition ${
              activeTab === 'write'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <PenTool className="w-4 h-4" />
            <span>✍️ 寫：字母手寫畫布摹寫</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2.5 rounded-2xl text-sm font-bold flex items-center space-x-2 transition ${
              activeTab === 'quiz'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>🎯 測：歌德拼讀驗收測驗</span>
          </button>
        </div>

        {/* Search Input for letters */}
        {activeTab !== 'quiz' && (
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜尋字母、讀音、諧音..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 shadow-2xs"
            />
          </div>
        )}
      </div>

      {activeTab !== 'quiz' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Interactive 30-Letter Matrix Grid (5 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <button
                onClick={() => setFilterCategory('all')}
                className={`px-3 py-1.5 rounded-xl transition ${
                  filterCategory === 'all'
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                全部字母 (30)
              </button>
              <button
                onClick={() => setFilterCategory('vowel')}
                className={`px-3 py-1.5 rounded-xl transition ${
                  filterCategory === 'vowel'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                }`}
              >
                元音 Vokale (5)
              </button>
              <button
                onClick={() => setFilterCategory('consonant')}
                className={`px-3 py-1.5 rounded-xl transition ${
                  filterCategory === 'consonant'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                }`}
              >
                輔音 Konsonanten (21)
              </button>
              <button
                onClick={() => setFilterCategory('umlaut')}
                className={`px-3 py-1.5 rounded-xl transition ${
                  filterCategory === 'umlaut'
                    ? 'bg-amber-600 text-white'
                    : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
                }`}
              >
                變音 Umlaute (3)
              </button>
              <button
                onClick={() => setFilterCategory('special')}
                className={`px-3 py-1.5 rounded-xl transition ${
                  filterCategory === 'special'
                    ? 'bg-rose-600 text-white'
                    : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
                }`}
              >
                特殊字 (ß)
              </button>
            </div>

            {/* Matrix Grid */}
            <div className="grid grid-cols-5 sm:grid-cols-6 gap-3">
              {filteredLetters.map((item) => {
                const isSelected = selectedLetter.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedLetter(item);
                      handlePlayLetter(item);
                      setSpeakingScore(null);
                      setSpokenTranscript('');
                      clearCanvas();
                    }}
                    className={`p-3 rounded-2xl border text-center transition flex flex-col items-center justify-between group relative cursor-pointer ${
                      isSelected
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-md ring-2 ring-indigo-400/40 scale-105 z-10'
                        : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-900 hover:border-indigo-300'
                    }`}
                  >
                    <div className="text-2xl sm:text-3xl font-extrabold font-serif">
                      {item.char}
                      <span
                        className={`text-base ml-1 font-normal ${
                          isSelected ? 'text-indigo-200' : 'text-slate-400'
                        }`}
                      >
                        {item.lower}
                      </span>
                    </div>

                    <div className="mt-1 flex flex-col items-center">
                      <span
                        className={`text-[11px] font-bold ${
                          isSelected ? 'text-indigo-100' : 'text-indigo-600'
                        }`}
                      >
                        {item.name}
                      </span>
                      <span
                        className={`text-[10px] font-mono ${
                          isSelected ? 'text-indigo-200' : 'text-slate-400'
                        }`}
                      >
                        {item.ipa.split(' ')[0]}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Quick Tip */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start space-x-2.5">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">歌德 A1 應試錦囊：</span>
                在口試自我介紹時，若名字中有變音，考官會特別留心您是否念對字母名稱（如 Ä 讀作 A-Umlaut，而不是念成 A；ß 讀作 Eszett 或 scharfes S）。
              </div>
            </div>
          </div>

          {/* Right: Detailed 4-Skills Interactive Workspace (7 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Active Letter Detail Spotlight Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-3xl font-extrabold text-indigo-700 font-serif shadow-inner">
                    {selectedLetter.char} {selectedLetter.lower}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h2 className="text-2xl font-bold text-slate-900">
                        字母 {selectedLetter.char} ({selectedLetter.name})
                      </h2>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100 text-indigo-800">
                        {selectedLetter.categoryLabel}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 font-mono">
                      國際音標 IPA: <strong className="text-indigo-600">{selectedLetter.ipa}</strong>
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handlePlayLetter(selectedLetter)}
                  className="p-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition active:scale-95"
                  title="聆聽標準字母發音"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>

              {/* 1. LISTEN TAB */}
              {activeTab === 'listen' && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      發音口訣與諧音
                    </span>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-800 flex items-center justify-between">
                      <span>{selectedLetter.zhSound}</span>
                      <button
                        onClick={() => handlePlayLetter(selectedLetter)}
                        className="text-xs text-indigo-600 hover:underline font-semibold"
                      >
                        重聽一遍
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      經典範例詞彙（點擊聆聽單字發音）
                    </span>
                    <div className="space-y-2">
                      {selectedLetter.sampleWords.map((sw, idx) => (
                        <div
                          key={idx}
                          onClick={() => handlePlayWord(sw.word)}
                          className="p-3 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition cursor-pointer flex items-center justify-between group"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="p-2 rounded-xl bg-white shadow-2xs group-hover:bg-indigo-600 group-hover:text-white transition text-slate-600">
                              <Volume2 className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-slate-900">
                                {sw.word}
                              </div>
                              <div className="text-xs text-slate-500">{sw.meaning}</div>
                            </div>
                          </div>
                          <span className="text-xs text-indigo-600 font-semibold opacity-0 group-hover:opacity-100 transition">
                            點擊發音 →
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 2. SPEAK TAB */}
              {activeTab === 'speak' && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-xs text-indigo-950 space-y-1">
                    <p className="font-bold">目標發音：{selectedLetter.name} ({selectedLetter.char})</p>
                    <p className="text-indigo-700">{selectedLetter.pronunciationTips}</p>
                  </div>

                  {/* Speech Trigger Box */}
                  <div className="text-center py-6 space-y-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <button
                      onClick={() => handleStartSpeaking(selectedLetter.char)}
                      disabled={isRecording}
                      className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg transition active:scale-95 cursor-pointer ${
                        isRecording
                          ? 'bg-rose-500 text-white animate-pulse ring-4 ring-rose-200'
                          : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                      }`}
                    >
                      {isRecording ? <MicOff className="w-7 h-7" /> : <Mic className="w-7 h-7" />}
                    </button>

                    <div>
                      <p className="text-xs font-bold text-slate-700">
                        {isRecording ? '正在聆聽並錄下您的發音...請清楚唸出字母！' : '點擊麥克風開始錄音跟讀'}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        支援辨識字母名稱（如 „{selectedLetter.name}“）或發音音素
                      </p>
                    </div>

                    {isRecording && (
                      <button
                        onClick={handleStopLetterRecordingManually}
                        className="mt-2 px-4 py-1.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl shadow-xs transition active:scale-95 flex items-center space-x-1.5 mx-auto cursor-pointer"
                      >
                        <Radio className="w-3.5 h-3.5 animate-pulse" />
                        <span>讀完了（結束錄音並判定）</span>
                      </button>
                    )}

                  </div>

                  {/* Results & Recording Feedback Area */}
                  {(speakingScore !== null || spokenTranscript || recordedVoiceUrl) && (
                    <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
                      {/* 1. Verdict Card (念得好不好、正不正確) */}
                      {speakingScore !== null && (
                        <div
                          className={`p-4 rounded-2xl border text-left transition shadow-xs ${
                            speakingScore >= 80
                              ? 'bg-emerald-50/90 border-emerald-200 text-emerald-950'
                              : speakingScore >= 60
                              ? 'bg-amber-50/90 border-amber-200 text-amber-950'
                              : 'bg-rose-50/90 border-rose-200 text-rose-950'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              {speakingScore >= 80 ? (
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                              ) : speakingScore >= 60 ? (
                                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                              ) : (
                                <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                              )}
                              <span className="font-extrabold text-sm">
                                {speakingScore >= 80
                                  ? '🌟 念得非常好！發音正確地道 (Ausgezeichnet)'
                                  : speakingScore >= 60
                                  ? '⚠️ 念得尚可，發音基本正確 (Gut gemacht)'
                                  : '❌ 發音不夠準確，請再試一次 (Nicht ganz richtig)'}
                              </span>
                            </div>

                            <span
                              className={`px-2.5 py-0.5 rounded-full text-xs font-black shrink-0 ${
                                speakingScore >= 80
                                  ? 'bg-emerald-600 text-white'
                                  : speakingScore >= 60
                                  ? 'bg-amber-600 text-white'
                                  : 'bg-rose-600 text-white'
                              }`}
                            >
                              {speakingScore >= 80
                                ? '判定：正確'
                                : speakingScore >= 60
                                ? '判定：部分正確'
                                : '判定：不正確'}
                            </span>
                          </div>

                          <p className="text-xs mt-2 leading-relaxed opacity-90">
                            {speakingScore >= 80
                              ? `太棒了！您的發音與音準達到標準（匹配度：${speakingScore}%）。`
                              : speakingScore >= 60
                              ? `基本辨識出讀音（匹配度：${speakingScore}%），建議點擊標準示範多聽幾次嘴型舌位差別。`
                              : `辨識差距較大或未被清楚辨識（匹配度：${speakingScore}%），請聽完示範發音後再次朗讀。`}
                          </p>
                        </div>
                      )}

                      {/* 2. Dual Audio Comparison: Student's Voice vs. Native Letter */}
                      <div className="p-4 bg-slate-900 text-white rounded-2xl shadow-md space-y-2.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-amber-300 flex items-center space-x-1.5">
                            <Headphones className="w-4 h-4" />
                            <span>雙軌錄音對比（聽自己的發音 vs. 字母原音）</span>
                          </span>
                          <span className="text-[10px] text-slate-400">交叉聆聽</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                          {/* Student's Recording Playback */}
                          <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 flex flex-col justify-between">
                            <span className="text-[11px] text-slate-300 font-bold mb-1.5 flex items-center space-x-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                              <span>我的發音錄音</span>
                            </span>
                            {recordedVoiceUrl ? (
                              <button
                                onClick={handlePlayUserVoice}
                                className={`w-full py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center space-x-1.5 transition active:scale-95 cursor-pointer ${
                                  isPlayingVoice
                                    ? 'bg-amber-500 text-slate-950 shadow-md'
                                    : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                                }`}
                              >
                                {isPlayingVoice ? (
                                  <>
                                    <Pause className="w-3.5 h-3.5 fill-current" />
                                    <span>暫停播放</span>
                                  </>
                                ) : (
                                  <>
                                    <Play className="w-3.5 h-3.5 fill-current" />
                                    <span>🎧 播放我的錄音</span>
                                  </>
                                )}
                              </button>
                            ) : (
                              <div className="py-1 text-center text-[11px] text-slate-400">
                                （未擷取到音訊檔案）
                              </div>
                            )}
                          </div>

                          {/* Standard Model Pronunciation */}
                          <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 flex flex-col justify-between">
                            <span className="text-[11px] text-slate-300 font-bold mb-1.5 flex items-center space-x-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                              <span>字母標準發音</span>
                            </span>
                            <button
                              onClick={() => handlePlayLetter(selectedLetter)}
                              className="w-full py-2 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center justify-center space-x-1.5 transition active:scale-95 cursor-pointer"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                              <span>🔊 聆聽標準原音</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* 3. Recognized Transcript & Re-record */}
                      <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between gap-3 text-xs">
                        <div>
                          <span className="text-slate-400">系統聽到的發音：</span>
                          <strong className="text-slate-800 ml-1">
                            „{spokenTranscript || '(無聲音)'}“
                          </strong>
                        </div>

                        <button
                          onClick={() => handleStartSpeaking(selectedLetter.char)}
                          className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-bold flex items-center space-x-1 text-xs shrink-0 cursor-pointer"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>重新朗讀</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 3. READ TAB */}
              {activeTab === 'read' && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      深度發音生理與舌位技巧
                    </span>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {selectedLetter.pronunciationTips}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      易混淆對比指引
                    </span>
                    <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 space-y-1.5">
                      <p>
                        <strong>J</strong>：不要讀成英語的 /dʒ/，德語讀如英文 yes 中的 y！
                      </p>
                      <p>
                        <strong>V</strong>：德語固有字絕大部分讀作 /f/（如 Vater、vier）！
                      </p>
                      <p>
                        <strong>W</strong>：永遠讀作齒唇擦音 /v/，咬下嘴唇發音！
                      </p>
                      <p>
                        <strong>Z</strong>：絕非濁音，永遠讀如中文「茨」/ts/！
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 4. WRITE TAB */}
              {activeTab === 'write' && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-600">
                    <span className="font-bold text-indigo-700">筆順手寫引導：</span>
                    {selectedLetter.letterStrokeAdvice}
                  </div>

                  {/* Interactive Drawing Canvas */}
                  <div className="relative border-2 border-dashed border-indigo-200 rounded-3xl bg-slate-50/50 p-2 text-center overflow-hidden">
                    {/* Watermark Reference Behind */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-15">
                      <span className="text-8xl sm:text-9xl font-serif text-slate-900 font-bold">
                        {selectedLetter.char} {selectedLetter.lower}
                      </span>
                    </div>

                    <canvas
                      ref={canvasRef}
                      width={400}
                      height={220}
                      onMouseDown={startDrawing}
                      onMouseMove={draw}
                      onMouseUp={stopDrawing}
                      onMouseLeave={stopDrawing}
                      onTouchStart={startDrawing}
                      onTouchMove={draw}
                      onTouchEnd={stopDrawing}
                      className="mx-auto w-full max-w-[400px] h-[220px] bg-transparent cursor-crosshair touch-none"
                    />

                    {/* Canvas Controls */}
                    <div className="flex items-center justify-between px-2 pt-2 border-t border-slate-200/60 text-xs">
                      <div className="flex items-center space-x-2">
                        <span className="text-slate-400">筆觸顏色：</span>
                        <button
                          onClick={() => setStrokeColor('#4338ca')}
                          className={`w-5 h-5 rounded-full bg-indigo-700 ${strokeColor === '#4338ca' ? 'ring-2 ring-offset-1 ring-indigo-500' : ''}`}
                        />
                        <button
                          onClick={() => setStrokeColor('#059669')}
                          className={`w-5 h-5 rounded-full bg-emerald-600 ${strokeColor === '#059669' ? 'ring-2 ring-offset-1 ring-emerald-500' : ''}`}
                        />
                        <button
                          onClick={() => setStrokeColor('#e11d48')}
                          className={`w-5 h-5 rounded-full bg-rose-600 ${strokeColor === '#e11d48' ? 'ring-2 ring-offset-1 ring-rose-500' : ''}`}
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <button
                          onClick={clearCanvas}
                          className="px-3 py-1 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 transition flex items-center space-x-1"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>重寫</span>
                        </button>
                        {hasDrawn && (
                          <span className="text-emerald-600 font-bold flex items-center space-x-1 text-xs">
                            <Check className="w-3.5 h-3.5" />
                            <span>完成練習</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* QUIZ TAB */
        <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-200">
          {!quizCompleted ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 pb-3 border-b border-slate-100">
                <span>歌德 A1 拼讀實戰測驗：第 {quizIndex + 1} / {SPELLING_QUIZ_ITEMS.length} 題</span>
                <span>目前得分：{quizScore} 分</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 font-bold flex items-center justify-center text-xl">
                    {SPELLING_QUIZ_ITEMS[quizIndex].letter}
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">
                      考點聚焦：字母 {SPELLING_QUIZ_ITEMS[quizIndex].letter}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {SPELLING_QUIZ_ITEMS[quizIndex].meaning}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-between">
                  <div className="text-sm font-bold text-indigo-950">
                    拼讀考題示範：{SPELLING_QUIZ_ITEMS[quizIndex].audioPrompt}
                  </div>
                  <button
                    onClick={() =>
                      SpeechService.speak(
                        SPELLING_QUIZ_ITEMS[quizIndex].audioPrompt,
                        0.85
                      )
                    }
                    className="p-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white transition shadow-xs"
                    title="聆聽題目標準德語發音"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {SPELLING_QUIZ_ITEMS[quizIndex].options.map((opt, optIdx) => {
                  const isSelected = selectedAnswer === optIdx;
                  const isCorrect =
                    selectedAnswer !== null &&
                    optIdx === SPELLING_QUIZ_ITEMS[quizIndex].correctIndex;
                  const isWrong =
                    selectedAnswer !== null &&
                    isSelected &&
                    optIdx !== SPELLING_QUIZ_ITEMS[quizIndex].correctIndex;

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleQuizAnswer(optIdx)}
                      disabled={selectedAnswer !== null}
                      className={`w-full p-4 rounded-2xl border text-left text-sm font-semibold transition flex items-center justify-between ${
                        isCorrect
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-200'
                          : isWrong
                          ? 'bg-rose-50 border-rose-500 text-rose-900 ring-2 ring-rose-200'
                          : isSelected
                          ? 'bg-indigo-50 border-indigo-500 text-indigo-900'
                          : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                      }`}
                    >
                      <span>{opt}</span>
                      {isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next */}
              {selectedAnswer !== null && (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>解析：</strong> {SPELLING_QUIZ_ITEMS[quizIndex].explanation}
                  </p>
                  <button
                    onClick={handleNextQuiz}
                    className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition"
                  >
                    {quizIndex < SPELLING_QUIZ_ITEMS.length - 1 ? '下一題 →' : '查看測驗成績與總結 🎉'}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200 p-8 text-center space-y-5 shadow-md">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto shadow-inner">
                <Award className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-slate-900">恭喜完成字母特訓測驗！</h3>
                <p className="text-sm text-slate-600">
                  您的得分為：<strong className="text-indigo-600 text-lg">{quizScore}</strong> / 100 分
                </p>
                <p className="text-xs text-slate-400">
                  您已扎實掌握德語 30 字母發音、變音與歌德 A1 拼讀核心重點！
                </p>
              </div>
              <button
                onClick={() => {
                  setQuizIndex(0);
                  setSelectedAnswer(null);
                  setQuizScore(0);
                  setQuizCompleted(false);
                }}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-xs transition"
              >
                再測一次
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
