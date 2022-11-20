const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit)

function onFormSubmit (event)  {
    event.preventDefault();

    const emailValue = event.currentTarget.elements.email.value;
    const passwordValue = event.currentTarget.elements.password.value;

    if (!emailValue || !passwordValue) {
       return window.alert('Заполните все поля!!')  
    }

    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
        console.log(`name input = ${name}, value = ${value}`);
    }) 
    formRef.reset();
};

