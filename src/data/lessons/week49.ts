import type { DayLesson } from '../../types/curriculum';

export const week49Lessons: Record<number, DayLesson> = {
  337: {
    day: 337,
    stage: 'EXAM',
    week: 49,
    dayOfWeek: 1,
    title: 'Day 337: B2 銜接語法一：分詞作形容詞定語與擴展定語結構',
    germanTitle: 'Brückenkurs B2: Partizip I und II als erweiterte Adjektiv-Attribute',
    theme: '德語高級讀寫階梯 - 第一分詞與第二分詞作為修飾名詞之定語結構',
    estimatedMinutes: 20,
    grammar: {
      title: '分詞作形容詞 (Partizip als Adjektiv) 的主被動與時態規律',
      explanation: '進入 B2 階梯，德語書面語（報刊、學術、官方公文）極少使用冗長的關係子句，而是大量使用「分詞定語 (Partizipialattribute)」！\n1. 第一分詞 (Partizip I: Infinitiv + d)：表示主動、正在進行的動作（„der lachende Junge“ = der Junge, der lacht；„die schnell steigenden Preise“ = die Preise, die schnell steigen）。\n2. 第二分詞 (Partizip II: ge-...-(e)t / ge-...-en)：表示被動或已完成的狀態（„die renovierte Wohnung“ = die Wohnung, die renoviert wurde；„der abgefahrene Zug“ = der Zug, der abgefahren ist）。\n3. 擴展定語：分詞前可帶有補足語（„die [von der Regierung beschlossenen] Maßnahmen“）。注意：分詞字尾必須依照普通形容詞字尾變格規則變化！',
      ruleExample: [
        {
          de: 'Die rasant zunehmende Digitalisierung verändert unsere Arbeitswelt grundlegend.',
          zh: '迅速增加的數位化正在從根本上改變我們的工作世界。（Partizip I 主動進行）',
          note: 'zunehmend + e (形容詞弱變化)',
        },
        {
          de: 'Alle im Vorfeld angemeldeten Teilnehmer erhalten eine offizielle Bestätigung.',
          zh: '所有預先報名的學員都將收到一份正式證明。（Partizip II 被動完成擴展定語）',
          note: 'angemeldet + en (複數第一格)',
        },
      ],
    },
    vocabulary: [
      {
        id: 'd337_v1',
        word: 'das Partizip',
        article: 'das',
        plural: 'die Partizipien',
        meaning: '分詞（第一分詞 Partizip I / 第二分詞 Partizip II）',
        example: 'Partizipien können wie ganz normale Adjektive dekliniert werden.',
        exampleTr: '分詞可以像普通形容詞一樣進行變格。',
      },
      {
        id: 'd337_v2',
        word: 'das Attribut',
        article: 'das',
        plural: 'die Attribute',
        meaning: '定語、修飾成分',
        example: 'Ein erweitertes Attribut steht zwischen dem Artikel und dem Nomen.',
        exampleTr: '擴展定語位於冠詞與名詞之間。',
      },
      {
        id: 'd337_v3',
        word: 'zunehmend',
        meaning: '不斷增加的、漸增的 (Partizip I)',
        example: 'Die zunehmende Umweltverschmutzung bereitet vielen Bürgern Sorgen.',
        exampleTr: '日益加劇的環境污染令許多市民感到憂慮。',
      },
      {
        id: 'd337_v4',
        word: 'abgeschlossen',
        meaning: '已完成的、封閉的 (Partizip II)',
        example: 'Nach dem erfolgreich abgeschlossenen Studium begann sie ein Traineeprogramm.',
        exampleTr: '在順利完成學業後，她開始了一項儲備幹部計畫。',
      },
      {
        id: 'd337_v5',
        word: 'grundlegend',
        meaning: '根本的、基礎性的 (形容詞)',
        example: 'Die Reform hat das Bildungssystem grundlegend modernisiert.',
        exampleTr: '這項改革從根本上將教育體制現代化了。',
      },
    ],
    listening: {
      title: '高級德語工作坊：如何將關係子句改寫為精煉的分詞結構',
      situation: '德語教授向準備考取 B2 的學員示範如何提升書面語的學術格調。',
      dialogue: [
        {
          speaker: 'Professorin',
          de: 'Hören Sie diesen Satz auf B1-Niveau: "Der Zug, der um 8 Uhr abfährt, hat heute 15 Minuten Verspätung." Wie formulieren wir das auf B2 eleganter?',
          zh: '大家聽聽這句 B1 水平的句子：「8點出發的火車今天誤點15分鐘。」我們在 B2 如何表述得更優雅？',
        },
        {
          speaker: 'Student',
          de: 'Man ersetzt den Relativsatz durch ein Partizip I: "Der um 8 Uhr abfahrende Zug hat heute 15 Minuten Verspätung!"',
          zh: '可以用第一分詞替換關係子句：「Der um 8 Uhr abfahrende Zug hat heute 15 Minuten Verspätung!」',
        },
        {
          speaker: 'Professorin',
          de: 'Hervorragend! Das spart ein Komma, strafft den Satzbau und klingt sofort professioneller und akademischer.',
          zh: '太出色了！這省去了一個逗號，緊湊了句子架構，聽起來立刻更加專業且具學術氣質。',
        },
      ],
      comprehensionQuestions: [
        {
          id: 'd337_lq1',
          question: 'Warum verwendet man in der gehobenen deutschen Schriftsprache gerne Partizipialattribute?',
          options: [
            'Weil sie Sätze straffen und Texte präziser und professioneller wirken lassen. (因為它們使句子緊湊，讓文本顯得更精確專業)',
            'Weil Relativsätze auf B2 verboten sind. (因為關係子句在 B2 被禁止)',
            'Weil man dann keine Nomen mehr braucht. (因為那樣就不需要名詞了)',
            'Weil es weniger Vokabeln erfordert. (因為所需的單字更少)',
          ],
          correctIndex: 0,
          explanation: '分詞定語能濃縮資訊，避免過多子句嵌套，是德語書面語從中級邁向高級的核心標誌。',
        },
      ],
    },
    speaking: {
      title: '分詞定語發音與字尾變格口說跟讀',
      instruction: '朗讀下列高級分詞句型，注意冠詞、分詞與名詞的一氣呵成感。',
      targetSentences: [
        {
          id: 'd337_s1',
          de: 'Die im Labor entwickelten Impfstoffe wurden weltweit erfolgreich eingesetzt.',
          zh: '在實驗室中研發出的疫苗在全球範圍內被成功投入使用。',
          phoneticTip: '「im Labor entwickelten」連貫平滑。',
        },
        {
          id: 'd337_s2',
          de: 'Der seit Jahren anhaltende Trend zur Urbanisierung stellt Städte vor große Herausforderungen.',
          zh: '持續數年的城市化趨勢使各大城市面臨著巨大挑戰。',
          phoneticTip: '「anhaltende」重音在 an-，後綴 -de 輕柔。',
        },
      ],
      rolePlay: {
        partnerName: 'Dozentin',
        partnerRole: '德語導師',
        scenario: '請口頭將句子「Die Probleme, die ständig wachsen (不斷增長的問題)」改寫為分詞定語形式。',
        promptDe: 'Können Sie den Ausdruck mit einem Partizip I umformulieren?',
        promptZh: '您能用第一分詞將這個表述重新改寫嗎？',
        sampleReplies: [
          'Ja, das heißt: „die ständig wachsenden Probleme“. Das Partizip I „wachsend“ drückt den laufenden Prozess aus und bekommt die Endung „-en“.',
        ],
      },
    },
    reading: {
      title: '高階社論精讀：氣候變遷下日益加劇的挑戰 (Die wachsenden Herausforderungen)',
      documentType: 'Leitartikel',
      content: 'TRANSFORMATION DER WIRTSCHAFT: EINE ZUKUNFTSAUFGABE\n\nDie sich drastisch verändernden Umweltbedingungen zwingen Industrie und Gesellschaft zu einem beispiellosen Umdenken. Die weltweit verzeichneten Temperaturrekorde der letzten Jahre sind ein alarmierendes Signal:\n\n1. DIE ROLLE DER FORSCHUNG:\nDie an renommierten Universitäten durchgeführten Studien belegen eindeutig den menschlichen Einfluss auf die Erderwärmung. Es bedarf sofortiger, von allen Staaten getragener Maßnahmen.\n\n2. DIE BETROFFENEN SEKTOREN:\nBesonders die stark auf fossile Energieträger angewiesenen Industriezweige stehen vor einer tiefgreifenden Transformation. Die zu bewältigenden Aufgaben erfordern mutige Investitionen in grüne Spitzentechnologien.\n\n3. DER AUSBLICK:\nNur eine konsequent verfolgte Nachhaltigkeitsstrategie kann den kommenden Generationen einen lebenswerten Planeten sichern.',
      translation: '經濟轉型：一項面向未來的重大任務\n\n急劇變化的環境條件正迫使工業與社會進行空前的觀念轉變。近年來全球所記錄的高溫紀錄是一個令人警醒的信號：\n\n1. 研究的角色：\n在知名大學所進行的各項研究明確證實了人類對全球暖化的影響。這需要所有國家共同承擔的立即性措施。\n\n2. 受影響的部門：\n特別是高度依賴化石能源的工業部門正處於一場深刻轉型的關口。亟待克服的任務需要在綠色尖端科技上進行大膽投資。\n\n3. 前瞻：\n唯有貫徹到底的永續發展策略，才能為未來世代確保一個值得居住的地球。',
      glossary: {
        beispiellos: { pos: 'adj', meaning: '史無前例的、空前的' },
        alarmierend: { pos: 'adj', meaning: '令人警惕的、驚人的 (Partizip I)' },
        tiefgreifend: { pos: 'adj', meaning: '深遠的、深刻的 (Partizip I)' },
        angewiesen: { pos: 'adj', meaning: '依賴於…的 (angewiesen auf + Akk)' },
      },
      questions: [
        {
          id: 'd337_rq1',
          question: 'Was belegen die an renommierten Universitäten durchgeführten Studien?',
          options: [
            'Den menschlichen Einfluss auf die Erderwärmung. (人類對全球暖化的影響)',
            'Dass Universitäten geschlossen werden müssen. (大學必須被關閉)',
            'Dass das Wetter immer kälter wird. (天氣變得越來越冷)',
            'Dass keine Investitionen nötig sind. (不需要任何投資)',
          ],
          correctIndex: 0,
          explanation: '文中第一段指明「Die an renommierten Universitäten durchgeführten Studien belegen eindeutig den menschlichen Einfluss...」。',
        },
      ],
    },
    examTip: {
      skill: 'B2-Brücke',
      title: '分詞定語兩秒判定法',
      content: '看到名詞前面有奇怪的動詞字尾：若帶 -d-（如 wachsend-），代表主動正在發生（~ing）；若是 ge-...-t/-en（如 renoviert-），代表被動已完成（~ed）。掌握此規律，高階德語報刊一秒讀懂！',
    },
  },

  338: {
    day: 338,
    stage: 'EXAM',
    week: 49,
    dayOfWeek: 2,
    title: 'Day 338: B2 銜接語法二：帶 zu 的分詞結構 (Gerundiv)',
    germanTitle: 'Brückenkurs B2: Das Gerundiv (zu + Partizip I als passivische Notwendigkeit)',
    theme: '德語高級讀寫階梯 - 帶 zu 的現在分詞結構表「必須/可以被完成的事物」',
    estimatedMinutes: 20,
    grammar: {
      title: 'Gerundiv 公式：zu + Partizip I + Adjektivendung = 被動義務/可能性',
      explanation: '德語語法中最精妙的緊縮結構之一便是【Gerundiv】（動名詞分詞/被動分詞定語）。\n公式：【zu + 動詞原形 + d + 形容詞字尾 + 名詞】！\n意義：它完全等同於「sein + zu + Infinitiv」或「ein Problem, das gelöst werden muss/kann」！\n例如：\n- „das zu lösende Problem“ = das Problem, das gelöst werden muss (必須被解決的問題)\n- „die zu beachtenden Vorschriften“ = die Vorschriften, die beachtet werden müssen (必須被遵守的法規)\n- „ein kaum zu ertragender Lärm“ = ein Lärm, der kaum ertragen werden kann (幾乎無法被忍受的噪音)。\n注意：只有及物動詞（可接直接受格 Akkusativ 的動詞）才能構成 Gerundiv！',
      ruleExample: [
        {
          de: 'Die zu treffenden Entscheidungen dulden keinen Aufschub mehr.',
          zh: '亟待做出的各項決定再也容不得任何拖延。（= Entscheidungen, die getroffen werden müssen）',
          note: 'zu treffend + en (形容詞弱變化複數)',
        },
        {
          de: 'Hier finden Sie eine Liste aller einzureichenden Dokumente.',
          zh: '在此您將找到所有必須提交之文件的清單。（可分離動詞 zu 插在中間：ein-zu-reichen-d-en）',
          note: '分離動詞的 zu 夾在前綴與字根之間',
        },
      ],
    },
    vocabulary: [
      {
        id: 'd338_v1',
        word: 'das Gerundiv',
        article: 'das',
        plural: 'die Gerundive',
        meaning: '動名詞分詞、帶 zu 的被動分詞定語',
        example: 'Das Gerundiv drückt stets eine Notwendigkeit oder Möglichkeit im Passiv aus.',
        exampleTr: 'Gerundiv 始終在被動語態中表達一項必要性或可能性。',
      },
      {
        id: 'd338_v2',
        word: 'die Notwendigkeit',
        article: 'die',
        plural: 'die Notwendigkeiten',
        meaning: '必要性、必然性',
        example: 'Aus ökologischer Notwendigkeit müssen wir den Energieverbrauch drosseln.',
        exampleTr: '出於生態必要性，我們必須縮減能源消耗。',
      },
      {
        id: 'd338_v3',
        word: 'einreichen',
        meaning: '遞交、呈報（文件、申請）(reicht ein, reichte ein, hat eingereicht)',
        example: 'Alle einzureichenden Anträge müssen bis Freitag vorliegen.',
        exampleTr: '所有必須呈報的申請表格必須在週五前備齊。',
      },
      {
        id: 'd338_v4',
        word: 'der Aufschub',
        article: 'der',
        meaning: '拖延、延緩',
        example: 'Die Klimakrise duldet keinen weiteren Aufschub.',
        exampleTr: '氣候危機容不得任何進一步的拖延。',
      },
      {
        id: 'd338_v5',
        word: 'dulden',
        meaning: '容忍、容許 (duldet, duldete, hat geduldet)',
        example: 'In Sicherheitsfragen dürfen wir keine Nachlässigkeit dulden.',
        exampleTr: '在安全問題上我們絕不允許任何疏忽大意。',
      },
    ],
    listening: {
      title: '大學註冊處對話：入學必須提交的文件清單',
      situation: '國際事務處辦事員正在向準大學生交代必須繳交的各項公證文件。',
      dialogue: [
        {
          speaker: 'Sachbearbeiterin',
          de: 'Guten Tag, Herr Zhang. Hier ist das Merkblatt mit den für die Immatrikulation zu erbringenden Nachweisen.',
          zh: '日安，張先生。這是入學註冊時「必須出示之證明（zu erbringenden Nachweise）」的說明清單。',
        },
        {
          speaker: 'Student',
          de: 'Vielen Dank. Verstehe ich richtig: Das sind alle Dokumente, die ich unbedingt vorlegen muss?',
          zh: '非常感謝。我的理解正確嗎：這些是我無論如何必須出示的所有文件？',
        },
        {
          speaker: 'Sachbearbeiterin',
          de: 'Ganz genau! Insbesondere die beglaubigte Kopie des B1-Zertifikats und der Nachweis der Krankenversicherung sind unverzüglich einzureichen.',
          zh: '完全正確！特別是 B1 證書的公證影本以及醫療保險證明，必須立即呈報繳交。',
        },
      ],
      comprehensionQuestions: [
        {
          id: 'd338_lq1',
          question: 'Was bedeutet die Formulierung "die zu erbringenden Nachweise"?',
          options: [
            'Die Nachweise, die erbracht werden müssen. (必須被出示提交的證明文件)',
            'Beweise, die man wegwerfen darf. (可以扔掉的證據)',
            'Zeugnisse, die bereits ungültig sind. (已經失效的證書)',
            'Dokumente, die man erst in 10 Jahren braucht. (十年後才需要的文件)',
          ],
          correctIndex: 0,
          explanation: 'Gerundiv 結構「die zu erbringenden Nachweise」意思正是「die Nachweise, die erbracht werden müssen」。',
        },
      ],
    },
    speaking: {
      title: 'Gerundiv 分離動詞前綴發音口說跟讀',
      instruction: '朗讀下列帶 zu 的分詞句型，注意分離動詞中 zu 的弱化發音。',
      targetSentences: [
        {
          id: 'd338_s1',
          de: 'Das ist eine nicht zu unterschätzende Gefahr für die Wirtschaft.',
          zh: '這對經濟而言是一項不可低估的危險。（= Gefahr, die nicht unterschätzt werden darf）',
          phoneticTip: '「nicht zu unterschätzende」發音緊湊，重音在 -schätzt-。',
        },
        {
          id: 'd338_s2',
          de: 'Alle auszufüllenden Formulare stehen online als PDF zur Verfügung.',
          zh: '所有必須填寫的表格均可在線上作為 PDF 供下載使用。',
          phoneticTip: '「aus-zu-füllenden」注意前綴 aus 讀響亮，zu 輕讀。',
        },
      ],
      rolePlay: {
        partnerName: 'Dozent',
        partnerRole: '語法老師',
        scenario: '請口頭將句子「ein Text, der übersetzt werden muss」轉換為 Gerundiv 結構。',
        promptDe: 'Wie lautet dieser Ausdruck als Gerundiv?',
        promptZh: '這個表述作為 Gerundiv 該怎麼說？',
        sampleReplies: [
          'Das lautet: „ein zu übersetzender Text“. „übersetzen“ ist untrennbar, daher steht „zu“ davor, und die Endung ist „-er“ im Maskulinum Nominativ.',
        ],
      },
    },
    reading: {
      title: '德國聯邦政府公文告示精讀：重大基建規範',
      documentType: 'Amtliche Bekanntmachung',
      content: 'RICHTLINIEN ZUR DURCHFÜHRUNG ÖFFENTLICHER BAUVORHABEN\n\nGemäß § 14 des Baugesetzbuches gelten für alle neu zu planenden Großprojekte folgende verbindliche Standards:\n\n1. UMWELTVERTRÄGLICHKEITSPRÜFUNG:\nDie durch das Bauvorhaben zu erwartenden Umweltauswirkungen sind im Vorfeld detailliert zu dokumentieren. Mögliche Schäden an Flora und Fauna müssen durch Ausgleichsflächen kompensiert werden.\n\n2. BÜRGERBETEILIGUNG:\nDie von der Baumaßnahme unmittelbar betroffenen Anwohner sind frühzeitig über die zu befürchtenden Lärmbelastungen zu informieren. Alle einzureichenden Einwände werden innerhalb einer Frist von vier Wochen geprüft.\n\n3. ENERGIEEFFIZIENZ:\nDie einzuhaltenden Grenzwerte für den CO2-Ausstoß orientieren sich an den neuesten Richtlinien der Europäischen Union.',
      translation: '公共工程建設實施指導原則\n\n依據《建築法典》第 14 條，針對所有新規劃的重大專案適用以下具約束力之標準：\n\n1. 環境影響評估：\n因該工程建設預期將會造成的環境影響，必須在事前進行詳細記錄。對動植物群可能造成的損害必須透過生態補償用地加以補償。\n\n2. 市民參與：\n受該工程措施直接影響的周邊居民，必須及早獲知可能需要擔憂的噪音負擔。所有必須呈交的異議將在四週期限內予以審查。\n\n3. 能源效率：\n必須嚴格遵守的碳排放極限值，以歐盟最新指導準則為依歸。',
      glossary: {
        Bauvorhaben: { pos: 'das', meaning: '建築工程、建設專案' },
        verbindlich: { pos: 'adj', meaning: '具約束力的、有法定效力的' },
        Ausgleichsfläche: { pos: 'die', meaning: '生態補償綠地' },
        Grenzwert: { pos: 'der', meaning: '極限值、法定上限' },
      },
      questions: [
        {
          id: 'd338_rq1',
          question: 'Was meint der Text mit "die einzuhaltenden Grenzwerte"?',
          options: [
            'Die Grenzwerte, die man strikt einhalten muss. (必須嚴格遵守的極限標準)',
            'Grenzwerte, die man ignorieren darf. (可以忽視的極限值)',
            'Werte, die die Bürger selbst erfinden. (市民自己發明的數值)',
            'Alte Grenzwerte aus dem letzten Jahrhundert. (上個世紀的舊數值)',
          ],
          correctIndex: 0,
          explanation: 'Gerundiv「die einzuhaltenden Grenzwerte」即「Grenzwerte, die eingehalten werden müssen」。',
        },
      ],
    },
    examTip: {
      skill: 'B2-Brücke',
      title: 'Gerundiv 的分離與不可分離規律',
      content: '注意 zu 的位置！若是可分離動詞，zu 必須夾在中間（如 aus-zu-füllen-d）；若是不可分離動詞或前綴不分離者，zu 放在最前面（如 zu wiederholen-d, zu lösende）。在德語公文中極具辨識度！',
    },
  },

  339: {
    day: 339,
    stage: 'EXAM',
    week: 49,
    dayOfWeek: 3,
    title: 'Day 339: B2 銜接語法三：虛擬一式 (Konjunktiv I) 與新聞間接引語',
    germanTitle: 'Brückenkurs B2: Der Konjunktiv I und die indirekte Rede in den Medien',
    theme: '德語高級讀寫階梯 - 新聞、報章雜誌客觀轉述他人言論必備語式',
    estimatedMinutes: 20,
    grammar: {
      title: '虛擬一式 (Konjunktiv I) 的變位與客觀中立轉述機制',
      explanation: '在閱讀《明鏡週刊 (Der Spiegel)》、《時代週報 (Die Zeit)》或觀看《每日新聞 (Tagesschau)》時，你會發現動詞經常長得很奇怪（如：er habe, sie sei, die Regierung plane）。這就是【虛擬一式 (Konjunktiv I)】！\n功能：記者用它來做「間接引語 (Indirekte Rede)」，客觀轉述政客或專家的發言，向讀者表明：【這是他人的觀點，記者本人不對其真實性背書保證】！\n構成：動詞現在時詞幹 + 詞尾：-e, -est, -e, -en, -et, -en。最核心高頻的是第三人稱單數（er/sie/es）：\n- sein -> er **sei** / sie **seien**\n- haben -> er **habe**\n- werden -> er **werde**\n- können -> er **könne**\n- wissen -> er **wisse**。',
      ruleExample: [
        {
          de: 'Der Regierungssprecher betonte, die Inflation sei im letzten Monat deutlich gesunken.',
          zh: '政府發言人強調，通貨膨脹在過去一個月中明顯下降了。（sei 為 sein 的 Konjunktiv I）',
          note: 'er/sie sei 客觀轉述，記者保持中立距離',
        },
        {
          de: 'Die Forscherin erklärte, ihre neue Studie eröffne völlig neuartige Perspektiven.',
          zh: '研究員解釋道，她的最新研究打開了完全嶄新的視角。（eröffne 為 Konjunktiv I）',
          note: '動詞詞尾為 -e，不同於直陳式 eröffnet',
        },
      ],
    },
    vocabulary: [
      {
        id: 'd339_v1',
        word: 'die indirekte Rede',
        article: 'die',
        meaning: '間接引語（客觀轉述他人話語的語法形式）',
        example: 'In journalistischen Berichten steht die indirekte Rede fast immer im Konjunktiv I.',
        exampleTr: '在新聞報導中，間接引語幾乎總是使用虛擬一式。',
      },
      {
        id: 'd339_v2',
        word: 'betonen',
        meaning: '強調、著重指出 (betont, betonte, hat betont)',
        example: 'Der Minister betonte, man müsse die erneuerbaren Energien massiv ausbauen.',
        exampleTr: '部長強調，人們必須大力擴建再生能源。',
      },
      {
        id: 'd339_v3',
        word: 'behaupten',
        meaning: '聲稱、主張 (behauptet, behauptete, hat behauptet)',
        example: 'Er behauptete, von den Vorgängen nichts gewusst zu haben.',
        exampleTr: '他聲稱對這些事態經過毫不知情。',
      },
      {
        id: 'd339_v4',
        word: 'die Distanz',
        article: 'die',
        meaning: '距離、客觀中立距離',
        example: 'Der Konjunktiv I signalisiert journalistische Distanz zur Aussage der Quelle.',
        exampleTr: '虛擬一式傳達了記者對消息來源言論的客觀距離。',
      },
      {
        id: 'd339_v5',
        word: 'erklären',
        meaning: '解釋、聲明 (erklärt, erklärte, hat erklärt)',
        example: 'Die Sprecherin erklärte, die Verhandlungen stünden kurz vor dem Abschluss.',
        exampleTr: '發言人聲明，談判即將進入尾聲。',
      },
    ],
    listening: {
      title: '廣播新聞實況：總理府記者招待會引述',
      situation: '廣播電台新聞播音員正在以專業間接引語轉述總理對經濟局勢的最新聲明。',
      dialogue: [
        {
          speaker: 'Nachrichtensprecher',
          de: 'Hier sind die Nachrichten. Der Bundeskanzler hat sich zur Lage der Industrie geäußert. Er sagte, Deutschland bleibe trotz globaler Krisen ein wettbewerbsfähiger Standort.',
          zh: '這裡是即時新聞。聯邦總理已對工業局勢發表意見。他表示，儘管面臨全球危機，德國「依舊保持著（bleibe）」具競爭力的投資地地位。',
        },
        {
          speaker: 'Nachrichtensprecher',
          de: 'Die Bundesregierung werde gezielte Entlastungen beschließen, damit Unternehmen mehr investieren könnten. Die Opposition kritisierte jedoch, diese Pläne seien völlig unzureichend.',
          zh: '聯邦政府「將會（werde）」決議針對性的減負措施，好讓企業能擴大投資。然而反對黨批評稱，這些計畫「完全是不充分的（seien）」',
        },
      ],
      comprehensionQuestions: [
        {
          id: 'd339_lq1',
          question: 'Warum verwendet der Nachrichtensprecher Verbformen wie "bleibe", "werde" und "seien"?',
          options: [
            'Weil es sich um die indirekte Rede im Konjunktiv I handelt. (因為這是虛擬一式的間接引語轉述)',
            'Weil er die Verben nicht richtig beugen kann. (因為他不會正確變位動詞)',
            'Weil die Nachrichten in der Vergangenheit spielen. (因為新聞發生在過去)',
            'Weil er Deutsch als Fremdsprache lernt. (因為他把德語當外語在學)',
          ],
          correctIndex: 0,
          explanation: '德語正規新聞播報在轉述政界或官方言論時，規範一律使用 Konjunktiv I 以保持客觀公允。',
        },
      ],
    },
    speaking: {
      title: '虛擬一式轉述口說句型演練',
      instruction: '朗讀下列引述句型，體會「客觀引導」的陳述語調，注意「sei / habe / werde」的清晰發音。',
      targetSentences: [
        {
          id: 'd339_s1',
          de: 'Der Arzt versicherte dem Patienten, die Operation sei völlig risikofrei verlaufen.',
          zh: '醫生向病患保證，手術進行得完全沒有任何風險。（sei ... verlaufen）',
          phoneticTip: '「sei risikofrei」發音清脆。',
        },
        {
          id: 'd339_s2',
          de: 'Laut Expertenbericht habe der Klimawandel unumkehrbare Prozesse in Gang gesetzt.',
          zh: '根據專家報告，氣候變遷已經啟動了不可逆轉的進程。（habe in Gang gesetzt）',
          phoneticTip: '「unumkehrbare」重音在 -kehr-。',
        },
      ],
      rolePlay: {
        partnerName: 'Journalist',
        partnerRole: '資深記者',
        scenario: '請口頭將市長的直陳句「Ich bin sehr zufrieden mit dem Projekt (我對該專案很滿意)」轉述為間接引語。',
        promptDe: 'Wie zitieren Sie den Bürgermeister in Ihrem Zeitungsartikel?',
        promptZh: '您在報紙文章中如何引用市長的話？',
        sampleReplies: [
          'Ich schreibe: Der Bürgermeister erklärte, er sei sehr zufrieden mit dem Projekt. Das Verb „sein“ wird im Konjunktiv I zu „sei“.',
        ],
      },
    },
    reading: {
      title: '德語主流媒體新聞摘錄精讀：間接引語的鑑賞 (Tagesschau-Stil)',
      documentType: 'Pressebericht',
      content: 'STREIK IM ÖFFENTLICHEN NAHVERKEHR: VERHANDLUNGEN VORERST GESCHEITERT\n\nBERLIN - Im Tarifkonflikt des öffentlichen Personennahverkehrs zeichnet sich keine rasche Einigung ab. Beide Seiten gaben heute getrennte Pressekonferenzen:\n\n1. DIE POSITION DER GEWERKSCHAFT:\nDer Verhandlungsführer der Gewerkschaft erklärte, die Arbeitnehmer litten unter massiven Reallohnverlusten. Die Beschäftigten bräuchten dringend einen dauerhaften Inflationsausgleich. Es sei den Bus- und Bahnfahrern nicht zuzumuten, bei steigenden Lebenshaltungskosten Reallohnsenkungen hinzunehmen.\n\n2. DIE ANTWORT DER ARBEITGEBER:\nDie Vertreter der Verkehrsbetriebe hielten dagegen, die Forderungen der Gewerkschaft seien wirtschaftlich nicht darstellbar. Man habe bereits ein Rekordangebot vorgelegt, das an die Schmerzgrenze gehe. Weitere Streiks gefährdeten das Vertrauen der Fahrgäste in den öffentlichen Nahverkehr.\n\n3. DER AKTUELLE STAND:\nBeide Parteien kündigten an, sie seien grundsätzlich bereit, an den Verhandlungstisch zurückzukehren, sobald neue Signale vorlägen.',
      translation: '大眾短途交通罷工：談判暫時宣告破裂\n\n柏林 - 在大眾短途大眾運輸的薪資爭端中，未見任何迅速達成協議的跡象。雙方今天各自召開了新聞發布會：\n\n1. 工會立場：\n工會談判首席代表解釋稱，勞工正承受著實質薪資的大幅縮水。從業人員迫切需要長期的通膨補償。在生活成本攀升之際，要求公車與火車駕駛員接受實質減薪是「不可理喻且不合情理的 (sei nicht zuzumuten)」\n\n2. 雇主的回應：\n運輸企業代表反駁稱，工會的要求在經濟上「是不可承受的 (seien nicht darstellbar)」。資方「已經提出了一份逼近痛感底線的創紀錄報價 (habe vorgelegt)」。進一步的罷工將危害乘客對大眾交通的信任。\n\n3. 當前現狀：\n雙方皆宣布，一旦出現新信號，他們原則上「隨時準備好 (seien bereit)」重返談判桌。',
      glossary: {
        Tarifkonflikt: { pos: 'der', meaning: '集體薪資協約爭端' },
        Reallohnverlust: { pos: 'der', meaning: '實質薪資縮水損失' },
        Inflationsausgleich: { pos: 'der', meaning: '通貨膨脹補償金' },
        Schmerzgrenze: { pos: 'die', meaning: '承受底線、痛感極限' },
      },
      questions: [
        {
          id: 'd339_rq1',
          question: 'Welche Haltung signalisiert der Autor durch den Konjunktiv I ("seien", "habe vorgelegt")?',
          options: [
            'Er distanziert sich neutral und gibt die Aussagen der Parteien objektiv wieder. (他保持中立距離，客觀轉述各方言論)',
            'Er unterstützt zu 100% die Gewerkschaft. (他百分之百支持工會)',
            'Er sagt, dass alle lügen. (他說大家都在撒謊)',
            'Er möchte selbst Busfahrer werden. (他自己想去當公車司機)',
          ],
          correctIndex: 0,
          explanation: '德語新聞透過 Konjunktiv I 體現嚴格的客觀轉述機制，不帶記者個人偏好。',
        },
      ],
    },
    examTip: {
      skill: 'B2-Brücke',
      title: '虛擬一式核心速記口訣',
      content: '不用死背全套六個人稱！在 90% 的情況下，新聞和考試中只需辨識單數「er/sie sei (是)」與「er/sie habe (有)」，以及「werde (將會)」。只要看見 sei 和 habe 放在第三人稱單數句中，立刻知道是間接引語！',
    },
  },

  340: {
    day: 340,
    stage: 'EXAM',
    week: 49,
    dayOfWeek: 4,
    title: 'Day 340: B2 銜接語法四：名詞化風格與動詞化風格互換',
    germanTitle: 'Brückenkurs B2: Nominalstil vs. Verbalstil in Wissenschaft und Behörden',
    theme: '德語高級讀寫階梯 - 學術公文「名詞化 (Nominalstil)」精簡轉換術',
    estimatedMinutes: 20,
    grammar: {
      title: '動詞化 (Verbalstil) 與名詞化 (Nominalstil) 的對應轉換矩陣',
      explanation: '德語有兩種極端的文風：\n1. 動詞風格 (Verbalstil)：多從句、生活化、口語化（如用 weil, wenn, während, obwohl, bevor）；\n2. 名詞風格 (Nominalstil)：多名詞短語、高度凝練、德語學術界與政府公文的最愛！\n核心轉換對照：\n- weil / da (因為) -> wegen / aufgrund + Genitiv（由於…的名詞）\n- obwohl (雖然) -> trotz + Genitiv（儘管…）\n- während (在…期間) -> während + Genitiv（在…期間）\n- wenn / falls (如果) -> bei + Dativ（在…情況下）\n- bevor (在…之前) -> vor + Dativ（在…之前）\n- nachdem (在…之後) -> nach + Dativ（在…之後）。',
      ruleExample: [
        {
          de: 'Verbalstil: Weil es stark geregnet hat, fiel das Open-Air-Konzert aus.',
          zh: '動詞風格：因為下大雨，戶外演唱會取消了。',
          note: '從屬連詞 weil 子句',
        },
        {
          de: 'Nominalstil: Wegen des starken Regens fiel das Open-Air-Konzert aus.',
          zh: '名詞風格：由於強降雨，戶外演唱會取消了。（名詞 Regen + 介系詞 wegen + Genitiv）',
          note: '大幅精簡句子，無子句更具公文質感',
        },
      ],
    },
    vocabulary: [
      {
        id: 'd340_v1',
        word: 'der Nominalstil',
        article: 'der',
        meaning: '名詞化風格（常用名詞短語替代從屬子句的文風）',
        example: 'Der Nominalstil ist typisch für Gesetzestexte, Verträge und wissenschaftliche Arbeiten.',
        exampleTr: '名詞化風格是法律條文、合約與學術論文的典型特徵。',
      },
      {
        id: 'd340_v2',
        word: 'der Verbalstil',
        article: 'der',
        meaning: '動詞化風格（多用從屬連詞與動詞的流暢文風）',
        example: 'Im mündlichen Gespräch bevorzugen die meisten Menschen den lebendigen Verbalstil.',
        exampleTr: '在口頭交談中，大多數人偏好生動活潑的動詞風格。',
      },
      {
        id: 'd340_v3',
        word: 'die Umformung',
        article: 'die',
        plural: 'die Umformungen',
        meaning: '改寫、轉換、語法重構',
        example: 'Die geschickte Umformung von Nebensätzen in Nominalgruppen erfordert Übung.',
        exampleTr: '將從屬子句巧妙改寫為名詞詞組需要大量的練習。',
      },
      {
        id: 'd340_v4',
        word: 'aufgrund',
        meaning: '基於、由於 (Präposition + Genitiv)',
        example: 'Aufgrund unvorhergesehener Umstände muss die Konferenz verschoben werden.',
        exampleTr: '由於不可預見的情由，大會不得不予以推遲。',
      },
      {
        id: 'd340_v5',
        word: 'infolge',
        meaning: '由於…的後果 (Präposition + Genitiv)',
        example: 'Infolge des Stromausfalls standen alle Züge für zwei Stunden still.',
        exampleTr: '由於停電的後果，所有火車停擺了兩個小時。',
      },
    ],
    listening: {
      title: '學術寫作研修班：將平庸從句升級為典雅名詞片語',
      situation: '大學寫作導師正在批改學生的論文摘要，現場示範名詞化提煉。',
      dialogue: [
        {
          speaker: 'Dozent',
          de: 'Frau Klein, Ihr Satz lautet: "Bevor die neue Maschine in Betrieb genommen wurde, hat man sie gründlich getestet." Das ist völlig korrekt, aber etwas umständlich.',
          zh: 'Klein 女士，您的句子是：「在新的機器被投入運行之前，人們對它進行了徹底測試。」這完全正確，但稍微有點繁瑣。',
        },
        {
          speaker: 'Studentin',
          de: 'Wie mache ich das im Nominalstil?',
          zh: '我該如何在名詞風格中做到這一點？',
        },
        {
          speaker: 'Dozent',
          de: 'Verwandeln Sie "bevor sie in Betrieb genommen wurde" in "Vor der Inbetriebnahme der neuen Maschine"! Dann heißt der Satz: "Vor der Inbetriebnahme der neuen Maschine erfolgten gründliche Tests."',
          zh: '將「在它被投入運行前」轉化為「在該新機器投產啟用前（Vor der Inbetriebnahme）」！整句就是：「在該新機器投產啟用前進行了徹底的測試。」',
        },
      ],
      comprehensionQuestions: [
        {
          id: 'd340_lq1',
          question: 'Welches Substantiv ersetzt den Nebensatz "bevor die Maschine in Betrieb genommen wurde"?',
          options: [
            'Die Inbetriebnahme. (投產、啟用、運轉開始)',
            'Die Beschädigung. (損壞)',
            'Die Verlangsamung. (減速)',
            'Das Wetter. (天氣)',
          ],
          correctIndex: 0,
          explanation: '動詞短語 in Betrieb nehmen 對應的名詞正是「die Inbetriebnahme（投產、啟用）」。',
        },
      ],
    },
    speaking: {
      title: '名詞化轉換口頭即時快翻訓練',
      instruction: '口頭將下列帶連詞從句轉換為帶介系詞的名詞短語。',
      targetSentences: [
        {
          id: 'd340_s1',
          de: 'Obwohl es stürmte -> Trotz des Sturms gingen die Wanderer weiter.',
          zh: '雖然刮暴風 -> 儘管面臨暴風，健行者們仍舊繼續前行。',
          phoneticTip: '「Trotz des Sturms」三格/二格清脆利落。',
        },
        {
          id: 'd340_s2',
          de: 'Wenn Sie Fragen haben -> Bei Fragen wenden Sie sich bitte an die Information.',
          zh: '如果您有問題 -> 若有垂詢，請洽詢服務台。',
          phoneticTip: '「Bei Fragen」德國日常告示牌極高頻用法。',
        },
      ],
      rolePlay: {
        partnerName: 'Professor',
        partnerRole: '教授',
        scenario: '請口頭將句子「Während die Verhandlungen liefen, demonstrierten Bürger (在談判進行期間，市民發起了示威)」改為名詞風格。',
        promptDe: 'Wie drücken Sie das mit der Präposition „während“ und einem Nomen aus?',
        promptZh: '您如何用介系詞 während 與一個名詞來表達這句話？',
        sampleReplies: [
          'Das heißt: „Während der Verhandlungen demonstrierten Bürger.“ Aus dem Nebensatz wird die Genitiv-Gruppe „während der Verhandlungen“.',
        ],
      },
    },
    reading: {
      title: '學術摘要對比鑑賞：動詞風格 vs. 頂級名詞風格',
      documentType: 'Wissenschaftlicher Stilvergleich',
      content: 'STILVERGLEICH IN FACHTEXTEN (B1 VERBALSTIL VS. B2/C1 NOMINALSTIL)\n\n1. BEISPIEL: KLIMASCHUTZ\n- Verbalstil (B1): Wenn die Temperaturen global steigen, schmelzen die Gletscher immer schneller, sodass der Meeresspiegel ansteigt.\n- Nominalstil (B2): Durch den weltweiten Temperaturanstieg kommt es zu einer beschleunigten Gletscherschmelze und einem Anstieg des Meeresspiegels.\n\n2. BEISPIEL: WIRTSCHAFTSPOLITIK\n- Verbalstil (B1): Weil die Zinsen angehoben wurden, investierten die Unternehmen weniger Geld in neue Projekte.\n- Nominalstil (B2): Infolge der Zinserhöhung sank die Investitionsbereitschaft der Unternehmen.\n\n3. BEISPIEL: MEDIZIN\n- Verbalstil (B1): Nachdem der Patient die Tabletten eingenommen hatte, verbesserte sich sein Zustand rasch.\n- Nominalstil (B2): Nach der Einnahme des Medikaments trat eine rasche Besserung des Allgemeinzustands ein.\n\nFAZIT: Der Nominalstil erlaubt eine enorme Informationsdichte auf engstem Raum.',
      translation: '專業文本風格對照（B1 動詞風格 vs. B2/C1 名詞風格）：\n\n1. 範例：氣候保護\n- 動詞風格 (B1)：當全球氣溫上升時，冰川融化得越來越快，以至於海平面上升。\n- 名詞風格 (B2)：由於全球氣溫攀升，引發了加速的冰川消融以及海平面的上升。\n\n2. 範例：經濟政策\n- 動詞風格 (B1)：因為利率被調高了，企業在新的專案中投資了較少的資金。\n- 名詞風格 (B2)：由於升息的影響，企業的投資意願隨之下跌。\n\n3. 範例：醫學健康\n- 動詞風格 (B1)：在病患服用了藥片之後，他的狀況迅速好轉。\n- 名詞風格 (B2)：在藥物服用之後，整體健康狀況迅速出現好轉改善。\n\n總結：名詞化風格能在最緊湊的篇幅內實現極大的資訊密度。',
      glossary: {
        Gletscherschmelze: { pos: 'die', meaning: '冰川消融' },
        Zinserhöhung: { pos: 'die', meaning: '加息、利率調升' },
        Einnahme: { pos: 'die', meaning: '服用（藥物）；收入' },
        Informationsdichte: { pos: 'die', meaning: '資訊密度' },
      },
      questions: [
        {
          id: 'd340_rq1',
          question: 'Welcher Vorteil zeichnet den Nominalstil in Fachtexten besonders aus?',
          options: [
            'Er ermöglicht eine hohe Informationsdichte und einen präzisen, sachlichen Ton. (實現高資訊密度以及精確客觀的語氣)',
            'Er ist nur für Märchenerzählungen geeignet. (只適合童話講述)',
            'Er vermeidet alle Substantive. (它避免了所有名詞)',
            'Er macht Texte dreimal so lang. (它讓文章變長三倍)',
          ],
          correctIndex: 0,
          explanation: '名詞化風格以其高資訊密度、簡練結構和精準客觀的語調，成為德語學術與正式文件的標準配備。',
        },
      ],
    },
    examTip: {
      skill: 'B2-Brücke',
      title: '名詞化的「三位一體」轉換法',
      content: '1. 連詞變介系詞（weil -> wegen; obwohl -> trotz; wenn -> bei）；2. 動詞變名詞（ansteigen -> der Anstieg; zunehmen -> die Zunahme）；3. 主詞變屬格或 von-Dativ。掌握這三步，你的德語作文立馬躍升頂級學術水平！',
    },
  },

  341: {
    day: 341,
    stage: 'EXAM',
    week: 49,
    dayOfWeek: 5,
    title: 'Day 341: B2 銜接語法五：高級語篇邏輯副詞與篇章架構',
    germanTitle: 'Brückenkurs B2: Fortgeschrittene Satzverknüpfung und Textkohärenz',
    theme: '德語高級讀寫階梯 - 擺脫「und, aber, weil」的高階篇章邏輯銜接詞庫',
    estimatedMinutes: 20,
    grammar: {
      title: '高階因果、讓步與結果副詞 (Infolgedessen, Demzufolge, Stattdessen, Demnach)',
      explanation: '中級德語寫作中，考生習慣大量重複「Deshalb, Deswegen, Daher」。但在 B2 與學術寫作中，若能精準使用更具文采的高階副詞，文章質感將產生質的飛躍！\n1. 結果因果：\n   - **infolgedessen / demzufolge**（因此、結果是，放句首佔第一位，後接動詞）\n   - „Die Lieferketten brachen zusammen. Infolgedessen stiegen die Produktionskosten massiv.“\n2. 替代轉折：\n   - **stattdessen**（取而代之的是）\n   - „Sie blieben nicht zu Hause. Stattdessen demonstrierten sie auf den Straßen.“\n3. 邏輯推論：\n   - **demnach / folglich**（照此看來、由此可見）\n   - „Die Messwerte sind eindeutig. Demnach ist das Grundwasser absolut unbedenklich.“',
      ruleExample: [
        {
          de: 'Die Nachfrage nach Elektroautos stieg sprunghaft an. Demzufolge bauten die Hersteller ihre Kapazitäten aus.',
          zh: '對電動車的需求跳躍式增長。因此，製造商擴大了他們的產能。（demzufolge 佔第一位 + 緊跟動詞 bauten）',
          note: 'demzufolge + Verb + Subjekt',
        },
        {
          de: 'Wir haben den Plan nicht verworfen. Stattdessen haben wir ihn an die veränderten Bedingungen angepasst.',
          zh: '我們並未廢棄該計畫。取而代之的是，我們使其適應了已改變的條件。',
          note: 'stattdessen + haben wir angepasst',
        },
      ],
    },
    vocabulary: [
      {
        id: 'd341_v1',
        word: 'infolgedessen',
        meaning: '因此、結果是 (高級因果副詞)',
        example: 'Der Winter war extrem mild. Infolgedessen sparten die Haushalte viel Heizenergie.',
        exampleTr: '冬季極度溫和。因此，各家庭節省了大量暖氣能源。',
      },
      {
        id: 'd341_v2',
        word: 'demzufolge',
        meaning: '由此可知、據此、因此 (高級邏輯副詞)',
        example: 'Die Rohstoffpreise explodierten. Demzufolge mussten die Endpreise angehoben werden.',
        exampleTr: '原物料價格暴漲。因此，終端售價不得不予以調高。',
      },
      {
        id: 'd341_v3',
        word: 'stattdessen',
        meaning: '取而代之的是、反而 (高級轉折副詞)',
        example: 'Er ging nicht in die Vorlesung. Stattdessen lernte er intensiv in der Universitätsbibliothek.',
        exampleTr: '他沒有去聽大堂課。取而代之的是，他在大學圖書館裡密集自修。',
      },
      {
        id: 'd341_v4',
        word: 'demnach',
        meaning: '照此看來、按此推論 (高級推導副詞)',
        example: 'Die Frist läuft am Freitag ab. Demnach verbleiben uns nur noch zwei Tage.',
        exampleTr: '期限將於週五屆滿。照此推論，我們只剩下兩天時間了。',
      },
      {
        id: 'd341_v5',
        word: 'folglich',
        meaning: '必然地、隨之而來地',
        example: 'Er hat alle Kriterien erfüllt und erhält folglich die begehrte Zulassung.',
        exampleTr: '他符合了所有標準，必然因此獲得了夢寐以求的錄取許可。',
      },
    ],
    listening: {
      title: '學術辯論評析：如何建立無懈可擊的邏輯鏈條',
      situation: '辯論教練正在指導大學辯論隊隊員使用邏輯副詞強化論點間的咬合度。',
      dialogue: [
        {
          speaker: 'Debattentrainer',
          de: 'Achten Sie auf Ihre rhetorischen Übergänge! Sagen Sie nicht fünfmal hintereinander "Und deshalb". Das wirkt eintönig und schwächt Ihre Argumentation.',
          zh: '請注意你們的修辭過渡！不要連續五次說「Und deshalb」。這顯得單調平庸，並削弱了你們的論證力度。',
        },
        {
          speaker: 'Debattant',
          de: 'Welche Wörter empfehlen Sie stattdessen für eine stringente Beweisführung?',
          zh: '對於嚴密的邏輯論證，您反而推薦哪些詞彙呢？',
        },
        {
          speaker: 'Debattentrainer',
          de: 'Verknüpfen Sie Ursache und Wirkung mit "infolgedessen" oder "folglich"! Und wenn Sie eine Fehlannahme entkräften, nutzen Sie "stattdessen" oder "vielmehr". Das verleiht Ihrer Rede akademische Durchschlagskraft!',
          zh: '用「infolgedessen」或「folglich」串聯起原因與結果！當你們駁斥一項錯誤假設時，請運用「stattdessen」或「vielmehr」！這將賦予你們的演說極強的學術穿透力！',
        },
      ],
      comprehensionQuestions: [
        {
          id: 'd341_lq1',
          question: 'Warum rät der Trainer vom ständigen Gebrauch von "und deshalb" ab?',
          options: [
            'Weil es eintönig wirkt und fortgeschrittenere Konnektoren wie "infolgedessen" die Argumentation stärken. (因為單調乏味，而像 infolgedessen 等高級連詞能增強論證)',
            'Weil "deshalb" im Deutschen ein Schimpfwort ist. (因為 deshalb 在德語中是罵人的話)',
            'Weil man beim Reden gar keine Verbindungen nutzen darf. (因為演講時完全不能用連接)',
            'Weil Debattieren verboten ist. (因為辯論是被禁止的)',
          ],
          correctIndex: 0,
          explanation: '教練指出反覆使用簡單的 deshalb 容易讓語篇呆板，改用高階邏輯副詞能大幅提升論證說服力。',
        },
      ],
    },
    speaking: {
      title: '高階邏輯銜接副詞發音與倒裝口說訓練',
      instruction: '大聲朗讀下列邏輯推進句，注意句首副詞後的立即動詞倒裝。',
      targetSentences: [
        {
          id: 'd341_s1',
          de: 'Infolgedessen sahen sich die Verantwortlichen gezwungen, sofortige Maßnahmen zu ergreifen.',
          zh: '因此，負責人感到不得不立即採取斷然措施。',
          phoneticTip: '「Infolgedessen sahen sich...」語調充滿權威信度。',
        },
        {
          id: 'd341_s2',
          de: 'Wir sollten nicht resignieren. Vielmehr müssen wir die Krise als Chance begreifen.',
          zh: '我們不應當消極認命。反而我們必須將危機視為轉機。',
          phoneticTip: '「Vielmehr」重音在 Viel-，表達強烈的積極轉向。',
        },
      ],
      rolePlay: {
        partnerName: 'Diskussionsleiter',
        partnerRole: '主持人',
        scenario: '在討論中請用「infolgedessen」或「demzufolge」將「氣候暖化 -> 極端氣候頻發」串聯成一句高級論證。',
        promptDe: 'Können Sie den Zusammenhang zwischen Treibhausgasen und Unwettern logisch verknüpfen?',
        promptZh: '您能否將溫室氣體與極端暴風雨之間的關聯進行邏輯串聯？',
        sampleReplies: [
          'Ja: Die Konzentration von Treibhausgasen in der Atmosphäre hat einen historischen Höchststand erreicht. Demzufolge häufen sich verheerende Überschwemmungen und Dürreperioden weltweit.',
        ],
      },
    },
    reading: {
      title: '德國智庫經濟前瞻報告：高階語篇邏輯副詞鑑賞',
      documentType: 'Analysereport',
      content: 'DIE ENTWICKLUNG DES DEUTSCHEN ARBEITSMARKTES BIS 2035\n\nEin Bericht des Instituts für Wirtschaftsforschung analysiert den demografischen Wandel und dessen Konsequenzen für den Wirtschaftsstandort Deutschland:\n\n1. DIE AUSGANGSLAGE:\nDie Generation der Babyboomer geht in den kommenden Jahren schrittweise in den Ruhestand. Infolgedessen entsteht eine erhebliche Lücke an qualifizierten Fachkräften in Industrie und Handwerk.\n\n2. DIE FEHLKONTROLLEN:\nDie bisherigen Zuwanderungsregeln waren oft zu bürokratisch gestaltet. Demzufolge konnte Deutschland im globalen Wettbewerb um internationale Talente nicht optimal punkten.\n\n3. DIE STRATEGISCHE NEUAUSRICHTUNG:\nDie Politik darf den Mangel nicht aussitzen. Stattdessen müssen bürokratische Hürden bei der Anerkennung ausländischer Berufsabschlüsse abgebaut werden. Demnach hängt der künftige Wohlstand maßgeblich von einer offenen und effizienten Willkommenskultur ab.',
      translation: '至 2035 年德國勞動市場之展望\n\n經濟研究所的一份報告分析了人口結構變化及其對德國作為投資地的後果：\n\n1. 出發初始現狀：\n嬰兒潮世代在未來幾年中將逐步步入退休生活。因此（Infolgedessen），在工業與手工製造業中產生了高素質專業人才的顯著缺口。\n\n2. 錯誤的監控機制：\n過往的移民規章往往設計得過於官僚化。因此（Demzufolge），德國在全球爭取國際頂尖人才的競爭中未能獲得最佳戰果。\n\n3. 戰略上的重新定位：\n政界絕不可對人才匱乏坐視不管。取而代之的是（Stattdessen），必須拆除外國職業學歷認證中的官僚體系障礙。由此可見（Demnach），未來的繁榮在很大程度上取決於一種開放且高效的歡迎文化。',
      glossary: {
        Ausgangslage: { pos: 'die', meaning: '初始狀況、出發基點' },
        Ruhestand: { pos: 'der', meaning: '退休生活' },
        Zuwanderungsregel: { pos: 'die', meaning: '移民法規、移入規範' },
        Willkommenskultur: { pos: 'die', meaning: '歡迎文化（對外來人才的友善環境）' },
      },
      questions: [
        {
          id: 'd341_rq1',
          question: 'Welche logische Verknüpfung leitet die Forderung nach dem Abbau bürokratischer Hürden ein?',
          options: [
            'Stattdessen (取而代之的是).',
            'Weil (因為).',
            'Obwohl (雖然).',
            'Und (和).',
          ],
          correctIndex: 0,
          explanation: '文中第三點使用「Stattdessen müssen bürokratische Hürden... abgebaut werden」形成強烈的正面替代對策。',
        },
      ],
    },
    examTip: {
      skill: 'B2-Brücke',
      title: '高級連詞副詞的位置戒律',
      content: '「Infolgedessen, Demzufolge, Stattdessen, Demnach」放在句首時，全都是【副詞】！意味著它們【佔據第一位】，後方緊接著必須是【變位動詞】！（例如：Infolgedessen STEIGEN die Preise. 絕不可寫成 *Infolgedessen die Preise steigen）。記住動詞第二位，高分有保證！',
    },
  },

  342: {
    day: 342,
    stage: 'EXAM',
    week: 49,
    dayOfWeek: 6,
    title: 'Day 342: 第 49 週 B2 銜用語法綜合檢定與實戰診斷',
    germanTitle: 'Woche 49 Meilenstein: B2-Brückengrammatik-Zertifikatstest & Fehlerdiagnose',
    theme: '德語高級讀寫階梯 - 分詞定語、Gerundiv、虛擬一式與名詞化綜合大檢定',
    estimatedMinutes: 20,
    grammar: {
      title: 'B2 銜接期四大核心語法模組綜合檢閱',
      explanation: '今天我們對第 49 週所學習的四大高階語法進行綜合實戰驗收：\n1. Partizip I & II als Adjektiv (主被動分詞定語)\n2. Gerundiv (zu + Partizip I 表被動義務/可能性)\n3. Konjunktiv I in der indirekten Rede (新聞間接引語)\n4. Nominalstil (名詞化轉換與高階語篇邏輯副詞)。\n掌握這四大武器，代表你不僅完全征服了 B1，更已具備敲開德語 B2 與德福 (TestDaF) 大門的高階素養！',
      ruleExample: [
        {
          de: 'Die zu bewältigende Krise erfordert das gemeinsame Handeln aller beteiligten Akteure.',
          zh: '亟待克服的危機需要所有參與行動者之共同行動。（Gerundiv + Partizip II 完美融合）',
          note: 'zu bewältigende (Gerundiv) & beteiligten (Partizip II)',
        },
        {
          de: 'Infolge der Einigung sei der Streik abgewendet worden, betonte der Sprecher.',
          zh: '發言人強調，由於達成了協議，罷工得以被避免。（名詞化 infolge + 虛擬一式 sei abgewendet worden）',
          note: 'B2/C1 級別的高規格學術公文句式',
        },
      ],
    },
    vocabulary: [
      {
        id: 'd342_v1',
        word: 'der Akteur',
        article: 'der',
        plural: 'die Akteure',
        meaning: '行動者、參與者、當事人',
        example: 'Alle gesellschaftlichen Akteure müssen an einem Strang ziehen.',
        exampleTr: '所有社會行動者都必須齊心協力。',
      },
      {
        id: 'd342_v2',
        word: 'abwenden',
        meaning: '防止、避免、化解 (wendet ab, wendete ab, hat abgewendet)',
        example: 'Durch rasches Eingreifen konnte eine schwere Katastrophe abgewendet werden.',
        exampleTr: '透過迅速介入，一場嚴重的災難得以被及時化解。',
      },
      {
        id: 'd342_v3',
        word: 'das Sprachniveau',
        article: 'das',
        plural: 'die Sprachniveaus',
        meaning: '語言等級、語言水準',
        example: 'Ihr Sprachniveau hat sich in den letzten Wochen spürbar professionalisiert.',
        exampleTr: '您的語言水平在最近幾週有了顯著的專業化提升。',
      },
      {
        id: 'd342_v4',
        word: 'die Sprachgewandtheit',
        article: 'die',
        meaning: '語言熟練度、詞鋒敏捷流暢',
        example: 'Sprachgewandtheit öffnet Türen im akademischen und beruflichen Alltag.',
        exampleTr: '優雅敏捷的語言駕馭力在學術與職場日常中能開啟無數大門。',
      },
      {
        id: 'd342_v5',
        word: 'der Brückenkurs',
        article: 'der',
        plural: 'die Brückenkurse',
        meaning: '銜接課程、過渡橋樑課程',
        example: 'Dieser Brückenkurs schlägt eine sichere Brücke vom B1- ins B2-Niveau.',
        exampleTr: '本銜接模組在 B1 與 B2 水平之間架起了一座穩固的橋樑。',
      },
    ],
    listening: {
      title: '檢定複盤：專家點評高階德語語法轉化成果',
      situation: '主考官在批改完第 49 週綜合測驗後，向全體學員講評答題亮點與易混淆點。',
      dialogue: [
        {
          speaker: 'Cheftrainerin',
          de: 'Herzlichen Glückwunsch an alle! In der heutigen Gesamtwiederholung haben über 90 Prozent die Umformung in den Nominalstil fehlerfrei gemeistert.',
          zh: '由衷祝賀大家！在今天的綜合複習測驗中，超過 90% 的學員毫無差錯地掌握了名詞化風格的轉換。',
        },
        {
          speaker: 'Schüler',
          de: 'Vor allem das Gerundiv mit "zu lösende Aufgaben" spart im Vergleich zu Nebensätzen so viel Schreibzeit!',
          zh: '特別是像「zu lösende Aufgaben」這樣的 Gerundiv 結構，比起從屬子句省下了太多書寫時間！',
        },
        {
          speaker: 'Cheftrainerin',
          de: 'Genau das ist das Geheimnis von B2: Höchste Präzision bei maximaler sprachlicher Eleganz!',
          zh: '這正是 B2 的奧義所在：在最大的語言優雅度中實現極致的精準度！',
        },
      ],
      comprehensionQuestions: [
        {
          id: 'd342_lq1',
          question: 'Was ist laut der Cheftrainerin das Geheimnis des B2-Sprachniveaus?',
          options: [
            'Höchste Präzision bei maximaler sprachlicher Eleganz. (在最大的語言優雅度中實現極致的精確)',
            'Möglichst laut zu sprechen. (儘可能大聲說話)',
            'Nur englische Wörter zu verwenden. (只使用英文單字)',
            'Keine Grammatik mehr zu lernen. (不再學任何語法)',
          ],
          correctIndex: 0,
          explanation: '導師總結 B2 的核心特徵為精確、簡練與典雅結構的高度統一。',
        },
      ],
    },
    speaking: {
      title: 'B2 銜接綜合長難句口語流暢朗讀',
      instruction: '朗讀下列高階綜合長句，注意停頓節奏與發音的權威感。',
      targetSentences: [
        {
          id: 'd342_s1',
          de: 'Infolge der rasch fortschreitenden Automatisierung entstehen völlig neuartige Berufsbilder.',
          zh: '由於迅速推進的自動化影響，完全嶄新的職業形象應運而生。',
          phoneticTip: '「Infolge der rasch fortschreitenden...」氣勢磅礴。',
        },
        {
          id: 'd342_s2',
          de: 'Die zu ergreifenden Maßnahmen seien unumgänglich, betonte das Gremium.',
          zh: '該委員會強調，亟待採取的各項措施是不可避免的。',
          phoneticTip: '「Gremium」發音 /ˈɡʁeːmi̯ʊm/。',
        },
      ],
      rolePlay: {
        partnerName: 'Prüfer',
        partnerRole: '主考官',
        scenario: '考官問你：「您如何看待自己從 B1 邁向 B2 語法結構的飛躍？」，請回答。',
        promptDe: 'Wie hat sich Ihre Ausdrucksweise durch die B2-Grammatik verändert?',
        promptZh: '透過 B2 語法，您的表達方式發生了怎樣的轉變？',
        sampleReplies: [
          'Ich kann nun komplexe Zusammenhänge viel kompakter darstellen. Statt vieler kleiner Hauptsätze nutze ich Partizipialkonstruktionen und den Nominalstil, was meiner Sprache eine akademische Eleganz verleiht.',
        ],
      },
    },
    reading: {
      title: '第 49 週綜合大檢定全真試題解析 (Testbogen)',
      documentType: 'Prüfungsquiz',
      content: 'B2-BRÜCKENKURS: DIE 4 MEISTERFRAGEN ZUR ABSCHLUSSPRÜFUNG:\n\nFRAGE 1 (PARTIZIPIALATTRIBUT):\nFormulieren Sie um: „Die Autos, die elektrisch fahren, werden gefördert.“\n-> Richtig: „Die elektrisch fahrenden Autos werden gefördert.“ (Partizip I)\n\nFRAGE 2 (GERUNDIV):\nFormulieren Sie um: „Die Rechnungen, die noch bezahlt werden müssen.“\n-> Richtig: „Die noch zu bezahlenden Rechnungen.“ (zu + Partizip I + Endung -en)\n\nFRAGE 3 (INDIREKTE REDE):\nSetzen Sie in den Konjunktiv I: Der Minister sagt: „Wir haben kein Geld.“\n-> Richtig: Der Minister erklärte, sie hätten / er habe kein Geld.\n\nFRAGE 4 (NOMINALSTIL):\nFormulieren Sie um: „Weil die Zinsen stiegen, kauften weniger Menschen Häuser.“\n-> Richtig: „Aufgrund / Wegen des Zinsanstiegs sank der Erwerb von Wohneigentum.“',
      translation: 'B2 銜接課程：結訓大考驗四大名家考題：\n\n第 1 題（分詞定語）：\n改寫：「Die Autos, die elektrisch fahren, werden gefördert.」\n-> 正確：「Die elektrisch fahrenden Autos werden gefördert.」（第一分詞）\n\n第 2 題（Gerundiv）：\n改寫：「Die Rechnungen, die noch bezahlt werden müssen.」\n-> 正確：「Die noch zu bezahlenden Rechnungen.」（zu + 第一分詞 + 字尾 -en）\n\n第 3 題（間接引語）：\n改為虛擬一式：部長說：「Wir haben kein Geld.」\n-> 正確：Der Minister erklärte, sie hätten / er habe kein Geld.\n\n第 4 題（名詞化風格）：\n改寫：「Weil die Zinsen stiegen, kauften weniger Menschen Häuser.」\n-> 正確：「Aufgrund / Wegen des Zinsanstiegs sank der Erwerb von Wohneigentum.」',
      glossary: {
        Meisterfrage: { pos: 'die', meaning: '大師級試題、核心難題' },
        Zinsanstieg: { pos: 'der', meaning: '利息攀升、升息' },
        Wohneigentum: { pos: 'das', meaning: '住宅自產、自住房屋' },
        Erwerb: { pos: 'der', meaning: '購買、獲取' },
      },
      questions: [
        {
          id: 'd342_rq1',
          question: 'Welche Umformung für "die Rechnungen, die bezahlt werden müssen" ist grammatisch korrekt?',
          options: [
            'Die zu bezahlenden Rechnungen. (Gerundiv 結構)',
            'Die bezahlte Rechnungen.',
            'Die Rechnungen zu bezahlen.',
            'Die Rechnungen müssen bezahlen.',
          ],
          correctIndex: 0,
          explanation: '「zu + bezahlend + en Rechnungen」完美結合了被動義務與形容詞字尾變格。',
        },
      ],
    },
    examTip: {
      skill: 'B2-Brücke',
      title: '恭喜通關 B2 語法銜接橋樑',
      content: '你已經跨越了基礎與高階的鴻溝！明天我們將迎來德意志文化精神殿堂：走進康德、黑格爾與德國深刻的哲學思辨傳統，探尋德語這門語言嚴密精確的靈魂密碼！',
    },
  },

  343: {
    day: 343,
    stage: 'EXAM',
    week: 49,
    dayOfWeek: 7,
    title: 'Day 343: 德意志文化專題：康德、啟蒙哲學與理性思辨傳統',
    germanTitle: 'Kulturthema: Immanuel Kant, die Aufklärung und der Geist der deutschen Philosophie',
    theme: '德意志精神地標 - 康德《純粹理性批判》、絕對命令與德語嚴密邏輯之源',
    estimatedMinutes: 20,
    grammar: {
      title: '哲學思辨中的抽象名詞後綴 (-heit, -keit, -tum, -ismus) 與假言推理',
      explanation: '為什麼德語被公認為世界上最嚴謹、最適合作為哲學與科學思辨的語言？這源於 18 世紀以康德 (Immanuel Kant) 為代表的啟蒙運動 (Aufklärung)！\n康德在《純粹理性批判》中親手鑄造了現代德語的思辨語彙。名詞後綴是哲學德語的靈魂：\n- **-heit**: die Vernunft -> die Vernünftigkeit (理性度); die Wahrheit (真理); die Freiheit (自由)\n- **-keit**: die Wirklichkeit (現實性); die Sittlichkeit (道德倫理)\n- **-tum**: das Menschentum (人類總體); das Bürgertum (公民階層)\n- **-ismus**: der Idealismus (唯心主義/理想主義); der Rationalismus (理性主義)。',
      ruleExample: [
        {
          de: 'Habe Mut, dich deines eigenen Verstandes zu bedienen! (Immanuel Kant)',
          zh: '要有勇氣運用你自己的理智！（康德定義「啟蒙」的傳世金句）',
          note: 'sich bedienen + Genitiv (deines Verstandes)',
        },
        {
          de: 'Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetz werde.',
          zh: '只依據那種你同時希望它成為一項普遍法則的準則去行動。（康德著名的「絕對命令 Categorical Imperative」）',
          note: 'werde 為 Konjunktiv I 展現立法意志',
        },
      ],
    },
    vocabulary: [
      {
        id: 'd343_v1',
        word: 'die Aufklärung',
        article: 'die',
        meaning: '啟蒙運動；澄清、說明',
        example: 'Die Aufklärung befreite das menschliche Denken von Dogmen und Vorurteilen.',
        exampleTr: '啟蒙運動將人類思想從教條與偏見中解放了出來。',
      },
      {
        id: 'd343_v2',
        word: 'die Vernunft',
        article: 'die',
        meaning: '理性、理智',
        example: 'Kant stellte die menschliche Vernunft in das Zentrum seiner kritischen Philosophie.',
        exampleTr: '康德將人類理性置於其批判哲學的核心地位。',
      },
      {
        id: 'd343_v3',
        word: 'die Maxime',
        article: 'die',
        plural: 'die Maximen',
        meaning: '準則、行為原則格言',
        example: 'Ehrlichkeit und Respekt sind die grundlegenden Maximen seines Handelns.',
        exampleTr: '誠實與尊重是他行為的根本準則。',
      },
      {
        id: 'd343_v4',
        word: 'der kategorische Imperativ',
        article: 'der',
        meaning: '定言令式、絕對命令（康德倫理學核心概念）',
        example: 'Der kategorische Imperativ fordert moralisches Handeln aus reiner Pflicht.',
        exampleTr: '絕對命令要求純粹出於責任義務而採取道德行動。',
      },
      {
        id: 'd343_v5',
        word: 'die Pflicht',
        article: 'die',
        plural: 'die Pflichten',
        meaning: '義務、責任、職責',
        example: 'Im deutschen Kulturraum nimmt der Begriff der Pflicht einen hohen Stellenwert ein.',
        exampleTr: '在德語文化圈中，「責任義務」這一概念佔有極高的地位。',
      },
    ],
    listening: {
      title: '文化廣播：走進哲學之鄉——為什麼德國盛產哲學家？',
      situation: '文化播客主持人與哲學史教授探討德語語言結構如何塑造了德國人深邃的思維模式。',
      dialogue: [
        {
          speaker: 'Moderatorin',
          de: 'Professor Meyer, man nennt Deutschland oft das „Land der Dichter und Denker“. Warum hat gerade der deutsche Sprachraum Philosophen wie Kant, Hegel und Nietzsche hervorgebracht?',
          zh: 'Meyer 教授，人們常稱德國為「詩人與思想家的國度」。為什麼偏偏是德語文化圈孕育了像康德、黑格爾與尼采這樣的哲學泰斗？',
        },
        {
          speaker: 'Professor',
          de: 'Ein Hauptgrund liegt in der Architektur der deutschen Sprache! Ihre Nebensatzstrukturen, die Satzklammer und die Möglichkeit, präzise Komposita zu bilden, zwingen den Sprecher zu logischer Disziplin.',
          zh: '一個核心原因在於德語這門語言的建築骨架！它的從屬子句結構、框形動詞閉環以及構建精確複合名詞的能力，迫使說話者具備嚴密的邏輯自律。',
        },
        {
          speaker: 'Moderatorin',
          de: 'Man muss also den Gedanken zu Ende denken, bevor man das Verb am Satzende ausspricht!',
          zh: '也就是說，在把句尾的動詞說出來之前，人們必須把整個思維想得透徹圓滿！',
        },
      ],
      comprehensionQuestions: [
        {
          id: 'd343_lq1',
          question: 'Welche Eigenschaft der deutschen Sprache fördert laut Professor Meyer das philosophische Denken?',
          options: [
            'Die logische Satzarchitektur mit Satzklammer und präziser Wortbildung. (包含框形結構與精確構詞的嚴密句子邏輯架構)',
            'Dass Deutsch keine Grammatikregeln hat. (德語沒有任何語法規則)',
            'Dass man nur zehn Wörter lernen muss. (只需背十個單字)',
            'Dass alle Sätze nach zwei Wörtern enden. (所有句子兩詞就結束)',
          ],
          correctIndex: 0,
          explanation: '教授指出動詞框形結構迫使人在開口前便把整套因果邏輯想清楚，天生具備哲學紀律。',
        },
      ],
    },
    speaking: {
      title: '啟蒙名言與哲學思辨金句朗讀訓練',
      instruction: '用沉穩深邃的語調朗讀康德的啟蒙哲言，體會古典德語的恢弘氣象。',
      targetSentences: [
        {
          id: 'd343_s1',
          de: 'Aufklärung ist der Ausgang des Menschen aus seiner selbstverschuldeten Unmündigkeit.',
          zh: '啟蒙是人類脫離自身所招致的未成熟狀態。（康德《何謂啟蒙》開篇首句）',
          phoneticTip: '「selbstverschuldeten Unmündigkeit」咬字極具哲思深度。',
        },
        {
          id: 'd343_s2',
          de: 'Zwei Dinge erfüllen das Gemüt mit Ehrfurcht: Der bestirnte Himmel über mir und das moralische Gesetz in mir.',
          zh: '有兩件事物充溢心靈以敬畏：我頭頂燦爛的星空，與我心中崇高的道德法則。',
          phoneticTip: '康德墓誌銘，音調莊重肅穆。',
        },
      ],
      rolePlay: {
        partnerName: 'Philosophie-Dozent',
        partnerRole: '哲學講師',
        scenario: '講師問你：「您在學德語時，如何體會到德語結構中的哲學邏輯？」，請回答。',
        promptDe: 'Wie erleben Sie die berühmte deutsche Gründlichkeit in der Grammatik?',
        promptZh: '您在文法中如何體驗到著名的德國嚴謹精神？',
        sampleReplies: [
          'Ich erlebe sie besonders in der Verbstellung der Nebensätze. Man kann nicht voreilig sprechen; man muss den Gedanken vollständig strukturieren, bevor das finite Verb am Ende den Sinn vollendet. Das ist reine Denkschulung!',
        ],
      },
    },
    reading: {
      title: '思想地標精讀：康德的哥尼斯堡每日漫步與啟蒙革命',
      documentType: 'Kulturhistorischer Essay',
      content: 'IMMANUEL KANT: DER REVOLUTIONÄR DES DENKENS AUS KÖNIGSBERG\n\nKaum ein Philosoph hat das moderne Weltbild so radikal geprägt wie Immanuel Kant (1724–1804). Obwohl er seine Heimatstadt Königsberg im damaligen Ostpreußen zeitlebens kaum verließ, revolutionierte er das weltweite Denken:\n\n1. DIE KOPERNIKANISCHE WENDE:\nKant stellte die Erkenntnistheorie auf den Kopf: Nicht unsere Erkenntnis richtet sich nach den Gegenständen, sondern die Gegenstände richten sich nach den Formen unserer Erkenntnis (Raum und Zeit als Anschauungsformen).\n\n2. DER KATEGORISCHE IMPERATIV:\nIn der Ethik formulierte er den Maßstab moralischer Pflicht: Menschen dürfen niemals bloß als Mittel zu einem Zweck gebraucht werden, sondern sind immer als Zweck an sich selbst zu achten. Das ist die philosophische Geburtsstunde der unantastbaren Menschenwürde (Artikel 1 des deutschen Grundgesetzes!).\n\n3. DISZIPLIN ALS LEBENSFORM:\nKants Tagesablauf war so pünktlich wie ein Schweizer Uhrwerk. Die Bewohner Königsbergs stellten angeblich ihre Uhren nach seinem täglichen Nachmittagsspaziergang. Diese geistige Disziplin spiegelt sich bis heute in der Struktur der deutschen Sprache wider.',
      translation: '伊曼努爾·康德：來自哥尼斯堡的思想革命者\n\n幾乎沒有任何哲學家像伊曼努爾·康德（1724–1804）那樣徹底深刻地塑造了現代世界觀。儘管他終其一生幾乎從未離開過當時東普魯士的家鄉城市哥尼斯堡，他卻革命性地重塑了全球的思想思潮：\n\n1. 哥白尼式的轉變：\n康德顛覆了傳統認識論：並非我們的認知去符合外部客體，而是客體必須符合我們認知的先天形式（空間與時間作為感性直觀形式）。\n\n2. 絕對命令：\n在倫理學中，他創立了道德責任的尺度：人絕不可僅被當作達到目的的手段工具，而必須永遠被尊崇為目的本身。這正是不可侵犯的「人的尊嚴」（德國基本法第一條的基石！）的哲學誕生時刻。\n\n3. 作為生活形態的自律：\n康德的每日日程作息精準得宛如瑞士鐘錶。據說哥尼斯堡的市民根據他每日午後的固定散步來對錶校準時間。這種嚴密的精神自律，至今仍深深映照在德語這門語言的骨骼結構之中。',
      glossary: {
        Erkenntnistheorie: { pos: 'die', meaning: '認識論' },
        'Kopernikanische Wende': { pos: 'die', meaning: '哥白尼式轉變（根本性的視角顛覆）' },
        Menschenwürde: { pos: 'die', meaning: '人性尊嚴（德國基本法核心價值）' },
        unantastbar: { pos: 'adj', meaning: '不可侵犯的、神聖的' },
      },
      questions: [
        {
          id: 'd343_rq1',
          question: 'Welcher ethische Grundsatz Kants bildet heute das Fundament von Artikel 1 des deutschen Grundgesetzes?',
          options: [
            'Dass die Würde des Menschen unantastbar ist und der Mensch niemals bloßes Mittel sein darf. (人的尊嚴不可侵犯，人絕不可僅僅被當作手段)',
            'Dass alle Bürger jeden Tag um 16 Uhr spazieren gehen müssen. (所有公民每天 16 點必須散步)',
            'Dass Uhren verboten werden sollten. (手錶應當被禁止)',
            'Dass man keine Bücher mehr schreiben darf. (不准再寫書)',
          ],
          correctIndex: 0,
          explanation: '康德「人是目的而非手段」的崇高倫理學，直接孕育了當代德國憲法基本法第一條「Die Würde des Menschen ist unantastbar」。',
        },
      ],
    },
    examTip: {
      skill: 'Kultur',
      title: '第 49 週結業寄語：深厚的文化底蘊',
      content: '學德語不只是背單字與應試，更是走進一個重視理性、邏輯、思辨與人道尊嚴的宏大文化世界。下週（第 50 週），我們將把鏡頭拉向廣袤的德語區——走訪奧地利、瑞士與德國南北，領略多姿多彩的 DACH 全域文化！',
    },
  },
};
