let cuonterValue = 0;

const listRef = document.querySelector('#counter');

const spanRef = listRef.querySelector('#value')
spanRef.textContent = cuonterValue;


const decrBtnRef = listRef.firstElementChild;
function onDecremCount() {
   spanRef.textContent = cuonterValue -= 1;
}
decrBtnRef.addEventListener('click', onDecremCount);



const incrBtnRef = listRef.lastElementChild;
function onIncremCount() {
    spanRef.textContent = cuonterValue += 1;
}
incrBtnRef.addEventListener('click', onIncremCount);

// console.log(decrBtnRef)
