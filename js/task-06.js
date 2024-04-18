const inputValidation = document.querySelector('input[data-length="6"]')

inputValidation.addEventListener("blur", (event) => {
    if(event.currentTarget.value.length === Number(inputValidation.dataset.length)) {
        inputValidation.classList.remove('invalid');
        inputValidation.classList.add('valid');
    } else {
        inputValidation.classList.remove('valid');
        inputValidation.classList.add('invalid');
    }
});