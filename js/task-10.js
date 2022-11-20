const refs = {
  divFormRef: document.querySelector('#controls'),
  inputRef: document.querySelector('input'),
  buttonsRef: document.querySelectorAll('button'),
  createBtnRef: document.querySelectorAll('[data-create]'),
  destroyBtnRef: document.querySelectorAll('[data-destroy]'),
  divBoxRef: document.querySelector('#boxes'), 
};

createBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyDiv);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes() {

const amount = Number(refs.inputRef.value);
const BASE_DIV_SIZE = 30;
const divCollections = [];

  for (let i = 0; i < amount; i += 1){
    const newDiv = document.createElement('div');
    const divSize = BASE_DIV_SIZE + i * 10;
    newDiv.style = `width: ${divSize}px, height: ${divSize}px, background-color: ${getRandomHexColor()} `
    divCollections.push(newDiv);
  }
  refs.divBoxRef.append(...divCollections);  
}

function destroyDiv() {
  refs.divBoxRef.replaceChildren()  
  }  


    



