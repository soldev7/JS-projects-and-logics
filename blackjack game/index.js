// Create two variables, firstCard and secondCard.
// Set the values of a random number between 2-11

let firstCard = 3
let secondCard = 11
// array ordered list of itemns
let cards = [firstCard, secondCard]

// Create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard
let hasBlackJack = false
// Create a variable called isAlive and assign it to true
let isAlive = true
// Declare a variable called message and assign its value to an empty string
let message = ""
// Store the message-el paragraph in a variable 
let messageEl = document.querySelector("#message-el")
// Display the sum
// let sumEl = document.getElementById("sum-el")
// Query selector
let sumEl = document.querySelector("#sum-el")
// store the cards paragraph in a variable called cardsEl
let cardsEl = document.querySelector("#cards-el")

// Create a new funciton called startGame() that calls renderGame()
function startGame() {
    renderGame()
}


// Create a startGame() name changed to renderGame function. Move the conditional below inside the body of the function

function renderGame() {
    // Render the cards on the page using this format -> "Cards: 10 4"
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    // render out all the cards we have
    
    // display sum
    sumEl.textContent ="Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true       
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    // display the message in messageEL using what learned before
    messageEl.textContent = message

}


// Creating a new card drawing function
function newCard() {
    // console.log("Drawing a new card from the deck!")
    // Create a card variable, and hard code it with a value to number(2-11)
    let card = 3 
    // add the new card to the sum variable
    sum += card
    // push the card to the cards array
    cards.push(card)
    console.log(cards)
    // call the startGame()
    renderGame() // call the function that updates the UI with the new sum
}

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card?"
// else if exactly 21 -> "Wohoo! You've got Blackjack!"
// else -> "You're out of the game!"
// flip the value of isALive to false in apporpriate code block

// reassign  the message variable to the string we're logging out



// // CASH OUT!
// console.log(hasBlackJack)
// // log it out ot check that you're doing it correctly
// console.log(isAlive)
// lot it out message var
