import {postApi, renderRandomQuestion} from "./data_handler.js";

const mainContent = document.querySelector('#content-main');
const moduleForm = document.querySelector('#form-modul-select');
const categoryForm = document.querySelector('#form-category-select');

moduleForm.addEventListener('submit', event => event.preventDefault());
categoryForm.addEventListener('submit', event => event.preventDefault());

function moduleButtonEvent() {
    const moduleButton = document.querySelector('#select-module-btn');
    moduleButton.addEventListener('click', handleModuleSearch);
}

function handleModuleSearch() {
    let searchByModuleId = 0;
    const moduleId = document.querySelector('#test-select-module').value;
    console.log(typeof moduleId);
    if (moduleId === '1') {
        searchByModuleId += rando(1, 59);
    }
    if (moduleId === '2') {
        searchByModuleId += rando(60, 155);
    } else {
        searchByModuleId += rando(156, 280);
    }
    console.log(searchByModuleId)
    mainContent.classList.remove('hide');

    postApi('/random-question-module', searchByModuleId, renderRandomQuestion)
}

moduleButtonEvent();
