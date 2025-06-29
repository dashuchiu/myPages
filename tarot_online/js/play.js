// 開始抽牌
const start = document.querySelector("#start");
const main = document.querySelector("main");
const play_btn = document.querySelector("#play");
play.addEventListener("click", function () {
  start.remove();
  getRand();
  main.style.opacity = "1";
});
// get隨機數字跟正反向
let cardArr = [];
function getRand() {
  let cardSet = new Set();
  while (cardSet.size < 3) {
    cardSet.add(Math.floor(Math.random() * 22));
  }
  cardArr = [...cardSet].map((num) => {
    return {
      num: num,
      dir: Math.random() < 0.5 ? 0 : 1,
    };
  });

  let front = document.querySelectorAll(".front");
  for (let i = 0; i < 3; i++) {
    front[i].style.backgroundImage = "url(" + data[cardArr[i].num].page + ")";
    if (cardArr[i].dir === 1) {
      front[i].classList.add("reverse");
    }
  }
}
// 卡牌對應資料跟aside的內容
let card = document.querySelectorAll(".card");
let aside = document.querySelector("aside");
let box = document.querySelector("aside .box");
let replay_btn = document.querySelector("#replay");
let timeline = ["past", "present", "future"];
card.forEach((card, idx) => {
  card.addEventListener("click", function () {
    card.classList.add("rot");
    aside.style.transform = "translateX(0)";
    box.children[0].textContent = data[cardArr[idx].num].name;
    box.children[1].textContent =
      data[cardArr[idx].num][timeline[idx]][cardArr[idx].dir];
    box.children[2].addEventListener("click", function () {
      aside.style.transform = "translateX(-100%)";
      replay_btn.style.display = "block";
    });
  });
});
// 輪播
const slide = document.querySelector(".slide");
let count = 0;
let run;
// 監聽螢幕大小去執行輪播
if (window.innerWidth <= 1024) {
  runSlide();
} else {
  slide.style.transform = "translateX(0)";
}

window.addEventListener("resize", function () {
  if (window.innerWidth >= 1024) {
    clearInterval(run);
    slide.style.transform = "translateX(0)";
  } else {
    clearInterval(run);
    runSlide();
  }
});
// 輪播
function runSlide() {
  run = setInterval(function () {
    count++;
    if (count > 2) {
      count = 0;
    }
    slide.style.transform = "translateX(" + count * -100 + "%)";
  }, 2000);
  // 左右按鈕控制輪播
  const prev = document.querySelector("#prev");
  const next = document.querySelector("#next");
  next.addEventListener("click", function () {
    count++;
    if (count > 2) {
      count = 0;
    }
    slide.style.transform = "translateX(" + count * -100 + "%)";
  });
  prev.addEventListener("click", function () {
    count--;
    if (count < 0) {
      count = 2;
    }
    slide.style.transform = "translateX(" + count * -100 + "%)";
  });
}
