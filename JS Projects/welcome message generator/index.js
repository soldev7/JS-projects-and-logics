// 6️⃣ Welcome Message Generator
// What:
// Input field (name)
// Button
// Shows:
// Welcome, Sol 👋
// Focus:
// Reading input value + rendering text
let inputEl = document.getElementById("name-input")
let greetingEl = document.getElementById("greeting")

function submit() {
    let name = inputEl.value // store inpute value in this variable
    greetingEl.textContent = "Welcome, "+name + "👋"
}

