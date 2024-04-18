function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const box = document.querySelector('#boxes');
const btnDestroy = document.querySelector('button[data-destroy]');
const btnCreate = document.querySelector('button[data-create]');
const input = document.querySelector('input[type = "number"]');



btnCreate.addEventListener('click', onBtnClickCreateAmount);
btnDestroy.addEventListener('click', destroyBoxes);

function onBtnClickCreateAmount() {
  createBoxes(input.value) 
}

function createBoxes(amount) {
  const arrayBox = [];
  for(let i = 1; i <= amount; i++) {
    const boxSize = 20;
    const createBox = document.createElement('div');
    createBox.style.width = `${boxSize + i*10}px`;
    createBox.style.height = `${boxSize + i*10}px`;
    createBox.style.backgroundColor = getRandomHexColor();
    arrayBox.push(createBox);
  }
  box.prepend(...arrayBox);
}

function destroyBoxes() {
  box.innerHTML = "";
}