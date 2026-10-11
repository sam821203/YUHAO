export type Category = "works" | "sp" | "sh";

export type CaseStudy = {
  problem: string;
  problemItems?: string[];
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
  email: "sam821203@yahoo.com.tw",
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
    image: img("supplier-compliance-cyan.jpg", 1440, 720),
    tags: ["React", "TypeScript", "Zustand", "Ant Design", "AI Workflow"],
  },
  {
    slug: "semiconductor-monitor",
    featured: true,
    title: "半導體廠即時監控平台",
    info: "整合跨廠區數據追蹤 Wafer / Lot 請求與業務流程，以 Pass / Fail 與 Duration 指標快速定位生產瓶頸",
    category: "works",
    image: img("semiconductor-monitor-cyan.jpg", 1440, 720),
    tags: ["React", "Zustand", "AG Grid", "Hono.js", "MySQL", "PlantUML"],
  },
  {
    slug: "insightaero",
    featured: true,
    title: "InsightAero",
    info: "無人機任務監控平台：多機即時遙測、自訂地圖圖層、風場修正與 AI 診斷報告",
    category: "sp",
    image: img("insightAero.jpg", 1245, 603),
    tags: ["React", "TypeScript", "Zustand", "TanStack Query", "Google Maps", "WebSocket", "FastAPI", "PostgreSQL", "LangChain"],
    github: "https://github.com/sam821203/InsightAero",
  },
  {
    slug: "cht-web",
    title: "中華官網",
    info: "中華電信官網改版：依品牌設計準則獨立設計跨裝置 UI 與 Icon，以模組化模板與樣式建構 140+ 頁響應式頁面",
    category: "works",
    image: img("cht-web.jpg", 953, 540),
    tags: ["JavaScript", "SCSS", "Bootstrap 5", "Webpack", "Nunjucks", "Swiper", "Figma"],
    href: "https://www.cht.com.tw/zh-tw/home/cht",
  },
  {
    slug: "hisem",
    featured: true,
    title: "中華 HiSEM 資安管理系統",
    info: "重建廣告信（垃圾郵件）處理系統：郵件標頭分析、通知與停權／復話流程、風險客戶標註與統計報表",
    category: "works",
    image: img("hisem.jpg", 1440, 813),
    tags: ["Vue 3", "Vite", "PrimeVue", "Pinia", "Axios", "VeeValidate"],
  },
  {
    slug: "radiation-cloud",
    featured: true,
    title: "輻射防護雲化服務系統",
    info: "輻射作業動態監控：地圖監控與叢集標記、電子圍籬設定、歷史軌跡，以及業者與施工資訊查詢",
    category: "works",
    image: img("aeclice-web.jpg", 1909, 909),
    tags: ["Vue 3", "TypeScript", "Google Maps", "Element Plus", "Pinia", "Tailwind CSS"],
  },
  {
    slug: "etmall",
    title: "東森購物",
    info: "東森購物網活動頁、商品宮格模組與 EDM 模板：以設定檔驅動版位，圖片懶載入與載入效能調校",
    category: "works",
    image: img("etmall-front-design.jpg", 952, 540),
    tags: ["JavaScript", "jQuery", "Webpack", "Swiper", "RWD"],
    github: "https://github.com/sam821203/ehsn-front-design",
    href: "https://sam821203.github.io/ehsn-front-design/",
  },
  {
    slug: "ai-chatbot",
    title: "AI ChatBot",
    info: "AI 聊天應用：Ask / Agent 雙模式，Agent 可自動上網搜尋，支援多對話切換、本地保存、Markdown 安全渲染與對話匯出",
    category: "sp",
    image: img("ai-chat-assisant.jpg", 1723, 876),
    tags: ["Vue 3", "Vite", "Python", "Flask", "LangGraph", "LangChain", "OpenAI", "DOMPurify"],
    github: "https://github.com/sam821203/chat-bot",
    href: "https://chat-bot-green-three.vercel.app/",
  },
  {
    slug: "pdf-query",
    title: "PDF-query",
    info: "PDF 智慧問答：上傳後以自然語言提問，語意與關鍵字混合檢索，回答附來源頁碼並可點擊跳頁",
    category: "sp",
    image: img("pdf-query.jpg", 1440, 810),
    tags: ["Vue 3", "Vite", "Python", "FastAPI", "LangChain", "RAG", "Chroma", "OpenAI"],
    github: "https://github.com/sam821203/langchain-pdf-query",
  },
  {
    slug: "voiceverse",
    title: "VoiceVerse",
    info: "音樂分享平台：註冊登入、拖放上傳（含進度條）、歌曲管理與留言，內建播放器、無限捲動、中英雙語，並可安裝為 App",
    category: "sp",
    image: img("voice-verse.jpg", 1904, 1080),
    tags: ["Vue 3", "Vite", "Pinia", "Firebase", "Howler.js", "VeeValidate", "vue-i18n", "PWA", "Tailwind CSS"],
    github: "https://github.com/sam821203/VoiceVerse",
    href: "https://voice-verse.vercel.app/",
  },
  {
    slug: "pulse",
    title: "Pulse 股票分析平台",
    info: "台股即時看盤：即時推送分時走勢與量能圖、五檔委買賣與內外盤比",
    category: "sh",
    image: img("pulse-cyan.jpg", 1440, 720),
    tags: ["Vue 3", "TypeScript", "Pinia", "PrimeVue", "D3.js", "Socket.IO", "Tailwind CSS", "Vitest"],
    github: "https://github.com/sam821203/Pulse-frontend",
  },
];

export const about = [
  "我是黃宇浩，擁有 4 年半前端開發經驗，專精 React／Vue 與 TypeScript，具備大型資料介面效能優化與前後端整合（Hono.js API、資料庫設計）經驗。參與過供應商合規管理、企業內部營運系統與監控平台，擅長將高資料量系統轉化為可快速判讀的決策資訊。",
  "東海大學資工畢業後，我赴英國 University of Reading 攻讀文字設計與圖像傳播碩士，以 Distinction 畢業。這段跨領域訓練讓我特別重視資訊層級與使用者理解成本，習慣從「如何讓使用者在最短時間內做出正確判斷」來設計介面。",
  "目前擔任前端技術負責人，主導架構設計與 Code Review、帶領新進工程師，並制定 AI 協作開發規範；過去也曾擔任內部講師，習慣從系統與團隊整體的角度思考問題。",
];

export const skills: { category: string; items: string[] }[] = [
  { category: "Core", items: ["React", "Vue 3", "TypeScript", "JavaScript (ES6+)"] },
  { category: "State & Data", items: ["Zustand", "Pinia", "TanStack Query", "Axios"] },
  { category: "Styling & UI", items: ["Tailwind CSS", "SCSS", "Ant Design", "shadcn/ui", "Element Plus", "PrimeVue", "RWD", "Figma"] },
  { category: "Data Viz & Maps", items: ["D3.js", "Recharts", "Chart.js", "AG Grid", "Google Maps API", "Canvas"] },
  { category: "Tooling", items: ["Vite", "Webpack", "Gulp", "ESLint / Prettier", "Vitest", "PWA"] },
  { category: "Also Familiar", items: ["Angular", "RxJS", "Node.js / Nest.js", "Hono.js", "FastAPI", "WebSocket", "LangChain / LangGraph"] },
];

export const experience: { title: string; company?: string; period?: string; desc: string; tags: string[] }[] = [
  { title: "設備供應商合規追蹤平台", company: "緯創軟體", period: "2025.06 — Present", desc: "前端技術負責人：從零規劃前端架構、制定開發規範與自動化品質機制，主導 Code Review 並帶領新進工程師。", tags: ["React", "TypeScript", "Zustand", "Ant Design", "AI Workflow"] },
  { title: "半導體廠即時監控平台", company: "緯創軟體", period: "2025.06 — Present", desc: "前端工程師：負責資料查詢的介面與流程設計、複合查詢、多頁籤工作台與工單流程開發，並參與資料表設計與 API 開發。", tags: ["React", "Zustand", "AG Grid", "Hono.js", "MySQL", "PlantUML"] },
  { title: "中華 HiSEM 資安管理系統", company: "資拓宏宇", period: "2023.11 — 2025.05", desc: "規劃 Vue 3 前端架構與共用元件，封裝 Axios 錯誤處理與 XSRF / XSS 防護，實作角色權限與表單驗證。", tags: ["Vue 3", "PrimeVue", "Pinia"] },
  { title: "輻射防護雲化服務系統", company: "資拓宏宇", period: "2023.11 — 2025.05", desc: "中途加入，負責動態監控模組：以 Vue 3 + TypeScript 開發地圖監控、電子圍籬、歷史軌跡與業者、施工資訊查詢。", tags: ["Vue 3", "TypeScript", "Google Maps"] },
  { title: "中華電信官網", company: "資拓宏宇", period: "2023.11 — 2025.05", desc: "依品牌設計準則獨立設計跨裝置 UI，並以 Webpack + Nunjucks 模板與模組化 SCSS 建構 140+ 頁 RWD 官網。", tags: ["SCSS", "Bootstrap 5", "Webpack", "Figma"] },
  { title: "東森購物", company: "東森得易購", period: "2022.04 — 2023.10", desc: "負責活動頁與商品 API 宮格模組、EDM 模板開發並調校 Core Web Vitals，也擔任內部講師教授 HTML / CSS 與 Design Sprint。", tags: ["JavaScript", "jQuery", "Webpack"] },
];

const caseStudies: Record<string, CaseStudy> = {
  "semiconductor-monitor": {
    problem: "平台整合五個子系統，服務跨廠區分析與維運人員，原有三個痛點：",
    problemItems: [
      "列表資料量龐大，主管難以找到所需資料。",
      "返回列表需重設篩選，難以多筆對照。",
      "服務配置變更缺乏審核與回滾機制。",
    ],
    role: "前端工程師：專案開案後加入，參與需求釐清與架構討論，負責資料查詢的介面與流程設計、複合查詢、多頁籤工作台與工單流程開發，並參與資料表設計與 API 開發，與同仁互相 Code Review。",
    strategies: [
      {
        label: "資料｜查詢與呈現",
        items: [
          "客製化時間選擇器搭配多重查詢條件，快速縮小資料範圍。",
          "以 Recharts 設計篩選結果的監控圖表與操作流程，讓 Pass / Fail 與 Duration 一眼可辨。",
        ],
      },
      {
        label: "狀態｜多頁籤與持久化",
        items: [
          "細節以頁籤開啟，可多筆並列對照，列表篩選條件不會遺失。",
          "頁籤與表格狀態持久化，重新整理後完整還原；時區、語系與主題統一管理。",
          "配合狀態保留，以拆分大型套件維持載入速度。",
        ],
      },
      {
        label: "流程｜受控的配置變更",
        items: [
          "將配置變更轉為提單、審核、自動下發、部署驗證、可回滾的流程。",
          "下發期間自動追蹤進度，完成即停止；衝突與錯誤提供明確引導，而非僅顯示錯誤訊息。",
        ],
      },
    ],
    result: [
      "主管可透過複合條件快速鎖定所需資料。",
      "細節可多筆並開對照，分析脈絡不中斷。",
      "配置變更可審核、可追溯、可回滾，降低誤改風險。",
      "五個子系統整合為一致入口。",
    ],
  },
  "supplier-compliance": {
    problem: "各供應商機台的合規資料散落在格式不一的 Excel，難以統一追蹤與比較。",
    role: "前端技術負責人：從零規劃前端架構、制定開發規範與自動化品質機制，主導 Code Review、帶新進工程師 Pair Programming，並直接與使用單位做需求分析與 Wireframe。",
    strategies: [
      {
        label: "架構｜模組化與統一權限控管",
        items: [
          "將集中於單一頁面的功能拆分為模組，隔離新需求對既有功能的影響。",
          "以角色權限控管頁面與元件層級顯示，並整合企業 SSO 自動續期 Token。",
          "以 Axios 攔截器與 TanStack Query 統一 JWT 注入、401/403 與錯誤重試。",
        ],
      },
      {
        label: "流程｜人機協作自動化",
        items: [
          "任務啟動時自動注入規範與自查清單，讓人與 AI 依同一標準開發。",
          "依相依關係精準載入程式碼以節省 Token，高風險操作須經授權。",
          "以 ESLint、Husky 與自訂規則在提交時攔截不合規程式碼，並以 Vitest 撰寫單元測試。",
        ],
      },
      {
        label: "元件｜Design Token 與載入優化",
        items: [
          "三層 Token（基礎/語意/元件），單一色彩源即可切換深淺主題。",
          "依路由與相依套件分包，避免大型套件拖慢首屏。",
        ],
      },
      {
        label: "資料｜匯入流程與指標可視化",
        items: [
          "分步引導上傳，隨時掌握目前進度。",
          "解析多來源、多層表頭的 Excel 並驗證，再整合為統一的資料表。",
          "以 Recharts 呈現趨勢、分布與達標率的 Dashboard。",
        ],
      },
    ],
    result: [
      "新需求有明確的歸屬模組，降低回歸風險。",
      "以 AI workflow（Rule/Skill/Hook）把關規範，Code Review 聚焦業務邏輯與架構。",
      "新頁面沿用共用元件，視覺一致並減少返工。",
      "多來源 Excel 整合後，各供應商合規狀況可即時追蹤與比較。",
    ],
  },
  insightaero: {
    problem: "任務監控需在同一畫面掌握多架無人機的即時位置、遙測、氣象與任務狀態，並在結案時產出可讀的飛行報告。",
    role: "個人專案，獨立完成前後端：前端架構、地圖整合、即時資料流與 UI/UX，以及 FastAPI 模擬與 AI 服務。",
    challenges: ["多架無人機遙測同時湧入時，地圖圖層的建立、更新與清除", "伺服器狀態（任務、機隊）與即時串流狀態的同步", "高資訊密度介面在深／淺色主題下的可讀性"],
    solutions: [
      { label: "架構", text: "型別化 API 層與自訂 hooks 分層：TanStack Query 管理伺服器狀態、Zustand 管理 UI 狀態，任務抵達的 WebSocket 事件觸發查詢失效，執行中任務另以條件式輪詢補強。" },
      { label: "元件", text: "以 Google Maps 自訂覆蓋層自製無人機標記，搭配軌跡、起訖點與任務路線圖層，支援主題切換與選取狀態。" },
      { label: "效能", text: "保留各機地圖圖層並差異更新而非重建，HUD 與衍生資料以 memo 化避免多餘渲染。" },
      { label: "UX", text: "可拖曳側欄、深淺色主題、Places 地址自動完成、任務暫停／續飛／終止，以及 AI 導航診斷浮窗。" },
    ],
    result: "完成從任務建立、多機即時監控到 AI 結案報告的完整流程，並以 16 個 pytest 單元測試驗證風場修正與電量規劃演算法。",
  },
  hisem: {
    problem: "舊系統架構老舊，需以新架構重建廣告信處理系統，讓客服分析郵件標頭、寄發通知信、執行停權與復話，並查詢案件與統計報表。",
    role: "前端架構規劃與核心開發：專案架構、共用元件、API 層與權限流程，並負責頁面開發。",
    challenges: ["多種案件列表與報表需要一致的分頁、排序與查詢行為", "兼顧資安防護（XSRF、XSS）與統一錯誤處理", "多角色登入與角色切換"],
    solutions: [
      { label: "架構", text: "依領域拆分 API、路由與 Store 模組，路由懶載入，並建立多環境建置設定。" },
      { label: "元件", text: "封裝 Base 共用元件並自動全域註冊，另建 Alert／Confirm 等 Modal 元件，附元件展示頁供團隊查閱。" },
      { label: "資安", text: "Axios 統一攜帶 XSRF Token、回應內容跳脫角括號防 XSS，並依狀態碼集中處理 401 導回登入、錯誤頁與 Toast。" },
      { label: "效能", text: "表格採 server-side 分頁排序，路由層級 code-splitting，並以 visualizer 分析 bundle。" },
      { label: "UX", text: "VeeValidate 全域註冊驗證規則與中文錯誤訊息，並提供角色切換對話框。" },
    ],
    result: "建立可擴充的前端基礎，後續頁面皆沿用共用元件與 API 規範開發。",
  },
  "radiation-cloud": {
    problem: "需在地圖上掌握各業者的輻射施工位置，設定電子圍籬範圍與效期，並查詢業者、施工資訊與歷史紀錄。",
    role: "前端開發（中途加入）：負責動態監控模組的監控資訊、業者資訊、施工資訊、電子圍籬與歷史軌跡五個頁面。",
    challenges: ["地圖上大量點位的可讀性", "圍籬範圍與地圖視野同步"],
    solutions: [
      { label: "元件", text: "以 vue3-google-map 繪製施工點位標記與電子圍籬範圍。" },
      { label: "工具", text: "抽出共用地圖工具：依圍籬圓心與半徑自動調整地圖視野，並提供一鍵開啟 Google 地圖定位。" },
      { label: "效能", text: "監控地圖以叢集標記收合密集點位，降低視覺與渲染負擔。" },
      { label: "UX", text: "電子圍籬可設定範圍與效期；查詢支援業者、通報文號、執照、車號與施工日期。" },
    ],
    result: "完成動態監控模組五個頁面，圍籬視野計算與地圖定位抽成共用工具，供電子圍籬與歷史軌跡共用。",
  },
};

for (const p of projects) {
  if (caseStudies[p.slug]) p.caseStudy = caseStudies[p.slug];
}

export const categoryLabel: Record<Category, string> = { works: "Works", sp: "Side Project", sh: "Side Hustle" };
