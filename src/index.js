import modal from './modules/modal'
import timer from './modules/timer'
import validation from './modules/validationForm'
import sendForm from './modules/sendForm'
import sliders from './modules/sliders'
import calc from './modules/calc'
import backToTop from './modules/backToTop'

modal('#services .btn', '.services-modal', '.overlay', 'services-modal__close');
modal('#header .btn-block', '.header-modal', '.overlay', 'header-modal__close');

timer('.countdown-text', '26 marth 2022', '.days', '.hours', '.minutes', '.seconds');
validation('user_message', 'fio', 'user_email', 'phone',  'error', 'success');

sliders();

sendForm({
  formId: '.form-horizontal',
  someElem: [{
    type: 'input',
    id: 'calc-total'
  }]
});
sendForm({
  formId: '.header-modal form',
  someElem: [{
    type: 'input',
    id: 'calc-total'
  }]
});

sendForm({
  formId: '.services-modal form',
  someElem: [{
    type: 'input',
    id: 'calc-total'
  }]
});

calc();

backToTop();
