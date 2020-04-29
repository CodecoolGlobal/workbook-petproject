from flask import Flask, render_template, url_for, request, redirect, get_flashed_messages
import os
from data import queries
import json
import random
import json
import util
from data import queries
import re
app = Flask('workbook')


@app.route('/')
@app.route('/index', methods=['GET'])
def main_page():
    modules = queries.get_all_modules()
    categories = queries.get_all_categories()
    all_questions = queries.get_all_questions()
    return render_template('index.html', modules=modules, categories=categories, all_questions=all_questions)


@app.route('/question/<id>')
def question_page(id):
    question = queries.get_question_by_id(id)
    return render_template('question.html', question=question)


@app.route('/save-new-answer', methods=["POST"])
def save_new_answer():
    new_answer = request.get_json()
    util.new_answer(new_answer)
    return new_answer


@app.route('/edit-answer', methods=["POST"])
def save_edited_answer():
    new_answer = request.get_json()
    util.save_edited_answer(new_answer)
    return new_answer


@app.route('/search-result', methods=['POST'])
@app.route('/filter-question', methods=['POST'])
def search_result():
    search_by = request.get_json()
    result = queries.get_specific_questions(search_by)
    return json.dumps(result)


@app.route('/search-title', methods=['POST'])
def search_title():
    key_word = request.get_json()
    result = queries.get_question_by_title(key_word)
    return json.dumps(result)


@app.route('/random-question')
def get_random_question():
    return render_template('random-question.html')


@app.route('/random-question-all')
def get_random_questions_from_all():
    questions = json.loads(json.dumps(queries.get_a_random_question()))
    random_index = random.randint(0, (len(questions)) - 1)
    question = questions[random_index]
    return json.dumps(question)


@app.route('/search/<modules>/<categories>')
def search_by_modules_and_categories(modules, categories):
    new_modules = [str(s) for s in re.findall(r'-?\d+\.?\d*', modules)]
    if len(new_modules) == 0:
        new_modules = util.MODULS
    new_categories = [str(s) for s in re.findall(r'-?\d+\.?\d*', categories)]
    if len(new_categories) == 0:
        new_categories = util.CATEGORIES
    questions = queries.search_by_modules_and_categories(tuple(new_modules), tuple(new_categories))
    return json.dumps(questions)


@app.route('/test')
def test():
    modules = queries.get_all_modules()
    categories = queries.get_all_categories()
    return render_template('test.html', modules=modules, categories=categories)


def main():
    app.secret_key = os.urandom(12)
    app.run(debug=True)


if __name__ == '__main__':
    main()
