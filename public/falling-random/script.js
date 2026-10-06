const addFallingImages = () => {
  const makeFallingImage = (imgNum) => {
    const hasRandomBlock = document.querySelector(
      ".falling-random .random__block"
    );

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

      // if (i % 3 === 0) {
      //   imageClone.classList.add("is-rotateX");
      // } else if (i % 5 === 0) {
      //   imageClone.classList.add("is-rotateY");
      // } else if (i % 2 === 0) {
      //   imageClone.classList.add("is-rotateZ");
      // }

      myContainer.appendChild(imageClone);

      imageClone.addEventListener("animationend", () => {
        imageClone.remove();
        cloneImage(i, image);
      });
    };

    const makeClone = () => {
      const image = document.createElement("div");
      image.classList.add("falling-random-image");

      for (let i = 0; i < imgNum; i++) {
        cloneImage(i, image);
      }
    };

    makeClone();

    // 回傳函式結果
    return makeClone;
  };

  // 判斷 bg__container 裡的 class
  // ================================
  const checkBgContainerClass = () => {
    const bgContainer = document.querySelector(".bg__container");
    const classLength = bgContainer.classList.length;

    if (classLength === 1) {
      bgContainer.classList.remove("bg__container");
    } else {
      bgContainer.classList.add("active");
    }
  };

  checkBgContainerClass();
  document.addEventListener("DOMContentLoaded", makeFallingImage(20));
};

addFallingImages();
