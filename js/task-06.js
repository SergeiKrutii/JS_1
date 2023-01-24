const inputRef = document.querySelector('#validation-input')

inputRef.addEventListener('input', event => {
  // event.preventDefault();
  inputRef.value = event.currentTarget.value
  console.log(event.currentTarget.value)
})

inputRef.addEventListener('focus', () => {
  console.log('Input в фокусе')
})

inputRef.addEventListener('blur', () => {
  console.log('Input не в фокусе')

  if (inputRef.value.split('').length < inputRef.dataset.length) {
    inputRef.classList.add('invalid')
    inputRef.classList.remove('valid')
  } else {
    inputRef.classList.remove('invalid')
    inputRef.classList.add('valid')
  }
})


