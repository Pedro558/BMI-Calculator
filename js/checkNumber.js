import { weight, height } from "./elements.js"
import { Show } from "./show.js"

export function checkNumber(){
  let show = Show()
  
  let weightValue = weight.value
  let heightValue = height.value
  const regex = /^[0-9]+$/

  if(!weightValue.match(regex) || !heightValue.match(regex)){
    show.showError()
  } else{
    show.showResult()
  }

}