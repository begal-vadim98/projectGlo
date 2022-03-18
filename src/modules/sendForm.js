import validate from './validate'
import modalAnimate from './modalAnimate'

const sendForm = ({
  formId,
  someElem = []
}) => {
  const form = document.querySelector(formId);

  const statusBlock = document.createElement('div');

  const errorText = 'Ошибка...';
  const successText = 'Спасибо! Мы с вами свяжемся';


  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }).then((response) => response.json())
  }

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};



    formData.forEach((val, key) => {
      formBody[key] = val;
    })


    if (validate(formElements)) {

      statusBlock.textContent = "";

      form.append(statusBlock);

      sendData(formBody)
        .then(data => {

       
          statusBlock.textContent = successText;

          setTimeout(() => form.removeChild(statusBlock), 1500);
          setTimeout(() => modalAnimate(300, 1, '.overlay', '.header-modal'), 1500);


          formElements.forEach(input => {

            input.value = "";
            input.classList.remove('error');
            input.classList.remove('success');

          });
        })
        .catch(error => statusBlock.textContent = errorText);

    }

  }

  try {

    if (!form) throw new Error('Форма не найдена');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      submitForm();

    })
  } catch (error) {
    console.log(error.message)
  }
}

export default sendForm