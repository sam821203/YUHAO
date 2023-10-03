// 每次顯示三品
// 需要複製請連著"{},"整個區塊複製
// 是價格的話請用'price'，會加上$符號，不是價格請用'text'，不會加上$符號
// 區塊：誘因

var dataCustomTimeArray1 = [
  // 左上
  new Date("2023/01/18 00:00"),
  new Date("2023/01/20 00:00"),
  new Date("2023/01/22 00:00"),
  new Date("2023/01/25 00:00"),
];

var dataCustomTimeArray2 = [
  // 左中
  new Date("2023/01/18 00:00"),
  new Date("2023/01/20 09:00"),
  new Date("2023/01/24 00:00"),
  new Date("2023/01/30 00:00"),
  new Date("2023/02/01 00:00"),
];

var dataCustomTimeArray3 = [
  // 右上
  new Date("2023/01/18 00:00"),
];

var dataCustomTimeArray4 = [
  // 左下
  new Date("2023/01/18 00:00"),
  new Date("2023/01/21 00:00"),
  new Date("2023/01/25 00:00"),
];

var dataCustomTimeArray5 = [
  // 右下
  new Date("2023/01/18 00:00"),
  new Date("2023/01/20 00:00"),
  new Date("2023/01/25 00:00"),
];

// 主要是 li.swiper-slide.promo__item 這個元素要塞進去
// 左上：全家取件
var dataPromoBox1 = [
  // 1/18 ~ 1/19
  [
    {
      alt: "7-ELEVEN取件送熱四季春青茶(現萃茶)",
      webLink: "https://media.etmall.com.tw/sp/20770/m/index.html",
      appLink:
        "etmall://open?pgid=44&tb=0&url=https%3A%2F%2Fmedia.etmall.com.tw%2Fsp%2F20770%2Fm%2Fapp.html&t=0118-0201%207-ELEVEN%E5%8F%96%E4%BB%B6%E9%80%81%E7%86%B1%E5%9B%9B%E5%AD%A3%E6%98%A5%E9%9D%92%E8%8C%B6%28%E7%8F%BE%E8%90%83%E8%8C%B6%29%7CETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9",
      imgSrc: "item-p-event-1-1-1.png",
    },
  ],
  // 1/20 ~ 1/21
  [
    {
      alt: "全站加碼最高送10%樂透金",
      webLink: "https://www.etmall.com.tw/Activity/Reg/2686",
      appLink:
        "etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FReg%2F2686",
      imgSrc: "item-p-event-1-1-2.png",
    },
  ],
  // 1/22 ~ 1/24
  [
    {
      alt: "新春加碼最高送999樂透金",
      webLink: "https://www.etmall.com.tw/Activity/Reg/2686",
      appLink:
        "etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FReg%2F2686",
      imgSrc: "item-p-event-1-1-3.png",
    },
  ],
  // 1/25 ~ 2/1
  [
    {
      alt: "7-ELEVEN取件送熱四季春青茶(現萃茶)",
      webLink: "https://media.etmall.com.tw/sp/20770/m/index.html",
      appLink:
        "etmall://open?pgid=44&tb=0&url=https%3A%2F%2Fmedia.etmall.com.tw%2Fsp%2F20770%2Fm%2Fapp.html&t=0118-0201%207-ELEVEN%E5%8F%96%E4%BB%B6%E9%80%81%E7%86%B1%E5%9B%9B%E5%AD%A3%E6%98%A5%E9%9D%92%E8%8C%B6%28%E7%8F%BE%E8%90%83%E8%8C%B6%29%7CETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9",
      imgSrc: "item-p-event-1-1-1.png",
    },
  ],
];

// 左中：不限金額
var dataPromoBox2 = [
  // 1/18 ~ 1/19
  [
    {
      alt: "訂單滿額抽東森幣888枚",
      webLink:
        "https://m.etmall.com.tw/Activity/Lottery/cbf9ea58d295de99226bff85f9795b0a",
      appLink:
        "etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FLottery%2Fcbf9ea58d295de99226bff85f9795b0a",
      imgSrc: "item-p-event-2-1-1.png",
    },
  ],
  // 1/20 ~ 1/23
  [
    {
      alt: "春節限時搶紅包",
      webLink:
        "https://www.etmall.com.tw/Activity/dl/LuckyDraw/79422ae0b04fc0a32f83a40f92347969",
      appLink:
        "etmall://open?pgid=43&tb=0&url=https%3a%2f%2fwww.etmall.com.tw%2fActivity%2fdl%2fLuckyDraw%2f79422ae0b04fc0a32f83a40f92347969",
      imgSrc: "item-p-event-2-1-2.png",
    },
  ],
  // 1/24 ~ 1/29
  [
    {
      alt: "天天免費抽東森幣888枚",
      webLink:
        "https://www.etmall.com.tw/Activity/dl/LuckyDraw/79422ae0b04fc0a32f83a40f92347969",
      appLink:
        "etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2Fdl%2FLuckyDraw%2F79422ae0b04fc0a32f83a40f92347969",
      imgSrc: "item-p-event-2-1-3.png",
    },
  ],
  // 1/30 ~ 1/31
  [
    {
      alt: "指定商品東森幣折抵最高25%",
      webLink: "https://media.etmall.com.tw/sp/21494/m/index.html",
      appLink:
        "etmall://open?pgid=44&tb=0&url=https%3A%2F%2Fmedia.etmall.com.tw%2Fsp%2F21494%2Fm%2Fapp.html&t=%E5%81%A5%E5%BA%B7%E5%B0%8F%E8%B3%A3%E6%89%80%7CETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9",
      imgSrc: "item-p-event-2-1-4.png",
    },
  ],
  // 1/31 ~ 2/1
  [
    {
      alt: "訂單滿額抽東森幣888枚",
      webLink:
        "https://m.etmall.com.tw/Activity/Lottery/674fbeb09c1db6d7a94abd967d302a0d",
      appLink:
        "etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FLottery%2F674fbeb09c1db6d7a94abd967d302a0d",
      imgSrc: "item-p-event-2-1-4.png",
    },
  ],
];

// 右上：會員專屬
var dataPromoBox3 = [
  // 1/18 ~ 2/1
  [
    {
      alt: "挑戰任務滿額拿$850",
      webLink: "https://www.etmall.com.tw/member/taskActivity",
      appLink:
        "etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FMember%2FTaskActivity&t=%E6%9C%83%E5%93%A1%E4%BB%BB%E5%8B%99%E7%89%86",
      imgSrc: "item-p-event-3-1.png",
    },
    {
      alt: "會員專屬天天免費抽",
      webLink:
        "https://www.etmall.com.tw/Activity/dl/LuckyDraw/79422ae0b04fc0a32f83a40f92347969",
      appLink:
        "etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2Fdl%2FLuckyDraw%2F79422ae0b04fc0a32f83a40f92347969",
      imgSrc: "item-p-event-3-2.png",
    },
    {
      alt: "全站折價券限量開搶",
      webLink: "https://www.etmall.com.tw/Activity/CouponReceiveAll",
      appLink:
        "etmall://open?pgid=43&url=https%3A%2F%2Fwww.etmall.com.tw%2FActivity%2FCouponReceiveAll",
      imgSrc: "item-p-event-3-3.png",
    },
  ],
];

// 左下：訂單遊戲
var dataItemBox1 = [
  // 1/18 ~ 1/20
  [
    {
      alt: "離島配送滿額贈88枚樂透金",
      webLink: "https://media.etmall.com.tw/sp/21184/m/index.html",
      appLink:
        "etmall://open?pgid=44&tb=0&url=https%3A%2F%2Fmedia.etmall.com.tw%2Fsp%2F21184%2Fm%2Fapp.html&t=1%E6%9C%88%E9%9B%A2%E5%B3%B6%E9%85%8D%E9%80%81%7CETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9",
      imgSrc: "item-p-event-4-2.png",
    },
    {
      alt: "集點加價購",
      webLink:
        "https://www.etmall.com.tw/Activity/CollectPointExchangeActivity/202212db4fb10f",
      appLink:
        "etmall://open?pgid=43&url=https%3a%2f%2fwww.etmall.com.tw%2fActivity%2fCollectPointExchangeActivity%2f202212db4fb10f",
      imgSrc: "item-p-event-4-3.png",
    },
    {
      alt: "幸福集氣購",
      webLink: "https://www.etmall.com.tw/Activity/GroupSale",
      appLink:
        "etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FMember%2FGroupSale&t=%E6%9C%83%E5%93%A1%E4%BB%BB%E5%8B%99%E7%89%86",
      imgSrc: "item-p-event-4-4.png",
    },
  ],

  // 1/21 ~ 1/24
  [
    {
      alt: "【限時快閃】訂單滿額抽666枚樂透金",
      webLink:
        "https://m.etmall.com.tw/Activity/Lottery/f0b03f883fe93fbc1d6d7ab7e367606c",
      appLink:
        "etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FActivity%2FLottery%2Ff0b03f883fe93fbc1d6d7ab7e367606c",
      imgSrc: "item-p-event-4-1.png",
    },
    {
      alt: "離島配送滿額贈88枚樂透金",
      webLink: "https://media.etmall.com.tw/sp/21184/m/index.html",
      appLink:
        "etmall://open?pgid=44&tb=0&url=https%3A%2F%2Fmedia.etmall.com.tw%2Fsp%2F21184%2Fm%2Fapp.html&t=1%E6%9C%88%E9%9B%A2%E5%B3%B6%E9%85%8D%E9%80%81%7CETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9",
      imgSrc: "item-p-event-4-2.png",
    },
    {
      alt: "集點加價購",
      webLink:
        "https://www.etmall.com.tw/Activity/CollectPointExchangeActivity/202212db4fb10f",
      appLink:
        "etmall://open?pgid=43&url=https%3a%2f%2fwww.etmall.com.tw%2fActivity%2fCollectPointExchangeActivity%2f202212db4fb10f",
      imgSrc: "item-p-event-4-3.png",
    },
    {
      alt: "幸福集氣購",
      webLink: "https://www.etmall.com.tw/Activity/GroupSale",
      appLink:
        "etmall://open?pgid=44&tb=0&url=https%3a%2f%2fmedia.etmall.com.tw%2fsp%2f17190%2fm%2fapp.html&t=%e5%90%8d%e4%ba%ba%e6%8e%a8%e8%96%a6%7cETMall%e6%9d%b1%e6%a3%ae%e8%b3%bc%e7%89%a9",
      imgSrc: "item-p-event-4-4.png",
    },
  ],

  // 1/25 ~ 2/1
  [
    {
      alt: "離島配送滿額贈88枚樂透金",
      webLink: "https://media.etmall.com.tw/sp/21184/m/index.html",
      appLink:
        "etmall://open?pgid=44&tb=0&url=https%3A%2F%2Fmedia.etmall.com.tw%2Fsp%2F21184%2Fm%2Fapp.html&t=1%E6%9C%88%E9%9B%A2%E5%B3%B6%E9%85%8D%E9%80%81%7CETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9",
      imgSrc: "item-p-event-4-2.png",
    },
    {
      alt: "集點加價購",
      webLink:
        "https://www.etmall.com.tw/Activity/CollectPointExchangeActivity/202212db4fb10f",
      appLink:
        "etmall://open?pgid=43&url=https%3a%2f%2fwww.etmall.com.tw%2fActivity%2fCollectPointExchangeActivity%2f202212db4fb10f",
      imgSrc: "item-p-event-4-3.png",
    },
    {
      alt: "幸福集氣購",
      webLink: "https://www.etmall.com.tw/Activity/GroupSale",
      appLink:
        "etmall://open?pgid=43&url=https%3A%2F%2Fm.etmall.com.tw%2FMember%2FGroupSale&t=%E6%9C%83%E5%93%A1%E4%BB%BB%E5%8B%99%E7%89%86",
      imgSrc: "item-p-event-4-4.png",
    },
  ],
];

// 右下：指定商品
var dataItemBox2 = [
  [
    // 1/18 ~ 1/20
    {
      alt: "不限金額登記送PILI影音線上體驗序號",
      webLink: "https://media.etmall.com.tw/sp/20971/m/index.html",
      appLink:
        "etmall://open?pgid=44&tb=0&url=https%3A%2F%2Fmedia.etmall.com.tw%2Fsp%2F20971%2Fm%2Fapp.html&t=1228-0201%E4%B8%8D%E9%99%90%E9%87%91%E9%A1%8D%E6%B6%88%E8%B2%BB%E9%80%81PILI%E7%B7%9A%E4%B8%8A%E7%9C%8B%E5%BA%8F%E8%99%9F%7CETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9",
      imgSrc: "item-p-event-5-2.png",
    },
    {
      alt: "不限金額消費送必勝客&KFC優惠券",
      webLink: "https://media.etmall.com.tw/sp/20202/m/index.html",
      appLink:
        "etmall://open?pgid=44&tb=0&url=https%3A%2F%2Fmedia.etmall.com.tw%2Fsp%2F20202%2Fm%2Fapp.html&t=1231-0201%20%E4%B8%8D%E9%99%90%E9%87%91%E9%A1%8D%E6%B6%88%E8%B2%BB%E9%80%81%E5%BF%85%E5%8B%9D%E5%AE%A2%26KFC%E5%84%AA%E6%83%A0%E5%88%B8%7CETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9",
      imgSrc: "item-p-event-5-3.png",
    },
  ],

  // 1/21 ~ 1/24
  [
    {
      alt: "7-ELEVEN取件送熱四季春青茶(現萃茶)",
      webLink: "https://media.etmall.com.tw/sp/20770/m/index.html",
      appLink:
        "etmall://open?pgid=44&tb=0&url=https%3A%2F%2Fmedia.etmall.com.tw%2Fsp%2F20770%2Fm%2Fapp.html&t=0118-0201%207-ELEVEN%E5%8F%96%E4%BB%B6%E9%80%81%E7%86%B1%E5%9B%9B%E5%AD%A3%E6%98%A5%E9%9D%92%E8%8C%B6%28%E7%8F%BE%E8%90%83%E8%8C%B6%29%7CETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9",
      imgSrc: "item-p-event-5-1.png",
    },
    {
      alt: "不限金額登記送PILI影音線上體驗序號",
      webLink: "https://media.etmall.com.tw/sp/20971/m/index.html",
      appLink:
        "etmall://open?pgid=44&tb=0&url=https%3A%2F%2Fmedia.etmall.com.tw%2Fsp%2F20971%2Fm%2Fapp.html&t=1228-0201%E4%B8%8D%E9%99%90%E9%87%91%E9%A1%8D%E6%B6%88%E8%B2%BB%E9%80%81PILI%E7%B7%9A%E4%B8%8A%E7%9C%8B%E5%BA%8F%E8%99%9F%7CETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9",
      imgSrc: "item-p-event-5-2.png",
    },
    {
      alt: "不限金額消費送必勝客&KFC優惠券",
      webLink: "https://media.etmall.com.tw/sp/20202/m/index.html",
      appLink:
        "etmall://open?pgid=44&tb=0&url=https%3A%2F%2Fmedia.etmall.com.tw%2Fsp%2F20202%2Fm%2Fapp.html&t=1231-0201%20%E4%B8%8D%E9%99%90%E9%87%91%E9%A1%8D%E6%B6%88%E8%B2%BB%E9%80%81%E5%BF%85%E5%8B%9D%E5%AE%A2%26KFC%E5%84%AA%E6%83%A0%E5%88%B8%7CETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9",
      imgSrc: "item-p-event-5-3.png",
    },
  ],

  // 1/25 ~ 2/1
  [
    {
      alt: "不限金額登記送PILI影音線上體驗序號",
      webLink: "https://media.etmall.com.tw/sp/20971/m/index.html",
      appLink:
        "etmall://open?pgid=44&tb=0&url=https%3A%2F%2Fmedia.etmall.com.tw%2Fsp%2F20971%2Fm%2Fapp.html&t=1228-0201%E4%B8%8D%E9%99%90%E9%87%91%E9%A1%8D%E6%B6%88%E8%B2%BB%E9%80%81PILI%E7%B7%9A%E4%B8%8A%E7%9C%8B%E5%BA%8F%E8%99%9F%7CETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9",
      imgSrc: "item-p-event-5-2.png",
    },
    {
      alt: "不限金額消費送必勝客&KFC優惠券",
      webLink: "https://media.etmall.com.tw/sp/20202/m/index.html",
      appLink:
        "etmall://open?pgid=44&tb=0&url=https%3A%2F%2Fmedia.etmall.com.tw%2Fsp%2F20202%2Fm%2Fapp.html&t=1231-0201%20%E4%B8%8D%E9%99%90%E9%87%91%E9%A1%8D%E6%B6%88%E8%B2%BB%E9%80%81%E5%BF%85%E5%8B%9D%E5%AE%A2%26KFC%E5%84%AA%E6%83%A0%E5%88%B8%7CETMall%E6%9D%B1%E6%A3%AE%E8%B3%BC%E7%89%A9",
      imgSrc: "item-p-event-5-3.png",
    },
  ],
];
