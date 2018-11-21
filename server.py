from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'malac'


@app.route('/game', methods=['GET', 'POST'])
def game_page():
    return render_template('game.html')


if __name__ == '__main__':
    app.run(
        debug=True,
    )
