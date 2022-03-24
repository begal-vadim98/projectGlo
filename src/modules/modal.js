import modalAnimate from './modalAnimate'


const modal = ( btn, modalHeader, overlay = '.overlay', close) => {

  const buttons = document.querySelectorAll(btn);
  const modal = document.querySelector(modalHeader);
  const modalOverlay = document.querySelector(overlay);
  
  // const serviceText = document.querySelector('.service-text h3');

// Открытие модального окна
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const input = document.querySelector('.form-subject');
      input.value = btn.getAttribute('data-subject');
      modalAnimate(300, 0, overlay, modalHeader);
      
    })
  })
  
// Закрытие модального окна
document.addEventListener('click', (e) => {
  if(e.target.classList.contains(close) || 
  e.target.classList.contains(overlay.replace(/./, '')) ) {    
      e.preventDefault(); 
      modal.style.display = 'none';
      modalOverlay.style.display = 'none';
    }
  })

}

export default modal