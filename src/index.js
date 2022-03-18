import modal from './modules/modal'
import timer from './modules/timer'
import validation from './modules/validationForm'
import sendForm from './modules/sendForm'

modal('#header', '.btn-block', '.header-modal', '.overlay', 'header-modal__close');
modal('#services', '.btn', '.services-modal', '.overlay', 'services-modal__close');
timer('.countdown-text', '26 marth 2022', '.days', '.hours', '.minutes', '.seconds');
validation('user_message', 'fio', 'user_email', 'phone',  'error', 'success');

sendForm({
  formId: '.form-horizontal'
});
sendForm({
  formId: '.header-modal form'
});