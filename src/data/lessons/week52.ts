import type { DayLesson } from '../../types/curriculum';

export const week52Lessons: Record<number, DayLesson> = {
  358: {
    day: 358,
    stage: 'EXAM',
    week: 52,
    dayOfWeek: 1,
    title: 'Day 358: 終極衝刺一：B1 核心詞彙、偽友詞與高頻文法易錯點剖析 (Wortschatz & Fehleranalyse)',
    germanTitle: 'Endspurt 1: Wortschatz-Feinschliff, False Friends & Grammatik-Fallen',
    theme: '歌德 B1 終極考前排雷 - 避開偽友詞、從句動詞置尾與介系詞格位陷阱',
    estimatedMinutes: 20,
    grammar: {
      title: 'B1 考場高頻失分點深度排雷 (Typische Stolperfallen)',
      explanation: '在歌德 B1 考試中，考生失分往往不在生僻語法，而是在低級疏漏：\n1. **偽友詞 (False Friends)**：bekommen（得到，絕非 become 成為）；der Chef（主管老闆，絕非廚師 Koch）；aktuell（當前最新的，絕非 actually 實際上）；sensibel（敏感脆弱的，絕非 sensible 理智明智的 vernünftig）。\n2. **從句動詞置尾與可分動詞合體**：在 dass, weil, obwohl, wenn 等從句中，可分動詞必須「不分開」且整體置於句尾（...weil der Zug pünktlich ankommt）。\n3. **二格介系詞的書面語優勢**：trotz, während, wegen 搭配 Genitiv（trotz des Regens, während des Semesters），能迅速拉高寫作評分檔次。',
      ruleExample: [
        {
          de: 'Ich habe eine wichtige E-Mail bekommen, obwohl mein Chef noch im Urlaub war.',
          zh: '我收到了一封重要郵件，儘管我的老闆當時還在休假。',
          note: 'bekommen (得到) + obwohl 從句動詞放句尾 + der Chef (主管)',
        },
        {
          de: 'Wegen des schlechten Wetters stellten wir die Koffer in den Flur.',
          zh: '因為壞天氣，我們把行李箱放到了走廊裡。',
          note: 'wegen + Genitiv + stellen (動態方向 + Akkusativ)',
        },
      ],
    },
    vocabulary: [
      {
        id: 'd358_v1',
        word: 'die Fehlerquelle',
        article: 'die',
        meaning: '錯誤來源、陷阱隱患',
        example: 'Grammatische Flüchtigkeitsfehler sind die häufigste Fehlerquelle im B1-Schreiben.',
        exampleTr: '文法上的粗心失誤是 B1 寫作中最常見的失分陷阱。',
      },
      {
        id: 'd358_v2',
        word: 'verwechseln',
        meaning: '混淆、弄錯 (verwechselt, verwechselte, hat verwechselt)',
        example: 'Viele Lerner verwechseln "bekommen" fälschlicherweise mit dem englischen "become".',
        exampleTr: '許多學習者錯誤地將德語的 bekommen 與英語的 become 混淆。',
      },
      {
        id: 'd358_v3',
        word: 'ausbügeln',
        meaning: '彌補、熨平（失誤與錯誤）(bügelt aus, bügelte aus, hat ausgebügelt)',
        example: 'Einen kleinen Grammatikfehler im Sprechen kann man sofort durch eine Selbstkorrektur ausbügeln.',
        exampleTr: '口說中的小文法錯誤可以立刻透過自我修正來彌補挽回。',
      },
      {
        id: 'd358_v4',
        word: 'treffend',
        meaning: '精確到位的、中肯貼切的',
        example: 'Verwenden Sie treffende Verben statt immer nur "machen" oder "haben".',
        exampleTr: '使用精準到位的動詞，而非總是千篇一律地用 machen 或 haben。',
      },
      {
        id: 'd358_v5',
        word: 'die Sorgfalt',
        article: 'die',
        meaning: '細緻、審慎嚴謹',
        example: 'Mit etwas mehr Sorgfalt bei den Adjektivendungen holen Sie wertvolle Punkte.',
        exampleTr: '在形容詞字尾上多一點細緻審慎，您就能奪下寶貴的分數。',
      },
    ],
    listening: {
      title: '考官視角：聽力測驗中的轉折詞與反轉陷阱',
      situation: '德語培訓資深名師正在向考生拆解聽力測驗中話鋒一轉的陷阱信號詞。',
      dialogue: [
        {
          speaker: 'Coach',
          de: 'Achten Sie im Hörverstehen immer auf Wendungen wie "eigentlich wollte ich", "allerdings" oder "im Nachhinein".',
          zh: '在聽力理解中，請務必密切留意「本來我想……」、「然而」或「事後看來」這類轉折片語。',
        },
        {
          speaker: 'Teilnehmer',
          de: 'Weil die Sprecher danach ihre Meinung oft komplett ändern?',
          zh: '是因為說話者在那之後往往會徹底改變他們的看法嗎？',
        },
        {
          speaker: 'Coach',
          de: 'Ganz genau! Wenn jemand sagt: "Ich wollte den Flug um 9 Uhr buchen, aber er war voll, also nahm ich die Bahn", dann ist die Bahn die richtige Lösung!',
          zh: '完全正確！如果有人說：「我本來想訂9點的班機，但客滿了，所以我坐了火車」，那火車才是正確答案！',
        },
      ],
      comprehensionQuestions: [
        {
          id: 'd358_lq1',
          question: 'Warum sind Signalwörter wie "eigentlich... aber" im B1-Hörverstehen entscheidend?',
          options: [
            'Weil sie das Gesagte revidieren und die letztendliche Handlung ankündigen. (因為它們推翻前述並宣布最終的行動)',
            'Weil der Sprecher danach einschläft. (因為說話者之後睡著了)',
            'Weil sie bedeuten, dass die Antwort ungültig ist. (因為它們代表答案無效)',
            'Weil sie nur in Österreich existieren. (因為它們只存在於奧地利)',
          ],
          correctIndex: 0,
          explanation: '這類轉折詞通常推翻先前說的意圖，引出最終真正的決定。',
        },
      ],
    },
    speaking: {
      title: '即時自我修正與精確表達口說演練',
      instruction: '朗讀下列口說自救與精確修正句型，語氣自然優雅。',
      targetSentences: [
        {
          id: 'd358_s1',
          de: 'Entschuldigung, ich meinte natürlich: wegen des schlechten Wetters.',
          zh: '抱歉，我剛才想說的當然是：因為壞天氣（二格）。',
          phoneticTip: '「Entschuldigung」發音自然流暢，微帶微笑。',
        },
        {
          id: 'd358_s2',
          de: 'Lassen Sie mich diesen Gedanken bitte noch einmal präziser formulieren.',
          zh: '請讓我把這個想法再更精確地表述一次。',
          phoneticTip: '「präziser formulieren」語速沉穩，展現掌控力。',
        },
      ],
      rolePlay: {
        partnerName: 'Prüferin am Goethe-Institut',
        partnerRole: '歌德學院主考官',
        scenario: '在口說 Teil 2 演講中發現自己用錯介系詞，優雅地進行即時自我修正。',
        promptDe: 'Sie sagten gerade: "Ich fahre in den Schweiz". Möchten Sie den Satz korrigieren?',
        promptZh: '您剛才說了："Ich fahre in den Schweiz"。您想修正這個句子嗎？',
        sampleReplies: [
          'Ja, verzeihen Sie bitte! Die Schweiz ist feminin, es heißt natürlich: "Ich fahre in die Schweiz" mit Akkusativ für die Richtung.',
        ],
      },
    },
    reading: {
      title: '考前三分鐘自我檢查清單：消滅 80% 扣分項',
      documentType: 'Prüfungsratgeber',
      content: 'DIE DREI-MINUTEN-KONTROLLE VOR DER ABGABE:\n\nWer im B1-Schreiben Bestnoten anstrebt, sollte vor der Abgabe eine disziplinierte Kontrolle durchführen:\n\n1. VERBSTELLUNG:\nPrüfen Sie jeden Nebensatz mit "dass", "weil", "obwohl" oder "wenn". Steht das konjugierte Verb wirklich ganz am Ende? Sind trennbare Verben im Nebensatz zusammengeschrieben?\n\n2. GROSS- UND KLEINSCHREIBUNG:\nSubstantive werden im Deutschen immer großgeschrieben. Achten Sie besonders auf nominalisierte Verben ("beim Einkaufen", "zum Schwimmen") und Pronomen ("Sie/Ihr" in formellen Briefen).\n\n3. ADJEKTIVENDUNGEN & ARTIKEL:\nStimmt das Genus (der, die, das)? Achten Sie auf den Dativ nach "mit, nach, von, zu, seit" und den Akkusativ bei Bewegungsverben.\n\n4. VOLLSTÄNDIGKEIT ALLER LEITPUNKTE:\nHaben Sie wirklich zu jedem einzelnen der drei vorgegebenen Leitpunkte mindestens zwei aussagekräftige Sätze geschrieben?',
      translation: '交卷前三分鐘檢查法：\n\n想在 B1 寫作取得優異成績的人，交卷前應執行自律的三分鐘檢查：\n\n1. 動詞位置：\n檢查每一個由 dass, weil, obwohl 或 wenn 引導的副詞從句。變位動詞真的在最句尾嗎？從句中的可分動詞合體寫了嗎？\n\n2. 大小寫規則：\n德語名詞一律大寫。特別注意名詞化動詞（如 beim Einkaufen）與正式書信中的尊稱敬詞（Sie / Ihr）。\n\n3. 形容詞字尾與冠詞：\n性別正確嗎？注意三格介系詞（mit, nach, von, zu, seit）與表示動態方向的四格。\n\n4. 所有指引要點的完整性：\n題目給的三個指引要點，您是否每一點都寫了至少兩個充實完整的句子？',
      glossary: {
        'Flüchtigkeitsfehler': { pos: 'der', meaning: '粗心失誤' },
        'diszipliniert': { pos: 'adj', meaning: '自律嚴謹的' },
        'aussagekräftig': { pos: 'adj', meaning: '有說服力的、內容充實的' },
        'vollzählig': { pos: 'adj', meaning: '齊全的、無一遺漏的' },
      },
      questions: [
        {
          id: 'd358_rq1',
          question: 'Warum ist die Kontrolle der Leitpunkte im Modul Schreiben so kritisch?',
          options: [
            'Weil das Fehlen eines einzigen Leitpunkts zu direktem Punkteabzug bei der Aufgabenerfüllung führt. (因為遺漏任何一個要點都會在任務完成度上被直接扣分)',
            'Weil Leitpunkte auf Englisch übersetzt werden müssen. (因為要點必須翻譯成英文)',
            'Weil man nur einen Leitpunkt auswählen darf. (因為只能選一個要點寫)',
            'Weil Prüfer Leitpunkte gar nicht lesen. (因為考官根本不看要點)',
          ],
          correctIndex: 0,
          explanation: '歌德 B1 寫作的核心評分指標之一是「任務完成度」，題目給予的三個要點必須完整回答。',
        },
      ],
    },
    examTip: {
      skill: 'Schreiben',
      title: '大小寫是德語考官的眼睛焦點',
      content: '德語名詞必須大寫是德意志文化的重要標誌。交卷前用筆尖逐行快速掃描，凡是名詞（包括 das Essen, das Lernen 這種名詞化動詞）務必首字母大寫，能瞬間提升整份試卷的專業整潔感！',
    },
  },

  359: {
    day: 359,
    stage: 'EXAM',
    week: 52,
    dayOfWeek: 2,
    title: 'Day 359: 考前24小時倒數：身心調整、極限配速與突發應急救援 (24h vor der Prüfung)',
    germanTitle: 'Endspurt 2: Mentale Stärke, Zeitmanagement & Notfall-Strategien',
    theme: '歌德 B1 考前 24 小時作戰指南 - 克服大腦空白 (Blackout)、配速規劃與考場急救話術',
    estimatedMinutes: 20,
    grammar: {
      title: '爭取思考時間的緩衝語與優雅急救話術 (Überbrückungsredemittel)',
      explanation: '在口說或寫作時大腦突然空白（Blackout）是每位考生都可能遇到的正常生理反應。優秀考生的關鍵不在於「從不卡彈」，而在於「能用純正德語給自己爭取 5-10 秒的思考時間」：\n1. **爭取構思時間**：Das ist eine sehr facettenreiche Frage. Lassen Sie mich kurz nachdenken...（這是一個多面向的問題，請讓我稍加思索……）\n2. **沒聽清時的體面確認**：Könnten Sie diesen Gedanken bitte mit anderen Worten wiederholen?（您能用其他話再複述一次這個想法嗎？）\n3. **忘詞時的迂迴表述 (Paraphrasieren)**：Mir ist kurz der genaue Fachbegriff entfallen, aber im Grunde bedeutet es...（我一時忘了具體的專業名詞，但基本上它的意思是……）',
      ruleExample: [
        {
          de: 'Das ist ein äußerst interessanter Aspekt, über den ich bisher selten nachgedacht habe.',
          zh: '這是一個非常有趣的面向，我以前很少深思過這個問題。',
          note: '爭取 5 秒思考時間的黃金緩衝句',
        },
        {
          de: 'Wenn ich Sie richtig verstanden habe, geht es hierbei vor allem um die finanzielle Machbarkeit?',
          zh: '如果我沒理解錯的話，這主要牽涉到財務上的可行性？',
          note: '確認對方意圖同時展現高度交際能力',
        },
      ],
    },
    vocabulary: [
      {
        id: 'd359_v1',
        word: 'das Zeitmanagement',
        article: 'das',
        meaning: '時間管理、配速規劃',
        example: 'Ein diszipliniertes Zeitmanagement verhindert Panik gegen Ende der Schreibzeit.',
        exampleTr: '嚴謹的時間管理能防止在寫作時間即將結束時產生恐慌。',
      },
      {
        id: 'd359_v2',
        word: 'der Blackout',
        article: 'der',
        meaning: '大腦一片空白、暫時斷片',
        example: 'Bei einem kurzen Blackout hilft es, tief durchzuatmen und einen Schluck Wasser zu trinken.',
        exampleTr: '遇到短暫的大腦空白時，深呼吸並喝一口水非常有幫助。',
      },
      {
        id: 'd359_v3',
        word: 'überbrücken',
        meaning: '緩衝、度過（時間或空檔）(überbrückt, überbrückte, hat überbrückt)',
        example: 'Mit festen Redemitteln kann man eine kurze Denkpause elegant überbrücken.',
        exampleTr: '借助固定的慣用句型可以優雅地度過短暫的思考空檔。',
      },
      {
        id: 'd359_v4',
        word: 'gelassen',
        meaning: '沉著從容的、鎮定自若的',
        example: 'Wer gut vorbereitet ist, geht gelassen und zuversichtlich in die Prüfung.',
        exampleTr: '準備充足的人能夠沉著從容且充滿信心地步入考場。',
      },
      {
        id: 'd359_v5',
        word: 'der Puffer',
        article: 'der',
        meaning: '緩衝時間、餘裕空間',
        example: 'Planen Sie bei der Anreise zum Prüfungsort mindestens eine halbe Stunde Puffer ein.',
        exampleTr: '前往考場的路程中請至少預留半小時的緩衝時間。',
      },
    ],
    listening: {
      title: '考官叮嚀：考前一晚的黃金法則',
      situation: '資深考官在考前培訓工作坊中，向全體考生交代最後 24 小時的注意事項。',
      dialogue: [
        {
          speaker: 'Prüfer',
          de: 'Morgen früh um 8:30 Uhr geht es los. Bitte pauken Sie heute Abend keine neuen Grammatiktabellen mehr!',
          zh: '明天早上8點30分正式開始。今天晚上請不要再去死記硬背新的文法表格了！',
        },
        {
          speaker: 'Kandidatin',
          de: 'Sollten wir nicht noch einmal die unregelmäßigen Verben durchgehen?',
          zh: '我們難道不該再把不規則動詞過一遍嗎？',
        },
        {
          speaker: 'Prüfer',
          de: 'Nein, das macht Sie nur nervös. Legen Sie Ihren Ausweis, die Anmeldebestätigung und zwei Stifte bereit. Schlafen Sie mindestens acht Stunden!',
          zh: '不，那只會讓您更加緊張。把您的身分證件、准考確認函和兩支筆準備好。睡滿至少八小時！',
        },
      ],
      comprehensionQuestions: [
        {
          id: 'd359_lq1',
          question: 'Was empfiehlt der Prüfer für den Abend vor der Prüfung?',
          options: [
            'Dokumente vorbereiten, entspannen und ausreichend schlafen. (準備好文件、放鬆並睡眠充足)',
            'Die ganze Nacht hindurch neue Vokabeln büffeln. (整晚苦讀新單字)',
            'Gar nicht erst zur Prüfung hingehen. (乾脆不要去考試)',
            'Viel Kaffee trinken und wachbleiben. (大量喝咖啡熬夜)',
          ],
          correctIndex: 0,
          explanation: '考前一晚的關鍵是確保身心處於最佳精神狀態，避免臨陣死背製造心理焦慮。',
        },
      ],
    },
    speaking: {
      title: '重拾思路與優雅過渡演練',
      instruction: '朗讀下列卡彈時的應急重啟句型，展現成熟溝通者的沉著。',
      targetSentences: [
        {
          id: 'd359_s1',
          de: 'Lassen Sie mich den Faden wieder aufnehmen: Was ich eigentlich sagen wollte, ist...',
          zh: '請讓我把剛才的思路重新接續起來：我本來真正想表達的是……',
          phoneticTip: '「den Faden wieder aufnehmen」為德意志極具地道感的成熟慣用語。',
        },
        {
          id: 'd359_s2',
          de: 'Das bringt mich unmittelbar zu meinem nächsten wesentlichen Argument.',
          zh: '這直接引領我來到我的下一個核心論點。',
          phoneticTip: '「unmittelbar」重音在前，表達果斷明快。',
        },
      ],
      rolePlay: {
        partnerName: 'Prüfungspartner',
        partnerRole: '口說測驗搭檔',
        scenario: '在口說 Teil 3 共同規劃活動時搭檔卡住，你主動伸出援手給予台階並推動對話。',
        promptDe: 'Ich... äh... weiß gerade nicht, was wir mit dem Essen machen sollen...',
        promptZh: '我……呃……剛好不知道我們對於食物該怎麼安排……',
        sampleReplies: [
          'Kein Problem! Wie wäre es, wenn wir ein Buffet machen, zu dem jeder Gast etwas mitbringt? Das spart Kosten und Arbeit.',
        ],
      },
    },
    reading: {
      title: 'B1-Schreiben Zeitmanagement: Der 60-Minuten-Masterplan',
      documentType: 'Prüfungsstrategie',
      content: 'DER 60-MINUTEN-MASTERPLAN FÜR DAS MODUL SCHREIBEN:\n\nIn 60 Minuten müssen drei Texte verfasst werden. Ein falsches Zeitmanagement ist die häufigste Ursache für unvollständige Arbeiten. Halten Sie sich strikt an diesen Zeitplan:\n\n1. TEIL 1: PERSÖNLICHE E-MAIL (20 MINUTEN, CA. 80 WÖRTER)\nSchreiben Sie an einen Freund. Gliedern Sie den Brief strikt in: Anrede, Einleitung, Bearbeitung aller drei Leitpunkte, Schlussformel und Gruß. Verwenden Sie lockere, persönliche Redemittel ("Du kannst dir gar nicht vorstellen, was passiert ist!").\n\n2. TEIL 2: MEINUNGSÄUSSERUNG IM FORUM (25 MINUTEN, CA. 80 WÖRTER)\nDiskutieren Sie ein kontroverses Thema (z.B. Homeoffice, Plastikverbot). Formulieren Sie Ihre eigene Meinung klar, nennen Sie Vor- und Nachteile und untermauern Sie Ihre Ansicht mit einem persönlichen Erfahrungsbeispiel.\n\n3. TEIL 3: FORMELLE MITTEILUNG (12 MINUTEN, CA. 40 WÖRTER)\nEine kurze formelle Entschuldigung oder Bitte an den Chef oder die Kursleiterin. Höfliche Anrede ("Sehr geehrte Frau..."), Konjunktiv II ("Ich wäre Ihnen sehr dankbar, wenn..."), formelle Grußformel.\n\n4. DREI-MINUTEN-PUFFER (LETZTE 3 MINUTEN)\nSchnelle Überprüfung von Großschreibung und Verben am Satzende!',
      translation: '寫作模組 60 分鐘大師配速表：\n\n60分鐘內必須完成三篇文章。時間分配不當是未完成試卷的最常見主因。請嚴格恪守此時間表：\n\n1. 第一部分：個人電子郵件（20分鐘，約80字）\n寫給朋友。嚴格分段：稱呼、引言、三個要點全部處理、結尾問候。使用隨和自然的個人語氣。\n\n2. 第二部分：論壇發表觀點（25分鐘，約80字）\n探討爭議主題（如居家辦公、禁用塑膠）。清晰表明個人立場，陳述利弊，並以自身經驗佐證。\n\n3. 第三部分：正式便條告示（12分鐘，約40字）\n向老闆或授課老師請假或提出請求。使用尊稱、虛擬式二式（禮貌請求）與正式結尾。\n\n4. 最後3分鐘緩衝：\n全卷快速排查名詞大小寫與從句動詞句尾！',
      glossary: {
        'verfassen': { pos: 'verb', meaning: '撰寫、執筆' },
        'kontrovers': { pos: 'adj', meaning: '具爭議性的、引發激辯的' },
        'untermauern': { pos: 'verb', meaning: '佐證、支撐（論點）' },
        'die Schlussformel': { pos: 'die', meaning: '信件結尾問候語' },
      },
      questions: [
        {
          id: 'd359_rq1',
          question: 'Warum sollte man für Teil 2 im Schreiben etwa 25 Minuten einplanen?',
          options: [
            'Weil die eigene Argumentation dort gedanklich und sprachlich am anspruchsvollsten ist. (因為個人論證在那部分的思辨與語言要求最高)',
            'Weil Teil 2 auf Chinesisch geschrieben werden muss. (因為第二部分要用中文寫)',
            'Weil man dort 500 Wörter schreiben muss. (因為要寫500字)',
            'Weil Teil 2 keine Rolle bei der Benotung spielt. (因為第二部分不計分)',
          ],
          correctIndex: 0,
          explanation: 'Teil 2 要求對爭議話題發表論證並以實例佐證，是寫作三篇中邏輯構思最深的一篇。',
        },
      ],
    },
    examTip: {
      skill: 'Prüfungsstrategie',
      title: 'Hals- und Beinbruch!',
      content: '在德國，千萬不要在考前對朋友說 "Viel Glück"，因為傳統迷信認為這會招來厄運！德國人會握緊拳頭說："Ich drücke dir die Daumen!"（我為你壓大拇指祈福），或者笑著說："Hals- und Beinbruch!"（祝你斷頸斷腿！），這是一句類似英語 "Break a leg" 的反話祝福！',
    },
  },

  360: {
    day: 360,
    stage: 'EXAM',
    week: 52,
    dayOfWeek: 3,
    title: 'Day 360: 歌德 B1 四大模組全拆解：閱聽寫說 60 分及格線與得分秘訣 (Prüfungsanalyse Komplett)',
    germanTitle: 'Endspurt 3: Die vier Module im Detail - Bestehensgrenzen & Bewertungsmatrix',
    theme: '歌德 B1 官方評分架構全剖析 - 60% 及格門檻、獨立模組核發與考官給分標準',
    estimatedMinutes: 20,
    grammar: {
      title: '歌德 B1 官方四模組架構與權重全景 (Prüfungsstruktur)',
      explanation: 'Goethe-Zertifikat B1 採用模組化設計（Modularer Aufbau）：\n1. **四科完全獨立**：Lesen (65分/30題)、Hören (40分/30題)、Schreiben (60分/3篇)、Sprechen (15分/3部分)。\n2. **及格線**：每一科滿分換算為 100 分，及格標準均為 **60 分 (60%)**。只要單科通過即可獲得該科的合格證書（Modulzeugnis）；四科全部通過則換發全科總證書（Gesamtzertifikat）。\n3. **口說評分四維度**：Aufgabenerfüllung (任務完成度 25%)、Kohärenz & Flüssigkeit (連貫性與流暢度 25%)、Wortschatz (詞彙豐富度 25%)、Strukturen & Aussprache (文法架構與發音 25%)。',
      ruleExample: [
        {
          de: 'Um das Gesamtzertifikat zu erhalten, muss in allen vier Modulen die 60-Punkte-Hürde gemeistert werden.',
          zh: '要取得全科總證書，必須在所有四個模組中跨越 60 分的及格門檻。',
          note: '各模組獨立計分與認證',
        },
        {
          de: 'Aktives Zuhören und Nachfragen in Teil 3 des Sprechens wird von den Prüfern hoch honoriert.',
          zh: '在口說第三部分中專注傾聽並提出問題，會獲得考官極高的評價給分。',
          note: 'Interaktion 是歌德口說的核心靈魂',
        },
      ],
    },
    vocabulary: [
      {
        id: 'd360_v1',
        word: 'das Modul',
        article: 'das',
        plural: 'die Module',
        meaning: '考試模組、科目單元',
        example: 'Man kann alle vier Module an einem einzigen Prüfungstag ablegen oder einzeln buchen.',
        exampleTr: '可以在同一個考試日報考全部四個模組，也可以單獨分科報名。',
      },
      {
        id: 'd360_v2',
        word: 'die Aufgabenerfüllung',
        article: 'die',
        meaning: '任務完成度（評分最高權重核心）',
        example: 'Die vollständige Aufgabenerfüllung sichert bereits die halbe Miete für das Bestehen.',
        exampleTr: '完整的任務完成度就已經確保了順利及格的一半成功基石。',
      },
      {
        id: 'd360_v3',
        word: 'die Gewichtung',
        article: 'die',
        meaning: '比重、權重加權',
        example: 'Jedes Kriterium hat in der Bewertungsmatrix eine feste Gewichtung.',
        exampleTr: '在評分矩陣中，每個標準都有著固定的權重。',
      },
      {
        id: 'd360_v4',
        word: 'die Flüssigkeit',
        article: 'die',
        meaning: '流暢度、口語連貫性',
        example: 'Natürliche Sprechflüssigkeit zählt mehr als das fehlerfreie Rezitieren auswendig gelernter Phrasen.',
        exampleTr: '自然的說話流暢度，遠比一字不差死背硬背下來的套話更有價值。',
      },
      {
        id: 'd360_v5',
        word: 'bestehen',
        meaning: '通過（考試）(besteht, bestand, hat bestanden)',
        example: 'Herzlichen Glückwunsch! Sie haben alle vier Module mit Bravour bestanden!',
        exampleTr: '衷心恭喜！您以無比出色的成績通過了所有四個模組！',
      },
    ],
    listening: {
      title: '教研解析：聽力 Teil 3 & Teil 4 唯一的播放機會',
      situation: '補習班教務主任向即將進考場的學員強調聽力單元播放次數的關鍵差異。',
      dialogue: [
        {
          speaker: 'Leiter',
          de: 'Erinnern Sie sich bitte: Teil 1 und Teil 2 hören Sie zweimal, aber Teil 3 und Teil 4 hören Sie NUR EINMAL!',
          zh: '請務必牢記：第1部分與第2部分您會聽兩次，但第3與第4部分您「只會聽一次」！',
        },
        {
          speaker: 'Student',
          de: 'Das heißt, bei Teil 3 und 4 muss jede Sekunde Lesezeit vorher optimal genutzt werden?',
          zh: '這意味著在第3與第4部分，先前的每一秒讀題時間都必須得到最佳利用？',
        },
        {
          speaker: 'Leiter',
          de: 'Exakt! Markieren Sie sofort die Schlüsselwörter. Wenn Sie eine Frage verpassen: Sofort abhaken und weiter zum nächsten Item!',
          zh: '正是如此！立刻畫出關鍵字。如果您漏掉了一題：立刻放手，果斷進入下一題！',
        },
      ],
      comprehensionQuestions: [
        {
          id: 'd360_lq1',
          question: 'Welche Teile im B1-Hörverstehen werden nur ein einziges Mal abgespielt?',
          options: [
            'Teil 3 und Teil 4. (第3部分與第4部分)',
            'Alle Teile werden dreimal abgespielt. (所有部分播三次)',
            'Nur Teil 1. (只有第1部分)',
            'Gar kein Teil, alles läuft über Kopfhörer ohne Ton. (完全沒播)',
          ],
          correctIndex: 0,
          explanation: '歌德 B1 聽力 Teil 1 與 Teil 2 播放兩次，Teil 3（日常對話）與 Teil 4（廣播討論）僅播放一次。',
        },
      ],
    },
    speaking: {
      title: '口說 Teil 3 互動提問與反饋高分技巧',
      instruction: '朗讀下列聽取搭檔演講後的專業回饋與提問句型。',
      targetSentences: [
        {
          id: 'd360_s1',
          de: 'Vielen Dank für deinen interessanten Vortrag! Du hast die Argumente sehr ausgewogen dargestellt.',
          zh: '非常感謝你這場有趣的演講！你把論點陳述得非常平衡周全。',
          phoneticTip: '「ausgewogen dargestellt」語調真誠肯定。',
        },
        {
          id: 'd360_s2',
          de: 'Mich würde in diesem Zusammenhang interessieren: Welche Erfahrungen hast du persönlich damit gemacht?',
          zh: '在這方面我很感興趣的是：你自己個人對此有過什麼樣的經驗？',
          phoneticTip: '「persönlich」重音清晰，展現主動交際渴望。',
        },
      ],
      rolePlay: {
        partnerName: 'Kandidat A',
        partnerRole: '口說考試搭檔',
        scenario: '搭檔剛剛發表了關於「是否該給小孩零用錢」的演講，你給予評價並提出一個高分問題。',
        promptDe: 'Das war meine Präsentation zum Thema Taschengeld für Kinder. Hast du noch Fragen?',
        promptZh: '這就是我關於兒童零用錢主題的簡報。你還有問題嗎？',
        sampleReplies: [
          'Danke für die tolle Präsentation! Mich würde interessieren: Ab welchem Alter sollten Eltern deiner Meinung nach mit festem Taschengeld beginnen?',
        ],
      },
    },
    reading: {
      title: 'Die Anatomie des Goethe-Zertifikats B1',
      documentType: 'Prüfungsordnung',
      content: 'DAS GOETHE-ZERTIFIKAT B1 IM ÜBERBLICK:\n\nDas B1-Zertifikat bescheinigt die Fähigkeit zur selbstständigen Sprachverwendung (Threshold Level). Die Prüfung besteht aus vier Modulen:\n\n1. MODUL LESEN (65 MINUTEN, 30 PUNKTE):\nFünf Teile: Blogbeiträge/E-Mails verstehen, Zeitungsberichte erfassen, Anzeigen zuordnen, Leserbriefe analysieren und Hausordnungen/Richtlinien verstehen.\n\n2. MODUL HÖREN (CA. 40 MINUTEN, 30 PUNKTE):\nFünf kurze Alltagsansagen (Teil 1, 2x), Führung/Vortrag (Teil 2, 2x), informelles Gespräch zweier Personen (Teil 3, 1x) und Radiodiskussion (Teil 4, 1x).\n\n3. MODUL SCHREIBEN (60 MINUTEN, 100 PUNKTE):\nPersönliche Mitteilung, Forumsbeitrag mit Meinungsäußerung, formelle Entschuldigung/Mitteilung.\n\n4. MODUL SPRECHEN (CA. 15 MINUTEN PAARPRÜFUNG):\nTeil 1: Gemeinsam etwas planen (z.B. Abschiedsfeier organisieren).\nTeil 2: Ein Thema präsentieren (Struktur: Folie 1-5, eigene Erfahrung, Vor-/Nachteile, Heimatland).\nTeil 3: Fragen stellen und Feedback zum Vortrag des Partners geben.',
      translation: '歌德 B1 認證考試全景概覽：\n\nB1 證書證明了獨立運用德語的能力（門檻級）。考試由四個模組組成：\n\n1. 閱讀模組（65分鐘，30分）：\n共五個部分：理解網誌與郵件、抓取報刊報導、廣告配對、分析讀者來信、理解管理規章與指南。\n\n2. 聽力模組（約40分鐘，30分）：\n五則日常廣播（Teil 1，聽兩次）、導覽解說（Teil 2，聽兩次）、兩人日常對話（Teil 3，聽一次）、電台座談討論（Teil 4，聽一次）。\n\n3. 寫作模組（60分鐘，100分）：\n個人通訊、論壇觀點陳述、正式便條請假。\n\n4. 口說模組（約15分鐘雙人考試）：\nTeil 1：共同策劃活動（例如籌辦歡送派對）。\nTeil 2：主題簡報（五投影片結構：經驗、利弊、母國情況）。\nTeil 3：相互回饋與提問。',
      glossary: {
        'bescheinigen': { pos: 'verb', meaning: '官方證明、出具證書' },
        'selbstständig': { pos: 'adj', meaning: '獨立的、自主的' },
        'die Hausordnung': { pos: 'die', meaning: '大樓住戶規約、內部條例' },
        'die Abschiedsfeier': { pos: 'die', meaning: '歡送會、告別派對' },
      },
      questions: [
        {
          id: 'd360_rq1',
          question: 'Was ist das Hauptziel von Teil 1 im Modul Sprechen?',
          options: [
            'Gemeinsam mit dem Prüfungspartner ein Event oder Projekt durch Vorschläge und Einwände zu planen. (透過提議與反饋與搭檔共同規劃活動)',
            'Ein deutsches Gedicht auswendig aufzusagen. (背誦一首德語詩)',
            'Mit den Prüfern über Fußball zu streiten. (與考官爭論足球)',
            'Möglichst laut ohne Pause zu sprechen. (儘可能大聲不間斷講話)',
          ],
          correctIndex: 0,
          explanation: '口說 Teil 1 測驗兩人協商合作能力（Vorschläge machen, zustimmen, ablehnen, einen Kompromiss finden）。',
        },
      ],
    },
    examTip: {
      skill: 'Sprechen',
      title: '簡報的黃金五步架構 (Fünf Folien)',
      content: '口說 Teil 2 簡報切記五步走：1. 介紹主題與結構；2. 描述個人親身經歷；3. 介紹母國情況；4. 列舉優缺點並陳述個人觀點；5. 結尾致謝並邀請提問。這個框架無懈可擊！',
    },
  },

  361: {
    day: 361,
    stage: 'EXAM',
    week: 52,
    dayOfWeek: 4,
    title: 'Day 361: 跨越 B1 之後：通往 B2/C1 高階德語與真實德語媒體的世界 (Der Weg zu B2/C1)',
    germanTitle: 'Ausblick 1: Der Sprung nach B2/C1 - Tagesschau, Fachsprache & Sprachautonomie',
    theme: '自主進階學習藍圖 - 脫離教科書、擁抱真實德語新聞、名詞化思維與被動態替代形式',
    estimatedMinutes: 20,
    grammar: {
      title: 'B2 語法核心跨越：名詞化風格與被動態替代形式 (Nominalstil & Passiversatz)',
      explanation: '當你跨越 B1 之後，德語學習將迎來質的飛躍——從「日常溝通」邁向「學術與專業論述 (Wissenschafts- und Fachsprache)」：\n1. **被動替代形式 (Passiversatzformen)**：\n- **sein + zu + Infinitiv**（表必須/可以被做）：Diese Frage ist sofort zu klären. (= muss sofort geklärt werden)\n- **sich lassen + Infinitiv**（表能夠被做）：Das Problem lässt sich leicht lösen. (= kann gelöst werden)\n2. **名詞化風格 (Nominalstil)**：將動詞從句濃縮為介系詞加名詞短語（Weil die Preise steigen -> Wegen des Preisanstiegs）。在學術德語中能大幅增加資訊密度與嚴謹度。',
      ruleExample: [
        {
          de: 'Diese komplexe Aufgabe lässt sich nur durch interdisziplinäre Zusammenarbeit bewältigen.',
          zh: '這項複雜的任務唯有透過跨學科合作才能得以克服。',
          note: 'sich lassen + Infinitiv 代表「能夠被……（kann bewältigt werden）」',
        },
        {
          de: 'In Anbetracht der veränderten Marktlage sind sofortige Reformen unumgänglich.',
          zh: '鑑於變化的市場局勢，立即進行改革勢在必行。',
          note: 'In Anbetracht (+ Genitiv) 是媒體與專業德語的高階表達',
        },
      ],
    },
    vocabulary: [
      {
        id: 'd361_v1',
        word: 'die Sprachautonomie',
        article: 'die',
        meaning: '語言自主性、自如獨立運用能力',
        example: 'Das oberste Ziel auf dem Weg zu B2/C1 ist echte Sprachautonomie ohne Wörterbuch.',
        exampleTr: '通往 B2/C1 之路上最崇高的目標是不依賴字典的真正語言自主。',
      },
      {
        id: 'd361_v2',
        word: 'bewältigen',
        meaning: '克服、勝任、戰勝（複雜困難）(bewältigt, bewältigte, hat bewältigt)',
        example: 'Mit Geduld lässt sich auch anspruchsvolle Fachliteratur erfolgreich bewältigen.',
        exampleTr: '憑藉耐心，即便是難度極高的專業文獻也能被成功攻克。',
      },
      {
        id: 'd361_v3',
        word: 'die Fachsprache',
        article: 'die',
        meaning: '專業用語、學術專門術語',
        example: 'An der Universität begegnen Studierende täglich der präzisen wissenschaftlichen Fachsprache.',
        exampleTr: '在大學裡，學生每天都會接觸到精準嚴謹的學術專業用語。',
      },
      {
        id: 'd361_v4',
        word: 'eintauchen',
        meaning: '沉浸、潛入 (taucht ein, tauchte ein, ist eingetaucht)',
        example: 'Wer in deutschsprachige Podcasts eintaucht, verinnerlicht den natürlichen Sprachrhythmus.',
        exampleTr: '沉浸在德語播客中的人，能深入內化自然的語言節奏與韻律。',
      },
      {
        id: 'd361_v5',
        word: 'unumgänglich',
        meaning: '不可避免的、勢在必行的',
        example: 'Regelmäßiges Zeitunglesen ist für das Erreichen des C1-Niveaus schlichtweg unumgänglich.',
        exampleTr: '規律閱讀報紙對於達到 C1 水準而言完全是不可或缺的。',
      },
    ],
    listening: {
      title: '名師訪談：從 B1 到 B2 的「沉浸式升級」秘訣',
      situation: '語言學教授正在廣播節目中分享如何告別教科書、進入真實德語世界。',
      dialogue: [
        {
          speaker: 'Moderator',
          de: 'Herr Professor, viele Lerner bestehen B1, scheitern dann aber an echten deutschen Nachrichten. Warum?',
          zh: '教授先生，許多學習者通過了 B1，但在真實的德語新聞前卻碰壁了。為什麼？',
        },
        {
          speaker: 'Professor',
          de: 'Weil Lehrbücher künstlich vereinfacht sind! Mein Rat: Schauen Sie täglich die "Tagesschau in 100 Sekunden" mit deutschen Untertiteln.',
          zh: '因為教科書是經過人為簡化的！我的建議是：每天觀看帶德文字幕的「100秒每日新聞」。',
        },
        {
          speaker: 'Moderator',
          de: 'Und wenn man beim ersten Mal nur die Hälfte versteht?',
          zh: '那如果第一次只聽懂一半呢？',
        },
        {
          speaker: 'Professor',
          de: 'Ganz normal! Das Gehirn lernt durch Wiederholung und Kontext. Nach zwei Monaten verstehen Sie 90% ohne Anstrengung!',
          zh: '完全正常！大腦是透過重複和語境來學習的。兩個月後，您就能不費力聽懂90%！',
        },
      ],
      comprehensionQuestions: [
        {
          id: 'd361_lq1',
          question: 'Welche Methode empfiehlt der Professor für den Übergang zu echten Medien?',
          options: [
            'Täglich kurze Original-Nachrichten wie die Tagesschau mit deutschen Untertiteln konsumieren. (每天觀看像每日新聞這樣的簡短原版新聞並搭配德文字幕)',
            'Wieder von Lektion 1 im A1-Buch anfangen. (從 A1 課本第1課重新開始)',
            'Nur noch deutsche Schlager hören. (只聽德語通俗歌曲)',
            'Aufhören, Deutsch zu lernen. (停止學習德語)',
          ],
          correctIndex: 0,
          explanation: '教授強調接觸原汁原味的真實媒體（如 Tagesschau in 100 Sekunden），藉由重複與語境自然吸收。',
        },
      ],
    },
    speaking: {
      title: '學術研討會層次的高階論證發言',
      instruction: '朗讀下列深具思辨力與折衷協調性的 B2 發言句型。',
      targetSentences: [
        {
          id: 'd361_s1',
          de: 'Man muss an dieser Stelle differenzieren zwischen den kurzfristigen Effekten und den langfristigen Folgen.',
          zh: '在此處我們必須區分短期效應與長遠後果。',
          phoneticTip: '「differenzieren」發音圓潤，展現清晰邏輯層次。',
        },
        {
          id: 'd361_s2',
          de: 'Dieses Argument greift zu kurz, da es entscheidende gesellschaftliche Faktoren außer Acht lässt.',
          zh: '這個論點有失周全，因為它忽略了關鍵的社會因素。',
          phoneticTip: '「greift zu kurz」語調堅定客觀。',
        },
      ],
      rolePlay: {
        partnerName: 'Kommilitonin im Universitätsseminar',
        partnerRole: '大學研討會同學',
        scenario: '在研討會中探討人工智慧對勞動市場的衝擊，進行高層次觀點交鋒。',
        promptDe: 'Künstliche Intelligenz wird in Zukunft fast alle Arbeitsplätze im Büro überflüssig machen, oder?',
        promptZh: '人工智慧在未來會讓辦公室幾乎所有的工作崗位都變成多餘的，對吧？',
        sampleReplies: [
          'Dieser Standpunkt greift meines Erachtens zu kurz. Technologische Umbrüche vernichten zwar Routinejobs, schaffen aber gleichzeitig völlig neuartige Berufsfelder.',
        ],
      },
    },
    reading: {
      title: 'Der Sprung ins offene Meer: Das Abenteuer B2/C1',
      documentType: 'Lernphilosophie',
      content: 'VOM SCHWIMMBECKEN INS OFFENE MEER:\n\nMit dem Bestehen des Goethe-Zertifikats B1 haben Sie das solide Fundament des Deutschen gemeistert: Sie kennen die vier Fälle, die Zeiten und die Satzklammer. Sie können sich im Alltag behaupten.\n\nDoch der Schritt zu B2 und C1 gleicht dem Sprung vom geschützten Schwimmbecken ins offene Meer:\n\n1. DIE WELT DER NUANCEN:\nAuf B2-Niveau reicht es nicht mehr aus zu sagen: "Das ist gut". Sie lernen feine Bedeutungsunterschiede kennen: "scheinbar" (nur so wirken, aber falsch sein) versus "anscheinend" (sehr wahrscheinlich so sein); "effektiv" versus "effizient".\n\n2. DIE KRAFT DER MEDIEN:\nLegen Sie die didaktisierten Texte beiseite! Lesen Sie Magazine wie den "Spiegel", hören Sie Podcasts von "Deutschlandfunk" oder schauen Sie die Hauptausgabe der "Tagesschau".\n\n3. MUT ZUR LÜCKE:\nLernen Sie zu akzeptieren, dass Sie nicht jedes Wort kennen müssen. Verfolgen Sie den roten Faden der Argumentation. Ihr Sprachgefühl wird mit jedem authentischen Text schärfer und intuitiver!',
      translation: '從游泳池邁向廣闊大海：\n\n通過歌德 B1 認證，您已經征服了德語的堅實地基：掌握了四個格位、時態與框形結構，能在日常中自如立足。\n\n然而邁向 B2 與 C1 的步伐，猶如從受保護的游泳池縱身躍入遼闊的大海：\n\n1. 細微差別的世界：\n在 B2 級別，只說「Das ist gut」已經不夠了。您將學會精微的語意差異：如 scheinbar（看似如此其實不然）與 anscheinend（顯然如此大概不假）；effektiv 與 effizient。\n\n2. 媒體的力量：\n把教學改編過的文章擱在一旁吧！閱讀《明鏡》等雜誌，收聽《德國廣播電台》的播客，觀看《每日新聞》的主播播報。\n\n3. 容忍生詞的勇氣：\n學會接受自己不需要懂得每個生詞。跟隨論述的核心主線。您的語感將隨著每一篇真實文本而變得更加敏銳而直覺！',
      glossary: {
        'das Fundament': { pos: 'das', meaning: '地基、基石' },
        'die Nuance': { pos: 'die', meaning: '細微差別、精微細節' },
        'didaktisiert': { pos: 'adj', meaning: '為教學而改編簡化的' },
        'der rote Faden': { pos: 'der', meaning: '核心貫穿主線' },
      },
      questions: [
        {
          id: 'd361_rq1',
          question: 'Was meint der Autor mit "Mut zur Lücke" beim Lesen authentischer B2-Texte?',
          options: [
            'Dass man dem inhaltlichen roten Faden folgt, ohne jedes unbekannte Wort nachzuschlagen. (跟隨內容主線脈絡，而不必逐字查字典)',
            'Dass man mitten im Text aufhört zu lesen. (讀到一半放棄不讀)',
            'Dass man Wörter aus der Zeitung herausschneidet. (把報紙上的字剪下來)',
            'Dass man nur die Lücken im Text liest. (只讀文字中的空格)',
          ],
          correctIndex: 0,
          explanation: 'Mut zur Lücke 意指不必對少數生詞產生焦慮，學會抓住宏觀脈絡與核心論證。',
        },
      ],
    },
    examTip: {
      skill: 'Autonomes Lernen',
      title: 'Deutschlandfunk in der Hosentasche',
      content: '下載「Dlf Audiothek」App！每天上下班或搭捷運時收聽 15 分鐘「Hintergrund」（深度背景專題），不僅德語聽力迅速超群，還能獲得全德乃至全球政治、經濟與哲學的第一手深度洞察！',
    },
  },

  362: {
    day: 362,
    stage: 'EXAM',
    week: 52,
    dayOfWeek: 5,
    title: 'Day 362: 德意志文學巡禮：歌德、卡夫卡、赫塞與德語靈魂美學 (Deutsche Literatur: Goethe, Kafka, Hesse)',
    germanTitle: 'Ausblick 2: Schnupperkurs Deutsche Literatur - Goethe, Kafka & Hermann Hesse',
    theme: '德語文學原著精賞 - 《浮士德》經典名句、卡夫卡《變形記》的荒謬美學與赫塞《流浪者之歌》',
    estimatedMinutes: 20,
    grammar: {
      title: '文學德語的詩性節奏、隱喻與倒裝張力 (Literarische Sprachformen)',
      explanation: '德語絕不僅僅是辦事合約與精密工程的語言，它更孕育了人類文明最深刻震撼的文學高峰。透過文學作品，我們能看見德語驚人的雕琢可塑性：\n1. **詩性倒裝 (Inversion für Dramatik)**：打破標準語序，將受詞或動詞置於句首以營造巨大張力。例如歌德《浮士德》："Zwei Seelen wohnen, ach! in meiner Brust..."（兩顆靈魂，唉！居於我胸中）。\n2. **德語獨特的哲學複合詞**：Weltschmerz（世界之痛/人生厭世之悲）、die Sehnsucht（無盡的靈魂渴盼）、das Fernweh（對遠方的憧憬）。\n3. **精準冷靜的客觀筆觸**：卡夫卡以近乎公文告示的冷冽客觀語言描繪超現實荒謬，產生直擊靈魂的震撼效果。',
      ruleExample: [
        {
          de: 'Zwei Seelen wohnen, ach! in meiner Brust, die eine will sich von der andern trennen.',
          zh: '兩顆靈魂，唉！居於我胸中，一者總欲掙脫另一者而遠去。（歌德《浮士德》）',
          note: '經典詩歌句型，展現人類在世俗慾望與崇高追求之間的永恆撕裂',
        },
        {
          de: 'Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheuren Ungeziefer verwandelt.',
          zh: '清晨，當葛雷戈·桑薩從不安的夢境中醒來，發現自己在床上變成了一隻巨大的甲蟲。（卡夫卡《變形記》）',
          note: '文學史上最震撼的世界名著開篇第一句',
        },
      ],
    },
    vocabulary: [
      {
        id: 'd362_v1',
        word: 'das Meisterwerk',
        article: 'das',
        plural: 'die Meisterwerke',
        meaning: '名著、傑作',
        example: 'Goethes Faust gilt als unbestrittenes Meisterwerk der Weltliteratur.',
        exampleTr: '歌德的《浮士德》被公認為世界文學無可爭議的傳世傑作。',
      },
      {
        id: 'd362_v2',
        word: 'die Sehnsucht',
        article: 'die',
        meaning: '深切的渴念、靈魂深處的憧憬',
        example: 'Hermann Hesses Werke sind durchdrungen von tiefer Sehnsucht nach innerer Harmonie.',
        exampleTr: '赫曼·赫塞的作品通篇貫穿著對內在和諧的深切渴盼。',
      },
      {
        id: 'd362_v3',
        word: 'verweilen',
        meaning: '駐足、停留片刻 (verweilt, verweilte, hat verweilt)',
        example: 'Verweile doch! Du bist so schön! (Fausts berühmteste Wette)',
        exampleTr: '請停留片刻吧！你是如此的美麗！（浮士德最著名的賭注）',
      },
      {
        id: 'd362_v4',
        word: 'die Metapher',
        article: 'die',
        plural: 'die Metaphern',
        meaning: '隱喻、象徵意象',
        example: 'Der Fluss in Hesses "Siddhartha" dient als kraftvolle Metapher für den ewigen Lebensstrom.',
        exampleTr: '赫塞《流浪者之歌》中的河流，化作了象徵永恆生命之流的強大隱喻。',
      },
      {
        id: 'd362_v5',
        word: 'tiefgründig',
        meaning: '深邃的、蘊含深刻哲理的',
        example: 'Deutsche Literatur fasziniert Leser weltweit durch ihre tiefgründigen philosophischen Fragen.',
        exampleTr: '德語文學以其深邃深刻的哲學詰問吸引了全球無數讀者。',
      },
    ],
    listening: {
      title: '文學品讀：浮士德之賭與浮士德精神',
      situation: '威瑪劇院話劇導演向青年演員解析歌德筆下「浮士德精神 (das Faustische)」的本質。',
      dialogue: [
        {
          speaker: 'Regisseur',
          de: 'Faust schließt eine Wette mit dem Teufel Mephisto ab. Er sagt: "Werd ich zum Augenblicke sagen: Verweile doch! Du bist so schön! Dann magst du mich in Fesseln schlagen!"',
          zh: '浮士德與魔鬼梅菲斯特打賭。他說：「倘若我對某一瞬間說：停留片刻吧！你是如此美麗！那時你便可將我套上鎖鏈！」',
        },
        {
          speaker: 'Schauspieler',
          de: 'Warum schlägt Faust ausgerechnet diese Bedingung vor?',
          zh: '為什麼浮士德偏偏提出這個條件？',
        },
        {
          speaker: 'Regisseur',
          de: 'Weil das Wesen des faustischen Menschen das ewige, unruhige Streben ist! Der Stillstand bedeutet für ihn den geistigen Tod.',
          zh: '因為浮士德式人物的本質正是永恆、不寧靜的奮進！對他而言，停滯不前就等同於精神的死亡。',
        },
      ],
      comprehensionQuestions: [
        {
          id: 'd362_lq1',
          question: 'Was symbolisiert Fausts berühmter Satz "Verweile doch! Du bist so schön!"?',
          options: [
            'Den hypothetischen Moment der vollkommenen Sattheit und des Aufhörens weiteren Strebens. (假想中的徹底滿足與停止進一步奮鬥的時刻)',
            'Dass Faust müde ist und schlafen möchte. (浮士德累了想睡覺)',
            'Dass er ein teures Bild im Museum kaufen will. (他想在博物館買名畫)',
            'Dass der Teufel Angst vor schönen Dingen hat. (魔鬼害怕美好的事物)',
          ],
          correctIndex: 0,
          explanation: '浮士德賭的是：世間沒有任何一個瞬間能讓他徹底停下腳步不再奮進。',
        },
      ],
    },
    speaking: {
      title: '品評文學名著的高雅談吐演練',
      instruction: '朗讀下列文學感悟分享句型，語氣優雅沉穩。',
      targetSentences: [
        {
          id: 'd362_s1',
          de: 'Dieses Werk berührt mich besonders durch seine existenzielle Tiefe und emotionale Wucht.',
          zh: '這部作品以其關乎人類存在的深度與情感震撼力深深觸動了我。',
          phoneticTip: '「emotionale Wucht」發音富有感染力。',
        },
        {
          id: 'd362_s2',
          de: 'Zwischen den Zeilen lässt sich eine feine Melancholie und Sehnsucht nach Sinn spüren.',
          zh: '字裡行間讓人感受到一股淡淡的哀愁與對生命意義的深切渴望。',
          phoneticTip: '「Zwischen den Zeilen」為成熟文學品讀的經典片語。',
        },
      ],
      rolePlay: {
        partnerName: 'Bibliothekarin in Weimar',
        partnerRole: '威瑪安娜·阿瑪利亞圖書館館員',
        scenario: '在歌德故居附近的古老圖書館借閱赫曼·赫塞的《流浪者之歌》並與館員交流心得。',
        promptDe: 'Suchen Sie nach Hesses "Siddhartha"? Ein wunderbares Buch über die Suche nach Weisheit!',
        promptZh: '您在尋找赫塞的《流浪者之歌》嗎？一本關於追尋智慧的絕妙好書！',
        sampleReplies: [
          'Ja, genau! Mich fasziniert vor allem, wie Hesse die Einheit der Welt beschreibt. Das Original auf Deutsch zu lesen, ist ein unbeschreibliches Erlebnis.',
        ],
      },
    },
    reading: {
      title: 'Das Land der Dichter und Denker: Warum Literatur Deutsch lebendig macht',
      documentType: 'Kulturessay',
      content: 'DAS LAND DER DICHTER UND DENKER:\n\nLange bevor es einen einheitlichen deutschen Nationalstaat gab, existierte eine gemeinsame geistige Heimat: die Sprache der Dichter und Denker. Martin Luthers Bibelübersetzung schuf die Basis, doch die Weimarer Klassik um Goethe und Schiller erhob das Deutsche zu einer Weltsprache der Philosophie und Kunst.\n\n1. GOETHE UND DER UNIVERSALGEIST:\nJohann Wolfgang von Goethe war Naturwissenschaftler, Staatsmann und Dichter. Sein "Faust" ist das Epos des modernen Menschen, der die Grenzen des Wissens und Fühlens sprengen will.\n\n2. KAFKAS EXISTENZIELLES LABYRINTH:\nFranz Kafka schrieb in klarem, fast nüchternem Deutsch über die Ohnmacht des Einzelnen gegenüber anonymen Bürokratien. Seine Romane "Der Prozess" und "Das Schloss" prägten den Begriff "kafkaesk" in allen Weltsprachen.\n\n3. HERMANN HESSE UND DIE INNERE EINKEHR:\nNobelpreisträger Hermann Hesse berührte Generationen mit "Der Steppenwolf" und "Siddhartha". Seine Romane sind Seelenlandschaften auf der Suche nach Identität und Spiritualität.\n\nWer Deutsch lernt, erbt diesen unermesslichen Schatz.',
      translation: '詩人與思想家的國度：\n\n早在出現統一的德意志民族國家之前，就已經存在著一個共同的精神原鄉：詩人與思想家的語言。馬丁·路德的聖經翻譯奠定了基石，而圍繞著歌德與席勒的威瑪古典主義則將德語提升為哲學與藝術的世界語言。\n\n1. 歌德與全能博學家：\n歌德身兼自然科學家、政治家與詩人。他的《浮士德》是現代人類試圖衝破知識與情感邊界的史詩。\n\n2. 卡夫卡的存在主義迷宮：\n法蘭茲·卡夫卡以清晰、近乎冷靜客觀的德語，描寫個體面對匿名稱號官僚體系時的無力感。他的小說《審判》與《城堡》將「卡夫卡式（kafkaesk）」這個詞銘刻進全世界所有語言中。\n\n3. 赫曼·赫塞與內心自省：\n諾貝爾文學獎得主赫塞以《荒野之狼》與《流浪者之歌》觸動了幾代人。他的小說是追尋自我認同與靈性境界的心靈畫卷。\n\n學習德語的人，繼承了這份不可估量的瑰寶。',
      glossary: {
        'der Universalgeist': { pos: 'der', meaning: '全才、博學家' },
        'das Epos': { pos: 'das', meaning: '史詩、宏篇長卷' },
        'die Ohnmacht': { pos: 'die', meaning: '無能為力、脆弱無助' },
        'unermesslich': { pos: 'adj', meaning: '不可估量的、無比巨大的' },
      },
      questions: [
        {
          id: 'd362_rq1',
          question: 'Was schuf die gemeinsame Identität im deutschen Sprachraum vor der Staatsgründung?',
          options: [
            'Die gemeinsame Sprache der Dichter und Denker und die Literatur. (詩人與思想家的共同語言以及文學作品)',
            'Ein riesiges Autobahnnetz. (龐大的高速公路網)',
            'Einheitliche Euro-Münzen. (統一的歐元硬幣)',
            'Gemeinsame Fernsehprogramme. (共同的電視節目)',
          ],
          correctIndex: 0,
          explanation: '在國家實體政治統一之前，文學與哲學的共同德語建立了整個德語區共同的文化認同。',
        },
      ],
    },
    examTip: {
      skill: 'Kultur',
      title: '歌德學院名字的由來',
      content: '歌德學院（Goethe-Institut）以約翰·沃爾夫岡·馮·歌德命名，正是為了紀念這位跨越科學、文學與世界公民理想的偉大智者。當你拿到歌德證書時，你的名字便與這份輝煌的人文主義歷史緊緊相連！',
    },
  },

  363: {
    day: 363,
    stage: 'EXAM',
    week: 52,
    dayOfWeek: 6,
    title: 'Day 363: 德式理性思辨與媒體爭鳴文化：明鏡、時代週報與文化副刊 (Medienanalyse & Debattenkultur)',
    germanTitle: 'Ausblick 3: Debattenkultur & Leitmedien - Der Spiegel, FAZ & das Feuilleton',
    theme: '德意志深度閱讀解鎖 - 嚴肅新聞傳統、文化副刊 (Feuilleton) 與憲法言論自由',
    estimatedMinutes: 20,
    grammar: {
      title: '嚴肅媒體社論的修辭架構與立場動詞 (Die Sprache der Qualitätspresse)',
      explanation: '德國擁有全球最健全且講求深度的媒體生態之一：調查報導旗艦《明鏡》（Der Spiegel）、文化哲思重鎮《時代週報》（Die Zeit）、經濟保守主流《法蘭克福匯報》（FAZ）與自由進步派《南德意志報》（SZ）。\n1. **評論文章 (Der Kommentar) 的三段式論證**：These（立論核心）-> Antithese（對立論據反思）-> Synthese（綜合更高維度解方）。\n2. **隱含立场的修辭動詞**：\n- **behaupten / vorgeben**：宣稱（說話者持保留或懷疑態度）\n- **einräumen / zugestehen**：承認/讓步（承認對方部分正確）\n- **unterstreichen / betonen**：著重強調（完全支持該觀點）\n3. **文化副刊 (Das Feuilleton)**：德國大報獨一無二的文化思辨版塊，聚集哲學家探討人工智慧、氣候倫理與當代社會精神走向。',
      ruleExample: [
        {
          de: 'Der Kommentator räumt zwar Mängel ein, unterstreicht jedoch die langfristige Notwendigkeit des Vorhabens.',
          zh: '評論員雖然承認存在缺失，但著重強調了該計畫的長遠必要性。',
          note: 'einräumen (退讓一步) 與 unterstreichen (強調核心) 的精準搭配',
        },
        {
          de: 'Die Frage der Generationengerechtigkeit steht erneut im Brennpunkt der gesellschaftlichen Debatte.',
          zh: '世代正義的問題再次處於社會公共辯論的焦點核心。',
          note: 'im Brennpunkt stehen 為政經德語高頻詞組',
        },
      ],
    },
    vocabulary: [
      {
        id: 'd363_v1',
        word: 'die Streitkultur',
        article: 'die',
        meaning: '爭鳴文化、理性質疑辯論的傳統',
        example: 'Eine lebendige und respektvolle Streitkultur ist das Herzstück jeder stabilen Demokratie.',
        exampleTr: '生動蓬勃且互相尊重的論辯爭鳴文化，是任何穩固民主的核心心臟。',
      },
      {
        id: 'd363_v2',
        word: 'das Feuilleton',
        article: 'das',
        plural: 'die Feuilletons',
        meaning: '報紙文化副刊版（德語獨特的哲學思辨陣地）',
        example: 'Im Feuilleton der Zeit diskutieren Philosophen über die ethischen Grenzen der Genforschung.',
        exampleTr: '在《時代週報》的文化副刊中，哲學家們深入探討基因研究的倫理邊界。',
      },
      {
        id: 'd363_v3',
        word: 'hinterfragen',
        meaning: '批判性審視、追問本質 (hinterfragt, hinterfragte, hat hinterfragt)',
        example: 'Mündige Bürger hinterfragen reißerische Schlagzeilen stets kritisch und faktenbasiert.',
        exampleTr: '具獨立思考能力的成熟公民，總是理性基於事實批判性地審視聳動的頭條。',
      },
      {
        id: 'd363_v4',
        word: 'die Berichterstattung',
        article: 'die',
        meaning: '新聞報導、採訪報導',
        example: 'Öffentlich-rechtliche Sender sind zu einer ausgewogenen Berichterstattung gesetzlich verpflichtet.',
        exampleTr: '公共廣播機構依法有義務提供客觀平衡的新聞報導。',
      },
      {
        id: 'd363_v5',
        word: 'polarisiert',
        meaning: '兩極化的、對立極端的',
        example: 'In den sozialen Medien wird der Diskurs oft künstlich polarisiert und emotionalisiert.',
        exampleTr: '在社群媒體上，公共對話往往被人為地兩極化與情緒化。',
      },
    ],
    listening: {
      title: '深度報導：為什麼德國人依然熱愛長篇嚴肅新聞',
      situation: '媒體研究所學者在文化廣播中探討德國深度報刊與數位訂閱模式的興盛原因。',
      dialogue: [
        {
          speaker: 'Journalistin',
          de: 'In Zeiten von 15-Sekunden-Videos verzeichnet die Wochenzeitung "Die Zeit" Rekordauflagen. Wie erklären Sie dieses Paradoxon?',
          zh: '在15秒短影音當道的時代，《時代週報》卻創下了發行量紀錄。您如何解釋這個悖論？',
        },
        {
          speaker: 'Forscher',
          de: 'Die Menschen haben genug von oberflächlichen Häppchen! Sie suchen nach Orientierung, fundierter Recherche und differenzierten Analysen.',
          zh: '人們已經厭倦了膚淺的快餐碎片！他們在尋求方向指引、紮實深度的調查與細緻周全的分析。',
        },
        {
          speaker: 'Journalistin',
          de: 'Glaubwürdigkeit ist also die wichtigste Währung im Journalismus?',
          zh: '所以公信力就是新聞業中最寶貴的硬通貨？',
        },
        {
          speaker: 'Forscher',
          de: 'Unbestritten. Wer die Wahrheit hinter den Schlagzeilen verstehen will, investiert gern Zeit in lange Texte.',
          zh: '無庸置疑。想弄清頭條背後真相的人，樂於將時間投入在長篇深度好文中。',
        },
      ],
      comprehensionQuestions: [
        {
          id: 'd363_lq1',
          question: 'Warum haben anspruchsvolle Qualitätsmedien wie "Die Zeit" in Deutschland so viele Leser?',
          options: [
            'Weil Leser fundierte Recherche, Differenziertheit und Orientierung suchen. (因為讀者尋求紮實調查、全面思辨與方向指引)',
            'Weil sie kostenlos am Bahnhof verschenkt werden. (因為在火車站免費贈送)',
            'Weil sie nur Witze drucken. (因為只印笑話)',
            'Weil niemand mehr ein Smartphone besitzt. (因為沒有人再用智慧型手機)',
          ],
          correctIndex: 0,
          explanation: '深度優質媒體滿足了受眾對可靠調查、深度背景與客觀中立方向的強烈需求。',
        },
      ],
    },
    speaking: {
      title: '冷靜理性思辨與引導發言技巧',
      instruction: '朗讀下列引導對話回歸事實數據與理性分析的高階句型。',
      targetSentences: [
        {
          id: 'd363_s1',
          de: 'Lassen Sie uns die emotionalen Vorbehalte beiseitelegen und die empirischen Daten analysieren.',
          zh: '讓我們拋開情緒化的成見，冷靜分析實證數據。',
          phoneticTip: '「empirischen Daten」發音沈穩有力。',
        },
        {
          id: 'd363_s2',
          de: 'Ich teile Ihre Prämisse, ziehe daraus jedoch eine grundlegend andere Schlussfolgerung.',
          zh: '我贊同您的前提假設，但從中我得出了一個截然不同的結論。',
          phoneticTip: '「Schlussfolgerung」發音清晰幹練。',
        },
      ],
      rolePlay: {
        partnerName: 'Diskussionsleiter',
        partnerRole: '公共論壇主持人',
        scenario: '在關於城市能源轉型的公眾論壇中，冷靜指出爭議的核心不在技術而在分配。',
        promptDe: 'Einige Bürger meinen, die Energiewende sei technisch gar nicht umsetzbar. Was entgegnen Sie?',
        promptZh: '一些市民認為能源轉型在技術上根本無法實現。您如何回應？',
        sampleReplies: [
          'Die technischen Lösungen sind längst erprobt und vorhanden. Die eigentliche Kernfrage liegt vielmehr in der sozial gerechten Verteilung der anfallenden Kosten.',
        ],
      },
    },
    reading: {
      title: 'Die Kunst des deutschen Feuilletons: Wo Geist auf Aktualität trifft',
      documentType: 'Medienanalyse',
      content: 'DAS FEUILLETON ALS KULTURELLER LEUCHTTURM:\n\nIn keiner anderen Zeitungslandschaft der Welt genießt das "Feuilleton" einen so hohen Stellenwert wie im deutschsprachigen Raum. Der Kulturteil einer deutschen Tageszeitung ist keine bloße Ansammlung von Rezensionen über Theaterpremieren oder Buchempfehlungen.\n\n1. DIE PHILOSOPHISCHE VERMESSUNG DER GEGENWART:\nIm Feuilleton von FAZ, SZ oder Zeit reflektieren die schärfsten Köpfe des Landes über brennende Gegenwartsfragen: Was bedeutet künstliche Intelligenz für die menschliche Würde? Wie viel Streit erträgt die offene Gesellschaft? Welche Verantwortung trägt die Wissenschaft?\n\n2. DIE FREIHEIT DER MEINUNG:\nDie Wurzel dieser ausgeprägten Debattenkultur liegt in Artikel 5 des Grundgesetzes verankert, der die Freiheit der Presse und der Kunst unantastbar schützt. Nach den Erfahrungen zweier Diktaturen ist das Misstrauen gegenüber staatlicher Zensur tief im kollektiven Bewusstsein verankert.\n\nWer lernt, deutsche Leitartikel zu lesen, trainiert den anspruchsvollen Gedankenflug.',
      translation: '作為文化燈塔的副刊：\n\n世界上沒有任何其他報業環境像德語區那樣賦予「文化副刊（Feuilleton）」如此崇高的地位。德國日報的文化版塊絕非僅僅是戲劇首演劇評或書籍推薦的堆砌。\n\n1. 當代的哲學丈量：\n在 FAZ、SZ 或《時代週報》的副刊中，全國最頂尖的頭腦共同沉思當代最急迫的命題：人工智慧對人類尊嚴意味著什麼？開放社會能承受多少爭辯？科學背負著何種責任？\n\n2. 言論自由的憲法基石：\n這種鮮明辯論文化的根基深植於《基本法》第五條，該法條將新聞自由與藝術自由定為神聖不可侵犯。經歷過兩次獨裁政權的沉痛歷史教訓後，對國家審查制度的警惕深深銘刻於全民集體意識之中。\n\n學會閱讀德語社論與副刊的人，鍛鍊的是最高境界的思想遨遊。',
      glossary: {
        'der Leuchtturm': { pos: 'der', meaning: '燈塔' },
        'der Stellenwert': { pos: 'der', meaning: '重要地位、分量' },
        'die Ansammlung': { pos: 'die', meaning: '聚集、堆積' },
        'unantastbar': { pos: 'adj', meaning: '神聖不可侵犯的' },
      },
      questions: [
        {
          id: 'd363_rq1',
          question: 'Welches Grundrecht garantiert in Deutschland die Freiheit von Presse und Kunst?',
          options: [
            'Artikel 5 des Grundgesetzes. (基本法第五條)',
            'Die Straßenverkehrsordnung. (道路交通安全條例)',
            'Das B1-Zertifikat. (B1證書)',
            'Der Mietvertrag. (租房合約)',
          ],
          correctIndex: 0,
          explanation: '德國《基本法》（憲法）第五條莊嚴保障了言論自由、新聞自由、藝術與學術研究自由。',
        },
      ],
    },
    examTip: {
      skill: 'Lesen',
      title: '週四是全德的「時代週報日」',
      content: '每逢週四，走在德國火車站或街頭書報亭，你會看到無數人拿著一份展開足足有一公尺寬的巨大報紙——這就是每週四出版的《Die Zeit》（時代週報）。買一份隨手翻開 Feuilleton 版，讀一篇關於科技與哲學的深度長文，是德語文化人最地道的精神享受！',
    },
  },

  364: {
    day: 364,
    stage: 'EXAM',
    week: 52,
    dayOfWeek: 7,
    title: "Day 364: 364 天的語言蛻變英雄之旅：從初見到獨立自主思考 (Die 364-Tage-Transformation)",
    germanTitle: "Retrospektive: 364 Tage Durchhalten - Vom ersten 'Hallo' bis zum eigenständigen Denken",
    theme: '德語英雄之路回眸 - 神經突觸重塑、認知躍遷、終身自律與第二精神原鄉的誕生',
    estimatedMinutes: 20,
    grammar: {
      title: '總結長期成長的時態融合與認知演進動詞 (Linguistische Retrospektive)',
      explanation: '在第 1 天，您學習了最簡單的打招呼與自我介紹；在第 90 天，您克服了四格與三格的恐懼；在第 180 天，完成式與情態動詞成了肌肉記憶；在第 270 天，從句的動詞置尾與被動態化作直覺反應；而在過去的數十天中，您更征服了虛擬式、名詞化、留學簽證生活與高階文化思辨。\n1. **長期跨度對比句式**：\n- **Im Vergleich zu meinen Anfängen...** (相較於我當初起步時...)\n- **Damals fiel es mir schwer..., während ich heute mühelos...** (那時我很吃力，而今天我卻能不費吹灰之力...)\n2. **複合關聯詞的昇華力量**：**nicht nur... sondern auch...** (不僅……而且……)；**kein... sondern...** (不是……而是……)。',
      ruleExample: [
        {
          de: 'Vor 364 Tagen fiel mir das Bilden einfacher Sätze schwer, heute erörtere ich komplexe Themen auf Deutsch.',
          zh: '364天前我連造出簡單的句子都很吃力，今天我已經能用德語探討複雜的議題。',
          note: '對比今昔巨大蛻變的經典時態融合表達',
        },
        {
          de: 'Das Durchhalten über ein ganzes Jahr hinweg hat mir nicht nur Deutsch beigebracht, sondern auch eiserne Disziplin geschenkt.',
          zh: '堅持整整一年不僅教會了我德語，更賦予了我鋼鐵般的自律精神。',
          note: 'nicht nur... sondern auch... 連結語言能力與意志品格的雙重昇華',
        },
      ],
    },
    vocabulary: [
      {
        id: 'd364_v1',
        word: 'die Transformation',
        article: 'die',
        plural: 'die Transformationen',
        meaning: '蛻變、深刻轉變',
        example: 'Ihre sprachliche und mentale Transformation in diesem Jahr ist schlichtweg bewundernswert.',
        exampleTr: '您在這一年中的語言與心智蛻變著實令人由衷欽佩。',
      },
      {
        id: 'd364_v2',
        word: 'die Beharrlichkeit',
        article: 'die',
        meaning: '毅力、持之以恆的堅韌',
        example: 'Mit eiserner Beharrlichkeit haben Sie 364 Tage lang Tag für Tag Deutsch gelernt.',
        exampleTr: '憑藉著鋼鐵般的堅韌毅力，您連續 364 天日復一日地刻苦學習德語。',
      },
      {
        id: 'd364_v3',
        word: 'verinnerlichen',
        meaning: '深入內化（將規則化為直覺本能）(verinnerlicht, verinnerlichte, hat verinnerlicht)',
        example: 'Die Satzstrukturen haben Sie mittlerweile so verinnerlicht, dass Sie intuitiv sprechen.',
        exampleTr: '那些句子結構您如今已經內化得如此深入，以至於能夠直覺自如地開口。',
      },
      {
        id: 'd364_v4',
        word: 'der Meilenstein',
        article: 'der',
        plural: 'die Meilensteine',
        meaning: '里程碑',
        example: 'Der heutige Tag ist der vorletzte Meilenstein dieser außergewöhnlichen Reise.',
        exampleTr: '今天正是這趟非凡旅程中倒數第二座耀眼的里程碑。',
      },
      {
        id: 'd364_v5',
        word: 'unbezahlbar',
        meaning: '無價的、珍貴無比的',
        example: 'Die gewonnene Fähigkeit zur Sprachautonomie ist ein unbezahlbarer Schatz für Ihre Zukunft.',
        exampleTr: '所獲得的語言自主能力，是您未來人生無可估量的無價珍寶。',
      },
    ],
    listening: {
      title: '旅居海外學長分享：每天30分鐘如何徹底重塑人生軌跡',
      situation: '一位已在慕尼黑西門子總部任職工程師的學長，錄製音檔與即將結業的同路人真情交流。',
      dialogue: [
        {
          speaker: 'Alumnus',
          de: 'Herzlichen Glückwunsch an jeden von Ihnen an Tag 364! Wissen Sie, was das Verrückte ist?',
          zh: '在第 364 天，衷心祝賀你們每一個人！你們知道最不可思議的事情是什麼嗎？',
        },
        {
          speaker: 'Alumnus',
          de: 'Vor vier Jahren saß ich genau da, wo ihr jetzt sitzt. Ich habe jeden Tag 30 Minuten die Lektionen durchgezogen.',
          zh: '四年前，我就坐在你們現在所處的位置上。我每天雷打不動地完成30分鐘的課程。',
        },
        {
          speaker: 'Alumnus',
          de: 'Heute führe ich Fachgespräche mit deutschen Vorständen. Ihr habt bewiesen, dass ihr alles im Leben erreichen könnt!',
          zh: '今天，我正與德國企業董事會進行專業技術對話。你們已經證明了，你們能征服人生中的任何挑戰！',
        },
      ],
      comprehensionQuestions: [
        {
          id: 'd364_lq1',
          question: 'Was ist laut dem Erfahrungsbericht die eigentliche Superkraft für den Lebenserfolg?',
          options: [
            'Tägliche Disziplin und kontinuierliches Durchhalten über ein ganzes Jahr. (整整一年每日的自律與持續不懈的堅持)',
            'Reines Glück bei der Prüfung. (考試時的純粹運氣)',
            'Nur eine einzige Woche lang 24 Stunden durchlernen. (只在一個禮拜內連續狂學24小時)',
            'Immer nur Wörter auf Englisch nachschlagen. (永遠只用英文查單字)',
          ],
          correctIndex: 0,
          explanation: '真正的超級力量是整整 364 天從未間斷的每日自律累積（Tägliche Kontinuität）。',
        },
      ],
    },
    speaking: {
      title: '回望與分享自己一年英雄之旅的感言',
      instruction: '朗讀下列發自肺腑的學習心路總結，語調真摯自豪。',
      targetSentences: [
        {
          id: 'd364_s1',
          de: 'Wenn ich auf die vergangenen 364 Tage zurückblicke, erfüllt mich das mit tiefem Stolz und Dankbarkeit.',
          zh: '當我回望過去這364天時，心中充滿了無比的自豪與深深的感激。',
          phoneticTip: '「tiefem Stolz」發音飽滿自信。',
        },
        {
          id: 'd364_s2',
          de: 'Der entscheidende Durchbruch gelang mir, als ich aufhörte zu übersetzen und anfing, auf Deutsch zu denken.',
          zh: '最關鍵的突破，發生在我停止在腦海中逐字翻譯、開始真正用德語思考的那一刻。',
          phoneticTip: '「anfing, auf Deutsch zu denken」語調堅定明朗。',
        },
      ],
      rolePlay: {
        partnerName: 'Interviewer',
        partnerRole: '教研團隊結業專訪記者',
        scenario: '在結業前夕接受專訪，分享從完全零基礎到如今能流利表達的內心感悟。',
        promptDe: 'Was war der Moment, in dem Sie gemerkt haben: "Ich kann wirklich Deutsch sprechen"?',
        promptZh: '是在哪一個瞬間，您真正意識到：「我真的會說德語了」？',
        sampleReplies: [
          'Es war der Moment, als ich ohne vorheriges Zurechtlegen im Kopf spontan und flüssig antworten konnte. Da wusste ich: Die Mühe hat sich zu 100 Prozent gelohnt!',
        ],
      },
    },
    reading: {
      title: 'Die Neuroplastizität der Meisterschaft: Wie 364 Tage Ihr Gehirn veränderten',
      documentType: 'Neurowissenschaft',
      content: 'DIE NEUROPLASTIZITÄT DES SPRACHENERWERBS:\n\nDie moderne Hirnforschung beweist: Das Erlernen einer so strukturierten Sprache wie Deutsch baut Ihr Gehirn physisch um.\n\n1. DIE ERSTEN TAGE (AKUSTISCHES CHAOS):\nVor einem Jahr nahmen Ihre Synapsen deutsche Laute wie "ch", das gerollte oder geriebene "r" und die Umlaute "ä, ö, ü" als unstrukturierte akustische Störungen wahr. Das Gehirn musste Höchstleistung vollbringen, um Wortgrenzen zu erkennen.\n\n2. DIE MITTE DER REISE (NEURONALE BRÜCKEN):\nMit jedem der 364 Tage wuchs die Myelinschicht um die neuronalen Bahnen Ihres Sprachzentrums (Broca- und Wernicke-Areal). Die Satzklammer – Verb auf Position 2, Partizip am Ende – wandelte sich von einer anstrengenden Rechenaufgabe zur automatisierten Muskelreaktion.\n\n3. HEUTE (SPRACHAUTONOMIE):\nHeute verarbeitet Ihr Gehirn deutsche Sätze in Millisekunden. Sie haben nicht nur Vokabeln gelernt; Sie haben eine zweite Denksoftware installiert, die Ihnen neue Perspektiven auf die Wirklichkeit eröffnet.\n\nMorgen feiern wir den 365. Tag – das große Finale!',
      translation: '大腦神經可塑性與精熟境界：\n\n現代大腦神經科學證明：學習一門像德語這樣高度結構化的語言，從字面上物理重塑了您的大腦迴路。\n\n1. 最初的起步（聽覺上的混亂）：\n一年前，您大腦中的突觸還把德語的 ch、小舌擦音 r 以及變音 ä, ö, ü 視為雜亂無章的聽覺干擾。大腦必須付出極限努力才能辨識出單詞的邊界。\n\n2. 旅途的中段（神經橋樑的建立）：\n隨著這 364 天的每一天推進，圍繞您語言中樞（布羅卡區與韋尼克區）神經纖維的髓鞘日益增厚。框形結構——動詞在第二位，分詞在句尾——從一項吃力的數學計算題，轉化成了自動化的肌肉本能反射。\n\n3. 今天（語言自主的降臨）：\n今天，您的大腦能在數毫秒內解析德語長句。您所學會的絕不僅僅是單字；您為自己的靈魂安裝了第二套思考軟體，為您開啟了凝視世界現實的全新視角。\n\n明天，我們將共同迎來第 365 天——大結局盛典！',
      glossary: {
        'die Neuroplastizität': { pos: 'die', meaning: '神經可塑性（大腦重構能力）' },
        'das Sprachzentrum': { pos: 'das', meaning: '大腦語言中樞' },
        'die Myelinschicht': { pos: 'die', meaning: '神經髓鞘（加速信號傳導）' },
        'die Denksoftware': { pos: 'die', meaning: '思維軟體、思考操作系統' },
      },
      questions: [
        {
          id: 'd364_rq1',
          question: 'Welche biologische Veränderung bewirkt kontinuierliches Sprachenlernen im Gehirn?',
          options: [
            'Es stärkt und automatisiert neuronale Bahnen im Sprachzentrum durch Myelinisierung. (透過髓鞘化加固並自動化語言中樞的神經迴路)',
            'Es verringert die Gehirnmasse. (它縮減了大腦容量)',
            'Es löscht die eigene Muttersprache vollständig aus. (它徹底刪除了母語)',
            'Es hat keinerlei wissenschaftlich messbare Wirkung. (沒有任何可測量的科學效果)',
          ],
          correctIndex: 0,
          explanation: '364天每天不間斷的重複，物理加厚了語言神經迴路的傳導髓鞘，使德語語音與文法反應達到本能自動化。',
        },
      ],
    },
    examTip: {
      skill: 'Reflexion',
      title: '歌德的名言印證了你',
      content: '約翰·沃爾夫岡·馮·歌德曾寫道："Wer fremde Sprachen nicht kennt, weiß nichts von seiner eigenen."（不諳外語者，亦對自身母語一無所知。）透過整整 364 天的德語洗禮，你不僅精通了德語，更深刻理解了思維與語言的本質！',
    },
  },

  365: {
    day: 365,
    stage: 'EXAM',
    week: 52,
    dayOfWeek: 8,
    title: 'Day 365: 365 天大結局終章盛典：全勤完走、證書頒授與通往世界的無限可能 (Großes Finale: Tag 365)',
    germanTitle: 'Das Große Finale: 365 Tage Goethe-Deutsch Meisterkurs - Zertifikat & Zukunft',
    theme: '365天史詩級完走結業典禮 - 終身學習者宣言、給未來的自己一封信與通往歐洲的無限大門',
    estimatedMinutes: 20,
    grammar: {
      title: '終身自律自學者宣言：時態與語氣的最高綜效 (Das Manifest des Meisters)',
      explanation: '恭喜您！今天，是整整第 365 天！\n您完成了全球極少數人能憑堅定意志達成的偉大壯舉：整整一年、天天不輟、全景覆蓋歌德 A1、A2、B1 乃至 B2 銜接的全部德語知識體系！在最後這一堂歷史性的課堂中，我們將融合所有時態（過去、現在、未來）與語氣（直陳式、命令式、虛擬式），譜寫出屬於您的結業宣言：\n1. **榮耀回眸（Präteritum & Perfekt）**：Ich habe den Gipfel erreicht. Ich habe niemals aufgegeben. (我抵達了巔峰。我從未放棄。)\n2. **立足當下（Präsens）**：Heute beherrsche ich die deutsche Sprache und blicke voller Zuversicht in die Welt.\n3. **展望宏圖（Futur I & II）**：Ich werde Deutsch weiterleben. Ich werde meine Träume verwirklicht haben.\n4. **莊嚴祝願（Konjunktiv I）**：Möge dieses Wissen Ihnen alle Türen in Europa öffnen!',
      ruleExample: [
        {
          de: 'Wir haben 365 Tage lang Tag für Tag gekämpft, gelernt und gesiegt.',
          zh: '我們整整 365 天，日復一日地奮戰、學習並收穫了勝利。',
          note: '三位一體的強勁動詞排比：gekämpft, gelernt und gesiegt',
        },
        {
          de: 'Möge dieses Wissen Ihnen alle Türen in Deutschland, Österreich und der Schweiz öffnen!',
          zh: '願這份深厚學養為您叩開通往德國、奧地利與瑞士的所有夢想大門！',
          note: '虛擬式一式（Möge... öffnen）表達最崇高莊嚴的祝願',
        },
      ],
    },
    vocabulary: [
      {
        id: 'd365_v1',
        word: 'das Zertifikat',
        article: 'das',
        plural: 'die Zertifikate',
        meaning: '證書、榮譽認證憑據',
        example: 'Sie haben dieses Zertifikat mit harter Arbeit, Hingabe und Disziplin redlich verdient.',
        exampleTr: '您憑藉著辛勤的汗水、全情投入與自律，堂堂正正贏得了這份榮耀的證書。',
      },
      {
        id: 'd365_v2',
        word: 'die Abschlussfeier',
        article: 'die',
        plural: 'die Abschlussfeiern',
        meaning: '結業典禮、畢業盛典',
        example: 'Heute feiern wir die feierliche Abschlussfeier von Tag 365!',
        exampleTr: '今天我們共同隆重慶祝第 365 天的盛大結業典禮！',
      },
      {
        id: 'd365_v3',
        word: 'lebenslang',
        meaning: '終生的、一輩子的',
        example: 'Sprachenlernen ist kein zeitlich befristetes Projekt, sondern eine lebenslange Bereicherung.',
        exampleTr: '學習語言不是一個有期限的專案，而是一場相伴一生的精神豐盛盛宴。',
      },
      {
        id: 'd365_v4',
        word: 'überwinden',
        meaning: '跨越、征服（險阻難關）(überwindet, überwand, hat überwunden)',
        example: 'Sie haben alle grammatikalischen Hürden und Zweifel mit Bravour überwunden.',
        exampleTr: '您以無比出色的姿態跨越了所有文法險阻與內心的猶豫懷疑。',
      },
      {
        id: 'd365_v5',
        word: 'unbegrenzt',
        meaning: '無限的、廣闊無垠的',
        example: 'Mit der deutschen Sprache stehen Ihnen nun unbegrenzte Möglichkeiten in der Welt offen.',
        exampleTr: '手握德語這把金鑰匙，在全世界展現在您眼前的將是無限廣闊的可能性。',
      },
    ],
    listening: {
      title: '大結局結業讚歌：給五年後正在德語區生活的自己一封信',
      situation: '一段充滿儀式感與溫馨力量的結語廣播，引導學員給 5 年後正在德語區生活的自己寫封信。',
      dialogue: [
        {
          speaker: 'Sprecherin',
          de: 'Schließen Sie für einen Moment die Augen. Stellen Sie sich vor: In fünf Jahren spazieren Sie an der Spree in Berlin, trinken einen Melange in Wien oder wandern in den Schweizer Alpen.',
          zh: '請閉上眼睛片刻。想像一下：五年後的某一天，您正漫步在柏林的施普雷河畔，在維也納喝著米朗琪咖啡，或是漫遊在瑞士阿爾卑斯山間。',
        },
        {
          speaker: 'Sprecherin',
          de: 'Sie unterhalten sich mühelos mit Kollegen über globale Projekte, lachen über deutsche Witze und lesen die Zeitung ohne Wörterbuch.',
          zh: '您毫不費力地與同事們探討跨國專案，會心笑看德語笑話，無需字典就能自如翻閱報刊。',
        },
        {
          speaker: 'Sprecherin',
          de: 'Und in jenem Moment werden Sie an Tag 365 zurückdenken und lächeln: "Damals hat alles begonnen."',
          zh: '而在那一瞬間，您會回想起第 365 天的這個日子，會心一笑：「一切就是從那時正式起航的。」',
        },
      ],
      comprehensionQuestions: [
        {
          id: 'd365_lq1',
          question: 'Was ist die zentrale Botschaft der Abschluss-Hymne von Tag 365?',
          options: [
            'Dass die 365 Tage der disziplinierte Grundstein für ein erfülltes, freies Leben in Europa und der Welt sind. (這365天是未來在歐洲與世界自由充實生活的堅實基石)',
            'Dass man Deutschlernen ab morgen komplett vergessen sollte. (明天開始該把德語忘光)',
            'Dass Berlin die einzige Stadt der Welt ist. (柏林是世界上唯一的城市)',
            'Dass man nie wieder Kaffee trinken darf. (再也不准喝咖啡)',
          ],
          correctIndex: 0,
          explanation: '365 天的全勤完走，象徵著手握語言自主權、在德語中開展璀璨新生命的正式起跑線！',
        },
      ],
    },
    speaking: {
      title: '365 天全勤結業榮耀演說詞',
      instruction: '朗讀下列終局典禮致辭，字句鏗鏘，激昂豪邁！',
      targetSentences: [
        {
          id: 'd365_s1',
          de: 'Heute ist der Tag, an dem wir die reiche Ernte unserer 365-tägigen Reise voller Stolz einbringen.',
          zh: '今天，正是我們滿懷自豪收割這趟長達 365 天漫長旅程豐碩果實的榮耀時刻。',
          phoneticTip: '「die reiche Ernte... einbringen」充滿史詩般的成就感。',
        },
        {
          id: 'd365_s2',
          de: 'Auf zu neuen Ufern! Die deutschsprachige Welt steht uns nun mit offenen Armen gegenüber!',
          zh: '啟航奔向全新的彼岸吧！德語世界此刻正敞開雙臂熱烈擁抱著我們！',
          phoneticTip: '「Auf zu neuen Ufern!」為德意志向新世界揚帆啟航的最高號角。',
        },
      ],
      rolePlay: {
        partnerName: 'Chefdirektor des Goethe-Instituts',
        partnerRole: '歌德學院全球總裁',
        scenario: '在結業盛典金色大廳中，總裁向你親手頒授 365 天全勤大師榮譽勳章。',
        promptDe: 'Im Namen des gesamten Lehrkörpers überreiche ich Ihnen hiermit die Ehrenurkunde für das Meistern von 365 Tagen kontinuierlichem Deutschlernen! Wie lautet Ihr persönliches Fazit?',
        promptZh: '我代表全體教研團隊，在此鄭重授予您征服 365 天連續德語學習的榮譽獎狀！您的個人結語是什麼？',
        sampleReplies: [
          'Es war eine fordernde, aber unendlich lohnende Reise. Ich kam als Anfänger und gehe heute als autonomer Sprecher. Danke für alles – auf Wiedersehen in Berlin, Wien oder Zürich!',
        ],
      },
    },
    reading: {
      title: 'Das Manifest der 365 Tage: Sie haben Geschichte geschrieben!',
      documentType: 'Abschlussmanifest',
      content: 'DAS MANIFEST DER 365 TAGE:\n\nHERZLICHEN GLÜCKWUNSCH! Vor Ihnen liegt das vollständige, 365 Tage umfassende Werk des Goethe-Deutsch-365-Curriculums. Sie haben vollbracht, was nur die wenigsten Menschen schaffen: Ein ganzes Jahr tägliche Disziplin ohne einen einzigen Tag Unterbrechung!\n\n1. DER ÜBERWUNDENE BERG:\nVon den ersten unsicheren Umlauten bis zur hochkomplexen Textkohärenz im Feuilleton; von der Begrüßung am Bahnhof bis zum Arbeitsvertrag, der Ausländerbehörde und den Feinheiten des deutschen Mietrechts: Es gibt keinen Bereich des deutschsprachigen Alltags, auf den Sie nicht bestens vorbereitet sind.\n\n2. DIE ZWEITE HEIMAT:\nSprache ist kein Fach, das man nach einer Prüfung abhakt. Sprache ist eine Brücke zu den Seelen anderer Menschen. Sie haben sich eine zweite geistige Heimat geschaffen.\n\n3. DER NEUE ANFANG:\nDies ist nicht das Ende Ihrer Reise. Es ist der glanzvolle Beginn Ihres zweiten Lebens auf Deutsch. Tragen Sie dieses Wissen mit Neugier, Freude und Würde in die Welt hinaus!\n\nAuf Wiedersehen und alles Gute auf Ihrem weiteren Weg!',
      translation: '365 天結業宣言：您書寫了屬於自己的歷史！\n\n衷心祝賀！在您眼前的正是這部涵蓋整整 365 天的歌德德語完整宏篇巨著。您達成了極少數人能完成的壯舉：整整一年每天自律，一天都未曾中斷！\n\n1. 征服的巍峨高山：\n從最初怯生生的變音，到文化副刊裡高深複雜的篇章連貫；從火車站的第一句問候，到工作合約、外管局居留證以及德國租房法規的細緻入微：德語區日常生活的方方面面，沒有任何一個領域是您未曾做好充分準備的。\n\n2. 第二個精神家園：\n語言絕不是考完試就可以打勾勾丟在一旁的學科。語言是通往他人靈魂深處的心靈橋樑。您已經為自己打造了第二個精神原鄉。\n\n3. 璀璨的嶄新起點：\n這絕非旅程的終點。這是您在德語中開啟第二人生的璀璨起跑線。請帶著好奇、喜悅與尊嚴，將這份學養帶向更廣闊的全世界！\n\n再會了，祝願您在未來的人生大道上一帆風順、前程似錦！',
      glossary: {
        'vollbringen': { pos: 'verb', meaning: '達成、成就（偉大壯舉）' },
        'die Unterbrechung': { pos: 'die', meaning: '中斷、間斷' },
        'das Epos': { pos: 'das', meaning: '史詩、傳奇篇章' },
        'die Würde': { pos: 'die', meaning: '尊嚴、莊重' },
      },
      questions: [
        {
          id: 'd365_rq1',
          question: 'Was symbolisiert der Abschluss von Tag 365 laut dem Manifest?',
          options: [
            'Den glanzvollen Beginn eines neuen Lebensabschnitts auf Deutsch mit echter Sprachautonomie. (手握真正語言自主權、在德語中開啟新生命階段的璀璨起點)',
            'Dass man nie wieder ein deutsches Wort hören darf. (再也不准聽德語單字)',
            'Dass alle Bücher verbrannt werden müssen. (所有書本必須燒掉)',
            'Dass das Lernen ab heute verboten ist. (從今天起禁止學習)',
          ],
          correctIndex: 0,
          explanation: '結業不是終點，而是手握語言自主權、在德語世界中自由翱翔的偉大起點！',
        },
      ],
    },
    examTip: {
      skill: 'Finale',
      title: 'Ode an die Freude (四海之內皆兄弟)',
      content: '歐盟盟歌源自貝多芬第九交響曲中席勒的詩篇《快樂頌》："Alle Menschen werden Brüder, wo dein sanfter Flügel weilt." 語言是消除偏見與藩籬的最美橋樑。恭喜你，365天全勤完走的大師，全世界此刻正透過德語向你敞開大門！',
    },
  },
};
