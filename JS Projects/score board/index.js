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

// 8️⃣ Character Counter
// What:
// Input field
// Text shows how many characters typed
// Focus:
// Live updates + .value.length

// 9️⃣ Yes / No Toggle
// What:
// Button toggles text between
// ON and OFF
// Focus:
// Conditionals + DOM updates

// 🔟 Mini Attendance App
// What:
// Button: “Mark Present”
// Saves numbers like:
// 1 - 2 - 3 -
// Focus:
// Same save pattern you mastered 💪