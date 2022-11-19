function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  divFormRef: document.querySelector('#controls'),
  inputRef: document.querySelector('input'),
  buttonsRef: document.querySelectorAll('button'),
  divBoxRef: document.querySelector('#boxes'), 
};

refs.buttonsRef[0].addEventListener('click', createBoxes);
refs.buttonsRef[1].addEventListener('click', destroyDiv);

function createBoxes() {
  const amount = Number(refs.inputRef.value);
  
  const baseSizeDiv = 30;

  for (let i = 0; i < amount; i += 1){
      const newDiv = document.createElement('div');
      newDiv.style.width = `${baseSizeDiv + i * 10}px`;
      newDiv.style.height = `${baseSizeDiv + i * 10}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    refs.divBoxRef.append(newDiv);  
    }
}

function destroyDiv() {

  refs.divBoxRef.replaceChildren()   //<========= или можно так 
  // refs.divBoxRef.innerHTML = ''; 
  }  


    



