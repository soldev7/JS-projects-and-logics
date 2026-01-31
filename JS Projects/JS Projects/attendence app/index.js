// 🔟 Mini Attendance App
// What:
// Button: “Mark Present”
// Saves numbers like:
// 1 - 2 - 3 -
// Focus:
// Same save pattern you mastered 💪
let presentCountEl = document.getElementById("roll-check")
let absentCountEl = document.getElementById("absent-check")
let count = 0

function present() {
    count+=1//increment
    presentCountEl.textContent += count + "- "
    // count = 0
}

function absent() {
    count+= 1
    absentCountEl.textContent += count + "- "
}


