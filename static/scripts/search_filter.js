import {postApi, getApi} from "./data_handler.js";

const moduleCards = document.querySelectorAll('.module.card__content');
const categoryCards = document.querySelectorAll('.category.card__content');


moduleCards.forEach(moduleCard => {
    moduleCard.addEventListener('click', event => {
        moduleCard.classList.toggle('js-selected');
        let selectedModuleCards = document.querySelectorAll('.module.js-selected');
        let valueList = [];
        selectedModuleCards.forEach(card => {
            valueList.push(card.dataset.module)
            console.log(valueList)
            postApi('/search-result', valueList, renderData)
        })
    })
})

categoryCards.forEach(categoryCard => {
    categoryCard.addEventListener('click', event => {
        categoryCard.classList.toggle('js-selected');
    })
})

function renderData(data) {
    console.log(data)
    const resultList = document.querySelector('#result-list');
    resultList.innerHTML = '';
    data.forEach(item => {
        resultList.innerHTML +=
        `<li data-module="${item.module_id}" data-category="${item.category_id}">
            <a href="/question/${item.id}">${item.title}</a>
        </li>`
    })
}
