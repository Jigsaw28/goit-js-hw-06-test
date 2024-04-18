const categoriesList = document.querySelector('#categories')
const categoriesItem = categoriesList.querySelectorAll('li.item')

console.log(`number of categories: ${categoriesItem.length}`)

const arrayItems = [...categoriesItem]

const categories = arrayItems.forEach((item) => {
    const firstEl = item.firstElementChild.textContent;
    const elementsInCategory = item.lastElementChild.children.length;
    console.log(`Category: ${firstEl}`)
    console.log(`Elements: ${elementsInCategory}`)
})