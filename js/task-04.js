let counterValue = 0;

const currentValue = document.querySelector('#value');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

btnDecrement.addEventListener("click", onBtnDecrClick)
btnIncrement.addEventListener("click", onBtnIncrClick)


function onBtnDecrClick() {
    counterValue -= 1;
    return currentValue.textContent = counterValue
}

function onBtnIncrClick() {
    counterValue += 1;
    return currentValue.textContent = counterValue
}