/*
 ** TODO: 修改電梯注意事項
 * 1. 修改左側電梯名稱 & 連結
 * 2. 離線測試與線上icon要分開切換
 */
/*
 ** TODO: 切換離線或線上的左電梯小網icon
 * 1. 註解掉或false可以使左電梯小網三顆icon使用相對路徑，離線檢查用
 * 2. true時，會抓navContent第一項的linkUrl（主會場網址）做成絕對路徑
 * 3. 要這樣作是為了霸道電梯在禮包內生成時要用絕對路徑連回主活動要圖片( 不然禮包內會變成相對路徑，找不到圖片 )
 */
var onLineIcon = true;

$(function () {
  /**
   * TODO: 選填右電梯呈現樣式
   * @param {string} rightStyle - 固定單字如下，若不填或填非設定的單字，則不會報錯也沒有動畫
   * 'fade-in' - 原地淡入
   * 'left-in' - 從螢幕左邊飛入
   * 'up-in' - 從下方往上淡入
   */
  var rightStyle = "left-in";

  /*
   ** TODO: 電梯DATA ******************
   */
  // 左側電梯-活動-大網
  var navContent = [
    {
      linkUrl: "https://media.etmall.com.tw/sp/16426/m/index.html",
      words: "主會場：爸氣付清節",
      target: "",
    },
    {
      linkUrl: "https://media.etmall.com.tw/sp/15632/m/index.html",
      words: "新會員送豪禮",
      target: "",
    },
    {
      linkUrl: "https://www.etmall.com.tw/Activity/GroupSale?linkNameEv3linkName",
      words: "幸福集氣購",
      target: "",
    },
    {
      linkUrl: "https://media.etmall.com.tw/sp/15748/m/index.html",
      words: "銀行回饋",
      target: "",
    },
  ];
  // 左側電梯-活動-小網
  var navContent_m = [
    {
      linkUrl: "https://media.etmall.com.tw/sp/16426/m/index.html",
      words: "主會場：爸氣付清節",
      target: "",
    },
    {
      linkUrl: "https://media.etmall.com.tw/sp/15632/m/index.html",
      words: "新會員送豪禮",
      target: "",
    },
    {
      linkUrl: "https://www.etmall.com.tw/Activity/GroupSale?linkNameEv3linkName",
      words: "幸福集氣購",
      target: "",
    },
    {
      linkUrl: "https://media.etmall.com.tw/sp/15748/m/index.html",
      words: "銀行回饋",
      target: "",
    },
  ];
  // 左側電梯-活動-App
  var navContentApp = [
    { 
      linkUrl:
        "etmall://open?pgid=44&tb=0&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f16426%2fm%2fapp.html&t=%e7%88%b8%e6%b0%a3%e4%bb%98%e6%b8%85%e7%af%80%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9",
      words: "主會場：爸氣付清節",
      target: "",
    },
    {
      linkUrl:
        "etmall://open?pgid=44&tb=0&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f15632%2fm%2fapp.html&t=7%e6%9c%88%e6%96%b0%e6%9c%83%e5%93%a1%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9",
      words: "新會員送豪禮",
      target: "",
    },
    {
      linkUrl:
        "etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FGroupSale",
      words: "幸福集氣購",
      target: "",
    },
    {
      linkUrl:
        "etmall://open?pgid=44&tb=0&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f15748%2fm%2fapp.html&t=8%e6%9c%88%e9%8a%80%e8%a1%8c%e7%b8%bd%e8%a6%bd%e9%a0%81%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9",
      words: "銀行回饋",
      target: "",
    },
  ];

  // 左側電梯-品牌-大小網
  var navContent_brand = [
    { // 1
      linkUrl: "https://media.etmall.com.tw/sp/16026/m/index.html",
      words: "日用",
      target: "",
    },
    { // 2
      linkUrl: "https://media.etmall.com.tw/sp/15433/m/index.html",
      words: "美食",
      target: "",
    },
    { // 3
      linkUrl: "https://media.etmall.com.tw/sp/15152/m/index.html",
      words: "傢寢",
      target: "",
    },
    { // 4
      linkUrl: "https://media.etmall.com.tw/sp/15494/m/index.html",
      words: "流1SP",
      target: "",
    },
    { // 5
      linkUrl: "https://media.etmall.com.tw/sp/15819/m/index.html",
      words: "鞋包",
      target: "",
    },
    { // 6
      linkUrl: "https://media.etmall.com.tw/sp/9400/m/index.html",
      words: "運動",
      target: "",
    },
    { // 7
      linkUrl: "https://media.etmall.com.tw/sp/15263/m/index.html",
      words: "旅遊",
      target: "",
    },
    { // 8
      linkUrl: "https://media.etmall.com.tw/sp/14801/m/index.html",
      words: "寵物",
      target: "",
    },
    { // 9
      linkUrl: "https://media.etmall.com.tw/sp/16016/m/index.html",
      words: "婦幼",
      target: "",
    },
    { // 10
      linkUrl: "https://media.etmall.com.tw/sp/15837/m/index.html",
      words: "美妝",
      target: "",
    },
    { // 11
      linkUrl: "https://media.etmall.com.tw/sp/16039/m/index.html",
      words: "保健",
      target: "",
    },
    { // 12
      linkUrl: "https://media.etmall.com.tw/sp/10615/m/index.html",
      words: "冷氣",
      target: "",
    },
    { // 13
      linkUrl: "https://media.etmall.com.tw/sp/10532/m/index.html",
      words: "風扇",
      target: "",
    },
    { // 14
      linkUrl: "https://media.etmall.com.tw/sp/10765/m/index.html",
      words: "家電",
      target: "",
    },
    { // 15
      linkUrl: "https://media.etmall.com.tw/sp/16037/m/index.html",
      words: "通訊",
      target: "",
    },
    { // 16
      linkUrl: "https://media.etmall.com.tw/sp/16038/m/index.html",
      words: "3C",
      target: "",
    },
    { // 17
      linkUrl: "https://media.etmall.com.tw/sp/13058/m/index.html",
      words: "電玩",
      target: "",
    },
    { // 18
      linkUrl: "https://media.etmall.com.tw/sp/14307/m/index.html",
      words: "商城",
      target: "",
    },
    { // 19
      linkUrl: "https://media.etmall.com.tw/sp/4369/m/index.html",
      words: "Apple",
      target: "",
    },
    { // 20
      linkUrl: "https://media.etmall.com.tw/sp/16343/m/index.html",
      words: "離島",
      target: "",
    },
  ];

  // 左側電梯-品牌-App
  var navContentApp_brand = [
    { // 1
      linkUrl:
        "etmall://open?pgid=44&tb=0&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f16026%2fm%2fapp.html&t=%e4%bd%a0%e6%b6%88%e8%b2%bb%e6%88%91%e8%b2%b7%e5%96%ae%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9",
      words: "日用",
      target: "",
    },
    { // 2
      linkUrl:
        "etmall://open?pgid=44&tb=0&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f15433%2fm%2fapp.html",
      words: "美食",
      target: "",
    },
    { // 3
      linkUrl:
        "etmall://open?pgid=44&tb=0&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f15152%2fm%2fapp.html",
      words: "傢寢",
      target: "",
    },
    { // 4
      linkUrl:
        "etmall://open?pgid=44&tb=0&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f15494%2fm%2fapp.html&t=%e6%9c%8d%e9%a3%bex%e5%85%a7%e8%a1%a3+%e5%a4%8f%e6%97%a5%e6%8e%a1GO%e8%b6%a3%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9",
      words: "流1SP",
      target: "",
    },
    { // 5
      linkUrl:
        "etmall://open?pgid=44&tb=0&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f15819%2fm%2fapp.html&t=7%2f29-8%2f12_%e6%b5%812SP(%e6%9d%b1)%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9",
      words: "鞋包",
      target: "",
    },
    { // 6
      linkUrl:
        "etmall://open?pgid=44&tb=0&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f9400%2fm%2fapp.html",
      words: "運動",
      target: "",
    },
    { // 7
      linkUrl:
        "etmall://open?pgid=44&tb=0&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f15263%2fm%2fapp.html",
      words: "旅遊",
      target: "",
    },
    { // 8
      linkUrl:
        "etmall://open?pgid=44&tb=0&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f14801%2fm%2fapp.html&t=%e5%af%b5%e7%89%a9%e9%a4%a8_%e6%af%9b%e5%ad%a9%e8%b3%bc%e7%89%a9%e8%b6%a3_%e6%bb%bf%e9%a1%8d%e6%8a%bd%e5%a5%bd%e7%a6%ae%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9",
      words: "寵物",
      target: "",
    },
    { // 9
      linkUrl:
        "etmall://open?pgid=44&tb=0&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f16016%2fm%2fapp.html&t=%e5%85%a5%e5%ad%b8%e6%ba%96%e5%82%99%ef%bc%81%e9%96%8b%e5%ad%b8%e7%94%a8%e5%93%81%e7%89%b9%e6%90%9c%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9",
      words: "婦幼",
      target: "",
    },
    { // 10
      linkUrl:
        "etmall://open?pgid=44&tb=0&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f15837%2fm%2fapp.html&t=%e8%89%b7%e5%a4%8f%e4%bf%9d%e9%a4%8a+%e6%8b%af%e6%95%91%e3%80%8e%e8%82%8c%e3%80%8f%e6%b8%b45%e6%8a%98up%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9",
      words: "美妝",
      target: "",
    },
    { // 11
      linkUrl:
        "etmall://open?pgid=44&tb=0&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f16039%2fm%2fapp.html&t=%e5%ae%88%e7%88%b6%e5%81%a5%e5%ba%b7%e2%98%85%e6%bb%bf%e9%a1%8d%e7%99%bb%e8%a8%98%e6%8a%bd%e6%9d%b1%e6%a3%ae%e5%b9%a3%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9",
      words: "保健",
      target: "",
    },
    { // 12
      linkUrl:
        "etmall://open?pgid=44&tb=0&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f10615%2fm%2fapp.html",
      words: "冷氣",
      target: "",
    },
    { // 13
      linkUrl:
        "etmall://open?pgid=44&tb=0&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f10532%2fm%2fapp.html",
      words: "風扇",
      target: "",
    },
    { // 14
      linkUrl:
        "etmall://open?pgid=44&tb=0&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f10765%2fm%2fapp.html",
      words: "家電",
      target: "",
    },
    { // 15
      linkUrl:
        "etmall://open?pgid=44&tb=0&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f16037%2fm%2fapp.html&t=%e7%b5%a6%e4%bd%a0%e6%88%91%e7%9a%84%e6%84%9b%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9",
      words: "通訊",
      target: "",
    },
    { // 16
      linkUrl:
        "etmall://open?pgid=44&tb=0&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f16038%2fm%2fapp.html&t=%e8%81%b7%e5%a0%b4%e5%8b%87%e8%80%85%e5%a4%a7%e5%86%92%e9%9a%aa++%e8%a3%9d%e5%82%99%e6%9c%80%e4%bd%8e5%e6%8a%98%e8%b5%b7%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9",
      words: "3C",
      target: "",
    },
    { // 17
      linkUrl:
        "etmall://open?pgid=44&tb=0&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f13058%2fm%2fapp.html&t=Switch%e7%96%ab%e8%b5%b7%e5%ae%85%e5%ae%b6%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9",
      words: "電玩",
      target: "",
    },
    { // 18
      linkUrl:
        "etmall://open?pgid=44&tb=0&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f14307%2fm%2fapp.html&t=%e7%92%b0%e7%90%83%e5%9a%b4%e9%81%b8-%e6%9d%b1%e6%a3%ae%e5%95%86%e5%9f%8e%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9",
      words: "商城",
      target: "",
    },
    { // 19
      linkUrl:
        "etmall://open?pgid=44&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f4369%2fm%2fapp.html&t=Apple%e6%97%97%e8%89%a6%e9%a4%a8%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9",
      words: "Apple",
      target: "",
    },
    { // 20
      linkUrl:
        "etmall://open?pgid=44&tb=0&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f16343%2fm%2fapp.html&t=8%e6%9c%88%e9%9b%a2%e5%b3%b6%e9%85%8d%e9%80%81%e5%85%8d%e9%81%8b%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9",
      words: "離島",
      target: "",
    },
  ];
  // 電梯DATA  /.END

  // 小網下方固定按鈕(文案、連結)
  //- TODO 絕對路徑
  var iconName = [
    {
      linkUrl: "",
      imageUrl: "icon-1.png",
      words: "分會場",
    },
    {
      linkUrl: "https://media.etmall.com.tw/sp/16426/m/index.html",
      APPlinkUrl:
        "etmall://open?pgid=44&tb=0&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f16426%2fm%2fapp.html&t=%e7%88%b8%e6%b0%a3%e4%bb%98%e6%b8%85%e7%af%80%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9",
      imageUrl: "icon-2.png",
      words: "主會場",
    },
    {
      linkUrl: "",
      imageUrl: "icon-3.png",
      words: "相關活動",
    },
  ];

  /*
   ** 新增小網彈窗
   */
  $("body").append(
    '<div class="elevatorHome js--main--dialog" id="elevatorHome_2"></div>'
  );
  $("body").addClass("safe-area-padding-bottom");
  $("head").append(
    '<meta name="viewport" content="width=device-width,initial-scale=1.0,viewport-fit=cover">'
  );

  /*
   ** 新增小網固定欄
   */
  function addFixedBottomNav() {
    $("body").append('<div class="footer__box" id="footerBox"></div>');
    var fixedBottomNav = "";
    fixedBottomNav += '<div class="footer__box">';
    fixedBottomNav += '<ul class="footer__ul">';
    fixedBottomNav +=
      '<li class="footer__list js-ElevatorBtn-m" data-dialog="elevatorHome_2">';
    fixedBottomNav += '<img src="' + iconName[0].imageUrl + '" alt="">';
    fixedBottomNav += "<p>" + iconName[0].words + "</p>";
    // el.linkUrl += '?linkNameEv' + (index + 1) + 'linkName';
    fixedBottomNav += "</li>";
    fixedBottomNav += '<li class="footer__list icon__main">';
    fixedBottomNav += '<a href="' + iconName[1].linkUrl + '">';
    fixedBottomNav += '<img src="' + iconName[1].imageUrl + '" alt="">';
    fixedBottomNav += "<p>" + iconName[1].words + "</p>";
    fixedBottomNav += "</a></li>";
    fixedBottomNav +=
      ' <li class="footer__list js-ElevatorBtn-m" data-dialog="elevatorHome">';
    fixedBottomNav += '<img src="' + iconName[2].imageUrl + '" alt="">';
    fixedBottomNav += "<p>" + iconName[2].words + "</p>";
    fixedBottomNav += "</li>";
    fixedBottomNav += "</ul></div>";

    $("#footerBox").html(fixedBottomNav);
  }

  addFixedBottomNav();
  /*
   ** 新增小網固定欄 END
   */

  /*
   ** 行銷電梯：判斷左右兩邊電梯是否出現
   */
  var leftNav = true;
  var rightNav = true;

  // 商品頁如果沒有離線右電梯，則共用電梯時也不開離線右電梯
  if (window.notRightElevator) rightNav = false;

  if (!leftNav && !rightNav) return false;

  var _window = $(window),
    _document = $(document),
    $htmlBody = $("html, body");
  var $winWt = $(document).width();

  var $spWrap = $("#elevatorHome");

  var $spFixedNav = $("#spFixedNav");
  // 配合css 決定大小網寬度
  var $screenChangeWt = 1212;

  var goTopEffect = function (selectors) {
    selectors.on("click", function (e) {
      e.preventDefault();
      $htmlBody.animate(
        {
          scrollTop: 0,
        },
        300
      );
    });
  };

  function addLogo() {
    var $spWrap = $("#spWrap");
    var $spFrame = $spWrap.find(".sp--frame");
    var logo =
      '<a class="logo__sp" href="//www.etmall.com.tw/" target="_blank"></a>';
    $spFrame.append(logo);
  }

  function addSnow() {
    var $spWrap = $("#spWrap");
    var $spFrame = $spWrap.find(".sp--frame");
    var snowEl = '<div id="spSnowFall" class="sp-snow__wrap"></div>';
    $spFrame.append(snowEl);
  }

  /*
   ** 增加參數
   */
  function addLinkName() {
    // 從linkData.js取得電梯連結的網址並加上偵測碼 目的:判斷是哪一頁
    navContent.forEach(function (el, index) {
      el.linkUrl += "?linkNameEv" + (index + 1) + "linkName";
    });
    navContentApp.forEach(function (el, index) {
      var detectString = "%3FlinkNameEv" + (index + 1) + "linkName";
      var newLink = "";
      // judge 是否為縮網址 TODO 共用主視覺未測
      var isNotAbbreviation = el.linkUrl.match("app.html");
      if (isNotAbbreviation) {
        newLink = el.linkUrl.replace("app.html", "app.html" + detectString);
        el.linkUrl = newLink;
      } else {
        // el.linkUrl += detectString;
        // newLink = el.linkUrl.replace('%3F', '?');
        // el.linkUrl;
        // console.log(navContentApp);
      }
    });

    navContent_brand.forEach(function (el, index) {
      el.linkUrl += "?linkNameEv" + (index + 20) + "linkName";
    });
    navContentApp_brand.forEach(function (el, index) {
      var detectString = "%3FlinkNameEv" + (index + 20) + "linkName";
      var newLink = "";
      // judge 是否為縮網址 TODO 共用主視覺未測
      var isNotAbbreviation = el.linkUrl.match("app.html");
      if (isNotAbbreviation) {
        newLink = el.linkUrl.replace("app.html", "app.html" + detectString);
        el.linkUrl = newLink;
      }
    });
  }

  addLinkName();

  var url = window.location;
  var urlHref = url.href;
  var getSearch = urlHref.split("linkName")[1];
  /*
   ** 左邊電梯(大網)
   */
  function spScrollNav() {
    if (!leftNav) return false;

    var $spWrap = $("#elevatorHome");

    function buildNav(isAppNav, isAppNav_brand) {
      var navHtml = "";

      // navHtml += '<div class="sp-fixed__nav_outframe">';
      navHtml += '<nav id="spFixedNav" class="sp-fixed__nav">';
      navHtml += '<ul class="sp-nav_ul js-nav_ul">';
      navHtml +=
        '<li class="sp-nav__home"><a href="' +
        isAppNav[0].linkUrl +
        '" title="回主會場" target="' +
        isAppNav[0].target +
        '">回主會場</a></li>';

      /*
       ** judge which url is active !!
       * 記得要在url後面加上?linkName="value"
       */
      // var url = window.location;
      // var urlHref = url.href;
      // var getSearch = urlHref.split("linkName")[1];
      for (var i = 1; i < isAppNav.length; i++) {
        var getSearch1 = isAppNav[i].linkUrl.split("linkName")[1];

        // 抓取網址相同 && 自己的網址切割後不是空值
        if (getSearch === getSearch1 && getSearch1 != undefined) {
          navHtml +=
            '<li class="sp-nav__' +
            i +
            ' js-sp__nav__all sp-nav_g1"><a href="' +
            isAppNav[i].linkUrl +
            '" title="' +
            isAppNav[i].words +
            '"  target="' +
            isAppNav[i].target +
            '" class="active">' +
            isAppNav[i].words +
            "</a></li>";
        } else {
          navHtml +=
            '<li class="sp-nav__' +
            i +
            ' js-sp__nav__all sp-nav_g1"><a href="' +
            isAppNav[i].linkUrl +
            '" title="' +
            isAppNav[i].words +
            '" target="' +
            isAppNav[i].target +
            '">' +
            isAppNav[i].words +
            "</a></li>";
        }
      }

      /*
       ** 分館
       */
      navHtml += '<li class="sp-nav__home_2"><a href="">精選品類</a></li>';
      for (var i = 0; i < isAppNav_brand.length; i++) {
        // i=0，進迴圈一次跑兩個; i=1，時不執行
        if (i % 2 === 0) {
          var getSearch2 = isAppNav_brand[i].linkUrl.split("linkName")[1];
          var getSearch3 = isAppNav_brand[i + 1].linkUrl.split("linkName")[1];
          // 大網的sp-nav_g2
          navHtml +=
            '<li class="sp-nav__2' + i + ' js-sp__nav__all sp-nav_g2">';
          isThisPage();
          navHtml += "</li>";
        }
        // 抓取網址相同 && 自己的網址切割後不是空值
      }
      navHtml += '<li class="sp-nav__bottom"></li>';
      navHtml += "</ul>";
      navHtml += "</nav>";

      elevatorHomeAddWhere();

      /*
       ** 跳到那一頁的時候看是哪一個URL，且亮燈
       */
      function isThisPage() {
        var first = isAppNav_brand[i];
        var second = isAppNav_brand[i + 1];
        if (getSearch === getSearch2 && getSearch2 != undefined) {
          navHtml += clickActive(first, true);
          navHtml += clickActive(second, false);
        } else if (getSearch === getSearch3 && getSearch3 != undefined) {
          navHtml += clickActive(first, false);
          navHtml += clickActive(second, true);
        } else {
          navHtml += clickActive(first, false);
          navHtml += clickActive(second, false);
        }
      }

      function clickActive(obj, active) {
        if (active) {
          return (
            '<a href="' +
            obj.linkUrl +
            '" title="' +
            obj.words +
            '" target="' +
            obj.target +
            '" class="nav_bg2 active">' +
            obj.words +
            "</a>"
          );
        } else {
          return (
            '<a href="' +
            obj.linkUrl +
            '" title="' +
            obj.words +
            '" target="' +
            obj.target +
            '" class="nav_bg2">' +
            obj.words +
            "</a>"
          );
        }
      }

      /*
       ** 電梯加在後面
       */
      function elevatorHomeAddWhere() {
        var parent = $("#elevatorHome");
        var body = $("body");
        // var tag = document.createElement('a');
        if (parent) {
          parent.html(navHtml);
        } else {
          body.html(navHtml);
        }
      }
    }

    /*
     ** 分館活動(小網)
     */
    function buildMobileNav(isAppNav_brand) {
      var navHtml = "";

      function buildＭoblieBrandConent() {
        navHtml += '<nav id="spFixedNav" class="sp-fixed__nav">';
        /*
         ** 分館
         */
        // navHtml += '<p class="sp-nav__home_2">精選品類</p>';
        navHtml += '<ul class="sp-nav_ul js-nav_ul sp-nav_ul-1">';
        for (var i = 1; i < isAppNav_brand.length; i++) {
          // i=0，進迴圈一次跑兩個; i=1，時不執行

          var getSearch2 = isAppNav_brand[i].linkUrl.split("linkName")[1];

          // 抓取網址相同 && 自己的網址切割後不是空值
          if (getSearch === getSearch2 && getSearch2 != undefined) {
            navHtml +=
              '<li class="sp-nav__2' +
              i +
              ' js-sp__nav__all sp-nav_g1 active">\
                                <a href="' +
              isAppNav_brand[i].linkUrl +
              '" title="' +
              isAppNav_brand[i].words +
              '" target="' +
              isAppNav_brand[i].target +
              '" class="nav_bg2">' +
              isAppNav_brand[i].words +
              "</a>\
                                </li>";
          } else {
            navHtml +=
              '<li class="sp-nav__2' +
              i +
              ' js-sp__nav__all sp-nav_g1">\
                                <a href="' +
              isAppNav_brand[i].linkUrl +
              '" title="' +
              isAppNav_brand[i].words +
              '" target="' +
              isAppNav_brand[i].target +
              '" class="nav_bg2">' +
              isAppNav_brand[i].words +
              "</a>\
                                </li>";
          }
        }
        navHtml += "</ul>";
        navHtml += "</nav>";
      }

      buildＭoblieBrandConent();
      elevatorHomeAddWhere();

      /*
       ** 跳到那一頁的時候看是哪一個URL，且亮燈
       */
      function isThisPage() {
        var first = isAppNav_brand[i];
        var second = isAppNav_brand[i + 1];
        if (getSearch === getSearch2 && getSearch2 != undefined) {
          navHtml += clickActive(first, true);
          navHtml += clickActive(second, false);
        } else if (getSearch === getSearch3 && getSearch3 != undefined) {
          navHtml += clickActive(first, false);
          navHtml += clickActive(second, true);
        } else {
          navHtml += clickActive(first, false);
          navHtml += clickActive(second, false);
        }
      }

      function clickActive(obj, active) {
        if (active) {
          return (
            '<a href="' +
            obj.linkUrl +
            '" title="' +
            obj.words +
            '" target="' +
            obj.target +
            '" class="nav_bg2 active">' +
            obj.words +
            "</a>"
          );
        } else {
          return (
            '<a href="' +
            obj.linkUrl +
            '" title="' +
            obj.words +
            '" target="' +
            obj.target +
            '" class="nav_bg2">' +
            obj.words +
            "</a>"
          );
        }
      }

      /*
       ** 電梯加在後面
       */
      function elevatorHomeAddWhere() {
        var parent = $("#elevatorHome");
        var body = $("body");
        // var tag = document.createElement('a');
        if (parent) {
          parent.html(navHtml);
        } else {
          body.html(navHtml);
        }
      }
    }

    // 小網活動
    function buildMobileNav_2(isAppNav) {
      var navHtml = "";

      function buildＭoblieActivityConent() {
        navHtml += '<nav id="spFixedNav" class="sp-fixed__nav">';
        navHtml += '<ul class="sp-nav_ul js-nav_ul sp-nav_ul-1">';

        /*
         ** judge which url is active !!
         * 記得要在url後面加上?linkName="value"
         */
        var url = window.location;
        var urlHref = url.href;
        var getSearch = urlHref.split("linkName")[1];
        for (var i = 0; i < isAppNav.length; i++) {
          var getSearch1 = isAppNav[i].linkUrl.split("linkName")[1];

          // 抓取網址相同 && 自己的網址切割後不是空值
          if (getSearch === getSearch1 && getSearch1 != undefined) {
            navHtml +=
              '<li class="sp-nav__' +
              i +
              ' js-sp__nav__all sp-nav_g1 active"><a href="' +
              isAppNav[i].linkUrl +
              '" title="' +
              isAppNav[i].words +
              '"  target="' +
              isAppNav[i].target +
              '">' +
              isAppNav[i].words +
              "</a></li>";
          } else {
            navHtml +=
              '<li class="sp-nav__' +
              i +
              ' js-sp__nav__all sp-nav_g1"><a href="' +
              isAppNav[i].linkUrl +
              '" title="' +
              isAppNav[i].words +
              '" target="' +
              isAppNav[i].target +
              '">' +
              isAppNav[i].words +
              "</a></li>";
          }
        }

        navHtml += "</ul>";
        navHtml += "</ul>";
        navHtml += "</nav>";
      }

      buildＭoblieActivityConent();
      elevatorHomeAddWhere();

      /*
       ** 電梯加在後面
       */
      function elevatorHomeAddWhere() {
        // 要新增html tag 在上面 TODO 看能不能用js新增
        var parent = $("#elevatorHome_2");
        var body = $("body");
        // var tag = document.createElement('a');
        if (parent) {
          parent.html(navHtml);
        } else {
          body.html(navHtml);
        }
      }
    }

    // judge app | not app
    function initBuild() {
      // app-view | web-view
      var isUiWebview =
        /(WebView|(iPhone|iPod|iPad)(?!.*Safari\/)(?!.*Line\/)|Android.*(wv|.0.0.0))(?!.*Line\/)/gi.test(
          navigator.userAgent
        );

      // is app
      if (isUiWebview) {
        buildMobileNav(navContentApp);
        // 新增
        buildMobileNav_2(navContentApp_brand);
      }
      // not app
      else {
        // is desktop | mobile
        resizeInitPage();
        $(window).on("resize", resizeInitPage);
      }
    }

    function resizeInitPage() {
      var $winWt = $(document).width();
      var $spWrap = $("#elevatorHome");
      var $spFixedNav = $("#spFixedNav");
      // desktop
      if ($winWt > $screenChangeWt) {
        buildNav(navContent, navContent_brand);
        resizeScrollTop();
      }
      // mobile
      else {
        buildMobileNav(navContent_m);
        // 新增
        buildMobileNav_2(navContent_brand);
      }
    }

    // 滾動效果(For desktop)
    function resizeScrollTop() {
      _document.on("scroll", function () {
        var $spFixedNav = $("#spFixedNav");
        // judge desktop移動距離
        function judgeScrollTop() {
          if (_document.scrollTop() >= 300) {
            $spFixedNav.css({
              "pointer-events": "",
            });
            // $spWrap.find($spFixedNav).removeClass('sp-is--hide');
          } else {
            // $spWrap.find($spFixedNav).addClass('sp-is--hide');
          }
        }

        var $winWt = $(document).width();
        if ($winWt > $screenChangeWt) {
          judgeScrollTop();
        }
      });
    }

    // output value
    initBuild();
    // 情境: 使用者手動伸縮大小網時
    var isScreenResize = true;
    $(window).resize(function () {
      $winWt = $(document).width();
      if ($winWt > $screenChangeWt && isScreenResize) {
        initBuild();
        $("#elevatorHome").css("display", "block");
        // 情境: 大網時上面的活動要關掉
        $("#elevatorHome_2").css("display", "none");
        isScreenResize = false;
      } else if ($winWt <= $screenChangeWt) {
        $("#elevatorHome").css("display", "none");
        isScreenResize = true;
      }
    });
  }

  spScrollNav();
  // 左邊電梯  /.END

  /*
   ** 右邊電梯
   */
  function spScrollRightNav() {
    if (!rightNav) return false;

    var checkStyle;
    var rightStyleArray = ["fade-in", "left-in", "up-in"];

    if (typeof rightStyle !== "undefined") {
      rightStyleArray.forEach(function (itemStyle) {
        if (rightStyle === itemStyle) checkStyle = itemStyle;
      });
    } else {
      checkStyle = null;
    }

    var arrSection = Array.apply(
      null,
      document.querySelectorAll("[data-title]")
    );
    var navHtml = "";
    var arrDataGroup = [];
    var $spWrapRight = $("#navRightBar");

    navHtml += '<nav id="spRightNav" class="sp-right__nav">';
    navHtml += '<ul class="sp-nav-right_ul" id="spNavRightUl">';
    navHtml += '<li class="sp-bav_top_img"></li>';

    arrSection.forEach(function (el) {
      var valueEl = el.getAttribute("data-title");
      var isHideData = valueEl.indexOf("stop") == -1;
      if (valueEl && isHideData) {
        navHtml +=
          ' <li class="sp-nav_right"><a href="#' +
          valueEl +
          '">' +
          valueEl +
          "</a></li>";
        arrDataGroup.push(valueEl);
      }
      //  隱藏標題出現錨點無法對應高度 -> 將錨點加入陣列但隱藏
      else if (!isHideData) {
        navHtml +=
          ' <li class="sp-nav_right" style="width: 0; min-width: 0;"></li>';
        arrDataGroup.push(valueEl);
      }
    });

    navHtml +=
      '<li class="sp-nav-right__top" id="navTop"><a href="" title="TOP">TOP</a></li>';
    navHtml += '<li class="sp-nav-right__mobile__click" id="clickMenu"></li>';
    navHtml += "</ul>";
    navHtml += "</nav>";

    var parent = $("#navRightBar");
    var body = $("body");
    if (parent) {
      parent.html(navHtml);
    } else {
      body.html(navHtml);
    }

    var rightNavUl = document.getElementById("spRightNav");
    if (checkStyle) {
      rightNavUl.classList.add(checkStyle);

      function checkRightActive() {
        if (window.pageYOffset >= 300) {
          rightNavUl.classList.add("active");
        } else {
          rightNavUl.classList.remove("active");
        }
      }

      document.addEventListener("scroll", checkRightActive);

      /**
       * 測量是否過長
       */
      var elevatorElement = document.getElementById("spRightNav");
      var elevatorHeight = elevatorElement.clientHeight;
      var elevatorOffsetTop = detectElementTop(elevatorElement);
      var windowHeight = window.innerHeight;
      var elevatorOffsetWindow =
        elevatorOffsetTop + elevatorHeight - windowHeight;

      if (window.innerWidth >= 960 && elevatorOffsetWindow > 0) {
        var pageHeight = document.body.clientHeight;
        var elevatorPageRatio = elevatorOffsetWindow / pageHeight;
        document.addEventListener("scroll", function () {
          if (window.scrollY > windowHeight + elevatorHeight / 2) {
            elevatorElement.style.transform =
              "translateY(" +
              window.scrollY * elevatorPageRatio * -1 +
              "px" +
              ")";
          } else {
            // reset
            elevatorElement.style = "";
          }
        });
      }
    }

    /*
     ** judge 如果沒有值 右邊電梯隱藏
     */
    var result = arrDataGroup.filter(function (word) {
      return word && word.trim();
    });
    if (result.length == 0) {
      document.getElementById("navRightBar").style.display = "none";
    }

    // last li contact 'top'
    var $spNavLastLi = $spWrapRight.find("#navTop");
    goTopEffect($spNavLastLi);
  }

  /*
   ** judge 是不是主會場，主會場出現右邊電梯(判定undefined是如果沒帶值時)
   */
  // if (getSearch === "Ev1" || getSearch == undefined) {
  spScrollRightNav();
  // }
  // 右邊電梯  /.END

  // judge now which isClick
  $(".js-sp__nav__all > a").click(function () {
    $(".js-sp__nav__all a").removeClass("active");
    $(this).addClass("active");
  });

  // active move in the screen middle
  var $winWt = $(document).width();
  if ($(".active").length) {
    var offsetLeft = $(".active").offset().left - $winWt / 2;
  }
  $(".js-nav_ul").stop().animate({
    scrollLeft: offsetLeft,
  });
  // active move in the screen middle

  /*
   ** 滾動function
   */
  function bindNav($winWt) {
    if (!rightNav) return false;

    var arrSection = Array.apply(
      null,
      document.querySelectorAll("[data-title]")
    );
    var arrTitle = [];
    var navClickItems = Array.apply(
      null,
      document.querySelectorAll("#spNavRightUl a")
    );
    var docScrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    var navBarHeight =
      document.querySelector(".sp-right__nav").offsetHeight + 2 || 41;
    var $winWt = $(document).width();
    var targetIndex = 0;

    // data-title each
    arrSection.forEach(function (el) {
      var valueEl = el.getAttribute("data-title");
      var isHideData = valueEl.indexOf("stop") == -1;
      /*
       ** 如果data-title的值 1.有值 2.不等於stop 加入陣列
       */
      if (valueEl && isHideData) {
        arrTitle.push(el);
      }
    });

    /*
     ** judge mobile 需加上navBar的高度
     */
    arrTitle.forEach(function (el, index) {
      if ($winWt > $screenChangeWt && docScrollTop - el.offsetTop >= 0) {
        targetIndex = index;
      } else if (
        $winWt <= $screenChangeWt &&
        docScrollTop - el.offsetTop + navBarHeight >= 0
      ) {
        targetIndex = index;
      }
    });

    /*
     ** 1.防呆 2.移除所有active 3.當下的加上active
     */
    if (targetIndex === -1) return;
    navClickItems.forEach(function (el) {
      el.classList.remove("active");
    });
    navClickItems[targetIndex].classList.add("active");
    /*
     ** active move in the screen middle, 一定要重新抓取document.width，不然會有拖曳螢幕大小時出現的錯誤
     */
    var moveLeft = $("#spRightNav li").width() || 90;
    if ($(".active").length) {
      //
      var offsetLeft = moveLeft * targetIndex - $winWt / 3;
      $("#spNavRightUl").stop().animate({
        scrollLeft: offsetLeft,
      });
    }
    // active move in the screen middle /.END
  }

  /*
   ** scroll 給點間隔時間去跑
   */
  $.debounce = function (func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  $.throttle = function (func, wait) {
    var context, args, timeout, throttling, more, result;
    var whenDone = $.debounce(function () {
      more = throttling = false;
    }, wait);
    return function () {
      (context = this), (args = arguments);
      var later = function () {
        timeout = null;
        if (more) func.apply(context, args);
        whenDone();
      };
      if (!timeout) timeout = setTimeout(later, wait);

      if (throttling) {
        more = true;
      } else {
        result = func.apply(context, args);
      }
      whenDone();
      throttling = true;
      return result;
    };
  };
  var bind__handler = $.throttle(function (e) {
    // window.addEventListener('load',bindNav);
    bindNav($winWt);
  }, 200);

  window.addEventListener("scroll", bind__handler);

  /*
   ** 點擊後移動對應的欄位
   */
  $(document).on("click", "#spNavRightUl .sp-nav_right a", function (e) {
    // 點擊後關閉 ps.先執行關閉在移動不然會錯
    var $this = $(this).parent().siblings("#clickMenu");
    var $parent = $this.parent();
    var $isOpen = $parent.hasClass("click--active");
    var $btnChange = $(".sp-nav-right__mobile__click");
    var $body = $("body");
    clickMenuClose($this, $btnChange, $parent, $body);
    // END 點擊後關閉
    var $winWt = $(document).width();
    var _href = $(this).attr("href").substr(1);
    var toElem = $('[data-title="' + _href + '"]');
    var toActiveBtn = toElem.offset().top + 10;
    // 1212 watch css
    if ($winWt > $screenChangeWt) {
      $("html, body").animate({ scrollTop: toActiveBtn });
    } else {
      $("html, body").animate({
        scrollTop: toActiveBtn - $("#spRightNav").height(),
      });
    }

    return false;
  });
  // 滾動 END

  /*
   ** 左邊電梯 mobile 彈窗打開
   */
  function doClick(e) {
    e.preventDefault();
    // 彈出視窗
    var $overlayEvents = $(this);
    var $body = $("body");
    var touchId = $(this).attr("data-dialog");
    var targetId = $(".js--main--dialog");
    // console.log($(this).hasClass('footer__fixed-active'))
    var openButton = $(".js-ElevatorBtn-m");
    if ($(this).hasClass("footer__fixed-active")) {
      $(".overlay-mask").remove();
      targetId.fadeOut(200).removeClass("overlay-open");
      SettingzIndex("", "", "", "");
      openButton.removeClass("footer__fixed-active");
    } else {
      $(".overlay-mask").remove();
      targetId.fadeOut(200).removeClass("overlay-open");
      // openButton.html(elevatoBtn_content.open);
      // 拿掉可以做到直接點開，但body會是fixed
      //- fixed: 20-0525，不確定之前為什麼拿掉，如果body為fixed的狀態會導致宮格無法滑出
      SettingzIndex("", "", "", "");

      openButton.removeClass("footer__fixed-active");

      //- 新增彈窗內容
      initDialog();
      $(this).toggleClass("footer__fixed-active");
    }

    function comparisonDialog() {
      targetId.each(function () {
        if (touchId == $(this).attr("id")) {
          $(this).fadeIn(200).addClass("overlay-open");
        }
      });
    }

    function SettingzIndex(size, hidden, position, overflow) {
      $(".sp__visual").css("z-index", size);
      $("html, body").css({
        "overflow-y": overflow,
        top: position,
        right: position,
        left: position,
        bottom: position,
        position: hidden,
      });
    }

    function initDialog() {
      $body.prepend('<div id="overlay-mask" class="overlay-mask"></div>');
      comparisonDialog();
      // SettingzIndex("1000", "fixed", "0", "scroll");
    }

    // .END 彈出視窗
  }

  /*
   ** 左邊電梯 點擊黑幕關閉
   */
  function overwayDoClick(e) {
    e.preventDefault();
    // 彈出視窗
    var $overlayEvents = $(this);
    var $body = $("body");
    var targetId = $(".js--main--dialog");
    var openButton = $(".js-ElevatorBtn-m");
    $overlayEvents.remove();
    targetId.fadeOut(200).removeClass("overlay-open");
    SettingzIndex("", "", "", "");

    openButton.removeClass("footer__fixed-active");

    function SettingzIndex(size, hidden, position, overflow) {
      $(".sp__visual").css("z-index", size);
      $("html, body").css({
        "overflow-y": overflow,
        top: position,
        right: position,
        left: position,
        bottom: position,
        position: hidden,
      });
    }
  }

  $(document).on("click", ".js-ElevatorBtn-m", doClick);
  $(document).on("click", "#overlay-mask", overwayDoClick);

  /*
   ** 圖片時間戳更新
   */
  // function generateImgVs() {
  //     var allImg = document.getElementsByTagName('img');
  //     var imgRegx = /\S+\.(jpg|png|gif)\b/i;
  //     var now = new Date()
  //     var days = now.getDate();
  //     var min = now.getMinutes();
  //
  //     for (var i = 0; i < allImg.length; i++) {
  //         if (allImg[i].src.match(imgRegx)) {
  //             allImg[i].src = allImg[i].src + '?' + '0' + days + min
  //         }
  //     }
  // }
  //
  // generateImgVs();

  /*
   ** 選單下拉樣式
   */
  $(document).on("click", "#clickMenu", function () {
    var $this = $(this);
    var $parent = $this.parent();
    var $isOpen = $parent.hasClass("click--active");
    var $btnChange = $(".sp-nav-right__mobile__click");
    var $body = $("body");
    if ($isOpen == false) {
      clickMenuOpen($this, $btnChange, $parent, $body);
    } else {
      clickMenuClose($this, $btnChange, $parent, $body);
    }
  });
  function clickMenuOpen($this, $btnChange, $parent, $body) {
    $body.css("padding-top", "39px");
    $btnChange.addClass("btn--active");
    $parent.addClass("click--active close");
    $this.addClass("close");
    $parent.parents(".navRightBar").addClass("add--fixed");
  }

  function clickMenuClose($this, $btnChange, $parent, $body) {
    $body.css("padding-top", "");
    $btnChange.removeClass("btn--active");
    $parent.removeClass("click--active");
    $this.removeClass("close");
    $parent.parents(".navRightBar").removeClass("add--fixed");
  }
});

function detectElementTop(el) {
  var actualTop = el.offsetTop;
  var current = el.offsetParent;
  while (current !== null) {
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }
  return actualTop;
}
