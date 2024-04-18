const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')
const array = [];

const ingredientsList = ingredients.map(item => {
  const listItem = document.createElement('li');
  listItem.textContent = item
  listItem.classList.add('item')
  array.push(listItem);
} )

list.append(...array)
console.log(list)

