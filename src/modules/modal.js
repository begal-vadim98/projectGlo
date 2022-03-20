import modalAnimate from './modalAnimate'


const modal = ( btn, modalHeader, overlay = '.overlay', close) => {

  const buttons = document.querySelectorAll(btn);


// Открытие модального окна
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modalAnimate(300, 0, overlay, modalHeader);

    })
  })
  
// Закрытие модального окна
  document.addEventListener('click', (e) => {
    if(e.target.classList.contains(close) || 
    e.target.classList.contains(overlay.replace(/./, '')) ) {    
      e.preventDefault();  
      modalAnimate(300, 1, overlay, modalHeader);
    }
  })

}

export default modal