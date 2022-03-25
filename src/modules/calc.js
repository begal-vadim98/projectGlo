import {animate} from './helpers'

const calc = (price) => {
  const calcBlock = document.querySelector('.calc-block');

  if(calcBlock) {

    const calcType = calcBlock.querySelector('#calc-type'),
    calcTypeMaterial = calcBlock.querySelector('#calc-type-material'),
    calcInput = calcBlock.querySelector('#calc-input'),
    total = document.getElementById('calc-total');
    

    const animateChangeTotal = (value) => {
      animate({
        duration: 500,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
            total.value =  Math.round(value * progress);
        }
      });
    }

    const countCalc = () => {

      const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
      const calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;

      let totalValue = 0;


      if(calcTypeValue && calcTypeMaterialValue && calcInput.value) {
        totalValue = price *  calcInput.value * calcTypeValue * calcTypeMaterialValue;
        animateChangeTotal(totalValue)
      } else  totalValue = 0; 
      
      
      

    }
  
      calcBlock.addEventListener('input', (e) => {

        if(e.target === calcType ||
          e.target ===  calcTypeMaterial ||
          e.target === calcInput ) countCalc();
        
      })
  }
  
}

export default calc