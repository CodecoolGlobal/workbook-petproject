import {postApi, getApi} from "./data_handler.js";

const moduleCards = document.querySelectorAll('.module.card__content');
const categoryCards = document.querySelectorAll('.category.card__content');

console.log(moduleCards);
console.log(categoryCards);

moduleCards.forEach(moduleCard => {
    moduleCard.addEventListener('click', event => {
        moduleCard.classList.toggle('js-selected');
    })
})

categoryCards.forEach(categoryCard => {
    categoryCard.addEventListener('click', event => {
        categoryCard.classList.toggle('js-selected');
    })
})
