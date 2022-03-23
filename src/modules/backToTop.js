import {animate, bounceEaseInOut} from './helpers'
const backToTop = () => {

  const btn = document.querySelector('.smooth-scroll__img'),
    offer = document.querySelector('#offer');

  btn.style.display = 'none';

 

  btn.addEventListener('click', (event) => document.getElementById('header').scrollIntoView({block: "start", behavior: "smooth"}));
    
  window.addEventListener('scroll', () => {
    if(window.pageYOffset > offer.clientHeight + offer.offsetTop) btn.style.display = 'block';
    else btn.style.display = 'none';
  })
}

export default backToTop