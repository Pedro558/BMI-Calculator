const modal = document.getElementById('myModal')
const btn = document.getElementById("button");
const closeBtn = document.getElementsByClassName("close")[0]

const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const button = document.querySelector('#button');

const modalText = document.querySelector('#modalText')

const error = document.querySelector('.error')

export{
  modal,
  btn,
  closeBtn,
  weight,
  height,
  button,
  modalText,
  error
}