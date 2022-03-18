import modalAnimate from './modalAnimate'


const modal = (idsection, btn, modalHeader, overlay = '.overlay', close) => {

  const section = document.querySelector(idsection),
    buttons = section.querySelectorAll(btn),
    modal = document.querySelector(modalHeader);


// Открытие модального окна
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (screen.availWidth >= 768) modalAnimate(300, 0, overlay, modalHeader);

    })
  })
  
// Закрытие модального окна
  modal.addEventListener('click', (e) => {
    if(e.target.classList.contains(close)) {    
      e.preventDefault();  
      modalAnimate(300, 1, overlay, modalHeader);
    }
  })

}

export default modal