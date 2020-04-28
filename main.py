from flask import Flask, render_template, url_for, request, redirect, get_flashed_messages
import os
from data import queries
import json
app = Flask('workbook')


@app.route('/')
@app.route('/index', methods=['GET'])
def main_page():
    modules = queries.get_all_modules()
    print(modules)
    categories = queries.get_all_categories()
    print(categories)
    all_questions = queries.get_all_questions()
    return render_template('index.html', modules=modules, categories=categories, all_questions=all_questions)


@app.route('/search-result', methods=['POST'])
def search_result():
    return json.dumps(search_result)


def main():
    app.secret_key = os.urandom(12)
    app.run(debug=True)


if __name__ == '__main__':
    main()
