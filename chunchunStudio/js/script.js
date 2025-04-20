function getSlide(bool) {
  return new Swiper(".swiper", {
    // 循環模式
    loop: bool,

    // 自動播放
    autoplay: bool ? { delay: 1000 } : false,
    // 前後按鈕
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    lazy: true, // 啟用圖片延遲加載
    preloadImages: false, // 避免提前載入
    // 多個slide
    slidesPerView: 1,
    spaceBetween: 20,
    // 斷點
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
}
// 初始化 Swiper（預設 loop 為 false）
let mySwiper = getSlide(false);

// loading
const load = document.querySelector("#loading");
setTimeout(function () {
  load.remove();
}, 1500);

// bar anima
const bar = document.querySelector("nav");
const ul = document.querySelector("ul");
bar.addEventListener("click", function () {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
    ul.style.height = "0%";
  } else {
    this.classList.add("active");
    ul.style.height = "100%";
  }
});

// 商品tabs監聽
let tabs = document.querySelectorAll(".tabs > span");
tabs.forEach((tab, idx) => {
  tab.addEventListener("click", function () {
    tabs.forEach((item) => {
      item.classList.remove("active");
    });
    renderSlide(idx);
  });
});

// render
renderSlide();
function renderSlide(idx = 0) {
  tabs[idx].classList.add("active");
  // 使用 Swiper 的 removeAllSlides() 清空所有 slide
  mySwiper.removeAllSlides();
  if (mySwiper) {
    // 銷毀舊的 Swiper，並清理 DOM 內樣式
    mySwiper.destroy();
  }
  let cate = ["cake", "sweet", "set"];
  let slidesData = data[cate[idx]];
  let slideCount = slidesData.length; // 計算 slide 數量
  mySwiper = getSlide(slideCount > 3); // 重新設定 Swiper，根據 slideCount 動態設定 loop

  for (const obj of slidesData) {
    // 生成swiper-slide元素
    let slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    let item = document.createElement("div");
    item.classList.add("item");
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    item.appendChild(img);
    item.appendChild(h3);
    item.appendChild(p);
    slide.appendChild(item);

    img.src = obj.img;
    h3.textContent = obj.name;
    p.textContent = obj.desc;

    // 使用 Swiper 的 appendSlide() 新增 slide
    mySwiper.appendSlide(slide);
  }

  if (slideCount > 3) {
    // 手動移除 .swiper-button-lock
    document
      .querySelector(".swiper-button-prev")
      .classList.remove("swiper-button-lock");
    document
      .querySelector(".swiper-button-next")
      .classList.remove("swiper-button-lock");
  }
}
