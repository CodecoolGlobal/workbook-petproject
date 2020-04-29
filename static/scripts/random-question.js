const mainContainer = document.getElementById('container');
mainContainer.style.visibility = 'hidden';


function start() {
    mainContainer.style.visibility = 'visible';
    const btn = document.getElementById('start-button');
    btn.style.visibility = 'hidden';
    getNextQuestion()
}


function getNextQuestion() {
    api_get(`${window.origin}/random-question-all`, initData)
}

function api_get(url, callback) {
    fetch(url, {
        method: 'GET',
        credentials: 'same-origin'
    })
        .then(response => response.json())
        .then(json_response => callback(json_response));
}

function initData(data) {
    const container = document.getElementById('question-container');
    const content = document.getElementById('question');
    container.removeChild(content);
    console.log(data);
    const HTMLString = `<div id="question" class="question">
                        <p>${data.title}</p>
</div>`;
    container.insertAdjacentHTML('beforeend', HTMLString)
}
