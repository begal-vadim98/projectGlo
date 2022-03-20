import {animate, bounceEaseInOut} from './helpers'
const backToTop = () => {

  const btn = document.querySelector('.smooth-scroll__img'),
    offer = document.querySelector('#offer');

  btn.style.display = 'none';

  const backTop = () => {
    animate({
      duration: 1000,
      timing: bounceEaseInOut,
      draw: function(progress) {
   
        let linear = Math.abs(1 - progress),
          scroll = +document.documentElement.scrollTop;
   
        document.documentElement.scrollTop = scroll *  linear;
    
      }
    });
         
  }

  window.addEventListener('scroll', () => {
    if(window.pageYOffset > offer.clientHeight + offer.offsetTop) btn.style.display = 'block';
    else btn.style.display = 'none';
  })
  btn.addEventListener('click', backTop);
}

export default backToTop