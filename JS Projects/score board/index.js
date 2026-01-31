// 7️⃣ Simple Scoreboard
// What:
// Team A +1
// Team B +1
// Display both scores
// Focus:
// Multiple states, multiple elements
let scoreAEl = document.getElementById("scoreA")
let scoreBEl = document.getElementById("scoreB")
let scoreA = 0
let scoreB = 0

function addA() {
    scoreA += 1
    scoreAEl.textContent = "Score: "+ scoreA
}

function addB() {
    scoreB += 1
    scoreBEl.textContent = "Score: "+ scoreB
}

function reset() {
    scoreA = 0
    scoreB = 0
    scoreAEl.textContent = "Score: "+ scoreA
    scoreBEl.textContent = "Score: "+ scoreB
}

