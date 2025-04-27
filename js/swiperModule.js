var mySwiper = new Swiper(".swiper", {
  loop: true, // 循环模式选项

  // 如果需要分页器
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },

  // 如果需要前进后退按钮
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 1,
  spaceBetween: 0,
  // breakpointsBase: "container",
  breakpoints: {
    1200: {
      //当屏幕宽度大于等于
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
