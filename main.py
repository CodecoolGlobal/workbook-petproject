from flask import Flask, render_template, url_for, request, redirect, get_flashed_messages
import os
import json
app = Flask('workbook')


@app.route('/')
@app.route('/index')
def main_page():
    return render_template('index.html')


def main():
    app.secret_key = os.urandom(12)
    app.run(debug=True)


if __name__ == '__main__':
    main()
