import {postApi, getApi} from "./data_handler.js";

window.newAnswer = function() {
    const article = document.getElementById('content-main');
    const textArea = `<textarea id="answer-textarea" placeholder="Your answer" required="required"></textarea>
                      <button id="submit-answer" class="button" type="button">Save</button>`;
    article.insertAdjacentHTML('beforeend', textArea);
    const header = document.getElementById('new-answer');
    const answer = document.getElementById('answer-no');
    header.removeChild(answer);
    const addButton = document.getElementById('add-btn');
    header.removeChild(addButton);
    const submitButton = document.getElementById('submit-answer');
    submitButton.addEventListener('click', sendData);
};

function sendData() {
    const newAnswer = document.getElementById('answer-textarea').value;
    const question =document.getElementById('question');
    let data = {
        question_id : question.dataset.id,
        answer : newAnswer,
        module_id : question.dataset.module,
        category_id : question.dataset.category
    };
    console.log(data);
    postApi(`${window.origin}/save-new-answer`, data, showNewAnswer)
}

function showNewAnswer(data) {
    console.log(data);
    const article = document.getElementById('content-main');
    const answer = document.getElementById('new-answer');
    console.log(answer);
    const textarea = document.getElementById('answer-textarea');
    const button = document.getElementById('submit-answer');
    article.removeChild(button);
    article.removeChild(textarea);
    article.removeChild(answer);
    const answerHTML = `<div id="answer-is" data-answer_id="${data.answer_id}"><p>${data.answer}</p><div`;
    article.insertAdjacentHTML('beforeend', answerHTML);
    const editButton = `<button id="edit-button" class="button" type="button" onclick="editAnswer()">Edit</button>`;
    article.insertAdjacentHTML('beforeend',editButton)
}

window.editAnswer =  function () {
    const answer = document.getElementById('answer-is');
    answer.setAttribute('contenteditable','true');
    const header = document.getElementById('content-main');
    const editButton = document.getElementById('edit-button');
    header.removeChild(editButton);
    const buttonHTML = `<button id="edit-save-button" class="button" type="button" onclick="saveEditedAnswer()">Save edit</button>`;
    header.insertAdjacentHTML('beforeend',buttonHTML)
};

window.saveEditedAnswer =  function () {
    console.log('hellobello');
    const answer = document.getElementById('answer-is');
    answer.removeAttribute('contenteditable');
    const header = document.getElementById('content-main');
    console.log(header);
    const saveButton = document.getElementById('edit-save-button');
    console.log(saveButton);
    header.removeChild(saveButton);
    const buttonHTML = `<button id="edit-button" type="button" class="button" onclick="editAnswer()">Edit</button>`;
    header.insertAdjacentHTML('beforeend', buttonHTML);
    const answerId = answer.dataset.answer_id;
    const new_answer = answer.textContent;
    console.log(new_answer);
    let data = {
        answer_id : answerId,
        answer : new_answer
    };
    postApi(`/edit-answer`, data, passCallback)
};

function passCallback(data) {
    console.log(data)
}

//i
