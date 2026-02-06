const characters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
];

let firstPassEl = document.querySelector("#first-pass")
let secondPassEl = document.querySelector("#second-pass")

// create random num so that i can use it for password
function randomNum() {
    let random = Math.floor( Math.random() * characters.length)
    return random
}

function generatePassword() {
    let firstPassword = ""
    let secondPassword = ""
    for (let i = 0; i < 15; i++) {
        firstPassword += characters[randomNum()]
        secondPassword += characters[randomNum()]
    }
    firstPassEl.textContent = firstPassword
    secondPassEl.textContent = secondPassword
    
}
