import {postApi, getApi, renderData} from "./data_handler.js";

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
