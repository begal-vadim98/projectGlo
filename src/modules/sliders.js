import Swiper, { Navigation } from 'swiper';

const sliders = () => {

  const swiperBenefits = new Swiper('.benefits-inner', {
   
    modules: [Navigation],
    loop: true,
    navigation: {
      nextEl: '.benefits__arrow--right',
      prevEl: '.benefits__arrow--left',
    },
  
    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetween: 0
      },
    }
  });

  const swiperSirvice = new Swiper('.service-slider', {

    // configure Swiper to use modules
    modules: [Navigation],
    
    loop: true,
  navigation: {
    nextEl: '.services__arrow--right',
    prevEl: '.services__arrow--left',
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
  }
  });

}

export default sliders