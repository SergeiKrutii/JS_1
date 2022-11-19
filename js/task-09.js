function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const btnRef = document.querySelector('.change-color');
// console.log(btnRef)
const bodyRef = document.querySelector('body');
// bodyRef.style.backgroundColor = '#2a2a2a';
// console.dir(bodyRef.style.backgroundColor)

btnRef.addEventListener('click', onChangeBtnColor);

function onChangeBtnColor() {
  const spanRef = document.querySelector('.color');

  bodyRef.style.backgroundColor = getRandomHexColor();
  console.log(bodyRef.style.backgroundColor)
  spanRef.textContent = bodyRef.style.backgroundColor;
}