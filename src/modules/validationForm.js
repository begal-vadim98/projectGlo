import validate from './validate'

const validation = (formMessege, formName, formEmail, formTell, invalidClass = 'invalid', validClass = 'valid' ) => {

  const  regPhone = /[^0-9]/,
    regName = /([^А-ЯA-Z. ])+/gi;

const forInputValid = (reg, elem) => {
  const inputTex = document.querySelectorAll(`form input[name=${elem}]`);

  inputTex.forEach(element => {

    element.addEventListener('input', () => {
      element.value = element.value.replace(reg, "");
      if (element.classList.contains(invalidClass) || element.classList.contains(validClass))
        validate([element]);
    })

   

    element.addEventListener('invalid', event => {
      event.preventDefault();
      validate([event.target]);
    });
  })

}

 
    
    
 

  const validationFormTel = () => {

    
    function maskPhone(selector, masked = '+7 (__) --') { const elems = document.querySelectorAll(selector);

      function mask(event) {
        const keyCode = event.keyCode;
        const template = masked,
          def = template.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, "");
        let i = 0,
          newValue = template.replace(/[_\d]/g, function (a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
          });
        i = newValue.indexOf("_");
        if (i != -1) {
          newValue = newValue.slice(0, i);
        }
        let reg = template.substr(0, this.value.length).replace(/_+/g,
          function (a) {
            return "\\d{1," + a.length + "}";
          }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
          this.value = newValue;
        }
        if (event.type == "blur" && this.value.length < 5) {
          this.value = "";
        }
      
      }
      
      for (const elem of elems) {
        elem.addEventListener("input", mask);
        elem.addEventListener("focus", mask);
        elem.addEventListener("blur", mask);
      }
      }
    maskPhone(`form input[name=${formTell}]`, '+7__________');
     
  }
  

 
  try {

    forInputValid(regName, formName);
    forInputValid(regPhone, formTell);
    
    validationFormTel();
    

  } catch (error) {
    console.log(error.message)
  }

}

export default validation