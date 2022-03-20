import Swiper, { Navigation, Pagination } from 'swiper';

const sliders = () => {

  const slidersServices = new Swiper('.swiper', {

    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    slidesPerView: 2,
    spaceBetween: 10,
  // Navigation arrows
  navigation: {
    nextEl: '.services__arrow--right',
    prevEl: '.services__arrow--left',
  },

 
  });

  // const swiper = new Swiper('.benefits-inner', {

  //   // configure Swiper to use modules
  //   modules: [Navigation, Pagination],
  //   slidesPerView: 3,
  // // Navigation arrows
  // navigation: {
  //   nextEl: '.benefits__arrow--right',
  //   prevEl: '.benefits__arrow--left',
  // },

 
  // });

}

export default sliders