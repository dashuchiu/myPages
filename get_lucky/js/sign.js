let mainTxt = {
  fortune: {
    cn: "運勢",
    today: "今日運勢",
    week: "本周運勢",
    year: "今年運勢",
  },
  career: {
    cn: "工作",
    search: "找工作",
    salary: "問加薪",
    trouble: "公司小人",
  },
  love: {
    cn: "愛情",
    finding: "找對象",
    confession: "告白結果",
    backTogether: "問複合",
  },
};
// 生成box內容
const title = document.querySelector(".action").dataset.title;
let box = document.querySelector(".box");
let h1 = document.createElement("h1");
h1.textContent = mainTxt[title].cn;
// ol內容
let ol = document.createElement("ol");
for (const key in datas[title]) {
  let li = document.createElement("li");
  li.classList.add("item");
  li.setAttribute("data-subtitle", key);
  li.textContent = mainTxt[title][key];
  ol.appendChild(li);
}
// paper籤詩內容
let paper = document.createElement("div");
paper.classList.add("paper", "none");
let content = document.createElement("div");
content.classList.add("content");
let num = document.createElement("div");
num.classList.add("num");
let span = document.createElement("span");
span.textContent = "第十二籤";
let span2 = document.createElement("span");
span2.textContent = "運勢";
num.appendChild(span);
num.appendChild(span2);
let h3 = document.createElement("h3");
h3.textContent = "大吉";
let poemTxt = document.createElement("div");
poemTxt.classList.add("poemTxt");
let p = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");
let p4 = document.createElement("p");
p.textContent = "福星今日照";
p2.textContent = "萬事順風行";
p3.textContent = "新機隨手握";
p4.textContent = "前途步步榮";
poemTxt.appendChild(p);
poemTxt.appendChild(p2);
poemTxt.appendChild(p3);
poemTxt.appendChild(p4);
content.appendChild(num);
content.appendChild(h3);
content.appendChild(poemTxt);
paper.appendChild(content);
// 開始抽籤btn
let button = document.createElement("button");
button.classList.add("btn");
button.textContent = "開始抽籤";

box.appendChild(h1);
box.appendChild(ol);
box.appendChild(paper);
box.appendChild(button);

// 監聽點擊問題列表
const items = document.querySelectorAll(".item");
let subtitle = "";
items.forEach((item) => {
  item.addEventListener("click", function () {
    items.forEach((item_btn) => {
      // 加過渡效果(.action)
      item_btn.classList.remove("action");
    });
    this.classList.add("action");
    subtitle = this.dataset.subtitle;
  });
});

// 開始抽籤監聽
let chNum = [
  "一",
  "二",
  "三",
  "四",
  "五",
  "六",
  "七",
  "八",
  "九",
  "十",
  "十一",
  "十二",
  "十三",
  "十四",
  "十五",
  "十六",
  "十七",
  "十八",
  "十九",
  "二十",
];
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  if (!subtitle) return;
  let load = document.querySelector("#load");
  load.classList.remove("none");
  setTimeout(function () {
    load.remove();
    let rand = Math.floor(Math.random() * datas[title][subtitle].length);
    let poem = datas[title][subtitle][rand];
    ol.classList.add("none");
    paper.classList.remove("none");
    h1.textContent = mainTxt[title][subtitle];
    span.textContent = "第" + chNum[rand] + "籤";
    span2.textContent = mainTxt[title].cn;
    h3.textContent = poem.luck;
    p.textContent = poem.text.slice(0, 5);
    p2.textContent = poem.text.slice(6, 11);
    p3.textContent = poem.text.slice(12, 17);
    p4.textContent = poem.text.slice(18, 23);
    btn.textContent = "再抽一次";
    btn.setAttribute("onclick", "window.location.reload()");
  }, 3000);
});
