export type Category = "works" | "sp" | "sh";

export type Project = {
  title: string;
  info: string;
  category: Category;
  image: { src: string; width: number; height: number };
  tags: string[];
  github?: string;
  href?: string;
};

export const site = {
  brand: "Fishing",
  name: "Yu Hao Huang",
  role: "Full Stack Engineer",
  email: "sam8212003@yahoo.com.tw",
  github: "https://github.com/sam821203",
};

export const categories: { key: "all" | Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "works", label: "Works" },
  { key: "sp", label: "Side Projects" },
  { key: "sh", label: "Side Hustles" },
];

const img = (name: string, width: number, height: number) => ({ src: `/img/${name}`, width, height });

export const projects: Project[] = [
  {
    title: "InsightAero",
    info: "環境感知無人機任務監控平台：即時遙測、氣象整合、有效空速修正與 AI 導航及結案報告",
    category: "sp",
    image: img("insightAero.jpg", 1245, 603),
    tags: ["React", "AI", "Google Map", "OpenWeatherMap", "WebSocket", "FastAPI", "PostgreSQL"],
    github: "https://github.com/sam821203/InsightAero",
  },
  {
    title: "SalesOps",
    info: "內部 SalesOps 平台，用於管理銷售工作流程、追蹤績效，並確保資料完整性",
    category: "sp",
    image: img("salesOps.jpg", 1435, 696),
    tags: ["React", "Hono", "SQLite", "Prisma", "Husky", "Cursor Rules/Skills"],
    github: "https://github.com/sam821203/SalesOps",
  },
  {
    title: "中華官網",
    info: "根據品牌風格與設計準則，設計與前端開發 RWD 響應式網頁以符合各裝置",
    category: "works",
    image: img("cht-web.jpg", 953, 540),
    tags: ["JavaScript", "SCSS", "Swiper", "Figma"],
    href: "https://www.cht.com.tw/zh-tw/home/cht",
  },
  {
    title: "中華 HiSEM 資安管理系統",
    info: "因應資安威脅，導入新系統取代老舊架構。前端專案架構規劃與頁面開發、共用元件製作",
    category: "works",
    image: img("hisem.jpg", 1440, 813),
    tags: ["Vue 3", "PrimeVue", "PrimeFlex", "Vite", "Lodash", "Vueuse"],
  },
  {
    title: "輻射防護雲化服務系統",
    info: "整合 Google 地圖即時追蹤、異常警示、歷史查詢與資安機制，強化高風險輻射源管理效能",
    category: "works",
    image: img("aeclice-web.jpg", 1909, 909),
    tags: ["Vue 3", "Google Map", "TypeScript", "Element Plus", "Tailwind CSS"],
  },
  {
    title: "華航地勤排班系統",
    info: "開發具彈性排班與即時更新功能的前端頁面。整合人員資訊、視覺化報表與簡易的人力配置工具",
    category: "works",
    image: img("gss.jpg", 1426, 808),
    tags: ["Javascript", "jQuery", "Java"],
  },
  {
    title: "資料治理平台",
    info: "後台頁面設計與開發，前台會員權限登入製作。平台可查詢主要功能模組，並支持資料市集與其他系統的 API 整合，實現資料資產的可視化與查找",
    category: "works",
    image: img("data-quality.jpg", 1140, 810),
    tags: ["Vue 3", "TypeScript", "Element Plus", "Websocket"],
  },
  {
    title: "東森購物",
    info: "東森購物網專案整理。負責活動專案製作與資料串接、組版系統宮格維護與優化、EDM 模板製作",
    category: "works",
    image: img("etmall-front-design.jpg", 952, 540),
    tags: ["SCSS", "Pug", "Webpack", "Figma"],
    github: "https://github.com/sam821203/ehsn-front-design",
    href: "https://sam821203.github.io/ehsn-front-design/",
  },
  {
    title: "AI ChatBot",
    info: "一個能聊天💬的 AI 小幫手，有一般問答跟會自己搜尋的 Agent 模式，用 LangGraph、OpenAI 當大腦，Flask + Vue 3 當手腳",
    category: "sp",
    image: img("ai-chat-assisant.jpg", 1723, 876),
    tags: ["Python", "LangGraph", "OpenAI", "Google Search", "Vue 3"],
    github: "https://github.com/sam821203/chat-bot",
    href: "https://chat-bot-green-three.vercel.app/",
  },
  {
    title: "Birdie Bots",
    info: "LINE 鳥類知識問答機器人🤖 發送訊息時，系統會透過 OpenAI API 生成專業的鳥類相關回答",
    category: "sp",
    image: img("line-bots.jpg", 1440, 810),
    tags: ["Python", "LINE Messaging API", "OpenAI"],
    github: "https://github.com/sam821203/birdie-bot",
  },
  {
    title: "PDF-query",
    info: "以自然語言查詢 PDF 的應用。上傳 PDF 後可提問並取得附有來源頁面的回答",
    category: "sp",
    image: img("pdf-query.jpg", 1440, 810),
    tags: ["Python", "LangChain", "RAG", "OpenAI"],
    github: "https://github.com/sam821203/langchain-pdf-query",
  },
  {
    title: "VoiceVerse",
    info: "音樂串流平台。提供用戶註冊、上傳與管理音樂功能。能輕鬆在線上享受音樂庫裡的各種音頻",
    category: "sp",
    image: img("voice-verse.jpg", 1904, 1080),
    tags: ["Vue 3", "Vite", "Pinia", "Firebase", "Howler.js", "PWA", "SCSS"],
    github: "https://github.com/sam821203/VoiceVerse",
    href: "https://voice-verse.vercel.app/",
  },
  {
    title: "TekNews",
    info: "結合即時新聞與天氣資訊的便利小工具，讓使用者一次掌握最新資訊！",
    category: "sp",
    image: img("teknews.jpg", 956, 538),
    tags: ["Angular", "TypeScript", "RxJS", "NewsAPI", "OpenWeatherMap"],
    github: "https://github.com/sam821203/teknews",
    href: "https://teknews.vercel.app/",
  },
  {
    title: "Chart challenge",
    info: "使用各類視覺化函式庫做點圖表唄!",
    category: "sp",
    image: img("chartjs-challenge.jpg", 1920, 1080),
    tags: ["Chart.js", "D3.js", "Canvas"],
    href: "/chart-challenge.html",
  },
  {
    title: "Possimpible",
    info: "使用電腦相機拍照並上傳，使用 PWA 創建類似原生應用程式的 Web",
    category: "sp",
    image: img("possimpible.jpg", 1440, 810),
    tags: ["Vue 3", "Quasar", "Firebase", "PWA", "Express.js"],
    href: "https://quasagram-573f0.web.app/#/",
  },
  {
    title: "ArtSleuth",
    info: "藝術家自由接案平台。提供註冊、發帖與聯絡的方式讓潛在客戶能夠輕鬆找到合適的藝術家",
    category: "sp",
    image: img("art-sleuth.jpg", 1920, 1080),
    tags: ["Vue 3", "Vuex", "Firebase"],
    href: "https://artsleuth-requests-4684a.web.app/artists",
  },
  {
    title: "dōTERRA",
    info: "dōTERRA 電商網站首頁。實作元件拆解、資料響應式與資料計算、使用者介面設計",
    category: "sp",
    image: img("doTERRA.jpg", 1726, 1080),
    tags: ["Vue 3", "Vuex", "Figma"],
    href: "https://doterra-ivq4kqvbb-sam821203.vercel.app/",
  },
  {
    title: "銀座しんのう",
    info: "日本餐廳品牌網站。與 UI 和後端工程師合作，負責前端開發、Google Maps APIs 串接、動態效果製作",
    category: "sp",
    image: img("ginza-shinno.jpg", 1440, 810),
    tags: ["SCSS", "Pug", "Webpack", "Swiper", "AOS"],
    href: "https://www.ginza-shinno.tokyo/",
  },
  {
    title: "Touch Firecracker",
    info: "客製化手指與滑鼠滑動煙火特效",
    category: "sp",
    image: img("firetracker.png", 1920, 1080),
    tags: ["JavaScript", "CSS"],
    href: "/following-touch-firecracker/index.html",
  },
  {
    title: "Falling Random",
    info: "圖片隨機動畫",
    category: "sp",
    image: img("falling-random.jpg", 1917, 1075),
    tags: ["JavaScript", "CSS"],
    href: "/falling-random/index.html",
  },
  {
    title: "洪裕數位布料圖書館平台",
    info: "與設計師和後端工程師合作，負責前端開發與動態效果製作",
    category: "sp",
    image: img("HFI.jpg", 1920, 1080),
    tags: ["Tailwind CSS", "Gulp", "Swiper", "AOS"],
    href: "https://dev.creatop.tw/dev/2022/hfi/assets/zh-TW/home/index.html",
  },
  {
    title: "Movin'on 電影售票網",
    info: "完整的電影購票流程及付款流程、註冊登入、彈幕發送、會員文章、留言與按讚等功能。與 PHP 工程師合作，負責前端開發與使用者介面設計",
    category: "sp",
    image: img("Movin-on.jpg", 1437, 810),
    tags: ["Bootstrap", "Figma", "Miro"],
    href: "https://www.youtube.com/watch?v=OMYploDx6BY&t=131s",
  },
  {
    title: "Pulse 股票分析平台",
    info: "即時個股追蹤、財報數據分析與技術圖表。平台提供視覺化介面，讓使用者輕鬆查看各項股票的最新動態與財務指標",
    category: "sh",
    image: img("empty.jpg", 960, 540),
    tags: ["Vue 3", "Nest.js", "MongoDB", "D3.js", "Websocket"],
    github: "https://github.com/sam821203/Pulse-frontend",
    href: "https://github.com/sam821203/Pulse-frontend",
  },
  {
    title: "Mailyx",
    info: "註冊即擁有專屬 Email，可輕鬆收發信件的全方位信件管理平台！",
    category: "sh",
    image: img("empty.jpg", 960, 540),
    tags: ["Angular", "Semantic UI", "TypeScript", "RxJS", "Nest.js", "MongoDB", "Mailgun"],
    github: "https://github.com/sam821203/mailyx",
    href: "https://github.com/sam821203/mailyx",
  },
];

export const campaignVideos = [
  "1212-1st",
  "1212-2nd",
  "back-to-school",
  "father",
  "goddess-2nd",
  "graduation",
  "mother-2nd",
  "new-year-2nd",
  "summer-1st",
];
