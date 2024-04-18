function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const textColor = document.querySelector('.color');
const body = document.querySelector('body');

btnChangeColor.addEventListener('click', onClickBtnColor);

function onClickBtnColor(e) {
  const currentColor = getRandomHexColor()
  body.style.backgroundColor = currentColor;
  textColor.textContent = currentColor

}