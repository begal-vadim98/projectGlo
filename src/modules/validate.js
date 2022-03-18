const validate = (list) => {

  let success = true;

  let regPhone = /\d[\d\(\)\ -]{9,11}\d$/,
    regName = /^[а-яА-Я\ /]{2,16}$/;

  list.forEach(input => {
    input.classList.remove('error');
    input.classList.remove('success');
    
    if ((input.name === 'phone') && regPhone.test(input.value) !== true ||
      (input.name === 'fio') && regName.test(input.value) !== true) {

       input.classList.add('error');

      }
    else input.classList.add('success');

    if(!input.classList.contains('success')) success = false;
  })

  return success;
}

export default validate