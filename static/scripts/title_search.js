import {postApi, getApi} from "./data_handler.js";
import {renderData, showAnswer, renderRandomQuestion, renderAnswer} from "./render_data.js";

const searchForm = document.querySelector('#title-search-form');
searchForm.addEventListener('submit', event => event.preventDefault());

function liveSearch() {
    const input = document.querySelector('#title-search-input');
    input.addEventListener('input', event => {
        let searchFor = input.value;
        postApi('/search-title', searchFor, renderData)
    })
}

liveSearch();
