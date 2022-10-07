import { btn } from "../elements.js"
import { checkNumber } from "../checkNumber.js";
import { GetOutModal } from "./getOutModal.js";

export function Modal(){
  btn.addEventListener('click', (e)=>{
    e.preventDefault()
    checkNumber()
  })
  
  GetOutModal()
}