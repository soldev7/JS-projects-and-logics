// Grab the welcome-el paragraph and store it in a variable called welcomeEl

let welcomeEl = document.getElementById("welcome-el")

// Create two variables (name & greeting) that contains your name and the greeting we want to render to the page
let name = "Sol"
let greeting = "Hi, nice to meet you, "

// render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting + name


// Add an emoji to the end!👋
// Do not modify the code
welcomeEl.innerText += "👋"
