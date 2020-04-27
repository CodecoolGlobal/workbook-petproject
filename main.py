from flask import Flask, render_template, url_for, request, redirect
import json
app = Flask('codecool_series')


@app.route('/')
def main_page():
    return render_template('list.html')


def main():
    app.run(debug=True)


if __name__ == '__main__':
    main()
