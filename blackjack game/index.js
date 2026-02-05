// Use getRandomCard() to set the values of firstCard and secondCard
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

// DOM Elements
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")


// Create a function, getRandomCard(), that always returns the number 5
function getRandomCard() {
    let randomCard = Math.floor( Math.random() * 13 ) + 1
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}


// Starts the game by calling the render function
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
} 

// Updates the UI and checks game status
function renderGame() {
    // Reset cards display and loop through the array
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    // Update sum display
    sumEl.textContent = "Sum: " + sum
    
    // Blackjack logic: check if the player can continue, won, or lost
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true       
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    // Display the final message
    messageEl.textContent = message
}

// Logic for drawing a new card
function newCard() {
    // Use the getRandomCard() to set the value of card
    if (hasBlackJack === false && isAlive === true) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame() 
    }
}

