const formRef = document.querySelector('.login-form');
// console.log(formRef)
// formRef.elements.email.value = 'sda@mail.com'
// console.log(formRef.elements.email.value)
formRef.addEventListener('submit', onFormSubmit)




function onFormSubmit (event)  {
    event.preventDefault();
    // console.dir(event.currentTarget.elements.email.valeu)

    const emailValue = event.currentTarget.elements.email.value;
    console.log(emailValue)
    

    const passwordValue = event.currentTarget.elements.password.value;


    if (emailValue === '' || passwordValue === '') {
       return window.alert('Заполните все поля!!')
        
    }

    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
        console.log(`name input = ${name}, value = ${value}`);
        // console.log('onFormSubmit : name', name);
    }) 

    formRef.reset();

};

