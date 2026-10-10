export type Category = "works" | "sp" | "sh";

export type CaseStudy = {
  problem: string;
  role: string;
  challenges?: string[];
  solutions?: { label: string; text: string }[];
  strategies?: { label: string; items: string[] }[];
  result: string | string[];
};

export type Project = {
  slug: string;
  title: string;
  featured?: boolean;
  caseStudy?: CaseStudy;
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
  role: "Front End Engineer",
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
    slug: "supplier-compliance",
    featured: true,
    title: "設備供應商合規追蹤平台",
    info: "Excel 匯入驗證、合規評分與 KPI 視覺化、明細追溯及異常自動通知",
    category: "works",
    image: img("supplierCompliance.jpg", 1440, 720),
    tags: ["React", "TypeScript", "Zustand", "Ant Design", "AI Workflow"],
  },
  {
    slug: "insightaero",
    featured: true,
    title: "InsightAero",
    info: "環境感知無人機任務監控平台：即時遙測、氣象整合、有效空速修正與 AI 導航及結案報告",
    category: "sp",
    image: img("insightAero.jpg", 1245, 603),
    tags: ["React", "AI", "Google Map", "OpenWeatherMap", "WebSocket", "FastAPI", "PostgreSQL"],
    github: "https://github.com/sam821203/InsightAero",
  },
  {
    slug: "cht-web",
    title: "中華官網",
    info: "根據品牌風格與設計準則，設計與前端開發 RWD 響應式網頁以符合各裝置",
    category: "works",
    image: img("cht-web.jpg", 953, 540),
    tags: ["JavaScript", "SCSS", "Swiper", "Figma"],
    href: "https://www.cht.com.tw/zh-tw/home/cht",
  },
  {
    slug: "hisem",
    featured: true,
    title: "中華 HiSEM 資安管理系統",
    info: "因應資安威脅，導入新系統取代老舊架構。前端專案架構規劃與頁面開發、共用元件製作",
    category: "works",
    image: img("hisem.jpg", 1440, 813),
    tags: ["Vue 3", "PrimeVue", "PrimeFlex", "Vite", "Lodash", "Vueuse"],
  },
  {
    slug: "radiation-cloud",
    featured: true,
    title: "輻射防護雲化服務系統",
    info: "整合 Google 地圖即時追蹤、異常警示、歷史查詢與資安機制，強化高風險輻射源管理效能",
    category: "works",
    image: img("aeclice-web.jpg", 1909, 909),
    tags: ["Vue 3", "Google Map", "TypeScript", "Element Plus", "Tailwind CSS"],
  },
  {
    slug: "china-airlines-scheduling",
    title: "華航地勤排班系統",
    info: "開發具彈性排班與即時更新功能的前端頁面。整合人員資訊、視覺化報表與簡易的人力配置工具",
    category: "works",
    image: img("gss.jpg", 1426, 808),
    tags: ["Javascript", "jQuery", "Java"],
  },
  {
    slug: "etmall",
    title: "東森購物",
    info: "東森購物網專案整理。負責活動專案製作與資料串接、組版系統宮格維護與優化、EDM 模板製作",
    category: "works",
    image: img("etmall-front-design.jpg", 952, 540),
    tags: ["SCSS", "Pug", "Webpack", "Figma"],
    github: "https://github.com/sam821203/ehsn-front-design",
    href: "https://sam821203.github.io/ehsn-front-design/",
  },
  {
    slug: "ai-chatbot",
    title: "AI ChatBot",
    info: "一個能聊天💬的 AI 小幫手，有一般問答跟會自己搜尋的 Agent 模式，用 LangGraph、OpenAI 當大腦，Flask + Vue 3 當手腳",
    category: "sp",
    image: img("ai-chat-assisant.jpg", 1723, 876),
    tags: ["Python", "LangGraph", "OpenAI", "Google Search", "Vue 3"],
    github: "https://github.com/sam821203/chat-bot",
    href: "https://chat-bot-green-three.vercel.app/",
  },
  {
    slug: "birdie-bots",
    title: "Birdie Bots",
    info: "LINE 鳥類知識問答機器人🤖 發送訊息時，系統會透過 OpenAI API 生成專業的鳥類相關回答",
    category: "sp",
    image: img("line-bots.jpg", 1440, 810),
    tags: ["Python", "LINE Messaging API", "OpenAI"],
    github: "https://github.com/sam821203/birdie-bot",
  },
  {
    slug: "pdf-query",
    title: "PDF-query",
    info: "以自然語言查詢 PDF 的應用。上傳 PDF 後可提問並取得附有來源頁面的回答",
    category: "sp",
    image: img("pdf-query.jpg", 1440, 810),
    tags: ["Python", "LangChain", "RAG", "OpenAI"],
    github: "https://github.com/sam821203/langchain-pdf-query",
  },
  {
    slug: "voiceverse",
    title: "VoiceVerse",
    info: "音樂串流平台。提供用戶註冊、上傳與管理音樂功能。能輕鬆在線上享受音樂庫裡的各種音頻",
    category: "sp",
    image: img("voice-verse.jpg", 1904, 1080),
    tags: ["Vue 3", "Vite", "Pinia", "Firebase", "Howler.js", "PWA", "SCSS"],
    github: "https://github.com/sam821203/VoiceVerse",
    href: "https://voice-verse.vercel.app/",
  },
  {
    slug: "ginza-shinno",
    title: "銀座しんのう",
    info: "日本餐廳品牌網站。與 UI 和後端工程師合作，負責前端開發、Google Maps APIs 串接、動態效果製作",
    category: "sp",
    image: img("ginza-shinno.jpg", 1440, 810),
    tags: ["SCSS", "Pug", "Webpack", "Swiper", "AOS"],
    href: "https://www.ginza-shinno.tokyo/",
  },
  {
    slug: "touch-firecracker",
    title: "Touch Firecracker",
    info: "客製化手指與滑鼠滑動煙火特效",
    category: "sp",
    image: img("firetracker.png", 1920, 1080),
    tags: ["JavaScript", "CSS"],
    href: "/following-touch-firecracker/index.html",
  },
  {
    slug: "falling-random",
    title: "Falling Random",
    info: "圖片隨機動畫",
    category: "sp",
    image: img("falling-random.jpg", 1917, 1075),
    tags: ["JavaScript", "CSS"],
    href: "/falling-random/index.html",
  },
  {
    slug: "hfi",
    title: "洪裕數位布料圖書館平台",
    info: "與設計師和後端工程師合作，負責前端開發與動態效果製作",
    category: "sp",
    image: img("HFI.jpg", 1920, 1080),
    tags: ["Tailwind CSS", "Gulp", "Swiper", "AOS"],
    href: "https://dev.creatop.tw/dev/2022/hfi/assets/zh-TW/home/index.html",
  },
  {
    slug: "movin-on",
    title: "Movin'on 電影售票網",
    info: "完整的電影購票流程及付款流程、註冊登入、彈幕發送、會員文章、留言與按讚等功能。與 PHP 工程師合作，負責前端開發與使用者介面設計",
    category: "sp",
    image: img("Movin-on.jpg", 1437, 810),
    tags: ["Bootstrap", "Figma", "Miro"],
    href: "https://www.youtube.com/watch?v=OMYploDx6BY&t=131s",
  },
  {
    slug: "pulse",
    title: "Pulse 股票分析平台",
    info: "即時個股追蹤、財報數據分析與技術圖表。平台提供視覺化介面，讓使用者輕鬆查看各項股票的最新動態與財務指標",
    category: "sh",
    image: img("empty.jpg", 960, 540),
    tags: ["Vue 3", "Nest.js", "MongoDB", "D3.js", "Websocket"],
    github: "https://github.com/sam821203/Pulse-frontend",
    href: "https://github.com/sam821203/Pulse-frontend",
  },
];

export const about =
  "我是一名專注於資料視覺化與即時系統的前端工程師，參與過資安、能源、航空與電商等領域的大型專案。我重視乾淨的架構、可重用的元件與流暢的使用者體驗，讓複雜的資料變得清晰易懂。";

export const skills: { category: string; items: string[] }[] = [
  { category: "核心", items: ["Vue 3", "React", "Angular", "TypeScript", "JavaScript (ES6+)"] },
  { category: "樣式與 UI", items: ["Tailwind CSS", "SCSS", "Element Plus", "PrimeVue", "RWD", "Figma"] },
  { category: "資料視覺化與地圖", items: ["D3.js", "Chart.js", "Canvas", "Google Maps API"] },
  { category: "工具鏈", items: ["Vite", "Webpack", "Gulp", "Pinia", "Vuex", "RxJS", "PWA"] },
  { category: "亦熟悉", items: ["Node.js / Nest.js", "FastAPI", "WebSocket", "OpenAI API", "LangChain"] },
];

export const experience: { title: string; desc: string; tags: string[] }[] = [
  { title: "設備供應商合規追蹤平台", desc: "前端技術負責人：從零規劃前端架構、制定開發規範與自動化品質機制、主導 Code Review。", tags: ["React", "TypeScript", "Zustand", "Ant Design", "AI Workflow"] },
  { title: "中華 HiSEM 資安管理系統", desc: "主導前端架構與共用元件庫，統一多團隊開發規範。", tags: ["Vue 3", "TypeScript", "PrimeVue"] },
  { title: "輻射防護雲化服務系統", desc: "即時地圖追蹤與告警推播，處理大量感測器資料。", tags: ["Google Maps", "WebSocket", "Chart.js"] },
  { title: "資料治理平台", desc: "資料血緣視覺化與權限管理介面。", tags: ["D3.js", "Vue 3", "Pinia"] },
  { title: "華航地勤排班系統", desc: "複雜排班甘特圖與拖拉互動，優化大量資料渲染。", tags: ["Angular", "RxJS", "Canvas"] },
  { title: "中華電信官網", desc: "響應式官網改版與無障礙優化。", tags: ["SCSS", "RWD", "Gulp"] },
  { title: "東森購物", desc: "電商活動頁與購物流程前端開發。", tags: ["Vue", "Webpack", "PWA"] },
];

const caseStudies: Record<string, CaseStudy> = {
  "supplier-compliance": {
    problem: "各設備供應商機台的合規狀況與需求，原以格式不一的 Excel 分散紀錄，難以統一追蹤、比較與即時掌握。",
    role: "前端技術負責人：從零規劃前端架構、制定開發規範與自動化品質機制、主導 Code Review，並直接與使用單位進行需求分析。",
    strategies: [
      {
        label: "架構｜模組化與統一權限控管",
        items: [
          "上線前將集中於單一頁面的功能拆分並模組化，預留擴充空間，隔離新需求對既有功能的影響。",
          "路由控管頁面權限，共用權限判斷控管元件層級的顯示；API 層整合 Keycloak 自動續期 Token，並統一處理 401/403 與重試。",
        ],
      },
      {
        label: "流程｜人機協作自動化",
        items: [
          "任務啟動時自動注入規範與自查清單，讓人與 AI 依同一標準開發。",
          "依相依關係精準載入程式碼以節省模型 Token，高風險操作須經授權。",
          "提交階段以 Lint 與自訂規則自動攔截不合規程式碼。",
        ],
      },
      {
        label: "元件｜Design Token 與載入優化",
        items: [
          "建立三層 Token（基礎/語意/元件），以單一色彩源支援雙主題切換。",
          "依路由與相依套件雙重分包，避免大型套件佔用首屏關鍵路徑。",
        ],
      },
      {
        label: "資料｜匯入流程與指標可視化",
        items: [
          "以分步引導上傳，使用者隨時掌握目前進度。",
          "解析不同來源、多層表頭的 Excel 並驗證，整合為統一的資料表。",
          "以趨勢、分布與達標率圖表呈現合規指標。",
        ],
      },
    ],
    result: [
      "新需求有明確的歸屬模組，降低對既有功能的回歸風險。",
      "導入 AI workflow（Rule/Skill/Hook）自動把關規範，Code Review 得以聚焦於業務邏輯、邊界情境與架構設計。",
      "新頁面直接沿用共用元件，維持視覺一致並減少畫面返工。",
      "多來源 Excel 整合為統一資料表，各供應商的合規狀況可即時追蹤與比較。",
    ],
  },
  insightaero: {
    problem: "操作員需要在單一畫面同時追蹤多架無人機的位置、遙測與告警，既有工具延遲高且資訊分散。",
    role: "獨立負責前端：架構設計、地圖整合、即時資料流與 UI/UX。",
    challenges: ["每秒數十筆位置更新導致地圖重繪卡頓", "斷線重連時資料一致性", "高資訊密度下的可讀性"],
    solutions: [
      { label: "架構", text: "WebSocket 層與 Pinia store 分離，以事件匯流排分派至地圖與圖表模組。" },
      { label: "元件", text: "封裝 Marker、軌跡、地理圍欄為可組合元件。" },
      { label: "效能", text: "以 requestAnimationFrame 批次更新 marker，渲染負載降低約 60%。" },
      { label: "UX", text: "告警分級色彩與聚焦動畫，讓關鍵事件一眼可見。" },
    ],
    result: "在 50+ 架同時飛行下維持 60fps，告警反應時間顯著縮短。",
  },
  hisem: {
    problem: "多個子系統由不同團隊開發，UI 與程式風格不一致，維護成本高。",
    role: "前端技術負責人：制定架構、建立元件庫與開發規範。",
    challenges: ["在不中斷開發下逐步導入共用元件", "大量資料表格的效能", "權限驅動的動態介面"],
    solutions: [
      { label: "架構", text: "Monorepo 管理元件庫與各子系統，型別共享。" },
      { label: "元件", text: "基於 PrimeVue 的設計 token 與 30+ 共用元件，附文件站。" },
      { label: "效能", text: "虛擬捲動與路由層級 code-splitting。" },
      { label: "UX", text: "統一互動模式與鍵盤操作支援。" },
    ],
    result: "新頁面開發時間縮短約 40%，介面一致性大幅提升。",
  },
  "radiation-cloud": {
    problem: "需即時掌握全區感測器輻射數值，並在異常時立即通知。",
    role: "前端主要開發者：地圖模組、告警系統與圖表。",
    challenges: ["數百個感測點同時更新", "告警不可遺漏且不可干擾"],
    solutions: [
      { label: "架構", text: "WebSocket 訂閱分區資料，只更新可視範圍。" },
      { label: "元件", text: "可重用的感測點、圖例與告警佇列元件。" },
      { label: "效能", text: "Marker clustering 與節流更新。" },
      { label: "UX", text: "分級告警、聲音提示與一鍵定位。" },
    ],
    result: "系統上線後成為日常監控核心工具。",
  },
};

for (const p of projects) {
  if (caseStudies[p.slug]) p.caseStudy = caseStudies[p.slug];
}

export const categoryLabel: Record<Category, string> = { works: "Works", sp: "Side Project", sh: "Side Hustle" };
