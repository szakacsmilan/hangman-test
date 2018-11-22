function showAbcButtons() {
    let buttons = document.querySelector('.abc-button');
    let button = document.querySelector('.abc-button').innerHTML;
    let character_array = 'ábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz';
    character_array = character_array.toUpperCase();
    for (character of character_array) {
        let new_button = button.replace('A', character);
        buttons.innerHTML += new_button;
    }
}


document.getElementById("play-button").addEventListener("click", function () {
    document.querySelector('.abc-button').style.display = 'block';
    document.getElementById("new-game-button").style.display = 'block';
    document.getElementById("play-button").style.display = 'none';
    document.getElementById("sign-up-button").style.display = 'none';
    document.getElementById("sign-in-button").style.display = 'none';
    document.getElementById('wordline').style.display = 'flex';
});

showAbcButtons();

function changePicture() {
    document.getElementById('pict').src='../static/hangman'+incorrectAnswer+'.png'
}
var incorrectAnswer = 1;
function changeCharacters() {
    let buttons = document.querySelectorAll('.abc-btn');
    let word = document.querySelector('#word').innerText;
    console.log(word);
    for (button of buttons) {
        let buttonCharacter = button.innerText;
        let btn = button;
        button.addEventListener('click', function () {
            btn.disabled = true;
            let validCharCounter = 0;
            for (let i = 0; i < word.length; i++) {
                if (word[i] == buttonCharacter) {
                    i = i.toString();
                    let linenumber = document.getElementById(i);
                    linenumber.innerHTML = buttonCharacter;
                } else {
                    validCharCounter += 1
                }
            }
            if (validCharCounter == 7) {
                incorrectAnswer += 1;
                if (incorrectAnswer<7) {
                    changePicture()
                } else {
                    let lose = document.getElementById('butts')
                    lose.innerText = 'You lose'
                }
            }
        })
    }
}

changeCharacters();