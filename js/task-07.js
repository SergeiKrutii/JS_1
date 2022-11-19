const inputRef = document.querySelector('#font-size-control')
// console.log(inputRef.range)

const spanRef = document.querySelector('#text')
// console.log(spanRef.style.fontSize)
inputRef.addEventListener('input', onInputChange)

function onInputChange(event) {
    console.log(`значение изменилось на ${event.currentTarget.value}`)
    spanRef.style.fontSize = event.currentTarget.value + 'px';
}

