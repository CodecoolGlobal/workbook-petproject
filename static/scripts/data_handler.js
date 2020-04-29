export function getApi(url, callback) {

    fetch(url, {
        method: 'GET',
        credentials: 'same-origin'
    })
        .then(response => response.json())
        .then(json_response => callback(json_response));
}

export function postApi(url, data, callback) {
    // it is not called from outside
    // sends the data to the API, and calls callback function

    fetch(url, {
      method: "POST",
      headers: { 'Accept': 'application/json',
          'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
        .then(data => callback(data))
    ;
}

export function renderData(data) {
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

export function renderRandomQuestion(data) {
    const randomQuestion = document.querySelector('#random-question');
    randomQuestion.innerHTML = '';

    data.forEach(item => {
        randomQuestion.innerHTML += `
            <h3>${item.question}</h3>
            <small>Module: ${item.module}</small>
            <small>Category: ${item.category}</small>
            <p class="hide">${item.answer}
            <button id="show-answer">Show Answer</button>
        `
    })
}




