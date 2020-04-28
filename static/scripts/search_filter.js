import {postApi, getApi} from "./data_handler.js";

const moduleCards = document.querySelectorAll('.module.card__content');
const categoryCards = document.querySelectorAll('.category.card__content');

const allCards = document.querySelectorAll('.card__content');
allCards.forEach(card => {
    card.classList.toggle('js-selected');
})

function collectIds() {
    let searchBy = [];

    const selectedModuleCards = document.querySelectorAll('.module.card__content.js-selected');
    selectedModuleCards.forEach(selectedCard => {
        searchBy.push({module_id: selectedCard.dataset.module});
    })
}
//
// moduleCards.forEach(moduleCard => {
//     moduleCard.addEventListener('click', event => {
//         moduleCard.classList.toggle('js-selected');
//         let selectedModuleCards = document.querySelectorAll('.module.js-selected');
//         let idList = {};
//         selectedModuleCards.forEach(card => {
//             idList.module_id = card.dataset.module;
//             postApi('/search-result', idList, renderData)
//         })
//     })
// })
//
// categoryCards.forEach(categoryCard => {
//     categoryCard.addEventListener('click', event => {
//         categoryCard.classList.toggle('js-selected');
//         let idList = {};
//         let selectedCategoryCards = document.querySelectorAll('.category.js-selected');
//         selectedCategoryCards.forEach(card => {
//             idList.category_id = card.dataset.category
//             postApi('/search-result', idList, renderData)
//         })
//     })
// })

function renderData(data) {
    const resultList = document.querySelector('#result-list');

    resultList.innerHTML = '';
    data.forEach(item => {
        resultList.innerHTML +=
        `<li data-module="${item.module_id}" data-category="${item.category_id}">
            <a href="/question/${item.id}">${item.title}</a>
        </li>`
    })
}
