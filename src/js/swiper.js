const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 500,
  grabCursor: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});