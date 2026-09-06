import type { CefrLevel, DayLesson } from '../types/curriculum';
import { week2Lessons } from './lessons/week2';
import { week3Lessons } from './lessons/week3';
import { week4Lessons } from './lessons/week4';
import { week5Lessons } from './lessons/week5';
import { week6Lessons } from './lessons/week6';
import { week7Lessons } from './lessons/week7';
import { week8Lessons } from './lessons/week8';
import { week9Lessons } from './lessons/week9';
import { week10Lessons } from './lessons/week10';
import { week11Lessons } from './lessons/week11';

export interface StageMetadata {
  id: CefrLevel;
  name: string;
  germanName: string;
  daysRange: string;
  startDay: number;
  endDay: number;
  color: string;
  badgeBg: string;
  accentBorder: string;
  description: string;
  goetheTarget: string;
}

export const STAGES: StageMetadata[] = [
  {
    id: 'A1',
    name: 'A1 基礎啟蒙',
    germanName: 'Grundstufe A1 (Start Deutsch 1)',
    daysRange: 'Day 1 - 75',
    startDay: 1,
    endDay: 75,
    color: 'from-emerald-500 to-teal-600',
    badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    accentBorder: 'border-emerald-500',
    description: '掌握德語發音規律、日常招呼、基本自我介紹、購物問路與三大性別基礎句型。',
    goetheTarget: '達標 Goethe-Zertifikat A1：能理解日常簡短對話與告示牌，進行基礎溝通。',
  },
  {
    id: 'A2',
    name: 'A2 日常深化',
    germanName: 'Aufbaustufe A2',
    daysRange: 'Day 76 - 180',
    startDay: 76,
    endDay: 180,
    color: 'from-blue-500 to-indigo-600',
    badgeBg: 'bg-blue-100 text-blue-800 border-blue-300',
    accentBorder: 'border-blue-500',
    description: '日常生活、就醫租屋、工作旅行情境，第三格（Dativ）、分離動詞、過去完成式與介系詞。',
    goetheTarget: '達標 Goethe-Zertifikat A2：能就直接相關領域（個人、家庭、購物、近郊）描述與協商。',
  },
  {
    id: 'B1',
    name: 'B1 核心突破',
    germanName: 'Mittelstufe B1 (Zertifikat Deutsch)',
    daysRange: 'Day 181 - 300',
    startDay: 181,
    endDay: 300,
    color: 'from-amber-500 to-orange-600',
    badgeBg: 'bg-amber-100 text-amber-800 border-amber-300',
    accentBorder: 'border-amber-500',
    description: '主從子句、虛擬二式、被動態、社會議題陳述與歌德檢定重點論證邏輯。',
    goetheTarget: '達標 Goethe-Zertifikat B1：具備獨立德語使用能力，達到德國留學與工作簽證標準。',
  },
  {
    id: 'EXAM',
    name: '歌德全真模擬衝刺',
    germanName: 'Goethe Prüfungstraining',
    daysRange: 'Day 301 - 365',
    startDay: 301,
    endDay: 365,
    color: 'from-rose-500 to-purple-600',
    badgeBg: 'bg-rose-100 text-rose-800 border-rose-300',
    accentBorder: 'border-rose-500',
    description: '聽、說、讀、寫四大模組計時刷題、答題陷阱規避、口說考官互動全套演練。',
    goetheTarget: '實戰奪高分：掌握應試心理與技巧，穩操勝券通過官方歌德各項模組認證。',
  },
];

// Rich Handcrafted Detailed Lessons for Foundations
const detailedLessons: Record<number, DayLesson> = {
  1: {
    day: 1,
    stage: 'A1',
    week: 1,
    dayOfWeek: 1,
    title: 'Guten Tag! 德語初見面與問候',
    germanTitle: 'Begrüßung & Erste Kontakte',
    theme: '初次相遇、打招呼與基礎字母發音',
    estimatedMinutes: 20,
    grammar: {
      title: '動詞變位入門：sein (是) 與 heißen (名叫)',
      explanation:
        '德語動詞會根據主詞（人稱）改變字尾。最核心的兩個動詞是 sein（我是 ich bin, 您是 Sie sind）與 heißen（我叫 ich heiße, 您叫 wie heißen Sie?）。',
      ruleExample: [
        { de: 'Ich bin Lukas.', zh: '我是盧卡斯。', note: 'ich + bin (第一人稱單數)' },
        { de: 'Wie heißen Sie?', zh: '您叫什麼名字？（尊稱）', note: 'Sie + heißen' },
        { de: 'Ich heiße Anna.', zh: '我叫安娜。', note: 'ich + heiße' },
      ],
    },
    vocabulary: [
      {
        id: 'd1_v1',
        word: 'Guten Tag',
        meaning: '你好 / 日安 (正式)',
        example: 'Guten Tag, Herr Müller!',
        exampleTr: '日安，穆勒先生！',
      },
      {
        id: 'd1_v2',
        word: 'Hallo',
        meaning: '嗨 / 你好 (親切隨和)',
        example: 'Hallo, wie geht es dir?',
        exampleTr: '嗨，你最近好嗎？',
      },
      {
        id: 'd1_v3',
        word: 'heißen',
        meaning: '名叫、稱作 (動詞)',
        example: 'Ich heiße Sophia.',
        exampleTr: '我的名字是索菲亞。',
      },
      {
        id: 'd1_v4',
        word: 'Auf Wiedersehen',
        meaning: '再見 (正式)',
        example: 'Auf Wiedersehen und schönen Tag noch!',
        exampleTr: '再見，祝您今天過得愉快！',
      },
      {
        id: 'd1_v5',
        word: 'Tschüss',
        meaning: '掰掰 (非正式)',
        example: 'Tschüss, bis morgen!',
        exampleTr: '掰掰，明天見！',
      },
    ],
    listening: {
      title: '在語言學校接待處相遇 (Am Empfang der Sprachschule)',
      situation: '安娜在法蘭克福歌德語言學校櫃檯辦理報到，與接待專員施密特先生初次交談。',
      dialogue: [
        { speaker: 'Herr Schmidt', de: 'Guten Tag! Willkommen an der Sprachschule.', zh: '日安！歡迎來到語言學校。' },
        { speaker: 'Anna', de: 'Guten Tag! Mein Name ist Anna Weber.', zh: '日安！我的名字是安娜·韋伯。' },
        { speaker: 'Herr Schmidt', de: 'Freut mich, Frau Weber. Wie schreibt man das?', zh: '很高興認識您，韋伯女士。這個怎麼拼寫呢？' },
        { speaker: 'Anna', de: 'W - E - B - E - R.', zh: 'W - E - B - E - R。' },
        { speaker: 'Herr Schmidt', de: 'Vielen Dank. Hier ist Ihre Zimmernummer: Raum 104.', zh: '非常感謝。這是您的教室號碼：104 教室。' },
        { speaker: 'Anna', de: 'Danke schön! Auf Wiedersehen.', zh: '太感謝了！再見。' },
        { speaker: 'Herr Schmidt', de: 'Auf Wiedersehen, Frau Weber!', zh: '再見，韋伯女士！' },
      ],
      questions: [
        {
          id: 'd1_lq1',
          question: 'Wo findet das Gespräch statt? (對話在哪裡發生？)',
          options: ['Im Supermarkt (超市)', 'An der Sprachschule (語言學校)', 'Im Bahnhof (火車站)', 'Im Restaurant (餐廳)'],
          correctIndex: 1,
          explanation: 'Herr Schmidt 在開頭說了「Willkommen an der Sprachschule (歡迎來到語言學校)」。',
        },
        {
          id: 'd1_lq2',
          question: 'In welchen Raum geht Frau Weber? (韋伯女士要去哪間教室？)',
          options: ['Raum 101', 'Raum 104', 'Raum 204', 'Raum 401'],
          correctIndex: 1,
          explanation: '對話提到「Hier ist Ihre Zimmernummer: Raum 104 (這是您的教室號碼：104 教室)」。',
        },
      ],
    },
    speaking: {
      title: '歌德 A1 口說實戰 Part 1：自我介紹 (Sich vorstellen)',
      instruction: '請點擊「聆聽示範」模仿標準德語音調，接著開啟麥克風進行跟讀錄音。系統將依據發音準確度評分！',
      targetSentences: [
        {
          id: 'd1_s1',
          de: 'Guten Tag, mein Name ist Anna.',
          zh: '日安，我的名字是安娜。',
          phoneticTip: '「Tag」結尾的 g 發輕濁音或近 k；「Name」結尾 e 要清晰唸出 /ə/，不能吞掉。',
        },
        {
          id: 'd1_s2',
          de: 'Ich heiße Lukas und komme aus Taiwan.',
          zh: '我叫盧卡斯，來自台灣。',
          phoneticTip: '「Ich」的 ch 發舌前摩擦音 /ç/（像吹氣般輕柔），不是英文的 k 或 sh！',
        },
        {
          id: 'd1_s3',
          de: 'Auf Wiedersehen, bis bald!',
          zh: '再見，回頭見！',
          phoneticTip: '「Wiedersehen」重音在前，ie 發長音 /i:/。',
        },
      ],
      rolePlay: {
        partnerName: 'Prüfer (歌德考官)',
        partnerRole: '歌德檢定 A1 主考官',
        scenario: '考官在口說考試開始時向您親切致意，請向考官問好並介紹自己的名字。',
        promptDe: 'Guten Tag! Wie heißen Sie bitte?',
        promptZh: '日安！請問您叫什麼名字呢？',
        sampleReplies: ['Guten Tag! Ich heiße Lukas Chen.', 'Guten Tag! Mein Name ist Sophia Wang, freut mich!'],
      },
    },
    reading: {
      title: '歌德 A1 閱讀題型：語言學校迎新告示 (Aushang am schwarzen Brett)',
      documentType: 'Aushang',
      sourceInfo: 'Goethe-Institut Frankfurt • Schwarzes Brett',
      content:
        'Herzlich willkommen an der Sprachschule!\n\nLiebe Kursteilnehmerinnen und Kursteilnehmer,\nder Deutschkurs A1 beginnt heute um 09:00 Uhr in Raum 104.\nBitte bringen Sie Ihr Lehrbuch und einen Notizblock mit.\n\nBei Fragen wenden Sie sich an das Sekretariat in Raum 10.\nWir wünschen Ihnen viel Erfolg und Freude beim Deutschlernen!\n\nIhr Sprachschul-Team',
      translation:
        '熱烈歡迎來到語言學校！\n\n親愛的學員們：\n德語 A1 課程於今天上午 09:00 在 104 教室開始。\n請務必攜帶您的教科書與筆記本。\n\n若有疑問，請洽詢 10 號辦公室秘書處。\n祝您德語學習順利愉快！\n\n語言學校團隊 敬上',
      glossary: {
        Kursteilnehmer: { pos: 'der', meaning: '課程學員 (複數: die Kursteilnehmer)' },
        Lehrbuch: { pos: 'das', meaning: '教科書 (複數: die Lehrbücher)' },
        Sekretariat: { pos: 'das', meaning: '秘書處 / 行政辦公室' },
        Erfolg: { pos: 'der', meaning: '成功、成效 (viel Erfolg: 祝順利)' },
      },
      questions: [
        {
          id: 'd1_rq1',
          question: 'Wann fängt der Kurs an? (課程何時開始？)',
          options: ['Um 08:00 Uhr', 'Um 09:00 Uhr', 'Um 10:00 Uhr', 'Um 14:00 Uhr'],
          correctIndex: 1,
          explanation: '告示中明確寫道「beginnt heute um 09:00 Uhr (今天上午 09:00 開始)」。',
        },
        {
          id: 'd1_rq2',
          question: 'Was muss man mitbringen? (必須攜帶什麼物品？)',
          options: ['Ein Wörterbuch (字典)', 'Ein Lehrbuch und einen Notizblock (教科書與筆記本)', 'Einen Laptop (筆記型電腦)', 'Einen Reisepass (護照)'],
          correctIndex: 1,
          explanation: '告示載明「Bitte bringen Sie Ihr Lehrbuch und einen Notizblock mit」。',
        },
      ],
    },
    examTip: {
      skill: 'Sprechen',
      title: '歌德 A1 口說 Part 1 得分秘訣',
      content:
        '在第一部分自我介紹時，考官通常會要求你拼寫名字（Buchstabieren）或是唸出電話號碼（Telefonnummer）。請務必熟記德語 26 字母發音（尤其是 E / I / J / V / W / Y）以及德語特有的變音 Ä / Ö / Ü 和 ß！',
    },
  },

  2: {
    day: 2,
    stage: 'A1',
    week: 1,
    dayOfWeek: 2,
    title: 'Woher kommen Sie? 國籍、居住地與語言',
    germanTitle: 'Herkunft, Wohnort und Sprachen',
    theme: '自我介紹進階：你來自哪裡、住在何處、會說什麼語言',
    estimatedMinutes: 20,
    grammar: {
      title: '動詞變位規則：kommen (來自), wohnen (居住), sprechen (說)',
      explanation:
        '德語現在式標準字尾變化為：ich -e, du -st, er/sie/es -t, wir -en, ihr -t, Sie/sie -en。注意 sprechen 在第二、三人稱單數母音 e 會變音為 i (du sprichst, er spricht)。',
      ruleExample: [
        { de: 'Ich komme aus Taiwan.', zh: '我來自台灣。', note: 'kommen + aus + 國家' },
        { de: 'Wo wohnst du? - Ich wohne in Berlin.', zh: '你住哪？- 我住在柏林。', note: 'wohnen + in + 城市' },
        { de: 'Ich spreche Chinesisch und etwas Deutsch.', zh: '我說中文以及一點德文。', note: 'etwas = 一點點' },
      ],
    },
    vocabulary: [
      {
        id: 'd2_v1',
        word: 'kommen',
        meaning: '來、來自 (動詞)',
        example: 'Woher kommen Sie?',
        exampleTr: '您來自哪裡？',
      },
      {
        id: 'd2_v2',
        word: 'wohnen',
        meaning: '居住 (動詞)',
        example: 'Ich wohne in Taipeh.',
        exampleTr: '我住在台北。',
      },
      {
        id: 'd2_v3',
        word: 'die Sprache',
        article: 'die',
        plural: 'die Sprachen',
        meaning: '語言 (名詞)',
        example: 'Welche Sprachen sprichst du?',
        exampleTr: '你會說哪些語言？',
      },
      {
        id: 'd2_v4',
        word: 'Deutschland',
        meaning: '德國 (國名)',
        example: 'Ich möchte in Deutschland studieren.',
        exampleTr: '我想在德國念書。',
      },
      {
        id: 'd2_v5',
        word: 'etwas',
        meaning: '稍微、一些 (副詞)',
        example: 'Ich lerne Deutsch und spreche etwas Englisch.',
        exampleTr: '我正在學德文，並且會說一點英文。',
      },
    ],
    listening: {
      title: '國際同學破冰交談 (Kennenlernen im Deutschkurs)',
      situation: '下課時間，來自台灣的 Kevin 與來自德國慕尼黑的老師及同學聊天。',
      dialogue: [
        { speaker: 'Kevin', de: 'Hallo! Ich bin Kevin. Woher kommst du?', zh: '嗨！我是凱文。你來自哪裡？' },
        { speaker: 'Maria', de: 'Hallo Kevin! Ich komme aus Spanien, aus Madrid. Und du?', zh: '嗨凱文！我來自西班牙馬德里。你呢？' },
        { speaker: 'Kevin', de: 'Ich komme aus Taiwan. Ich wohne jetzt hier in München.', zh: '我來自台灣。我現在住在慕尼黑這裡。' },
        { speaker: 'Maria', de: 'Toll! Welche Sprachen sprichst du?', zh: '太棒了！你會說什麼語言？' },
        { speaker: 'Kevin', de: 'Ich spreche Chinesisch, Englisch und ein bisschen Deutsch.', zh: '我會說中文、英文和一點點德文。' },
      ],
      questions: [
        {
          id: 'd2_lq1',
          question: 'Woher kommt Maria? (瑪麗亞來自哪裡？)',
          options: ['Aus Deutschland', 'Aus Spanien', 'Aus Taiwan', 'Aus Italien'],
          correctIndex: 1,
          explanation: 'Maria 回答「Ich komme aus Spanien, aus Madrid」。',
        },
        {
          id: 'd2_lq2',
          question: 'Wo wohnt Kevin jetzt? (凱文現在住在哪裡？)',
          options: ['In Taipeh', 'In Madrid', 'In München', 'In Berlin'],
          correctIndex: 2,
          explanation: 'Kevin 說「Ich wohne jetzt hier in München (我現在住在慕尼黑這裡)」。',
        },
      ],
    },
    speaking: {
      title: '歌德 A1 口說句型訓練：表達國籍與語言',
      instruction: '跟著示範朗讀，注意 aus (來自) 與 in (在...裡面) 的介系詞用法。',
      targetSentences: [
        {
          id: 'd2_s1',
          de: 'Ich komme aus Taiwan und wohne in Taipeh.',
          zh: '我來自台灣，住在台北。',
          phoneticTip: '「wohne」中的 h 不發音，只將前面的 o 音拉長 /vo:nən/。',
        },
        {
          id: 'd2_s2',
          de: 'Ich spreche Mandarin und lerne jetzt Deutsch.',
          zh: '我說國語，現在正在學習德文。',
          phoneticTip: '「Deutsch」結尾的 sch 嘴唇微翹向前噘，發 /ʃ/ 摩擦音。',
        },
      ],
      rolePlay: {
        partnerName: 'Prüfer (考官)',
        partnerRole: '歌德口試考官',
        scenario: '考官拿著個人資料卡問您的來源地與語言能力。',
        promptDe: 'Woher kommen Sie und welche Sprachen sprechen Sie?',
        promptZh: '您來自哪裡，並且會說哪些語言呢？',
        sampleReplies: [
          'Ich komme aus Taiwan. Meine Muttersprache ist Chinesisch und ich lerne Deutsch.',
        ],
      },
    },
    reading: {
      title: '學員名冊自我介紹 (Teilnehmerliste)',
      documentType: 'Kurznachricht',
      sourceInfo: 'Kursforum A1.1',
      content:
        'Hallo alle zusammen!\nMein Name ist Marco Bianchi. Ich komme aus Rom in Italien, aber ich lebe seit zwei Monaten in Hamburg. Ich arbeite als Ingenieur. Meine Muttersprache ist Italienisch, außerdem spreche ich fließend Englisch und lerne jetzt fleißig Deutsch für meine Arbeit.\nIch freue mich auf den Kurs mit euch!',
      translation:
        '大家好！\n我的名字是馬可·比安奇。我來自義大利羅馬，但我已經在漢堡住了兩個月。我是一名工程師。我的母語是義大利語，此外我還能說流利的英語，現在正在為了工作努力學習德語。\n期待和大家一起上課！',
      glossary: {
        Muttersprache: { pos: 'die', meaning: '母語' },
        Ingenieur: { pos: 'der', meaning: '工程師' },
        fleißig: { pos: 'adj', meaning: '勤勉的、努力的' },
        fließend: { pos: 'adv', meaning: '流利地' },
      },
      questions: [
        {
          id: 'd2_rq1',
          question: 'Was ist Marcos Beruf? (馬可的職業是什麼？)',
          options: ['Lehrer (老師)', 'Ingenieur (工程師)', 'Arzt (醫生)', 'Student (大學生)'],
          correctIndex: 1,
          explanation: '內文提到「Ich arbeite als Ingenieur (我是一名工程師)」。',
        },
      ],
    },
    examTip: {
      skill: 'Lesen',
      title: '尋找關鍵字快速定位 (Scanning)',
      content:
        '歌德閱讀測驗時間緊湊，先閱讀題目所問的焦點（如「Beruf 職業」、「Herkunft 來源」、「Ort 地點」），再回到內文快速定位動詞（如 arbeite als...）即可精準命中答案！',
    },
  },

  3: {
    day: 3,
    stage: 'A1',
    week: 1,
    dayOfWeek: 3,
    title: 'Zahlen & Telefonnummer 數字與個人資料',
    germanTitle: 'Zahlen von 0 bis 100 & Telefonnummer',
    theme: '德語十位數反讀規則、電話號碼、年齡與金額計算',
    estimatedMinutes: 20,
    grammar: {
      title: '德語特殊的數字規律：個位數先讀，再加 und，再讀十位數',
      explanation:
        '德語從 21 開始，個位數放在十位數前面！例如 25 讀作 fünf-und-zwanzig（五加二十）。特別注意 1 是 eins，但在組合數前面省略 s（如 21 是 einundzwanzig）。',
      ruleExample: [
        { de: 'fünfundzwanzig (25)', zh: '5 + und + 20', note: '個位在先' },
        { de: 'achtunddreißig (38)', zh: '8 + und + 30', note: '30 寫作 dreißig (用 ß)' },
        { de: 'Ich bin 28 Jahre alt.', zh: '我今年 28 歲。', note: 'achtundzwanzig' },
      ],
    },
    vocabulary: [
      { id: 'd3_v1', word: 'die Nummer', article: 'die', meaning: '號碼、電話號碼', example: 'Wie ist Ihre Telefonnummer?', exampleTr: '您的電話號碼是幾號？' },
      { id: 'd3_v2', word: 'alt', meaning: '年齡的、年老的 (形容詞)', example: 'Wie alt sind Sie?', exampleTr: '您幾歲呢？' },
      { id: 'd3_v3', word: 'das Jahr', article: 'das', plural: 'die Jahre', meaning: '年份、年歲', example: 'Ich bin 25 Jahre alt.', exampleTr: '我今年 25 歲。' },
      { id: 'd3_v4', word: 'die Postleitzahl', article: 'die', meaning: '郵遞區號 (PLZ)', example: 'Die Postleitzahl von Berlin ist 10115.', exampleTr: '柏林的郵遞區號是 10115。' },
    ],
    listening: {
      title: '電話預約掛號與確認號碼 (Termin am Telefon)',
      situation: '診所護士透過電話詢問病人的聯絡電話與出生年月日。',
      dialogue: [
        { speaker: 'Praxis', de: 'Praxis Dr. Schneider, guten Tag!', zh: '施耐德醫師診所，日安！' },
        { speaker: 'Patient', de: 'Guten Tag, ich brauche einen Termin.', zh: '日安，我需要預約看診。' },
        { speaker: 'Praxis', de: 'Gerne. Wie ist Ihre Handynummer bitte?', zh: '好的。請問您的手機號碼是？' },
        { speaker: 'Patient', de: 'Meine Nummer ist null-eins-sieben-zwei, drei-vier-acht, neun-null.', zh: '我的電話是 0172-348-90。' },
        { speaker: 'Praxis', de: 'Also: 0172 - 348 - 90. Stimmt das?', zh: '所以是：0172 - 348 - 90，對嗎？' },
        { speaker: 'Patient', de: 'Ja, genau. Vielen Dank!', zh: '是的沒錯，非常感謝！' },
      ],
      questions: [
        {
          id: 'd3_lq1',
          question: 'Welche Ziffern kommen am Ende der Handynummer? (手機末兩碼為何？)',
          options: ['80', '90', '19', '09'],
          correctIndex: 1,
          explanation: '病患說「neun-null (90)」，護士確認「90. Stimmt das?」。',
        },
      ],
    },
    speaking: {
      title: '報出數字、年齡與手機號碼',
      instruction: '練習德語數字連貫朗讀，特別是 21-99 的個位在前規則。',
      targetSentences: [
        { id: 'd3_s1', de: 'Ich bin vierundzwanzig Jahre alt.', zh: '我今年 24 歲。', phoneticTip: 'vier-und-zwanzig 連讀要流暢。' },
        { id: 'd3_s2', de: 'Meine Telefonnummer ist null-eins-fünf-eins, vier-sechs-sieben.', zh: '我的電話是 0151-467。', phoneticTip: 'null 的 u 讀短音。' },
      ],
    },
    reading: {
      title: '歌德填表格題型：註冊表單 (Anmeldeformular)',
      documentType: 'Anzeige',
      content:
        'ANMELDEFORMULAR - VOLKSHOCHSCHULE MÜNCHEN\n\nName: Meier\nVorname: Stefan\nGeburtsdatum: 14.07.1996\nWohnort: 80331 München, Blumenstraße 12\nTelefon: 089 2334455\nKurs: Deutsch A1 Intensiv\nKursgebühr: 240 Euro',
      translation:
        '慕尼黑市民大學報名表\n\n姓氏：邁爾\n名字：斯特凡\n出生日期：1996年7月14日\n住址：80331 慕尼黑，花街 12 號\n電話：089 2334455\n報名課程：德語 A1 密集班\n學費：240 歐元',
      glossary: {
        Geburtsdatum: { pos: 'das', meaning: '出生日期' },
        Kursgebühr: { pos: 'die', meaning: '課程費用 (Gebühr: 規費)' },
        Vorname: { pos: 'der', meaning: '名 (First name)' },
      },
      questions: [
        {
          id: 'd3_rq1',
          question: 'Wie viel kostet der Kurs? (課程費用多少歐元？)',
          options: ['199 Euro', '240 Euro', '331 Euro', '445 Euro'],
          correctIndex: 1,
          explanation: '表單註明「Kursgebühr: 240 Euro (zweihundertvierzig Euro)」。',
        },
      ],
    },
    examTip: {
      skill: 'Schreiben',
      title: '歌德 A1 寫作 Teil 1 填表技巧',
      content:
        '歌德 A1 寫作第一大題是從簡短說明文中替他人填寫一張 5 個空格的表格（如姓氏 Name、國籍 Herkunft、人數 Anzahl、郵遞區號 PLZ）。注意德國日期格式通常是「日.月.年」（例如 14.07.1996）。',
    },
  },

  4: {
    day: 4,
    stage: 'A1',
    week: 1,
    dayOfWeek: 4,
    title: 'Im Café 咖啡館點餐與付款',
    germanTitle: 'Im Café bestellen und bezahlen',
    theme: '日常消費：點咖啡點心、詢問價格與結帳表達',
    estimatedMinutes: 20,
    grammar: {
      title: '禮貌請求句型：Ich möchte... (我想要...) 與 Was kostet...?',
      explanation:
        '在餐廳或商店，德語最得體受歡迎的表達是「Ich möchte bitte... (我想要請給我...)」，配合「Was kostet das? (這多少錢？)」或是「Zusammen oder getrennt? (一起付還是分開付？)」。',
      ruleExample: [
        { de: 'Ich möchte bitte einen Kaffee.', zh: '我想要一杯咖啡，麻煩您。', note: 'einen Kaffee 是陽性第四格' },
        { de: 'Was kostet ein Stück Kuchen?', zh: '一塊蛋糕多少錢？', note: 'kosten + 金額' },
        { de: 'Wir möchten bitte bezahlen.', zh: '我們想要買單結帳。', note: 'bezahlen = 付款' },
      ],
    },
    vocabulary: [
      { id: 'd4_v1', word: 'der Kaffee', article: 'der', meaning: '咖啡', example: 'Ich trinke morgens gerne einen Kaffee.', exampleTr: '我早上喜歡喝一杯咖啡。' },
      { id: 'd4_v2', word: 'das Wasser', article: 'das', meaning: '水', example: 'Ein Glas Wasser bitte.', exampleTr: '請給我一杯水。' },
      { id: 'd4_v3', word: 'der Kuchen', article: 'der', meaning: '蛋糕', example: 'Der Apfelkuchen schmeckt wunderbar.', exampleTr: '蘋果蛋糕嚐起來太棒了。' },
      { id: 'd4_v4', word: 'die Rechnung', article: 'die', meaning: '帳單', example: 'Die Rechnung, bitte!', exampleTr: '買單，麻煩您！' },
      { id: 'd4_v5', word: 'getrennt', meaning: '分開地 (副詞)', example: 'Zusammen oder getrennt? - Getrennt, bitte.', exampleTr: '一起還是分開？- 請分開付。' },
    ],
    listening: {
      title: '在維也納咖啡館結帳 (Bezahlen im Kaffeehaus)',
      situation: '兩位朋友在咖啡館喝完下午茶，向服務生要求買單結帳。',
      dialogue: [
        { speaker: 'Kunde', de: 'Entschuldigung, wir möchten bitte bezahlen!', zh: '不好意思，我們想要買單！' },
        { speaker: 'Kellner', de: 'Sehr gerne. Zusammen oder getrennt?', zh: '非常樂意。請問是一起結還是分開付？' },
        { speaker: 'Kunde', de: 'Getrennt, bitte. Ich hatte einen Cappuccino und ein Stück Käsekuchen.', zh: '請分開算。我點了一杯卡布奇諾和一塊起司蛋糕。' },
        { speaker: 'Kellner', de: 'Das macht zusammen 7 Euro 80.', zh: '這樣總共是 7 歐元 80 分。' },
        { speaker: 'Kunde', de: 'Hier sind 9 Euro. Stimmt so, danke!', zh: '這裡給您 9 歐元。不用找了，謝謝！（含小費）' },
        { speaker: 'Kellner', de: 'Vielen herzlichen Dank! Einen schönen Tag noch.', zh: '由衷感謝您！祝您今天愉快。' },
      ],
      questions: [
        {
          id: 'd4_lq1',
          question: 'Wie möchten die Kunden bezahlen? (顧客想要如何結帳？)',
          options: ['Zusammen (一起算)', 'Getrennt (分開付)', 'Mit Kreditkarte (刷卡)', 'Später (稍後付)'],
          correctIndex: 1,
          explanation: '顧客明確回答「Getrennt, bitte (請分開算)」。',
        },
        {
          id: 'd4_lq2',
          question: 'Was bedeutet "Stimmt so"? (「Stimmt so」的意思是什麼？)',
          options: ['Das Essen war falsch (餐點送錯了)', 'Der Rest ist Trinkgeld (差額當小費不用找)', 'Ich habe kein Geld (我沒有錢)', 'Die Rechnung stimmt nicht (帳單算錯了)'],
          correctIndex: 1,
          explanation: '在德語區，「Stimmt so」是標準給小費話語，表示剩下的錢請服務生留著當小費。',
        },
      ],
    },
    speaking: {
      title: '模擬在咖啡廳點餐與買單',
      instruction: '朗讀句子，體會德語中 bitte (請) 與 danke (謝謝) 在服務場合的重要性。',
      targetSentences: [
        { id: 'd4_s1', de: 'Ich möchte bitte einen Kaffee mit Milch und Zucker.', zh: '請給我一杯加牛奶和糖的咖啡。', phoneticTip: '「Zucker」字首 z 讀 /ts/（像國語的「疵」）。' },
        { id: 'd4_s2', de: 'Wir möchten bitte bezahlen. Stimmt so!', zh: '我們想要買單。不用找了！', phoneticTip: '「bezahlen」重音在 za /tsa:/。' },
      ],
    },
    reading: {
      title: '咖啡館菜單 (Speisekarte Café Mozart)',
      documentType: 'Anzeige',
      content:
        'CAFÉ MOZART - SPEISEKARTE\n\nGETRÄNKE:\n- Espresso: 2,50 €\n- Cappuccino: 3,80 €\n- Schwarztee / Früchtetee: 3,20 €\n- Mineralwasser (0,5l): 2,80 €\n\nKUCHEN & GEBÄCK:\n- Apfelstrudel mit Vanilleeis: 4,90 €\n- Schwarzwälder Kirschtorte: 4,50 €\n- Buttercroissant: 2,20 €\n\n* Alle Preise inklusive Mehrwertsteuer.',
      translation:
        '莫札特咖啡館 - 菜單\n\n飲品：\n- 義式濃縮：2.50 歐元\n- 卡布奇諾：3.80 歐元\n- 紅茶 / 水果茶：3.20 歐元\n- 礦泉水 (0.5L)：2.80 歐元\n\n蛋糕與烘焙：\n- 蘋果派附香草冰淇淋：4.90 歐元\n- 黑森林櫻桃蛋糕：4.50 歐元\n- 奶油可頌：2.20 歐元\n\n* 以上價格均已含稅。',
      glossary: {
        Getränk: { pos: 'das', meaning: '飲品、飲料 (複數: die Getränke)' },
        Gebäck: { pos: 'das', meaning: '烘焙點心、糕餅' },
        inklusive: { pos: 'präp', meaning: '包含、包括' },
      },
      questions: [
        {
          id: 'd4_rq1',
          question: 'Wie viel kostet ein Cappuccino und ein Buttercroissant zusammen? (卡布奇諾加奶油可頌總共多少錢？)',
          options: ['5,00 €', '6,00 €', '6,50 €', '7,20 €'],
          correctIndex: 1,
          explanation: '3,80 € (Cappuccino) + 2,20 € (Croissant) = 6,00 €。',
        },
      ],
    },
    examTip: {
      skill: 'Hören',
      title: '聽力中的數字與小數點陷阱',
      content:
        '德語中金額的逗號（,）讀作「Komma」或直接略過，例如 7,80 € 通常直接唸「sieben Euro achtzig」；考試時留意題目若問「7 Euro 18」還是「7 Euro 80」，需分清 achtzehn (18) 與 achtzig (80) 的字尾濁音差異。',
    },
  },

  5: {
    day: 5,
    stage: 'A1',
    week: 1,
    dayOfWeek: 5,
    title: 'der, die, das 德語三大性別與定冠詞',
    germanTitle: 'Der bestimmte und unbestimmte Artikel',
    theme: '德語名詞的核心魂魄：陽性 (der)、陰性 (die)、中性 (das)',
    estimatedMinutes: 20,
    grammar: {
      title: '德語三大性別與不定冠詞 ein / eine',
      explanation:
        '所有德語名詞無論是人、動物或物品，都有固定性別（陽性 der / ein, 陰性 die / eine, 中性 das / ein）。德語名詞第一字母永遠要大寫！背單字時必須連同冠詞一起記憶。',
      ruleExample: [
        { de: 'der Tisch (ein Tisch)', zh: '桌子 (陽性)', note: 'der' },
        { de: 'die Lampe (eine Lampe)', zh: '檯燈 (陰性，多數 -e 結尾為陰性)', note: 'die' },
        { de: 'das Buch (ein Buch)', zh: '書本 (中性)', note: 'das' },
      ],
    },
    vocabulary: [
      { id: 'd5_v1', word: 'der Tisch', article: 'der', plural: 'die Tische', meaning: '桌子', example: 'Der Tisch ist sehr modern.', exampleTr: '這張桌子很現代。' },
      { id: 'd5_v2', word: 'die Lampe', article: 'die', plural: 'die Lampen', meaning: '檯燈、燈具', example: 'Die Lampe ist hell.', exampleTr: '這盞燈很明亮。' },
      { id: 'd5_v3', word: 'das Buch', article: 'das', plural: 'die Bücher', meaning: '書本', example: 'Das Buch ist interessant.', exampleTr: '這本書很有趣。' },
      { id: 'd5_v4', word: 'der Stuhl', article: 'der', plural: 'die Stühle', meaning: '椅子', example: 'Hier ist noch ein Stuhl frei.', exampleTr: '這裡還有一張椅子是空的。' },
    ],
    listening: {
      title: '在宜家家居選購家具 (Möbel kaufen)',
      situation: '一對室友在挑選新公寓要用的桌子和沙發。',
      dialogue: [
        { speaker: 'Markus', de: 'Schau mal, wie findest du den Tisch hier?', zh: '你看一下，你覺得這張桌子如何？' },
        { speaker: 'Lisa', de: 'Der Tisch ist schön, aber ein bisschen zu groß für unser Zimmer.', zh: '這張桌子很漂亮，但對我們的房間來說有點太大。' },
        { speaker: 'Markus', de: 'Und das Sofa dort drüben?', zh: '那邊那張沙發呢？' },
        { speaker: 'Lisa', de: 'Das Sofa ist perfekt! Es ist sehr bequem und nicht teuer.', zh: '那張沙發太完美了！坐起來很舒服而且不貴。' },
      ],
      questions: [
        {
          id: 'd5_lq1',
          question: 'Warum kauft Lisa den Tisch nicht? (為什麼麗莎不買那張桌子？)',
          options: ['Er ist zu teuer (太貴)', 'Er ist zu groß (太大)', 'Er ist hässlich (太醜)', 'Er ist alt (太舊)'],
          correctIndex: 1,
          explanation: 'Lisa 說「Der Tisch ist schön, aber ein bisschen zu groß (桌子漂亮，但有點太大)」。',
        },
      ],
    },
    speaking: {
      title: '形容物品與評價',
      instruction: '練習形容詞用法：groß (大), klein (小), schön (美), teuer (貴)。',
      targetSentences: [
        { id: 'd5_s1', de: 'Das Zimmer ist hell und der Balkon ist groß.', zh: '房間很明亮，而且陽台很大。', phoneticTip: '「Zimmer」發音乾脆，結尾 er 弱化成 /ɐ/。' },
      ],
    },
    reading: {
      title: '二手家具跳蚤市場廣告 (Kleinanzeige: Möbel zu verkaufen)',
      documentType: 'Anzeige',
      content:
        'ZU VERKAUFEN WEGEN UMZUG:\n1. Schreibtisch aus Holz (140x70 cm): fast neu, Preis: 50 €\n2. Bürostuhl (schwarz, sehr bequem): Preis: 30 €\n3. Stehlampe: funktioniert einwandfrei, Preis: 15 €\n\nAbholung in München-Schwabing bis Samstag möglich.\nKontakt per WhatsApp: 0176 9988776',
      translation:
        '因搬家出售：\n1. 木質書桌 (140x70 cm)：近全新，售價 50 歐元\n2. 辦公椅 (黑色，非常舒適)：售價 30 歐元\n3. 立燈：功能完全正常，售價 15 歐元\n\n週六前可在慕尼黑施瓦賓區自取。\nWhatsApp 聯絡電話：0176 9988776',
      glossary: {
        Umzug: { pos: 'der', meaning: '搬家' },
        Abholung: { pos: 'die', meaning: '自取、領取' },
        einwandfrei: { pos: 'adj', meaning: '無瑕疵的、運作完好的' },
      },
      questions: [
        {
          id: 'd5_rq1',
          question: 'Bis wann kann man die Möbel abholen? (最晚何時可以自取家具？)',
          options: ['Bis Freitag', 'Bis Samstag', 'Bis Sonntag', 'Erst nächste Woche'],
          correctIndex: 1,
          explanation: '公告寫明「Abholung in München-Schwabing bis Samstag möglich (週六前可自取)」。',
        },
      ],
    },
    examTip: {
      skill: 'Lesen',
      title: '名詞性別記憶口訣',
      content:
        '許多字尾有規律性別：例如 -ung, -heit, -keit, -schaft, -tion 結尾的名詞 100% 是陰性 die！-chen, -lein 縮小詞結尾 100% 是中性 das！背單字時把握字尾規律可事半功倍。',
    },
  },

  6: {
    day: 6,
    stage: 'A1',
    week: 1,
    dayOfWeek: 6,
    title: 'Woche 1 Rückblick 第 1 週總結驗收測驗',
    germanTitle: 'Wochen-Quiz & Grammatik-Check',
    theme: '第 1 週實力診斷：動詞變位、問候語、數字、咖啡館點餐、冠詞總複習',
    estimatedMinutes: 25,
    grammar: {
      title: '第 1 週核心文法脈絡盤點',
      explanation:
        '回顧動詞現在式字尾規律（-e, -st, -t, -en）、sein/haben 特殊變位、問句倒裝結構（動詞放句首或 W-Frage 後放第二位），以及名詞大寫與冠詞配對。',
      ruleExample: [
        { de: 'Wie heißen Sie? - Ich heiße...', zh: 'W-疑問詞 + 動詞第二位 + 主詞', note: 'W-Frage' },
        { de: 'Kommen Sie aus Deutschland? - Ja/Nein...', zh: '一般動詞放句首，以是/否回答', note: 'Ja/Nein Frage' },
      ],
    },
    vocabulary: [
      { id: 'd6_v1', word: 'die Prüfung', article: 'die', plural: 'die Prüfungen', meaning: '考試、測驗 (歌德檢定)', example: 'Ich lerne für die Goethe-Prüfung.', exampleTr: '我正在為歌德檢定複習。' },
      { id: 'd6_v2', word: 'die Übung', article: 'die', plural: 'die Übungen', meaning: '練習、課後練習題', example: 'Diese Übung macht Spaß.', exampleTr: '這個練習很有趣。' },
    ],
    listening: {
      title: '第 1 週綜合聽力挑戰 (Hörverstehen Test)',
      situation: '三段簡短對話，測試你在問候、問價與拼音的敏感度。',
      dialogue: [
        { speaker: 'Ansage', de: 'Teil 1: Willkommen zur ersten Wochenprüfung!', zh: '第 1 部分：歡迎參加第一週驗收！' },
        { speaker: 'Herr Bauer', de: 'Guten Abend, mein Name ist Thomas Bauer. Ich habe eine Reservierung.', zh: '晚上好，我是托馬斯·鮑爾。我有預訂。' },
        { speaker: 'Rezeption', de: 'Guten Abend Herr Bauer. Ihr Zimmer ist die Nummer 315 im 3. Stock.', zh: '晚上好鮑爾先生。您的房間是 3 樓的 315 號。' },
      ],
      questions: [
        {
          id: 'd6_lq1',
          question: 'Welches Zimmer hat Herr Bauer? (鮑爾先生拿到哪間房？)',
          options: ['Raum 115', 'Raum 305', 'Raum 315', 'Raum 513'],
          correctIndex: 2,
          explanation: '對話提到「Zimmer ist die Nummer 315 (315 號房)」。',
        },
      ],
    },
    speaking: {
      title: '第 1 週自我介紹總串聯',
      instruction: '將姓名、國家、居住地、年齡與會說的語言組合成一分鐘自我介紹。',
      targetSentences: [
        { id: 'd6_s1', de: 'Guten Tag! Mein Name ist Alex, ich komme aus Taiwan und wohne in Taipeh. Ich bin 26 Jahre alt und lerne Deutsch.', zh: '日安！我叫亞歷克斯，來自台灣並住在台北。我今年 26 歲正在學德文。', phoneticTip: '連貫一口氣講出，注意各句主詞動詞的流暢銜接。' },
      ],
    },
    reading: {
      title: '第一週閱讀綜合測驗 (Wochentest)',
      documentType: 'E-Mail',
      content:
        'Liebe Sprachschüler,\nam kommenden Montag um 18:00 Uhr veranstaltet unsere Schule einen Kennenlern-Abend im Café Zentral. Es gibt Brezeln, Saft und Kaffee kostenlos für alle neuen Studenten. Bitte melden Sie sich bis Freitag im Sekretariat an.\nHerzliche Grüße,\nEure Schulleitung',
      translation:
        '親愛的語言學員們：\n下週一傍晚 18:00，本校將在中央咖啡館舉辦新生破冰之夜。現場提供免費椒麻蝴蝶餅、果汁與咖啡給所有新生。請於週五前至秘書處報名登記。\n熱情問候，\n學校管理處',
      glossary: {
        kostenlos: { pos: 'adj', meaning: '免費的 (gratis)' },
        anmelden: { pos: 'verb', meaning: '報名、登記' },
      },
      questions: [
        {
          id: 'd6_rq1',
          question: 'Was kostet das Essen und Trinken am Kennenlern-Abend? (破冰之夜的餐飲費用是多少？)',
          options: ['10 Euro', '5 Euro', 'Es ist kostenlos (免費)', 'Man muss selbst bezahlen (自費)'],
          correctIndex: 2,
          explanation: '信件說明「Es gibt Brezeln, Saft und Kaffee kostenlos für alle neuen Studenten (對所有新生均免費)」。',
        },
      ],
    },
  },

  7: {
    day: 7,
    stage: 'A1',
    week: 1,
    dayOfWeek: 7,
    title: 'Kultur & Entspannung 德語區文化與週日放鬆',
    germanTitle: 'Sonntagsruhe und die DACH-Länder',
    theme: '德語三大國（DACH：德國 D、奧地利 A、瑞士 CH）文化常識與安息日生活',
    estimatedMinutes: 15,
    grammar: {
      title: '文化句型：In Deutschland ist am Sonntag...',
      explanation:
        '在德國，週日是法定的安息日（Sonntagsruhe），大部分超市和商店均不營業！這天德語區居民喜愛出門散步（Spaziergang）、登山健行或與家人喝咖啡吃蛋糕（Kaffee und Kuchen）。',
      ruleExample: [
        { de: 'Am Sonntag haben die Geschäfte geschlossen.', zh: '週日商店都休業關閉。', note: 'geschlossen = 關門' },
        { de: 'Wir machen einen Spaziergang im Park.', zh: '我們在公園散步。', note: 'einen Spaziergang machen' },
      ],
    },
    vocabulary: [
      { id: 'd7_v1', word: 'der Sonntag', article: 'der', meaning: '星期日', example: 'Am Sonntag schlafe ich lange.', exampleTr: '星期天我會睡很晚。' },
      { id: 'd7_v2', word: 'die Ruhe', article: 'die', meaning: '寧靜、安靜', example: 'Sonntagsruhe ist wichtig.', exampleTr: '週日的寧靜非常重要。' },
      { id: 'd7_v3', word: 'der Spaziergang', article: 'der', meaning: '散步、慢走', example: 'Ein Spaziergang tut gut.', exampleTr: '散步有益身心。' },
    ],
    listening: {
      title: '週日悠閒對話 (Ein ruhiger Sonntag)',
      situation: '週日早晨，室友提議下午去英國花園散步。',
      dialogue: [
        { speaker: 'Paul', de: 'Guten Morgen! Was machst du heute am Sonntag?', zh: '早安！你今天週日要做什麼？' },
        { speaker: 'Sophie', de: 'Die Sonne scheint! Ich möchte im Park spazieren gehen.', zh: '陽光燦爛！我想去公園散步。' },
        { speaker: 'Paul', de: 'Gute Idee. Danach trinken wir einen Kaffee.', zh: '好主意。之後我們去喝杯咖啡。' },
      ],
      questions: [
        {
          id: 'd7_lq1',
          question: 'Wie ist das Wetter heute? (今天天氣如何？)',
          options: ['Es regnet (下雨)', 'Die Sonne scheint (陽光普照)', 'Es schneit (下雪)', 'Es ist neblig (起霧)'],
          correctIndex: 1,
          explanation: 'Sophie 說「Die Sonne scheint! (陽光燦爛！)」。',
        },
      ],
    },
    speaking: {
      title: '談論週末喜好',
      instruction: '用自然放鬆的語氣，表達自己在週末喜愛從事的休閒活動。',
      targetSentences: [
        { id: 'd7_s1', de: 'Am Wochenende treffe ich Freunde und mache Sport.', zh: '週末時我會與朋友見面並做運動。', phoneticTip: '「Sport」字首 sp 讀 /ʃp/，像「許破特」。' },
      ],
    },
    reading: {
      title: '德語小科普：什麼是 DACH 國家？',
      documentType: 'Artikel',
      content:
        'Was bedeutet eigentlich "DACH"?\nIm deutschen Sprachraum steht DACH für die drei deutschsprachigen Länder:\nD = Deutschland (ca. 84 Millionen Einwohner)\nA = Österreich (Austria, ca. 9 Millionen Einwohner)\nCH = die Schweiz (Confoederatio Helvetica, ca. 9 Millionen Einwohner)\n\nIn allen drei Ländern ist Deutsch eine offizielle Amtssprache, aber es gibt spannende regionale Unterschiede bei Wörtern und Akzenten!',
      translation:
        '「DACH」究竟是什麼意思？\n在德語空間中，DACH 代表三個主要的德語系國家：\nD = 德國（約 8,400 萬人口）\nA = 奧地利（Austria，約 900 萬人口）\nCH = 瑞士（拉丁文正式國名，約 900 萬人口）\n\n在這三個國家中，德語都是官方正式語言，但在用詞與口音上有著許多有趣的地域差異！',
      glossary: {
        Sprachraum: { pos: 'der', meaning: '語言使用區空間' },
        Amtssprache: { pos: 'die', meaning: '官方語言' },
      },
      questions: [
        {
          id: 'd7_rq1',
          question: 'Wofür steht der Buchstabe "A" in DACH? (DACH 中的字母 A 代表哪一國？)',
          options: ['Amerika', 'Australien', 'Österreich (Austria)', 'Albanien'],
          correctIndex: 2,
          explanation: '文中載明「A = Österreich (Austria)」。',
        },
      ],
    },
  },
  ...week2Lessons,
  ...week3Lessons,
  ...week4Lessons,
  ...week5Lessons,
  ...week6Lessons,
  ...week7Lessons,
  ...week8Lessons,
  ...week9Lessons,
  ...week10Lessons,
  ...week11Lessons,
};

// 365-Day Generator that generates standard Goethe curriculum templates for all days 1..365
export function getLessonByDay(dayNumber: number): DayLesson {
  const day = Math.max(1, Math.min(dayNumber, 365));

  // If handcrafted lesson exists, return it
  if (detailedLessons[day]) {
    return detailedLessons[day];
  }

  // Otherwise generate high quality structured lesson following Goethe CEFR curriculum
  let stage: CefrLevel = 'A1';
  if (day > 300) stage = 'EXAM';
  else if (day > 180) stage = 'B1';
  else if (day > 75) stage = 'A2';

  const week = Math.ceil(day / 7);
  const dayOfWeek = ((day - 1) % 7) + 1;

  // Topic catalog by stage & week
  const stageThemes: Record<CefrLevel, string[]> = {
    A1: [
      'Mein Alltag (日常生活與作息)',
      'Im Supermarkt & Lebensmittel (超市採買與食物名詞)',
      'Die Wohnung & Möbel (租屋尋房與家具)',
      'Freizeit & Hobbys (休閒愛好與運動)',
      'Die Uhrzeit & Termine (時間表達與約定行程)',
      'Familie & Verwandte (家庭成員與所有格)',
      'Beim Arzt & Gesundheit (就醫看診與身體器官)',
      'Kleidung & Farben (服飾搭配與顏色)',
      'Wegbeschreibung (城市問路與方向指引)',
      'Reisen & Verkehrsmittel (旅行搭乘交通工具)',
    ],
    A2: [
      'Arbeit & Berufswelt (職場與求職履歷)',
      'Stadtleben & Umzug (城市遷徙與生活指南)',
      'Urlaubserlebnisse & Perfekt (休假回憶與現在完成式複習)',
      'Krankheit & Wohlbefinden (病痛休假與醫生證明)',
      'Dativ & Wechselpräpositionen (第三格與九大多功能介系詞)',
      'Kundenbetreuung & Reklamation (客戶投訴與換貨退費)',
      'Medien & Kommunikation (社群網路與數位生活)',
      'Feste & Traditionen (德國傳統節慶與送禮禮儀)',
      'Ausbildung & Universität (技職雙軌制與大學升學)',
      'Umweltschutz im Alltag (環保垃圾分類與節能減碳)',
    ],
    B1: [
      'Meinungen & Argumentation (觀點表達與正反論述 weil / obwohl)',
      'Berufsleben & Vorstellungsgespräch (求職面試與職場應對)',
      'Konjunktiv II: Wünsche & Ratschläge (虛擬二式：願望與誠懇建議)',
      'Passiv im Alltag (被動態：新聞報導與操作說明書)',
      'Relativsätze: Präzise Beschreibungen (關係代名詞子句：精確描述人與事物)',
      'Klimawandel & Zukunft (氣候變遷與未來科技趨勢)',
      'Konsum & Geldwirtschaft (消費習慣與理財觀念)',
      'Globalisierung & Kulturaustausch (全球化與跨文化融合)',
      'Politik & Gesellschaft (德國政治體制與公民社會)',
      'Goethe B1 Modul Schreiben Training (歌德 B1 寫作三大部分深入精講)',
    ],
    EXAM: [
      'Goethe B1 Hören Teil 1-4 全真模考與解題破譯',
      'Goethe B1 Lesen Teil 1-5 長篇快速掃描技巧',
      'Goethe B1 Schreiben Teil 1 投訴信與請假信高分模板',
      'Goethe B1 Schreiben Teil 2 論壇發表觀點得分關鍵',
      'Goethe B1 Sprechen Teil 1 共同規劃計畫 (Gemeinsam etwas planen)',
      'Goethe B1 Sprechen Teil 2 個人主題簡報全真模擬',
      '歌德應試臨場陷阱、倒扣預防與信心衝刺',
    ],
  };

  const themes = stageThemes[stage];
  const themeIndex = (day - 1) % themes.length;
  const currentTheme = themes[themeIndex];

  return {
    day,
    stage,
    week,
    dayOfWeek,
    title: `Day ${day}: ${currentTheme.split(' ')[0]}`,
    germanTitle: currentTheme,
    theme: `${stage} 歌德檢定核心課次 - ${currentTheme}`,
    estimatedMinutes: 20,
    grammar: {
      title: `${stage} 核心文法專題：${currentTheme.split(' ')[0]}`,
      explanation: `在本課中，我們將針對歌德 ${stage} 檢定高頻出現的句型結構與語法規則進行深入剖析與應用，幫助你扎實掌握語感。`,
      ruleExample: [
        {
          de: `Ich lerne fleißig Deutsch für die Goethe-${stage} Prüfung.`,
          zh: `我正努力學習德語，為了通過歌德 ${stage} 檢定。`,
          note: `für + 目的 (Akkusativ)`,
        },
        {
          de: `Das ist sehr wichtig für die tägliche Kommunikation.`,
          zh: `這對於日常生活溝通非常重要。`,
          note: `wichtig für...`,
        },
      ],
    },
    vocabulary: [
      {
        id: `d${day}_v1`,
        word: 'das Zertifikat',
        article: 'das',
        plural: 'die Zertifikate',
        meaning: '證書、檢定證明',
        example: 'Ich möchte das Goethe-Zertifikat bestehen.',
        exampleTr: '我想通過歌德檢定取得證書。',
      },
      {
        id: `d${day}_v2`,
        word: 'die Vorbereitung',
        article: 'die',
        plural: 'die Vorbereitungen',
        meaning: '準備、籌備',
        example: 'Eine gute Vorbereitung ist der halbe Erfolg.',
        exampleTr: '良好的準備是成功的一半。',
      },
      {
        id: `d${day}_v3`,
        word: 'erfolgreich',
        meaning: '成功的 (形容詞)',
        example: 'Sie hat die Prüfung erfolgreich abgeschlossen.',
        exampleTr: '她成功地通過了考試。',
      },
    ],
    listening: {
      title: `情境聽力演練 (${stage})：${currentTheme}`,
      situation: `在歌德檢定情境中，聆聽標準德語對話並回答考點問題。`,
      dialogue: [
        { speaker: 'Sprecher A', de: 'Guten Tag! Heute wiederholen wir die wichtigsten Punkte.', zh: '日安！今天我們來複習最重要的要點。' },
        { speaker: 'Sprecher B', de: 'Sehr gut! Ich habe mich gründlich auf das Thema vorbereitet.', zh: '太好了！我已經對這個主題做了徹底的準備。' },
        { speaker: 'Sprecher A', de: 'Hervorragend, dann fangen wir gleich an!', zh: '太棒了，那我們馬上開始吧！' },
      ],
      questions: [
        {
          id: `d${day}_lq1`,
          question: `Was machen die Sprecher heute? (說話者今天要做什麼？)`,
          options: ['Sie wiederholen die wichtigen Punkte (複習重點)', 'Sie machen Urlaub (度假)', 'Sie kaufen ein (購物)', 'Sie gehen ins Kino (去電影院)'],
          correctIndex: 0,
          explanation: '開頭說到「Heute wiederholen wir die wichtigsten Punkte」。',
        },
      ],
    },
    speaking: {
      title: `口說跟讀與即時辨識 (Day ${day})`,
      instruction: `點擊發音聆聽標準語音，並使用麥克風大聲朗讀，檢驗自己的口說流暢度。`,
      targetSentences: [
        {
          id: `d${day}_s1`,
          de: `Ich bereite mich Schritt für Schritt auf die Goethe-Prüfung vor.`,
          zh: `我正一步一腳印地為歌德考試做準備。`,
          phoneticTip: `注意分離動詞「vorbereiten」的 vor 放在句尾。`,
        },
      ],
      rolePlay: {
        partnerName: 'Prüfer',
        partnerRole: '歌德考官',
        scenario: `請向考官表達你對本課主題 ${currentTheme.split(' ')[0]} 的個人經驗與看法。`,
        promptDe: `Können Sie bitte Ihre Meinung dazu kurz beschreiben?`,
        promptZh: `能否請您簡要陳述對此事的看法呢？`,
        sampleReplies: [
          `Meiner Meinung nach ist das ein sehr wichtiges Thema im Alltag.`,
        ],
      },
    },
    reading: {
      title: `閱讀測驗 (${stage})：${currentTheme}`,
      documentType: 'Artikel',
      content: `DEUTSCH LERNEN MIT ERFOLG - TAG ${day}\n\nJeden Tag ein bisschen Deutsch zu lernen bringt langfristig die besten Ergebnisse für das Goethe-Zertifikat. Wer regelmäßig Hören, Sprechen und Lesen übt, gewinnt schnell an Selbstvertrauen im Sprachalltag.\nBleiben Sie dran und setzen Sie Ihre 365-Tage-Reise zielstrebig fort!`,
      translation: `邁向成功的德語學習 - 第 ${day} 天\n\n每天學一點德語，長期來看將為歌德檢定帶來最佳成果。規律練習聽力、口說與閱讀的人，能迅速在日常德語中建立自信。\n請堅持下去，堅定推進您的 365 天學習旅程！`,
      glossary: {
        Ergebnis: { pos: 'das', meaning: '成果、結果 (複數: die Ergebnisse)' },
        Selbstvertrauen: { pos: 'das', meaning: '自信心' },
      },
      questions: [
        {
          id: `d${day}_rq1`,
          question: `Was bringt langfristig die besten Ergebnisse? (長期而言什麼能帶來最好的成果？)`,
          options: ['Jeden Tag ein bisschen Deutsch zu lernen (每天學一點德語)', 'Nur vor der Prüfung zu lernen (考前才突擊)', 'Gar nichts zu tun (什麼都不做)', 'Nur Vokabeln ohne Grammatik zu lernen (只背單字不學文法)'],
          correctIndex: 0,
          explanation: '首句明確指明「Jeden Tag ein bisschen Deutsch zu lernen bringt langfristig die besten Ergebnisse」。',
        },
      ],
    },
    examTip: {
      skill: 'Sprechen',
      title: `365 檢定養成：堅持的力量`,
      content: `歌德檢定重視實用交際能力。每天 20 分鐘浸潤在標準德語語境中，遠比週末集中抱佛腳更有助於內化大腦語言反應！`,
    },
  };
}
