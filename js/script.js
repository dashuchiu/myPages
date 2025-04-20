/* main web 輪播作品資料生成 */
const slideWrapper = document.querySelector(".swiper-wrapper");

for (const key of data) {
  let slideCard = document.createElement("div");
  slideCard.classList.add("swiper-slide", "card");

  let cardImg = document.createElement("div");
  cardImg.classList.add("card-img");
  let pic = document.createElement("img");
  pic.setAttribute("src", `./images/web-item-${key.id}.jpg`);

  cardImg.appendChild(pic);

  let cardContent = document.createElement("div");
  cardContent.classList.add("card-content");
  let title = document.createElement("h3");
  title.textContent = key.title;
  let desc = document.createElement("p");
  desc.textContent = key.desc;

  cardContent.append(title, desc);

  for (const tag of key.tags) {
    let tagItem = document.createElement("span");
    tagItem.classList.add("tag");
    tagItem.textContent = tag;
    cardContent.appendChild(tagItem);
  }

  let btnPlay = document.createElement("a");
  btnPlay.classList.add("btnPlay");
  btnPlay.setAttribute("href", key.url);
  btnPlay.setAttribute("target", "_blank");
  btnPlay.textContent = "▷DEMO";

  cardContent.appendChild(btnPlay);
  slideCard.append(cardImg, cardContent);
  slideWrapper.appendChild(slideCard);
}

/* web / design 按鈕頁面切換 */
const btnGroup = document.querySelector("#btn-group");
const mainWeb = document.querySelector(".web");
const mainDesign = document.querySelector(".design");

btnGroup.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  const isWeb = e.target.id === "btn-web";

  mainWeb.classList.toggle("d-none", !isWeb);
  mainDesign.classList.toggle("d-none", isWeb);

  // 切換 active class
  btnGroup.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));
  e.target.classList.add("active");
});
