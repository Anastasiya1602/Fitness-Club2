const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 0
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    952: {
      slidesPerView: 3,
      spaceBetween: 0
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 0
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 0
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});