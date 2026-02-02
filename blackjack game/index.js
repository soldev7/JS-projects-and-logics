// Create two variables, firstCard and secondCard.
// Set the values of a random number between 2-11

let firstCard = 22
let secondCard = 10

// Create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard
let hasBlackJack = false
// Create a variable called isAlive and assign it to true
let isAlive = true
// Declare a variable called message and assign its value to an empty string
let message = ""


// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card?"
// else if exactly 21 -> "Wohoo! You've got Blackjack!"
// else -> "You're out of the game!"
// flip the value of isALive to false in apporpriate code block

// reassign  the message variable to the string we're logging out

if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    isAlive = false

}


// // CASH OUT!
// console.log(hasBlackJack)
// // log it out ot check that you're doing it correctly
// console.log(isAlive)
// lot it out message var
console.log(message)