function destroySwiperOrEnabled() {
  const breakpoint = window.matchMedia('(min-width:1200px)');
  let mySwiper;

  const breakpointChecker = () => {
    if (breakpoint.matches === true) {
      if (mySwiper !== undefined) {
        mySwiper.destroy(true, true);
      }
      return;

    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };

  function enableSwiper() {
    mySwiper = new Swiper('.swiper', {
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

      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        }
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    });
  };

  breakpoint.addListener(breakpointChecker);

  breakpointChecker();
}

destroySwiperOrEnabled()