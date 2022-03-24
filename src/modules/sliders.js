import Swiper from 'swiper/bundle';
const sliders = () => {

  const swiperBenefits = new Swiper('.benefits-inner', {
 
    // centerInsufficientSlides: true,
    navigation: {
      nextEl: '.benefits__arrow--right',
      prevEl: '.benefits__arrow--left',
    },

    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    }
  });

  const swiperSirvice = new Swiper('.service-slider', {
    navigation: {
      nextEl: '.services__arrow--right',
      prevEl: '.services__arrow--left',
    },
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: 10,
        grid: {
          rows: 1,
          fill: 'row'
        }
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 10,
        grid: {
          rows: 2,
          fill: 'row'
        }
      },
    }

  });

}

export default sliders