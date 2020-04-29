import {postApi, getApi, renderData} from "./data_handler.js";


const allCards = document.querySelectorAll('.card__content');
allCards.forEach(card => {
    card.addEventListener('click', event => {
        card.classList.toggle('js-selected');
        collectIds();
    })
})

function collectIds() {
    let searchBy = {};

    const selectedModuleCards = document.querySelectorAll('.module.card__content.js-selected');
    let moduleIds = [];
    selectedModuleCards.forEach(selectedCard => {
        moduleIds.push(selectedCard.dataset.module)
    })

    const selectedCategoryCards = document.querySelectorAll('.category.card__content.js-selected');
    let categoryIds = [];
    selectedCategoryCards.forEach(selectedCard => {
        categoryIds.push(selectedCard.dataset.category)
    })
    searchBy.module_id = moduleIds;
    searchBy.category_id = categoryIds;
    postApi('/filter-question', searchBy, renderData)
}


