
const btnRef = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');
const spanRef = document.querySelector('.color');

btnRef.addEventListener('click', onChangeBtnColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onChangeBtnColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = bodyRef.style.backgroundColor;
}

