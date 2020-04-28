from flask import Flask, render_template, url_for, request, redirect, get_flashed_messages
import os
from data import queries
import json
app = Flask('workbook')


@app.route('/')
@app.route('/index', methods=['GET'])
def main_page():
    modules = queries.get_all_modules()
    categories = queries.get_all_categories()
    all_questions = queries.get_all_questions()
    return render_template('index.html', modules=modules, categories=categories, all_questions=all_questions)


@app.route('/search-result', methods=['POST'])
def search_result():
    search_by = request.get_json()
    result = queries.get_specific_questions(search_by)
    return json.dumps(search_result)


@app.route('/search-title', methods=['POST'])
def search_title():
    key_word = request.get_json()
    result = queries.get_question_by_title(key_word)
    return json.dumps(result)


def main():
    app.secret_key = os.urandom(12)
    app.run(debug=True)


if __name__ == '__main__':
    main()
