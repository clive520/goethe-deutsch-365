import type { CefrLevel } from '../types/curriculum';

export interface DaySummary {
  day: number;
  stage: CefrLevel;
  week: number;
  dayOfWeek: number;
  title: string;
  germanTitle: string;
  theme: string;
  estimatedMinutes: number;
}

export const DAY_MANIFEST: Record<number, DaySummary> = {
  "1": {
    "day": 1,
    "stage": "A1",
    "week": 1,
    "dayOfWeek": 1,
    "title": "Guten Tag! 德語初見面與問候",
    "germanTitle": "Begrüßung & Erste Kontakte",
    "theme": "初次相遇、打招呼與基礎字母發音",
    "estimatedMinutes": 20
  },
  "2": {
    "day": 2,
    "stage": "A1",
    "week": 1,
    "dayOfWeek": 2,
    "title": "Woher kommen Sie? 國籍、居住地與語言",
    "germanTitle": "Herkunft, Wohnort und Sprachen",
    "theme": "自我介紹進階：你來自哪裡、住在何處、會說什麼語言",
    "estimatedMinutes": 20
  },
  "3": {
    "day": 3,
    "stage": "A1",
    "week": 1,
    "dayOfWeek": 3,
    "title": "Zahlen & Telefonnummer 數字與個人資料",
    "germanTitle": "Zahlen von 0 bis 100 & Telefonnummer",
    "theme": "德語十位數反讀規則、電話號碼、年齡與金額計算",
    "estimatedMinutes": 20
  },
  "4": {
    "day": 4,
    "stage": "A1",
    "week": 1,
    "dayOfWeek": 4,
    "title": "Im Café 咖啡館點餐與付款",
    "germanTitle": "Im Café bestellen und bezahlen",
    "theme": "日常消費：點咖啡點心、詢問價格與結帳表達",
    "estimatedMinutes": 20
  },
  "5": {
    "day": 5,
    "stage": "A1",
    "week": 1,
    "dayOfWeek": 5,
    "title": "der, die, das 德語三大性別與定冠詞",
    "germanTitle": "Der bestimmte und unbestimmte Artikel",
    "theme": "德語名詞的核心魂魄：陽性 (der)、陰性 (die)、中性 (das)",
    "estimatedMinutes": 20
  },
  "6": {
    "day": 6,
    "stage": "A1",
    "week": 1,
    "dayOfWeek": 6,
    "title": "Woche 1 Rückblick 第 1 週總結驗收測驗",
    "germanTitle": "Wochen-Quiz & Grammatik-Check",
    "theme": "第 1 週實力診斷：動詞變位、問候語、數字、咖啡館點餐、冠詞總複習",
    "estimatedMinutes": 25
  },
  "7": {
    "day": 7,
    "stage": "A1",
    "week": 1,
    "dayOfWeek": 7,
    "title": "Kultur & Entspannung 德語區文化與週日放鬆",
    "germanTitle": "Sonntagsruhe und die DACH-Länder",
    "theme": "德語三大國（DACH：德國 D、奧地利 A、瑞士 CH）文化常識與安息日生活",
    "estimatedMinutes": 15
  },
  "8": {
    "day": 8,
    "stage": "A1",
    "week": 2,
    "dayOfWeek": 1,
    "title": "Im Supermarkt 超市採買與第四格入門",
    "germanTitle": "Im Supermarkt: Lebensmittel & der Akkusativ",
    "theme": "超市採購生活用品、食材食物名詞與德語第四格受詞入門",
    "estimatedMinutes": 20
  },
  "9": {
    "day": 9,
    "stage": "A1",
    "week": 2,
    "dayOfWeek": 2,
    "title": "Wie spät ist es? 時間表達法與火車時刻",
    "germanTitle": "Die Uhrzeit: Offiziell und Privat",
    "theme": "德語時間問答、官方 24 小時制與生活 12 小時制（halb / Viertel）",
    "estimatedMinutes": 20
  },
  "10": {
    "day": 10,
    "stage": "A1",
    "week": 2,
    "dayOfWeek": 3,
    "title": "Mein Tagesablauf 我的一天與分離動詞",
    "germanTitle": "Tagesablauf & Trennbare Verben",
    "theme": "描述一日生活作息、德語特有分離動詞語序與時間安排",
    "estimatedMinutes": 20
  },
  "11": {
    "day": 11,
    "stage": "A1",
    "week": 2,
    "dayOfWeek": 4,
    "title": "Termine vereinbaren 預約行程與一週星期",
    "germanTitle": "Wochentage & Termine vereinbaren",
    "theme": "星期一至星期日、時間介系詞（am / um / von... bis...）與診所預約看診",
    "estimatedMinutes": 20
  },
  "12": {
    "day": 12,
    "stage": "A1",
    "week": 2,
    "dayOfWeek": 5,
    "title": "Hobbys & Freizeit 休閒愛好與喜好表達",
    "germanTitle": "Freizeit, Hobbys & Vorlieben",
    "theme": "休閒運動、業餘愛好、喜好副詞 gern / am liebsten 與動詞 lesen 變位",
    "estimatedMinutes": 20
  },
  "13": {
    "day": 13,
    "stage": "A1",
    "week": 2,
    "dayOfWeek": 6,
    "title": "Woche 2 Rückblick 第 2 週總結驗收測驗",
    "germanTitle": "Wochen-Quiz: Akkusativ, Uhrzeit & Termine",
    "theme": "第 2 週實力全面診斷：第四格陽性、時間看鐘、分離動詞、介系詞與約定行程",
    "estimatedMinutes": 25
  },
  "14": {
    "day": 14,
    "stage": "A1",
    "week": 2,
    "dayOfWeek": 7,
    "title": "Kultur & Alltag 德國日常文化：準時哲學與生活規矩",
    "germanTitle": "Pünktlichkeit, Hausordnung & Mülltrennung",
    "theme": "德國生活文化必修課：準時哲學、公寓住戶公約（Hausordnung）與嚴謹的垃圾分類",
    "estimatedMinutes": 15
  },
  "15": {
    "day": 15,
    "stage": "A1",
    "week": 3,
    "dayOfWeek": 1,
    "title": "Wohnungssuche & Zimmer 公寓格局與房間名詞",
    "germanTitle": "Die Wohnung: Zimmer & Räume",
    "theme": "租屋尋房、公寓格局、各個房間名稱與否定詞 nicht vs. kein",
    "estimatedMinutes": 20
  },
  "16": {
    "day": 16,
    "stage": "A1",
    "week": 3,
    "dayOfWeek": 2,
    "title": "Möbel & Haushaltsgeräte 家具家電與所有格",
    "germanTitle": "Möbel, Elektrogeräte & Einrichten",
    "theme": "家具與家用電器名詞、布置房間與所有格冠詞（mein / dein）",
    "estimatedMinutes": 20
  },
  "17": {
    "day": 17,
    "stage": "A1",
    "week": 3,
    "dayOfWeek": 3,
    "title": "Wo ist...? 方位介系詞初探與物品定位",
    "germanTitle": "Lokale Präpositionen: Wo ist was?",
    "theme": "物品方位、回答 Wo? (在哪裡？) 與靜態介系詞縮合 (im / am / auf / unter)",
    "estimatedMinutes": 20
  },
  "18": {
    "day": 18,
    "stage": "A1",
    "week": 3,
    "dayOfWeek": 4,
    "title": "Farben, Formen & Adjektive 形容居室環境與顏色",
    "germanTitle": "Farben & Adjektive: Wie ist die Wohnung?",
    "theme": "形容詞描繪居家空間、相反詞對比（hell/dunkel, ruhig/laut）與顏色名稱",
    "estimatedMinutes": 20
  },
  "19": {
    "day": 19,
    "stage": "A1",
    "week": 3,
    "dayOfWeek": 5,
    "title": "Einweihungsparty 喬遷派對與情態動詞 müssen",
    "germanTitle": "Die Einweihungsparty & Modalverb müssen",
    "theme": "新居入厝派對（Einweihungsparty）、情態動詞 müssen (必須) 與邀請函書寫",
    "estimatedMinutes": 20
  },
  "20": {
    "day": 20,
    "stage": "A1",
    "week": 3,
    "dayOfWeek": 6,
    "title": "Woche 3 Rückblick 第 3 週總結驗收測驗",
    "germanTitle": "Wochen-Quiz: Wohnen, Möbel & Lokale Angaben",
    "theme": "第 3 週實力全方位盤點：租屋詞彙、nicht vs kein、所有格、方位介系詞與情態動詞 müssen",
    "estimatedMinutes": 25
  },
  "21": {
    "day": 21,
    "stage": "A1",
    "week": 3,
    "dayOfWeek": 7,
    "title": "Kultur: Wohnen in Deutschland 德國合租文化與 WG 交流",
    "germanTitle": "WG-Leben (Wohngemeinschaft) & Mietkultur",
    "theme": "德國年輕人與大學生必修文化：WG (Wohngemeinschaft 合租公寓) 生活與室友相處",
    "estimatedMinutes": 15
  },
  "22": {
    "day": 22,
    "stage": "A1",
    "week": 4,
    "dayOfWeek": 1,
    "title": "Am Bahnhof & Fahrkarten kaufen 在火車站與購買車票",
    "germanTitle": "Am Bahnhof: Fahrkarten & Gleise",
    "theme": "火車站各項設施、自動售票機購票、往返票 (Hin- und Rückfahrt)、月台 (Gleis) 與情態動詞 wollen / möchten",
    "estimatedMinutes": 20
  },
  "23": {
    "day": 23,
    "stage": "A1",
    "week": 4,
    "dayOfWeek": 2,
    "title": "Öffentliche Verkehrsmittel 大眾交通工具與市區移動",
    "germanTitle": "Unterwegs in der Stadt: Bus & Bahn",
    "theme": "地鐵 (U-Bahn)、輕軌 (S-Bahn)、路面電車 (Straßenbahn)、公車與搭乘交通工具介系詞 mit + Dativ",
    "estimatedMinutes": 20
  },
  "24": {
    "day": 24,
    "stage": "A1",
    "week": 4,
    "dayOfWeek": 3,
    "title": "Orientierung in der Stadt 市區方位導引與問路實戰",
    "germanTitle": "Nach dem Weg fragen: Orientierung",
    "theme": "城市地標、問路禮貌句型、方向指引 (geradeaus, links, rechts) 與縮合詞 zum / zur",
    "estimatedMinutes": 20
  },
  "25": {
    "day": 25,
    "stage": "A1",
    "week": 4,
    "dayOfWeek": 4,
    "title": "Reiseplanung & Koffer packen 旅遊規劃與打包行李",
    "germanTitle": "Reisevorbereitung: Packen & Gepäck",
    "theme": "出遊行李打包、重要旅行證件與名詞複數形態 (Pluralformen) 大解密",
    "estimatedMinutes": 20
  },
  "26": {
    "day": 26,
    "stage": "A1",
    "week": 4,
    "dayOfWeek": 5,
    "title": "Im Hotel einchecken 飯店辦理入住與客房服務需求",
    "germanTitle": "Im Hotel: Ankunft & Service",
    "theme": "飯店前台登記入住、住宿登記表、客房服務需求與情態動詞 dürfen (許可/允許)",
    "estimatedMinutes": 20
  },
  "27": {
    "day": 27,
    "stage": "A1",
    "week": 4,
    "dayOfWeek": 6,
    "title": "Woche 4 Rückblick & Test 第 4 週總結複習與全真驗收測驗",
    "germanTitle": "Wochenrückblick & A1 Zwischentest",
    "theme": "第 4 週交通出行、方位指引、情態動詞與飯店場景大綜合全真驗收",
    "estimatedMinutes": 25
  },
  "28": {
    "day": 28,
    "stage": "A1",
    "week": 4,
    "dayOfWeek": 7,
    "title": "Kultur & Reisen: Bahnfahren in DACH 德鐵文化、搭火車潛規則與逃票罰款",
    "germanTitle": "Kultur: Bahnreisen im deutschsprachigen Raum",
    "theme": "德語區鐵路文化：無閘門開放式月台、打票機 (Entwerter) 規定、逃票罰金 60 歐元與車廂寧靜區 (Ruhebereich)",
    "estimatedMinutes": 20
  },
  "29": {
    "day": 29,
    "stage": "A1",
    "week": 5,
    "dayOfWeek": 1,
    "title": "Im Restaurant & Speisekarte 在餐廳與閱讀菜單",
    "germanTitle": "Im Restaurant: Speisekarte & Bestellen",
    "theme": "德式餐廳用餐、看懂菜單分類（前菜、主菜、甜點、飲品）與點餐動詞 bestellen / nehmen 搭配第四格 (Akkusativ)",
    "estimatedMinutes": 20
  },
  "30": {
    "day": 30,
    "stage": "A1",
    "week": 5,
    "dayOfWeek": 2,
    "title": "Essen schmeckt gut! 食物風味、喜好與評價",
    "germanTitle": "Geschmack & Vorlieben: Es schmeckt mir!",
    "theme": "描述菜餚風味（美味、甜、酸、辣、鹹）、服務生席間詢問與動詞 schmecken 搭配第三格 (Dativ)",
    "estimatedMinutes": 20
  },
  "31": {
    "day": 31,
    "stage": "A1",
    "week": 5,
    "dayOfWeek": 3,
    "title": "Zahlen, bitte! & Trinkgeld 買單結帳與小費文化",
    "germanTitle": "Bezahlen im Restaurant: Getrennt oder zusammen?",
    "theme": "餐廳結帳、「分開付還是合在一起付？」、索取收據與德式小費湊整哲學 (Trinkgeld)",
    "estimatedMinutes": 20
  },
  "32": {
    "day": 32,
    "stage": "A1",
    "week": 5,
    "dayOfWeek": 4,
    "title": "Rezepte & Kochen zu Hause 食譜閱讀與在家做料理",
    "germanTitle": "Kochen & Rezepte: Zutaten und Zubereitung",
    "theme": "德式傳統食譜閱讀、食材清單 (Zutaten) 與烹飪動詞（切、煮、煎、烤、攪拌）",
    "estimatedMinutes": 20
  },
  "33": {
    "day": 33,
    "stage": "A1",
    "week": 5,
    "dayOfWeek": 5,
    "title": "Einladung zum Abendessen 家庭晚餐邀約與餐桌禮儀",
    "germanTitle": "Private Einladung: Gastfreundschaft & Knigge",
    "theme": "受邀到德國人家作客、晚餐邀請函回覆、作客伴手禮、祝酒乾杯與餐桌禮儀",
    "estimatedMinutes": 20
  },
  "34": {
    "day": 34,
    "stage": "A1",
    "week": 5,
    "dayOfWeek": 6,
    "title": "Woche 5 Rückblick & Test 第 5 週總結複習與全真驗收測驗",
    "germanTitle": "Wochenrückblick & A1 Gastronomie-Test",
    "theme": "第 5 週餐飲點餐、口味形容、買單結帳、小費與作客邀約大綜合全真驗收",
    "estimatedMinutes": 25
  },
  "35": {
    "day": 35,
    "stage": "A1",
    "week": 5,
    "dayOfWeek": 7,
    "title": "Kultur & Kulinarik: Deutsches Brot, Bier & Trinkgeldkultur 德國麵包、啤酒純釀法與小費哲學",
    "germanTitle": "Kultur: Deutsche Esskultur, Brot & Bier",
    "theme": "聯合國非物質文化遺產：德國麵包文化 (Deutsche Brotkultur)、1516 啤酒純釀法與氣泡水之謎",
    "estimatedMinutes": 20
  },
  "36": {
    "day": 36,
    "stage": "A1",
    "week": 6,
    "dayOfWeek": 1,
    "title": "Körperteile & Schmerzen 身體部位與病痛表達",
    "germanTitle": "Der menschliche Körper & Schmerzen",
    "theme": "人體各部位名詞、表達身體不適、疼痛動詞 wehtun 搭配第三格 (Dativ) 與複合病痛名詞",
    "estimatedMinutes": 20
  },
  "37": {
    "day": 37,
    "stage": "A1",
    "week": 6,
    "dayOfWeek": 2,
    "title": "Einen Termin beim Arzt vereinbaren 預約診所看診與看診時間表",
    "germanTitle": "Beim Arzt: Terminvereinbarung & Sprechzeiten",
    "theme": "致電診所預約看病時間、說明健保卡、門診時段表 (Sprechzeiten) 與急診專線 (116 117)",
    "estimatedMinutes": 20
  },
  "38": {
    "day": 38,
    "stage": "A1",
    "week": 6,
    "dayOfWeek": 3,
    "title": "Beim Arzt: Untersuchung & Ratschläge 在診間：醫生問診與誠懇建議",
    "germanTitle": "Das Arztgespräch: Diagnose & Ratschläge",
    "theme": "診間醫生問診、量體溫、檢查喉嚨與情態動詞 sollen (應該) 提供醫囑與休養建議",
    "estimatedMinutes": 20
  },
  "39": {
    "day": 39,
    "stage": "A1",
    "week": 6,
    "dayOfWeek": 4,
    "title": "Krankmeldung für die Arbeit / Sprachschule 生病請假信與病假證明",
    "germanTitle": "Krankmeldung: E-Mail an Arbeitgeber & Schule",
    "theme": "生病向公司或語言學校書面請假、說明缺席理由 (weil / deshalb) 與就醫病假單 (AU-Bescheinigung)",
    "estimatedMinutes": 20
  },
  "40": {
    "day": 40,
    "stage": "A1",
    "week": 6,
    "dayOfWeek": 5,
    "title": "In der Apotheke 在藥局買藥與諮詢用藥",
    "germanTitle": "In der Apotheke: Medikamente & Beratung",
    "theme": "藥局購藥、諮詢藥劑師、介系詞 gegen (+ Akkusativ) 治療病症與藥品使用說明 (Packungsbeilage)",
    "estimatedMinutes": 20
  },
  "41": {
    "day": 41,
    "stage": "A1",
    "week": 6,
    "dayOfWeek": 6,
    "title": "Woche 6 Rückblick & Test 第 6 週總結複習與全真驗收測驗",
    "germanTitle": "Wochenrückblick & A1 Gesundheits-Test",
    "theme": "第 6 週人體部位、病痛表達、預約掛號、醫囑建議、生病請假信與藥局全方位大驗收",
    "estimatedMinutes": 25
  },
  "42": {
    "day": 42,
    "stage": "A1",
    "week": 6,
    "dayOfWeek": 7,
    "title": "Kultur & Gesundheit: Das deutsche Gesundheitssystem & Hausarzt 德國健保體系、家庭醫生制度與洋甘菊茶文化",
    "germanTitle": "Kultur: Das Gesundheitssystem & Kamillentee",
    "theme": "德國全民健保 (GKV)、家庭醫生轉診制度 (Hausarztmodell) 與神奇的德國感冒靈藥：草藥茶 (Kamillentee)",
    "estimatedMinutes": 20
  },
  "43": {
    "day": 43,
    "stage": "A1",
    "week": 7,
    "dayOfWeek": 1,
    "title": "Kleidung & Farben 服裝名詞與色彩形容詞",
    "germanTitle": "Kleidung & Farben: Was trägst du heute?",
    "theme": "日常服裝單字、色彩形容詞、動詞 tragen (穿著) 變位與名詞第四格受格 (Akkusativ)",
    "estimatedMinutes": 20
  },
  "44": {
    "day": 44,
    "stage": "A1",
    "week": 7,
    "dayOfWeek": 2,
    "title": "Im Modegeschäft: Größen & Anprobieren 在服飾店：尺寸詢問與試衣間試穿",
    "germanTitle": "Im Modegeschäft: Umkleidekabine & Größen",
    "theme": "服飾店挑選尺寸 (Größe S, M, L / 38, 40)、試穿動詞 anprobieren、試衣間與指示代名詞 dieser / diese / dieses",
    "estimatedMinutes": 20
  },
  "45": {
    "day": 45,
    "stage": "A1",
    "week": 7,
    "dayOfWeek": 3,
    "title": "Gefallen & Stehen: Passt das? 喜好與評價：這件好看嗎？合身嗎？",
    "germanTitle": "Mode bewerten: passen, stehen & gefallen",
    "theme": "評價衣物版型與風格、三大第三格動詞（passen 合身, stehen 襯人顯好看, gefallen 喜歡）深入剖析",
    "estimatedMinutes": 20
  },
  "46": {
    "day": 46,
    "stage": "A1",
    "week": 7,
    "dayOfWeek": 4,
    "title": "Angebote, Rabatte & Schnäppchen 打折特賣、折扣優惠與撿便宜",
    "germanTitle": "Sonderangebote & Rabatte: Günstig einkaufen",
    "theme": "特賣會 (Schlussverkauf)、折扣促銷 (Rabatt / reduziert)、比較級 (billiger / teurer) 與撿便宜",
    "estimatedMinutes": 20
  },
  "47": {
    "day": 47,
    "stage": "A1",
    "week": 7,
    "dayOfWeek": 5,
    "title": "Umtausch & Reklamation 換貨與瑕疵投訴退款",
    "germanTitle": "Umtausch & Reklamation: Geld zurück oder Ware tauschen?",
    "theme": "商品瑕疵（拉鍊故障、破損、污漬）、持發票 (Kassenbon) 辦理換貨或退款與情態動詞 möchten 客訴句型",
    "estimatedMinutes": 20
  },
  "48": {
    "day": 48,
    "stage": "A1",
    "week": 7,
    "dayOfWeek": 6,
    "title": "Woche 7 Rückblick & Test 第 7 週總結複習與全真驗收測驗",
    "germanTitle": "Wochenrückblick & A1 Einkaufs-Test",
    "theme": "第 7 週服裝穿搭、顏色、試穿 (anprobieren)、評價 (passen/stehen/gefallen)、特賣折扣與退換貨大綜合全真驗收",
    "estimatedMinutes": 25
  },
  "49": {
    "day": 49,
    "stage": "A1",
    "week": 7,
    "dayOfWeek": 7,
    "title": "Kultur: Flohmärkte, Pfand & Nachhaltigkeit 德國跳蚤市場、二手古著與押金環保體系",
    "germanTitle": "Kultur: Flohmarkt, Secondhand & Pfandsystem",
    "theme": "德國週末跳蚤市場 (Flohmarkt)、二手惜物文化、討價還價實用句與全民押金退瓶系統 (Pfand)",
    "estimatedMinutes": 20
  },
  "50": {
    "day": 50,
    "stage": "A1",
    "week": 8,
    "dayOfWeek": 1,
    "title": "Die Familie & Verwandte 家庭成員與親屬關係",
    "germanTitle": "Die Familie: Wer gehört dazu?",
    "theme": "家庭核心成員、親戚稱謂、所有格代名詞（mein, dein, sein, ihr, unser, euer）與名詞性別",
    "estimatedMinutes": 20
  },
  "51": {
    "day": 51,
    "stage": "A1",
    "week": 8,
    "dayOfWeek": 2,
    "title": "Familienstand & Lebensformen 婚姻狀態與登記表格",
    "germanTitle": "Familienstand & Formulare: Ledig, verheiratet oder geschieden?",
    "theme": "婚姻狀況核心詞彙（ledig, verheiratet, geschieden, verwitwet）、官方註冊表格（Anmeldeformular）填寫",
    "estimatedMinutes": 20
  },
  "52": {
    "day": 52,
    "stage": "A1",
    "week": 8,
    "dayOfWeek": 3,
    "title": "Alter, Geburtstag & Ordnungszahlen 年齡、生日與序數詞",
    "germanTitle": "Geburtstag & Datum: Wann bist du geboren?",
    "theme": "德語序數詞（am 1. Mai / am 25. August）、詢問與回答年齡、生日派對祝賀詞與邀請",
    "estimatedMinutes": 20
  },
  "53": {
    "day": 53,
    "stage": "A1",
    "week": 8,
    "dayOfWeek": 4,
    "title": "Freunde, Haustiere & Hobbys 朋友、寵物與生活陪伴",
    "germanTitle": "Freunde & Haustiere: Hund, Katze und beste Freunde",
    "theme": "朋友交際、寵物詞彙（der Hund, die Katze）、動詞 treffen mit + Dativ 與陪伴日常",
    "estimatedMinutes": 20
  },
  "54": {
    "day": 54,
    "stage": "A1",
    "week": 8,
    "dayOfWeek": 5,
    "title": "Feiern & Feste im Familienkreis 家庭慶祝與送禮",
    "germanTitle": "Feiern & Geschenke: Alles Gute zum Fest!",
    "theme": "家庭節慶（Hochzeit, Jubiläum）、雙賓語動詞 schenken (贈送 + Dativ + Akkusativ)、挑選禮物與祝福表達",
    "estimatedMinutes": 20
  },
  "55": {
    "day": 55,
    "stage": "A1",
    "week": 8,
    "dayOfWeek": 6,
    "title": "Woche 8 Rückblick & Test 第 8 週總結複習與全真測驗",
    "germanTitle": "Woche 8 Test: Familie, Daten & Formulare meistern",
    "theme": "第 8 週核心內容總驗收：家庭成員所有格、婚姻狀況、日期序數詞、雙賓語送禮句型與個人資料表格",
    "estimatedMinutes": 20
  },
  "56": {
    "day": 56,
    "stage": "A1",
    "week": 8,
    "dayOfWeek": 7,
    "title": "Kultur & Gesellschaft: Familie & Lebensstile in DACH 德語區家庭與生活樣貌",
    "germanTitle": "Kultur: Familie, Kinder & Haustiere im deutschsprachigen Raum",
    "theme": "德語區現代家庭結構（Patchwork-Familie, Alleinerziehende）、少子化與育兒津貼（Kindergeld）、寵物友善社會與生活界線禮儀",
    "estimatedMinutes": 20
  },
  "57": {
    "day": 57,
    "stage": "A1",
    "week": 9,
    "dayOfWeek": 1,
    "title": "Das Wetter heute: Sonne, Regen & Schnee 天氣現象與氣溫",
    "germanTitle": "Das Wetter: Wie ist das Wetter heute?",
    "theme": "天氣描述、非人稱代名詞 es（es regnet, es schneit, es ist sonnig）、氣溫度數表達（Grad）",
    "estimatedMinutes": 20
  },
  "58": {
    "day": 58,
    "stage": "A1",
    "week": 9,
    "dayOfWeek": 2,
    "title": "Die vier Jahreszeiten & Monate 四季與十二月份",
    "germanTitle": "Jahreszeiten & Monate: Im Frühling, Sommer, Herbst und Winter",
    "theme": "德語四季名稱、十二月份名稱、時間介系詞 im + Dativ（im Mai, im Sommer）與季節特色",
    "estimatedMinutes": 20
  },
  "59": {
    "day": 59,
    "stage": "A1",
    "week": 9,
    "dayOfWeek": 3,
    "title": "Urlaubspläne & Reiseziele 假期規劃與目的地",
    "germanTitle": "Reiseziele: Wohin fährst du in den Urlaub?",
    "theme": "旅遊目的地介系詞（nach, in, an + Akkusativ）、規劃假期對話與交通選擇",
    "estimatedMinutes": 20
  },
  "60": {
    "day": 60,
    "stage": "A1",
    "week": 9,
    "dayOfWeek": 4,
    "title": "Urlaubsaktivitäten: Wandern, Baden & Entspannen 假期休閒活動",
    "germanTitle": "Aktivitäten im Urlaub: Wandern, schwimmen und besichtigen",
    "theme": "休閒活動動詞（wandern, baden/schwimmen, besichtigen, fotografieren）、情態動詞 wollen 複習與時間規劃",
    "estimatedMinutes": 20
  },
  "61": {
    "day": 61,
    "stage": "A1",
    "week": 9,
    "dayOfWeek": 5,
    "title": "Postkarte & Urlaubsgrüße schreiben 明信片與旅遊問候寫作",
    "germanTitle": "Postkarte aus dem Urlaub: Viele Grüße aus Wien!",
    "theme": "度假明信片寫作格式、問候語（Viele Grüße aus...）、描述天氣與活動、歌德 A1 寫作 Teil 2 高頻滿分範本",
    "estimatedMinutes": 20
  },
  "62": {
    "day": 62,
    "stage": "A1",
    "week": 9,
    "dayOfWeek": 6,
    "title": "Woche 9 Rückblick & Test 第 9 週總結複習與全真測驗",
    "germanTitle": "Woche 9 Test: Wetter, Urlaub & Reiseziele meistern",
    "theme": "第 9 週核心知識全盤驗收：天氣描述、四季月份介系詞 im/am/um、旅遊目的地 nach/in/an、活動規劃與明信片寫作",
    "estimatedMinutes": 20
  },
  "63": {
    "day": 63,
    "stage": "A1",
    "week": 9,
    "dayOfWeek": 7,
    "title": "Kultur & Tourismus: Urlaubskultur der Deutschen 德國人的度假文化與健行風潮",
    "germanTitle": "Kultur: Reiseweltmeister, Camping & die deutsche Wanderlust",
    "theme": "德國人度假世界冠軍（Reiseweltmeister）、約 30 天法定有薪年假、大自然健行文化（Wanderlust）與露營熱潮",
    "estimatedMinutes": 20
  },
  "64": {
    "day": 64,
    "stage": "A1",
    "week": 10,
    "dayOfWeek": 1,
    "title": "Auf der Post: Briefe & Pakete versenden 郵局寄信與包裹",
    "germanTitle": "Auf der Post: Briefmarken, Pakete und Einschreiben",
    "theme": "郵局業務、寄送信件與包裹、郵票購買（die Briefmarke）、寄件人與收件人（Absender & Empfänger）、稱重與資費",
    "estimatedMinutes": 20
  },
  "65": {
    "day": 65,
    "stage": "A1",
    "week": 10,
    "dayOfWeek": 2,
    "title": "Bei der Bank: Geld abheben & Konto eröffnen 在銀行辦理業務",
    "germanTitle": "Bei der Bank: Geldautomat, Girokonto und Überweisung",
    "theme": "銀行日常用語、ATM 自動提款機操作（Geld abheben）、銀行開戶（ein Girokonto eröffnen）、銀行轉帳（die Überweisung）與金融卡（Girocard）",
    "estimatedMinutes": 20
  },
  "66": {
    "day": 66,
    "stage": "A1",
    "week": 10,
    "dayOfWeek": 3,
    "title": "Auf dem Amt & Behördengänge 在公家機關與公務辦理",
    "germanTitle": "Auf dem Amt: Bürgeramt, Termine und Dokumente",
    "theme": "戶政機關（Bürgeramt / Ausländerbehörde）、領取號碼牌（die Wartenummer）、預約時間表（der Termin）、攜帶證件（Reisepass, Meldebescheinigung）與公務禮貌用語",
    "estimatedMinutes": 20
  },
  "67": {
    "day": 67,
    "stage": "A1",
    "week": 10,
    "dayOfWeek": 4,
    "title": "Orientierung in der Stadt: Präzise Wegbeschreibung 城市精準指路",
    "germanTitle": "Wegbeschreibung: Gegenüber, an... vorbei und bis zur Kreuzung",
    "theme": "進階市區問路與導航指引、重要空間介系詞（gegenüber von + Dativ, an... vorbei + Dativ, bis zu + Dativ, an der Ampel / Kreuzung）",
    "estimatedMinutes": 20
  },
  "68": {
    "day": 68,
    "stage": "A1",
    "week": 10,
    "dayOfWeek": 5,
    "title": "Fundsachen & Verloren: Das Fundbüro 遺失物與失物招領處",
    "germanTitle": "Fundsachen & Fundbüro: Ich habe meine Tasche verloren!",
    "theme": "失物招領處（das Fundbüro）、物品遺失（verlieren）與尋獲（finden）、描述失物外觀特徵（顏色、品牌、內容物）與領取憑證",
    "estimatedMinutes": 20
  },
  "69": {
    "day": 69,
    "stage": "A1",
    "week": 10,
    "dayOfWeek": 6,
    "title": "Woche 10 Rückblick & Test 第 10 週總結複習與全真測驗",
    "germanTitle": "Woche 10 Test: Post, Bank, Behörden & Orientierung",
    "theme": "第 10 週公務、金融、郵政、方位與遺失物核心知識全真綜合檢測",
    "estimatedMinutes": 20
  },
  "70": {
    "day": 70,
    "stage": "A1",
    "week": 10,
    "dayOfWeek": 7,
    "title": "Kultur & Bürokratie: Ordnung & Bargeld in Deutschland 德國秩序與生活文化",
    "germanTitle": "Kultur: Bürokratie, Pünktlichkeit & die Liebe zum Bargeld",
    "theme": "德國公務預約文化（Terminkultur）、做事有條理（Ordnung muss sein）、現金支付偏好（Nur Bares ist Wahres）與個人隱私保護觀念",
    "estimatedMinutes": 20
  },
  "71": {
    "day": 71,
    "stage": "A1",
    "week": 11,
    "dayOfWeek": 1,
    "title": "Goethe A1 Hören Training 歌德 A1 聽力模組全真衝刺",
    "germanTitle": "Goethe A1 Prüfungstraining: Modul Hören",
    "theme": "歌德 A1 聽力三大題型深度拆解（Teil 1 短對話選擇、Teil 2 公共廣播是非題、Teil 3 語音答錄機）、聽力時間差審題與干擾項排除",
    "estimatedMinutes": 20
  },
  "72": {
    "day": 72,
    "stage": "A1",
    "week": 11,
    "dayOfWeek": 2,
    "title": "Goethe A1 Lesen Training 歌德 A1 閱讀模組全真衝刺",
    "germanTitle": "Goethe A1 Prüfungstraining: Modul Lesen",
    "theme": "歌德 A1 閱讀三大題型攻克（Teil 1 私人短信/便條閱讀、Teil 2 網頁與廣告匹配分類、Teil 3 公共標牌告示是非題）、高頻縮寫與同義詞辨析",
    "estimatedMinutes": 20
  },
  "73": {
    "day": 73,
    "stage": "A1",
    "week": 11,
    "dayOfWeek": 3,
    "title": "Goethe A1 Schreiben Training 歌德 A1 寫作模組全真衝刺",
    "germanTitle": "Goethe A1 Prüfungstraining: Modul Schreiben",
    "theme": "歌德 A1 寫作雙模組全方位突破：Teil 1 表格填空 5 大關鍵欄位實戰 + Teil 2 30 字短文/書信/請假/詢問三大滿分模板",
    "estimatedMinutes": 20
  },
  "74": {
    "day": 74,
    "stage": "A1",
    "week": 11,
    "dayOfWeek": 4,
    "title": "Goethe A1 Sprechen Training 歌德 A1 口說模組全真衝刺",
    "germanTitle": "Goethe A1 Prüfungstraining: Modul Sprechen",
    "theme": "歌德 A1 口說三大關卡實戰模擬（Teil 1 自我介紹與單字拼讀、Teil 2 抽詞卡提問 W-Fragen / Ja-Nein-Fragen、Teil 3 抽圖卡提出禮貌請求與答覆）",
    "estimatedMinutes": 20
  },
  "75": {
    "day": 75,
    "stage": "A1",
    "week": 11,
    "dayOfWeek": 5,
    "title": "Goethe-Zertifikat A1 Abschlussprüfung & Feier 歌德 A1 全卷大驗收與結業慶典",
    "germanTitle": "A1 Meilenstein: Herzlichen Glückwunsch zum Zertifikat Start Deutsch 1!",
    "theme": "歌德 A1 75 天精華總檢定：聽說讀寫全真大驗收、語法知識大閱兵、解鎖 A1 認證榮譽勳章、啟程邁向 A2",
    "estimatedMinutes": 20
  },
  "76": {
    "day": 76,
    "stage": "A2",
    "week": 11,
    "dayOfWeek": 6,
    "title": "Willkommen in A2! 日常深化與學習藍圖 A2 啟航",
    "germanTitle": "Willkommen in A2: Neue Ziele, tiefere Grammatik und Alltagssicherheit",
    "theme": "正式啟程進入 CEFR A2 階段！A2 核心學習藍圖、第三格人稱代名詞深化（mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen）與支配 Dativ 核心動詞",
    "estimatedMinutes": 20
  },
  "77": {
    "day": 77,
    "stage": "A2",
    "week": 11,
    "dayOfWeek": 7,
    "title": "Beruf & Arbeitswelt: Berufe, Arbeitsplatz und Tätigkeiten 職場與工作世界",
    "germanTitle": "Beruf & Arbeit: Was machen Sie beruflich?",
    "theme": "職場工作環境、職稱陰陽性（-in 規則）、介系詞 als + 職業 與 bei + 企業、日常辦公室工作任務與職責表達",
    "estimatedMinutes": 20
  },
  "78": {
    "day": 78,
    "stage": "A2",
    "week": 12,
    "dayOfWeek": 1,
    "title": "Bürokommunikation & E-Mails 辦公室商務電郵寫作",
    "germanTitle": "E-Mails im Beruf: Termine vereinbaren, verschieben und bestätigen",
    "theme": "德語職場正式與半正式書信電郵、商務稱謂（Sehr geehrte/r...）、會議安排與附件（der Anhang）、確認與改期（verschieben / absagen）",
    "estimatedMinutes": 20
  },
  "79": {
    "day": 79,
    "stage": "A2",
    "week": 12,
    "dayOfWeek": 2,
    "title": "Ein Telefongespräch im Büro führen 商務電話通訊應對",
    "germanTitle": "Telefonieren im Beruf: Wer spricht? Verbinden und Notizen machen",
    "theme": "德語職場專業電話接聽、自報家門（Firma + Name）、轉接電話（verbinden mit + Dativ）、電話留言（eine Nachricht hinterlassen）與確認細節",
    "estimatedMinutes": 20
  },
  "80": {
    "day": 80,
    "stage": "A2",
    "week": 12,
    "dayOfWeek": 3,
    "title": "Bewerbung & Lebenslauf: Mein Profil 求職應徵與個人履歷",
    "germanTitle": "Bewerbung & Lebenslauf: Ausbildung, Berufserfahrung und Qualifikationen",
    "theme": "求職履歷表（der Lebenslauf）、學經歷（Ausbildung & Berufserfahrung）、時間介系詞 seit + Dativ（自...以來至今）與 vor + Dativ（在...之前）",
    "estimatedMinutes": 20
  },
  "81": {
    "day": 81,
    "stage": "A2",
    "week": 12,
    "dayOfWeek": 4,
    "title": "Das Vorstellungsgespräch: Stärken & Erfahrungen 求職面試實戰",
    "germanTitle": "Das Vorstellungsgespräch: Eigene Stärken präsentieren und Fragen stellen",
    "theme": "求職面試經典問答、個人優勢表達（die Stärken）、動詞 sich interessieren für + Akkusativ、向雇主提問之必備句型",
    "estimatedMinutes": 20
  },
  "82": {
    "day": 82,
    "stage": "A2",
    "week": 12,
    "dayOfWeek": 5,
    "title": "Arbeitszeiten, Überstunden & Gehalt 工時制度、加班與薪酬福利",
    "germanTitle": "Arbeitsbedingungen: Vollzeit, Gleitzeit, Überstunden und Gehalt",
    "theme": "工時制度（Vollzeit 全職 / Teilzeit 兼職 / Gleitzeit 彈性工時）、加班（die Überstunden）、薪資（Gehalt & Lohn）、休假天數（der Urlaubsanspruch）與工作合約條款",
    "estimatedMinutes": 20
  },
  "83": {
    "day": 83,
    "stage": "A2",
    "week": 12,
    "dayOfWeek": 6,
    "title": "Woche 12 Rückblick & Test 第 12 週總結複習與全真測驗",
    "germanTitle": "Woche 12 Test: Beruf, E-Mail, Telefon und Bewerbung meistern",
    "theme": "第 12 週職場德語核心全面大驗收：商務信函改期、電話轉接留言、seit vs. vor 時間介系詞、面試優勢表達與勞動條例理解",
    "estimatedMinutes": 20
  },
  "84": {
    "day": 84,
    "stage": "A2",
    "week": 12,
    "dayOfWeek": 7,
    "title": "Kultur & Arbeitswelt: Feierabend & Duzen im Büro 德國職場文化與社交藝術",
    "germanTitle": "Kultur: Der heilige Feierabend, die Kaffeeküche und das Duzen im Büro",
    "theme": "德國職場文化核心：下班時光的神聖性（der Feierabend）、茶水間社交（die Kaffeeküche）、尊稱 Siezen 與親稱 Duzen 的職場轉換規則",
    "estimatedMinutes": 20
  },
  "85": {
    "day": 85,
    "stage": "A2",
    "week": 13,
    "dayOfWeek": 1,
    "title": "Wohnungssuche & Umzug planen 換房尋屋與搬家規劃",
    "germanTitle": "Umzug planen: Umzugskartons, Transporter und Helfer",
    "theme": "換屋搬家、動詞 umziehen / einziehen / ausziehen、搬家公司（das Umzugsunternehmen）、租借貨車與搬家紙箱打包",
    "estimatedMinutes": 20
  },
  "86": {
    "day": 86,
    "stage": "A2",
    "week": 13,
    "dayOfWeek": 2,
    "title": "Die Wechselpräpositionen 九大雙向介系詞精解",
    "germanTitle": "Wechselpräpositionen: Wo? (+ Dativ) oder Wohin? (+ Akkusativ)",
    "theme": "德語語法核心里程碑：九大雙向介系詞（an, auf, hinter, in, neben, über, unter, vor, zwischen）、動態放（stellen/legen/hängen + Akk）vs. 靜態在（stehen/liegen/hängen + Dat）",
    "estimatedMinutes": 20
  },
  "87": {
    "day": 87,
    "stage": "A2",
    "week": 13,
    "dayOfWeek": 3,
    "title": "Hausordnung & Nachbarschaft 公寓規約與鄰里相處",
    "germanTitle": "Hausordnung & Nachbarn: Ruhezeiten, Mülltrennung und Rücksicht",
    "theme": "大樓生活公約（die Hausordnung）、法定寧靜時段（die Ruhezeiten）、垃圾分類（die Mülltrennung）、投訴噪音與鄰里禮儀（sich beschweren über + Akk）",
    "estimatedMinutes": 20
  },
  "88": {
    "day": 88,
    "stage": "A2",
    "week": 13,
    "dayOfWeek": 4,
    "title": "Strom, Gas & Internet anmelden 水電瓦斯與家用網路開通",
    "germanTitle": "Versorgung im Alltag: Stromzähler ablesen, Gas und WLAN anmelden",
    "theme": "入住新家基礎公共事業開通、電表瓦斯表度數抄表（Zählerstand ablesen）、市政公用事業局（Stadtwerke）、寬頻網路安裝合約（der Router / WLAN）",
    "estimatedMinutes": 20
  },
  "89": {
    "day": 89,
    "stage": "A2",
    "week": 13,
    "dayOfWeek": 5,
    "title": "Renovieren & Handwerker im Haus 居室修繕與水電師傅",
    "germanTitle": "Handwerker & Reparaturen: Die Heizung funktioniert nicht!",
    "theme": "水電工師傅（der Handwerker）、居室修繕（reparieren, streichen）、暖氣水管故障報修（die Heizung tropft / funktioniert nicht）、工程報價單（der Kostenvoranschlag）",
    "estimatedMinutes": 20
  },
  "90": {
    "day": 90,
    "stage": "A2",
    "week": 13,
    "dayOfWeek": 6,
    "title": "Woche 13 Rückblick & Test 第 13 週總結複習與全真測驗",
    "germanTitle": "Woche 13 Test: Umzug, Wohnen, Handwerker und Präpositionen",
    "theme": "第 13 週核心精華全盤檢驗：雙向介系詞（Wechselpräpositionen）格位辨析、大樓公約生活守則、水電開通與修繕報價單閱讀",
    "estimatedMinutes": 20
  },
  "91": {
    "day": 91,
    "stage": "A2",
    "week": 13,
    "dayOfWeek": 7,
    "title": "Kultur & Nachbarschaft: Kehrwoche & Mieterkultur in Deutschland 德式輪值掃除與租客文化",
    "germanTitle": "Kultur: Die schwäbische Kehrwoche, Mieterverein und das Recht auf Ruhe",
    "theme": "德國特殊租屋文化：南德斯瓦比亞輪值打掃制度（die Kehrwoche）、租客保護協會（der Mieterverein）、住宅安寧權與德國人對「家」的情感哲學",
    "estimatedMinutes": 20
  },
  "92": {
    "day": 92,
    "stage": "A2",
    "week": 14,
    "dayOfWeek": 1,
    "title": "Urlaubsplanung & Reiseziele 度假規劃與目的地選擇",
    "germanTitle": "Wohin fährst du in den Urlaub? Reiseziele und Buchung",
    "theme": "旅遊目的地選擇、交通方式比較、介系詞 nach / in / an / auf 搭配地理目標、預訂機票與住宿",
    "estimatedMinutes": 20
  },
  "93": {
    "day": 93,
    "stage": "A2",
    "week": 14,
    "dayOfWeek": 2,
    "title": "Reiseerlebnisse im Perfekt 現在完成式強變化與假期回憶",
    "germanTitle": "Was hast du im Urlaub gemacht? Perfekt unregelmäßiger Verben",
    "theme": "敘述過去旅行經歷、不規則強變化動詞現在完成式（fliegen, schwimmen, wandern, besichtigen, verbringen）、助動詞 haben 與 sein 判定",
    "estimatedMinutes": 20
  },
  "94": {
    "day": 94,
    "stage": "A2",
    "week": 14,
    "dayOfWeek": 3,
    "title": "Unterwegs: Verspätung, Gepäck & Panne 旅途突發狀況應對",
    "germanTitle": "Probleme auf Reisen: Zugverspätung, Koffer weg und Autopanne",
    "theme": "旅途意外狀況、班機/火車延誤（Verspätung haben）、行李遺失（Gepäckverlust）、車輛故障拋錨（eine Panne haben）、服務台索賠與補償",
    "estimatedMinutes": 20
  },
  "95": {
    "day": 95,
    "stage": "A2",
    "week": 14,
    "dayOfWeek": 4,
    "title": "Hotelbewertung & Reklamation 飯店住宿評價與投訴",
    "germanTitle": "Im Hotel: Lob, Kritik und eine formelle Reklamation",
    "theme": "飯店住宿滿意度評價、正面讚賞 vs. 負面缺失投訴（設備損壞、冷氣不靈、噪音吵鬧）、向經理投訴要求換房或退款",
    "estimatedMinutes": 20
  },
  "96": {
    "day": 96,
    "stage": "A2",
    "week": 14,
    "dayOfWeek": 5,
    "title": "Urlaubsgrüße & Postkarte schreiben 撰寫明信片與旅遊短文",
    "germanTitle": "Postkarte aus dem Urlaub: Grüße, Wetter und Erlebnisse",
    "theme": "撰寫度假明信片與短訊（歌德 A2 寫作 Teil 1 核心題型）、描述天氣、分享景點參觀與未來幾天計畫",
    "estimatedMinutes": 20
  },
  "97": {
    "day": 97,
    "stage": "A2",
    "week": 14,
    "dayOfWeek": 6,
    "title": "Woche 14 Rückblick & Test 第 14 週總結複習與全真測驗",
    "germanTitle": "Woche 14 Test: Urlaub, Verkehrsstörung, Hotel und Perfekt",
    "theme": "第 14 週大整合：旅遊目的地介系詞、現在完成式強變化動詞、交通延誤與客訴、明信片書寫綜合驗收",
    "estimatedMinutes": 25
  },
  "98": {
    "day": 98,
    "stage": "A2",
    "week": 14,
    "dayOfWeek": 7,
    "title": "Kultur: Reiseweltmeister Deutschland 德國度假文化與健行傳統",
    "germanTitle": "Reiseweltmeister: Urlaubstraditionen, Mallorca und Wanderlust",
    "theme": "德國人「度假世界冠軍」稱號、法定 30 天特休假制度、最愛度假地（Mallorca「第 17 個邦」）、露營與健行傳統 Wanderlust",
    "estimatedMinutes": 20
  },
  "99": {
    "day": 99,
    "stage": "A2",
    "week": 15,
    "dayOfWeek": 1,
    "title": "Krankheitssymptome & Körperteile 身體部位與生病症狀表達",
    "germanTitle": "Mir tut der Kopf weh: Symptome, Schmerzen und Körperteile",
    "theme": "身體器官與部位進階、疼痛表達（wehtun / Schmerzen haben）、常見疾病症狀（Fieber, Husten, Schnupfen, Grippe）、介系詞 gegen + Akkusativ",
    "estimatedMinutes": 20
  },
  "100": {
    "day": 100,
    "stage": "A2",
    "week": 15,
    "dayOfWeek": 2,
    "title": "Beim Hausarzt & Ratschläge 家醫門診看診與醫囑建議",
    "germanTitle": "Beim Arzt: Empfehlungen, Rezepte und das Modalverb sollen",
    "theme": "家醫科診所就診、情態動詞 sollen（醫囑與建議轉述）、命令式 Imperativ 醫囑指導、開立處方箋（das Rezept ausstellen）",
    "estimatedMinutes": 20
  },
  "101": {
    "day": 101,
    "stage": "A2",
    "week": 15,
    "dayOfWeek": 3,
    "title": "Die Krankschreibung & Krankmeldung im Beruf 病假證明與職場請假手續",
    "germanTitle": "Krankmeldung bei der Arbeit: Die AU-Bescheinigung und E-Mail an den Chef",
    "theme": "職場請病假全流程、醫生病假單（AU-Bescheinigung / eAU）、向主管與人資請病假（sich krankmelden bei + Dativ）、歌德 A2 寫作 Teil 2 病假電郵滿分範式",
    "estimatedMinutes": 20
  },
  "102": {
    "day": 102,
    "stage": "A2",
    "week": 15,
    "dayOfWeek": 4,
    "title": "In der Apotheke & Beipackzettel 藥局購藥與藥品仿單說明書",
    "germanTitle": "In der Apotheke: Rezeptpflichtige Medikamente und die Packungsbeilage",
    "theme": "在藥局配藥、處方藥（rezeptpflichtig）vs. 非處方成藥（rezeptfrei）、閱讀藥品仿單說明書（Beipackzettel / Packungsbeilage）、用藥劑量（Dosierung）與副作用（Nebenwirkungen）",
    "estimatedMinutes": 20
  },
  "103": {
    "day": 103,
    "stage": "A2",
    "week": 15,
    "dayOfWeek": 5,
    "title": "Notfall, Bereitschaftsdienst & Rettungswagen 緊急醫療與急診求助",
    "germanTitle": "Medizinischer Notfall: Notruf 112, 116 117 und die Notaufnahme",
    "theme": "緊急醫療求救、救護車與消防火警電話 112、全德非緊急值班醫生電話 116 117、醫院急診室（die Notaufnahme）、急診檢傷與問答",
    "estimatedMinutes": 20
  },
  "104": {
    "day": 104,
    "stage": "A2",
    "week": 15,
    "dayOfWeek": 6,
    "title": "Woche 15 Rückblick & Test 第 15 週總結複習與全真測驗",
    "germanTitle": "Woche 15 Test: Krankheit, Arzt, Apotheke und Krankschreibung",
    "theme": "第 15 週大整合：身體部位與疼痛（wehtun/Schmerzen）、醫囑情態動詞（sollen/Imperativ）、職場請病假信與電郵、藥局與緊急專線全面檢測",
    "estimatedMinutes": 25
  },
  "105": {
    "day": 105,
    "stage": "A2",
    "week": 15,
    "dayOfWeek": 7,
    "title": "Kultur: Das deutsche Gesundheitssystem 德國醫療健保與看診文化",
    "germanTitle": "Gesundheit in Deutschland: GKV, PKV, die eGK und das Hausarztmodell",
    "theme": "德國全民健保體系、法定公保（GKV）vs. 私人保險（PKV）、電子健保卡（eGK）、家庭醫生守門人制度（Hausarztmodell）與就醫直付免墊款文化",
    "estimatedMinutes": 20
  },
  "106": {
    "day": 106,
    "stage": "A2",
    "week": 16,
    "dayOfWeek": 1,
    "title": "Im Kaufhaus: Kleidung & Größen 百貨購物：服飾挑選與尺寸試穿",
    "germanTitle": "Im Modegeschäft: Welche Größe passt Ihnen? welcher und dieser",
    "theme": "在服飾百貨挑選衣物、試穿（anprobieren）、尺寸是否合身（passen + Dativ / stehen + Dativ）、疑問與指示代名詞 welcher / dieser 詞尾變化",
    "estimatedMinutes": 20
  },
  "107": {
    "day": 107,
    "stage": "A2",
    "week": 16,
    "dayOfWeek": 2,
    "title": "Produktvergleich: Komparativ & Superlativ 商品評比：比較級與最高級",
    "germanTitle": "Produktvergleich: besser als, genauso gut wie und am billigsten",
    "theme": "商品品質規格比較、形容詞比較級（Komparativ: -er als）與最高級（Superlativ: am ...-sten）、不規則變化（gut, viel, gern, teuer, hoch）、同級比較（genauso ... wie）",
    "estimatedMinutes": 20
  },
  "108": {
    "day": 108,
    "stage": "A2",
    "week": 16,
    "dayOfWeek": 3,
    "title": "Online-Shopping & Paketversand 網路購物與包裹寄送",
    "germanTitle": "Online bestellen: Sendungsverfolgung, DHL Packstation und Retouren",
    "theme": "德語電商網購、訂單確認（die Bestellbestätigung）、物流包裹追蹤（die Sendungsverfolgung）、DHL 智取櫃（die Packstation）、退貨標籤（das Rücksendeetikett）",
    "estimatedMinutes": 20
  },
  "109": {
    "day": 109,
    "stage": "A2",
    "week": 16,
    "dayOfWeek": 4,
    "title": "Reklamation & Umtausch im Geschäft 臨櫃商品瑕疵退換貨",
    "germanTitle": "Im Geschäft reklamieren: Ware umtauschen, Kassenbon und Garantie",
    "theme": "實體店面退換貨、商品故障（defekt / kaputt）、出示購買收據（den Kassenbon vorlegen）、換取新品（umtauschen gegen + Akkusativ）、退還現金（Geld zurückgeben）",
    "estimatedMinutes": 20
  },
  "110": {
    "day": 110,
    "stage": "A2",
    "week": 16,
    "dayOfWeek": 5,
    "title": "Beschwerdebrief an den Kundenservice 向客服撰寫正式投訴信",
    "germanTitle": "Schreiben Teil 2: Ein formeller Beschwerdebrief an den Onlineshop",
    "theme": "撰寫正式商業客訴信件（歌德 A2 寫作 Teil 2 最核心必考題型）、清楚描述購買事實、具體列舉問題缺失、明確設定處理期限（Frist setzen）",
    "estimatedMinutes": 20
  },
  "111": {
    "day": 111,
    "stage": "A2",
    "week": 16,
    "dayOfWeek": 6,
    "title": "Woche 16 Rückblick & Test 第 16 週總結複習與全真測驗",
    "germanTitle": "Woche 16 Test: Kleidung, Vergleich, Online-Shopping und Reklamation",
    "theme": "第 16 週大整合：服飾試穿代名詞（welcher/dieser）、比較級與最高級（Komparativ/Superlativ）、包裹智取櫃、臨櫃與書面瑕疵投訴全真檢測",
    "estimatedMinutes": 25
  },
  "112": {
    "day": 112,
    "stage": "A2",
    "week": 16,
    "dayOfWeek": 7,
    "title": "Kultur: Verbraucherschutz & Umtauschkultur 德國消費者權益與理性消費觀",
    "germanTitle": "Verbraucherschutz in Deutschland: Verbraucherzentrale, Kassenbons und Reklamationskultur",
    "theme": "德國強大消費者保護體系（Verbraucherzentrale）、理性務實消費文化、發票保管習慣、環保包裝退還與二手跳蚤市場文化（Flohmarkt）",
    "estimatedMinutes": 20
  },
  "113": {
    "day": 113,
    "stage": "A2",
    "week": 17,
    "dayOfWeek": 1,
    "title": "Smartphones, Apps & Bildschirmzeit 智慧型手機、社群軟體與螢幕時間",
    "germanTitle": "Digitaler Alltag: Smartphone-Nutzung, Apps und Bildschirmzeit",
    "theme": "數位設備使用習慣、高頻 App 功能（nachrichten, posten, streamen, liken）、螢幕時間控制（die Bildschirmzeit）、動詞搭配時間副詞",
    "estimatedMinutes": 20
  },
  "114": {
    "day": 114,
    "stage": "A2",
    "week": 17,
    "dayOfWeek": 2,
    "title": "Verben mit Präpositionen 動詞與固定介系詞搭配",
    "germanTitle": "Feste Verbindungen: warten auf, sprechen über und sich freuen auf",
    "theme": "德語動詞與固定介系詞搭配（warten auf, sprechen über, sich freuen auf, sich interessieren für, träumen von）、介系詞疑問副詞（Worauf? Worüber? 與人稱 Auf wen? Über wen?）",
    "estimatedMinutes": 20
  },
  "115": {
    "day": 115,
    "stage": "A2",
    "week": 17,
    "dayOfWeek": 3,
    "title": "Soziale Medien: Vor- und Nachteile 社群媒體：優勢與潛在隱憂",
    "germanTitle": "Social Media im Alltag: Chancen, Risiken und der Konnektor obwohl",
    "theme": "社群網路利弊分析、連詞 obwohl（雖然...但是...，尾動詞結構）、資訊過載與同溫層現象、表達個人贊成或反對立場",
    "estimatedMinutes": 20
  },
  "116": {
    "day": 116,
    "stage": "A2",
    "week": 17,
    "dayOfWeek": 4,
    "title": "Fake News, Datenschutz & Online-Sicherheit 假新聞、個資保護與網路安全",
    "germanTitle": "Sicherheit im Netz: Passwörter, Phishing und die DSGVO in Deutschland",
    "theme": "網路資安與個資保護（der Datenschutz）、詐騙釣魚信件（die Phishing-Mail）、密碼安全原則、歐盟通用個資保護法規（DSGVO）",
    "estimatedMinutes": 20
  },
  "117": {
    "day": 117,
    "stage": "A2",
    "week": 17,
    "dayOfWeek": 5,
    "title": "Digitale Kommunikation im Beruf 職場數位通訊與居家辦公",
    "germanTitle": "Homeoffice und Videokonferenzen: Teams, Zoom und digitale Etikette",
    "theme": "遠端居家辦公（das Homeoffice）、線上視訊會議（die Videokonferenz）、通訊軟體禮儀（Teams/Slack）、音訊視訊切換（stumm schalten, Kamera an/aus）",
    "estimatedMinutes": 20
  },
  "118": {
    "day": 118,
    "stage": "A2",
    "week": 17,
    "dayOfWeek": 6,
    "title": "Woche 17 Rückblick & Test 第 17 週總結複習與全真測驗",
    "germanTitle": "Woche 17 Test: Medien, Präpositionalverben, Sicherheit und Homeoffice",
    "theme": "第 17 週大整合：介系詞動詞（warten auf, freuen auf/über, träumen von）、疑問詞（Worauf/Auf wen）、讓步連詞 obwohl、雙重受詞語序與情態過去式全面驗收",
    "estimatedMinutes": 25
  },
  "119": {
    "day": 119,
    "stage": "A2",
    "week": 17,
    "dayOfWeek": 7,
    "title": "Kultur: Datenschutz & Digitalisierung in Deutschland 德國資安隱私文化與數位觀",
    "germanTitle": "Datenschutzliebe: DSGVO, Barzahlung und die deutsche Skepsis vor der Digitalisierung",
    "theme": "德國人對個人隱私與個資保護的特殊熱愛（Datenschutzliebe）、對大數據與人臉識別的審慎質疑態度、對現金支付的眷戀與歐盟 DSGVO 的深遠影響",
    "estimatedMinutes": 20
  },
  "120": {
    "day": 120,
    "stage": "A2",
    "week": 18,
    "dayOfWeek": 1,
    "title": "Geburtstagsfeier & Einladungen 生日慶祝與活動邀約",
    "germanTitle": "Herzliche Einladung: einladen zu, zusagen und absagen",
    "theme": "生日聚會邀請、邀請動詞與固定介系詞搭配（einladen zu + Dativ）、出席接受與婉拒回覆（zusagen / absagen）、約定時間地點與自備食物詢問（mitbringen）",
    "estimatedMinutes": 20
  },
  "121": {
    "day": 121,
    "stage": "A2",
    "week": 18,
    "dayOfWeek": 2,
    "title": "Adjektivdeklination Typ 1 定冠詞後的形容詞字尾變化",
    "germanTitle": "Die schwache Adjektivdeklination: der neue Anzug, die nette Feier, das tolle Geschenk",
    "theme": "定冠詞後的形容詞字尾變化（Typ 1：弱變化 / Die schwache Deklination）、第一格到第四格（Nom, Akk, Dat）陽性、陰性、中性與複數變化規則、五個 -e 堡壘與其餘全接 -en 的極簡記憶法",
    "estimatedMinutes": 20
  },
  "122": {
    "day": 122,
    "stage": "A2",
    "week": 18,
    "dayOfWeek": 3,
    "title": "Geschenke & Bräuche 節慶禮物與送禮文化習俗",
    "germanTitle": "Schenken mit Herz: Was schenkt man in Deutschland? Blumen, Pralinen und Bräuche",
    "theme": "德語雙賓格動詞句型（schenken / mitbringen + Dativ 人 + Akkusativ 物）、德國主流送禮文化（鮮花、手工巧克力、美酒、書籍與禮券）、送禮禮節與禁忌（收到禮物當面拆開、花束拆包裝紙）、文化傳統（Bräuche und Aufmerksamkeiten）",
    "estimatedMinutes": 20
  },
  "123": {
    "day": 123,
    "stage": "A2",
    "week": 18,
    "dayOfWeek": 4,
    "title": "Feste im Jahreskreis: Weihnachten & Ostern 年度傳統節日：聖誕節與復活節",
    "germanTitle": "Das Festjahr: Weihnachtsmärkte, Heiligabend, Silvester und Ostern",
    "theme": "德國全年的重大傳統節慶巡禮：聖誕節（der Weihnachtsmarkt, Heiligabend, der Tannenbaum, die Bescherung）、跨年與元旦（Silvester, Neujahr, das Feuerwerk, guten Rutsch）、復活節（Ostern, Ostereier suchen, das Osterfeuer）、節慶時間介系詞與固定祝福語",
    "estimatedMinutes": 20
  },
  "124": {
    "day": 124,
    "stage": "A2",
    "week": 18,
    "dayOfWeek": 5,
    "title": "Hochzeit & Jubiläum: Glückwunschkarten 婚禮與週年紀念：祝福賀卡撰寫",
    "germanTitle": "Schreiben Teil 1: Herzliche Glückwünsche zur Hochzeit und zum Jubiläum verfassen",
    "theme": "婚禮（die Hochzeit）、結婚週年與企業週年（das Jubiläum）、歌德 A2 寫作 Teil 1 實戰精訓：撰寫祝賀便條與祝賀卡、祝福語句型（gratulieren zu / wünschen + Dat + Akk）、德國婚禮紅包禮金習俗（Geldgeschenke kreativ verpacken）",
    "estimatedMinutes": 20
  },
  "125": {
    "day": 125,
    "stage": "A2",
    "week": 18,
    "dayOfWeek": 6,
    "title": "Woche 18 Rückblick & Test 第 18 週複習總結與能力綜合檢測",
    "germanTitle": "Wochenrückblick & A2-Modultest: Feste, Einladungen und Adjektivdeklination Typ 1",
    "theme": "第 18 週文法與詞彙整合大檢閱：定冠詞後形容詞字尾變化（Typ 1 弱變化：只有 -e 與 -en）、邀約與出席婉拒動詞（einladen zu, zusagen, absagen）、送禮雙賓格、節慶介系詞與祝福語、綜合聽力與閱讀全真模擬測驗",
    "estimatedMinutes": 20
  },
  "126": {
    "day": 126,
    "stage": "A2",
    "week": 18,
    "dayOfWeek": 7,
    "title": "Kultur: Karneval & Regionale Feiern 德國狂歡節文化與各地民間慶典",
    "germanTitle": "Die fünfte Jahreszeit: Karneval im Rheinland, Fasching in Bayern und die alemannische Fastnacht",
    "theme": "德國狂歡節文化源流與「第五個季節」（die fünfte Jahreszeit）、萊茵地區狂歡節（Karneval in Köln/Düsseldorf, Rosenmontag, Kamelle!）、巴伐利亞 Fasching 與施瓦本-阿勒曼尼木製面具傳統（die schwäbisch-alemannische Fastnacht）、變裝打扮（sich verkleiden, das Kostüm）與社會心理文化",
    "estimatedMinutes": 20
  },
  "127": {
    "day": 127,
    "stage": "A2",
    "week": 19,
    "dayOfWeek": 1,
    "title": "Schulsystem in Deutschland 德國學校學制與升學途徑",
    "germanTitle": "Das deutsche Schulsystem: Grundschule, Gymnasium, Realschule und Abitur",
    "theme": "德國多軌制基礎教育、各級中學型態（Gymnasium, Realschule, Hauptschule, Gesamtschule）、升學分流（Schullaufbahn）與大學入學會考資格（das Abitur）",
    "estimatedMinutes": 20
  },
  "128": {
    "day": 128,
    "stage": "A2",
    "week": 19,
    "dayOfWeek": 2,
    "title": "Die duale Ausbildung 德國雙軌制職業培訓制度",
    "germanTitle": "Duale Ausbildung: Berufsschule, Azubi, Lehrstelle und praktische Erfahrung",
    "theme": "德國聞名世界的雙軌制職業培訓體系（duale Berufsausbildung）、實務企業與職業學校並進、學徒身分（der Azubi / die Auszubildende）、培訓合約與薪資津貼（Ausbildungsvergütung）",
    "estimatedMinutes": 20
  },
  "129": {
    "day": 129,
    "stage": "A2",
    "week": 19,
    "dayOfWeek": 3,
    "title": "Adjektivdeklination Typ 2 形容詞字尾變化（不定冠詞、kein 與物主冠詞後）",
    "germanTitle": "Adjektivdeklination nach ein, kein und Possessivpronomen: ein guter Beruf, eine neue Stelle",
    "theme": "第二類形容詞字尾變化（混合變化 Gemischte Deklination）、第一格/第四格/第三格變化規律、陽性補 -er/-en、中性補 -es、陰性 -e、複數一律加 -en",
    "estimatedMinutes": 20
  },
  "130": {
    "day": 130,
    "stage": "A2",
    "week": 19,
    "dayOfWeek": 4,
    "title": "Studium an der Universität 大學生活：講堂、研討與校園日常",
    "germanTitle": "Studium an der Universität: Vorlesung, Seminar, Campus, Mensa und Prüfungen",
    "theme": "德國大學學習體系、大課演講（die Vorlesung）與研討專題（das Seminar）、大學食堂（die Mensa）、學期雜費與學生車票（der Semesterbeitrag）、期末筆試（die Klausur）",
    "estimatedMinutes": 20
  },
  "131": {
    "day": 131,
    "stage": "A2",
    "week": 19,
    "dayOfWeek": 5,
    "title": "Praktikum & Berufsberatung 實習申請、履歷準備與勞工局職涯諮詢",
    "germanTitle": "Praktikum und Berufsberatung: Praktikumsstelle finden, Bewerbungsunterlagen und Agentur für Arbeit",
    "theme": "實習名額尋找與申請（die Praktikumsstelle）、德式標準求職文件（die Bewerbungsunterlagen: Anschreiben, Lebenslauf, Zeugnisse）、德國聯邦就業輔導中心（Agentur für Arbeit / Berufsberatung）諮詢",
    "estimatedMinutes": 20
  },
  "132": {
    "day": 132,
    "stage": "A2",
    "week": 19,
    "dayOfWeek": 6,
    "title": "Woche 19 Rückblick & Test 第 19 週總結複習與實戰檢測",
    "germanTitle": "Woche 19 Test: Schule, Ausbildung, Studium und Adjektivdeklination Typ 2",
    "theme": "第 19 週全景檢閱：德國學制多軌制（Grundschule, Gymnasium, Realschule, Abitur）、雙軌制技職培訓（Azubi, Berufsschule）、大學校園生態（Mensa, Vorlesung, Semesterbeitrag）、實習申請、第二類形容詞字尾變化（Typ 2）全題型實戰",
    "estimatedMinutes": 25
  },
  "133": {
    "day": 133,
    "stage": "A2",
    "week": 19,
    "dayOfWeek": 7,
    "title": "Kultur: Meistertitel & Bildungswege 德國工匠大師精神與多元教育價值觀",
    "germanTitle": "Deutsche Handwerkskultur: Meisterbrief, Bologna-System und lebenslanges Lernen",
    "theme": "德國社會對手工技藝與百工專業的崇高尊敬（Handwerk hat goldenen Boden）、工匠大師最高資歷（der Meistertitel / Meisterbrief）與大學學歷對等性（DQR 級別）、歐洲波隆那學制改革（Bachelor / Master）與活到老學到老的終身學習理念（lebenslanges Lernen）",
    "estimatedMinutes": 20
  },
  "134": {
    "day": 134,
    "stage": "A2",
    "week": 20,
    "dayOfWeek": 1,
    "title": "Mülltrennung im Alltag 居家垃圾分類：藍桶、棕桶、黃袋與回收站",
    "germanTitle": "Mülltrennung im Alltag: Restmüll, Biomüll, Gelber Sack und Wertstoffe",
    "theme": "德國居家垃圾分類制度、垃圾桶顏色識別（Restmüll, Biomüll, Altpapier, Gelber Sack）、回收玻璃（Glascontainer）、被動態現在式（Passiv Präsens: werden + Partizip II）",
    "estimatedMinutes": 20
  },
  "135": {
    "day": 135,
    "stage": "A2",
    "week": 20,
    "dayOfWeek": 2,
    "title": "Das deutsche Pfandsystem 德國空瓶押金系統：單次與多次回收瓶、自動退瓶機",
    "germanTitle": "Das deutsche Pfandsystem: Einweg- und Mehrwegpfand, Leergutautomat und Pfandbon",
    "theme": "德國押金回收制度（Einweg- vs. Mehrwegpfand）、押金標誌辨識（DPG-Logo）、超商自動收瓶機（der Leergutautomat）、押金收據折抵（der Pfandbon）、情態動詞被動態（Modalverben im Passiv Präsens）",
    "estimatedMinutes": 20
  },
  "136": {
    "day": 136,
    "stage": "A2",
    "week": 20,
    "dayOfWeek": 3,
    "title": "Energiesparen & Stoßlüften 居家節能與德式衝擊通風：暖氣調控、防霉與關閉待機",
    "germanTitle": "Energiesparen & Stoßlüften: Richtig heizen, lüften gegen Schimmel und Strom sparen",
    "theme": "德國居家能源節約（Energiesparen）、德式衝擊通風法（Stoßlüften）、防潮防霉（Schimmelbildung vermeiden）、暖氣溫度設定（Heizung regulieren）、電器待機耗電（Standby-Modus ausschalten）、建議與祈使表達（Imperativ & Ratschläge mit sollte/muss）",
    "estimatedMinutes": 20
  },
  "137": {
    "day": 137,
    "stage": "A2",
    "week": 20,
    "dayOfWeek": 4,
    "title": "Nachhaltige Ernährung & Bio-Märkte 綠色飲食與有機市集：在地當季、有機標章與惜食搶救",
    "germanTitle": "Nachhaltige Ernährung: Bio-Siegel, regionale Wochenmärkte und Lebensmittelrettung",
    "theme": "有機飲食認證（Bio-Siegel, Demeter, Bioland）、傳統農夫市集（der Wochenmarkt）、當季在地採購（regional & saisonal）、減少剩食浪費（Lebensmittelverschwendung vermeiden / Too Good To Go）、形容詞字尾變化複習（Adjektivdeklination）",
    "estimatedMinutes": 20
  },
  "138": {
    "day": 138,
    "stage": "A2",
    "week": 20,
    "dayOfWeek": 5,
    "title": "Grüne Mobilität: Fahrrad & ÖPNV 綠色交通出行：單車道、大眾運輸、49歐車票與減碳",
    "germanTitle": "Grüne Mobilität: Fahrradfahren, ÖPNV, das Deutschlandticket und der CO2-Fußabdruck",
    "theme": "綠色交通、自行車道（Fahrradwege）、大眾運輸（der ÖPNV - Öffentlicher Personennahverkehr）、德國49歐交通月票（das Deutschlandticket）、碳足跡計算（der CO2-Fußabdruck）、目的子句（Finalsätze: um... zu / damit）與比較級",
    "estimatedMinutes": 20
  },
  "139": {
    "day": 139,
    "stage": "A2",
    "week": 20,
    "dayOfWeek": 6,
    "title": "Woche 20 Rückblick & Test 第 20 週總複習與全真測驗",
    "germanTitle": "Woche 20 Wiederholung: Umweltschutz, Passiv & Goethe A2 Prüfungstraining",
    "theme": "綜整被動態現在式（Passiv Präsens: werden + Partizip II）、情態動詞被動態（Modalverb + Partizip II + werden）、目的子句（um... zu / damit）與全套環保詞彙，進行歌德 A2 聽說讀寫全真模考訓練",
    "estimatedMinutes": 20
  },
  "140": {
    "day": 140,
    "stage": "A2",
    "week": 20,
    "dayOfWeek": 7,
    "title": "Kultur: Ökologisches Bewusstsein in Deutschland 德國生態意識：能源轉型、綠色文化與環保傳統",
    "germanTitle": "Deutsche Umweltkultur: Energiewende, Grüne Politik und gelebte Nachhaltigkeit",
    "theme": "德國深厚生態與環保意識（das Umweltbewusstsein）、能源轉型（die Energiewende）、綠黨與環保法規歷史、青年氣候運動（Fridays for Future）、日常綠色生活儀式（Mülltrennung als Bürgerpflicht）",
    "estimatedMinutes": 20
  },
  "141": {
    "day": 141,
    "stage": "A2",
    "week": 21,
    "dayOfWeek": 1,
    "title": "Reiseplanung & Urlaubsziele 旅遊規劃與度假目的地：旅行社諮詢、機票住宿預訂與國內外假期選擇",
    "germanTitle": "Reiseplanung & Urlaubsziele: Reisebüro, Buchung und Urlaubsarten",
    "theme": "旅遊度假規劃、旅行社諮詢服務、機票與飯店預訂（Flug buchen, Hotel reservieren）、長途旅行與境內旅遊比較（Fernreise vs. Inlandsurlaub）、不定詞帶 zu 基礎文法（Infinitiv mit zu: Grundlagen）",
    "estimatedMinutes": 20
  },
  "142": {
    "day": 142,
    "stage": "A2",
    "week": 21,
    "dayOfWeek": 2,
    "title": "Verben mit Infinitiv mit zu 動詞搭配不定詞與可分動詞嵌入 zu：planen, vorhaben, versuchen, vergessen",
    "germanTitle": "Verben mit zu + Infinitiv & Trennbare Verben mit -zu-",
    "theme": "常用支配 zu + Infinitiv 的德語核心動詞（planen, vorhaben, versuchen, anfangen, aufhören, hoffen, vergessen）、可分動詞不定詞結構（Präfix + zu + Stamm: anzurufen, einzukaufen, mitzubringen）、行李打包與出發準備",
    "estimatedMinutes": 20
  },
  "143": {
    "day": 143,
    "stage": "A2",
    "week": 21,
    "dayOfWeek": 3,
    "title": "Adjektive & Nomen mit Infinitivkonstruktionen 形容詞與名詞搭配不定詞：Lust / Zeit haben, wichtig / schwierig sein",
    "germanTitle": "Nomen und Adjektive mit Infinitivkonstruktionen",
    "theme": "名詞搭配 zu + 不定詞（Lust / Zeit / Angst / Absicht / Möglichkeit haben zu...）、虛主詞形容詞句型（Es ist schön / wichtig / verboten / gesund / leicht zu...）、城市短途旅遊與假期休閒規劃（Städtetrip, Wandern, Entspannung）",
    "estimatedMinutes": 20
  },
  "144": {
    "day": 144,
    "stage": "A2",
    "week": 21,
    "dayOfWeek": 4,
    "title": "Modalverb-Ersatz: brauchen nicht zu + Infinitiv 情態動詞替代結構：不用做／只需做",
    "germanTitle": "Modalverb-Ersatz: brauchen nicht / nur zu + Infinitiv",
    "theme": "德語經典文法替代式：brauchen + nicht / kein- / nur + zu + Infinitiv（等同於 nicht müssen / nur müssen）、全包式飯店度假服務、行李規範、簽證與登機須知",
    "estimatedMinutes": 20
  },
  "145": {
    "day": 145,
    "stage": "A2",
    "week": 21,
    "dayOfWeek": 5,
    "title": "Reklamation im Urlaub & Hotel 假期投訴與飯店交涉：換房、航班延誤與歌德 A2 寫作 Teil 2 正式信件格式",
    "germanTitle": "Reklamation im Hotel, Flugverspätung & Goethe A2 Schreiben Teil 2",
    "theme": "飯店住宿問題交涉（冷氣故障、噪音干擾、浴室清潔）、航班延誤補償要求（Flugverspätung, Entschädigung）、第二虛擬式委婉請求（Konjunktiv II: könnten Sie bitte, ich hätte gern, wäre es möglich）、歌德 A2 寫作測驗第二部分書信規範（Goethe A2 Schreiben Teil 2）",
    "estimatedMinutes": 20
  },
  "146": {
    "day": 146,
    "stage": "A2",
    "week": 21,
    "dayOfWeek": 6,
    "title": "Woche 21 Rückblick & Test 第 21 週總複習與全真測驗：Infinitiv mit zu 綜合語法矩陣與旅遊模考",
    "germanTitle": "Woche 21 Wiederholung & Test: Infinitiv mit zu, Reise-Wortschatz & A2 Prüfungstraining",
    "theme": "第 21 週文法總矩陣（何時加 zu、何時不加 zu、brauchen nicht zu、um... zu、dass 從句轉化）、全套旅遊預訂與出行詞彙、歌德 A2 聽力與閱讀全真模考訓練",
    "estimatedMinutes": 20
  },
  "147": {
    "day": 147,
    "stage": "A2",
    "week": 21,
    "dayOfWeek": 7,
    "title": "Kultur: Urlaubskultur & Fernweh der Deutschen 德國人的度假文化與遠方之戀：世界旅遊冠軍、波羅的海海濱浴場與義大利情懷",
    "germanTitle": "Kultur: Fernweh, Reiseweltmeister & Urlaubstraditionen in Deutschland",
    "theme": "德國人的「遠方之戀」（Fernweh）與旅遊文化、平均每年 30 天帶薪休假、世界旅遊冠軍（Reiseweltmeister）、波羅的海（Ostsee）與北海（Nordsee）海濱沙灘椅（Strandkorb）、自歌德時代流傳的義大利情懷（Italiensehnsucht）、德國鐵路度假（Bahnreisen）",
    "estimatedMinutes": 20
  },
  "148": {
    "day": 148,
    "stage": "A2",
    "week": 22,
    "dayOfWeek": 1,
    "title": "Wohnungssuche & Mietanzeigen 德國租屋尋房：看懂房租明細、合租公寓與廣告縮寫",
    "germanTitle": "Wohnungssuche und Mietanzeigen: Kaltmiete, Warmmiete, Kaution und Besichtigung",
    "theme": "德國租屋市場、冷租與暖租（Kaltmiete vs. Warmmiete）、雜費與押金（Nebenkosten & Kaution）、合租公寓（WG-Zimmer）、租屋廣告縮寫（EBK, KM, WM, Wfl.）與看房預約（Wohnungsbesichtigung）",
    "estimatedMinutes": 20
  },
  "149": {
    "day": 149,
    "stage": "A2",
    "week": 22,
    "dayOfWeek": 2,
    "title": "Adjektivdeklination Typ 3: Ohne Artikel 零冠詞形容詞變化：日常飲食與強變化字尾",
    "germanTitle": "Adjektivdeklination ohne Artikel (Typ 3): kalter Kaffee, frische Milch und deutsches Bier",
    "theme": "零冠詞（Nullartikel）形容詞強變化字尾規律（-er, -e, -es, -e）、物質與不可數名詞修飾、第二格特殊結尾（-en）、人名所有格（Genitiv-s bei Namen）",
    "estimatedMinutes": 20
  },
  "150": {
    "day": 150,
    "stage": "A2",
    "week": 22,
    "dayOfWeek": 3,
    "title": "Hausordnung & Ruhezeiten 住戶公約與安寧時段：公寓生活守則與禁令表達",
    "germanTitle": "Hausordnung und Ruhezeiten: Nachtruhe, Mittagsruhe und Regeln im Mietshaus",
    "theme": "住戶公約（die Hausordnung）、夜間安寧時段（die Nachtruhe ab 22 Uhr）、午休時間（die Mittagsruhe）、公共空間規範（樓梯間、地下室、自行車停放）、規定與禁令表達句型（Es ist verboten, zu... / Man darf nicht...）",
    "estimatedMinutes": 20
  },
  "151": {
    "day": 151,
    "stage": "A2",
    "week": 22,
    "dayOfWeek": 4,
    "title": "Nachbarschaft & Konflikte lösen 鄰里關係與化解紛爭：禮貌請求、包裹代收與便條寫作",
    "germanTitle": "Nachbarschaft und Konflikte lösen: Höfliche Bitten, Paketannahme und Entschuldigungen",
    "theme": "鄰里互動溝通、禮貌請求與道歉（Konjunktiv II: Könnten Sie bitte...? / Würden Sie...?）、包裹代收（Paket für Nachbarn annehmen）、陽台烤肉與派對噪音通知、歌德 A2 寫作 Teil 1 鄰里訊息寫作",
    "estimatedMinutes": 20
  },
  "152": {
    "day": 152,
    "stage": "A2",
    "week": 22,
    "dayOfWeek": 5,
    "title": "Umzug & Ummeldung beim Bürgeramt 搬家入厝與戶籍遷入：兩週時限、房東證明與時間介系詞",
    "germanTitle": "Umzug und Ummeldung beim Bürgeramt: Meldebescheinigung und Wohnungsgeberbestätigung",
    "theme": "搬家流程（Umzugshelfer, Kartons packen）、德國法定戶政登記遷徙手續（die Ummeldung beim Bürgeramt/Einwohnermeldeamt）、房東入住確認書（Wohnungsgeberbestätigung）、兩週登記期限（zwei Wochen Frist）、時間介系詞（innerhalb von, vor, nach, bei, ab）",
    "estimatedMinutes": 20
  },
  "153": {
    "day": 153,
    "stage": "A2",
    "week": 22,
    "dayOfWeek": 6,
    "title": "Woche 22 Rückblick & Test 第 22 週總複習與全真測驗：形容詞三大變化完整矩陣與居家生活實戰",
    "germanTitle": "Woche 22 Rückblick und Modultest: Adjektivdeklination, Wohnen und Nachbarschaft",
    "theme": "第 22 週全單元文法統整：形容詞三大變化橫向對比總表（Typ 1 定冠詞, Typ 2 不定冠詞, Typ 3 零冠詞）、居住租屋與住戶公約高頻單字總檢視、歌德 A2 聽力與閱讀全規模模考",
    "estimatedMinutes": 20
  },
  "154": {
    "day": 154,
    "stage": "A2",
    "week": 22,
    "dayOfWeek": 7,
    "title": "Kultur: Die deutsche Kehrwoche & Mieterkultur 德國文化專題：施瓦本清掃週與高比例租屋文化",
    "germanTitle": "Deutsche Alltagskultur: Die schwäbische Kehrwoche, Mieterkultur und der Mieterbund",
    "theme": "德國生活文化、施瓦本清掃週（Die Kehrwoche）、清掃輪值木牌（das Kehrwoche-Schild）、冬季除雪義務（der Winterdienst）、德國超高租屋比例（Die Mieterquote）、房客權益保障與租客協會（Deutscher Mieterbund）",
    "estimatedMinutes": 20
  },
  "155": {
    "day": 155,
    "stage": "A2",
    "week": 23,
    "dayOfWeek": 1,
    "title": "Auf der Bank: Girokonto & Überweisung 在銀行：開立活期帳戶、轉帳與提款",
    "germanTitle": "Auf der Bank: Girokonto eröffnen, Geld abheben und Überweisungen tätigen",
    "theme": "銀行日常金融服務（Girokonto, Sparkonto, EC-Karte / Girocard, PIN, Geldautomat, Überweisung）、間接是非問句（Indirekte Fragen mit ob: Ja/Nein-Fragen -> ob-Nebensatz）",
    "estimatedMinutes": 20
  },
  "156": {
    "day": 156,
    "stage": "A2",
    "week": 23,
    "dayOfWeek": 2,
    "title": "Behördengänge & Formulare 公民局與行政機關：預約、抽號碼牌與填寫表格",
    "germanTitle": "Behördengänge und Formulare: Bürgeramt, Termine und Wartemarken",
    "theme": "公家機關辦事（Bürgeramt, Ausländerbehörde, Termin vereinbaren, Wartemarke ziehen, Formulare ausfüllen, Unterschrift leisten）、特殊間接問句：W-疑問詞引導從句（Indirekte W-Fragen: Wann, Wo, Wie, Was, Wer, Warum）",
    "estimatedMinutes": 20
  },
  "157": {
    "day": 157,
    "stage": "A2",
    "week": 23,
    "dayOfWeek": 3,
    "title": "Bei der Post & Zoll 郵局與海關：寄送包裹、掛號信與海關稅務",
    "germanTitle": "Bei der Post und beim Zoll: Pakete aufgeben, Einschreiben und Zollgebühren",
    "theme": "郵局寄送與海關服務（Paket aufgeben, Einschreiben mit Rückschein versenden, Zollgebühren, Porto zahlen）、正式語境間接問句（Wissen Sie, ob... / Dürfte ich fragen, wie viel... / Könnten Sie mir mitteilen, ob...）",
    "estimatedMinutes": 20
  },
  "158": {
    "day": 158,
    "stage": "A2",
    "week": 23,
    "dayOfWeek": 4,
    "title": "Verträge kündigen & Fristen einhalten 契約解約與遵守期限：手機合約、健身房與退訂函",
    "germanTitle": "Verträge kündigen: Kündigungsfristen, Einschreiben und das Kündigungsschreiben",
    "theme": "合約終止與法律期限（Handyvertrag, Fitnessstudio, Kündigungsfrist, fristgerecht, Einschreiben, Bestätigung）、歌德 A2 寫作第二部分：正式解約信格式與句型（Goethe A2 Schreiben Teil 2: Formelles Kündigungsschreiben）",
    "estimatedMinutes": 20
  },
  "159": {
    "day": 159,
    "stage": "A2",
    "week": 23,
    "dayOfWeek": 5,
    "title": "Kundenservice & Reklamation telefonisch 客服專線與電話投訴：等候轉接、申訴問題與退換貨",
    "germanTitle": "Kundenservice am Telefon: Warteschleife, Weiterleitung und Reklamation",
    "theme": "電話客服應答與投訴（Hotline anrufen, in der Warteschleife warten, Weiterleitung, Problem schildern, beschädigte Ware reklamieren）、禮貌電話問句與原因從句（Höfliche Telefonphrasen: Könnten Sie mich bitte verbinden? Ich rufe an, weil...）",
    "estimatedMinutes": 20
  },
  "160": {
    "day": 160,
    "stage": "A2",
    "week": 23,
    "dayOfWeek": 6,
    "title": "Woche 23 Rückblick & Test 第 23 週總複習與實戰模考：間接問句矩陣與公務銀行單字",
    "germanTitle": "Woche 23 Rückblick und Modultest: Indirekte Fragen, Bank- und Behördenwortschatz",
    "theme": "第 23 週知識點大串聯：間接問句全景矩陣（ob-Satz vs. W-Fragen）、銀行、公務部門、郵局海關與合約法律詞彙、歌德 A2 聽力與閱讀模擬檢測",
    "estimatedMinutes": 20
  },
  "161": {
    "day": 161,
    "stage": "A2",
    "week": 23,
    "dayOfWeek": 7,
    "title": "Kultur: Deutsche Bürokratie & „Dienstweg“ 德國行政文化：官僚體系、「正式公務途徑」與白紙黑字原則",
    "germanTitle": "Deutsche Bürokratie: Der Dienstweg, „Wer schreibt, der bleibt“ und die Digitalisierung",
    "theme": "德國公務官僚體系之特質（deutsche Bürokratie）、層級分明的公務呈報管道（der Dienstweg）、實體文書憑證文化（„Wer schreibt, der bleibt“、Schriftformkultur）、公家機關數位化轉型與現實挑戰（Digitalisierung der Ämter）",
    "estimatedMinutes": 20
  },
  "162": {
    "day": 162,
    "stage": "A2",
    "week": 24,
    "dayOfWeek": 1,
    "title": "Fitness, Sport & Gesunder Lebensstil 健身運動與健康生活型態",
    "germanTitle": "Fit und aktiv im Alltag: Fitnessstudio, Vereinssport und sich fit halten",
    "theme": "健身房運動、俱樂部體育、慢跑、瑜伽、反身動詞與第四格反身代名詞（Reflexivpronomen im Akkusativ: mich, dich, sich, uns, euch, sich）",
    "estimatedMinutes": 20
  },
  "163": {
    "day": 163,
    "stage": "A2",
    "week": 24,
    "dayOfWeek": 2,
    "title": "Körperpflege & Reflexivpronomen im Dativ 個人衛生護理與第三格反身代名詞",
    "germanTitle": "Körperpflege und Hygiene: Reflexivpronomen im Dativ",
    "theme": "晨間梳洗、洗手刷牙、梳頭洗臉、身體受傷與特定器官部位（sich die Hände waschen, sich die Zähne putzen, sich den Arm brechen, sich wehtun）、第三格反身代名詞（mir, dir, sich, uns, euch, sich）",
    "estimatedMinutes": 20
  },
  "164": {
    "day": 164,
    "stage": "A2",
    "week": 24,
    "dayOfWeek": 3,
    "title": "Beim Facharzt & Untersuchungen 專科醫生看診、各項醫學檢查與轉診",
    "germanTitle": "Facharztpraxis und medizinische Untersuchungen: Schmerzen beschreiben und Termine vereinbaren",
    "theme": "專科醫生類別（Augenarzt, Orthopäde, Zahnarzt, HNO-Arzt）、家庭醫生轉診單（die Überweisung）、檢查項目（Röntgenbild, Ultraschall, Blutabnahme）、描述疼痛與病徵（geschwollen, entzündet）、電話預約看診",
    "estimatedMinutes": 20
  },
  "165": {
    "day": 165,
    "stage": "A2",
    "week": 24,
    "dayOfWeek": 4,
    "title": "Erste Hilfe & Notfallapotheke 急救處置、急救箱與緊急請假便條",
    "germanTitle": "Erste Hilfe, Notruf 112 und Unfallmeldung: Imperativ und Notfallanweisungen",
    "theme": "急救箱必備物品（Erste-Hilfe-Kasten, Verband anlegen, Pflaster, desinfizieren）、緊急求救電話 112（Notruf 112）、復甦姿勢（die stabile Seitenlage）、祈使句指令（Imperativ）、歌德 A2 寫作第一部分（因意外受傷向課程主管請假）",
    "estimatedMinutes": 20
  },
  "166": {
    "day": 166,
    "stage": "A2",
    "week": 24,
    "dayOfWeek": 5,
    "title": "Relativsätze im Nominativ & Akkusativ 關係代名詞子句（主格與第四格基礎）",
    "germanTitle": "Relativsätze im Nominativ und Akkusativ: der Arzt, der hilft / die Medizin, die ich nehme",
    "theme": "關係子句結構、先行詞性別單複數、主格子句（der, die, das, die）、第四格子句（den, die, das, die）、動詞置於句末（Verb am Satzende）、描述醫生、藥品、醫院與病患",
    "estimatedMinutes": 20
  },
  "167": {
    "day": 167,
    "stage": "A2",
    "week": 24,
    "dayOfWeek": 6,
    "title": "Woche 24 Rückblick & Test 第 24 週總複習與實戰模考",
    "germanTitle": "Wiederholung und Test: Reflexivpronomen (Akk/Dat), Relativsätze und Gesundheit",
    "theme": "第 24 週核心文法矩陣整合：反身動詞第四格 vs. 第三格全面對照、關係代名詞主格與第四格（der/den/die/das）、醫療急救與運動健康全真模考（Hören & Lesen Modultest）",
    "estimatedMinutes": 20
  },
  "168": {
    "day": 168,
    "stage": "A2",
    "week": 24,
    "dayOfWeek": 7,
    "title": "Kultur: Die deutsche Vereinskultur & Sportvereine 德國體育俱樂部文化、登記社團（e.V.）與志工精神",
    "germanTitle": "Sportvereine in Deutschland: Das Vereinsleben, e.V., Ehrenamt und Krankenkassen-Bonusprogramme",
    "theme": "德國社團文化（die Vereinskultur）、登記社團（e.V. = eingetragener Verein）、志工精神（das Ehrenamt）、大眾全民體育（der Breitensport）、健保公司的健康紅利集點計畫（Krankenkassen-Bonusprogramme）、跨文化思辨",
    "estimatedMinutes": 20
  },
  "169": {
    "day": 169,
    "stage": "A2",
    "week": 25,
    "dayOfWeek": 1,
    "title": "Reiseplanung & Buchung 旅遊規劃與機票住宿預訂",
    "germanTitle": "Die Reise planen: Flüge buchen, Reiserouten und indirekte Fragen",
    "theme": "機票預訂、旅行社諮詢、行前規劃、間接問句（Indirekte Fragesätze mit ob und W-Wörtern: „Können Sie mir sagen, wann der Flug abfliegt?“）",
    "estimatedMinutes": 20
  },
  "170": {
    "day": 170,
    "stage": "A2",
    "week": 25,
    "dayOfWeek": 2,
    "title": "Im Hotel & Jugendherberge 登記入住與飯店服務",
    "germanTitle": "An der Hotelrezeption: Einchecken, Wünsche äußern und Präteritum von Modalverben",
    "theme": "飯店登記入住（Check-in）、青年旅館、客房設施需求、情態動詞過去式（Präteritum der Modalverben: wollte, konnte, musste, durfte, sollte）",
    "estimatedMinutes": 20
  },
  "171": {
    "day": 171,
    "stage": "A2",
    "week": 25,
    "dayOfWeek": 3,
    "title": "Unterwegs mit Bahn & Flugzeug 火車搭乘與機場轉機",
    "germanTitle": "Reisen mit Verkehrsmitteln: Gleise, Durchsagen und Adjektive vor Nomen",
    "theme": "德鐵搭乘（Deutsche Bahn）、轉乘月台、車站廣播、班機延誤、機場報到與形容詞字尾規則複習",
    "estimatedMinutes": 20
  },
  "172": {
    "day": 172,
    "stage": "A2",
    "week": 25,
    "dayOfWeek": 4,
    "title": "Sehenswürdigkeiten & Stadtführung 城市觀光與景點導覽",
    "germanTitle": "Die Stadt erkunden: Museen, historische Bauwerke und lokale Präpositionen",
    "theme": "城市古蹟、博物館參觀、語音導覽、觀光問路、空間方位介系詞（Lokale Präpositionen: an... vorbei, durch, über, um... herum）",
    "estimatedMinutes": 20
  },
  "173": {
    "day": 173,
    "stage": "A2",
    "week": 25,
    "dayOfWeek": 5,
    "title": "Urlaubsreklamation & Beschwerde 旅遊住宿投訴與退費要求",
    "germanTitle": "Probleme im Urlaub: Reklamationen, Mängel im Hotel und Beschwerdebriefe",
    "theme": "飯店設施瑕疵、噪音投訴、求償退費、歌德 A2 官方書信格式（Reklamationsbrief / E-Mail: Mängel schildern und Frist setzen）",
    "estimatedMinutes": 20
  },
  "174": {
    "day": 174,
    "stage": "A2",
    "week": 25,
    "dayOfWeek": 6,
    "title": "Woche 25 Rückblick & Test 第 25 週總複習與實戰模考",
    "germanTitle": "Woche 25: Zusammenfassung, Grammatik-Training und Prüfungssimulation",
    "theme": "第 25 週旅遊與交通模組大總結、間接問句（ob / W-Fragen）精準變位、情態動詞過去式（Präteritum）、空間介系詞全真診斷",
    "estimatedMinutes": 20
  },
  "175": {
    "day": 175,
    "stage": "A2",
    "week": 25,
    "dayOfWeek": 7,
    "title": "Kultur: Urlaubsgewohnheiten der Deutschen 德國人度假文化與休假哲學",
    "germanTitle": "Kultur & Alltag: Reiseweltmeister, Campingkultur und gesetzlicher Urlaubsanspruch",
    "theme": "德國人休假制度（30 天特休）、旅遊世界冠軍（Reiseweltmeister）、波羅的海與北海度假、阿爾卑斯山露營健行哲學",
    "estimatedMinutes": 20
  },
  "176": {
    "day": 176,
    "stage": "A2",
    "week": 26,
    "dayOfWeek": 1,
    "title": "A2 Abschlusstest Hören & Lesen 歌德 A2 聽讀能力總檢定",
    "germanTitle": "A2-Prüfungstraining: Hörverstehen und Leseverstehen meistern",
    "theme": "歌德 A2 聽力與閱讀全真題型破解：關鍵信號詞（Signalwörter）、時間與地點陷阱、否定轉折（nicht, kein, erst, nur）",
    "estimatedMinutes": 20
  },
  "177": {
    "day": 177,
    "stage": "A2",
    "week": 26,
    "dayOfWeek": 2,
    "title": "A2 Abschlusstest Schreiben & Sprechen 歌德 A2 寫作口說實戰檢定",
    "germanTitle": "A2-Prüfungstraining: Schreiben und Sprechen souverän bestehen",
    "theme": "寫作 Teil 1 表格填寫、Teil 2 簡短書信與道歉通知（30-40字）；口說 Teil 1-3 提問問答與共同協商計劃（Planen etwas gemeinsam）",
    "estimatedMinutes": 20
  },
  "178": {
    "day": 178,
    "stage": "A2",
    "week": 26,
    "dayOfWeek": 3,
    "title": "Grammatik-Matrix A2: 動詞變位、時態與三格四格終極總回顧",
    "germanTitle": "A2-Grammatik-Matrix I: Verben, Zeitformen und Kasus-System",
    "theme": "德語動詞變化全面通盤整理：現在式變音（e->i, a->ä）、現在完成式（haben vs. sein）、情態動詞過去式（wollte, konnte, musste）；與格代名詞與受格代名詞之語序鐵律",
    "estimatedMinutes": 20
  },
  "179": {
    "day": 179,
    "stage": "A2",
    "week": 26,
    "dayOfWeek": 4,
    "title": "Grammatik-Matrix A2: 九大雙向介系詞與四大從屬子句大融合",
    "germanTitle": "A2-Grammatik-Matrix II: Wechselpräpositionen und Nebensätze",
    "theme": "九大雙向介系詞（an, auf, hinter, in, neben, über, unter, vor, zwischen）搭配方向動詞（stellen/legen/setzen）與位置動詞（stehen/liegen/sitzen）；四大核心從屬連詞（weil, dass, wenn, ob）的動詞尾置法則",
    "estimatedMinutes": 20
  },
  "180": {
    "day": 180,
    "stage": "A2",
    "week": 26,
    "dayOfWeek": 5,
    "title": "Goethe A2 Abschlussfeier & Meilenstein A2 榮譽結業！回顧 180 天成果展",
    "germanTitle": "A2-Meilenstein: Herzlichen Glückwunsch zum Niveau A2!",
    "theme": "達成 CEFR A2 榮譽里程碑！回顧 180 天學習旅程、自我能力評估清單、邁向 Goethe B1 核心突破的學習心態與方法躍升",
    "estimatedMinutes": 20
  },
  "181": {
    "day": 181,
    "stage": "B1",
    "week": 26,
    "dayOfWeek": 6,
    "title": "Willkommen bei B1! 雙向連接詞 sowohl... als auch / weder... noch",
    "germanTitle": "B1-Auftakt: Doppelkonjunktionen (sowohl... als auch / weder... noch)",
    "theme": "隆重邁入 Goethe B1 核心突破！掌握雙部連接詞（Doppelkonjunktionen）：表示雙重肯定的 sowohl... als auch...（不僅...而且... / 既...又...）與雙重否定的 weder... noch...（既不...也不...）",
    "estimatedMinutes": 20
  },
  "182": {
    "day": 182,
    "stage": "B1",
    "week": 26,
    "dayOfWeek": 7,
    "title": "B1 Subjunktionen: obwohl & trotzdem 讓步子句與因果對比",
    "germanTitle": "B1-Grammatik: Konzessivsätze mit „obwohl“ und Konsekutiv-Adverb „trotzdem“",
    "theme": "讓步連詞 obwohl（雖然/儘管，從屬子句動詞置尾）與讓步連接副詞 trotzdem（儘管如此，主句動詞倒裝置於第二位）之語意對比與結構互換",
    "estimatedMinutes": 20
  },
  "183": {
    "day": 183,
    "stage": "B1",
    "week": 27,
    "dayOfWeek": 1,
    "title": "Meine Meinung ist... 表達個人觀點與贊同/反對",
    "germanTitle": "B1-Meinung und Argumentation: Eigene Ansichten formulieren und begründen",
    "theme": "歌德 B1 口說 Teil 2 & Teil 3、寫作 Teil 2 核心句型：表達個人觀點、贊同、反對、保留態度與邏輯理由銜接",
    "estimatedMinutes": 20
  },
  "184": {
    "day": 184,
    "stage": "B1",
    "week": 27,
    "dayOfWeek": 2,
    "title": "Vor- und Nachteile abwägen 正反利弊權衡",
    "germanTitle": "B1-Argumentation: Vor- und Nachteile differenziert abwägen",
    "theme": "分析事物的優缺點（Vor- und Nachteile abwägen）、雙部連接詞 einerseits... andererseits... 與 nicht nur... sondern auch... 之論述應用",
    "estimatedMinutes": 20
  },
  "185": {
    "day": 185,
    "stage": "B1",
    "week": 27,
    "dayOfWeek": 3,
    "title": "Diskussionen im Beruf & Alltag 職場與生活討論、禮貌插話",
    "germanTitle": "B1-Interaktion: Diskutieren, Unterbrechen und Kompromisse aushandeln",
    "theme": "在德語職場會議與社交爭辯中：如何禮貌打斷對方（Unterbrechen）、尋求澄清（Klarstellen）、確認理解（Rückfragen）與達成共識（Kompromiss finden）",
    "estimatedMinutes": 20
  },
  "186": {
    "day": 186,
    "stage": "B1",
    "week": 27,
    "dayOfWeek": 4,
    "title": "Forumsbeitrag verfassen 歌德 B1 寫作 Teil 2 論壇發文攻防",
    "germanTitle": "B1-Schreiben Teil 2: Einen strukturierten Forumsbeitrag verfassen",
    "theme": "歌德 B1 寫作核心得分點：80 字論壇發文（Forumsbeitrag）。四大標準段落佈局、個人經驗鋪陳、正反論點交鋒與總結立場表達",
    "estimatedMinutes": 20
  },
  "187": {
    "day": 187,
    "stage": "B1",
    "week": 27,
    "dayOfWeek": 5,
    "title": "Grafiken & Statistiken beschreiben 數據圖表描述與趨勢分析",
    "germanTitle": "B1-Grafikbeschreibung: Zahlen, Trends und Statistiken treffend darstellen",
    "theme": "數據圖表（Grafik/Statistik）專業描述：長條圖、圓餅圖、數據上升/下降/持平（steigen, sinken, betragen）、佔比表達（Prozent/Anteil）與對比總結",
    "estimatedMinutes": 20
  },
  "188": {
    "day": 188,
    "stage": "B1",
    "week": 27,
    "dayOfWeek": 6,
    "title": "Woche 27 Rückblick & B1 Test 第 27 週論述與圖表綜合測驗",
    "germanTitle": "B1-Wochenrückblick: Argumentatives Deutsch und Prüfungssimulation",
    "theme": "第 27 週知識點深度檢測：觀點陳述（Meinung）、正反利弊（Vor-/Nachteile）、會議插話（Einhaken）、論壇發文（Forumsbeitrag）與圖表分析（Grafik）",
    "estimatedMinutes": 20
  },
  "189": {
    "day": 189,
    "stage": "B1",
    "week": 27,
    "dayOfWeek": 7,
    "title": "Kultur: Debattenkultur & Bürgerbeteiligung in Deutschland 德國思辯與公民參與文化",
    "germanTitle": "Kultur & Landeskunde: Debattenkultur, Bürgerbeteiligung und Sachlichkeit",
    "theme": "德語國家的社會文化特色：公開辯論文化（Debattenkultur）、理性就事論事（Sachlichkeit）、市民大會（Bürgerversammlung）與請願制度（Petitionen）",
    "estimatedMinutes": 20
  },
  "190": {
    "day": 190,
    "stage": "B1",
    "week": 28,
    "dayOfWeek": 1,
    "title": "Höfliche Bitten mit würde / könnte / dürfte 社交與職場極致客氣用語",
    "germanTitle": "B1-Konjunktiv II: Höfliche Bitten, Fragen und Aufforderungen",
    "theme": "虛擬二式（Konjunktiv II）現在式核心形式：würde + Infinitiv、könnte（können）、dürfte（dürfen）、wäre（sein）、hätte（haben）；極致禮貌請求與社交得體用語",
    "estimatedMinutes": 20
  },
  "191": {
    "day": 191,
    "stage": "B1",
    "week": 28,
    "dayOfWeek": 2,
    "title": "Wünsche & Träume ausdrücken 願望與夢想表達",
    "germanTitle": "B1-Irreale Wünsche: Wenn doch bloß... Träume und Sehnsüchte im Konjunktiv II",
    "theme": "非真實願望句（Irreale Wunschsätze）：使用 wenn doch / bloß / nur 或動詞置首結構；夢想、遺憾與美好期盼之表達",
    "estimatedMinutes": 20
  },
  "192": {
    "day": 192,
    "stage": "B1",
    "week": 28,
    "dayOfWeek": 3,
    "title": "Ratschläge & Empfehlungen mit sollte 給予建議與諮詢",
    "germanTitle": "B1-Ratschläge: Empfehlungen geben mit „sollte“ und „An deiner Stelle...“",
    "theme": "給予委婉中肯建議：情態動詞 sollte（sollen 的虛擬二式）與經典代入結構 An deiner Stelle würde ich...；朋友諮詢、就醫保健與職涯建議情境",
    "estimatedMinutes": 20
  },
  "193": {
    "day": 193,
    "stage": "B1",
    "week": 28,
    "dayOfWeek": 4,
    "title": "Irreale Bedingungen der Gegenwart 現在非真實條件句",
    "germanTitle": "B1-Konditionalsätze: Irreale Bedingungen der Gegenwart (Wenn..., dann...)",
    "theme": "現在非真實條件句（Irreale Konditionalsätze der Gegenwart）：假設與現實相反的情況（Wenn + Konjunktiv II, (dann) + Konjunktiv II）；科幻假設、生態保護與人生選擇思考",
    "estimatedMinutes": 20
  },
  "194": {
    "day": 194,
    "stage": "B1",
    "week": 28,
    "dayOfWeek": 5,
    "title": "Reklamation & Kundenservice mit Konjunktiv II 客訴與要求改善",
    "germanTitle": "B1-Schreiben Teil 3 & Kundenservice: Höfliche, aber bestimmte Reklamationen",
    "theme": "向客服與商家正式客訴（Reklamation）：以虛擬二式委婉但堅定地指出商品瑕疵、要求退款（Erstattung）、換貨（Ersatzlieferung）或維修（Reparatur）",
    "estimatedMinutes": 20
  },
  "195": {
    "day": 195,
    "stage": "B1",
    "week": 28,
    "dayOfWeek": 6,
    "title": "Woche 28 Rückblick & B1 Konjunktiv II Test 第 28 週虛擬二式綜合複習與測驗",
    "germanTitle": "B1-Wochenrückblick: Der Konjunktiv II in allen Lebenslagen",
    "theme": "虛擬二式全方位大閱兵：würde-Form、Hilfsverben（wäre/hätte）、Modalverben（könnte/sollte/müsste/dürfte）；五大應用情境（Bitten, Wünsche, Ratschläge, Bedingungen, Reklamation）綜合測驗",
    "estimatedMinutes": 20
  },
  "196": {
    "day": 196,
    "stage": "B1",
    "week": 28,
    "dayOfWeek": 7,
    "title": "Kultur: Die Kunst des deutschen Feierabends 德國下班神聖文化與生活平衡",
    "germanTitle": "Kultur & Lebensart: Der deutsche Feierabend und die Trennung von Beruf und Privatleben",
    "theme": "德國文化瑰寶：Feierabend（神聖下班時光）、Work-Life-Balance（工作與生活平衡）、界線劃分（Grenzziehung: 下班絕不看公務訊息）與俱樂部社團生活（Vereinsleben）",
    "estimatedMinutes": 20
  },
  "197": {
    "day": 197,
    "stage": "B1",
    "week": 29,
    "dayOfWeek": 1,
    "title": "Vorgangspassiv im Präsens 過程被動態現在式：werden + Partizip II",
    "germanTitle": "B1-Passiv: Das Vorgangspassiv im Präsens verstehen und anwenden",
    "theme": "德語過程被動態現在式基本構成：werden（變位）+ 第二分詞（Partizip II 句尾）；行為者標記 von + Dativ 與媒介工具 durch + Akkusativ；汽車保修與日常服務情境",
    "estimatedMinutes": 20
  },
  "198": {
    "day": 198,
    "stage": "B1",
    "week": 29,
    "dayOfWeek": 2,
    "title": "Vorgangspassiv im Präteritum 過程被動態過去式：wurden + Partizip II",
    "germanTitle": "B1-Passiv Präteritum: Historische Ereignisse und Berichte formulieren",
    "theme": "被動態過去式（Präteritum）：wurde / wurden + Partizip II；新聞、歷史紀事、重大發明與事故報告之客觀敘述",
    "estimatedMinutes": 20
  },
  "199": {
    "day": 199,
    "stage": "B1",
    "week": 29,
    "dayOfWeek": 3,
    "title": "Passiv mit Modalverben 帶情態動詞的被動態：muss / kann / soll gemacht werden",
    "germanTitle": "B1-Passiv mit Modalverben: Regeln, Vorschriften und Möglichkeiten ausdrücken",
    "theme": "情態動詞與被動態結合：Modalverb + Partizip II + werden（原型置句尾）；法律規範、辦事手續、操作手冊與登機安全須知",
    "estimatedMinutes": 20
  },
  "200": {
    "day": 200,
    "stage": "B1",
    "week": 29,
    "dayOfWeek": 4,
    "title": "Passiv vs. man & reflexive Passiversatzformen 被動態替代形式",
    "germanTitle": "B1-Passiversatzformen: „man“, „sich lassen“ und Adjektive auf „-bar“",
    "theme": "被動態三大實用替代表達：代名詞 man、反身結構 sich lassen + Infinitiv、形容詞字尾 -bar / -lich；科技產品評測與日常說明文之靈活轉換",
    "estimatedMinutes": 20
  },
  "201": {
    "day": 201,
    "stage": "B1",
    "week": 29,
    "dayOfWeek": 5,
    "title": "Vorgangspassiv im Perfekt 過程被動態完成式：ist gemacht worden",
    "germanTitle": "B1-Passiv Perfekt: Das Passiv in der gesprochenen Vergangenheit",
    "theme": "被動完成式（Passiv Perfekt）：sein + Partizip II + worden；口語對話、包裹簽收、房屋整修完成驗收之過去被動表達",
    "estimatedMinutes": 20
  },
  "202": {
    "day": 202,
    "stage": "B1",
    "week": 29,
    "dayOfWeek": 6,
    "title": "Woche 29 Rückblick & B1 Passiv Test 第 29 週被動態綜合複習與測驗",
    "germanTitle": "B1-Wochenrückblick: Das Passiv in allen Zeitformen meistern",
    "theme": "第 29 週全方位檢測：被動現在式（wird gemacht）、被動過去式（wurde gemacht）、情態被動（muss gemacht werden）、被動完成式（ist gemacht worden）與被動替代形式（lässt sich / -bar）",
    "estimatedMinutes": 20
  },
  "203": {
    "day": 203,
    "stage": "B1",
    "week": 29,
    "dayOfWeek": 7,
    "title": "Kultur: Die deutsche Erfindungskultur & „Made in Germany“ 德國發明文化與德國製造",
    "germanTitle": "Kultur & Geschichte: Deutsche Pioniere, Welterfindungen und das Siegel „Made in Germany“",
    "theme": "德國科技發明歷史與文化遺產：印刷術（Gutenberg）、汽車（Benz/Daimler）、阿斯匹靈、MP3 格式；標籤「Made in Germany」從被英國人防範山寨到成為世界品質標竿的歷史躍遷",
    "estimatedMinutes": 20
  },
  "204": {
    "day": 204,
    "stage": "B1",
    "week": 30,
    "dayOfWeek": 1,
    "title": "Relativpronomen im Dativ 第三格關係代名詞：dem, der, dem, denen",
    "germanTitle": "B1-Relativsätze: Relativpronomen im Dativ beherrschen",
    "theme": "關係代名詞第三格（dem, der, dem, denen）的文法規則；先行詞決定性別與數，子句動詞決定第三格（helfen, vertrauen, danken, gratulieren）；職場同事互助與人際網絡情境",
    "estimatedMinutes": 20
  },
  "205": {
    "day": 205,
    "stage": "B1",
    "week": 30,
    "dayOfWeek": 2,
    "title": "Relativsätze mit Präpositionen 介系詞引導之關係子句",
    "germanTitle": "B1-Relativsätze: Präposition + Relativpronomen präzise einsetzen",
    "theme": "介系詞放在關係代名詞前方；由介系詞決定代名詞之四格或三格（für den, mit dem, über die, auf das）；動詞與介系詞固定搭配在商務專案、面試求職中的綜合應用",
    "estimatedMinutes": 20
  },
  "206": {
    "day": 206,
    "stage": "B1",
    "week": 30,
    "dayOfWeek": 3,
    "title": "Ortsbezogene Relativsätze mit „wo“ und „wohin“ 地點關係副詞",
    "germanTitle": "B1-Relativsätze: Lokale Relativsätze mit „wo“ und „wohin“",
    "theme": "地點先行詞與關係副詞 wo（靜態地點，替代 in dem / in der / an dem）及 wohin（動態方向，替代 in das / nach...）之轉換規則；城市特色、旅遊景點與移居生活描繪",
    "estimatedMinutes": 20
  },
  "207": {
    "day": 207,
    "stage": "B1",
    "week": 30,
    "dayOfWeek": 4,
    "title": "Neutrale Relativsätze mit „was“ 中性與泛指關係代名詞",
    "germanTitle": "B1-Relativsätze: Das Relativpronomen „was“ treffsicher anwenden",
    "theme": "關係代名詞 „was“ 的特殊引導規則：中性不定代名詞（alles, etwas, nichts, vieles）、名詞化最高級（das Beste, das Schönste）及修飾整句前情；人生反思與觀點陳述",
    "estimatedMinutes": 20
  },
  "208": {
    "day": 208,
    "stage": "B1",
    "week": 30,
    "dayOfWeek": 5,
    "title": "Relativsätze im Genitiv 第二格關係代名詞：dessen, deren",
    "germanTitle": "B1-Relativsätze: Relativpronomen im Genitiv (dessen / deren)",
    "theme": "關係代名詞第二格（dessen, deren, dessen, deren）的形態規則；表所有格與從屬關係；名詞不加冠詞之特殊規則；尋物尋人啟事、人物檔案生平描繪情境",
    "estimatedMinutes": 20
  },
  "209": {
    "day": 209,
    "stage": "B1",
    "week": 30,
    "dayOfWeek": 6,
    "title": "Woche 30 Rückblick & B1 Relativsätze Gesamt-Test 關係子句全方位檢定",
    "germanTitle": "B1-Wiederholung: Die vollständige Relativsatz-Matrix beherrschen",
    "theme": "第 30 週總結複習：Nominativ, Akkusativ, Dativ, Genitiv, Präpositionen, wo/wohin 與 was 的全面性四步判定法；全真模擬綜合診斷測驗",
    "estimatedMinutes": 25
  },
  "210": {
    "day": 210,
    "stage": "B1",
    "week": 30,
    "dayOfWeek": 7,
    "title": "Kultur: WG-Leben in Deutschland 德國合租生活文化與共居哲學",
    "germanTitle": "Kultur & Alltag: Das WG-Leben und die Kultur des Zusammenwohnens",
    "theme": "德國大學生與年輕白領的代表性居住文化——Wohngemeinschaft（合租公寓）；WG-Casting（室友面試）、Putzplan（打掃輪值表）、Kühlschrankordnung（冰箱公私分區）與德式人際邊界感",
    "estimatedMinutes": 20
  },
  "211": {
    "day": 211,
    "stage": "B1",
    "week": 31,
    "dayOfWeek": 1,
    "title": "Infinitiv mit „zu“ nach Verben und Adjektiven 不定式結構：zu + Infinitiv",
    "germanTitle": "B1-Infinitiv: Infinitiv mit „zu“ nach Verben und Adjektiven",
    "theme": "德語不定式加 zu 的基本句法：分離動詞嵌合 -zu-（anzufangen）、動詞置於句尾、省去重複主詞；典型動詞（hoffen, vorhaben, vergessen, versuchen）與形容詞結構（es ist wichtig / leicht / gesund, ... zu ...）；日常工作與生活習慣情境",
    "estimatedMinutes": 20
  },
  "212": {
    "day": 212,
    "stage": "B1",
    "week": 31,
    "dayOfWeek": 2,
    "title": "Infinitiv mit „zu“ nach Nomen 名詞後接不定式結構",
    "germanTitle": "B1-Infinitiv: Infinitiv mit „zu“ nach festen Nomen-Verbindungen",
    "theme": "名詞後的不定式搭配：Lust haben zu, Zeit haben zu, Angst haben zu, die Absicht / den Plan haben zu, die Möglichkeit / Chance haben zu；社交邀約、假期規劃與職場志向情境",
    "estimatedMinutes": 20
  },
  "213": {
    "day": 213,
    "stage": "B1",
    "week": 31,
    "dayOfWeek": 3,
    "title": "Finale Infinitivsätze: „um... zu...“ vs. „damit“ 目的句型雙雄對決",
    "germanTitle": "B1-Satzgefüge: Finalsätze mit „um... zu“ im Vergleich zu „damit“",
    "theme": "目的句型的精準分工：主詞相同時優先使用「um... zu + 不定式」；主詞不同時強制使用「damit + 完整從屬子句」；留學升學、職涯進階與個人動機情境",
    "estimatedMinutes": 20
  },
  "214": {
    "day": 214,
    "stage": "B1",
    "week": 31,
    "dayOfWeek": 4,
    "title": "Modale Infinitivsätze: „ohne... zu...“ vs. „ohne dass“ 伴隨否定句型",
    "germanTitle": "B1-Infinitiv: Modalsätze mit „ohne... zu“ und „ohne dass“",
    "theme": "伴隨狀態否定「未曾做...就... / 沒有...卻...」：主詞相同用 „ohne... zu + Infinitiv“；主詞不同用 „ohne dass + 完整從句“；果斷決策、突發狀況與商務禮儀情境",
    "estimatedMinutes": 20
  },
  "215": {
    "day": 215,
    "stage": "B1",
    "week": 31,
    "dayOfWeek": 5,
    "title": "Alternative Infinitivsätze: „anstatt... zu...“ vs. „anstatt dass“ 替代句型",
    "germanTitle": "B1-Infinitiv: Alternativsätze mit „anstatt... zu“ und „anstatt dass“",
    "theme": "替代與對照表達「代替做... / 而不是做...」：主詞相同用 „anstatt... zu + Infinitiv“（口語亦常縮寫為 „statt... zu“）；主詞不同用 „anstatt dass“；健康生活作息、綠色環保與消費理財情境",
    "estimatedMinutes": 20
  },
  "216": {
    "day": 216,
    "stage": "B1",
    "week": 31,
    "dayOfWeek": 6,
    "title": "Woche 31 Rückblick & B1 Infinitivkonstruktionen Gesamt-Test 不定式全景檢定",
    "germanTitle": "B1-Wiederholung: Alle Infinitivkonstruktionen im systematischen Vergleich",
    "theme": "第 31 週不定式系統總結：Infinitiv mit „zu“, um... zu, ohne... zu, anstatt... zu 的語法共通性與相異性；主詞一致性（Subjektidentität）判定；情態動詞與感官動詞之排除邊界",
    "estimatedMinutes": 25
  },
  "217": {
    "day": 217,
    "stage": "B1",
    "week": 31,
    "dayOfWeek": 7,
    "title": "Kultur: Das deutsche Schul- und Ausbildungssystem 德國教育與雙軌職教體系",
    "germanTitle": "Kultur & Bildung: Grundschule, Abitur und das Duale System",
    "theme": "德國教育體制全景解析：四年初小 Grundschule 早期分流；Gymnasium（文理中學與高中畢業會考 Abitur）、Realschule、Hauptschule；享譽世界的「Duale Ausbildung（雙軌制職業教育）」與「Meister（大師級工匠）」崇高社會地位",
    "estimatedMinutes": 20
  },
  "218": {
    "day": 218,
    "stage": "B1",
    "week": 32,
    "dayOfWeek": 1,
    "title": "Die N-Deklination der maskulinen Nomen 陽性弱變化名詞",
    "germanTitle": "B1-Grammatik: Die N-Deklination maskuliner Nomen sicher beherrschen",
    "theme": "陽性弱變化名詞（N-Deklination）特徵與判斷準則：除了單數第一格（Nominativ）外，在 Akkusativ, Dativ, Genitiv 及所有複數格位中全部加上 -(e)n 詞尾；核心群組（-e 結尾陽性名詞、外來語後綴、特殊名詞 der Herr, der Name）；職場客戶洽談與警民互動情境",
    "estimatedMinutes": 20
  },
  "219": {
    "day": 219,
    "stage": "B1",
    "week": 32,
    "dayOfWeek": 2,
    "title": "Der Genitiv im Alltag & Schriftsprache 第二格日常與書面語應用",
    "germanTitle": "B1-Grammatik: Der Genitiv in der Praxis treffsicher verwenden",
    "theme": "第二格（Genitiv）的核心功能：表達所有權、從屬性與身分關係（Wessen...?）；定冠詞與不定冠詞變化（des/eines -s/-es, der/einer）；人名第二格加 -s 規則（Goethes Werke）；公文條例與正式書信情境",
    "estimatedMinutes": 20
  },
  "220": {
    "day": 220,
    "stage": "B1",
    "week": 32,
    "dayOfWeek": 3,
    "title": "Genitivpräpositionen: wegen, trotz, während, statt 第二格介系詞四大天王",
    "germanTitle": "B1-Grammatik: Die wichtigsten Genitivpräpositionen im Alltag",
    "theme": "德語四大核心第二格介系詞的精準掌握：wegen（因為、由於）、trotz（儘管、雖然）、während（在...期間）、statt / anstatt（代替、而不是）；行程異動、天候突變、法律條款與商務請假情境",
    "estimatedMinutes": 20
  },
  "221": {
    "day": 221,
    "stage": "B1",
    "week": 32,
    "dayOfWeek": 4,
    "title": "B1 Schreibwerkstatt Teil 1: Die persönliche E-Mail 實戰私人信件",
    "germanTitle": "B1-Schreiben: Aufgabe 1 - Die persönliche E-Mail meistern",
    "theme": "歌德 B1 寫作測驗第一大題實戰拆解：約 80 字私人信件寫作；親切稱呼與結尾問候；三大考題引導點（3 Leitpunkte）的充實覆蓋；生動描繪經歷、詳述因由、主動提出會面建議；全真範文與避坑指南",
    "estimatedMinutes": 20
  },
  "222": {
    "day": 222,
    "stage": "B1",
    "week": 32,
    "dayOfWeek": 5,
    "title": "B1 Schreibwerkstatt Teil 3: Die formelle Mitteilung 實戰正式短訊",
    "germanTitle": "B1-Schreiben: Aufgabe 3 - Die formelle Entschuldigung und Bitte",
    "theme": "歌德 B1 寫作測驗第三大題實戰解析：約 40 字極簡正式書信／便條；向主管、老師或機構負責人禮貌致歉、說明缺席理由並提出補償方案；Konjunktiv II 禮貌句型（könnte, würde）；高分通規模組",
    "estimatedMinutes": 20
  },
  "223": {
    "day": 223,
    "stage": "B1",
    "week": 32,
    "dayOfWeek": 6,
    "title": "Woche 32 Rückblick & B1 Grammatik-Synthese 弱變化與第二格全景總結",
    "germanTitle": "B1-Wiederholung: N-Deklination, Genitiv und Schreibstrategien",
    "theme": "第 32 週總複習與高階語法大整合：N-Deklination 形態檢驗、Genitiv 冠詞詞尾與介系詞矩陣（wegen, trotz, während, statt）、B1 寫作一/三題格式對照與實戰自查清單",
    "estimatedMinutes": 25
  },
  "224": {
    "day": 224,
    "stage": "B1",
    "week": 32,
    "dayOfWeek": 7,
    "title": "Kultur: Mülltrennung, Umweltschutz & das Pfandsystem 德國垃圾分類與押金文化",
    "germanTitle": "Kultur & Alltag: Mülltrennung, Pfandsystem und gelebter Umweltschutz",
    "theme": "德國傲視全球的環保生活典範：極致嚴密的垃圾分類（Gelber Sack/Tonne 輕包裝、Altpapier 廢紙、Biomüll 廚餘有機、Restmüll 殘餘不可回收、Glascontainer 玻璃按顏色分投）；享譽全球的「Pfandsystem（寶特瓶易開罐 25 Cent 押金退瓶機）」與循環永續文化",
    "estimatedMinutes": 20
  },
  "225": {
    "day": 225,
    "stage": "B1",
    "week": 33,
    "dayOfWeek": 1,
    "title": "Zweiteilige Konnektoren I: sowohl ... als auch / nicht nur ... sondern auch",
    "germanTitle": "B1-Grammatik: Doppelkonnektoren für Aufzählungen und Steigerungen",
    "theme": "雙部連接詞第一部：並列兼具「sowohl ... als auch ...（既...又... / 不但...而且...）」與層遞加強「nicht nur ... sondern auch ...（不僅...而且更是...）」；在求職優勢、多元才能、生活機能與商品評價中的實用語法",
    "estimatedMinutes": 20
  },
  "226": {
    "day": 226,
    "stage": "B1",
    "week": 33,
    "dayOfWeek": 2,
    "title": "Zweiteilige Konnektoren II: weder ... noch (雙重否定)",
    "germanTitle": "B1-Grammatik: Doppelkonnektor „weder ... noch“ für zweifache Verneinung",
    "theme": "雙重否定連接詞「weder ... noch ...（既不...也不... / 兩者皆非）」的句法構造；省略 nicht/kein 的內在否定特質；在求職要求、飲食禁忌、旅行住宿不滿與生活習慣中的實用表達",
    "estimatedMinutes": 20
  },
  "227": {
    "day": 227,
    "stage": "B1",
    "week": 33,
    "dayOfWeek": 3,
    "title": "Zweiteilige Konnektoren III: entweder ... oder (二選一排他性選擇)",
    "germanTitle": "B1-Grammatik: Doppelkonnektor „entweder ... oder“ für Alternativen",
    "theme": "二選一排他性雙部連接詞「entweder ... oder ...（要麼...要麼... / 非此即彼）」；語序規則（entweder 的位置靈活性與 oder 零位連接）；在決策擬定、度假抉擇、行程安排與合約簽署中的實用表達",
    "estimatedMinutes": 20
  },
  "228": {
    "day": 228,
    "stage": "B1",
    "week": 33,
    "dayOfWeek": 4,
    "title": "Zweiteilige Konnektoren IV: zwar ... aber (讓步與轉折對比)",
    "germanTitle": "B1-Grammatik: Doppelkonnektor „zwar ... aber“ für Einräumung und Kontrast",
    "theme": "讓步轉折雙部連接詞「zwar ... aber ...（雖然...但是... / 固然...然而...）」；客觀承認局限與凸顯核心優勢；在租屋評估、職務優缺點權衡、語言學習心得與消費購物中的成熟思辨",
    "estimatedMinutes": 20
  },
  "229": {
    "day": 229,
    "stage": "B1",
    "week": 33,
    "dayOfWeek": 5,
    "title": "Zweiteilige Konnektoren V: je ... desto / umso (比例比較級)",
    "germanTitle": "B1-Grammatik: Proportionale Steigerung mit „je ... desto / umso“",
    "theme": "比例比較級雙部連接詞「je + 比較級 ... desto / umso + 比較級 ...（愈...就愈...）」；語序構造（從句動詞置句尾，主句動詞緊隨 desto+比較級之後）；在學習效率、經濟投入、健康生活與社會趨勢中的高頻應用",
    "estimatedMinutes": 20
  },
  "230": {
    "day": 230,
    "stage": "B1",
    "week": 33,
    "dayOfWeek": 6,
    "title": "Woche 33 Rückblick & Zweiteilige Konnektoren B1 Gesamt-Test 雙部連接詞全景大檢定",
    "germanTitle": "B1-Wiederholung: Die vollständige Doppelkonnektoren-Matrix",
    "theme": "第 33 週總結複習：sowohl... als auch, nicht nur... sondern auch, weder... noch, entweder... oder, zwar... aber, je... desto/umso 的五大維度全決策矩陣與全真診斷檢定",
    "estimatedMinutes": 25
  },
  "231": {
    "day": 231,
    "stage": "B1",
    "week": 33,
    "dayOfWeek": 7,
    "title": "Kultur: Konsum, Bargeldliebe & bargeldloses Bezahlen in Deutschland",
    "germanTitle": "Kultur & Alltag: Bargeldkultur, Girocard und Konsumgewohnheiten",
    "theme": "德國人獨步全球的「現金情結（Bargeldliebe）」與文化心理：諺語「Nur Bares ist Wahres（只有現金才是真）」；隱私保護、預算掌控意識；Girocard（EC-Karte）與現代行動支付在德國的漸進普及；德國理財消費觀與避免過度負債（Schuldenprävention）哲學",
    "estimatedMinutes": 20
  },
  "232": {
    "day": 232,
    "stage": "B1",
    "week": 34,
    "dayOfWeek": 1,
    "title": "Partizip I als Adjektiv 第一分詞作定語形容詞",
    "germanTitle": "B1-Grammatik: Das Partizip I (Präsens) als attributives Adjektiv",
    "theme": "第一分詞（Partizip I / Partizip Präsens）的構成法：動詞不定式 + -d（spielend, lachend, steigend）；核心語意：主動且正在進行中；第一分詞作定語形容詞時的形容詞詞尾變格規則；日常生活場景、動態觀察與社會趨勢描繪",
    "estimatedMinutes": 20
  },
  "233": {
    "day": 233,
    "stage": "B1",
    "week": 34,
    "dayOfWeek": 2,
    "title": "Partizip II als Adjektiv 第二分詞作定語形容詞",
    "germanTitle": "B1-Grammatik: Das Partizip II (Perfekt) als attributives Adjektiv",
    "theme": "第二分詞（Partizip II / Partizip Perfekt）作定語形容詞的構造法；核心語意：被動態與已完成的結果狀態（passivisch / vollendet）；形容詞詞尾變格；二手商品拍賣、文件簽署、房屋維修與生活服務情境",
    "estimatedMinutes": 20
  },
  "234": {
    "day": 234,
    "stage": "B1",
    "week": 34,
    "dayOfWeek": 3,
    "title": "Partizip I mit „zu“ (Gerundiv) 及物動詞被動必要性結構",
    "germanTitle": "B1-Grammatik: Das Gerundiv (zu + Partizip I) verstehen",
    "theme": "德語高階被動定語結構——Gerundiv（zu + 第一分詞）：表示「必須被... / 能夠被...的」；等價於 „muss / kann ... gemacht werden“；公文指示、技術規範、作業檢查與重要日程情境",
    "estimatedMinutes": 20
  },
  "235": {
    "day": 235,
    "stage": "B1",
    "week": 34,
    "dayOfWeek": 4,
    "title": "Nominalisierung 名詞化技巧（動詞與形容詞轉化為名詞）",
    "germanTitle": "B1-Grammatik: Nominalisierung von Verben und Adjektiven",
    "theme": "德語名詞化系統：動詞不定式轉名詞（全部為中性 das：das Schwimmen, das Rauchen, das Lernen）；形容詞轉名詞表示人（der/die Jugendliche, der/die Angestellte, der/die Erwachsene）與表示抽象事物（das Gute, das Neue, etwas Schönes）；形容詞名詞化後的詞尾變格規則；社會人口與生活日常",
    "estimatedMinutes": 20
  },
  "236": {
    "day": 236,
    "stage": "B1",
    "week": 34,
    "dayOfWeek": 5,
    "title": "B1 Schreibwerkstatt Teil 2: Der Forumsbeitrag 論壇觀點發表實戰",
    "germanTitle": "B1-Schreiben: Aufgabe 2 - Den Diskussionsbeitrag überzeugend verfassen",
    "theme": "歌德 B1 寫作測驗第二大題（Aufgabe 2）全攻略：約 80 字網路論壇／討論區個人意見發文；四大必備模組（1. 參照前文引言、2. 清晰亮明個人立場、3. 多維度利弊與原因論證、4. 母國情況與展望總結）；高頻主題模擬與評分扣分避坑指南",
    "estimatedMinutes": 20
  },
  "237": {
    "day": 237,
    "stage": "B1",
    "week": 34,
    "dayOfWeek": 6,
    "title": "Woche 34 Rückblick & Partizipien/Nominalisierung B1 Gesamt-Test 綜合大檢定",
    "germanTitle": "B1-Wiederholung: Partizip I, Partizip II, Gerundiv und Nominalisierung",
    "theme": "第 34 週總結複習：第一分詞（Partizip I）、第二分詞（Partizip II）、動名形容詞 Gerundiv（zu + Partizip I）及動詞/形容詞名詞化（Nominalisierung）之全維度辨析與全真診斷測驗",
    "estimatedMinutes": 25
  },
  "238": {
    "day": 238,
    "stage": "B1",
    "week": 34,
    "dayOfWeek": 7,
    "title": "Kultur: Arbeitskultur in Deutschland - Feierabend, Betriebsrat & Pünktlichkeit",
    "germanTitle": "Kultur & Arbeitswelt: Feierabendkultur, Mitbestimmung und preußische Pünktlichkeit",
    "theme": "德國職場文化三大核心基石：神聖不可侵犯的「Feierabend（下班時光）」——嚴格的工作與生活邊界（下班後不回郵件、休假權益）；享譽世界的「Betriebsrat（企業職工委員會）」與共決體制（Mitbestimmung）；精準至分秒的「Pünktlichkeit（守時）」文化與專業邊界感",
    "estimatedMinutes": 20
  },
  "239": {
    "day": 239,
    "stage": "B1",
    "week": 35,
    "dayOfWeek": 1,
    "title": "Temporalsätze: nachdem, bevor, seitdem, solange 時間從句全體系",
    "germanTitle": "B1-Grammatik: Komplexe Zeitverhältnisse in Temporalsätzen",
    "theme": "時間從屬子句的精準時態呼應：nachdem（動作先發性 Vorzeitigkeit：現在完成式與過去完成式 Plusquamperfekt 嚴格呼應）；bevor / ehe（在...之前）；seitdem（自...以來，持續至今）；solange（只要...期間重合）；日常生活規劃與職涯里程碑",
    "estimatedMinutes": 20
  },
  "240": {
    "day": 240,
    "stage": "B1",
    "week": 35,
    "dayOfWeek": 2,
    "title": "Modalsätze mit „indem“ (und dadurch, dass) 方式手段從句",
    "germanTitle": "B1-Grammatik: Modalsätze mit „indem“ und „dadurch, dass“",
    "theme": "方式與手段從屬子句（Modalsätze）：回答 „Wie? / Wodurch?“（透過何種手段/方式達成某目的）；核心連詞 „indem“（透過做...）與關聯結構 „dadurch, dass ...“；學習策略優化、環保節能、健康管理與科技效率情境",
    "estimatedMinutes": 20
  },
  "241": {
    "day": 241,
    "stage": "B1",
    "week": 35,
    "dayOfWeek": 3,
    "title": "Konsekutivsätze mit „sodass“ / „so ..., dass ...“ 結果從句",
    "germanTitle": "B1-Grammatik: Konsekutivsätze mit „sodass“ und „so ..., dass“",
    "theme": "結果從屬子句（Konsekutivsätze）：表達前因引發的客觀後果（Mit welcher Folge? 帶來何種後果？）；合寫 „sodass“ 與分寫 „so [形容詞/副詞], dass ...“ 的句法區別；天候惡劣、交通延誤、科技數位沉迷與市場波動情境",
    "estimatedMinutes": 20
  },
  "242": {
    "day": 242,
    "stage": "B1",
    "week": 35,
    "dayOfWeek": 4,
    "title": "Konditionalsätze mit „falls“ & uneingeleitete Wenn-Sätze 條件從句變體",
    "germanTitle": "B1-Grammatik: Konditionalsätze mit „falls“ und Verb-Erst-Stellung",
    "theme": "條件從屬子句（Konditionalsätze）進階變體：連詞 „falls“（萬一、倘若，強調不確定性或低概率條件）；無引導詞條件句（動詞置於句首第一位 Position 1）；在客戶服務、行程保險、意外預防與商務備案情境中的精準運用",
    "estimatedMinutes": 20
  },
  "243": {
    "day": 243,
    "stage": "B1",
    "week": 35,
    "dayOfWeek": 5,
    "title": "Adversativsätze: während (dagegen) vs. wohingegen 對比從句",
    "germanTitle": "B1-Grammatik: Adversativsätze zum Ausdruck von Gegensätzen",
    "theme": "對比轉折從屬子句（Adversativsätze）：表達兩個獨立主體或事實之間的對立反差（Im Gegensatz wozu? 相比之下...）；連詞 „während“（此處作對比連詞「而...、反之...」）與高階書面連詞 „wohingegen“；世代觀念、生活型態與城鄉文化差異對比情境",
    "estimatedMinutes": 20
  },
  "244": {
    "day": 244,
    "stage": "B1",
    "week": 35,
    "dayOfWeek": 6,
    "title": "Woche 35 Rückblick & Komplexe Satzverbindungen Gesamt-Test 從句匯流大檢定",
    "germanTitle": "B1-Wiederholung: Das Meister-Netzwerk aller Nebensatzstrukturen",
    "theme": "第 35 週總結複習：時間從句（nachdem 時態先發性、bevor, seitdem, solange）、手段從句（indem, dadurch dass）、結果從句（sodass, so... dass）、條件變體（falls, Verb-1）、對比從句（während, wohingegen）之全景決策矩陣與診斷測驗",
    "estimatedMinutes": 25
  },
  "245": {
    "day": 245,
    "stage": "B1",
    "week": 35,
    "dayOfWeek": 7,
    "title": "Kultur: Datenschutz & Digitalisierung in Deutschland (DSGVO)",
    "germanTitle": "Kultur & Digitalisierung: Das Recht auf informationelle Selbstbestimmung",
    "theme": "德國對個人資料保護與隱私權的極致追求：歐盟通用資料保護條例（DSGVO / GDPR）；歷史創傷（納粹帝國人口普查與東德秘密警察 Stasi 全民監控檔案）；資訊自決權（Recht auf informationelle Selbstbestimmung）；Cookie 彈窗、Google 街景模糊化文化與對 AI 科技的理性倫理思辨",
    "estimatedMinutes": 20
  },
  "246": {
    "day": 246,
    "stage": "B1",
    "week": 36,
    "dayOfWeek": 1,
    "title": "B1 Sprechen Teil 1: Gemeinsam etwas planen 雙人協商規劃",
    "germanTitle": "Prüfungstraining: Erfolgreiche Interaktion & Kompromissfindung in Teil 1",
    "theme": "歌德 B1 口說第一部分實戰：提議 (Vorschläge machen)、委婉異議 (Einwände äußern)、折衷協商 (Kompromisse aushandeln)、分工安排 (Aufgaben verteilen) 與達成共識 (Einigung besiegeln)；籌劃送別派對情境",
    "estimatedMinutes": 20
  },
  "247": {
    "day": 247,
    "stage": "B1",
    "week": 36,
    "dayOfWeek": 2,
    "title": "B1 Sprechen Teil 2: Thema präsentieren (Struktur & Einleitung) 簡報架構與開場",
    "germanTitle": "Prüfungstraining: Der 5-Folien-Aufbau, Gliederung & persönliche Erfahrungen",
    "theme": "歌德 B1 口說第二部分：5 頁投影片標準架構、主題宣告 (Thema vorstellen)、大綱宣告 (Gliederung)、清晰轉場詞 (Folien-Übergänge) 與個人親身體驗 (Persönliche Erfahrungen)；演講主題「兒童該擁有手機嗎？」",
    "estimatedMinutes": 20
  },
  "248": {
    "day": 248,
    "stage": "B1",
    "week": 36,
    "dayOfWeek": 3,
    "title": "B1 Sprechen Teil 2: Vor-/Nachteile, Heimatland & Fazit 利弊剖析與母國對照",
    "germanTitle": "Prüfungstraining: Differenzierte Argumentation, Vergleich Heimatland & Vortragsabschluss",
    "theme": "簡報核心深化：母國（台灣）文化與生活現況深刻對照、優缺點對稱平衡論述 (einerseits... andererseits...)、個人觀點總結 (Fazit ziehen) 與向考官大眾專業致謝 (Danksagung)",
    "estimatedMinutes": 20
  },
  "249": {
    "day": 249,
    "stage": "B1",
    "week": 36,
    "dayOfWeek": 4,
    "title": "B1 Sprechen Teil 3: Feedback geben & auf Fragen reagieren 互評反饋與考官問答",
    "germanTitle": "Prüfungstraining: Strukturiertes Partner-Feedback & souveräne Frage-Antwort-Runden",
    "theme": "歌德 B1 口說第三部分實戰：標準互評三部曲（讚賞 Lob + 亮點 Aspekt + 延伸提問 Frage）；面對考官與搭檔提問時的從容思考緩衝句與雙層結構作答法（立場 + 理由/實例）",
    "estimatedMinutes": 20
  },
  "250": {
    "day": 250,
    "stage": "B1",
    "week": 36,
    "dayOfWeek": 5,
    "title": "Feste Nomen-Verb-Verbindungen (Funktionsverbgefüge B1) 高階名動搭配",
    "germanTitle": "B1-Wortschatz: Feste Nomen-Verb-Verbindungen für gehobenen Ausdruck",
    "theme": "德語進階必備功能動詞結構（Funktionsverbgefüge）：掌握 8 大高頻搭配（eine Rolle spielen, eine Entscheidung treffen, zur Verfügung stehen/stellen, in Betracht ziehen, Rücksicht nehmen auf 等）取代基礎動詞，大幅躍升書面與口說檔次",
    "estimatedMinutes": 20
  },
  "251": {
    "day": 251,
    "stage": "B1",
    "week": 36,
    "dayOfWeek": 6,
    "title": "Woche 36 Rückblick & B1 Sprechen / Nomen-Verb-Verbindungen Gesamt-Test",
    "germanTitle": "Wochenrückblick & B1-Gesamttest: Mündliche Prüfungskompetenz & Funktionsverben",
    "theme": "第 36 週全方位大檢驗：口試三大模組（雙人規劃、個人簡報 5 頁轉場、互評提問應變）以及高階功能動詞搭配綜合克漏字與實戰測驗",
    "estimatedMinutes": 20
  },
  "252": {
    "day": 252,
    "stage": "B1",
    "week": 36,
    "dayOfWeek": 7,
    "title": "Kultur & Leben: Demokratie, Bundesländer & bürgerschaftliches Engagement",
    "germanTitle": "Landeskunde: Föderalismus, Grundgesetz, die 16 Bundesländer & das Ehrenamt",
    "theme": "德國政治體制與公民社會文化：16 個聯邦州與聯邦主義 (Föderalismus)、基本法第 1 條「人性尊嚴不可侵犯」、聯邦議院與選舉、三千萬志工大軍 (Das Ehrenamt) 與青年志願服務年 (FSJ/FÖJ)",
    "estimatedMinutes": 20
  },
  "253": {
    "day": 253,
    "stage": "B1",
    "week": 37,
    "dayOfWeek": 1,
    "title": "B1 Lesen Teil 1: Blogbeiträge & persönliche Erfahrungen verstehen",
    "germanTitle": "Lesetraining B1: Detailverstehen & Fallstricke in persönlichen Berichten",
    "theme": "歌德 B1 閱讀第一部分（Lesen Teil 1）：長篇部落格日誌或個人經歷精讀；六道是非判斷題（Richtig / Falsch）；辨識微小語意陷阱、隱蔽否定詞（kaum, keineswegs）與時間先後順序",
    "estimatedMinutes": 20
  },
  "254": {
    "day": 254,
    "stage": "B1",
    "week": 37,
    "dayOfWeek": 2,
    "title": "B1 Lesen Teil 2: Presseberichte & Sachinformationen erfassen",
    "germanTitle": "Lesetraining B1: Zeitungsartikel, Hauptaussage & selektives Lesen",
    "theme": "歌德 B1 閱讀第二部分（Lesen Teil 2）：新聞報導或科普專題長文閱讀；六道三選一選擇題（a, b, c）；區分客觀事實與主觀引用、抓取主旨段落核心，破解嵌套關係子句",
    "estimatedMinutes": 20
  },
  "255": {
    "day": 255,
    "stage": "B1",
    "week": 37,
    "dayOfWeek": 3,
    "title": "B1 Lesen Teil 3: Anzeigen zuordnen & Negativzuordnung meistern",
    "germanTitle": "Lesetraining B1: Situationen und Anzeigen matchen & Ausschlussverfahren",
    "theme": "歌德 B1 閱讀第三部分（Lesen Teil 3）：情境需求與廣告配對；十則廣告（a-j）配對七個具體情境需求（Aufgaben）；掌握同義替換（Paraphrasen）、排除干擾以及必考的「無合適廣告（Negativzuordnung „0“）」判定技巧",
    "estimatedMinutes": 20
  },
  "256": {
    "day": 256,
    "stage": "B1",
    "week": 37,
    "dayOfWeek": 4,
    "title": "B1 Lesen Teil 4: Leserbriefe & Pro/Contra-Haltungen identifizieren",
    "germanTitle": "Lesetraining B1: Standpunkte, Meinungsäußerungen & dafür/dagegen zuordnen",
    "theme": "歌德 B1 閱讀第四部分（Lesen Teil 4）：讀者投書與社會議題立場判讀；針對單一熱門話題（如城市禁車、在家辦公義務、學生穿制服等），閱讀七篇讀者投書；精準判定作者持贊成立場（Ja / Dafür）或反對立場（Nein / Dagegen）",
    "estimatedMinutes": 20
  },
  "257": {
    "day": 257,
    "stage": "B1",
    "week": 37,
    "dayOfWeek": 5,
    "title": "B1 Lesen Teil 5: Hausordnungen, Benutzungsregeln & Vorschriften",
    "germanTitle": "Lesetraining B1: Offizielle Richtlinien, Sicherheitsvorschriften & Verbote",
    "theme": "歌德 B1 閱讀第五部分（Lesen Teil 5）：公寓生活規章（Hausordnung）、圖書館守則或機構安全指南；四道三選一題（a, b, c）；掌握官方被動替代句型（ist gestattet, ist untersagt, hat zu erfolgen）、限制時段與義務規定",
    "estimatedMinutes": 20
  },
  "258": {
    "day": 258,
    "stage": "B1",
    "week": 37,
    "dayOfWeek": 6,
    "title": "Woche 37 Rückblick & B1 Lesen Strategie-Gesamttest",
    "germanTitle": "Wochenrückblick & B1-Gesamttest: Zeitmanagement & Lesekompetenz",
    "theme": "第 37 週閱讀五大題型全方位大整合：65 分鐘全局配速黃金方案、各題型防陷阱核心技能診斷、三選一與是非判斷綜合模擬大會考",
    "estimatedMinutes": 20
  },
  "259": {
    "day": 259,
    "stage": "B1",
    "week": 37,
    "dayOfWeek": 7,
    "title": "Kultur & Leben: Deutsche Medienlandschaft, Pressefreiheit & Rundfunkbeitrag",
    "germanTitle": "Landeskunde: Öffentlich-rechtlicher Rundfunk, freie Presse & Mediennutzung",
    "theme": "德國媒體生態與新聞自由：公共廣播聯盟（ARD, ZDF, Deutschlandfunk）、獨立客觀報導原則、家喻戶曉的新聞聯播（Tagesschau）、廣播電視貢獻費制度（Rundfunkbeitrag / GEZ）以及主流優質報刊文化",
    "estimatedMinutes": 20
  },
  "260": {
    "day": 260,
    "stage": "B1",
    "week": 38,
    "dayOfWeek": 1,
    "title": "B1 Hören Teil 1: Durchsagen & Kurznachrichten erfassen",
    "germanTitle": "Hörtraining B1: Bahnhofsdurchsagen, Verkehrsmeldungen & Wetterberichte",
    "theme": "歌德 B1 聽力第一部分（Hören Teil 1）：日常生活廣播與短訊；五段簡短語音（每段播放兩遍）；十道考題（每段各一題 Richtig/Falsch 及一題 a/b/c 選擇）；掌握月台更換、列車延誤、替代接駁與數字速記技巧",
    "estimatedMinutes": 20
  },
  "261": {
    "day": 261,
    "stage": "B1",
    "week": 38,
    "dayOfWeek": 2,
    "title": "B1 Hören Teil 2: Führungen, Rundgänge & Ausstellungen",
    "germanTitle": "Hörtraining B1: Kulturelle Führungen, Chronologie & Raumerfassung",
    "theme": "歌德 B1 閱讀與聽力第二部分（Hören Teil 2）：單向導覽解說（Führung in Museum, Schloss, Stadtrundfahrt）；五道三選一選擇題（播放一遍！）；抓取時間與空間指引信號詞（zunächst, im Anschluss daran, zu Ihrer Linken, gegenüber）",
    "estimatedMinutes": 20
  },
  "262": {
    "day": 262,
    "stage": "B1",
    "week": 38,
    "dayOfWeek": 3,
    "title": "B1 Hören Teil 3: Alltagsgespräche & Feinheiten heraushören",
    "germanTitle": "Hörtraining B1: Spontane Dialoge, Ironie, Partikeln & Richtig/Falsch",
    "theme": "歌德 B1 聽力第三部分（Hören Teil 3）：日常兩人隨機偶遇對話（在街頭、公車站或走廊）；七道是非判斷題（Richtig / Falsch，播放一遍！）；聽懂德語語氣助詞（doch, ja, halt, eben, eigentlich）背後的真實意向",
    "estimatedMinutes": 20
  },
  "263": {
    "day": 263,
    "stage": "B1",
    "week": 38,
    "dayOfWeek": 4,
    "title": "B1 Hören Teil 4: Radiodiskussion mit Moderator & Standpunkte zuordnen",
    "germanTitle": "Hörtraining B1: Drei Stimmen unterscheiden, Argumente filtern & Meinungszuordnung",
    "theme": "歌德 B1 聽力第四部分（Hören Teil 4）：廣播電台三人圓桌訪談；一位主持人（Moderator）與兩位受訪嘉賓（一男一女或兩位專家）；八道觀點歸屬選擇題（播放兩遍！）；精準分辨三個人的不同聲音與立場標籤",
    "estimatedMinutes": 20
  },
  "264": {
    "day": 264,
    "stage": "B1",
    "week": 38,
    "dayOfWeek": 5,
    "title": "Umgangssprache & Sprachökonomie: 日常口語省略與速縮語",
    "germanTitle": "Sprachpraxis B1: Verschleifungen, Kurzwörter, WhatsApp-Deutsch & Alltagsphrasen",
    "theme": "真實德語口語生活中的省略與語音弱化（Verschleifungen）：冠詞省略（’ne, ’nen, ’nem）、動詞字尾 -e/-t 脫落（hab’, is’, nich’）、發語感嘆詞（Na ja, Tja, Ach so, Mach’s gut）以及即時通訊簡寫（LG, VG, vllt, wg.）",
    "estimatedMinutes": 20
  },
  "265": {
    "day": 265,
    "stage": "B1",
    "week": 38,
    "dayOfWeek": 6,
    "title": "Woche 38 Rückblick & B1 Hören Gesamttest",
    "germanTitle": "Wochenrückblick & B1-Gesamttest: Hörverstehen & Prüfungsstrategien",
    "theme": "第 38 週聽力四大題型綜合總檢閱：40 分鐘聽力測驗全局節奏掌控、播放兩遍 vs 播放一遍戰略對策、陷阱防禦與滿分通關測驗",
    "estimatedMinutes": 20
  },
  "266": {
    "day": 266,
    "stage": "B1",
    "week": 38,
    "dayOfWeek": 7,
    "title": "Kultur & Leben: Dialekte & Sprachvarietäten im DACH-Raum",
    "germanTitle": "Landeskunde: Hochdeutsch, Schwyzerdütsch, Österreichisches Deutsch & Regionalsprachen",
    "theme": "德語區多元方言與語言變體：德奧瑞三大國（DACH-Länder）、標準德語（Standardhochdeutsch）、瑞士德語（Schwyzerdütsch）、奧地利德語（Österreichisches Deutsch）以及巴伐利亞語、柏林話與低地德語（Plattdeutsch）的文化魅力",
    "estimatedMinutes": 20
  },
  "267": {
    "day": 267,
    "stage": "B1",
    "week": 39,
    "dayOfWeek": 1,
    "title": "Konjunktiv II der Vergangenheit: hätte / wäre + Partizip II 過去非真實假設",
    "germanTitle": "B1-Grammatik: Irreale Bedingungen und Hypothesen in der Vergangenheit",
    "theme": "虛擬二式過去時（Konjunktiv II der Vergangenheit）：表達事與願違的懊悔、過去未曾發生的假設條件（「要是當時...就好了」）；hätte / wäre + 第二分詞（Partizip II）構成法則；零引詞動詞置首假設句",
    "estimatedMinutes": 20
  },
  "268": {
    "day": 268,
    "stage": "B1",
    "week": 39,
    "dayOfWeek": 2,
    "title": "Irreale Wunschsätze & Fast-Katastrophen (Beinahe / Fast wäre...)",
    "germanTitle": "B1-Grammatik: Wunschsätze mit doch/bloß & Beinahe-Ereignisse",
    "theme": "非真實願望句（Irreale Wunschsätze: Wenn doch nur...! / Hätte ich bloß...!）與千鈞一髮的險兆逃生句型（Fast / Beinahe wäre ich gestürzt）；感嘆語調與語氣詞（doch, bloß, nur）深度解析",
    "estimatedMinutes": 20
  },
  "269": {
    "day": 269,
    "stage": "B1",
    "week": 39,
    "dayOfWeek": 3,
    "title": "Modalverben im Perfekt: Der doppelte Infinitiv (Ersatzinfinitiv)",
    "germanTitle": "B1-Grammatik: Das Perfekt der Modalverben mit Ersatzinfinitiv & Verbstellung",
    "theme": "情態動詞完成時（Modalverben im Perfekt）：震撼性的「替換不定式（Ersatzinfinitiv）」規則——當情態動詞與實義動詞連用時，過去分詞被原形不定式替換（hat machen können 而非 gekonnt）；主從子句中的特殊動詞語序（dass er hat arbeiten müssen）",
    "estimatedMinutes": 20
  },
  "270": {
    "day": 270,
    "stage": "B1",
    "week": 39,
    "dayOfWeek": 4,
    "title": "Subjektive Bedeutung der Modalverben: 推測與客觀可能性",
    "germanTitle": "B1-Grammatik: Vermutungen mit müssen, dürften & können ausdrücken",
    "theme": "情態動詞的主觀推測用法（Subjektive Modalverben / Vermutungen）：區分客觀義務與主觀推斷；müssen（必定、95%把握）、dürften（大概、75%把握）、könnten / können（可能、50%把握）；日常生活與檢定解題中的推測層級",
    "estimatedMinutes": 20
  },
  "271": {
    "day": 271,
    "stage": "B1",
    "week": 39,
    "dayOfWeek": 5,
    "title": "B1 Schreiben Aufgabe 1: Formelle Entschuldigung, Reklamation & Fristverlängerung",
    "germanTitle": "Schreibtraining B1: Höfliche Entschuldigungsbriefe, Reklamationen & Fristen",
    "theme": "歌德 B1 寫作第一大題（Schreiben Aufgabe 1）：正式或半正式公事信函；掌握突發缺席道歉請假、訂單延誤投訴維權（Reklamation）與申請期限展延（Fristverlängerung）；高雅客氣虛擬式請託（Ich wäre Ihnen sehr dankbar, wenn...）",
    "estimatedMinutes": 20
  },
  "272": {
    "day": 272,
    "stage": "B1",
    "week": 39,
    "dayOfWeek": 6,
    "title": "Woche 39 Rückblick & Konjunktiv II / Modalverben Gesamt-Test",
    "germanTitle": "Wochenrückblick & B1-Gesamttest: Irreale Vergangenheit, Ersatzinfinitiv & Höflichkeit",
    "theme": "第 39 週核心語法與應試綜合大會考：過去非真實假設（hätte/wäre + Partizip II）、險兆句（fast/beinahe）、情態動詞替換不定式（hat machen können）、主觀推測層級與正式申訴請假信函綜合實戰檢測",
    "estimatedMinutes": 20
  },
  "273": {
    "day": 273,
    "stage": "B1",
    "week": 39,
    "dayOfWeek": 7,
    "title": "Kultur & Leben: Das deutsche Gesundheitssystem, Krankenkasse & Apothekenkultur",
    "germanTitle": "Landeskunde: Gesetzliche Krankenversicherung (GKV), Hausarztprinzip & Notdienst",
    "theme": "德國醫療保險與醫療體系文化：法定醫療保險（GKV）與健保卡（Gesundheitskarte）、家庭醫生（Hausarzt）與專科轉診（Überweisung）、病假單制度（AU-Bescheinigung / eAU）以及德國藥局專營與夜間輪值（Notdienst）",
    "estimatedMinutes": 20
  },
  "274": {
    "day": 274,
    "stage": "B1",
    "week": 40,
    "dayOfWeek": 1,
    "title": "Der deutsche Lebenslauf: 表格式履歷表結構與標準規範 (Tabellarischer CV)",
    "germanTitle": "Berufssprache B1: Aufbau, Formalia & lückenloser Werdegang im Lebenslauf",
    "theme": "德國求職必備核心文件「表格式履歷表」（Tabellarischer Lebenslauf）：無空窗時間軸（lückenloser Zeitstrahl / umgekehrt chronologisch）、精準職責動名詞描述、專業求職照與個人基本資訊規格",
    "estimatedMinutes": 20
  },
  "275": {
    "day": 275,
    "stage": "B1",
    "week": 40,
    "dayOfWeek": 2,
    "title": "Das Anschreiben (Bewerbungsschreiben): 專業求職動機信架構",
    "germanTitle": "Berufssprache B1: Das überzeugende Anschreiben (AIDA-Formel & Gehaltsangabe)",
    "theme": "德式求職信/動機信（Das Anschreiben / Bewerbungsschreiben）：AIDA 四步黃金架構（吸睛引言 Attention, 專業優勢 Interest, 企業契合 Desire, 期待面試 Action）；期望年薪（Gehaltserwartung）與可到職日（Frühester Eintrittstermin）的專業德語表達",
    "estimatedMinutes": 20
  },
  "276": {
    "day": 276,
    "stage": "B1",
    "week": 40,
    "dayOfWeek": 3,
    "title": "Das Vorstellungsgespräch: 德語面試致勝全攻略與對答技巧",
    "germanTitle": "Berufssprache B1: Selbstpräsentation, Stärken/Schwächen & Rückfragen",
    "theme": "德語工作面試（Das Vorstellungsgespräch / Bewerbungsgespräch）：兩分鐘電梯簡報式自我介紹（Selbstpräsentation）、巧妙應答個人優缺點（Stärken & Schwächen）、以及在面試結尾向面試官反向提問（Eigene Rückfragen stellen）的滿分技巧",
    "estimatedMinutes": 20
  },
  "277": {
    "day": 277,
    "stage": "B1",
    "week": 40,
    "dayOfWeek": 4,
    "title": "Büro-Kommunikation: Höfliche Bitten, E-Mails & Telefonate",
    "germanTitle": "Berufssprache B1: Telefonieren im Büro, Weiterleiten, Termine & E-Mail-Knigge",
    "theme": "德語職場實務溝通：辦公室商務電話接聽應對（durchstellen, nachhaken, eine Nachricht hinterlassen）、留言備忘、委婉催促進度以及符合德國職場禮儀規範（E-Mail-Knigge）的公事信件寫作",
    "estimatedMinutes": 20
  },
  "278": {
    "day": 278,
    "stage": "B1",
    "week": 40,
    "dayOfWeek": 5,
    "title": "B1 Schreiben Aufgabe 3: Schriftliche Mitteilung an den Vorgesetzten",
    "germanTitle": "Schreibtraining B1: Die kurze formelle Nachricht an den Chef (ca. 40 Wörter)",
    "theme": "歌德 B1 寫作第三大題（Schreiben Aufgabe 3）：公事短便箋/通知短函（約 40 字，時長約 10 分鐘）；寫給主管、教授或機構人員；掌握突發請假、工作交接、開會改期等精準公務文體",
    "estimatedMinutes": 20
  },
  "279": {
    "day": 279,
    "stage": "B1",
    "week": 40,
    "dayOfWeek": 6,
    "title": "Woche 40 Rückblick & Berufssprache Deutsch Gesamt-Test",
    "germanTitle": "Wochenrückblick & B1-Gesamttest: Bewerbungskompetenz & Bürokommunikation",
    "theme": "第 40 週職場德語綜合大會考：表格式履歷表結構（Lebenslauf）、AIDA 求職信（Anschreiben）、面試自我介紹與優缺點對答、職場電話禮儀以及 40 字公務請假便箋綜合診斷實戰",
    "estimatedMinutes": 20
  },
  "280": {
    "day": 280,
    "stage": "B1",
    "week": 40,
    "dayOfWeek": 7,
    "title": "Kultur & Leben: Das duale Ausbildungssystem & Handwerkstradition",
    "germanTitle": "Landeskunde: Duale Ausbildung, Gesellenjahre, Meistertitel & „Made in Germany“",
    "theme": "德國經濟與社會的基石：獨步全球的「雙軌制職業培訓體系」（Duale Ausbildung: Berufsschule + Betrieb）、深厚的工匠手工業傳統（Das Handwerk）、師徒晉升之路（Azubi -> Geselle -> Meister）以及「德國製造（Made in Germany）」的品質傳奇",
    "estimatedMinutes": 20
  },
  "281": {
    "day": 281,
    "stage": "B1",
    "week": 41,
    "dayOfWeek": 1,
    "title": "Vorgangspassiv in allen Zeiten: 過程被動態時態大全",
    "germanTitle": "Grammatik B1: Vorgangspassiv in Präsens, Präteritum, Perfekt & Plusquamperfekt",
    "theme": "被動態四大時態結構剖析：現在式（wird gemacht）、過去式（wurde gemacht）、現在完成式（ist gemacht worden）與過去完成式（war gemacht worden）；施事者 von + Dativ（人/機構）vs. durch + Akkusativ（媒介/手段）",
    "estimatedMinutes": 20
  },
  "282": {
    "day": 282,
    "stage": "B1",
    "week": 41,
    "dayOfWeek": 2,
    "title": "Zustandspassiv: 狀態被動態與過程被動態對照",
    "germanTitle": "Grammatik B1: Zustandspassiv (sein + Partizip II) im Kontrast zum Vorgangspassiv",
    "theme": "狀態被動態（Zustandspassiv: sein + Partizip II）深入剖析；動作進行（Vorgang: wird geschlossen）vs. 結果持續狀態（Zustand: ist geschlossen）；動詞可否轉為狀態被動的判定準則",
    "estimatedMinutes": 20
  },
  "283": {
    "day": 283,
    "stage": "B1",
    "week": 41,
    "dayOfWeek": 3,
    "title": "Passiv mit Modalverben: 情態動詞與被動態結合",
    "germanTitle": "Grammatik B1: Passiv in Kombination mit Modalverben (müssen, können, dürfen, sollen)",
    "theme": "情態動詞被動態四大時態語法結構；現在式（muss gemacht werden）、過去式（musste gemacht werden）、完成式（hat gemacht werden müssen: 雙重不定詞）；法規、警告標語與公務流程的核心句型",
    "estimatedMinutes": 20
  },
  "284": {
    "day": 284,
    "stage": "B1",
    "week": 41,
    "dayOfWeek": 4,
    "title": "Passiversatzformen 1: sein + zu + Infinitiv (被動替代形式：義務與可能性)",
    "germanTitle": "Grammatik B1: Passiversatzformen Teil 1: sein + zu + Infinitiv als Alternative zum Passiv",
    "theme": "德語高級語法被動替代形式（Passiversatzformen）：sein + zu + Infinitiv 的雙重語意；表義務（muss getan werden）vs. 表可能性（kann getan werden）；官方文告、學術論文與新聞中的高雅簡練句型",
    "estimatedMinutes": 20
  },
  "285": {
    "day": 285,
    "stage": "B1",
    "week": 41,
    "dayOfWeek": 5,
    "title": "Passiversatzformen 2: sich lassen + Infinitiv & Adjektive auf -bar/-lich",
    "germanTitle": "Grammatik B1: Passiversatzformen Teil 2: sich lassen + Infinitiv & ableitbare Adjektive (-bar, -lich)",
    "theme": "被動替代形式第二部：sich lassen + Infinitiv（表示客觀可能性：kann gemacht werden）；後綴形容詞 -bar（machbar, lösbar, essbar）與 -lich（erklärlich, verständlich）；口語與科技新聞中的生動表達",
    "estimatedMinutes": 20
  },
  "286": {
    "day": 286,
    "stage": "B1",
    "week": 41,
    "dayOfWeek": 6,
    "title": "Woche 41 Rückblick & Passiv-Gesamttest",
    "germanTitle": "Wochenrückblick & B1-Gesamttest: Passiv, Zustandspassiv & Ersatzformen im Praxistest",
    "theme": "第 41 週被動態全體系大會考：過程被動四大時態、狀態被動、情態動詞被動、sein + zu + Infinitiv、sich lassen 與 -bar 形容詞；官方公文與新聞句型主被動互換實戰",
    "estimatedMinutes": 20
  },
  "287": {
    "day": 287,
    "stage": "B1",
    "week": 41,
    "dayOfWeek": 7,
    "title": "Kultur & Leben: Umwelt, Energiewende & Mülltrennung",
    "germanTitle": "Landeskunde B1: Umweltbewusstsein, Mülltrennung, Pfandsystem & die deutsche Energiewende",
    "theme": "德國文化深度專題：世界知名的垃圾分類體系（Gelber Sack, Altpapier, Biomüll, Restmüll）；押金回收制度（Einweg- vs. Mehrwegpfand / Pfandflaschen）；能源轉型（Energiewende）與綠色環保生活實踐",
    "estimatedMinutes": 20
  },
  "288": {
    "day": 288,
    "stage": "B1",
    "week": 42,
    "dayOfWeek": 1,
    "title": "Relativsätze mit Präpositionen: 介系詞關係子句基礎",
    "germanTitle": "Grammatik B1: Relativsätze mit Präpositionen und Verben mit festen Präpositionen",
    "theme": "介系詞引導之關係子句結構深度剖析：介系詞格位（Akkusativ / Dativ）決定關係代名詞形式（mit dem, an die, über das, für die）；動詞固定介系詞搭配在關係句中的語序與應用",
    "estimatedMinutes": 20
  },
  "289": {
    "day": 289,
    "stage": "B1",
    "week": 42,
    "dayOfWeek": 2,
    "title": "Relativsätze mit wo(r)-: 介系詞副詞關係句與無人稱先行詞",
    "germanTitle": "Grammatik B1: Relativsätze mit wo(r) + Präposition (worüber, woran, worauf) & Indefinitpronomen",
    "theme": "關係副詞子句：wo(r) + Präposition 引導之關係從句；先行詞為中性代名詞（alles, etwas, nichts, das）或整個前句情境；worüber ich mich freue / woran ich denke / das Beste, was ich je erlebt habe",
    "estimatedMinutes": 20
  },
  "290": {
    "day": 290,
    "stage": "B1",
    "week": 42,
    "dayOfWeek": 3,
    "title": "Relativpronomen im Genitiv: 第二格 dessen 與 deren",
    "germanTitle": "Grammatik B1: Relativsätze im Genitiv: dessen (maskulin/neutral) & deren (feminin/plural)",
    "theme": "第二格關係代名詞（Genitiv-Relativpronomen）：dessen（陽性/中性名詞所有格）與 deren（陰性/複數名詞所有格）；修飾被擁有者時零冠詞的鐵律；官方人物介紹、尋人尋物與精準描摹",
    "estimatedMinutes": 20
  },
  "291": {
    "day": 291,
    "stage": "B1",
    "week": 42,
    "dayOfWeek": 4,
    "title": "Relativsätze mit Orts- und Zeitangaben (wo, wohin, woher)",
    "germanTitle": "Grammatik B1: Lokale und temporale Relativsätze (wo, wohin, woher & Zeitpunkte)",
    "theme": "地點與時間關係副詞子句：wo（在何處 = in dem/der）、wohin（去往何處 = in den/die）、woher（來自何處 = aus dem/der）；時間點關係句（der Tag, an dem... / der Moment, in dem...）；城市觀光與生活描摹",
    "estimatedMinutes": 20
  },
  "292": {
    "day": 292,
    "stage": "B1",
    "week": 42,
    "dayOfWeek": 5,
    "title": "Komplexe Satzstrukturen & Textverknüpfung in B1 Schreiben",
    "germanTitle": "Schreibtraining B1: Relativsätze zur Textoptimierung in B1 Schreiben Aufgabe 2",
    "theme": "關係子句在歌德 B1 寫作第二部分（Aufgabe 2 論壇發文 Forumsbeitrag）中的進階實戰應用；避免冗贅短句，以關係句精準濃縮語篇；正反論點交鋒與流暢段落過渡技巧",
    "estimatedMinutes": 20
  },
  "293": {
    "day": 293,
    "stage": "B1",
    "week": 42,
    "dayOfWeek": 6,
    "title": "Woche 42 Rückblick & Relativsatz-Diagnostik",
    "germanTitle": "Wochenrückblick & B1-Gesamttest: Relativsätze in allen Facetten & Textstrukturen",
    "theme": "第 42 週關係子句全題型總檢閱：介系詞關係句、代副詞 wo(r)- 關係句、第二格 dessen/deren、時空副詞 wo/wohin/woher；全真診斷大會考與句型重構綜合測驗",
    "estimatedMinutes": 20
  },
  "294": {
    "day": 294,
    "stage": "B1",
    "week": 42,
    "dayOfWeek": 7,
    "title": "Kultur & Leben: Wohnen & Mietkultur in Deutschland",
    "germanTitle": "Landeskunde B1: Mietkultur, Mietvertrag, Kaution, Nebenkosten & der Mieterschutzbund",
    "theme": "德國居住與租屋文化全透視：德國作為歐洲最大的租屋國度（Mieterland Deutschland: 逾半數人口租屋）；冷租（Kaltmiete）vs. 暖租（Warmmiete/Nebenkosten）；租屋押金（Kaution）；房客保護協會（Deutscher Mieterbund）與公寓公約",
    "estimatedMinutes": 20
  },
  "295": {
    "day": 295,
    "stage": "B1",
    "week": 43,
    "dayOfWeek": 1,
    "title": "Wortbildung Substantive: 名詞構詞法與性別歸納密碼",
    "germanTitle": "Wortschatz B1: Wortbildung der Substantive (-ung, -heit, -keit, -schaft, -ion, -tät)",
    "theme": "德語名詞後綴衍生學（Derivation）：抽象名詞性別百分之百對應規律；陰性後綴（-ung, -heit, -keit, -schaft, -ion, -tät）；中性後綴（-ment, -tum, -nis）；陽性後綴（-ismus, -or, -er）；在短時間內將詞彙量翻倍的構詞解碼術",
    "estimatedMinutes": 20
  },
  "296": {
    "day": 296,
    "stage": "B1",
    "week": 43,
    "dayOfWeek": 2,
    "title": "Wortbildung Adjektive: 形容詞前綴後綴與高階修飾",
    "germanTitle": "Wortschatz B1: Wortbildung der Adjektive (-los, -voll, -arm, -reich, -fähig, un-, miss-)",
    "theme": "形容詞構詞密碼：否定後綴 -los（arbeitslos, schlaflos, kostenlos）vs. 充滿後綴 -voll（liebevoll, sinnvoll, wertvoll）；富貧對照 -reich vs. -arm（vitaminreich, fettarm）；能力後綴 -fähig（arbeitsfähig, lernfähig）；否定前綴 un- 與 miss-",
    "estimatedMinutes": 20
  },
  "297": {
    "day": 297,
    "stage": "B1",
    "week": 43,
    "dayOfWeek": 3,
    "title": "Nomen-Verb-Verbindungen (Funktionsverben) Teil 1",
    "germanTitle": "Funktionsverbgefüge B1 (Teil 1): in Anspruch nehmen, zur Verfügung stellen/stehen...",
    "theme": "德語功能動詞片語（Nomen-Verb-Verbindungen / Funktionsverbgefüge）核心第一部；動詞退化為功能性載體，核心語義由名詞承載；in Anspruch nehmen（利用/耗費）, zur Verfügung stellen / stehen（提供/可供使用）, unter Beweis stellen（證明）, Abschied nehmen（道別）, in Frage kommen（列入考慮）",
    "estimatedMinutes": 20
  },
  "298": {
    "day": 298,
    "stage": "B1",
    "week": 43,
    "dayOfWeek": 4,
    "title": "Nomen-Verb-Verbindungen (Funktionsverben) Teil 2",
    "germanTitle": "Funktionsverbgefüge B1 (Teil 2): Kritik üben, Entscheidung treffen, eine Rolle spielen...",
    "theme": "德語功能動詞片語核心第二部：Kritik üben an（批評/提出批判）, eine Entscheidung treffen（做決定/拍板）, eine Rolle spielen（扮演角色/起重要作用）, einen Eindruck hinterlassen（留下深刻印象）, im Stande sein（有能力做某事）, zu Ende bringen（使告一段落/完成）",
    "estimatedMinutes": 20
  },
  "299": {
    "day": 299,
    "stage": "B1",
    "week": 43,
    "dayOfWeek": 5,
    "title": "B1 Schreiben Masterclass: 寫作三任務全景通關大盤點",
    "germanTitle": "Prüfungstraining B1: Schreiben Masterclass (Aufgabe 1, 2 und 3 im Kriterien-Check)",
    "theme": "歌德 B1 寫作全景大盤點（60 分鐘 3 大任務）：Aufgabe 1（私人交際長信：道歉、說明、改期，約 80 詞）；Aufgabe 2（論壇觀點發文：立場、經驗、利弊、總結，約 80 詞）；Aufgabe 3（正式短公文：請假、致歉、公事聯絡，約 40 詞）；官方四大評分維度（A 內容達成度、B 篇章銜接、C 詞彙運用、D 語法結構）滿分通關錦囊",
    "estimatedMinutes": 20
  },
  "300": {
    "day": 300,
    "stage": "B1",
    "week": 43,
    "dayOfWeek": 6,
    "title": "Großer B1-Abschlusstest: 300 天里程碑大結業",
    "germanTitle": "Meilenstein Tag 300: Der große B1-Abschlusstest (Grammatik, Wortschatz & Textstrukturen)",
    "theme": "300 天傳奇里程碑達成！B1 階段全課程大總結：被動態體系、關係子句全題型、雙部連接詞、形容詞第一/二分詞、從屬子句、虛擬二式、構詞法與功能動詞大檢驗；迎向最後 EXAM 全真衝刺階段",
    "estimatedMinutes": 20
  },
  "301": {
    "day": 301,
    "stage": "EXAM",
    "week": 43,
    "dayOfWeek": 7,
    "title": "EXAM-Phase Start: 歌德檢定 B1 考試規章與拿分總戰略",
    "germanTitle": "Prüfungsstart: Goethe-Zertifikat B1 - Prüfungsordnung, Punkteverteilung & Gesamtstrategie",
    "theme": "歌德檢定 EXAM 全真衝刺階段正式啟動！Goethe-Zertifikat B1 權威考試規章全面解析：四項模組（Hören, Lesen, Schreiben, Sprechen）獨立報考與計分規則（滿分 100 分，60 分及格線）；考試證書在德國入籍（StAG § 10）、留學預科與求職簽證中的法定效力；考場實戰時間分配與得分最優化戰略",
    "estimatedMinutes": 20
  },
  "302": {
    "day": 302,
    "stage": "EXAM",
    "week": 44,
    "dayOfWeek": 1,
    "title": "Modul LESEN Teil 1 & 2: Zeitmanagement, Skimming & Scanning",
    "germanTitle": "Prüfungstraining B1: Leseverstehen Teil 1 (Blogtexte) & Teil 2 (Presseberichte)",
    "theme": "歌德 B1 閱讀測驗第一、二部分計時實戰；65 分鐘整體配速架構（Teil 1 與 Teil 2 合計控制在 25 分鐘以內）；第一部分部落格長文細節定位（Richtig/Falsch/a/b/c 題型）；第二部分報刊深度專題報導論點辨析；干擾項識別與定位詞信號技術",
    "estimatedMinutes": 20
  },
  "303": {
    "day": 303,
    "stage": "EXAM",
    "week": 44,
    "dayOfWeek": 2,
    "title": "Modul LESEN Teil 3 & 4: Anzeigenzuordnung & Pro/Contra-Analyse",
    "germanTitle": "Prüfungstraining B1: Leseverstehen Teil 3 (Anzeigen) & Teil 4 (Leserbriefe Pro/Contra)",
    "theme": "閱讀第三、四部分滿分通關技術；Teil 3 廣告配對（10 則分類廣告 vs. 7 位人物需求，含「Anzeige 0 絕配無解」陷阱規避與嚴密消去法）；Teil 4 讀者投書贊成/反對（7 則讀者留言立場判定：Ja/Nein 正反立場判讀密碼）",
    "estimatedMinutes": 20
  },
  "304": {
    "day": 304,
    "stage": "EXAM",
    "week": 44,
    "dayOfWeek": 3,
    "title": "Modul LESEN Teil 5 & Übertragungsstrategie: 規章題與填卡防呆",
    "germanTitle": "Prüfungstraining B1: Leseverstehen Teil 5 (Hausordnungen) & 5-Minuten-Übertragungsdisziplin",
    "theme": "閱讀第五部分（Teil 5）：官方章程、大樓規約與使用條例（4 道四選一，必須確保零失誤全對！）；情態動詞義務邊界辨析（darf / muss / soll）；最後 5 分鐘專屬答案卡（Antwortbogen）謄寫紀律與防呆防漏原則",
    "estimatedMinutes": 20
  },
  "305": {
    "day": 305,
    "stage": "EXAM",
    "week": 44,
    "dayOfWeek": 4,
    "title": "Modul HÖREN Teil 1 & 2: 廣播短訊與導覽速記突破",
    "germanTitle": "Prüfungstraining B1: Hörverstehen Teil 1 (Kurzdurchsagen) & Teil 2 (Führungen)",
    "theme": "聽力測驗第一、二部分深度拆解；Teil 1（五段生活廣播，每段聽兩遍，10 題：月台更換、機場登機、天候塞車、商場促銷，第一遍抓 Richtig/Falsch，第二遍抓細節選擇題）；Teil 2（博物館/城市語音導覽，只播一遍！聽一遍抓順序時間軸，四選一排序技巧）",
    "estimatedMinutes": 20
  },
  "306": {
    "day": 306,
    "stage": "EXAM",
    "week": 44,
    "dayOfWeek": 5,
    "title": "Modul HÖREN Teil 3 & 4: 對話判別與電台座談論點歸屬",
    "germanTitle": "Prüfungstraining B1: Hörverstehen Teil 3 (Alltagsdialoge) & Teil 4 (Radiodiskussion)",
    "theme": "聽力測驗第三、四部分攻堅；Teil 3（街頭偶遇日常生活對話，7 題 Richtig/Falsch，只播一遍！男女語氣助詞與轉折詞捕捉）；Teil 4（電台三人座談會：主持人 + 兩位正反嘉賓，8 題發言人觀點歸屬題，播放兩遍！把握發言立場與聲線特徵）",
    "estimatedMinutes": 20
  },
  "307": {
    "day": 307,
    "stage": "EXAM",
    "week": 44,
    "dayOfWeek": 6,
    "title": "Vollständige Simulationsprüfung: LESEN & HÖREN (105 Minuten)",
    "germanTitle": "Goethe B1 Modellprüfung: 105 Minuten Komplett-Simulation (Lesen 65 Min + Hören 40 Min)",
    "theme": "歌德 B1 筆試前半場 105 分鐘全真計時模擬大會考！嚴格按照官方考場標準：閱讀 65 分鐘（30 題）+ 聽力 40 分鐘（30 題），合計 60 道實戰考題全景檢驗；評估自身及格率（目標雙科突破 18 題 / 60 分及格線）；答題陷阱診斷與弱點突破分析",
    "estimatedMinutes": 20
  },
  "308": {
    "day": 308,
    "stage": "EXAM",
    "week": 44,
    "dayOfWeek": 7,
    "title": "Prüfungspsychologie & Notfallstrategien: 考場黑屏應對與心理戰術",
    "germanTitle": "Prüfungstraining B1: Prüfungspsychologie, Blackout-Prävention & Notfallstrategien",
    "theme": "歌德檢定大考心理學與急救錦囊：考場大腦當機黑屏（Blackout）的三秒生理深呼吸重啟法；智慧猜題法（Systematisches Raten: 排除最離譜選項，鎖定 50% 機率）；模組與模組之間的 15 分鐘休息重置術；考前 24 小時飲食、睡眠與個人必備清單",
    "estimatedMinutes": 20
  },
  "309": {
    "day": 309,
    "stage": "EXAM",
    "week": 45,
    "dayOfWeek": 1,
    "title": "Day 309: B1 寫作 Teil 1 私信引導點拆解與時態鋪陳",
    "germanTitle": "Schreiben Teil 1: Leitpunkte bearbeiten und Zeitformen strukturieren",
    "theme": "B1 檢定寫作 - 第一部分個人信件 80 詞結構剖析",
    "estimatedMinutes": 20
  },
  "310": {
    "day": 310,
    "stage": "EXAM",
    "week": 45,
    "dayOfWeek": 2,
    "title": "Day 310: B1 寫作 Teil 1 高分詞彙、情感表達與銜接詞",
    "germanTitle": "Schreiben Teil 1: Emotionen ausdrücken und Überleitungen formulieren",
    "theme": "B1 檢定寫作 - 私人信件情感表達與自然轉折",
    "estimatedMinutes": 20
  },
  "311": {
    "day": 311,
    "stage": "EXAM",
    "week": 45,
    "dayOfWeek": 3,
    "title": "Day 311: B1 寫作 Teil 2 網路論壇發文結構與論點展開",
    "germanTitle": "Schreiben Teil 2: Forumsbeitrag strukturieren und Thesen begründen",
    "theme": "B1 檢定寫作 - 第二部分論壇意見表達 80 詞",
    "estimatedMinutes": 20
  },
  "312": {
    "day": 312,
    "stage": "EXAM",
    "week": 45,
    "dayOfWeek": 4,
    "title": "Day 312: B1 寫作 Teil 2 觀點表達核心句型庫與正反論證",
    "germanTitle": "Schreiben Teil 2: Pro- und Contra-Argumentation meisterhaft verknüpfen",
    "theme": "B1 檢定寫作 - 雙向連接詞與對比論述",
    "estimatedMinutes": 20
  },
  "313": {
    "day": 313,
    "stage": "EXAM",
    "week": 45,
    "dayOfWeek": 5,
    "title": "Day 313: B1 寫作 Teil 3 半正式/正式短書信與委婉致歉",
    "germanTitle": "Schreiben Teil 3: Formelle E-Mails, Entschuldigungen und Bitten (40 Wörter)",
    "theme": "B1 檢定寫作 - 第三部分正式致信考官/主管/老師",
    "estimatedMinutes": 20
  },
  "314": {
    "day": 314,
    "stage": "EXAM",
    "week": 45,
    "dayOfWeek": 6,
    "title": "Day 314: B1 寫作 60 分鐘全真計時實戰與自檢清單",
    "germanTitle": "Schreiben Komplett-Simulation: 60 Minuten Zeitmanagement und Checkliste",
    "theme": "B1 檢定寫作 - 三部分聯考時間配置與自查秘笈",
    "estimatedMinutes": 20
  },
  "315": {
    "day": 315,
    "stage": "EXAM",
    "week": 45,
    "dayOfWeek": 7,
    "title": "Day 315: B1 寫作高頻失分點與語法陷阱排雷",
    "germanTitle": "Typische Fehlerquellen im B1-Schreiben: Kommasetzung, Verbstellung & Rektion",
    "theme": "B1 檢定寫作 - 扣分黑洞深度掃除",
    "estimatedMinutes": 20
  },
  "316": {
    "day": 316,
    "stage": "EXAM",
    "week": 46,
    "dayOfWeek": 1,
    "title": "Day 316: B1 口說 Teil 1 共同規劃計畫與協商句型庫",
    "germanTitle": "Sprechen Teil 1: Gemeinsam etwas planen und Vorschläge aushandeln",
    "theme": "B1 檢定口說 - 第一部分雙人合作規劃 3 分鐘協商話術",
    "estimatedMinutes": 20
  },
  "317": {
    "day": 317,
    "stage": "EXAM",
    "week": 46,
    "dayOfWeek": 2,
    "title": "Day 317: B1 口說 Teil 1 實戰情境模擬與化解分歧",
    "germanTitle": "Sprechen Teil 1: Meinungsverschiedenheiten elegant lösen und Kompromisse schließen",
    "theme": "B1 檢定口說 - 解決分歧與折衷妥協的高階應對話術",
    "estimatedMinutes": 20
  },
  "318": {
    "day": 318,
    "stage": "EXAM",
    "week": 46,
    "dayOfWeek": 3,
    "title": "Day 318: B1 口說 Teil 2 個人主題簡報結構與五張固定投影片",
    "germanTitle": "Sprechen Teil 2: Ein Thema präsentieren mit der 5-Folien-Methode",
    "theme": "B1 檢定口說 - 第二部分個人發表 3-4 分鐘滿分骨架",
    "estimatedMinutes": 20
  },
  "319": {
    "day": 319,
    "stage": "EXAM",
    "week": 46,
    "dayOfWeek": 4,
    "title": "Day 319: B1 口說 Teil 2 高頻簡報主題實戰 (寵物、環保與社群媒體)",
    "germanTitle": "Sprechen Teil 2: Hochfrequente Prüfungsthemen und Beispielführung",
    "theme": "B1 檢定口說 - 三大熱門考題全套模範簡報演練",
    "estimatedMinutes": 20
  },
  "320": {
    "day": 320,
    "stage": "EXAM",
    "week": 46,
    "dayOfWeek": 5,
    "title": "Day 320: B1 口說 Teil 3 提問與回饋話術 (Feedback & Fragen)",
    "germanTitle": "Sprechen Teil 3: Konstruktives Feedback geben und Prüferfragen souverän meistern",
    "theme": "B1 檢定口說 - 第三部分問答環節 1.5 分鐘應對話術",
    "estimatedMinutes": 20
  },
  "321": {
    "day": 321,
    "stage": "EXAM",
    "week": 46,
    "dayOfWeek": 6,
    "title": "Day 321: B1 口說全真 15 分鐘雙人模擬與考官評分規程",
    "germanTitle": "Sprechen Komplett-Simulation: 15 Minuten Prüfungsablauf und Bewertungskriterien",
    "theme": "B1 檢定口說 - 全流程全真演練與考官評分標準剖析",
    "estimatedMinutes": 20
  },
  "322": {
    "day": 322,
    "stage": "EXAM",
    "week": 46,
    "dayOfWeek": 7,
    "title": "Day 322: 考場口語應變話術、爭取時間與防卡頓技巧",
    "germanTitle": "Spontane Rede-Strategien: Zeit gewinnen, Nachfragen & Fehler selbst korrigieren",
    "theme": "B1 檢定口說 - 忘詞、卡殼、沒聽懂時的考場急救手冊",
    "estimatedMinutes": 20
  },
  "323": {
    "day": 323,
    "stage": "EXAM",
    "week": 47,
    "dayOfWeek": 1,
    "title": "Day 323: 檢定主題一：工作、職場與未來職涯 (Beruf & Arbeitswelt)",
    "germanTitle": "Themenwortschatz 1: Arbeitswelt, Homeoffice & Karrierechancen",
    "theme": "歌德 B1 高頻主題特訓 - 現代職場、求職面試與遠距辦公詞彙庫",
    "estimatedMinutes": 20
  },
  "324": {
    "day": 324,
    "stage": "EXAM",
    "week": 47,
    "dayOfWeek": 2,
    "title": "Day 324: 檢定主題二：環保、可持續生活與氣候變遷 (Umwelt & Klima)",
    "germanTitle": "Themenwortschatz 2: Umweltschutz, Nachhaltigkeit & Erneuerbare Energien",
    "theme": "歌德 B1 高頻主題特訓 - 環境保護、垃圾減量與綠能轉型高頻論述",
    "estimatedMinutes": 20
  },
  "325": {
    "day": 325,
    "stage": "EXAM",
    "week": 47,
    "dayOfWeek": 3,
    "title": "Day 325: 檢定主題三：數位生活、社群媒體與人工智慧 (Digitalisierung & KI)",
    "germanTitle": "Themenwortschatz 3: Digitale Medien, Datenschutz & Künstliche Intelligenz",
    "theme": "歌德 B1 高頻主題特訓 - 智慧科技、社群網絡與個資隱私防護",
    "estimatedMinutes": 20
  },
  "326": {
    "day": 326,
    "stage": "EXAM",
    "week": 47,
    "dayOfWeek": 4,
    "title": "Day 326: 檢定主題四：飲食、健康與身心平衡 (Ernährung & Gesundheit)",
    "germanTitle": "Themenwortschatz 4: Gesunde Ernährung, Sport & Mentale Balance",
    "theme": "歌德 B1 高頻主題特訓 - 均衡飲食、蔬食潮流與身心壓力調適",
    "estimatedMinutes": 20
  },
  "327": {
    "day": 327,
    "stage": "EXAM",
    "week": 47,
    "dayOfWeek": 5,
    "title": "Day 327: 檢定主題五：消費、金錢與快時尚 (Konsum & Geld)",
    "germanTitle": "Themenwortschatz 5: Konsumverhalten, Online-Handel & Fast Fashion",
    "theme": "歌德 B1 高頻主題特訓 - 理性消費、二手經濟與快時尚省思",
    "estimatedMinutes": 20
  },
  "328": {
    "day": 328,
    "stage": "EXAM",
    "week": 47,
    "dayOfWeek": 6,
    "title": "Day 328: 檢定主題六：教育、留學與外語學習 (Bildung & Sprachen)",
    "germanTitle": "Themenwortschatz 6: Bildungssystem, Auslandserfahrung & Mehrsprachigkeit",
    "theme": "歌德 B1 高頻主題特訓 - 德國教育體制、雙軌制職業培訓與留學規劃",
    "estimatedMinutes": 20
  },
  "329": {
    "day": 329,
    "stage": "EXAM",
    "week": 47,
    "dayOfWeek": 7,
    "title": "Day 329: 檢定高分句型百寶箱 (10 大 B1/B2 語法結構總盤點)",
    "germanTitle": "Grammatik-Feinschliff: Die 10 besten Satzstrukturen für Top-Noten im B1-Zertifikat",
    "theme": "歌德 B1 高分衝刺 - 詞彙語法多樣性頂級加分句型寶典",
    "estimatedMinutes": 20
  },
  "330": {
    "day": 330,
    "stage": "EXAM",
    "week": 48,
    "dayOfWeek": 1,
    "title": "Day 330: 全真模考模組一：閱讀 (Lesen) 65 分鐘極限突破",
    "germanTitle": "Vollsimulation 1: Modul Lesen (65 Minuten, 30 Aufgaben)",
    "theme": "歌德 B1 模考全真衝刺 - 閱讀測驗時間壓迫下的極限排查技術",
    "estimatedMinutes": 20
  },
  "331": {
    "day": 331,
    "stage": "EXAM",
    "week": 48,
    "dayOfWeek": 2,
    "title": "Day 331: 全真模考模組二：聽力 (Hören) 40 分鐘全速排雷",
    "germanTitle": "Vollsimulation 2: Modul Hören (40 Minuten, 30 Aufgaben)",
    "theme": "歌德 B1 模考全真衝刺 - 聽力只聽一次 (Teil 2) 與多重干擾項排除攻防",
    "estimatedMinutes": 20
  },
  "332": {
    "day": 332,
    "stage": "EXAM",
    "week": 48,
    "dayOfWeek": 3,
    "title": "Day 332: 全真模考模組三：寫作 (Schreiben) 60 分鐘滿分實戰",
    "germanTitle": "Vollsimulation 3: Modul Schreiben (60 Minuten, 3 Aufgaben)",
    "theme": "歌德 B1 模考全真衝刺 - 三篇作文限時連環作答與閱卷標準解析",
    "estimatedMinutes": 20
  },
  "333": {
    "day": 333,
    "stage": "EXAM",
    "week": 48,
    "dayOfWeek": 4,
    "title": "Day 333: 全真模考模組四：口說 (Sprechen) 15 分鐘考場巔峰實戰",
    "germanTitle": "Vollsimulation 4: Modul Sprechen (15 Minuten, 3 Teile)",
    "theme": "歌德 B1 模考全真衝刺 - 雙人對話、個人簡報與現場質詢全流程演練",
    "estimatedMinutes": 20
  },
  "334": {
    "day": 334,
    "stage": "EXAM",
    "week": 48,
    "dayOfWeek": 5,
    "title": "Day 334: 60 分及格線與 80+ 分高分策略、弱點精準診斷",
    "germanTitle": "Prüfungsstrategie: 60%-Bestehensgrenze, Notenskalen & Fehleranalyse",
    "theme": "歌德 B1 應試戰略 - 計分機制、模組單科重考與錯題弱點診斷",
    "estimatedMinutes": 20
  },
  "335": {
    "day": 335,
    "stage": "EXAM",
    "week": 48,
    "dayOfWeek": 6,
    "title": "Day 335: 臨考倒數 7 天黃金複習計畫與必備物品清單",
    "germanTitle": "Der 7-Tage-Countdown: Zeitplan, Packliste & Mentale Wettkampfvorbereitung",
    "theme": "歌德 B1 臨門一腳 - 考前一週時間矩陣、隨身清單與防慌亂指南",
    "estimatedMinutes": 20
  },
  "336": {
    "day": 336,
    "stage": "EXAM",
    "week": 48,
    "dayOfWeek": 7,
    "title": "Day 336: B1 檢定巔峰大考驗與第 48 週結訓里程碑 (B1-Meilenstein)",
    "germanTitle": "Das B1-Finale: Meilenstein-Zertifikatstraining, Rückblick & Siegesfeier",
    "theme": "歌德 B1 結訓巔峰里程碑 - 336 天德語修煉全景複盤與考前誓師大會",
    "estimatedMinutes": 20
  },
  "337": {
    "day": 337,
    "stage": "EXAM",
    "week": 49,
    "dayOfWeek": 1,
    "title": "Day 337: B2 銜接語法一：分詞作形容詞定語與擴展定語結構",
    "germanTitle": "Brückenkurs B2: Partizip I und II als erweiterte Adjektiv-Attribute",
    "theme": "德語高級讀寫階梯 - 第一分詞與第二分詞作為修飾名詞之定語結構",
    "estimatedMinutes": 20
  },
  "338": {
    "day": 338,
    "stage": "EXAM",
    "week": 49,
    "dayOfWeek": 2,
    "title": "Day 338: B2 銜接語法二：帶 zu 的分詞結構 (Gerundiv)",
    "germanTitle": "Brückenkurs B2: Das Gerundiv (zu + Partizip I als passivische Notwendigkeit)",
    "theme": "德語高級讀寫階梯 - 帶 zu 的現在分詞結構表「必須/可以被完成的事物」",
    "estimatedMinutes": 20
  },
  "339": {
    "day": 339,
    "stage": "EXAM",
    "week": 49,
    "dayOfWeek": 3,
    "title": "Day 339: B2 銜接語法三：虛擬一式 (Konjunktiv I) 與新聞間接引語",
    "germanTitle": "Brückenkurs B2: Der Konjunktiv I und die indirekte Rede in den Medien",
    "theme": "德語高級讀寫階梯 - 新聞、報章雜誌客觀轉述他人言論必備語式",
    "estimatedMinutes": 20
  },
  "340": {
    "day": 340,
    "stage": "EXAM",
    "week": 49,
    "dayOfWeek": 4,
    "title": "Day 340: B2 銜接語法四：名詞化風格與動詞化風格互換",
    "germanTitle": "Brückenkurs B2: Nominalstil vs. Verbalstil in Wissenschaft und Behörden",
    "theme": "德語高級讀寫階梯 - 學術公文「名詞化 (Nominalstil)」精簡轉換術",
    "estimatedMinutes": 20
  },
  "341": {
    "day": 341,
    "stage": "EXAM",
    "week": 49,
    "dayOfWeek": 5,
    "title": "Day 341: B2 銜接語法五：高級語篇邏輯副詞與篇章架構",
    "germanTitle": "Brückenkurs B2: Fortgeschrittene Satzverknüpfung und Textkohärenz",
    "theme": "德語高級讀寫階梯 - 擺脫「und, aber, weil」的高階篇章邏輯銜接詞庫",
    "estimatedMinutes": 20
  },
  "342": {
    "day": 342,
    "stage": "EXAM",
    "week": 49,
    "dayOfWeek": 6,
    "title": "Day 342: 第 49 週 B2 銜用語法綜合檢定與實戰診斷",
    "germanTitle": "Woche 49 Meilenstein: B2-Brückengrammatik-Zertifikatstest & Fehlerdiagnose",
    "theme": "德語高級讀寫階梯 - 分詞定語、Gerundiv、虛擬一式與名詞化綜合大檢定",
    "estimatedMinutes": 20
  },
  "343": {
    "day": 343,
    "stage": "EXAM",
    "week": 49,
    "dayOfWeek": 7,
    "title": "Day 343: 德意志文化專題：康德、啟蒙哲學與理性思辨傳統",
    "germanTitle": "Kulturthema: Immanuel Kant, die Aufklärung und der Geist der deutschen Philosophie",
    "theme": "德意志精神地標 - 康德《純粹理性批判》、絕對命令與德語嚴密邏輯之源",
    "estimatedMinutes": 20
  },
  "344": {
    "day": 344,
    "stage": "EXAM",
    "week": 50,
    "dayOfWeek": 1,
    "title": "Day 344: DACH 文化一：奧地利德語特色詞彙與維也納咖啡文化",
    "germanTitle": "Kulturraum DACH 1: Österreichisches Deutsch und Wiener Kaffeehauskultur",
    "theme": "德語多中心語言特徵 - 奧地利德語特色單字、完成式助動詞差異與維也納生活風情",
    "estimatedMinutes": 20
  },
  "345": {
    "day": 345,
    "stage": "EXAM",
    "week": 50,
    "dayOfWeek": 2,
    "title": "Day 345: DACH 文化二：瑞士德語、瑞士標準語與無 ß 書寫規則",
    "germanTitle": "Kulturraum DACH 2: Schweizerdeutsch, Helvetismen und das fehlende ",
    "theme": "德語多中心語言特徵 - 瑞士高地德語 (Schweizer Hochdeutsch) 特色單字與法語借詞",
    "estimatedMinutes": 20
  },
  "346": {
    "day": 346,
    "stage": "EXAM",
    "week": 50,
    "dayOfWeek": 3,
    "title": "Day 346: DACH 文化三：德國南北方言語義差異與時間表達陷阱",
    "germanTitle": "Kulturraum DACH 3: Dialekte, Nord-Süd-Gefälle und Uhrzeit-Fallen",
    "theme": "德語地域文化 - 德國南北問候風俗、嘉年華節慶與「四點差一刻」時間陷阱",
    "estimatedMinutes": 20
  },
  "347": {
    "day": 347,
    "stage": "EXAM",
    "week": 50,
    "dayOfWeek": 4,
    "title": "Day 347: DACH 文化四：跨文化溝通的「直率度」與語用學",
    "germanTitle": "Interkulturelle Kompetenz: Direktheit, Sachlichkeit und Feedback-Kultur",
    "theme": "跨文化交際心理 - 德國人的「對事不對人 (Sachlichkeit)」、低語境溝通與批評應對",
    "estimatedMinutes": 20
  },
  "348": {
    "day": 348,
    "stage": "EXAM",
    "week": 50,
    "dayOfWeek": 5,
    "title": "Day 348: DACH 文化五：德國「社團文化 (Vereinsleben)」與公民社會",
    "germanTitle": "Kulturthema: Das deutsche Vereinsleben und bürgerschaftliches Engagement",
    "theme": "德國社會結構核心 - 註冊社團 (e.V.)、志工志願服務與如何快速融入德國在地生活",
    "estimatedMinutes": 20
  },
  "349": {
    "day": 349,
    "stage": "EXAM",
    "week": 50,
    "dayOfWeek": 6,
    "title": "Day 349: 第 50 週 DACH 全域文化與跨文化綜合檢定",
    "germanTitle": "Woche 50 Meilenstein: DACH-Kultur-Zertifikatstest & Interkultureller Kompass",
    "theme": "德語全域文化大檢驗 - 奧地利德語、瑞士德語、南北方言與跨文化能力驗收",
    "estimatedMinutes": 20
  },
  "350": {
    "day": 350,
    "stage": "EXAM",
    "week": 50,
    "dayOfWeek": 7,
    "title": "Day 350: 德意志文化專題：包浩斯百年建築與現代設計革命",
    "germanTitle": "Kulturthema: 100 Jahre Bauhaus, Walter Gropius und die moderne Gestaltung",
    "theme": "德意志現代美學地標 - 包浩斯 (Bauhaus)、「形式遵循功能 (Form follows function)」與極簡主義風潮",
    "estimatedMinutes": 20
  },
  "351": {
    "day": 351,
    "stage": "EXAM",
    "week": 51,
    "dayOfWeek": 1,
    "title": "Day 351: 德國生活全攻略一：大學體系、申請與註冊報到 (Uni & Studium)",
    "germanTitle": "Leben in Deutschland 1: Hochschulsystem, Uni-Assist & Immatrikulation",
    "theme": "留德必備生存指南 - 德國高等教育申請、大學註冊與學期票 (Semesterticket)",
    "estimatedMinutes": 20
  },
  "352": {
    "day": 352,
    "stage": "EXAM",
    "week": 51,
    "dayOfWeek": 2,
    "title": "Day 352: 德國生活全攻略二：簽證延簽、戶籍登記與自保金",
    "germanTitle": "Leben in Deutschland 2: Aufenthaltstitel, Ausländerbehörde & Bürgeramt",
    "theme": "留德必備生存指南 - 入境兩週入籍登記 (Anmeldung)、限制提領帳戶 (Sperrkonto) 與電子居留證 (eAT)",
    "estimatedMinutes": 20
  },
  "353": {
    "day": 353,
    "stage": "EXAM",
    "week": 51,
    "dayOfWeek": 3,
    "title": "Day 353: 德國生活全攻略三：醫療保險、看診預約與病假證明",
    "germanTitle": "Leben in Deutschland 3: Krankenversicherung, Hausarztpraxis & AU-Bescheinigung",
    "theme": "留德必備生存指南 - 法定公保 (GKV) vs 私保 (PKV)、家庭醫生守門人與開立病假條",
    "estimatedMinutes": 20
  },
  "354": {
    "day": 354,
    "stage": "EXAM",
    "week": 51,
    "dayOfWeek": 4,
    "title": "Day 354: 德國生活全攻略四：銀行開戶、個人責任險與個人信用 (Schufa)",
    "germanTitle": "Leben in Deutschland 4: Girokonto, Privathaftpflicht & Schufa-Bonität",
    "theme": "留德必備生存指南 - 活期帳戶 (Girokonto)、第三方責任險 (Haftpflicht) 與德國個人信用 (Schufa)",
    "estimatedMinutes": 20
  },
  "355": {
    "day": 355,
    "stage": "EXAM",
    "week": 51,
    "dayOfWeek": 5,
    "title": "Day 355: 德國生活全攻略五：租房簽約、冷暖租與交接協議",
    "germanTitle": "Leben in Deutschland 5: Mietvertrag, Kalt- vs. Warmmiete & Übergabeprotokoll",
    "theme": "留德必備生存指南 - 冷租 (Kaltmiete)、附加水暖費 (Nebenkosten)、押金保護與退租交接驗收 (Protokoll)",
    "estimatedMinutes": 20
  },
  "356": {
    "day": 356,
    "stage": "EXAM",
    "week": 51,
    "dayOfWeek": 6,
    "title": "Day 356: 第 51 週德國留學生活全實務綜合大檢定",
    "germanTitle": "Woche 51 Meilenstein: Deutschland-Praxis-Zertifikatstest & Lebenskompass",
    "theme": "留德生存能力全面驗收 - 大學申請、居留延簽、醫保看診、銀行開戶與租屋簽約大檢閱",
    "estimatedMinutes": 20
  },
  "357": {
    "day": 357,
    "stage": "EXAM",
    "week": 51,
    "dayOfWeek": 7,
    "title": "Day 357: 德意志文化專題：德國綠能轉型、環保政治與押金退瓶制度",
    "germanTitle": "Kulturthema: Die Energiewende, Grüne Politik und das deutsche Pfandsystem",
    "theme": "德意志現代社會基因 - 能源轉型 (Energiewende)、綠黨崛起與全球最成熟的空瓶押金系統 (Pfand)",
    "estimatedMinutes": 20
  },
  "358": {
    "day": 358,
    "stage": "EXAM",
    "week": 52,
    "dayOfWeek": 1,
    "title": "Day 358: 終極衝刺一：B1 核心詞彙、偽友詞與高頻文法易錯點剖析 (Wortschatz & Fehleranalyse)",
    "germanTitle": "Endspurt 1: Wortschatz-Feinschliff, False Friends & Grammatik-Fallen",
    "theme": "歌德 B1 終極考前排雷 - 避開偽友詞、從句動詞置尾與介系詞格位陷阱",
    "estimatedMinutes": 20
  },
  "359": {
    "day": 359,
    "stage": "EXAM",
    "week": 52,
    "dayOfWeek": 2,
    "title": "Day 359: 考前24小時倒數：身心調整、極限配速與突發應急救援 (24h vor der Prüfung)",
    "germanTitle": "Endspurt 2: Mentale Stärke, Zeitmanagement & Notfall-Strategien",
    "theme": "歌德 B1 考前 24 小時作戰指南 - 克服大腦空白 (Blackout)、配速規劃與考場急救話術",
    "estimatedMinutes": 20
  },
  "360": {
    "day": 360,
    "stage": "EXAM",
    "week": 52,
    "dayOfWeek": 3,
    "title": "Day 360: 歌德 B1 四大模組全拆解：閱聽寫說 60 分及格線與得分秘訣 (Prüfungsanalyse Komplett)",
    "germanTitle": "Endspurt 3: Die vier Module im Detail - Bestehensgrenzen & Bewertungsmatrix",
    "theme": "歌德 B1 官方評分架構全剖析 - 60% 及格門檻、獨立模組核發與考官給分標準",
    "estimatedMinutes": 20
  },
  "361": {
    "day": 361,
    "stage": "EXAM",
    "week": 52,
    "dayOfWeek": 4,
    "title": "Day 361: 跨越 B1 之後：通往 B2/C1 高階德語與真實德語媒體的世界 (Der Weg zu B2/C1)",
    "germanTitle": "Ausblick 1: Der Sprung nach B2/C1 - Tagesschau, Fachsprache & Sprachautonomie",
    "theme": "自主進階學習藍圖 - 脫離教科書、擁抱真實德語新聞、名詞化思維與被動態替代形式",
    "estimatedMinutes": 20
  },
  "362": {
    "day": 362,
    "stage": "EXAM",
    "week": 52,
    "dayOfWeek": 5,
    "title": "Day 362: 德意志文學巡禮：歌德、卡夫卡、赫塞與德語靈魂美學 (Deutsche Literatur: Goethe, Kafka, Hesse)",
    "germanTitle": "Ausblick 2: Schnupperkurs Deutsche Literatur - Goethe, Kafka & Hermann Hesse",
    "theme": "德語文學原著精賞 - 《浮士德》經典名句、卡夫卡《變形記》的荒謬美學與赫塞《流浪者之歌》",
    "estimatedMinutes": 20
  },
  "363": {
    "day": 363,
    "stage": "EXAM",
    "week": 52,
    "dayOfWeek": 6,
    "title": "Day 363: 德式理性思辨與媒體爭鳴文化：明鏡、時代週報與文化副刊 (Medienanalyse & Debattenkultur)",
    "germanTitle": "Ausblick 3: Debattenkultur & Leitmedien - Der Spiegel, FAZ & das Feuilleton",
    "theme": "德意志深度閱讀解鎖 - 嚴肅新聞傳統、文化副刊 (Feuilleton) 與憲法言論自由",
    "estimatedMinutes": 20
  },
  "364": {
    "day": 364,
    "stage": "EXAM",
    "week": 52,
    "dayOfWeek": 7,
    "title": "Day 364: 364 天的語言蛻變英雄之旅：從初見到獨立自主思考 (Die 364-Tage-Transformation)",
    "germanTitle": "Retrospektive: 364 Tage Durchhalten - Vom ersten ",
    "theme": "德語英雄之路回眸 - 神經突觸重塑、認知躍遷、終身自律與第二精神原鄉的誕生",
    "estimatedMinutes": 20
  },
  "365": {
    "day": 365,
    "stage": "EXAM",
    "week": 52,
    "dayOfWeek": 8,
    "title": "Day 365: 365 天大結局終章盛典：全勤完走、證書頒授與通往世界的無限可能 (Großes Finale: Tag 365)",
    "germanTitle": "Das Große Finale: 365 Tage Goethe-Deutsch Meisterkurs - Zertifikat & Zukunft",
    "theme": "365天史詩級完走結業典禮 - 終身學習者宣言、給未來的自己一封信與通往歐洲的無限大門",
    "estimatedMinutes": 20
  }
};

export function getDaySummary(dayNumber: number): DaySummary {
  const day = Math.max(1, Math.min(dayNumber, 365));
  return (
    DAY_MANIFEST[day] || {
      day,
      stage: day > 300 ? 'EXAM' : day > 180 ? 'B1' : day > 75 ? 'A2' : 'A1',
      week: day <= 365 && day >= 358 ? 52 : Math.ceil(day / 7),
      dayOfWeek: ((day - 1) % 7) + 1,
      title: `Day ${day}`,
      germanTitle: `Lektion ${day}`,
      theme: 'Alltägliche Kommunikation',
      estimatedMinutes: 20,
    }
  );
}
