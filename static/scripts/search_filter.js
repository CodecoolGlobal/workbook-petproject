import {postApi, getApi} from "./data_handler.js";

const moduleCards = document.querySelectorAll('.module.card__content');
const categoryCards = document.querySelectorAll('.category.card__content');

console.log(moduleCards);
console.log(categoryCards);

moduleCards.forEach(moduleCard => {
    moduleCard.addEventListener('click', event => {
        moduleCard.classList.toggle('js-selected');
        getData()
    })
});

categoryCards.forEach(categoryCard => {
    categoryCard.addEventListener('click', event => {
        categoryCard.classList.toggle('js-selected');
    })
});


function getData() {
    let moduleIds = [];
    let categoryIds = [];
    const selectedModules = document.querySelectorAll('.module.card__content.js-selected');
    selectedModules.forEach(function (item) {
        moduleIds.push(item.dataset.module)
    });
    console.log(moduleIds);
    const selectedCategories = document.querySelectorAll('.category.card__content.js-selected');
    selectedCategories.forEach(function (item) {
        categoryIds.push(item.dataset.category)
    });
    console.log(categoryIds)
}
