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

showAbcButtons()
