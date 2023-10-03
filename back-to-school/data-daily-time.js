// 每次顯示三品
// 需要複製請連著"{},"整個區塊複製
// 是價格的話請用'price'，會加上$符號，不是價格請用'text'，不會加上$符號
// 區塊：限時瘋搶
var dataDailyTime = [

  [// 6/12
    {
      name: 'Tefal法國特福 煮FUN系列22CM不沾深平底鍋(加蓋)-抹茶綠(適用電磁爐)-網',
      productNumber: 4235734,
      price: 990,
    },
    {
      name: 'iFit 㵟卡蒟蒻拌飯 3份/袋 鵝油香蔥 【5包組】-網',
      productNumber: 6617588,
      price: 490,
    },
    {
      name: '【日本牛乳石鹼】滋卿愛青春調理洗面乳130gX6',
      productNumber: 3121499,
      price: 654,
    },
  ],
  [// 6/13
    {
      name: '海洋依珂Ocean Re-New 洗卸凝露 150ml-潔淨/醒肌/光滑',
      productNumber: 4253743,
      price: 618,
    },
    {
      name: 'MIDAS 立體真空收納壓縮袋-8件組',
      productNumber: 3124061,
      price: 618,
    },
    {
      name: '【豆穌朋】經典冰心泡芙4種口味任選4盒(8入/盒)；原味/巧克力/咖啡/芝麻-網',
      productNumber: 6533836,
      price: 700,
    },
  ],
  [// 6/14
    {
      name: '買一送一 【樂扣樂扣】韓風簡約彈跳316不鏽鋼咖啡杯/550ml(三色任選)',
      productNumber: 3240280,
      price: 1099,
    },
    {
      name: 'Ido醫朵 激光瞬白凝霜(升級美白晶球)三瓶組',
      productNumber: 4573452,
      price: 990,
    },
    {
      name: ' 赤豪 經典奶黃包36顆(60g＋-10%/顆/6顆1包) -網',
      productNumber: 4717855,
      price: 718,
    },
  ],
  [
    // 6/15
    {
      name: 'Hair Recipe奇異果無花果清爽豐盈2洗1護組(洗髮露530ml*2+護髮精華素530g)',
      productNumber: 3791977,
      price: 799,
    },
    {
      name: '【MAMORU】北歐風鬱金香實木餐椅',
      productNumber: 2746670,
      price: 512,
    },
    {
      name: '【悅生活】極鮮 黃金3A頂級香蔥鵝油350g/瓶 四入組',
      productNumber: 1898937,
      price: 918,
    },
  ],
  [
    // 6/16
    {
      name: '生活良品 韓版大容量旅行袋飛機包 可摺疊衣物收納包 1入x1袋-網',
      productNumber: 4091687,
      price: 222,
    },
    {
      name: 'LUX麗仕 煥亮柔順修護噴霧式髮油 80ML x2-網',
      productNumber: 6506919,
      price: 738,
    },
    {
      name: '【evian依雲】天然礦泉水(1000ml/12入/寶特瓶)',
      productNumber: 3223624,
      price: 719,
    },
  ],
  [
    // 6/17
    {
      name: '【Tonia Nicole 東妮寢飾】100%精梳純棉涼被/冰咖啡紗涼感涼被-單人(多款任選)',
      productNumber: 3520325,
      price: 1080,
    },
    {
      name: '【一級嚴選】格陵蘭無肚洞大比目魚輪切9片組(3片/500g/包)',
      productNumber: 3226767,
      price: 888,
    },
    {
      name: 'Hair Recipe奇異果無花果清爽豐盈2洗1護組(洗髮露530ml*2+護髮精華素530g)',
      productNumber: 3791977,
      price: 799,
    },
  ],
  [// 6/18
    {
      name: 'Medimix 美姬仕帆船神皂 30入  再贈5入',
      productNumber: 3687000,
      price: 999,
    },
    {
      name: '美國康寧 CORNINGWARE 琥珀色耐熱保鮮盒 四件組',
      productNumber: 4796539,
      price: 618,
    },
    {
      name: '[超值3入]360°多用途超大風力隨身風扇',
      productNumber: 6439284,
      price: 855,
    },
  ],
  [// 6/19
    {
      name: '【Arenes】夏季控油洗髮2入組(青柚洗+檸檬草洗)-網',
      productNumber: 3099564,
      price: 399,
    },
    {
      name: '【Astonish】英國潔瞬效除黴抗菌去污清潔劑3瓶(750mlx3)',
      productNumber: 3571435,
      price: 699,
    },
    {
      name: '【新東陽】原味肉醬(160gx5罐)',
      productNumber: 3282162,
      price: 218,
    },
  ],
  [// 6/20
    {
      name: ' 百事兔年歡樂組合包274g/袋-112/7/10-網',
      productNumber: 4093627,
      price: 469,
    },
    {
      name: ' 【廣源良】明星經典保濕組（絲瓜水320ml+絲瓜霜100ml）',
      productNumber: 6261915,
      price: 698,
    },
    {
      name: '【TLH】心動 珍珠雙層拼接手鍊 約重0.04錢±2厘',
      productNumber: 6697725,
      price: 1198,
    },
  ],
  [
    {
      name: '【萬歲牌】杏仁小魚(270g) X 3罐組',
      productNumber: 3779331,
      price: 819,
    },
    {
      name: '【ikloo宜酷屋】玩色木質四層書櫃-網(買一送一)',
      productNumber: 3613377,
      price: 711,
    },
    {
      name: 'ESTEE LAUDER 雅詩蘭黛 Double Wear粉持久完美持妝粉底 30ml x2入/組',
      productNumber: 3441840,
      price: 2199,
    },
  ],
  [
    {
      name: '【萬歲牌】杏仁小魚(270g) X 3罐組',
      productNumber: 3779331,
      price: 819,
    },
    {
      name: '【ikloo宜酷屋】玩色木質四層書櫃-網(買一送一)',
      productNumber: 3613377,
      price: 711,
    },
    {
      name: 'ESTEE LAUDER 雅詩蘭黛 Double Wear粉持久完美持妝粉底 30ml x2入/組',
      productNumber: 3441840,
      price: 2199,
    },
  ],
  [// 6/12
    {
      name: 'Tefal法國特福 煮FUN系列22CM不沾深平底鍋(加蓋)-抹茶綠(適用電磁爐)-網',
      productNumber: 4235734,
      price: 990,
    },
    {
      name: 'iFit 㵟卡蒟蒻拌飯 3份/袋 鵝油香蔥 【5包組】-網',
      productNumber: 6617588,
      price: 490,
    },
    {
      name: '【日本牛乳石鹼】滋卿愛青春調理洗面乳130gX6',
      productNumber: 3121499,
      price: 654,
    },
  ],
  [// 6/13
    {
      name: '海洋依珂Ocean Re-New 洗卸凝露 150ml-潔淨/醒肌/光滑',
      productNumber: 4253743,
      price: 618,
    },
    {
      name: 'MIDAS 立體真空收納壓縮袋-8件組',
      productNumber: 3124061,
      price: 618,
    },
    {
      name: '【豆穌朋】經典冰心泡芙4種口味任選4盒(8入/盒)；原味/巧克力/咖啡/芝麻-網',
      productNumber: 6533836,
      price: 700,
    },
  ],
  [// 6/14
    {
      name: '買一送一 【樂扣樂扣】韓風簡約彈跳316不鏽鋼咖啡杯/550ml(三色任選)',
      productNumber: 3240280,
      price: 1099,
    },
    {
      name: 'Ido醫朵 激光瞬白凝霜(升級美白晶球)三瓶組',
      productNumber: 4573452,
      price: 990,
    },
    {
      name: ' 赤豪 經典奶黃包36顆(60g＋-10%/顆/6顆1包) -網',
      productNumber: 4717855,
      price: 718,
    },
  ],
  [
    // 6/15
    {
      name: 'Hair Recipe奇異果無花果清爽豐盈2洗1護組(洗髮露530ml*2+護髮精華素530g)',
      productNumber: 3791977,
      price: 799,
    },
    {
      name: '【MAMORU】北歐風鬱金香實木餐椅',
      productNumber: 2746670,
      price: 512,
    },
    {
      name: '【悅生活】極鮮 黃金3A頂級香蔥鵝油350g/瓶 四入組',
      productNumber: 1898937,
      price: 918,
    },
  ],
  [
    // 6/16
    {
      name: '生活良品 韓版大容量旅行袋飛機包 可摺疊衣物收納包 1入x1袋-網',
      productNumber: 4091687,
      price: 222,
    },
    {
      name: 'LUX麗仕 煥亮柔順修護噴霧式髮油 80ML x2-網',
      productNumber: 6506919,
      price: 738,
    },
    {
      name: '【evian依雲】天然礦泉水(1000ml/12入/寶特瓶)',
      productNumber: 3223624,
      price: 719,
    },
  ],
  [
    // 6/17
    {
      name: '【Tonia Nicole 東妮寢飾】100%精梳純棉涼被/冰咖啡紗涼感涼被-單人(多款任選)',
      productNumber: 3520325,
      price: 1080,
    },
    {
      name: '【一級嚴選】格陵蘭無肚洞大比目魚輪切9片組(3片/500g/包)',
      productNumber: 3226767,
      price: 888,
    },
    {
      name: 'Hair Recipe奇異果無花果清爽豐盈2洗1護組(洗髮露530ml*2+護髮精華素530g)',
      productNumber: 3791977,
      price: 799,
    },
  ],
];
