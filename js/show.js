import { Calc } from "./calc.js";
import { error, modal, modalText } from "./elements.js"

export function Show(){
  function showError(){
    error.classList.add('open')
  }
  
  function showResult(){
    modal.style.display = "block";
    modalText.innerHTML = `Your BMI is ${Calc()}`
    
    if (error.classList.contains('open')) {
      error.classList.remove('open')
    } 
  }

  return{
    showError,
    showResult
  }

}