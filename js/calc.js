import { weight, height} from "./elements.js"

export function Calc(){
    let weightValue = weight.value
    let heightValue = height.value

    let imc = (weightValue / ((heightValue / 100) ** 2)).toFixed(2)

    return (imc)
  }