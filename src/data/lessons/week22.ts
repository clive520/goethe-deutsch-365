import type { DayLesson } from '../../types/curriculum';

export const week22Lessons: Record<number, DayLesson> = {
  "148": {
    "day": 148,
    "stage": "A2",
    "week": 22,
    "dayOfWeek": 1,
    "title": "Wohnungssuche & Mietanzeigen 德國租屋尋房：看懂房租明細、合租公寓與廣告縮寫",
    "germanTitle": "Wohnungssuche und Mietanzeigen: Kaltmiete, Warmmiete, Kaution und Besichtigung",
    "theme": "德國租屋市場、冷租與暖租（Kaltmiete vs. Warmmiete）、雜費與押金（Nebenkosten & Kaution）、合租公寓（WG-Zimmer）、租屋廣告縮寫（EBK, KM, WM, Wfl.）與看房預約（Wohnungsbesichtigung）",
    "estimatedMinutes": 20,
    "grammar": {
      "title": "租屋財務核心術語、常見廣告縮寫與雙向介系詞方位用法（Wechselpräpositionen）",
      "explanation": "在德國尋找住處（Wohnungssuche）是旅德生活與德語檢定極高頻的關鍵主題。要讀懂租屋廣告並與房東有效溝通，必須掌握三大核心概念：\n1.【冷租、暖租與押金法律規定（Kaltmiete, Warmmiete & Kaution）】：\n  - Die Kaltmiete (Nettomiete): 單純使用房屋本體的純租金，不包含任何水電、暖氣等雜費維護開銷。\n  - Die Nebenkosten (Betriebskosten): 包含大樓中央暖氣（Heizung）、水費（Wasser）、垃圾清運（Müllabfuhr）、大樓管理員清潔（Hausmeister）及公共照明費。通常每月隨房租預繳固定金額（Nebenkostenvorauszahlung），年末房東會進行詳細的實際結算（Nebenkostenabrechnung），多退少補。\n  - Die Warmmiete (Bruttomiete) = Kaltmiete + Nebenkosten（房客每月實際必須轉帳給房東的總租金）。⚠️ 重要提醒：在德國，家用電費（Strom）與網路寬頻（Internet）通常「不包含」在暖租內，需房客自行向電力公司與電信商簽約！\n  - Die Kaution (Mietkaution): 押金，依德國法規（BGB § 551）上限不得超過三個月冷租（maximal 3 Nettokaltmieten），搬離確認房屋無損後退還。\n2.【德國租屋廣告常見縮寫速查指南（Mietanzeigen-Abkürzungen）】：\n  - 2-Zi.-Whg. = 2-Zimmer-Wohnung（兩房公寓；德國算房不算廳，兩房通常指一間臥室與一間客廳，廚房衛浴另外算）\n  - Wfl. / ca. 65 m² = Wohnfläche（居住實坪面積）\n  - KM / WM = Kaltmiete（冷租） / Warmmiete（暖租）\n  - NK / BK = Nebenkosten / Betriebskosten（附加雜費）\n  - KT / Kaut. = Kaution（押金，如 3 KM = 3 Nettokaltmieten）\n  - EBK = Einbauküche（內建流理台系統廚房；德國許多空屋不附廚具，若無標示 EBK 往往連爐具水槽都需要房客自行購買安裝！）\n  - EG / OG / DG = Erdgeschoss（地面層/一樓）、Obergeschoss（樓上，如 2. OG 為三樓）、Dachgeschoss（頂樓閣樓）\n  - WG = Wohngemeinschaft（合租公寓，多人分租不同房間，共用廚衛）\n  - Blk. / Terr. = Balkon（陽台） / Terrasse（露台）\n  - TG / Stellpl. = Tiefgarage（地下車庫） / Stellplatz（室外停車位）\n  - ab sof. = ab sofort（即日起可入住）\n3.【租屋情境中雙向介系詞（Wechselpräpositionen）的動靜態用法】：\n  - 靜態位置（Wo? + Dativ 第三格）：\n    * „Die Wohnung liegt in einem ruhigen Stadtviertel.“（公寓坐落於安靜的城區。）\n    * „Die Waschmaschine steht im Keller.“（洗衣機放在地下室。）\n    * „Auf dem Balkon kann man schön frühstücken.“（在陽台上可以愜意吃早餐。）\n  - 動態方向（Wohin? + Akkusativ 第四格）：\n    * „Wir ziehen nächsten Monat in die neue Wohnung ein.“（我們下個月要搬進新公寓。）\n    * „Stellen Sie bitte die Umzugskartons in den Flur.“（請把搬家紙箱搬進走廊。）",
      "ruleExample": [
        {
          "de": "Die Warmmiete beträgt 850 Euro inklusive Nebenkosten.",
          "zh": "暖租為 850 歐元，包含各項雜費。",
          "note": "Warmmiete = Kaltmiete + Nebenkosten"
        },
        {
          "de": "Die Kaution beträgt zwei Monatskaltmieten und wird vor dem Einzug bezahlt.",
          "zh": "押金為兩個月冷租，並在入住前支付。",
          "note": "maximal 3 Nettokaltmieten (BGB § 551)"
        },
        {
          "de": "Die Wohnung hat eine moderne EBK und liegt im zweiten Obergeschoss.",
          "zh": "該公寓配有現代系統廚房，位於三樓（2. OG）。",
          "note": "EBK = Einbauküche; 2. OG = 2. Obergeschoss"
        },
        {
          "de": "Wir ziehen nächste Woche in eine sonnige 3-Zimmer-Wohnung ein.",
          "zh": "我們下週將搬進一間採光充足的三房公寓。",
          "note": "in + Akkusativ (Wohin? 動態方向)"
        }
      ]
    },
    "vocabulary": [
      {
        "id": "d148_v1",
        "word": "die Kaltmiete",
        "article": "die",
        "plural": "die Kaltmieten",
        "meaning": "冷租金（純房租，不含水暖等雜費）",
        "ipa": "/ˈkaltˌmiːtə/",
        "example": "Die Kaltmiete für die kleine Wohnung beträgt 600 Euro im Monat.",
        "exampleTr": "這間小公寓的冷租金為每月 600 歐元。"
      },
      {
        "id": "d148_v2",
        "word": "die Warmmiete",
        "article": "die",
        "plural": "die Warmmieten",
        "meaning": "暖租金（含水暖雜費之每月實際總租金）",
        "ipa": "/ˈvaʁmˌmiːtə/",
        "example": "Mit allen Nebenkosten liegt die Warmmiete bei genau 780 Euro.",
        "exampleTr": "加上所有雜費後，暖租金正好是 780 歐元。"
      },
      {
        "id": "d148_v3",
        "word": "die Nebenkosten",
        "article": "die",
        "plural": "die Nebenkosten (nur Plural)",
        "meaning": "雜費、物業管理維護附加費用",
        "ipa": "/ˈneːbn̩ˌkɔstn̩/",
        "example": "In den Nebenkosten sind Heizung, Wasser und Müllabfuhr enthalten.",
        "exampleTr": "暖氣、用水與垃圾清運費用均已包含在雜費中。"
      },
      {
        "id": "d148_v4",
        "word": "die Kaution",
        "article": "die",
        "plural": "die Kautionen",
        "meaning": "租屋押金（通常為 2 至 3 個月冷租）",
        "ipa": "/kaʊ̯ˈt͡si̯oːn/",
        "example": "Vor der Schlüsselübergabe muss der Mieter die Kaution überweisen.",
        "exampleTr": "交鑰匙之前，房客必須匯出押金。"
      },
      {
        "id": "d148_v5",
        "word": "die Wohnungsbesichtigung",
        "article": "die",
        "plural": "die Wohnungsbesichtigungen",
        "meaning": "看房、預約實地參觀公寓",
        "ipa": "/ˈvoːnʊŋsbəˌzɪçtɪɡʊŋ/",
        "example": "Wir haben am Samstag um 14 Uhr eine Wohnungsbesichtigung vereinbart.",
        "exampleTr": "我們約好在週六下午兩點實地參觀公寓。"
      },
      {
        "id": "d148_v6",
        "word": "die Einbauküche",
        "article": "die",
        "plural": "die Einbauküchen",
        "meaning": "內建流理台系統廚房（常見縮寫為 EBK）",
        "ipa": "/ˈaɪ̯nbaʊ̯ˌkʏçə/",
        "example": "Die Wohnung verfügt über eine moderne Einbauküche mit Elektrogeräten.",
        "exampleTr": "該公寓配有一套附帶電器的現代化系統廚房。"
      },
      {
        "id": "d148_v7",
        "word": "das WG-Zimmer",
        "article": "das",
        "plural": "die WG-Zimmer",
        "meaning": "合租公寓房間（Wohngemeinschaft）",
        "ipa": "/veːˈɡeːˌt͡sɪmɐ/",
        "example": "Als Student sucht er ein bezahlbares WG-Zimmer in Universitätsnähe.",
        "exampleTr": "身為大學生，他正在大學附近尋找一間負擔得起的合租公寓房間。"
      },
      {
        "id": "d148_v8",
        "word": "die Wohnfläche",
        "article": "die",
        "plural": "die Wohnflächen",
        "meaning": "居住實用面積（平方公尺，縮寫為 Wfl.）",
        "ipa": "/ˈvoːnˌflɛçə/",
        "example": "Die Wohnung bietet eine Wohnfläche von insgesamt 65 Quadratmetern.",
        "exampleTr": "這間公寓提供了總共 65 平方公尺的居住實用面積。"
      }
    ],
    "listening": {
      "title": "Hörverständnis: Wohnungsbesichtigung in Berlin (在柏林預約實地看房)",
      "situation": "Herr Chen besichtigt eine 2-Zimmer-Wohnung in Berlin-Mitte gemeinsam mit der Vermieterin Frau Weber.",
      "dialogue": [
        {
          "speaker": "Frau Weber",
          "de": "Guten Tag, Herr Chen! Schön, dass Sie pünktlich sind. Kommen Sie doch bitte herein. Das hier ist der Flur, und geradeaus geht es direkt in das große Wohnzimmer.",
          "zh": "午安，Chen 先生！真高興您很準時。請進吧。這裡是走廊玄關，正前方直走就是寬敞的客廳。"
        },
        {
          "speaker": "Herr Chen",
          "de": "Guten Tag, Frau Weber! Vielen Dank für den freundlichen Empfang. Die Wohnung wirkt auf den ersten Blick sehr hell. Wie groß ist die gesamte Wohnfläche?",
          "zh": "午安，Weber 女士！非常感謝您的熱情接待。這間公寓第一眼看起來採光極佳。整體的居住面積有多大呢？"
        },
        {
          "speaker": "Frau Weber",
          "de": "Die Wohnfläche beträgt insgesamt 62 Quadratmeter. Vom Wohnzimmer aus haben Sie einen direkten Zugang zum Südbalkon mit Blick auf den ruhigen Innenhof.",
          "zh": "居住面積總共有 62 平方公尺。從客廳您可以直接通往朝南的陽台，俯瞰安靜的中庭。"
        },
        {
          "speaker": "Herr Chen",
          "de": "Das ist wunderbar. Und wie sieht es mit der Küche aus? Bleibt die Einbauküche in der Wohnung, oder muss ich eine neue kaufen?",
          "zh": "太棒了。那廚房的情況如何呢？這套系統廚房會留在屋內，還是我必須自己買一套新的？"
        },
        {
          "speaker": "Frau Weber",
          "de": "Die Einbauküche mit Herd, Kühlschrank und Spülmaschine gehört zur Wohnung und ist im Mietpreis inbegriffen. Sie müssen keinen Abschlag zahlen.",
          "zh": "這套附有瓦斯爐、冰箱和洗碗機的系統廚房屬於公寓固定配備，已包含在租金內。您不需要額外支付頂讓折舊費。"
        },
        {
          "speaker": "Herr Chen",
          "de": "Sehr gut! In der Online-Anzeige stand, dass die Kaltmiete 720 Euro beträgt. Wie hoch sind die Nebenkosten und die Kaution?",
          "zh": "太好了！線上廣告提到冷租為 720 歐元。雜費與押金分別是多少呢？"
        },
        {
          "speaker": "Frau Weber",
          "de": "Die monatliche Nebenkostenvorauszahlung liegt bei 180 Euro inklusive Heizung und Warmwasser. Die Warmmiete beträgt also 900 Euro. Die Kaution liegt bei drei Monatskaltmieten, also 2160 Euro.",
          "zh": "每月預繳雜費為 180 歐元，含暖氣與熱水。因此暖租總計是 900 歐元。押金為三個月冷租，共 2160 歐元。"
        },
        {
          "speaker": "Herr Chen",
          "de": "Verstehe. Das passt genau in mein Budget. Ab wann wäre die Wohnung bezugsfrei?",
          "zh": "明白了。這完全符合我的預算。請問這間公寓最快何時可以起租入住？"
        },
        {
          "speaker": "Frau Weber",
          "de": "Die Wohnung ist ab dem ersten nächsten Monats frei. Wenn Sie möchten, können Sie mir Ihre Selbstauskunft und die Gehaltsnachweise per E-Mail schicken.",
          "zh": "公寓從下個月一日起即可入住。如果您有意願，可以將個人租屋申請問卷與薪資證明以電子郵件寄給我。"
        }
      ],
      "questions": [
        {
          "id": "d148_q1",
          "question": "Wie hoch ist die Warmmiete der besichtigten Wohnung? (所參觀公寓的暖租金是多少？)",
          "options": [
            "720 Euro (720 歐元)",
            "900 Euro (900 歐元)",
            "2160 Euro (2160 歐元)",
            "180 Euro (180 歐元)"
          ],
          "correctIndex": 1,
          "explanation": "Frau Weber 解釋：「Kaltmiete 720 Euro + Nebenkosten 180 Euro = Warmmiete 900 Euro」。"
        },
        {
          "id": "d148_q2",
          "question": "Muss Herr Chen für die Einbauküche extra bezahlen? (Chen 先生需要為系統廚房額外付費嗎？)",
          "options": [
            "Ja, er muss einen hohen Abschlag an den Vormieter zahlen. (需要，必須付給前房客高額折讓費)",
            "Nein, die Küche gehört zur Wohnung und ist im Mietpreis inbegriffen. (不需要，廚房附屬在房屋內且已包含在租金中)",
            "Er muss selbst eine eigene Küche kaufen und einbauen. (他必須自己購買並組裝廚房)",
            "Die Küche wird vor dem Einzug abgebaut. (廚房會在入住前被拆除)"
          ],
          "correctIndex": 1,
          "explanation": "女房東明確說明：「Die Einbauküche ... ist im Mietpreis inbegriffen. Sie müssen keinen Abschlag zahlen.」。"
        }
      ]
    },
    "speaking": {
      "title": "Sprechtraining: Fragen bei der Wohnungsbesichtigung stellen (看房時的重要提問)",
      "instruction": "請依照德語語調與真實租屋情境，大聲朗讀下列看房核心問句與表達：",
      "targetSentences": [
        {
          "id": "d148_s1",
          "de": "Wie hoch sind die Nebenkosten, und was ist alles darin enthalten?",
          "zh": "雜費是多少？裡面都包含了哪些項目？",
          "phoneticTip": "Nebenkosten 重音在第一音節，enthalten 尾音輕讀。"
        },
        {
          "id": "d148_s2",
          "de": "Ist die Einbauküche im Mietpreis inbegriffen, oder muss man einen Abschlag zahlen?",
          "zh": "系統廚房是否包含在租金內，還是必須支付折讓頂讓費？",
          "phoneticTip": "Einbauküche [ˈaɪ̯nbaʊ̯ˌkʏçə] 注意 ü 的發音。"
        },
        {
          "id": "d148_s3",
          "de": "Gibt es zu der Wohnung auch ein Kellerabteil und einen Stellplatz fürs Auto?",
          "zh": "公寓是否有附屬地下室儲藏隔間以及自用車停車位？",
          "phoneticTip": "Kellerabteil 複合字前綴重讀。"
        },
        {
          "id": "d148_s4",
          "de": "Die Kaution beträgt drei Monatskaltmieten und wird vor dem Einzug überwiesen.",
          "zh": "押金為三個月冷租，並在入住前轉帳匯款。",
          "phoneticTip": "Monatskaltmieten [ˈmoːnatsˌkaltmiːtn̩] 慢速清晰吐字。"
        }
      ],
      "rolePlay": {
        "partnerName": "Frau Weber",
        "partnerRole": "Vermieterin (女房東)",
        "scenario": "您正在參觀一間心儀的兩房公寓，房東詢問您的個人職業狀態以及預計何時入住。",
        "promptDe": "Die Wohnung ist ab dem ersten nächsten Monats frei. Wann möchten Sie einziehen, und was machen Sie beruflich?",
        "promptZh": "這間公寓從下個月一日起可起租。您希望何時入住？您的職業是什麼呢？",
        "sampleReplies": [
          "Ich arbeite als Ingenieur mit einem unbefristeten Arbeitsvertrag und würde gerne zum ersten nächsten Monats einziehen.",
          "Ich mache derzeit ein Masterstudium an der Universität und kann ab sofort einziehen. Meine Eltern bürgen für die Miete."
        ]
      }
    },
    "reading": {
      "title": "Leseverständnis: Wohnungsanzeige im Online-Portal (租屋入口網站房源廣告)",
      "documentType": "Anzeige",
      "content": "IMMOBILIENPORTAL BERLIN-BRANDENBURG\nOBJEKT-NR.: 40829-BER\n\nAttraktive 2,5-Zimmer-Wohnung in Berlin-Prenzlauer Berg\n\nObjektbeschreibung:\nHelle, frisch renovierte Altbauwohnung im 2. OG eines gepflegten Mehrfamilienhauses. Die Wohnfläche beträgt ca. 68 m² und verteilt sich auf ein geräumiges Wohnzimmer, ein ruhiges Schlafzimmer sowie ein halbes Zimmer (ideal als Arbeitszimmer).\n\nAusstattung:\n- Hochwertiger Parkettboden\n- Modernes Wannenbad mit Fenster\n- Voll ausgestattete Einbauküche (EBK) mit Markengeräten\n- Sonniger Südbalkon (Blk.) mit Gartenblick\n- Eigenes Kellerabteil vorhanden\n- Fahrradkeller zur gemeinschaftlichen Nutzung\n\nMietkonditionen:\n- Kaltmiete (KM): 750,00 €\n- Nebenkosten (NK): 190,00 € (inkl. Heizung und Warmwasser)\n- Warmmiete (WM): 940,00 €\n- Kaution (KT): 3 Monatskaltmieten (2.250,00 €)\n- Bezugsfrei: ab sofort\n- Haustiere: nach Vereinbarung\n- Tiefgaragenstellplatz (TG): optional für 70,00 €/Monat anmietbar\n\nKontakt & Bewerbung:\nBitte senden Sie Ihre vollständigen Bewerbungsunterlagen (Mieterselbstauskunft, SCHUFA-Auskunft, die letzten drei Gehaltsnachweise) an: verwaltung@immobilien-schmidt.de.",
      "translation": "柏林-布蘭登堡房產入口網站\n物件編號：40829-BER\n\n柏林普倫茨勞貝格區吸引人的 2.5 房優質公寓\n\n物件說明：\n採光明亮、剛翻新的老宅公寓，位於維護良好的集合住宅三樓（2. OG）。居住面積約 68 平方公尺，規劃有一間寬敞客廳、一間安靜臥室以及半個房間（非常適合作為書房工作室）。\n\n配備設施：\n- 高品質實木地板\n- 帶窗戶的現代浴缸衛浴\n- 配備齊全的系統廚房（EBK）附品牌家電\n- 陽光充足的南向陽台（Blk.）享有花園景致\n- 備有獨立地下室儲藏隔間\n- 備有住戶共用自行車停放地下室\n\n租賃條件：\n- 冷租金（KM）：750.00 歐元\n- 雜費（NK）：190.00 歐元（含暖氣與熱水）\n- 暖租金（WM）：940.00 歐元\n- 押金（KT）：3 個月冷租（2,250.00 歐元）\n- 起租時間：即日起可入住\n- 寵物：面議\n- 地下車庫車位（TG）：可自選額外承租，每月 70.00 歐元\n\n聯絡與申請：\n請將完整申請文件（租客自評問卷、SCHUFA 信用紀錄、近三個月薪資明細）寄至：verwaltung@immobilien-schmidt.de。",
      "glossary": {
        "Altbauwohnung": {
          "pos": "die",
          "meaning": "老洋房公寓（常具高挑天花板風格）"
        },
        "Wannenbad": {
          "pos": "das",
          "meaning": "附浴缸之衛浴設備"
        },
        "Bezugsfrei": {
          "pos": "adj",
          "meaning": "隨時可入住騰空狀態"
        },
        "Abschlag": {
          "pos": "der",
          "meaning": "家具折舊頂讓費"
        }
      },
      "questions": [
        {
          "id": "d148_rq1",
          "question": "Wie hoch ist die monatliche Gesamtmiete (Warmmiete) ohne Autostellplatz? (不含車位的情況下，每月總租金/暖租是多少？)",
          "options": [
            "750,00 Euro (750 歐元)",
            "940,00 Euro (940 歐元)",
            "2.250,00 Euro (2250 歐元)",
            "1.010,00 Euro (1010 歐元)"
          ],
          "correctIndex": 1,
          "explanation": "廣告中明確標示「Warmmiete (WM): 940,00 €」（冷租 750 € + 雜費 190 €）。"
        },
        {
          "id": "d148_rq2",
          "question": "Welche Aussage über die Wohnung ist laut Anzeige RICHTIG? (關於該公寓，哪一項敘述正確？)",
          "options": [
            "Die Wohnung liegt im Dachgeschoss und hat keinen Balkon. (公寓位於閣樓且無陽台)",
            "Die Einbauküche (EBK) ist vorhanden und die Wohnung ist ab sofort frei. (附有系統廚房且即日起隨時可入住)",
            "Haustiere sind strengstens verboten. (嚴格禁止飼養寵物)",
            "Der Tiefgaragenstellplatz ist kostenlos inbegriffen. (地下車庫停車位免費包含)"
          ],
          "correctIndex": 1,
          "explanation": "配備註明「Voll ausgestattete Einbauküche (EBK)」且租賃條件載明「Bezugsfrei: ab sofort」。"
        }
      ]
    },
    "examTip": {
      "skill": "Lesen",
      "title": "A2 閱讀理解技巧：秒破租屋廣告縮寫與算術陷阱",
      "content": "在歌德 A2 閱讀測驗第三部分（Anzeigen zuordnen）中，題目常出現預算上限要求（例如：「Frau Müller sucht eine Wohnung bis maximal 900 Euro warm」）。請特別注意：題目若指明「warm」，一定要比對包含 Nebenkosten 的總金額（Warmmiete），切莫把 Kaltmiete 誤看成總價！此外，EBK（Einbauküche）、Blk.（Balkon）與 EG / OG 都是高頻篩選關鍵字。"
    }
  },
  "149": {
    "day": 149,
    "stage": "A2",
    "week": 22,
    "dayOfWeek": 2,
    "title": "Adjektivdeklination Typ 3: Ohne Artikel 零冠詞形容詞變化：日常飲食與強變化字尾",
    "germanTitle": "Adjektivdeklination ohne Artikel (Typ 3): kalter Kaffee, frische Milch und deutsches Bier",
    "theme": "零冠詞（Nullartikel）形容詞強變化字尾規律（-er, -e, -es, -e）、物質與不可數名詞修飾、第二格特殊結尾（-en）、人名所有格（Genitiv-s bei Namen）",
    "estimatedMinutes": 20,
    "grammar": {
      "title": "零冠詞形容詞強變化規律（Starke Deklination）與人名所有格（Genitiv-s）",
      "explanation": "在德語中，當名詞前面「沒有任何冠詞（ weder bestimmter noch unbestimmter Artikel ）」時，形容詞必須採取「強變化（Starke Deklination）」。這是歌德 A2 文法中最具特色也最常考的板塊：\n1.【何時使用零冠詞（Nullartikel）？】：\n  - 不可數物質、食材與飲品：Kaffee, Milch, Tee, Wasser, Bier, Wein, Fleisch, Brot, Käse\n  - 抽象名詞、情感情緒與祝福用語：Geduld（耐心）、Mut（勇氣）、Freude（喜悅）；如「Gute Besserung!」（祝早日康復！）、「Viel Erfolg!」（祝順利成功！）、「Schönes Wochenende!」（週末愉快！）\n  - 複數名詞無特定指涉時（因為 ein 沒有複數形，如「Wir suchen billige Wohnungen.」）\n  - 食譜材料清單、菜單與商品標籤：「Frische Vollmilch」、「Kalter Kaffee」、「Deutsches Bier」\n2.【零冠詞形容詞強變化字尾規則（Starke Deklination）】：\n  - 核心邏輯：名詞前既然「沒有冠詞」指引性別與格位，形容詞就必須「挑起大樑」，直接繼承定冠詞（der, die, das, die）的特徵尾綴！\n  - 陽性名詞（Maskulin）：\n    * Nominativ: kalt-er Kaffee (同 der)\n    * Akkusativ: kalt-en Kaffee (同 den)\n    * Dativ: kalt-em Kaffee (同 dem)\n    * Genitiv: kalt-en Kaffees (⚠️ 考點大陷阱！不是 -es 而是 -en！因為名詞本身已有 -s / -es 標示第二格，形容詞為了避免連續發重音 -s，弱化為 -en)\n  - 陰性名詞（Feminin）：\n    * Nominativ: frisch-e Milch (同 die)\n    * Akkusativ: frisch-e Milch (同 die)\n    * Dativ: frisch-er Milch (同 der)\n    * Genitiv: frisch-er Milch (同 der)\n  - 中性名詞（Neutrum）：\n    * Nominativ: deutsch-es Bier (同 das)\n    * Akkusativ: deutsch-es Bier (同 das)\n    * Dativ: deutsch-em Bier (同 dem)\n    * Genitiv: deutsch-en Bieres (⚠️ 考點大陷阱！同樣是 -en 而非 -es，如: der Geschmack guten Bieres)\n  - 複數名詞（Plural）：\n    * Nominativ: heiß-e Sommertage (同 die)\n    * Akkusativ: heiß-e Sommertage (同 die)\n    * Dativ: heiß-en Sommertagen (同 den, 名詞補 -n)\n    * Genitiv: heiß-er Sommertage (同 der)\n3.【人名所有格（Genitiv-s bei Eigennamen）】：\n  - 德語人名所有格直接在名字後加 -s，且「絕對不加撇號（Kein Apostroph!）」：\n    * „Annas neue Wohnung gefällt mir sehr.“（安娜的新公寓我很喜歡。）\n    * „Peters Bruder hilft uns beim Umzug.“（彼得的哥哥幫我們搬家。）\n  - 例外：若人名結尾本身即為 s, ß, z, x，則在名字後加一個撇號代替 -s：\n    * „Lukas' Zimmer ist sehr hell.“ / „Max' Katze schläft auf dem Sofa.“",
      "ruleExample": [
        {
          "de": "Morgens trinke ich am liebsten heißen Tee mit frischer Zitrone.",
          "zh": "早晨我最喜歡喝熱茶搭配新鮮檸檬。",
          "note": "heißen (Mask. Akk. -en), frischer (Fem. Dat. -er)"
        },
        {
          "de": "In Bayern trinkt man gerne kühles, deutsches Bier aus großen Gläsern.",
          "zh": "在巴伐利亞，人們喜歡用大玻璃杯喝清涼的德國啤酒。",
          "note": "kühles / deutsches (Neut. Akk. -es)"
        },
        {
          "de": "Trotz starken Regens gingen die beiden Freunde im Park spazieren.",
          "zh": "儘管下著大雨，兩位朋友依然在公園裡散步。",
          "note": "starken (Mask. Gen. 零冠詞例外加 -en!)"
        },
        {
          "de": "Annas WG-Zimmer hat einen wunderschönen Ausblick auf den Park.",
          "zh": "安娜的合租房享有面朝公園的絕美景致。",
          "note": "Annas (人名所有格，不加撇號)"
        }
      ]
    },
    "vocabulary": [
      {
        "id": "d149_v1",
        "word": "frisch",
        "meaning": "新鮮的、清新的",
        "ipa": "/fʁɪʃ/",
        "example": "Wir kaufen jeden Samstag frisches Gemüse auf dem Wochenmarkt.",
        "exampleTr": "我們每週六都在傳統市集購買新鮮蔬菜。"
      },
      {
        "id": "d149_v2",
        "word": "kalt",
        "meaning": "冰冷的、寒涼的",
        "ipa": "/kalt/",
        "example": "Im Sommer trinke ich gerne kalten Eistee mit Minze.",
        "exampleTr": "夏天我喜歡喝加了薄荷的冰涼冰茶。"
      },
      {
        "id": "d149_v3",
        "word": "heiß",
        "meaning": "滾燙的、酷熱的",
        "ipa": "/haɪ̯s/",
        "example": "Vorsicht, heißer Kaffee verbrennt leicht die Zunge!",
        "exampleTr": "小心，滾燙的咖啡很容易燙到舌頭！"
      },
      {
        "id": "d149_v4",
        "word": "süß",
        "meaning": "甜的、香甜可人的",
        "ipa": "/zyːs/",
        "example": "Süßer Nachtisch nach dem Abendessen ist in vielen Ländern beliebt.",
        "exampleTr": "晚餐後的甜點在許多國家都很受歡迎。"
      },
      {
        "id": "d149_v5",
        "word": "dunkel",
        "meaning": "深色的、昏暗的（變化時省略 e: dunkler, dunkles）",
        "ipa": "/ˈdʊŋkl̩/",
        "example": "Dunkles Vollkornbrot ist sehr gesund und enthält viele Ballaststoffe.",
        "exampleTr": "深色全麥麵包非常健康，含有豐富的膳食纖維。"
      },
      {
        "id": "d149_v6",
        "word": "warm",
        "meaning": "溫暖的、溫熱的",
        "ipa": "/vaʁm/",
        "example": "Ein Teller warme Suppe tut bei Erkältung richtig gut.",
        "exampleTr": "感冒時來一碗熱湯真的非常舒服。"
      },
      {
        "id": "d149_v7",
        "word": "die Zutat",
        "article": "die",
        "plural": "die Zutaten",
        "meaning": "食材、配料、原料",
        "ipa": "/ˈt͡suːˌtaːt/",
        "example": "Für diesen Kuchen brauchen wir nur fünf einfache Zutaten.",
        "exampleTr": "做這個蛋糕我們只需要五種簡單的食材。"
      },
      {
        "id": "d149_v8",
        "word": "das Getränk",
        "article": "das",
        "plural": "die Getränke",
        "meaning": "飲料、飲品",
        "ipa": "/ɡəˈtʁɛŋk/",
        "example": "Kühle Getränke stehen im Kühlschrank für die Gäste bereit.",
        "exampleTr": "清涼的飲料已經在冰箱裡為客人準備好了。"
      }
    ],
    "listening": {
      "title": "Hörverständnis: Kochen in der WG-Küche (合租公寓廚房烹飪與食材採買)",
      "situation": "Lukas und Sophie planen in ihrer WG-Küche ein Abendessen für ihre neuen Nachbarn und überprüfen die Zutatenliste.",
      "dialogue": [
        {
          "speaker": "Lukas",
          "de": "Hallo Sophie! Unsere neuen Nachbarn aus dem dritten Stock kommen heute Abend zum Essen. Was kochen wir denn Schönes?",
          "zh": "哈囉 Sophie！我們三樓的新鄰居今晚要來吃晚餐。我們要做什麼好吃的料理呢？"
        },
        {
          "speaker": "Sophie",
          "de": "Wie wäre es mit einem klassischen deutschen Abendbrot? Ich dachte an frisches Vollkornbrot, guten Käse und knackigen Salat.",
          "zh": "來一頓經典的德式冷食晚餐（Abendbrot）如何？我想準備新鮮全麥麵包、優質乳酪和爽脆生菜沙拉。"
        },
        {
          "speaker": "Lukas",
          "de": "Gute Idee! Wir haben noch dunkles Roggenbrot vom Bäcker da. Aber wir brauchen noch kalte Getränke. Trinken die Nachbarn deutsches Bier oder lieber italienischen Rotwein?",
          "zh": "好主意！我們這裡還有從麵包店買來的深色裸麥麵包。但我們還需要冷飲。鄰居是喝德國啤酒，還是更喜歡義大利紅酒？"
        },
        {
          "speaker": "Sophie",
          "de": "Frau Meier trinkt gerne kühles Bier, und Herr Wagner bevorzugt trockenen Rotwein. Und für uns sollten wir noch frische Milch und Orangensaft besorgen.",
          "zh": "Meier 女士喜歡喝清涼啤酒，Wagner 先生則偏好不甜的乾紅酒。至於我們自己，應該再買些鮮奶與柳橙汁。"
        },
        {
          "speaker": "Lukas",
          "de": "Perfekt. Ich schreibe alles auf den Einkaufszettel: frisches Brot, verschiedene Käsesorten, kaltes Bier und süßer Nachtisch.",
          "zh": "太好了。我把所有東西寫在採買便條上：新鮮麵包、多種乳酪、冰啤酒和甜點。"
        },
        {
          "speaker": "Sophie",
          "de": "Vergiss bitte nicht: Zum Kochen brauchen wir auch noch gutes Olivenöl und frische Kräuter vom Wochenmarkt!",
          "zh": "請別忘了：做菜我們還需要優質橄欖油以及從傳統市場買來的新鮮香草香料！"
        },
        {
          "speaker": "Lukas",
          "de": "Alles klar, ich gehe gleich los. Mit so vielen leckeren Sachen wird das sicher ein gemütlicher Abend mit den Nachbarn.",
          "zh": "明白，我這就出發。有這麼多美味的好料，今晚和鄰居相聚一定會很溫馨愜意。"
        }
      ],
      "questions": [
        {
          "id": "d149_q1",
          "question": "Was planen Lukas und Sophie für das Abendessen? (Lukas 和 Sophie 晚餐計畫準備什麼？)",
          "options": [
            "Sie bestellen eine teure Pizza im Restaurant. (在餐廳訂昂貴披薩)",
            "Ein traditionelles deutsches Abendbrot mit frischem Brot und Käse. (傳統德式晚餐，搭配新鮮麵包與乳酪)",
            "Sie kochen eine heiße Suppe aus der Dose. (煮罐頭熱湯)",
            "Sie gehen mit den Nachbarn in eine Bar. (和鄰居去酒吧)"
          ],
          "correctIndex": 1,
          "explanation": "對話中 Sophie 提議：「Wie wäre es mit einem klassischen deutschen Abendbrot? Ich dachte an frisches Vollkornbrot, guten Käse...」。"
        },
        {
          "id": "d149_q2",
          "question": "Welches Getränk bevorzugt Herr Wagner? (Wagner 先生偏好哪種飲品？)",
          "options": [
            "Heißen Kakao (熱可可)",
            "Kühles deutsches Bier (清涼的德國啤酒)",
            "Trockenen Rotwein (不甜的乾紅酒)",
            "Frische Milch (鮮奶)"
          ],
          "correctIndex": 2,
          "explanation": "Sophie 明確提到：「Frau Meier trinkt gerne kühles Bier, und Herr Wagner bevorzugt trockenen Rotwein.」。"
        }
      ]
    },
    "speaking": {
      "title": "Sprechtraining: Vorlieben bei Speisen und Getränken beschreiben (描述喜好的飲食與零冠詞形容詞)",
      "instruction": "請留意零冠詞形容詞的強變化字尾（-er, -e, -es, -en），大聲流暢朗讀：",
      "targetSentences": [
        {
          "id": "d149_s1",
          "de": "Ich trinke morgens am liebsten starken Kaffee mit heißer Milch.",
          "zh": "我早晨最喜歡喝濃咖啡加熱牛奶。",
          "phoneticTip": "starken [ˈʃtaʁkn̩] 陽性第四格加 -en；heißer 陰性第三格加 -er。"
        },
        {
          "id": "d149_s2",
          "de": "Wir essen jeden Sonntag frisches Brot und trinken kühlen Orangensaft.",
          "zh": "我們每個週日都吃新鮮麵包，喝清涼柳橙汁。",
          "phoneticTip": "frisches [ˈfʁɪʃəs] 中性第四格加 -es；kühlen 陽性第四格加 -en。"
        },
        {
          "id": "d149_s3",
          "de": "Trotz schlechten Wetters haben wir gestern im Garten gegrillt.",
          "zh": "儘管天氣不好，我們昨天還是在花園烤肉了。",
          "phoneticTip": "schlechten [ˈʃlɛçtn̩] 中性第二格零冠詞例外加 -en。"
        },
        {
          "id": "d149_s4",
          "de": "Lukas' neue Wohnung hat eine wunderschöne Aussicht ins Grüne.",
          "zh": "盧卡斯的新公寓享有面朝綠地的絕美視野。",
          "phoneticTip": "Lukas' 人名以 s 結尾僅加撇號，不加第二個 s。"
        }
      ],
      "rolePlay": {
        "partnerName": "Goethe-Prüfer",
        "partnerRole": "歌德考官 (A2 口說 Teil 2 / Thema: Essen & Trinken)",
        "scenario": "考官在口說測驗中詢問您平時喜歡吃什麼早餐與喝什麼飲品。",
        "promptDe": "Was frühstücken Sie normalerweise am Wochenende, und welche Getränke mögen Sie?",
        "promptZh": "您週末通常吃什麼早餐？您喜歡哪些飲品？",
        "sampleReplies": [
          "Am Wochenende esse ich gerne frisches Brot mit guter Butter und trinke dazu heißen Kaffee mit Milch.",
          "Ich bevorzuge grünen Tee und esse dazu leckeres Müsli mit frischem Obst."
        ]
      }
    },
    "reading": {
      "title": "Leseverständnis: Rezept & Einkaufsliste für das Sonntagsfrühstück (週日早餐食譜與食材備忘清單)",
      "documentType": "Artikel",
      "content": "KULINARISCHES WOCHENENDE: DAS PERFEKTE DEUTSCHE FRÜHSTÜCK\n\nEin traditionelles deutsches Sonntagsfrühstück braucht Zeit, Ruhe und vor allem hochwertige Zutaten. Viele Familien kaufen sonntags morgens frische Brötchen beim Bäcker um die Ecke.\n\nZutatenliste für vier Personen:\n- Frisches Vollkornbrot und knusprige Brötchen\n- Guter, gereifter Bergkäse aus Süddeutschland\n- Magerer Schinken und feine Salami\n- Frische Eier von glücklichen Hühnern\n- Süße Erdbeermarmelade und cremiger Honig\n- Heiße Schokolade für die Kinder\n- Starker, frisch gemahlener Filterkaffee für die Erwachsenen\n- Kühle Vollmilch und frisch gepresster Orangensaft\n\nZubereitungstipps:\nKochen Sie die Eier genau vier Minuten für ein weiches Eigelb. Schneiden Sie das Brot in dicke Scheiben und servieren Sie es mit weicher Butter. Guten Appetit und einen entspannten Sonntag!",
      "translation": "週末美食天地：完美的德國週日早餐\n\n一頓傳統的德國週日早餐需要時間、從容，尤其是高品質的食材。許多家庭會在週日清晨到轉角麵包店購買剛出爐的新鮮小麵包。\n\n四人份食材清單：\n- 新鮮全麥麵包與香脆小圓麵包\n- 來自南德的優質熟成高山乳酪\n- 精瘦火腿與細緻義大利臘腸\n- 來自放養母雞的新鮮雞蛋\n- 香甜草莓果醬與濃郁蜂蜜\n- 適合孩子們的熱巧克力\n- 適合大人們的濃醇現磨滴濾咖啡\n- 清涼全脂鮮奶與新鮮現榨柳橙汁\n\n料理小秘訣：\n將雞蛋精確水煮四分鐘即可得到半熟溏心蛋黃。將麵包切成厚片，搭配軟化奶油享用。祝您胃口大開，度過一個放鬆的週日！",
      "glossary": {
        "knusprig": {
          "pos": "adj",
          "meaning": "酥脆的、香脆的"
        },
        "gereift": {
          "pos": "adj",
          "meaning": "（乳酪、酒類）經過陳年熟成的"
        },
        "Eigelb": {
          "pos": "das",
          "meaning": "蛋黃"
        },
        "Zubereitung": {
          "pos": "die",
          "meaning": "烹調製備方式"
        }
      },
      "questions": [
        {
          "id": "d149_rq1",
          "question": "Welche Zutat wird für die Kinder zum Frühstück empfohlen? (推薦給孩子們的早餐飲品是什麼？)",
          "options": [
            "Starker Filterkaffee (濃郁滴濾咖啡)",
            "Heiße Schokolade (熱巧克力)",
            "Kühles Bier (冰啤酒)",
            "Trockener Rotwein (乾紅酒)"
          ],
          "correctIndex": 1,
          "explanation": "清單明確寫出：「Heiße Schokolade für die Kinder」。"
        },
        {
          "id": "d149_rq2",
          "question": "Wie lange sollen die Eier für ein weiches Eigelb kochen? (想要半熟溏心蛋黃，雞蛋應該煮多久？)",
          "options": [
            "Genau zwei Minuten (整整兩分鐘)",
            "Genau vier Minuten (精確四分鐘)",
            "Zehn Minuten (十分鐘)",
            "Eine halbe Stunde (半小時)"
          ],
          "correctIndex": 1,
          "explanation": "料理訣竅記載：「Kochen Sie die Eier genau vier Minuten für ein weiches Eigelb.」。"
        }
      ]
    },
    "examTip": {
      "skill": "Schreiben",
      "title": "A2 寫作精要：零冠詞形容詞結尾千萬別一律填 -e",
      "content": "許多華語考生受到「第一型（定冠詞後）」影響，遇到名詞前沒冠詞時也盲目加 -e。請牢記：零冠詞是「強變化」，形容詞尾巴必須擔當定冠詞指路明燈！陽性主格加 -er（guter Kaffee），中性加 -es（kühles Bier），第三格更是明確的 -em, -er, -em（mit frischem Obst）。唯一的特殊例外是陽性/中性第二格加 -en（wegen starken Regens）。"
    }
  },
  "150": {
    "day": 150,
    "stage": "A2",
    "week": 22,
    "dayOfWeek": 3,
    "title": "Hausordnung & Ruhezeiten 住戶公約與安寧時段：公寓生活守則與禁令表達",
    "germanTitle": "Hausordnung und Ruhezeiten: Nachtruhe, Mittagsruhe und Regeln im Mietshaus",
    "theme": "住戶公約（die Hausordnung）、夜間安寧時段（die Nachtruhe ab 22 Uhr）、午休時間（die Mittagsruhe）、公共空間規範（樓梯間、地下室、自行車停放）、規定與禁令表達句型（Es ist verboten, zu... / Man darf nicht...）",
    "estimatedMinutes": 20,
    "grammar": {
      "title": "規定、義務與禁令表達法（Regeln, Pflichten und Verbote im Alltag）",
      "explanation": "德國被稱為「秩序與法治的國度（Rechts- und Ordnungssinn）」。在任何德國集合式公寓（Mehrfamilienhaus）租屋，租約中必定附有一份具備法律效力的【住戶公約（die Hausordnung）】。掌握表達規定與禁令的句型是日常生活與 A2 考題的重中之重：\n1.【使用情態動詞表達義務與禁止（Modalverben）】：\n  - müssen（必須）：客觀法規或公約強行規範\n    * „Alle Mieter müssen die Ruhezeiten strikt einhalten.“（所有租客都必須嚴格遵守安寧時段。）\n    * „Die Haupteingangstür muss ab 22:00 Uhr abgeschlossen werden.“（大樓大門從 22:00 起必須上鎖。）\n  - dürfen nicht / kein（不准、嚴禁）：明確禁止某項行為\n    * „Nach 22:00 Uhr darf man keine laute Musik mehr hören.“（晚間 22:00 後不得再聽大聲音樂。）\n    * „Im Treppenhaus dürfen keine Fahrräder oder Kinderwagen abgestellt werden.“（樓梯間內不得停放自行車或嬰兒推車。）\n  - sollen（應當、理應）：建議或公約要求之道德義務\n    * „Bei längerer Abwesenheit soll der Vermieter informiert werden.“（若長時間不在家應當通知房東。）\n2.【使用帶 zu 不定詞之句型結構（Infinitiv mit zu）】：\n  - Es ist verboten / untersagt, ... zu + Infinitiv（做...是禁止的）：\n    * „Es ist verboten, auf dem Balkon mit offenem Holzkohlefeuer zu grillen.“（禁止在陽台使用露天木炭生火烤肉。）\n  - Es ist nicht gestattet / erlaubt, ... zu + Infinitiv（做...是不被許可的）：\n    * „Es ist nicht gestattet, private Schuhe dauerhaft im Hausflur abzustellen.“（不允許將私人鞋子長期堆放在公共走廊。）\n  - Es ist Pflicht, ... zu + Infinitiv / Man ist verpflichtet, ... zu + Infinitiv（有義務做...）：\n    * „Die Mieter sind verpflichtet, die Mülltonnen am Abholtag an die Straße zu stellen.“（租客有義務在清運當天將垃圾桶推到街邊。）\n3.【德國法定與社區安寧時段標準（Gesetzliche und vertragliche Ruhezeiten）】：\n  - Die Nachtruhe（夜間安寧）：全德統一法定強制要求自 22:00 至 06:00/07:00 Uhr。在此期間僅允許【Zimmerlautstärke（室內音量）】，嚴禁吸塵、鑽孔裝修、洗衣脫水或高音量電視。\n  - Die Sonn- und Feiertagsruhe（週日與國定假日安寧）：全天 24 小時全面禁止吵鬧工程、割草機除草與敲擊作業。\n  - Die Mittagsruhe（午間安寧）：通常為 13:00 至 15:00 Uhr（依各城市或各社區住戶公約約定）。",
      "ruleExample": [
        {
          "de": "Ab 22:00 Uhr muss die Nachtruhe strikt eingehalten werden.",
          "zh": "晚間 22:00 起必須嚴格遵守夜間安寧規定。",
          "note": "muss ... eingehalten werden (情態被動)"
        },
        {
          "de": "Es ist verboten, persönliche Gegenstände im Treppenhaus abzustellen.",
          "zh": "禁止將個人物品堆放在樓梯間。",
          "note": "Es ist verboten, ... zu + Infinitiv"
        },
        {
          "de": "Man darf an Sonntagen keine lauten Renovierungsarbeiten durchführen.",
          "zh": "週日不得進行任何高噪音裝修工程。",
          "note": "darf ... keine ... durchführen"
        },
        {
          "de": "Musizieren ist nur bis 20:00 Uhr und in Zimmerlautstärke gestattet.",
          "zh": "演奏樂器僅允許至晚間 20:00，且必須維持在室內音量。",
          "note": "ist ... gestattet (被允許的)"
        }
      ]
    },
    "vocabulary": [
      {
        "id": "d150_v1",
        "word": "die Hausordnung",
        "article": "die",
        "plural": "die Hausordnungen",
        "meaning": "住戶公約、大樓管理規章",
        "ipa": "/ˈhaʊ̯sˌʔɔʁdnʊŋ/",
        "example": "Jeder neue Mieter unterschreibt die Hausordnung zusammen mit dem Mietvertrag.",
        "exampleTr": "每位新房客在簽署租約時都會同時簽署住戶公約。"
      },
      {
        "id": "d150_v2",
        "word": "die Nachtruhe",
        "article": "die",
        "plural": "die Nachtruhe (nur Singular)",
        "meaning": "夜間安寧時段（22:00 至 06:00/07:00）",
        "ipa": "/ˈnaxtˌʁuːə/",
        "example": "Die gesetzliche Nachtruhe beginnt in Deutschland um 22 Uhr abends.",
        "exampleTr": "德國的法定夜間安寧時間於晚間 10 點開始。"
      },
      {
        "id": "d150_v3",
        "word": "die Mittagsruhe",
        "article": "die",
        "plural": "die Mittagsruhe (nur Singular)",
        "meaning": "午間安寧時段（通常為 13:00 至 15:00）",
        "ipa": "/ˈmɪtaːksˌʁuːə/",
        "example": "Während der Mittagsruhe von 13 bis 15 Uhr darf man keinen Rasen mähen.",
        "exampleTr": "在 13 點至 15 點的午休安寧時段內，不得使用除草機割草。"
      },
      {
        "id": "d150_v4",
        "word": "einhalten",
        "meaning": "遵守、遵行（規則、約定、法律）",
        "ipa": "/ˈaɪ̯nˌhaltn̩/",
        "example": "Bitte halten Sie die vorgeschriebenen Ruhezeiten gewissenhaft ein.",
        "exampleTr": "請大家認真自律地遵守規定的安寧時間。"
      },
      {
        "id": "d150_v5",
        "word": "das Treppenhaus",
        "article": "das",
        "plural": "die Treppenhäuser",
        "meaning": "樓梯間、公共通道走廊",
        "ipa": "/ˈtʁɛpn̩ˌhaʊ̯s/",
        "example": "Aus Brandschutzgründen muss das Treppenhaus immer frei bleiben.",
        "exampleTr": "基於消防安全考量，樓梯間必須始終保持通暢無阻。"
      },
      {
        "id": "d150_v6",
        "word": "abstellen",
        "meaning": "停放、放置、堆放（物品、車輛）",
        "ipa": "/ˈapˌʃtɛln̩/",
        "example": "Fahrräder dürfen nur im Hof oder Fahrradkeller abgestellt werden.",
        "exampleTr": "自行車僅允許停放在中庭或地下自行車室。"
      },
      {
        "id": "d150_v7",
        "word": "der Lärm",
        "article": "der",
        "plural": "der Lärm (nur Singular)",
        "meaning": "噪音、喧囂嘈雜聲",
        "ipa": "/lɛʁm/",
        "example": "Ständiger Lärm durch Renovierungsarbeiten stört die Nachbarn enorm.",
        "exampleTr": "裝修工程產生的持續噪音極大地打擾了鄰居。"
      },
      {
        "id": "d150_v8",
        "word": "untersagen",
        "meaning": "明令禁止、不准（untersagt, untersagte, hat untersagt）",
        "ipa": "/ʊntɐˈzaːɡn̩/",
        "example": "Das Rauchen im gemeinsamen Hausflur ist strengstens untersagt.",
        "exampleTr": "嚴禁在公共走廊抽煙。"
      }
    ],
    "listening": {
      "title": "Hörverständnis: Das Gespräch über die Hausordnung (管委會人員說明住戶公約)",
      "situation": "Herr Santos ist neu in das Mehrfamilienhaus eingezogen und spricht mit der Hausverwalterin Frau Klein über die Hausregeln.",
      "dialogue": [
        {
          "speaker": "Frau Klein",
          "de": "Guten Tag, Herr Santos! Ich hoffe, Ihr Umzug am Wochenende ist gut verlaufen. Da Sie neu bei uns sind, möchte ich Ihnen kurz die wichtigsten Regeln unserer Hausordnung erklären.",
          "zh": "午安，Santos 先生！希望您週末搬家進行得很順利。由於您剛搬進來，我想簡短向您說明我們住戶公約最重要的幾條規定。"
        },
        {
          "speaker": "Herr Santos",
          "de": "Guten Tag, Frau Klein! Vielen Dank, der Umzug war zwar anstrengend, aber alles hat geklappt. Welche Regeln muss ich besonders beachten?",
          "zh": "午安，Klein 女士！多謝關心，搬家雖然辛苦但一切順遂。有哪些規定是我需要特別注意的呢？"
        },
        {
          "speaker": "Frau Klein",
          "de": "Ganz wichtig sind die Ruhezeiten: Die Nachtruhe gilt täglich von 22:00 bis 07:00 Uhr morgens. In dieser Zeit dürfen Fernseher und Musikgeräte nur auf Zimmerlautstärke laufen.",
          "zh": "非常重要的就是安寧時段：夜間安寧為每天晚間 22:00 至隔天早晨 07:00。在這段時間內，電視與音響只能開在室內音量。"
        },
        {
          "speaker": "Herr Santos",
          "de": "Das ist selbstverständlich. Und wie sieht es sonntags aus? Darf man da bohren oder Bilder aufhängen?",
          "zh": "這是理所當然的。那週日的情況呢？週日可以鑽孔或釘掛畫作嗎？"
        },
        {
          "speaker": "Frau Klein",
          "de": "Nein, an Sonn- und Feiertagen gilt ganztägig absolute Ruhe. Bohren, Hämmern und laute Arbeiten sind dann streng untersagt.",
          "zh": "不行，週日與國定假日全天維持絕對安寧。電鑽、敲敲打打和高噪音作業在當天都是嚴格禁止的。"
        },
        {
          "speaker": "Herr Santos",
          "de": "Verstehe. Wo kann ich mein Fahrrad abstellen? Im Treppenhaus vor meiner Wohnungstür ist genug Platz.",
          "zh": "明白了。那我的自行車可以停在哪裡？我家門前的樓梯間走廊空間蠻大的。"
        },
        {
          "speaker": "Frau Klein",
          "de": "Nein, bitte keinesfalls im Treppenhaus! Das ist aus Brandschutzgründen ein wichtiger Fluchtweg. Fahrräder müssen in den Fahrradkeller im Untergeschoss gebracht werden.",
          "zh": "不行，千萬不能放在樓梯間！基於消防考量那是重要的逃生避難通道。自行車必須牽到地下室的自行車房停放。"
        },
        {
          "speaker": "Herr Santos",
          "de": "Ach so, das wusste ich nicht. Ich bringe das Fahrrad sofort in den Keller. Vielen Dank für die Information!",
          "zh": "啊這樣啊，我之前不知道。我這就馬上把車牽到地下室。非常感謝您的告知！"
        }
      ],
      "questions": [
        {
          "id": "d150_q1",
          "question": "Wann gilt im Haus die gesetzliche Nachtruhe? (該公寓大樓的夜間安寧時間為何？)",
          "options": [
            "Von 20:00 bis 08:00 Uhr (20:00 至 08:00)",
            "Täglich von 22:00 bis 07:00 Uhr (每天 22:00 至 07:00)",
            "Nur an Sonntagen ab 22:00 Uhr (僅在週日 22:00 起)",
            "Von 12:00 bis 14:00 Uhr (12:00 至 14:00)"
          ],
          "correctIndex": 1,
          "explanation": "Frau Klein 明確表示：「Die Nachtruhe gilt täglich von 22:00 bis 07:00 Uhr morgens.」。"
        },
        {
          "id": "d150_q2",
          "question": "Warum darf Herr Santos sein Fahrrad NICHT im Treppenhaus abstellen? (為何 Santos 先生不能把自行車停在樓梯間？)",
          "options": [
            "Weil es zu schmutzig ist (因為自行車太髒)",
            "Weil das Treppenhaus aus Brandschutzgründen ein Fluchtweg ist (因為基於消防安全考量，樓梯間是緊急逃生避難通道)",
            "Weil die Nachbarn das Fahrrad stehlen könnten (因為鄰居可能會偷車)",
            "Weil es keinen Schlüssel für das Treppenhaus gibt (因為沒有樓梯間鑰匙)"
          ],
          "correctIndex": 1,
          "explanation": "Frau Klein 指出：「Das ist aus Brandschutzgründen ein wichtiger Fluchtweg.」。"
        }
      ]
    },
    "speaking": {
      "title": "Sprechtraining: Hausregeln und Ruhezeiten erklären (說明住宅生活守則與安寧時段)",
      "instruction": "請使用情態動詞與禁令句型，大聲流暢地朗讀下列實用生活金句：",
      "targetSentences": [
        {
          "id": "d150_s1",
          "de": "Ab 22 Uhr abends gilt die Nachtruhe, und Musik darf nur auf Zimmerlautstärke gehört werden.",
          "zh": "晚間 10 點起進入夜間安寧時間，音樂僅允許以室內音量收聽。",
          "phoneticTip": "Zimmerlautstärke [ˈt͡sɪmɐˌlaʊ̯tʃtɛʁkə] 複合名詞重音在第一節。"
        },
        {
          "id": "d150_s2",
          "de": "Es ist aus Sicherheitsgründen verboten, Schuhe und Fahrräder im Treppenhaus abzustellen.",
          "zh": "基於安全考量，嚴禁將鞋子與自行車堆置在樓梯間。",
          "phoneticTip": "Sicherheitsgründen 注意 -heits 輕讀。"
        },
        {
          "id": "d150_s3",
          "de": "An Sonn- und Feiertagen ist lautes Hämmern und Bohren im ganzen Haus untersagt.",
          "zh": "在週日及國定假日，整棟大樓內全面禁止大聲敲打與電鑽作業。",
          "phoneticTip": "untersagt [ʊntɐˈzaːkt] 前綴無重音，-sagt 濁輔音發清音。"
        },
        {
          "id": "d150_s4",
          "de": "Darf man auf dem Balkon grillen? Nur mit einem Elektrogrill, Holzkohle ist nicht gestattet.",
          "zh": "在陽台上可以烤肉嗎？只能用電烤盤，木炭烤肉是不被許可的。",
          "phoneticTip": "Elektrogrill 重音在 -grill。"
        }
      ],
      "rolePlay": {
        "partnerName": "Frau Klein",
        "partnerRole": "Hausverwalterin (大樓管委會人員)",
        "scenario": "您剛搬進新大樓，向管委會詢問有關洗衣服與週末在陽台烤肉的規定。",
        "promptDe": "Haben Sie noch Fragen zu den Waschmaschinen im Keller oder zum Grillen auf dem Balkon?",
        "promptZh": "您對地下室洗衣機的使用或在陽台烤肉還有什麼問題想了解嗎？",
        "sampleReplies": [
          "Darf man sonntags im Waschkeller waschen, oder ist das wegen der Ruhezeiten nicht erlaubt?",
          "Ich wollte fragen, ob man auf dem Balkon mit einem Elektrogrill grillen darf, wenn man die Nachbarn vorher informiert."
        ]
      }
    },
    "reading": {
      "title": "Leseverständnis: Hausordnung der Wohnanlage Sonnenschein (陽光住宅社區住戶公約公告)",
      "documentType": "Aushang",
      "content": "HAUSORDNUNG DER WOHNANLAGE SONNENSCHEIN\nFÜR ALLE BEWOHNERINNEN UND BEWOHNER\n\nEin friedliches Zusammenleben setzt gegenseitige Rücksichtnahme voraus. Wir bitten alle Mieterinnen und Mieter, folgende Punkte strikt zu beachten:\n\n1. Ruhezeiten:\n- Nachtruhe: Täglich von 22:00 bis 07:00 Uhr.\n- Mittagsruhe: Von 13:00 bis 15:00 Uhr.\n- Sonn- und Feiertage: Ganztägige Sonn- und Feiertagsruhe.\nIn diesen Zeiten ist jeglicher ruhestörende Lärm (z.B. Staubsaugen, Bohrmaschinen, laute Musik) untersagt. Fernseh- und Tongeräte dürfen nur in Zimmerlautstärke betrieben werden.\n\n2. Treppenhaus und Fluchtwege:\nDas Treppenhaus ist Hauptfluchtweg im Brandfall. Das Abstellen von Fahrrädern, Kinderwagen, Schuhregalen oder Mülltüten ist ausnahmslos verboten. Bei Zuwiderhandlung werden die Gegenstände kostenpflichtig entfernt.\n\n3. Grillen:\nGrillen mit Holzkohle ist auf Balkonen und Terrassen wegen Brandgefahr und Rauchbelästigung strengstens untersagt. Das Grillen mit einem modernen Elektrogrill ist gestattet, sofern die Nachbarn nicht durch Rauch gestört werden.\n\n4. Haustür:\nDie Haupteingangstür muss aus Sicherheitsgründen ab 20:00 Uhr stets geschlossen bleiben.\n\nDie Hausverwaltung",
      "translation": "陽光住宅社區住戶公約\n致全體住戶居民\n\n和睦相處以相互體諒為前提。我們敦請所有租戶嚴格遵守以下各項守則：\n\n1. 安寧時段：\n- 夜間安寧：每天 22:00 至 07:00。\n- 午間安寧：13:00 至 15:00。\n- 週日與假日：全天維持安寧。\n在上述時段內，嚴禁任何妨礙安寧之噪音（例如：使用吸塵器、電鑽、大聲播放音樂）。電視與音響設備僅可在室內音量範圍內運作。\n\n2. 樓梯間與逃生通道：\n樓梯間為火災發生時之主要逃生避難路徑。無一例外，嚴禁停放自行車、嬰兒推車、堆放鞋架或垃圾袋。若有違規，將有償強制清除該等物品。\n\n3. 燒烤烤肉：\n因火災危險與煙霧困擾，陽台與露台嚴禁使用木炭烤肉。若使用現代電烤盤烤肉則屬允許，前提是煙氣不得干擾鄰居。\n\n4. 大樓大門：\n基於防盜安全考量，大樓正門自晚間 20:00 起必須始終保持關閉。\n\n社區物業管理處 啟",
      "glossary": {
        "Rücksichtnahme": {
          "pos": "die",
          "meaning": "體諒、顧及他人"
        },
        "Zuwiderhandlung": {
          "pos": "die",
          "meaning": "違規行徑、抵觸規章行為"
        },
        "Fluchtweg": {
          "pos": "der",
          "meaning": "緊急逃生避難路線"
        },
        "kostenpflichtig": {
          "pos": "adj",
          "meaning": "需自行負擔費用的、有償的"
        }
      },
      "questions": [
        {
          "id": "d150_rq1",
          "question": "Welches Grillen ist laut Hausordnung auf dem Balkon ERLAUBT? (根據住戶公約，陽台上允許哪種形式的烤肉？)",
          "options": [
            "Grillen mit Holzkohle (用木炭烤肉)",
            "Grillen mit einem Elektrogrill (使用電烤盤烤肉)",
            "Grillen mit einem großen Holzfeuer (用大木柴生火烤肉)",
            "Jegliches Grillen ist vollkommen verboten (任何形式的烤肉都全面禁止)"
          ],
          "correctIndex": 1,
          "explanation": "公告第 3 點註明：「Das Grillen mit einem modernen Elektrogrill ist gestattet, sofern die Nachbarn nicht durch Rauch gestört werden.」。"
        },
        {
          "id": "d150_rq2",
          "question": "Was passiert mit Schuhen und Fahrrädern, die im Treppenhaus stehen? (停放在樓梯間的鞋子與自行車會被如何處置？)",
          "options": [
            "Sie werden der Hausverwaltung geschenkt. (直接贈送給物業管委會)",
            "Sie werden kostenpflichtig entfernt. (將被強制清除且費用由違規者承擔)",
            "Sie dürfen dort unbegrenzt stehen bleiben. (可以無限期停放)",
            "Man bekommt dafür Geld zurück. (可以因此領到退費)"
          ],
          "correctIndex": 1,
          "explanation": "第 2 點寫道：「Bei Zuwiderhandlung werden die Gegenstände kostenpflichtig entfernt.」。"
        }
      ]
    },
    "examTip": {
      "skill": "Lesen",
      "title": "A2 閱讀解題法：辨識各類「禁止與許可」的同義置換",
      "content": "在德語考試閱讀題中，原文與題幹往往進行「同義詞大換血」：verboten = nicht gestattet = untersagt = darf nicht；erlaubt = gestattet = möglich = zulässig。遇到否定前綴如「ausnahmslos verboten（絕無例外地禁止）」時，題幹若出現「man darf manchmal...」即為典型錯誤陷阱干擾項！"
    }
  },
  "151": {
    "day": 151,
    "stage": "A2",
    "week": 22,
    "dayOfWeek": 4,
    "title": "Nachbarschaft & Konflikte lösen 鄰里關係與化解紛爭：禮貌請求、包裹代收與便條寫作",
    "germanTitle": "Nachbarschaft und Konflikte lösen: Höfliche Bitten, Paketannahme und Entschuldigungen",
    "theme": "鄰里互動溝通、禮貌請求與道歉（Konjunktiv II: Könnten Sie bitte...? / Würden Sie...?）、包裹代收（Paket für Nachbarn annehmen）、陽台烤肉與派對噪音通知、歌德 A2 寫作 Teil 1 鄰里訊息寫作",
    "estimatedMinutes": 20,
    "grammar": {
      "title": "鄰里禮貌請求（Höfliche Bitten mit Konjunktiv II）、道歉句型與 A2 便條寫作格式",
      "explanation": "在德國鄰里相處中，遇到派對慶祝、噪音干擾或包裹代收時，使用適度且溫和的德語句型是避免誤會、化解摩擦的社交黃金法寶：\n1.【第二虛擬式（Konjunktiv II）之委婉禮貌請求句型】：\n  - Könnten Sie bitte... + Infinitiv?（您能否請...？）：\n    * „Könnten Sie die Musik bitte etwas leiser stellen? Ich muss morgen früh arbeiten.“（您能否請把音樂轉小聲一點？我明天一早得上班。）\n    * „Könnten Sie morgen bitte ein wichtiges Paket für mich annehmen?“（明天您能否幫我代收一件重要包裹？）\n  - Würden Sie bitte... + Infinitiv?（您願意請...嗎？）：\n    * „Würden Sie bitte meine Blumen auf dem Balkon gießen, während ich im Urlaub bin?“（我休假期間您願意幫我澆一下陽台的花嗎？）\n  - Dürfte ich Sie um einen Gefallen bitten?（我能請您幫個忙嗎？）\n  - Ich wollte kurz fragen, ob...（我想簡短請教一下是否...）\n2.【誠懇道歉、解釋原因與承諾改進（Sich entschuldigen und begründen）】：\n  - „Es tut mir sehr leid, dass es gestern Abend etwas lauter geworden ist.“（昨晚稍微太吵了真的很抱歉。）\n  - „Wir haben gestern meinen Geburtstag gefeiert.“（我們昨天在慶祝我的生日。）\n  - „Das kommt sicher nicht wieder vor.“（這保證不會再發生了。）\n  - „Vielen Dank für Ihre Geduld und Ihr Verständnis!“（非常感謝您的包容與體諒！）\n3.【歌德 A2 寫作 Teil 1 實戰精講：寫便條或短訊給鄰居（Nachricht an Nachbarn）】：\n  - 題目通常給出三個導引要點（3 Leitpunkte），總字數約 20 至 30 詞。\n  - 結構三要素：\n    * ① 禮貌稱呼（Anrede）: „Liebe Nachbarinnen und Nachbarn,“ / „Lieber Herr Wagner,“\n    * ② 正文扣題（Hauptteil）: 清楚交待辦活動事由、表達請求並給予替代方案（如留電話或登門道歉）\n    * ③ 感謝與署名（Dank & Gruß）: „Vielen Dank für Ihr Verständnis! Herzliche Grüße, [Ihr Vorname]“",
      "ruleExample": [
        {
          "de": "Könnten Sie morgen bitte ein Paket für mich annehmen, wenn der Postbote kommt?",
          "zh": "郵差來的時候，明天您能否幫我代收個包裹？",
          "note": "Könnten Sie bitte ... annehmen? (Konjunktiv II)"
        },
        {
          "de": "Würden Sie die Musik bitte etwas leiser stellen? Meine Kinder schlafen schon.",
          "zh": "您能否請把音樂關小聲一點？我的孩子們已經睡了。",
          "note": "Würden Sie bitte ... leiser stellen?"
        },
        {
          "de": "Es tut mir sehr leid, dass es gestern Abend so laut geworden ist.",
          "zh": "昨晚變得那麼吵鬧真的很抱歉。",
          "note": "Es tut mir leid, dass... (道歉句型)"
        },
        {
          "de": "Ich wollte fragen, ob Sie am Wochenende kurz Zeit für mich haben.",
          "zh": "我想問一下您週末是否有空稍微跟我聊一下。",
          "note": "Ich wollte fragen, ob... (間接問句)"
        }
      ]
    },
    "vocabulary": [
      {
        "id": "d151_v1",
        "word": "die Beschwerde",
        "article": "die",
        "plural": "die Beschwerden",
        "meaning": "投訴、抱怨、申訴",
        "ipa": "/bəˈʃveːɐ̯də/",
        "example": "Der Nachbar reichte bei der Hausverwaltung eine offizielle Beschwerde ein.",
        "exampleTr": "這位鄰居向物業管理處提出了一項正式投訴。"
      },
      {
        "id": "d151_v2",
        "word": "sich beschweren",
        "meaning": "抱怨、投訴（sich beschweren über + Akkusativ）",
        "ipa": "/bəˈʃveːʁn̩/",
        "example": "Herr Weber beschwert sich über die laute Musik aus der Nachbarwohnung.",
        "exampleTr": "Weber 先生投訴隔壁鄰居傳來的超大聲音樂。"
      },
      {
        "id": "d151_v3",
        "word": "das Paket",
        "article": "das",
        "plural": "die Pakete",
        "meaning": "包裹、郵包",
        "ipa": "/paˈkeːt/",
        "example": "Der Postbote hat das schwere Paket bei der Nachbarin im Erdgeschoss abgegeben.",
        "exampleTr": "郵差把沉重的包裹寄放在一樓女鄰居家裡。"
      },
      {
        "id": "d151_v4",
        "word": "annehmen",
        "meaning": "收下、代收（nimmt an, nahm an, hat angenommen）",
        "ipa": "/ˈanˌneːmən/",
        "example": "Könnten Sie bitte freundlicherweise mein Paket annehmen?",
        "exampleTr": "您能否好心幫我代收一下包裹？"
      },
      {
        "id": "d151_v5",
        "word": "grillen",
        "meaning": "燒烤、烤肉（grillt, grillte, hat gegrillt）",
        "ipa": "/ˈɡʁɪlən/",
        "example": "Am Samstagabend grillen wir mit ein paar Freunden auf der Terrasse.",
        "exampleTr": "週六傍晚我們和幾位朋友在露台上烤肉。"
      },
      {
        "id": "d151_v6",
        "word": "Rücksicht nehmen",
        "meaning": "體諒、顧及他人（Rücksicht nehmen auf + Akkusativ）",
        "ipa": "/ˈʁʏkˌzɪçt neːmən/",
        "example": "In einem Mietshaus muss jeder Bewohner Rücksicht auf die Nachbarn nehmen.",
        "exampleTr": "在集合住宅中，每位住戶都必須體諒顧及鄰居。"
      },
      {
        "id": "d151_v7",
        "word": "Bescheid geben",
        "meaning": "通知、告知（Bescheid geben / sagen）",
        "ipa": "/bəˈʃaɪ̯t ɡeːbn̩/",
        "example": "Bitte geben Sie mir rechtzeitig Bescheid, wenn Sie eine Feier planen.",
        "exampleTr": "如果您計劃辦派對，請提前通知我一聲。"
      },
      {
        "id": "d151_v8",
        "word": "die Feier",
        "article": "die",
        "plural": "die Feiern",
        "meaning": "慶祝會、派對、聚會",
        "ipa": "/ˈfaɪ̯ɐ/",
        "example": "Wir veranstalten am Freitag eine kleine Feier zum Einzug.",
        "exampleTr": "我們週五要辦一場小型的喬遷入厝聚會。"
      }
    ],
    "listening": {
      "title": "Hörverständnis: Ein nettes Gespräch an der Haustür (家門前的友好鄰里溝通)",
      "situation": "Herr Becker klingelt bei seiner neuen Nachbarin Frau Tanaka, um ein Paket abzugeben und über eine bevorstehende Feier zu sprechen.",
      "dialogue": [
        {
          "speaker": "Herr Becker",
          "de": "Guten Abend, Frau Tanaka! Entschuldigen Sie die Störung so spät am Abend. Der Paketbote hat heute Nachmittag ein Paket für Sie bei mir abgegeben.",
          "zh": "晚上好，Tanaka 女士！抱歉這麼晚打擾您。今天下午郵差把我這兒當作您的代收處，放了一個包裹。"
        },
        {
          "speaker": "Frau Tanaka",
          "de": "Guten Abend, Herr Becker! Oh, das ist aber überaus nett von Ihnen! Ich habe schon den ganzen Tag auf diese wichtige Lieferung gewartet. Vielen herzlichen Dank!",
          "zh": "晚上好，Becker 先生！噢，您人真好！我等這件重要快遞等了一整天了。非常衷心地感謝您！"
        },
        {
          "speaker": "Herr Becker",
          "de": "Keine Ursache, das mache ich doch gerne für die Nachbarn. Übrigens wollte ich Ihnen noch kurz Bescheid geben: Am kommenden Samstag feiere ich meinen 30. Geburtstag.",
          "zh": "不客氣，舉手之勞幫鄰居收一下我很樂意。順便想提前跟您打聲招呼：這個週六我要慶祝 30 歲生日。"
        },
        {
          "speaker": "Frau Tanaka",
          "de": "Herzlichen Glückwunsch schon mal im Voraus! Werden viele Gäste kommen?",
          "zh": "先提前恭喜您生日快樂！會有很多客人來嗎？"
        },
        {
          "speaker": "Herr Becker",
          "de": "Es kommen etwa zehn Freunde. Wir sitzen ab 19 Uhr auf dem Balkon und hören etwas Musik. Es könnte also etwas lauter werden. Ab 22 Uhr gehen wir aber rein und machen die Musik leiser.",
          "zh": "大約有十位朋友過來。我們從晚上 7 點起會坐在陽台上放點音樂，可能會稍微有些熱鬧。不過 22 點起我們就會進室內並把音樂轉小聲。"
        },
        {
          "speaker": "Frau Tanaka",
          "de": "Vielen Dank für die Vorwarnung! Wenn man vorher Bescheid weiß, ist das überhaupt kein Problem. Feiern Sie schön!",
          "zh": "非常感謝您提前通知！只要提前知道，這完全沒問題。祝你們玩得開心！"
        },
        {
          "speaker": "Herr Becker",
          "de": "Vielen Dank für Ihr Verständnis! Wenn es Ihnen trotzdem zu laut sein sollte, klopfen Sie einfach kurz an meine Tür.",
          "zh": "非常感謝您的體諒！如果還是覺得太吵，您隨時來敲我的門就好。"
        }
      ],
      "questions": [
        {
          "id": "d151_q1",
          "question": "Warum klingelt Herr Becker bei Frau Tanaka? (Becker 先生為什麼去按 Tanaka 女士的門鈴？)",
          "options": [
            "Er möchte sich über Lärm beschweren. (他想抱怨噪音)",
            "Er übergibt ein Paket und kündigt seine Geburtstagsfeier an. (他轉交包裹並提前告知生日聚會的事宜)",
            "Er möchte sich Mehl ausleihen. (他想借麵粉)",
            "Er sucht nach seiner Katze. (他在找他的貓)"
          ],
          "correctIndex": 1,
          "explanation": "對話提到 Herr Becker 先轉交下午代收的包裹，並說明本週六即將舉辦 30 歲生日聚會。"
        },
        {
          "id": "d151_q2",
          "question": "Was plant Herr Becker ab 22:00 Uhr bei seiner Feier? (Becker 先生計劃在派對當晚 22:00 起做什麼？)",
          "options": [
            "Alle Gäste nach Hause schicken (把所有客人送回家)",
            "Sehr laute Rockmusik anmachen (播放超大聲搖滾樂)",
            "In die Wohnung gehen und die Musik leiser machen (進到室內並將音樂轉小聲)",
            "Im Hof grillen (在中庭烤肉)"
          ],
          "correctIndex": 2,
          "explanation": "Herr Becker 承諾：「Ab 22 Uhr gehen wir aber rein und machen die Musik leiser.」。"
        }
      ]
    },
    "speaking": {
      "title": "Sprechtraining: Bitten formulieren und sich entschuldigen (表達禮貌請求與誠懇道歉)",
      "instruction": "請依照第二虛擬式（Konjunktiv II）與禮貌道歉語氣，大聲朗讀下列典型金句：",
      "targetSentences": [
        {
          "id": "d151_s1",
          "de": "Könnten Sie bitte ein Paket für mich annehmen, wenn ich bei der Arbeit bin?",
          "zh": "我上班不在時，您能否幫我代收個包裹？",
          "phoneticTip": "Könnten Sie [ˈkœntn̩ ziː] 圓唇音 ö 清晰。"
        },
        {
          "id": "d151_s2",
          "de": "Würden Sie die Musik bitte etwas leiser machen? Ich habe morgen eine schwere Prüfung.",
          "zh": "您能否請把音樂關小聲一點？我明天有一場艱難的考試。",
          "phoneticTip": "Würden Sie [ˈvʏʁdn̩ ziː] 委婉謙恭語調。"
        },
        {
          "id": "d151_s3",
          "de": "Es tut mir aufrichtig leid, dass mein Hund gestern im Flur gebellt hat.",
          "zh": "昨天我的狗在走廊吠叫，我感到十分抱歉。",
          "phoneticTip": "aufrichtig [ˈaʊ̯fˌʁɪçtɪç] 真摯誠懇語氣。"
        },
        {
          "id": "d151_s4",
          "de": "Vielen herzlichen Dank für Ihre Hilfsbereitschaft und Ihr großes Verständnis!",
          "zh": "非常衷心感謝您的樂於助人與寬宏體諒！",
          "phoneticTip": "Hilfsbereitschaft 重音在 Hilfs-。"
        }
      ],
      "rolePlay": {
        "partnerName": "Herr Becker",
        "partnerRole": "Nachbar (鄰居)",
        "scenario": "您明天下午必須去市民局辦事，剛好有一件重要快遞送達，您去敲隔壁鄰居的門請他代收。",
        "promptDe": "Guten Tag! Kann ich Ihnen bei irgendetwas helfen?",
        "promptZh": "午安！有什麼我可以幫忙的嗎？",
        "sampleReplies": [
          "Guten Tag, Herr Becker! Dürfte ich Sie um einen Gefallen bitten? Morgen kommt ein Paket für mich, aber ich habe einen Behördentermin. Könnten Sie es vielleicht annehmen?",
          "Hallo Herr Becker! Ich wollte kurz fragen, ob Sie morgen Nachmittag zu Hause sind und ein Paket für mich entgegennehmen könnten?"
        ]
      }
    },
    "reading": {
      "title": "Leseverständnis: Aushang an der Haustür – Vorankündigung einer Feier (大樓玄關告示：派對活動事前通告)",
      "documentType": "Nachricht",
      "content": "LIEBE HAUSGEMEINSCHAFT,\nLIEBE NACHBARINNEN UND NACHBARN,\n\nich möchte Ihnen kurz Bescheid geben, dass ich am kommenden Samstag, den 18. Oktober, meinen Einzug in den 2. Stock feiern möchte.\n\nWir werden ab ca. 18:30 Uhr mit einigen Freundinnen und Freunden auf meinem Balkon zusammenkommen. Selbstverständlich geben wir uns Mühe, die Lautstärke in Grenzen zu halten. Ab 22:00 Uhr verlegen wir die Feier komplett in die Wohnung und werden die Fenster schließen.\n\nSollte es Ihnen dennoch einmal zu laut werden, zögern Sie bitte nicht, mir direkt Bescheid zu sagen oder bei mir im 2. Stock (Wohnung Nr. 6) zu klingeln. Sie erreichen mich am Samstagabend auch unter meiner Handynummer: 0176-55443322.\n\nÜber einen kurzen Besuch auf ein Glas Wein oder ein Stück Kuchen würde ich mich natürlich auch sehr freuen!\n\nVielen Dank im Voraus für Ihr Verständnis und Ihre Geduld!\n\nHerzliche Grüße,\nEuer neuer Nachbar Florian Weber",
      "translation": "親愛的社區住戶、親愛的鄰居女士們、先生們：\n\n我想提前向大家通報一聲：我打算在即將到來的週六（10 月 18 日）於二樓（2. OG）慶祝我的喬遷新居。\n\n我們預計自傍晚 18:30 起與幾位好友在我的陽台上聚聚。我們當然會盡一切努力將音量控制在合理範圍內。晚間 22:00 起我們將把活動完全移至室內並關閉門窗。\n\n若屆時對您而言依然感覺太吵，請毫不猶豫直接告知我，或直接到二樓（6 號房）按我的門鈴。週六傍晚您也可以撥打我的手機聯絡我：0176-55443322。\n\n如果您能順道過來喝杯葡萄酒或吃塊蛋糕，我也會感到非常高興！\n\n預先非常感謝大家的體諒與包容！\n\n致上由衷問候，\n你們的新鄰居 Florian Weber 敬啟",
      "glossary": {
        "Hausgemeinschaft": {
          "pos": "die",
          "meaning": "大樓全體住戶共同體"
        },
        "verlegen": {
          "pos": "verb",
          "meaning": "轉移、遷移（地點或時間）"
        },
        "zögern": {
          "pos": "verb",
          "meaning": "猶豫、遲疑"
        },
        "Handynummer": {
          "pos": "die",
          "meaning": "手機號碼"
        }
      },
      "questions": [
        {
          "id": "d151_rq1",
          "question": "Was macht Florian ab 22:00 Uhr, um die Nachtruhe zu respektieren? (Florian 在 22:00 起會採取什麼措施以尊重夜間安寧？)",
          "options": [
            "Er beendet die Feier komplett und geht schlafen. (完全結束聚會並上床睡覺)",
            "Er verlegt die Feier nach drinnen und schließt die Fenster. (將聚會移入室內並關閉窗戶)",
            "Er dreht die Musik noch lauter. (把音樂開得更大聲)",
            "Er geht mit allen Gästen in den Hof. (和所有客人跑到中庭)"
          ],
          "correctIndex": 1,
          "explanation": "公告第三段註明：「Ab 22:00 Uhr verlegen wir die Feier komplett in die Wohnung und werden die Fenster schließen.」。"
        },
        {
          "id": "d151_rq2",
          "question": "Was können Nachbarn tun, wenn die Musik am Samstagabend zu laut ist? (週六傍晚如果音樂太吵，鄰居可以怎麼做？)",
          "options": [
            "Sofort die Polizei rufen (立刻叫警察)",
            "Florian auf dem Handy anrufen oder an seiner Tür klingeln (打手機給 Florian 或按他的門鈴)",
            "Die Hausverwaltung am Montag verklagen (週一去告物業管理處)",
            "Die Sicherung der Wohnung ausschalten (把該戶電閘關掉)"
          ],
          "correctIndex": 1,
          "explanation": "信中寫明可以直接撥打手機 0176-55443322 或到 2 樓（6 號房）按鈴告知。"
        }
      ]
    },
    "examTip": {
      "skill": "Schreiben",
      "title": "Goethe A2 Schreiben Teil 1: Die perfekte Nachbarschafts-Nachricht (歌德 A2 便條寫作滿分三要素)",
      "content": "在歌德 A2 寫作第一大題中，題目常要求寫一則簡短便條或簡訊給鄰居（約 20-30 字）。請務必確保：1. 稱呼與問候適宜（Liebe Nachbarn / Lieber Herr...）；2. 緊扣三個導引點（如說明派對原因、表達致歉或請求代收包裹、留下聯絡方式）；3. 結尾致謝與落款（Vielen Dank für Ihre Hilfe! Herzliche Grüße, [Ihr Name]）。使用「Könnten Sie bitte...」可立即展現扎實文法實力！"
    }
  },
  "152": {
    "day": 152,
    "stage": "A2",
    "week": 22,
    "dayOfWeek": 5,
    "title": "Umzug & Ummeldung beim Bürgeramt 搬家入厝與戶籍遷入：兩週時限、房東證明與時間介系詞",
    "germanTitle": "Umzug und Ummeldung beim Bürgeramt: Meldebescheinigung und Wohnungsgeberbestätigung",
    "theme": "搬家流程（Umzugshelfer, Kartons packen）、德國法定戶政登記遷徙手續（die Ummeldung beim Bürgeramt/Einwohnermeldeamt）、房東入住確認書（Wohnungsgeberbestätigung）、兩週登記期限（zwei Wochen Frist）、時間介系詞（innerhalb von, vor, nach, bei, ab）",
    "estimatedMinutes": 20,
    "grammar": {
      "title": "搬家情境中時間介系詞（Temporale Präpositionen mit Dativ）與法定期限表達",
      "explanation": "在德國生活，每次搬遷新住處後都必須履行法定行政手續。德國法律對於居住登記非常嚴格，相關情境是 A2 閱讀與聽力極高頻的官方公文考點：\n1.【時間介系詞＋第三格（Temporale Präpositionen mit Dativ）】：\n  - innerhalb von + Dativ（在...時間之內）：指不超過某個特定期限範圍\n    * „Man muss sich innerhalb von zwei Wochen nach dem Einzug beim Bürgeramt ummelden.“（搬入後必須在兩週之內到市民局辦理戶籍遷入登記。）\n  - vor + Dativ（在...之前）：表示在某個事件或時間點發生前\n    * „Vor dem Umzug muss man rechtzeitig viele Umzugskartons besorgen und packen.“（搬家前必須及時準備並打包許多紙箱。）\n    * „Vor der Schlüsselübergabe überweisen wir die Kaution.“（在交鑰匙之前我們匯出押金。）\n  - nach + Dativ（在...之後）：表示在某事完成之後\n    * „Nach der erfolgreichen Ummeldung erhält man die amtliche Meldebescheinigung.“（順利完成戶籍變更後，將領到官方戶籍登記證明。）\n  - bei + Dativ（在...期間／在...當下過程）：\n    * „Beim Umzug helfen mir drei gute Freunde aus dem Deutschkurs.“（搬家時有三位德語課的好朋友幫我。）\n    * „Beim Termin im Bürgeramt müssen Sie Ihren Reisepass vorlegen.“（在市民局辦理時您必須出示護照。）\n  - ab + Dativ（從...時間點起）：表示某狀態或合約的起算點\n    * „Ab dem ersten November gilt der neue Mietvertrag.“（從十一月一日起新租約正式生效。）\n2.【德國戶籍遷徙登記（Ummeldung）法律規範與必備三大文件】：\n  - 依聯邦戶籍法（Bundesmeldegesetz, § 17 BMG），遷入新居後有法定義務於 14 日內（innerhalb von zwei Wochen）完成登記，逾期恐面臨高額罰款（Bußgeld）。\n  - 臨櫃必備三大文件：\n    * ① Gültiger Reisepass oder Personalausweis（有效護照或身分證件）\n    * ② Wohnungsgeberbestätigung（由房東或房屋產權人親筆簽名之「房客入住確認書」；沒有此文件市民局絕不受理！）\n    * ③ Anmeldeformular（填妥之戶籍登記申請表格）\n  - 辦理完畢後核發【Die amtliche Meldebescheinigung（戶籍遷徙登記證明書）】，開立德國銀行帳戶、簽約電信網路與辦理居留延簽均以此件為憑！",
      "ruleExample": [
        {
          "de": "Man muss sich innerhalb von zwei Wochen nach dem Umzug beim Bürgeramt ummelden.",
          "zh": "搬家後必須在兩週之內至市民局辦理戶籍遷入登記。",
          "note": "innerhalb von + Dativ (兩週期限內)"
        },
        {
          "de": "Vor dem Auszug muss die alte Wohnung besenrein übergeben werden.",
          "zh": "搬離之前，舊公寓必須清理乾淨（掃地清潔程度）進行點交。",
          "note": "vor + Dativ (在...之前)"
        },
        {
          "de": "Nach der Anmeldung erhält man sofort die offizielle Meldebescheinigung.",
          "zh": "完成登記後，即可立刻領取官方戶籍登記證明書。",
          "note": "nach + Dativ (在...之後)"
        },
        {
          "de": "Beim Termin müssen Sie Ihren Reisepass und die Wohnungsgeberbestätigung vorlegen.",
          "zh": "預約面辦時，您必須出示護照與房東入住確認書。",
          "note": "bei + Dativ (在...過程中/面辦時)"
        }
      ]
    },
    "vocabulary": [
      {
        "id": "d152_v1",
        "word": "der Umzug",
        "article": "der",
        "plural": "die Umzüge",
        "meaning": "搬家、遷移住處",
        "ipa": "/ˈʔʊmˌt͡suːk/",
        "example": "Der Umzug in eine andere Stadt war gut organisiert und hat reibungslos geklappt.",
        "exampleTr": "搬遷到另一座城市的過程組織得很好，進行得非常順利。"
      },
      {
        "id": "d152_v2",
        "word": "umziehen",
        "meaning": "搬家、搬遷（zieht um, zog um, ist umgezogen；搭配 sein）",
        "ipa": "/ˈʔʊmˌt͡siːən/",
        "example": "Wir sind vor zwei Wochen in unsere neue Wohnung umgezogen.",
        "exampleTr": "我們兩週前搬進了我們的新公寓。"
      },
      {
        "id": "d152_v3",
        "word": "der Umzugskarton",
        "article": "der",
        "plural": "die Umzugskartons",
        "meaning": "搬家紙箱",
        "ipa": "/ˈʔʊmtsuːkskaʁˌtɔŋ/",
        "example": "Wir müssen noch zehn stabile Umzugskartons im Baumarkt kaufen.",
        "exampleTr": "我們還得在特力屋建材超市買十個結實的搬家紙箱。"
      },
      {
        "id": "d152_v4",
        "word": "das Bürgeramt",
        "article": "das",
        "plural": "die Bürgerämter",
        "meaning": "市民服務局、戶政事務所（亦稱 Einwohnermeldeamt）",
        "ipa": "/ˈbʏʁɡɐˌʔamt/",
        "example": "Für die Wohnsitzanmeldung muss man vorab online einen Termin beim Bürgeramt buchen.",
        "exampleTr": "辦理戶籍遷入登記前，必須先在市民局官網線上預約時間。"
      },
      {
        "id": "d152_v5",
        "word": "sich ummelden",
        "meaning": "辦理戶籍地址變更登記",
        "ipa": "/ˈʔʊmˌmɛldn̩/",
        "example": "Nach jedem Umzug muss man sich innerhalb von 14 Tagen offiziell ummelden.",
        "exampleTr": "每次搬家後，都必須在 14 天內正式辦理戶籍變更登記。"
      },
      {
        "id": "d152_v6",
        "word": "die Wohnungsgeberbestätigung",
        "article": "die",
        "plural": "die Wohnungsgeberbestätigungen",
        "meaning": "房東出具之房客入住確認證明（戶籍登記法定必備文件）",
        "ipa": "/ˈvoːnʊŋsɡeːbɐbəˌʃɛːtɪɡʊŋ/",
        "example": "Ohne eine vom Vermieter unterschriebene Wohnungsgeberbestätigung ist keine Anmeldung möglich.",
        "exampleTr": "沒有房東簽名的入住確認書，就無法辦理戶籍登記。"
      },
      {
        "id": "d152_v7",
        "word": "die Meldebescheinigung",
        "article": "die",
        "plural": "die Meldebescheinigungen",
        "meaning": "戶籍遷徙登記證明書",
        "ipa": "/ˈmɛldəbəˌʃaɪ̯nɪɡʊŋ/",
        "example": "Die Meldebescheinigung wird für die Eröffnung eines Bankkontos dringend benötigt.",
        "exampleTr": "在銀行開立帳戶急需出示這張戶籍登記證明書。"
      },
      {
        "id": "d152_v8",
        "word": "die Frist",
        "article": "die",
        "plural": "die Fristen",
        "meaning": "期限、法定截止時限",
        "ipa": "/fʁɪst/",
        "example": "Wer die gesetzliche Frist von zwei Wochen versäumt, muss ein Bußgeld zahlen.",
        "exampleTr": "錯過兩週法定期限的人必須支付罰款。"
      }
    ],
    "listening": {
      "title": "Hörverständnis: Am Schalter des Bürgeramts (市民局臨櫃辦理戶籍登記)",
      "situation": "Herr Novak hat einen Termin im Bürgeramt Frankfurt, um seinen neuen Wohnsitz nach dem Umzug offiziell anzumelden.",
      "dialogue": [
        {
          "speaker": "Beamtin",
          "de": "Guten Tag! Nummer 142 bitte. Sie haben einen Termin zur Wohnsitzanmeldung?",
          "zh": "午安！請 142 號上前。您有預約辦理戶籍登記事務嗎？"
        },
        {
          "speaker": "Herr Novak",
          "de": "Guten Tag! Ja, genau. Ich bin vor zehn Tagen von München nach Frankfurt umgezogen und möchte mich nun gerne ummelden.",
          "zh": "午安！是的，沒錯。我十天前從慕尼黑搬到法蘭克福，現在想辦理戶籍遷入登記。"
        },
        {
          "speaker": "Beamtin",
          "de": "Sehr gut, dass Sie innerhalb der zweiwöchigen Frist da sind! Haben Sie Ihren Pass und die Wohnungsgeberbestätigung dabei?",
          "zh": "太好了，您是在兩週法定期限內過來的！您有隨身攜帶護照和房東入住確認書嗎？"
        },
        {
          "speaker": "Herr Novak",
          "de": "Ja, hier ist mein gültiger Reisepass und hier ist das Formular, das meine neue Vermieterin ausgefüllt und unterschrieben hat.",
          "zh": "有的，這是我的有效護照，而這是我的新女房東填寫並簽名的確認書表格。"
        },
        {
          "speaker": "Beamtin",
          "de": "Vielen Dank. Ich prüfe kurz die Daten im System... Hauptwohnsitz in der Schillerstraße 15, Einzugsdatum 1. November. Das ist alles vollständig.",
          "zh": "謝謝。我簡短在系統中核對資料... 主要戶籍地址在席勒街 15 號，入住日期為 11 月 1 日。資料全部齊全。"
        },
        {
          "speaker": "Herr Novak",
          "de": "Kostet die Anmeldung eigentlich eine Gebühr?",
          "zh": "請問戶籍登記需要繳納手續費嗎？"
        },
        {
          "speaker": "Beamtin",
          "de": "Nein, die einfache Ummeldung ist bei uns gebührenfrei. Hier drucke ich Ihre amtliche Meldebescheinigung aus. Bitte überprüfen Sie noch einmal Ihre Daten und unterschreiben Sie hier unten.",
          "zh": "不需要，一般戶籍登記在我們這裡是免費的。我現在為您列印官方戶籍登記證明書。請再次核對個人資料並在下方此處簽名。"
        },
        {
          "speaker": "Herr Novak",
          "de": "Alles stimmt ganz genau. Vielen herzlichen Dank für die schnelle Hilfe!",
          "zh": "一切都完全正確。非常感謝您的迅速協助！"
        }
      ],
      "questions": [
        {
          "id": "d152_q1",
          "question": "Warum lobt die Beamtin Herrn Novak? (承辦公務員為什麼稱讚 Novak 先生？)",
          "options": [
            "Weil er perfekt Deutsch spricht (因為他德語說得非常流利)",
            "Weil er innerhalb der gesetzlichen Frist von zwei Wochen gekommen ist (因為他在兩週法定時限之內準時前來辦理)",
            "Weil er Schokolade mitgebracht hat (因為他帶了巧克力)",
            "Weil er bar bezahlen möchte (因為他想用現金付款)"
          ],
          "correctIndex": 1,
          "explanation": "公務員說道：「Sehr gut, dass Sie innerhalb der zweiwöchigen Frist da sind!」。"
        },
        {
          "id": "d152_q2",
          "question": "Wie viel kostet die einfache Ummeldung beim Bürgeramt? (市民局一般戶籍遷入登記收費多少？)",
          "options": [
            "Sie ist vollkommen gebührenfrei (完全免費)",
            "50 Euro (50 歐元)",
            "100 Euro (100 歐元)",
            "Drei Monatsmieten (三個月租金)"
          ],
          "correctIndex": 0,
          "explanation": "公務員明確回答：「Nein, die einfache Ummeldung ist bei uns gebührenfrei.」。"
        }
      ]
    },
    "speaking": {
      "title": "Sprechtraining: Über den Umzug und Behördentermine berichten (敘述搬家與公家機關辦事手續)",
      "instruction": "請運用時間介系詞（innerhalb von, vor, nach, bei），大聲流暢朗讀：",
      "targetSentences": [
        {
          "id": "d152_s1",
          "de": "Ich bin vor einer Woche umgezogen und muss mich innerhalb von 14 Tagen beim Bürgeramt ummelden.",
          "zh": "我一週前搬家了，必須在 14 天內到市民局辦理戶籍遷入登記。",
          "phoneticTip": "innerhalb von [ˈɪnɐhalp fɔn] 連讀流暢。"
        },
        {
          "id": "d152_s2",
          "de": "Vor dem Termin muss man die Wohnungsgeberbestätigung vom Vermieter unterschreiben lassen.",
          "zh": "在面辦之前，必須請房東在入住確認書上簽名。",
          "phoneticTip": "Wohnungsgeberbestätigung 長複合字分段發音：Wohnungs-geber-bestätigung。"
        },
        {
          "id": "d152_s3",
          "de": "Nach der erfolgreichen Anmeldung bekommt man sofort die offizielle Meldebescheinigung.",
          "zh": "順利完成登記後，就能立即領取官方戶籍證明書。",
          "phoneticTip": "Meldebescheinigung [ˈmɛldəbəˌʃaɪ̯nɪɡʊŋ] 重音在 -bescheinigung。"
        },
        {
          "id": "d152_s4",
          "de": "Beim Einzug haben mir viele fleißige Helfer beim Tragen der schweren Kartons geholfen.",
          "zh": "搬進來時，許多熱心的幫手幫我搬運沉重的紙箱。",
          "phoneticTip": "schweren Kartons 注意 Kartons 外來語後綴鼻音。"
        }
      ],
      "rolePlay": {
        "partnerName": "Bürgeramt-Sachbearbeiterin",
        "partnerRole": "市民局承辦人員 (A2 口說 Teil 3 / Behördengang)",
        "scenario": "您來到市民局臨櫃辦理遷入登記，承辦人員詢問您的入住時間與必備文件。",
        "promptDe": "Guten Tag! Wann genau sind Sie in die neue Wohnung eingezogen, und haben Sie alle Unterlagen dabei?",
        "promptZh": "午安！您具體是在何時搬進新公寓的？所有必備文件都帶齊了嗎？",
        "sampleReplies": [
          "Guten Tag! Ich bin am ersten November eingezogen. Hier sind mein Reisepass und die vom Vermieter unterschriebene Wohnungsgeberbestätigung.",
          "Hallo! Ich bin vor acht Tagen umgezogen. Das Anmeldeformular habe ich bereits ausgefüllt, und hier ist meine Bestätigung."
        ]
      }
    },
    "reading": {
      "title": "Leseverständnis: Informationsblatt der Stadtverwaltung zur Wohnsitzanmeldung (市政府戶籍登記官方須知說明單)",
      "documentType": "Aushang",
      "content": "STADTVERWALTUNG BÜRGERBÜRO\nMERKBLATT ZUR ANMELDEPFLICHT GEMÄSS § 17 BUNDESMELDEGESETZ (BMG)\n\nSehr geehrte Bürgerinnen und Bürger,\n\nwer eine neue Wohnung bezieht, ist nach dem Bundesmeldegesetz verpflichtet, sich innerhalb von zwei Wochen (14 Tagen) nach dem tatsächlichen Einzugsdatum bei der zuständigen Meldebehörde anzumelden.\n\nZur Anmeldung sind zwingend folgende Unterlagen mitzubringen:\n1. Gültiges Ausweisdokument (Personalausweis oder Reisepass) für jede anzumeldende Person.\n2. Vollständig ausgefüllte und vom Vermieter / Eigentümer im Original unterzeichnete Wohnungsgeberbestätigung. Der Mietvertrag allein reicht als Nachweis NICHT aus!\n3. Ausgefülltes und unterschriebenes Anmeldeformular.\n\nWichtige Hinweise:\n- Die Wohnsitzanmeldung ist gebührenfrei.\n- Bei Versäumnis der zweiwöchigen Meldefrist kann gemäß § 54 BMG ein Bußgeld von bis zu 1.000 Euro verhängt werden.\n- Termine können online über das Bürgerportal gebucht werden. Für dringende Fälle stehen mittwochs morgens Notfallschalter ohne Termin zur Verfügung.\n\nIhre Stadtverwaltung",
      "translation": "市政府市民服務處\n依據聯邦戶籍法（BMG）第 17 條戶籍登記義務須知說明備忘錄\n\n尊敬的市民女士們、先生們：\n\n凡遷入新居者，依據聯邦戶籍法有法定義務於實際入住日起兩週（14 天）之內，前往主管戶政機關辦理戶籍遷入登記。\n\n辦理登記必須強制攜帶下列文件：\n1. 每位申報人本人的有效身分證明文件（身分證或護照）。\n2. 完整填寫並由房東/產權人親筆簽名之「房客入住確認書（Wohnungsgeberbestätigung）」正本。單純出示房屋租賃合約「不足以」作為法定證明！\n3. 填妥並簽名之戶籍登記申請表。\n\n重要提醒：\n- 戶籍地址登記完全免費。\n- 若逾越兩週法定期限，依聯邦戶籍法第 54 條最高可處以 1,000 歐元之行政罰款。\n- 可透過市民服務線上入口網站預約時段。針對緊急情況，每週三上午設有免預約緊急窗口。\n\n市政府 啟",
      "glossary": {
        "Bundesmeldegesetz": {
          "pos": "das",
          "meaning": "聯邦戶籍法（縮寫為 BMG）"
        },
        "unterzeichnen": {
          "pos": "verb",
          "meaning": "簽名、簽署"
        },
        "Bußgeld": {
          "pos": "das",
          "meaning": "行政罰款、違規罰金"
        },
        "Notfallschalter": {
          "pos": "der",
          "meaning": "免預約緊急應急窗口"
        }
      },
      "questions": [
        {
          "id": "d152_rq1",
          "question": "Reicht der Mietvertrag für die Anmeldung beim Bürgeramt aus? (單憑租賃合約足夠在市民局辦理戶籍登記嗎？)",
          "options": [
            "Ja, der Mietvertrag allein reicht völlig aus. (是的，單憑租賃合約完全足夠)",
            "Nein, man braucht zwingend eine unterschriebene Wohnungsgeberbestätigung. (不夠，強制必須具備房東簽名的入住確認書)",
            "Nur wenn der Vermieter persönlich mitkommt. (只有當房東親自陪同前來時才足夠)",
            "Ja, wenn man eine Kaution bezahlt hat. (只要有付押金就足夠)"
          ],
          "correctIndex": 1,
          "explanation": "說明第 2 點明確強調：「Der Mietvertrag allein reicht als Nachweis NICHT aus!」。"
        },
        {
          "id": "d152_rq2",
          "question": "Was kann passieren, wenn man sich NICHT innerhalb von zwei Wochen anmeldet? (若未在兩週之內辦理登記，可能會發生什麼後果？)",
          "options": [
            "Man muss sofort die Wohnung kündigen. (必須立刻退租公寓)",
            "Es kann ein Bußgeld von bis zu 1.000 Euro verhängt werden. (最高可被處以 1,000 歐元行政罰款)",
            "Der Pass wird ungültig. (護照會失效)",
            "Nichts, es gibt überhaupt keine Frist. (沒事，完全沒有任何期限限制)"
          ],
          "correctIndex": 1,
          "explanation": "須知提醒中註明：「kann gemäß § 54 BMG ein Bußgeld von bis zu 1.000 Euro verhängt werden.」。"
        }
      ]
    },
    "examTip": {
      "skill": "Hören",
      "title": "A2 聽力速破：抓住公家機關與期限的關鍵數字（Fristen & Dokumente）",
      "content": "聽力測驗涉及行政戶政或租屋情境時，考題核心通常緊扣「時間期限」與「文件名稱」。當聽到「innerhalb von...（在...之內）」、「spätestens（最遲）」或「Frist」時，請立刻記錄後方的時間數字（z.B. zwei Wochen, 14 Tage）。若聽到「gebührenfrei / kostenlos」，代表無需付費，切勿選收費選項！"
    }
  },
  "153": {
    "day": 153,
    "stage": "A2",
    "week": 22,
    "dayOfWeek": 6,
    "title": "Woche 22 Rückblick & Test 第 22 週總複習與全真測驗：形容詞三大變化完整矩陣與居家生活實戰",
    "germanTitle": "Woche 22 Rückblick und Modultest: Adjektivdeklination, Wohnen und Nachbarschaft",
    "theme": "第 22 週全單元文法統整：形容詞三大變化橫向對比總表（Typ 1 定冠詞, Typ 2 不定冠詞, Typ 3 零冠詞）、居住租屋與住戶公約高頻單字總檢視、歌德 A2 聽力與閱讀全規模模考",
    "estimatedMinutes": 20,
    "grammar": {
      "title": "形容詞變化三大類型終極全景對比矩陣（Adjektivdeklination Typ 1, 2 und 3 im direkten Vergleich）",
      "explanation": "恭喜你完成了第 22 週的學習！本週我們攻克了形容詞變化的最後一塊拼圖——「零冠詞強變化（Typ 3）」，並深入掌握了德國租屋、住戶公約與鄰里溝通。以下是歌德 A2 考試最具價值的全景對比總表：\n1.【形容詞三大變化類型核心特徵綜整】：\n  - Typ 1（定冠詞 der/die/das 後）：弱變化（Schwache Deklination）。只有兩種結尾：-e 或 -en！第一格單數三性與陰/中第四格為 -e，其餘全部格位與所有複數一律為 -en！\n  - Typ 2（不定冠詞 ein/kein/mein 後）：混合變化（Gemischte Deklination）。單數第一格與中性第四格因冠詞無性別標記而顯露性別（-er, -e, -es），其餘所有格位與所有複數一律為 -en！\n  - Typ 3（零冠詞 ohne Artikel）：強變化（Starke Deklination）。形容詞全權借用定冠詞字尾（-er, -e, -es, -en, -em...）！唯一的致命考點是：陽性與中性第二格（Genitiv）例外加 -en（如: trotz starken Regens, wegen frischen Brotes）！\n2.【三大變化橫向全景對比矩陣（Nominativ / Akkusativ / Dativ）】：\n  - 陽性單數（Maskulin）：\n    * Typ 1: der alte Tisch / den alten Tisch / dem alten Tisch\n    * Typ 2: ein alter Tisch / einen alten Tisch / einem alten Tisch\n    * Typ 3: alter Tisch / alten Tisch / altem Tisch\n  - 陰性單數（Feminin）：\n    * Typ 1: die sonnige Wohnung / die sonnige Wohnung / der sonnigen Wohnung\n    * Typ 2: eine sonnige Wohnung / eine sonnige Wohnung / einer sonnigen Wohnung\n    * Typ 3: sonnige Wohnung / sonnige Wohnung / sonniger Wohnung\n  - 中性單數（Neutrum）：\n    * Typ 1: das helle Zimmer / das helle Zimmer / dem hellen Zimmer\n    * Typ 2: ein helles Zimmer / ein helles Zimmer / einem hellen Zimmer\n    * Typ 3: helles Zimmer / helles Zimmer / hellem Zimmer\n  - 複數名詞（Plural）：\n    * Typ 1: die lauten Nachbarn / die lauten Nachbarn / den lauten Nachbarn\n    * Typ 2: keine lauten Nachbarn / keine lauten Nachbarn / keinen lauten Nachbarn\n    * Typ 3: laute Nachbarn / laute Nachbarn / lauten Nachbarn\n3.【居住生活與退租點交核心句型回顧】：\n  - „Die Kündigungsfrist beträgt laut Mietvertrag drei Monate zum Monatsende.“（退租通知期依租約為三個月，於月底生效。）\n  - „Bei der Wohnungsübergabe wird ein detailliertes Übergabeprotokoll angefertigt.“（在房屋點交時會製作一份詳細的點交清冊。）",
      "ruleExample": [
        {
          "de": "Typ 1: Der freundliche Nachbar hilft mir oft im Garten.",
          "zh": "第 1 型（定冠詞）：這位友善的鄰居常常在花園幫我。",
          "note": "der freundliche (Mask. Nom. -e)"
        },
        {
          "de": "Typ 2: Ein freundlicher Nachbar hat das Paket für mich angenommen.",
          "zh": "第 2 型（不定冠詞）：一位友善的鄰居幫我代收了包裹。",
          "note": "ein freundlicher (Mask. Nom. -er)"
        },
        {
          "de": "Typ 3: Frischer, heißer Kaffee schmeckt am Sonntagmorgen herrlich.",
          "zh": "第 3 型（零冠詞）：新鮮滾燙的咖啡在週日早晨喝起來棒極了。",
          "note": "frischer, heißer (Mask. Nom. -er)"
        },
        {
          "de": "Die Wohnungsübergabe erfolgt nach dem vollständigen Streichen der Wände.",
          "zh": "房屋點交將在牆壁完全粉刷粉飾後進行。",
          "note": "die Wohnungsübergabe (點交程序)"
        }
      ]
    },
    "vocabulary": [
      {
        "id": "d153_v1",
        "word": "die Mietwohnung",
        "article": "die",
        "plural": "die Mietwohnungen",
        "meaning": "租賃公寓、出租房屋",
        "ipa": "/ˈmiːtˌvoːnʊŋ/",
        "example": "In Deutschland leben über die Hälfte aller Menschen in einer Mietwohnung.",
        "exampleTr": "在德國，超過一半以上的人口居住在租賃公寓中。"
      },
      {
        "id": "d153_v2",
        "word": "der Mietvertrag",
        "article": "der",
        "plural": "die Mietverträge",
        "meaning": "租賃合約、房屋租約",
        "ipa": "/ˈmiːtfɛɐ̯ˌtʁaːk/",
        "example": "Vor der Unterschrift sollte man den Mietvertrag sorgfältig durchlesen.",
        "exampleTr": "在簽字之前，應當仔細通讀租賃合約。"
      },
      {
        "id": "d153_v3",
        "word": "die Kündigungsfrist",
        "article": "die",
        "plural": "die Kündigungsfristen",
        "meaning": "退租解約通知期（德國法定通常為三個月）",
        "ipa": "/ˈkʏndɪɡʊŋsˌfʁɪst/",
        "example": "Die gesetzliche Kündigungsfrist für Mieter beträgt drei Monate.",
        "exampleTr": "房客退租的法定通知期為三個月。"
      },
      {
        "id": "d153_v4",
        "word": "die Hausverwaltung",
        "article": "die",
        "plural": "die Hausverwaltungen",
        "meaning": "大樓物業管理處、社區管委會",
        "ipa": "/ˈhaʊ̯sfɛɐ̯ˌvaltʊŋ/",
        "example": "Bei Schäden an der Heizung muss man die Hausverwaltung kontaktieren.",
        "exampleTr": "暖氣發生故障時，必須聯繫物業管理處。"
      },
      {
        "id": "d153_v5",
        "word": "die Übergabe",
        "article": "die",
        "plural": "die Übergaben",
        "meaning": "房屋點交、鑰匙交接（Wohnungsübergabe）",
        "ipa": "/ˈyːbɐˌɡaːbə/",
        "example": "Die Übergabe der Schlüssel findet am letzten Tag des Monats statt.",
        "exampleTr": "鑰匙點交移交於該月最後一天舉行。"
      },
      {
        "id": "d153_v6",
        "word": "das Übergabeprotokoll",
        "article": "das",
        "plural": "die Übergabeprotokolle",
        "meaning": "房屋點交驗收紀錄清冊",
        "ipa": "/ˈyːbɐɡaːbəpʁotoˌkɔl/",
        "example": "Alle bestehenden Mängel an der Wohnung werden im Übergabeprotokoll festgehalten.",
        "exampleTr": "公寓所有既有的瑕疵都會記錄在點交清冊中。"
      },
      {
        "id": "d153_v7",
        "word": "der Nachbar",
        "article": "der",
        "plural": "die Nachbarn",
        "meaning": "鄰居（陽性弱變化名詞 n-Deklination: dem/den Nachbarn）",
        "ipa": "/ˈnaxbaːɐ̯/",
        "example": "Ich verstehe mich sehr gut mit meinem neuen Nachbarn.",
        "exampleTr": "我和我的新鄰居相處得非常融洽。"
      },
      {
        "id": "d153_v8",
        "word": "die Nachbarschaft",
        "article": "die",
        "plural": "die Nachbarschaften",
        "meaning": "鄰里關係、鄰近街坊周邊",
        "ipa": "/ˈnaxbaːɐ̯ʃaft/",
        "example": "In unserer freundlichen Nachbarschaft hilft man sich immer gegenseitig.",
        "exampleTr": "在我們友善的鄰里社區中，大家總是守望相助。"
      }
    ],
    "listening": {
      "title": "Hörverständnis Modultest: Die Wohnungsübergabe (單元全真模考：房屋退租驗收點交)",
      "situation": "Frau Bauer zieht aus ihrer Mietwohnung aus und geht gemeinsam mit dem Verwalter Herrn Krause das offizielle Übergabeprotokoll durch.",
      "dialogue": [
        {
          "speaker": "Herr Krause",
          "de": "Guten Tag, Frau Bauer! Wir führen heute die offizielle Wohnungsübergabe durch. Ich sehe, die Wohnung ist komplett geräumt und alle Wände sind frisch weiß gestrichen.",
          "zh": "午安，Bauer 女士！我們今天進行正式的房屋點交。我看到公寓已經完全清空，而且所有牆面都重新粉刷成了乾淨的白色。"
        },
        {
          "speaker": "Frau Bauer",
          "de": "Guten Tag, Herr Krause! Ja, ich habe die Wohnung gründlich gereinigt und gestrichen. Hier habe ich auch alle Schlüssel: drei Hausschlüssel, zwei Wohnungsschlüssel und den Torschlüssel für den Müllplatz.",
          "zh": "午安，Krause 先生！是的，我把房屋徹底清潔並粉刷過了。這裡我還備齊了所有鑰匙：三支大門鑰匙、兩支房門鑰匙，以及垃圾回收場的柵門鑰匙。"
        },
        {
          "speaker": "Herr Krause",
          "de": "Ausgezeichnet, die Schlüssel sind vollzählig. Lassen Sie uns die Zählerstände ablesen: Der Stromzähler im Keller steht bei 14.520 Kilowattstunden und der Wasserzähler bei 312 Kubikmetern.",
          "zh": "太好了，鑰匙全數齊備。讓我們抄錄儀表度數：地下室的電表度數為 14,520 度，水表度數為 312 立方公尺。"
        },
        {
          "speaker": "Frau Bauer",
          "de": "Gut, ich trage die Zahlen gleich in unser Übergabeprotokoll ein. Gibt es ansonsten irgendwelche Mängel oder Beschädigungen?",
          "zh": "好的，我馬上把數字填入我們的點交清冊中。除此之外還有任何瑕疵或損壞嗎？"
        },
        {
          "speaker": "Herr Krause",
          "de": "Nein, die Wohnung ist in einem einwandfreien Zustand. Sowohl Parkett als auch Fenster sind ohne Schäden. Wenn Sie hier unten unterschreiben, erhalten Sie Ihre Kaution von 1.800 Euro innerhalb von vier Wochen auf Ihr Bankkonto zurück.",
          "zh": "沒有，公寓處於無可挑剔的良好狀態。木地板和窗戶都完好無損。只要您在下方簽字，您 1,800 歐元的押金將在四週之內全額退回您的銀行帳戶。"
        },
        {
          "speaker": "Frau Bauer",
          "de": "Das freut mich sehr! Hier ist meine Unterschrift. Vielen Dank für die faire Abwicklung!",
          "zh": "這真令我高興！這是我的簽名。非常感謝您的公正辦理！"
        }
      ],
      "questions": [
        {
          "id": "d153_q1",
          "question": "In welchem Zustand befindet sich die Wohnung bei der Übergabe? (點交時公寓處於何種狀態？)",
          "options": [
            "Sie ist schmutzig und die Wände sind beschädigt. (骯髒且牆壁損壞)",
            "In einem einwandfreien Zustand: geräumt, frisch gestrichen und sauber. (無可挑剔的良好狀態：已清空、剛粉刷且乾淨)",
            "Die Möbel sind noch alle in der Wohnung. (家具全部還留在公寓裡)",
            "Es fehlen alle Schlüssel für das Haus. (大樓所有鑰匙都遺失了)"
          ],
          "correctIndex": 1,
          "explanation": "Herr Krause 確認：「die Wohnung ist in einem einwandfreien Zustand. Sowohl Parkett als auch Fenster sind ohne Schäden.」。"
        },
        {
          "id": "d153_q2",
          "question": "Wann erhält Frau Bauer ihre Kaution zurück? (Bauer 女士何時能領回她的押金？)",
          "options": [
            "Sofort in bar (立刻領取現金)",
            "Innerhalb von vier Wochen auf ihr Bankkonto (四週之內匯入她的銀行帳戶)",
            "Erst in zwei Jahren (要等兩年後)",
            "Gar nicht, die Kaution wird einbehalten (根本領不回，押金被扣留)"
          ],
          "correctIndex": 1,
          "explanation": "Herr Krause 明確告知：「erhalten Sie Ihre Kaution von 1.800 Euro innerhalb von vier Wochen auf Ihr Bankkonto zurück.」。"
        }
      ]
    },
    "speaking": {
      "title": "Sprechtraining Modultest: Wohnungsübergabe und Kautionsrückzahlung (口說模考：房屋點交與押金退還諮詢)",
      "instruction": "請模擬歌德 A2 口說真實互動，清晰自信地朗讀下列實戰金句：",
      "targetSentences": [
        {
          "id": "d153_s1",
          "de": "Hier ist das vollständige Übergabeprotokoll mit allen abgelesenen Zählerständen.",
          "zh": "這是完整的點交驗收清冊，上面有所有抄錄的儀表度數。",
          "phoneticTip": "Übergabeprotokoll [ˈyːbɐɡaːbəpʁotoˌkɔl] 慢讀清晰。"
        },
        {
          "id": "d153_s2",
          "de": "Ich habe alle Wände weiß gestrichen und die Wohnung besenrein hinterlassen.",
          "zh": "我把所有牆面漆成了白色，並且將公寓打掃乾淨交付。",
          "phoneticTip": "besenrein [ˈbeːzn̩ˌʁaɪ̯n] 德語租屋專業術語（清掃乾淨狀態）。"
        },
        {
          "id": "d153_s3",
          "de": "Wann kann ich mit der Rücküberweisung meiner Kaution auf mein Konto rechnen?",
          "zh": "請問我大概何時可以收到退回至我帳戶的押金？",
          "phoneticTip": "Rücküberweisung 重音在 Rück-。"
        },
        {
          "id": "d153_s4",
          "de": "Wir haben uns mit den Nachbarn stets hervorragend verstanden und keine Konflikte gehabt.",
          "zh": "我們和鄰居們一直相處得極為融洽，從未發生過任何糾紛。",
          "phoneticTip": "hervorragend [hɛɐ̯ˈfoːɐ̯ˌʁaːɡn̩t] 讚賞肯定語調。"
        }
      ],
      "rolePlay": {
        "partnerName": "Herr Krause",
        "partnerRole": "Hausverwalter (物業管理員 / 歌德考官 A2 Sprechen Teil 3)",
        "scenario": "您正在與物業管理員進行退租房屋點交，請主動說明您所做的清潔與鑰匙歸還。",
        "promptDe": "Guten Tag! Haben Sie alle Schlüssel dabei, und wie sieht es mit dem Streichen der Wände aus?",
        "promptZh": "午安！所有鑰匙您都隨身帶來了嗎？牆壁粉刷的情況如何呢？",
        "sampleReplies": [
          "Guten Tag! Ja, ich habe alle sechs Schlüssel vollzählig dabei. Alle Zimmer wurden frisch weiß gestrichen und die Böden gründlich gewischt.",
          "Hier sind die Haus- und Wohnungsschlüssel. Wir sind bereit, die Zählerstände gemeinsam im Protokoll einzutragen."
        ]
      }
    },
    "reading": {
      "title": "Leseverständnis Modultest: Kündigungsschreiben für eine Mietwohnung (閱讀模考：終止租賃合約正式信函)",
      "documentType": "E-Mail",
      "content": "Betreff: Kündigung meines Mietvertrags für die Wohnung Nr. 12, Rosenweg 4, 80331 München\nDatum: 28. Juli\nVon: Markus Lindner (markus.lindner@email.de)\nAn: Hausverwaltung Schmidt & Partner (info@hausverwaltung-schmidt.de)\n\nSehr geehrte Damen und Herren,\n\nhiermit kündige ich den bestehenden Mietvertrag für die oben genannte 2-Zimmer-Wohnung unter Einhaltung der gesetzlichen Kündigungsfrist von drei Monaten fristgerecht zum 31. Oktober dieses Jahres.\n\nGrund für den Auszug ist ein beruflicher Wechsel in eine andere Stadt. Bitte senden Sie mir eine schriftliche Bestätigung dieser Kündigung unter Angabe des Beendigungszeitpunkts zu.\n\nBezüglich der Wohnungsübergabe und der Ablesung der Zählerstände schlage ich den 30. Oktober um 15:00 Uhr vor. Sollte Ihnen dieser Termin nicht passen, teilen Sie mir bitte zeitnah alternative Terminvorschläge mit.\n\nDie Mietkaution in Höhe von 1.500 Euro überweisen Sie bitte nach ordnungsgemäßer Wohnungsübergabe auf mein Ihnen bekanntes Bankkonto bei der Deutschen Bank.\n\nIch bedanke mich herzlich für die angenehme Mietzeit in Ihrem Hause.\n\nMit freundlichen Grüßen,\nMarkus Lindner",
      "translation": "主旨：終止慕尼黑玫瑰路 4 號 12 號公寓之租賃合約\n日期：7 月 28 日\n寄件人：Markus Lindner (markus.lindner@email.de)\n收件人：Schmidt & Partner 物業管理處 (info@hausverwaltung-schmidt.de)\n\n尊敬的女士們、先生們：\n\n本人特此在遵守三個月法定解約通知期的前提下，依法依規於本年度 10 月 31 日正式終止上述兩房公寓之現有租賃合約。\n\n搬遷的原因係因本人職務調動至另一座城市。請向我寄送一份載明合約終止確切時間點的書面解約確認函。\n\n關於房屋點交及儀表度數抄錄，本人建議訂於 10 月 30 日下午 15:00 進行。若該時段您不克前來，請及時告知我其他備選時間提議。\n\n房屋租賃押金計 1,500 歐元，敬請於完成正式房屋點交後，匯回您所知曉的本人德意志銀行帳戶。\n\n由衷感謝在貴處大樓度過的愉快租賃時光。\n\n致上誠摯問候，\nMarkus Lindner 敬啟",
      "glossary": {
        "fristgerecht": {
          "pos": "adj",
          "meaning": "合乎法定期限規定的"
        },
        "Zählerstand": {
          "pos": "der",
          "meaning": "儀表度數（水錶、電錶、瓦斯錶）"
        },
        "Beendigungszeitpunkt": {
          "pos": "der",
          "meaning": "合約終止時間點"
        },
        "ordnungsgemäß": {
          "pos": "adj",
          "meaning": "按規定合規妥當的"
        }
      },
      "questions": [
        {
          "id": "d153_rq1",
          "question": "Zu welchem Datum kündigt Herr Lindner das Mietverhältnis? (Lindner 先生於何日正式終止租約？)",
          "options": [
            "Zum 28. Juli (7 月 28 日)",
            "Zum 31. Oktober (10 月 31 日)",
            "Zum 30. Oktober (10 月 30 日)",
            "Ab sofort ohne Frist (無通知期即刻解約)"
          ],
          "correctIndex": 1,
          "explanation": "信中第一段明確寫道：「unter Einhaltung der gesetzlichen Kündigungsfrist von drei Monaten fristgerecht zum 31. Oktober dieses Jahres.」。"
        },
        {
          "id": "d153_rq2",
          "question": "Aus welchem Grund zieht Herr Lindner aus der Wohnung aus? (Lindner 先生因何原因搬離該公寓？)",
          "options": [
            "Er hat sich mit den Nachbarn zerstritten. (他與鄰居發生激烈爭吵)",
            "Wegen eines beruflichen Wechsels in eine andere Stadt. (因為工作調動前往另一座城市)",
            "Weil die Miete zu teuer wurde. (因為房租太貴)",
            "Weil die Heizung kaputt ist. (因為暖氣壞了)"
          ],
          "correctIndex": 1,
          "explanation": "第二段明確註明事由：「Grund für den Auszug ist ein beruflicher Wechsel in eine andere Stadt.」。"
        }
      ]
    },
    "examTip": {
      "skill": "Lesen",
      "title": "Goethe A2 Prüfungsstrategie: Modultest Gesamtrückblick (模考實戰心法：冷靜鎖定解約期限與合約責任)",
      "content": "在應對正式商務或租賃書信閱讀題時，請建立「實體資訊快速抓取雷達」：1. 合約終止日（kündigen zum...）；2. 解約理由（Grund: beruflicher Wechsel）；3. 關鍵請求動作（Kaution überweisen, Bestätigung zusenden）。只要抓住主旨句與結尾款項要求，任何 A2 閱讀題型都能在 30 秒內快速鎖定正確答案！"
    }
  },
  "154": {
    "day": 154,
    "stage": "A2",
    "week": 22,
    "dayOfWeek": 7,
    "title": "Kultur: Die deutsche Kehrwoche & Mieterkultur 德國文化專題：施瓦本清掃週與高比例租屋文化",
    "germanTitle": "Deutsche Alltagskultur: Die schwäbische Kehrwoche, Mieterkultur und der Mieterbund",
    "theme": "德國生活文化、施瓦本清掃週（Die Kehrwoche）、清掃輪值木牌（das Kehrwoche-Schild）、冬季除雪義務（der Winterdienst）、德國超高租屋比例（Die Mieterquote）、房客權益保障與租客協會（Deutscher Mieterbund）",
    "estimatedMinutes": 20,
    "grammar": {
      "title": "德國居住國情文化解析：斯瓦比亞清掃週、租屋法制與租客保障制度",
      "explanation": "德國的居住型態在歐洲獨樹一幟。要真正融入德國社會並在歌德口說考試中展現深度文化見解，必須認識兩大經典國情特色：\n1.【南德文化傳奇：施瓦本清掃週（Die Schwäbische Kehrwoche）】：\n  - 歷史淵源：可追溯至 15 世紀烏姆（Ulm）與斯圖加特等南德城市的街道衛生法規。在沒有現代專業物業清潔公司的年代，居民必須自主輪流維護公共衛生，如今演變為深植於巴登-符騰堡邦（Baden-Württemberg）的民俗制度。\n  - 運作機制與清掃標誌牌（Kehrwoche-Schild）：\n    * 公寓住戶每週輪流輪值打掃公共區域。當輪到某一戶時，一塊印有「Kehrwoche」的小木牌就會掛在該戶大門把手上，象徵當週責任值日生！\n    * Kleine Kehrwoche（小清掃週）：打掃自己所居住樓層的走廊與樓梯台階。\n    * Große Kehrwoche（大清掃週）：徹底打掃整棟大樓一樓門廳、地下室走道、大門口外玄關以及室外步道。\n    * Der Winterdienst（冬季剷雪與除冰義務）：冬季若降雪或路面結冰，輪值住戶必須在早晨 07:00 前將建築物外人行道上的積雪剷除並撒上防滑沙鹽（Streusand），以防行人滑倒。若未履行導致路人受傷，該住戶須承擔民事損害賠償責任！\n2.【為什麼過半數德國人選擇終身租屋？（Die deutsche Mieterkultur）】：\n  - 超低的房屋自有率（Niedrige Eigentumsquote）：全德國僅約 46% 至 49% 的家庭擁有自有住宅產權，租屋人口比例（Mieterquote）超過半數，在柏林、漢堡等大城市租客比例更高達 70% 至 80%，遠低於南歐與東歐（南歐購房率常達 75% 以上）。\n  - 嚴格的法律房客保護機制（Strenger Mieterschutz im BGB）：\n    * 德國法律將房屋視為基本民生福祉。房東不能隨意驅逐房客（嚴格的解約保護 Kündigungsschutz）。除非房東能舉證充分的「直系親屬自住需求（Eigenbedarf）」，否則無權單方面解除合法合約。\n    * 租金漲幅煞車限制機制（Mietpreisbremse）法律明訂續約或新租約租金調漲之上限，防止惡意炒房與哄抬價格。\n  - 房客的強大後盾：德國租客協會（Deutscher Mieterbund, DMB）：\n    * 全德各地擁有數百個地方分會與三百多萬會員。會員每月僅需繳納微薄會費，即可獲得專業房地產律師的免費諮詢與訴訟保險，有效平衡房東與房客的法律實力。",
      "ruleExample": [
        {
          "de": "In vielen Häusern in Baden-Württemberg hängt das Kehrwoche-Schild an der Tür.",
          "zh": "在巴登-符騰堡邦的許多公寓裡，門把上都掛著清掃週的輪值木牌。",
          "note": "das Kehrwoche-Schild (輪值牌)"
        },
        {
          "de": "Beim Winterdienst müssen die Bewohner frühmorgens Schnee schaufeln und streuen.",
          "zh": "在執行冬季剷雪義務時，住戶必須清晨剷雪並撒鹽防滑。",
          "note": "Schnee schaufeln und streuen"
        },
        {
          "de": "Über die Hälfte aller Haushalte in Deutschland lebt dauerhaft zur Miete.",
          "zh": "德國超過半數的家庭長年以租屋方式居住。",
          "note": "leben zur Miete (租屋居住)"
        },
        {
          "de": "Der Deutsche Mieterbund schützt Mieterinnen und Mieter vor unberechtigten Kündigungen.",
          "zh": "德國租客協會保護租客免受不合理的違規解約驅逐。",
          "note": "schützen vor + Dativ"
        }
      ]
    },
    "vocabulary": [
      {
        "id": "d154_v1",
        "word": "die Kehrwoche",
        "article": "die",
        "plural": "die Kehrwochen",
        "meaning": "社區輪值清掃週（特指南德施瓦本之傳統）",
        "ipa": "/ˈkeːɐ̯ˌvɔxə/",
        "example": "Wenn das Schild an meiner Tür hängt, habe ich diese Woche Kehrwoche.",
        "exampleTr": "當牌子掛在我門上時，代表本週輪到我負責清掃週。"
      },
      {
        "id": "d154_v2",
        "word": "fegen",
        "meaning": "打掃、掃地（亦作 kehren）",
        "ipa": "/ˈfeːɡn̩/",
        "example": "Samstags fegen die Bewohner das Treppenhaus und den Gehweg vor dem Haus.",
        "exampleTr": "週六住戶會清掃樓梯間以及大樓門前的人行道。"
      },
      {
        "id": "d154_v3",
        "word": "der Winterdienst",
        "article": "der",
        "plural": "die Winterdienste",
        "meaning": "冬季清雪剷雪與撒沙鹽防滑義務",
        "ipa": "/ˈvɪntɐˌdiːnst/",
        "example": "Im Januar muss man beim Winterdienst schon um 6:30 Uhr Schnee schaufeln.",
        "exampleTr": "在一月執行冬季除雪時，早在清晨 6:30 就必須起床剷雪。"
      },
      {
        "id": "d154_v4",
        "word": "die Mieterquote",
        "article": "die",
        "plural": "die Mieterquoten",
        "meaning": "租屋人口比例（全德超過 50%）",
        "ipa": "/ˈmiːtɐˌkvoːtə/",
        "example": "Deutschland hat im europäischen Vergleich eine außergewöhnlich hohe Mieterquote.",
        "exampleTr": "在歐洲範圍對比下，德國擁有異乎尋常的高租屋比例。"
      },
      {
        "id": "d154_v5",
        "word": "das Wohneigentum",
        "article": "das",
        "plural": "das Wohneigentum (nur Singular)",
        "meaning": "自有住宅產權、自購不動產物業",
        "ipa": "/ˈvoːnʔaɪ̯ɡn̩ˌtuːm/",
        "example": "Wegen der hohen Kaufpreise können sich viele junge Familien kein Wohneigentum leisten.",
        "exampleTr": "由於高昂的房價，許多年輕家庭負擔不起自置房產。"
      },
      {
        "id": "d154_v6",
        "word": "der Mieterschutz",
        "article": "der",
        "plural": "der Mieterschutz (nur Singular)",
        "meaning": "房客權益法律保障制度",
        "ipa": "/ˈmiːtɐˌʃʊt͡s/",
        "example": "Der gesetzliche Mieterschutz verhindert willkürliche Kündigungen durch den Vermieter.",
        "exampleTr": "法定的房客保障制度防止了房東的任意解約驅離。"
      },
      {
        "id": "d154_v7",
        "word": "der Mieterverein",
        "article": "der",
        "plural": "die Mietervereine",
        "meaning": "租客權益互助協會（如 Deutscher Mieterbund）",
        "ipa": "/ˈmiːtɐfɛɐ̯ˌʔaɪ̯n/",
        "example": "Bei Streitigkeiten über die Nebenkostenabrechnung hilft der lokale Mieterverein.",
        "exampleTr": "發生水暖雜費結算爭議時，當地的租客協會能提供幫助。"
      },
      {
        "id": "d154_v8",
        "word": "die Schufa-Auskunft",
        "article": "die",
        "plural": "die Schufa-Auskünfte",
        "meaning": "德國個人信用紀錄徵信報告（租屋必備）",
        "ipa": "/ˈʃuːfaˌʔaʊ̯skʊnft/",
        "example": "Fast jeder Vermieter verlangt vor Vertragsabschluss eine positive Schufa-Auskunft.",
        "exampleTr": "幾乎每位房東在簽約前都會要求出示無不良紀錄的個人信用徵信報告。"
      }
    ],
    "listening": {
      "title": "Hörverständnis: Das Kehrwoche-Schild in Stuttgart (在斯圖加特門前的清掃週木牌)",
      "situation": "Herr Hauser erklärt seinem neuen spanischen Nachbarn Mateo in einem Stuttgarter Wohnhaus die schwäbische Kehrwoche.",
      "dialogue": [
        {
          "speaker": "Mateo",
          "de": "Guten Tag, Herr Hauser! Ich habe heute Morgen dieses kleine Holzschild mit der Aufschrift „Kehrwoche“ an meiner Wohnungstür gefunden. Hat das jemand versehentlich dort hingehängt?",
          "zh": "午安，Hauser 先生！今天早上我在我家門把上發現了這塊寫著「Kehrwoche」的小木牌。是不是有人不小心掛在那裡的？"
        },
        {
          "speaker": "Herr Hauser",
          "de": "Hallo Mateo! Nein, das war kein Versehen! Willkommen im Schwabenland: Das Schild bedeutet, dass Sie ab heute für eine Woche mit der Kehrwoche an der Reihe sind!",
          "zh": "哈囉 Mateo！不，那絕不是失誤！歡迎來到施瓦本地區：這塊牌子意味著從今天起的一整週輪到您負責清掃週了！"
        },
        {
          "speaker": "Mateo",
          "de": "Ach so! Davon habe ich schon mal gehört, aber was genau muss ich jetzt tun?",
          "zh": "啊這樣啊！我之前聽說過這件事，但我現在具體要做些什麼呢？"
        },
        {
          "speaker": "Herr Hauser",
          "de": "Auf dem Plan steht „Kleine Kehrwoche“. Das heißt, Sie müssen den Flur auf Ihrem Stockwerk und die Treppe bis zum nächsten Stockwerk fegen und feucht wischen.",
          "zh": "輪值表上寫著「小清掃週」。這表示您必須把您所在樓層的走廊以及通往下層的樓梯階梯掃乾淨並用濕布擦拭。"
        },
        {
          "speaker": "Mateo",
          "de": "Verstehe, das ist ja gar nicht so viel Arbeit. Und was passiert, wenn es schneit?",
          "zh": "明白了，這工作量其實不算太大。那如果下雪的話呢？"
        },
        {
          "speaker": "Herr Hauser",
          "de": "Wenn es friert oder schneit, haben Sie auch Winterdienst. Dann muss der Gehweg vor dem Hauseingang morgens bis 7 Uhr von Schnee befreit und mit Sand gestreut werden, damit niemand ausrutscht.",
          "zh": "如果結冰或下雪，您也要負責冬季除雪任務。那樣的話大門前的人行道必須在早晨 7 點前把積雪清理乾淨並撒上沙子，以防有人滑倒。"
        },
        {
          "speaker": "Mateo",
          "de": "Alles klar, Besen und Eimer stehen im Putzraum im Keller, richtig? Nach einer Woche hänge ich das Schild dann einfach an die nächste Tür.",
          "zh": "完全明白，掃帚和水桶都放在地下室的清掃工具間，對吧？一週過後我就把牌子直接掛到下一家門上。"
        },
        {
          "speaker": "Herr Hauser",
          "de": "Ganz genau so funktioniert das! Sie haben das schwäbische System sofort verstanden!",
          "zh": "完全正確，就是這樣運作的！您立刻就摸透了施瓦本的體系！"
        }
      ],
      "questions": [
        {
          "id": "d154_q1",
          "question": "Was bedeutet das Schild „Kehrwoche“ an Mateos Tür? (Mateo 門上的「Kehrwoche」牌子代表什麼意思？)",
          "options": [
            "Dass die Wohnung verkauft wird (代表房子要被賣掉)",
            "Dass Mateo diese Woche für das Putzen im Treppenhaus zuständig ist (代表 Mateo 本週輪值負責樓梯間清掃)",
            "Dass er ein Paket abholen muss (代表他必須去領包裹)",
            "Dass er zu laut Musik gehört hat (代表他音樂放太大聲)"
          ],
          "correctIndex": 1,
          "explanation": "Herr Hauser 解釋：「Das Schild bedeutet, dass Sie ab heute für eine Woche mit der Kehrwoche an der Reihe sind!」。"
        },
        {
          "id": "d154_q2",
          "question": "Was muss man beim Winterdienst vor 7 Uhr morgens tun? (清晨 7 點前在冬季除雪任務中必須做什麼？)",
          "options": [
            "Den Gehweg vor dem Haus von Schnee befreien und Sand streuen (清掃大樓門前人行道的積雪並撒沙鹽)",
            "Das Treppenhaus neu streichen (重新粉刷樓梯間)",
            "Alle Nachbarn wecken (把所有鄰居叫醒)",
            "Die Heizung im Keller ausschalten (關掉地下室暖氣)"
          ],
          "correctIndex": 0,
          "explanation": "對話明確說明：「muss der Gehweg vor dem Hauseingang morgens bis 7 Uhr von Schnee befreit und mit Sand gestreut werden」。"
        }
      ]
    },
    "speaking": {
      "title": "Sprechtraining: Über Kulturunterschiede beim Wohnen sprechen (探討各國居住生活文化之差異)",
      "instruction": "請運用文化對比句型（Im Gegensatz zu Deutschland / Bei uns），大聲朗讀下列表達：",
      "targetSentences": [
        {
          "id": "d154_s1",
          "de": "In Deutschland wohnen viele Menschen ihr ganzes Leben lang zur Miete, weil der Mieterschutz sehr stark ist.",
          "zh": "在德國，許多人終其一生都租屋居住，因為房客保護法制非常健全強大。",
          "phoneticTip": "Mieterschutz [ˈmiːtɐˌʃʊt͡s] 結尾清輔音短促有力。"
        },
        {
          "id": "d154_s2",
          "de": "In meinem Heimatland kaufen die meisten Familien eine eigene Wohnung oder ein eigenes Haus.",
          "zh": "在我的家鄉，大多數家庭都會購買屬於自己的公寓或獨棟房屋。",
          "phoneticTip": "Heimatland [ˈhaɪ̯maːtˌlant] 情感表達自然。"
        },
        {
          "id": "d154_s3",
          "de": "Die schwäbische Kehrwoche ist eine interessante Tradition für die gemeinsame Hauspflege.",
          "zh": "施瓦本清掃週是一項用於共同維護住宅環境的有趣傳統。",
          "phoneticTip": "schwäbische [ˈʃvɛːbɪʃə] ä 長母音清晰。"
        },
        {
          "id": "d154_s4",
          "de": "Wer im Winter Schnee schaufelt, schützt die Nachbarn und Passanten vor Unfällen.",
          "zh": "冬季剷雪的人保護了鄰居與路人免於發生意外。",
          "phoneticTip": "schaufelt [ˈʃaʊ̯fl̩t] 動詞發音飽滿。"
        }
      ],
      "rolePlay": {
        "partnerName": "Goethe-Prüfer",
        "partnerRole": "歌德考官 (A2 口說 Teil 2 / Alltagskultur)",
        "scenario": "考官在口說測驗中請您比較德國的租屋文化與您家鄉居住型態的異同。",
        "promptDe": "In Deutschland wohnen sehr viele Menschen zur Miete. Wie wohnen die Menschen in Ihrem Heimatland?",
        "promptZh": "在德國有非常多的人租屋生活。在您的家鄉，人們是如何居住的呢？",
        "sampleReplies": [
          "In meinem Heimatland ist Wohneigentum sehr wichtig. Die meisten Menschen kaufen so früh wie möglich eine eigene Wohnung, oft mit Unterstützung der Familie.",
          "Im Gegensatz zu Deutschland gibt es bei uns weniger Mieterschutzgesetze, deshalb möchten fast alle Menschen lieber eine eigene Wohnung besitzen statt zu mieten."
        ]
      }
    },
    "reading": {
      "title": "Leseverständnis: Das Phänomen der deutschen Mieterkultur (德國租屋文化奇蹟：為什麼德國人不熱衷買房？)",
      "documentType": "Artikel",
      "content": "KULTUR UND GESELLSCHAFT\nWARUM WOHNEN DIE DEUTSCHEN SO GERNE ZUR MIETE?\n\nWer durch deutsche Großstädte wie Berlin, Hamburg oder München spaziert, stellt schnell fest: Fast alle Menschen, denen man begegnet, wohnen zur Miete. Mit einer Mieterquote von über 50 Prozent liegt Deutschland im europäischen Vergleich auf den hinteren Plätzen beim Wohneigentum. Doch woran liegt das?\n\n1. Ein extrem starker Mieterschutz:\nIm deutschen Bürgerlichen Gesetzbuch (BGB) ist das Recht auf Wohnen besonders geschützt. Vermieter können Mietern nicht einfach kündigen, um die Wohnung teurer neu zu vermieten. Ein unbefristeter Mietvertrag bietet Mietern in Deutschland fast die gleiche Sicherheit wie ein Eigenheim.\n\n2. Hohe Flexibilität auf dem Arbeitsmarkt:\nWer zur Miete wohnt, kann bei einem Jobwechsel viel einfacher in eine andere Stadt umziehen. Der Kauf und Verkauf von Immobilien ist in Deutschland mit hohen Nebenkosten (Notar, Grunderwerbsteuer, Makler) von bis zu 12 Prozent des Kaufpreises verbunden.\n\n3. Hohe Bau- und Qualitätsstandards:\nDeutsche Mietwohnungen sind baulich hervorragend isoliert und gepflegt. Zudem verwalten professionelle Hausverwaltungen die Gebäude, sodass sich Mieter selten um teure Reparaturen am Dach oder an der Heizung sorgen müssen.\n\nFazit:\nFür viele Deutsche ist das Mieten kein Zeichen von mangelndem Wohlstand, sondern eine bewusste Entscheidung für Freiheit, Flexibilität und finanzielle Sicherheit.",
      "translation": "文化與社會\n為什麼德國人如此樂於租屋居住？\n\n漫步在柏林、漢堡或慕尼黑等德國大城市，人們很快會發現：所遇見的幾乎每個人都是租屋一族。德國租屋率超過 50%，在歐洲自有房屋產權排名中敬陪末座。但這究竟是為什麼呢？\n\n1. 極為強大的房客保護機制：\n在德國《民法典》（BGB）中，居住權受到特別保護。房東不能單純為了提高租金重新出租而隨意驅逐房客。一份不定期限的租賃合約在德國為租客提供的安全感，幾乎等同於自有房產。\n\n2. 勞動力市場的高度靈活性：\n租屋居住者在職務轉換時，能夠更加輕鬆自如地搬遷至另一座城市。在德國買賣房地產伴隨著高達房價 12% 的高額附加成本（公證人費、不動產購置稅、仲介費等）。\n\n3. 高水準的建築與品質規範：\n德國的出租公寓在建築結構上隔音隔熱極佳且維護得當。此外，專業物業管理公司管理建築，租客極少需要為屋頂或暖氣的大額維修費用操心。\n\n結論：\n對許多德國人而言，租房生活絕非缺乏財富的象徵，而是追求自由、彈性與財務安全感的明智自覺抉擇。",
      "glossary": {
        "Eigenheim": {
          "pos": "das",
          "meaning": "自有住宅"
        },
        "Grunderwerbsteuer": {
          "pos": "die",
          "meaning": "不動產購置稅"
        },
        "Bürgerliches Gesetzbuch": {
          "pos": "das",
          "meaning": "《德國民法典》（簡稱 BGB）"
        },
        "Wohlstand": {
          "pos": "der",
          "meaning": "富裕、繁榮、經濟實力"
        }
      },
      "questions": [
        {
          "id": "d154_rq1",
          "question": "Warum fühlen sich Mieter in Deutschland mit einem Mietvertrag so sicher? (為什麼德國租客憑一份租約就能感到如此安心？)",
          "options": [
            "Weil Wohnungen in Deutschland kostenlos sind (因為在德國住屋是免費的)",
            "Weil der gesetzliche Mieterschutz Kündigungen ohne berechtigten Grund verhindert (因為法定的房客保護法制防止了無正當理由的解約驅離)",
            "Weil alle Mieter mit dem Vermieter verwandt sind (因為所有租客都和房東有親戚關係)",
            "Weil die Polizei jede Woche die Wohnungen kontrolliert (因為警察每週都會檢查公寓)"
          ],
          "correctIndex": 1,
          "explanation": "文章第 1 點載明：「Vermieter können Mietern nicht einfach kündigen... Ein unbefristeter Mietvertrag bietet Mietern in Deutschland fast die gleiche Sicherheit wie ein Eigenheim.」。"
        },
        {
          "id": "d154_rq2",
          "question": "Welcher finanzielle Faktor macht den Immobilienkauf in Deutschland teuer? (哪一項財務因素使得在德國購房成本高昂？)",
          "options": [
            "Kaufnebenkosten (Notar, Steuern, Makler) von bis zu 12 Prozent (高達 12% 的購房額外附帶成本，如公證費、稅負與仲介費)",
            "Man muss dem Staat monatlich Miete zahlen (每月必須給國家付房租)",
            "Es gibt in Deutschland keine Banken (德國沒有銀行)",
            "Möbel sind in Kaufwohnungen verboten (自購房屋內禁止放置家具)"
          ],
          "correctIndex": 0,
          "explanation": "第 2 點指出：「Der Kauf und Verkauf von Immobilien ist in Deutschland mit hohen Nebenkosten (Notar, Grunderwerbsteuer, Makler) von bis zu 12 Prozent des Kaufpreises verbunden.」。"
        }
      ]
    },
    "examTip": {
      "skill": "Sprechen",
      "title": "Goethe A2 口說高分技巧：文化對比與個人經驗陳述（Vergleiche mit dem Heimatland）",
      "content": "在歌德 A2 口說測驗第二與第三部分，考官極常邀請考生談論家鄉習俗與德國之異同，例如：「Wie wohnen die Menschen in Ihrem Heimatland?」。高分表達結構推薦：1. 先點出家鄉特徵：「In meinem Heimatland kaufen die meisten Familien Wohneigentum...」；2. 對比德國現況：「Im Gegensatz zu Deutschland ist die Mieterquote bei uns viel niedriger...」；3. 給出原因：「Ein Grund dafür ist...」。展現跨文化思考能迅速給考官留下極佳印象！"
    }
  }
};
