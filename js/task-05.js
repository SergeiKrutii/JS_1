const inputRef = document.querySelector('#name-input')
const spanRef = document.querySelector('#name-output')
// spanRef.textContent = inputRef.value;

function onInput(event) {
    event.preventDefault()
    spanRef.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        spanRef.textContent = 'Anonymous';
    }
}
inputRef.addEventListener('input', onInput)