
showAbcButtons();

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

function changeCharacters() {
    let buttons = document.querySelectorAll('.abc-btn');
    let word = document.querySelector('#word').innerText;
    console.log(word);
    for (button of buttons) {
        let buttonCharacter = button.innerText;
        button.addEventListener('click', function () {
            for (let i = 0; i < word.length; i++) {
                if (word[i] == buttonCharacter) {
                    i = i.toString();
                    let linenumber = document.getElementById(i);
                    linenumber.innerHTML = buttonCharacter;
                }
            }
        })
    }

}

changeCharacters();