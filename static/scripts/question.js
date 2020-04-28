import {postApi, getApi} from "./data_handler.js";


window.newAnswer = function() {
    const container = document.getElementById('container');
    const childHTML = `<div id="content" class="content"></div>`;
    container.insertAdjacentHTML('beforeend', childHTML);
    const textArea = `<textarea id="answer" placeholder="Your answer" required="required"></textarea>
                      <button id="submit-answer" type="submit">Submit</button>`;
    const content = document.getElementById('content');
    content.insertAdjacentHTML('beforeend', textArea);
    const header = document.getElementById('content-header');
    const answer = document.getElementById('answer-no');
    header.removeChild(answer);
    const addButton = document.getElementById('add-btn');
    header.removeChild(addButton);
    const submitButton = document.getElementById('submit-answer');
    submitButton.addEventListener('click', sendData);
};

function sendData() {
    const newAnswer = document.getElementById('answer').value;
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
    const header = document.getElementById('content');
    const answer = document.getElementById('answer');
    console.log(answer);
    header.removeChild(answer);
    const submitButton = document.getElementById('submit-answer');
    header.removeChild(submitButton);
    const answerHTML = `<div id="answer-is"><h6>${data.answer}</h6><div`;
    header.insertAdjacentHTML('beforeend', answerHTML)
}
