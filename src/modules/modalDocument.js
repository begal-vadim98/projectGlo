const modalDocument = () => {
  const sertificate = document.querySelectorAll('.sertificate-document');

  const render = (elem) => {
    const overlay = document.createElement('div'),
      modal = document.createElement('div'),
      img = document.createElement('img'),
      close = document.createElement('span');

    modal.classList.add('modal-document');
    overlay.classList.add('modal-document__overlay');
    close.classList.add('modal-document__close');

    img.src = elem.href;

    modal.append(img);
    modal.append(close);
    overlay.append(modal);
    document.body.append(overlay);

    window.addEventListener('click', (e) => {
      if(e.target === close || e.target === overlay) document.body.removeChild(overlay);
    })
  }

  sertificate.forEach(btn => {

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      render(btn)
    })

  })
  
}
export default modalDocument