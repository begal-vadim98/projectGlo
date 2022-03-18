import {animate, bounceEaseInOut} from './helpers'

const modalAnimate = (duration, time, modalHeader, overlay,   displayStyle = 'flex') => {

  const modal = document.querySelector(modalHeader),
    modalOverlay = document.querySelector(overlay);

  animate({
   duration: duration,
   timing: bounceEaseInOut,
   draw: function(progress) {

     let linear = Math.abs(time - progress);

       modal.style.opacity =  linear;
       modalOverlay.style.opacity = linear;

       modal.style.display = displayStyle;
       modalOverlay.style.display = displayStyle;
      //  modal.style.display = displayStyle;

       if(+modal.style.opacity === 0 ) {
        modal.style.display = 'none';
        modalOverlay.style.display = 'none';
       } 
   
     }
     });
  
 }

export default modalAnimate