// 5️⃣ Button Click Tracker
// What:
// Button
// Text shows:
// Button clicked 7 times
let countEl = document.getElementById("count-el")
let count = 0 // for storing how many times its clicked

function clicked() {
    count += 1//every time the button is clicked the count increases
    countEl.textContent = "Button Clicked "+ count+ " times" //why use comma cause i dont wanna concatinate int to str
}

// Focus:
// String + number updates

