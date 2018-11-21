from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'malac'

@app.route('/', methods=['GET', 'POST'])
def game_page():
    word = 'kiscica'
    word = word.upper()
    wordlenght = len(word)
    return render_template('game.html', wordlenght=wordlenght, word=word)


if __name__ == '__main__':
    app.run(
        debug=True,
    )