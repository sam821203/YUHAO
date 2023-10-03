// click nav and scroll to hash tag
// 點擊誘因可下連宮格
// ================================
const addCheckAnchors = () => {
  const checkAnchors = () => {
    const anchors = Array.from(document.querySelectorAll('a[href^="#"]'));

    anchors.forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        // 判斷是 #id 還是 data-title
        const href = anchor.getAttribute("href");
        const target = document.querySelector(href) || document.querySelector(`[data-title="${href.split("#")[1]}"]`);

        if (target) {
          e.preventDefault();

          // 修正位移值
          const progressBarHeight = document.querySelector("#progressBar").offsetHeight + 4;
          const navRightBarHeight = document.querySelector("#navRightBar").offsetHeight;
          const navHeight = navRightBarHeight > 0 ? navRightBarHeight : progressBarHeight;
          const uiObjectHeight = window.innerWidth >= 1213 ? progressBarHeight : navHeight;

          window.scrollTo({
            top: target.offsetTop - uiObjectHeight,
            behavior: "smooth",
          });
        }
      })
    })
  }

  const updateCheckAnchors = () => {
    document.addEventListener("DOMContentLoaded", checkAnchors);
  }

  updateCheckAnchors();
}

// 新增 go top Button
// ================================
const addGoTopBtn = () => {
  const makeGoTopBtn = () => {
    const svgNameSpace = 'http://www.w3.org/2000/svg';
    const goTopElement = document.createElement('button');
    const svgElement = document.createElementNS(svgNameSpace, 'svg');
    const pathElement = document.createElementNS(svgNameSpace, 'path');

    svgElement.setAttribute('width', '24');
    svgElement.setAttribute('height', '24');
    svgElement.setAttribute('viewBox', '0 0 24 24');
    pathElement.setAttribute('fill', '#fff');
    pathElement.setAttribute('d', 'M12 4h.018c.31.004.618.102.875.296l.117.099 6.752 6.307a.75.75 0 0 1-.937 1.166l-.087-.07-5.988-5.594V19.25a.75.75 0 0 1-1.493.102l-.007-.102V6.204l-5.988 5.594a.75.75 0 0 1-.978.04l-.082-.076a.75.75 0 0 1-.04-.978l.076-.082 6.752-6.307c.277-.26.635-.391.993-.395H12z');

    goTopElement.id = "goTop";
    goTopElement.classList.add("go-top");

    svgElement.appendChild(pathElement);
    goTopElement.appendChild(svgElement);

    return goTopElement;
  };

  const goTopBtn = makeGoTopBtn();

  document.body.appendChild(goTopBtn);
};

// 新增 scroll top
// ================================
const addScrollTop = () => {
  const goTopBtn = document.getElementById("goTop");

  // Reveal the button
  const btnReveal = () => {
    if (window.scrollY >= 300) {
      goTopBtn.classList.add("is-visible");
    } else {
      goTopBtn.classList.remove("is-visible");
    }
  };

  // Smooth scroll top
  const smoothScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  goTopBtn.addEventListener('click', smoothScrollTop);
  window.addEventListener("scroll", btnReveal);
};

// ================================
const addIsWinWt = () => {
  const isWinWt = () => {
    const bodyWidth = document.body.clientWidth;
    const navTop = document.getElementById("navTop");
    const goTop = document.getElementById("goTop");

    if (bodyWidth >= 1260) {
      if (navTop) {
        goTop.style.display = "none";
      } else {
        goTop.style.display = "block";
      }
    } else {
      goTop.style.display = "block";
    }
  }

  const updateIsWinWt = () => {
    window.addEventListener("load", isWinWt);
    window.addEventListener("resize", isWinWt);
  }

  updateIsWinWt();
}

// scroll progress bar
// ================================
const addProgressBar = () => {
  let initProgressBar = false;

  // 檢查頁面的垂直滾動位置
  const getScrollTop = () => {
    const hasScrollY = typeof window.scrollY !== "undefined";
    const hasCompatMode = typeof document.compatMode !== "undefined";
    const isCSS1Compat = document.compatMode === "CSS1Compat";

    if (hasScrollY) {
      return window.scrollY;
    } else if (hasCompatMode && isCSS1Compat) {
      return document.documentElement.scrollTop;
    } else if (hasCompatMode) {
      return document.body.scrollTop;
    };

    // 預設值為 0
    return 0;
  }

  // 建立 progress bar 和其基礎樣式
  const makeProgressBar = () => {
    const body = document.body;
    const barWrap = document.createElement("div");
    const bar = document.createElement("div");

    barWrap.id = "progressBarWrap";
    barWrap.style.opacity = 0; // 開始先隱藏
    barWrap.style.position = "fixed";
    barWrap.style.zIndex = 200;
    barWrap.style.top = 0;
    barWrap.style.width = "100%";
    barWrap.style.height = "0.5vh";
    barWrap.style.backgroundColor = "rgba(0, 0, 0, 0.3)";

    bar.id = "progressBar";
    bar.style.height = "100%";
    bar.style.backgroundColor = "#cc1e05";
    bar.style.backgroundImage =
      "linear-gradient(to right, #e73b2b 0%, #cc1e05 80%, #cc1e05 100%)";

    barWrap.appendChild(bar);
    body.insertBefore(barWrap, body.firstChild);

    // 如果在最上面(getScrollTop() = 0)，則不改變數
    if (getScrollTop()) initProgressBar = true;
  }

  const calcProgressBarWidth = () => {
    const nowScroll = getScrollTop();
    const bodyHeight = document.body.scrollHeight - window.innerHeight;
    const bodyWidth = document.body.clientWidth;

    return parseInt((nowScroll / bodyHeight) * bodyWidth);
  }

  const setProgressBarWidth = () => {
    const wrap = document.getElementById("progressBarWrap");
    const bar = document.getElementById("progressBar");

    bar.style.width = calcProgressBarWidth() + "px";

    // 如果不在最上面則打開隱藏，如果在最上面則打開init，之後就會打開隱藏且再滾回來都不會消失
    if (initProgressBar) wrap.style.opacity = 1;
    else initProgressBar = true;
  }

  const updateProgressBarWidth = () => {
    const requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame;

    const setWidth = () => {
      requestAnimationFrame ? requestAnimationFrame(setProgressBarWidth) : setProgressBarWidth();
    };

    window.addEventListener("load", setWidth);
    window.addEventListener("scroll", setWidth);
  }

  // 檢查有幾個progress bar，超過2條沒有id的(舊bar)移除
  const removeOldProgressBar = () => {
    const allBars = Array.from(document.querySelectorAll("#progressBar"));
    let newBarHasId = 0;

    if (allBars.length > 1) {
      allBars.forEach(function (el) {
        const barWrap = el.parentNode;
        console.log(barWrap.parentNode);
        if (barWrap.id === "progressBarWrap") {
          newBarHasId++;

          // 超過一個newBar就砍
          if (newBarHasId > 1) barWrap.parentNode.removeChild(barWrap);

        } else {
          // 舊bar都砍
          barWrap.parentNode.removeChild(barWrap);
        }
      });
    }
  }

  const updateRemoveOldProgressBar = () => {
    document.addEventListener("DOMContentLoaded", removeOldProgressBar);
  }

  makeProgressBar();
  updateProgressBarWidth();
  updateRemoveOldProgressBar();
}

// auto image resize
// ================================
const addAutoWidth = () => {
  const detectBodyWidth = (width, functionWeb, functionMobile) => {
    const bodyWidth = document.body.clientWidth;

    if (bodyWidth >= width) {
      if (typeof functionWeb === "function") return functionWeb();
    } else {
      if (typeof functionMobile === "function") return functionMobile();
    }
  }

  const autoWidth = (wrapperWidth) => {
    const autoWidthWrap = Array.from(document.querySelectorAll(".visual--auto .width--auto"));
    const autoWidthImgs = Array.from(document.querySelectorAll(".width--auto img"))

    if (autoWidthImgs.length !== autoWidthWrap.length)
      return console.error("自動圖片的外框與圖片數量不一致!");

    autoWidthImgs.forEach(function (el, index) {
      const elWidth = el.naturalWidth;

      autoWidthWrap[index].style.width = (elWidth / wrapperWidth) * 100 + "%";
    });
  }

  const initAutoWidth = () => {
    detectBodyWidth(960, null, () => {
      autoWidth(960);
    });
  }

  const updateAutoWidth = () => {
    window.addEventListener("load", initAutoWidth);
    window.addEventListener("resize", initAutoWidth);
  }

  updateAutoWidth();
}

// 判斷是否有版頭
// ================================
const checkHeaderWrap = () => {
  const buildHeaderWrap = document.getElementById("buildHeaderWrap");
  if (!buildHeaderWrap) return false;

  const headerHeight = buildHeaderWrap.clientHeight;
  const newStyle = document.createElement("style");

  document.head.append(newStyle);
  newStyle.append(`body::before{top: ${headerHeight}px !important;}`);
}

// 背景飄落
// ================================
const addFallingImages = () => {
  const makeFallingImage = (imgNum) => {
    const hasRandomBlock = document.querySelector(".falling-random .random__block");

    if (!hasRandomBlock) return false;

    const cloneImage = (i, image) => {
      const myContainer = document.querySelector(".random__layer");
      const imageClone = image.cloneNode(true);
      const imageStyle = imageClone.style;
      const rootStyles = window.getComputedStyle(document.documentElement);

      // 取得 :root 裡的變數屬性值
      const fSize = Number(rootStyles.getPropertyValue("--size")) || 22;
      const fSizeMin = Number(rootStyles.getPropertyValue("--size-min")) || 12;
      const animeDuration = Number(rootStyles.getPropertyValue("--time")) || 8;

      imageStyle.left = 100 * Math.random() + "%";
      imageStyle.width = Math.random() + 0.8 + "em";
      imageStyle.height = imageStyle.width;
      imageStyle.fontSize = fSize * Math.random() + fSizeMin + "px";
      imageStyle.animationDelay = 8 * Math.random() + "s";
      imageStyle.animationDuration = animeDuration * Math.random() + 6 + "s";

      if (i % 3 === 0) {
        imageClone.classList.add("is-rotateX");
      } else if (i % 5 === 0) {
        imageClone.classList.add("is-rotateY");
      } else if (i % 2 === 0) {
        imageClone.classList.add("is-rotateZ");
      }

      myContainer.appendChild(imageClone);

      imageClone.addEventListener("animationend", () => {
        imageClone.remove();
        cloneImage(i, image);
      });
    }

    const makeClone = () => {
      const image = document.createElement("div");
      image.classList.add('falling-random-image');

      for (let i = 0; i < imgNum; i++) {
        cloneImage(i, image);
      }
    }

    makeClone();

    // 回傳函式結果
    return makeClone;
  }

  // 判斷 bg__container 裡的 class
  // ================================
  const checkBgContainerClass = () => {
    const bgContainer = document.querySelector(".bg__container");
    const fallingLayer = document.querySelector(".bg__container .falling__layer");
    const hasRandomFalling = bgContainer.classList.contains('falling-random');
    const classLength = bgContainer.classList.length;

    if (classLength === 1) {
      bgContainer.classList.remove('bg__container');
    } else {
      bgContainer.classList.add('active');
    }

    // 判斷是否有添加圖片隨機動畫 
    if (hasRandomFalling) {
      fallingLayer.remove();
      return false;
    }
  }

  checkBgContainerClass();
  document.addEventListener("DOMContentLoaded", makeFallingImage(20));
}

// ================================
const initGenerate = () => {
  // 判斷錨點滾動效果
  addCheckAnchors();
  // 新增 goTop
  addGoTopBtn();
  // 新增 scrollTop 功能
  addScrollTop();
  // 新增 AutoWidth 功能
  addAutoWidth();
  // 新增 progress bar
  addProgressBar();
  // 新增隨機背景飄落功能
  addFallingImages();
  // 判斷是否有版頭
  checkHeaderWrap();
}

initGenerate();