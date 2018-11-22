from flask import Flask, render_template, request, redirect, session
import data_manager, random
app = Flask(__name__)
app.secret_key = "malac"


@app.route('/')
def game_page():
    word = 'kiscica'
    word = word.upper()
    wordlenght = len(word)
    mentor_names = data_manager.get_mentor_names()
    mentor_name = random.choice(mentor_names)
    first_name = mentor_name.get('first_name')
    last_name = mentor_name.get('last_name')
    first_name_length = len(first_name)
    last_name_length = len(last_name)
    print(first_name)

    return render_template('game.html', first_name=first_name, last_name=last_name, first_name_length=first_name_length, last_name_length=last_name_length)


if __name__ == '__main__':
    app.run(
        debug=True,
    )
