const inputSizeControl = document.querySelector('input');
const text = document.querySelector('#text');

inputSizeControl.addEventListener('input', onChange)

function onChange(e) {
    const currentValue = e.currentTarget.value;
   text.style.fontSize = `${currentValue}px`
}