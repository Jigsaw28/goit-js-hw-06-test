const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const { email, password } = formLogin.elements
    if (email.value.length === 0 || password.value.length === 0) {
        alert('Please fill in the fields!')
    }
    const obj = { email: email.value, password: password.value }
    console.log(obj)
    e.currentTarget.reset()
}
