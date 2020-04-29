import {postApi} from "./data_handler.js";
import {renderData, showAnswer, renderRandomQuestion, renderAnswer} from "./render_data.js";


const mainContent = document.querySelector('#content-main');
const moduleForm = document.querySelector('#form-modul-select');

moduleForm.addEventListener('submit', event => event.preventDefault());

function moduleButtonEvent() {
    const moduleButton = document.querySelector('#select-module-btn');
    moduleButton.addEventListener('click', handleModuleSearch);
}

function handleModuleSearch() {
    let searchByModuleId;
    const moduleId = document.querySelector('#test-select-module').value;

    if (moduleId === '1') {
        searchByModuleId = chooseRandomNumber(1, 59);
    }
    else if (moduleId === '2') {
        searchByModuleId = chooseRandomNumber(60, 155);
    } else {
        searchByModuleId = chooseRandomNumber(156, 280);
    }
    mainContent.classList.remove('hide');

    postApi('/random-question-module', searchByModuleId, renderRandomQuestion)
}

moduleButtonEvent();

function chooseRandomNumber(min, max) {
    return Math.floor(Math.random() * (+max - +min) + +min)
}
