let count = 0;
let run;
let box = document.querySelector(".box");

if (window.innerWidth <= 920) {
  runSlide();
} else {
  box.style.transform = "translateX(0)";
}

window.addEventListener("resize", function () {
  if (window.innerWidth >= 920) {
    clearInterval(run);
    box.style.transform = "translateX(0)";
  } else {
    runSlide();
  }
});

function runSlide() {
  clearInterval(run);
  run = setInterval(function () {
    count++;
    if (count >= 3) {
      count = 0;
    }
    box.style.transition = "all 800ms ease";
    box.style.transform = "translateX(" + count * -100 + "%)";
  }, 2000);
  document
    .querySelector(".fa-caret-left")
    .addEventListener("click", function () {
      count--;
      if (count < 0) {
        count = 2;
      }
      box.style.transform = "translateX(" + count * -100 + "%)";
    });
  document
    .querySelector(".fa-caret-right")
    .addEventListener("click", function () {
      count++;
      if (count >= 3) {
        count = 0;
      }
      box.style.transform = "translateX(" + count * -100 + "%)";
    });
}
