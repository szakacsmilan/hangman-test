function showAbcButtons() {
    let buttons = document.querySelector('.abc-button');
    let character_array = 'ábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz';
    character_array = character_array.toUpperCase();
    for (character of character_array) {
        let new_button = buttons.innerHTML.replace('A', character);
        buttons.innerHTML += new_button;
    }
}

showAbcButtons();

function changeCharacters() {
    let buttons = document.querySelectorAll('.abc-btn');
    for (button of buttons) {
        let buttonCharacter = button.innerText;
        button.addEventListener('click', function () {
            for (let i = 0; i < word.length; i++) {
                if (word[i] == buttonCharacter) {
                    i = i.toString()
                    let linenumber = document.getElementById(i);
                    linenumber.innerHTML = buttonCharacter
                }
            }
        })
    }
    let word = document.querySelector('#word').innerText
}

changeCharacters();
