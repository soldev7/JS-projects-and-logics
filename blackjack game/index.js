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

let player = {
    name: "Per",
    chips: "$145"
}

// Player display element
let playerEl = document.querySelector("#player-el")

// Initialize player name and chips display
playerEl.textContent = player.name + ": " + player.chips


// Generates a random card value (J, Q, K = 10, Ace = 11)
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


// Resets game state and deals initial hand
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
} 

// Syncs the UI with current card and sum values
function renderGame() {
    // Render cards array to the screen
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    // Update total sum display
    sumEl.textContent = "Sum: " + sum
    
    // Core game logic for Win/Loss/Continue
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true       
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    // Update message display
    messageEl.textContent = message
}

// Logic for adding a card if the game is still active
function newCard() {
    // Only allow drawing a card if alive and hasn't won
    if (hasBlackJack === false && isAlive === true) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame() 
    }
}