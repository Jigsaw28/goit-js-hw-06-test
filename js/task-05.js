const inputEl = document.querySelector('input#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener("input", onInput);

function onInput(e) {
    spanEl.textContent = e.currentTarget.value === "" ? "Anonymous" :  e.currentTarget.value;
}