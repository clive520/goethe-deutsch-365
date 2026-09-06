// Speech Synthesis & Recognition Service for German Learning

export class SpeechService {
  private static cachedVoice: SpeechSynthesisVoice | null = null;
  private static activeResolve: (() => void) | null = null;

  /**
   * Get best available German voice
   */
  static getGermanVoice(): SpeechSynthesisVoice | null {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return null;
    }

    if (this.cachedVoice) return this.cachedVoice;

    const voices = window.speechSynthesis.getVoices();
    // Prioritize natural or premium de-DE voices
    const deVoice = voices.find(
      (v) => (v.lang === 'de-DE' || v.lang.startsWith('de')) && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Hedda') || v.name.includes('Katja') || v.name.includes('Stefan'))
    ) || voices.find((v) => v.lang === 'de-DE') || voices.find((v) => v.lang.startsWith('de'));

    if (deVoice) {
      this.cachedVoice = deVoice;
    }
    return deVoice || null;
  }

  /**
   * Speak German text with adjustable speed
   */
  static speak(text: string, rate: number = 1.0): Promise<void> {
    // If a previous speech is running, resolve it immediately so loops don't get stuck
    if (this.activeResolve) {
      this.activeResolve();
      this.activeResolve = null;
    }

    return new Promise((resolve) => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
        console.warn('Speech synthesis not supported in this browser.');
        resolve();
        return;
      }

      window.speechSynthesis.cancel(); // Stop any pending utterances

      this.activeResolve = resolve;

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = Math.max(0.6, Math.min(rate, 1.4));
      utterance.pitch = 1.0;

      const voice = this.getGermanVoice();
      if (voice) {
        utterance.voice = voice;
      }

      const finish = () => {
        if (this.activeResolve === resolve) {
          this.activeResolve = null;
        }
        resolve();
      };

      utterance.onend = finish;
      utterance.onerror = () => finish();

      window.speechSynthesis.speak(utterance);
    });
  }

  /**
   * Stop any current speech playback immediately
   */
  static stopSpeaking() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (this.activeResolve) {
      this.activeResolve();
      this.activeResolve = null;
    }
  }

  /**
   * Check if browser supports Web Speech Recognition
   */
  static isRecognitionSupported(): boolean {
    if (typeof window === 'undefined') return false;
    return 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
  }

  /**
   * Initialize speech recognition session
   */
  static createRecognizer(
    onResult: (transcript: string, isFinal: boolean) => void,
    onError: (err: string) => void,
    onEnd: () => void
  ) {
    if (!this.isRecognitionSupported()) {
      onError('您的瀏覽器不支援 Web Speech 語音辨識，建議使用 Google Chrome 或 Edge 瀏覽器。');
      return null;
    }

    const SpeechRecognitionClass =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognitionClass();

    recognition.lang = 'de-DE';
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onresult = (event: any) => {
      let interim = '';
      let final = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final += event.results[i][0].transcript;
        } else {
          interim += event.results[i][0].transcript;
        }
      }
      if (final) {
        onResult(final.trim(), true);
      } else if (interim) {
        onResult(interim.trim(), false);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onerror = (event: any) => {
      console.warn('Speech recognition error:', event.error);
      onError(event.error === 'not-allowed' ? '麥克風存取權限被拒絕，請開啟權限後重試。' : `辨識錯誤：${event.error}`);
    };

    recognition.onend = () => {
      onEnd();
    };

    return recognition;
  }

  /**
   * Calculate accuracy score between expected German text and recognized speech
   */
  static calculateScore(target: string, spoken: string): {
    score: number;
    matchedWords: string[];
    missedWords: string[];
  } {
    const clean = (str: string) =>
      str
        .toLowerCase()
        .replace(/[.,!?;:"'()]/g, '')
        .trim();

    const targetWords = clean(target).split(/\s+/).filter(Boolean);
    const spokenWords = clean(spoken).split(/\s+/).filter(Boolean);

    if (targetWords.length === 0) return { score: 100, matchedWords: [], missedWords: [] };

    const matchedWords: string[] = [];
    const missedWords: string[] = [];

    targetWords.forEach((targetWord) => {
      // Direct match or partial tolerance
      const isMatch = spokenWords.some((spk) => {
        if (spk === targetWord) return true;
        // Simple Levenshtein distance tolerance for 1 letter off
        return this.levenshtein(spk, targetWord) <= 1 && targetWord.length >= 4;
      });

      if (isMatch) {
        matchedWords.push(targetWord);
      } else {
        missedWords.push(targetWord);
      }
    });

    const score = Math.round((matchedWords.length / targetWords.length) * 100);
    return { score, matchedWords, missedWords };
  }

  /**
   * Calculate detailed pronunciation diagnosis with word-by-word correctness and explicit evaluation
   */
  static calculateDetailedScore(target: string, spoken: string): SpeechEvaluationResult {
    const clean = (str: string) =>
      str
        .toLowerCase()
        .replace(/[.,!?;:"'()„“]/g, '')
        .trim();

    const targetWordsClean = clean(target).split(/\s+/).filter(Boolean);
    const spokenWordsClean = clean(spoken).split(/\s+/).filter(Boolean);

    // Target tokens with original punctuation for display
    const rawTokens = target.split(/\s+/).filter(Boolean);

    const matchedWords: string[] = [];
    const missedWords: string[] = [];

    const wordDetails: WordEvaluation[] = rawTokens.map((raw) => {
      const cleanWord = clean(raw);
      if (!cleanWord) return { raw, clean: cleanWord, isCorrect: true };

      const isMatch = spokenWordsClean.some((spk) => {
        if (spk === cleanWord) return true;
        return this.levenshtein(spk, cleanWord) <= 1 && cleanWord.length >= 4;
      });

      if (isMatch) {
        matchedWords.push(cleanWord);
      } else {
        missedWords.push(cleanWord);
      }

      return {
        raw,
        clean: cleanWord,
        isCorrect: isMatch,
      };
    });

    const totalCleanWords = targetWordsClean.length || 1;
    const score = Math.min(100, Math.round((matchedWords.length / totalCleanWords) * 100));

    let verdict: SpeechEvaluationResult['verdict'];
    let verdictTitle: string;
    let verdictMessage: string;
    let isCorrect: boolean;

    if (score >= 85) {
      verdict = 'EXCELLENT';
      isCorrect = true;
      verdictTitle = '🌟 念得非常優秀！發音正確地道 (Ausgezeichnet)';
      verdictMessage = '太棒了！您的發音、重音與語調完全達到標準，字正腔圓，繼續保持！';
    } else if (score >= 70) {
      verdict = 'GOOD';
      isCorrect = true;
      verdictTitle = '👍 念得很好！發音基本正確 (Gut gemacht)';
      verdictMessage = '讀得很流暢！大部分詞彙發音正確，僅少數單字略有微小差異，可點擊紅字單獨聆聽複習。';
    } else if (score >= 50) {
      verdict = 'NEEDS_WORK';
      isCorrect = false;
      verdictTitle = '⚠️ 念得尚可，部分不夠正確 (Noch üben)';
      verdictMessage = '有辨識到主要詞彙，但有發音不準確或漏字。請重聽自己的錄音並與標準音對比！';
    } else {
      verdict = 'INCORRECT';
      isCorrect = false;
      verdictTitle = '❌ 念得不正確，建議重新朗讀 (Nicht ganz richtig)';
      verdictMessage = '發音與目標句差距較大或聲音過小。請先點擊「聽示範發音」多聽幾次，再按麥克風重新朗讀！';
    }

    return {
      score,
      matchedWords,
      missedWords,
      verdict,
      verdictTitle,
      verdictMessage,
      isCorrect,
      wordDetails,
    };
  }

  static levenshtein(a: string, b: string): number {
    const matrix: number[][] = [];
    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
          );
        }
      }
    }
    return matrix[b.length][a.length];
  }
}

export interface WordEvaluation {
  raw: string;
  clean: string;
  isCorrect: boolean;
}

export interface SpeechEvaluationResult {
  score: number;
  matchedWords: string[];
  missedWords: string[];
  verdict: 'EXCELLENT' | 'GOOD' | 'NEEDS_WORK' | 'INCORRECT';
  verdictTitle: string;
  verdictMessage: string;
  isCorrect: boolean;
  wordDetails: WordEvaluation[];
}

/**
 * Microphone Voice Recorder using MediaRecorder to capture student voice
 */
export class VoiceRecorder {
  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];
  private currentStream: MediaStream | null = null;

  static isSupported(): boolean {
    return (
      typeof window !== 'undefined' &&
      typeof navigator !== 'undefined' &&
      !!navigator.mediaDevices &&
      !!navigator.mediaDevices.getUserMedia &&
      typeof MediaRecorder !== 'undefined'
    );
  }

  async start(): Promise<boolean> {
    if (!VoiceRecorder.isSupported()) {
      return false;
    }

    try {
      this.cleanup();
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.currentStream = stream;

      let mimeType = '';
      if (MediaRecorder.isTypeSupported('audio/webm;codecs=opus')) {
        mimeType = 'audio/webm;codecs=opus';
      } else if (MediaRecorder.isTypeSupported('audio/webm')) {
        mimeType = 'audio/webm';
      } else if (MediaRecorder.isTypeSupported('audio/mp4')) {
        mimeType = 'audio/mp4';
      }

      this.mediaRecorder = mimeType
        ? new MediaRecorder(stream, { mimeType })
        : new MediaRecorder(stream);

      this.mediaRecorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          this.audioChunks.push(e.data);
        }
      };

      this.mediaRecorder.start(100);
      return true;
    } catch (err) {
      console.warn('VoiceRecorder start error:', err);
      this.cleanup();
      return false;
    }
  }

  stop(): Promise<string | null> {
    return new Promise((resolve) => {
      if (!this.mediaRecorder || this.mediaRecorder.state === 'inactive') {
        this.cleanup();
        resolve(null);
        return;
      }

      this.mediaRecorder.onstop = () => {
        if (this.audioChunks.length > 0) {
          const type = this.mediaRecorder?.mimeType || 'audio/webm';
          const audioBlob = new Blob(this.audioChunks, { type });
          const audioUrl = URL.createObjectURL(audioBlob);
          this.cleanup();
          resolve(audioUrl);
        } else {
          this.cleanup();
          resolve(null);
        }
      };

      try {
        this.mediaRecorder.stop();
      } catch {
        this.cleanup();
        resolve(null);
      }
    });
  }

  cancel() {
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      try {
        this.mediaRecorder.stop();
      } catch {
        // ignore
      }
    }
    this.cleanup();
  }

  private cleanup() {
    if (this.currentStream) {
      this.currentStream.getTracks().forEach((track) => {
        try {
          track.stop();
        } catch {
          // ignore
        }
      });
      this.currentStream = null;
    }
    this.mediaRecorder = null;
    this.audioChunks = [];
  }
}
