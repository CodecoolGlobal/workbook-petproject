import {postApi} from "./data_handler.js";

const modal = document.querySelector('#modal-answer');
const modalBody = document.querySelector('#modal__body');
const modalOverlay = document.querySelector('#modal--overlay');
const closeButton = document.querySelector(".modal__close-button");

const resultList = document.querySelector('#result-list');
const randomQuestion = document.querySelector('#random-question');


export function renderData(data) {
    resultList.innerHTML = '';
    data.forEach(item => {
        resultList.innerHTML +=
        `<li data-module="${item.module_id}" data-category="${item.category_id}">
            <a href="/question/${item.id}">${item.title}</a>
        </li>`
    })
}

export function renderRandomQuestion(data) {
    randomQuestion.innerHTML = '';
    data.forEach(item => {
        randomQuestion.innerHTML += `

            <h3>${item.question}</h3>
            <small>Module: ${item.module}</small><br>
            <small>Category: ${item.category}</small>
            <button data-questionid="${item.id}" type="button" id="show-answer-btn">Show Answer</button>
        `
    })
    showAnswer();
}

export function renderAnswer(data) {
    console.log(data);
    openModal();
    createCloseButton();

    if (data.length === 0) {
        modalBody.innerHTML = '';
        modalBody.innerHTML += `<p>There is no answer yet! Go to Workbook, click on the question and save a new answer!</p>`
    } else {
        modalBody.innerHTML = '';
        data.forEach(item => {
        modalBody.innerHTML += `<p>${item.answer}</p>`
        })
    }
}


export function showAnswer() {
    const showAnswerButton = document.querySelector('#show-answer-btn');
    showAnswerButton.addEventListener('click', event => {

        const questionId = showAnswerButton.dataset.questionid;
        console.log(questionId)
        postApi('/answer-by-question-id', questionId, renderAnswer)
    })
}

function openModal() {
    modalOverlay.classList.remove('hide');
    modal.classList.remove('hide');
}

function createCloseButton() {
    closeButton.addEventListener('click', event => {
        modal.classList.add('hide');
        modalOverlay.classList.add('hide');
    })
}





