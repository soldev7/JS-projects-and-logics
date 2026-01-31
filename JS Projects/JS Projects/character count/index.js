// 8️⃣ Character Counter
// What:
// Input field
// Text shows how many characters typed
// Focus:
// Live updates + .value.length
let inputEl = document.getElementById("name")
let charEl = document.getElementById("char-el")
 
function count() {
    let totalChar = inputEl.value.length
    charEl.textContent = totalChar
}

