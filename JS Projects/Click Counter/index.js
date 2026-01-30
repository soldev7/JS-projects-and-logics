// // ⚡ DOM Practice Projects (Do These Tomorrow)
// // 1️⃣ Click Counter
// // What:
// // One button
// // Number increases on click
// // Focus:
// // count, +=, textContent

// // want to increase number in h2 so we gootta make a var count so each time we click right count increases
// let count = 0
// // what we are doing here is accessing the h2 html element by id so taht we can modify it with js
// let countEl = document.getElementById("count-el")

// // now create a funciton like each time we click the text conctent will increase ie we have to use btn onckick funciton name here so that each time we click on button the textcontent also increases as the count does
// function increase() {
//     // first thing to do is make sure the count increases the moment we click so increment
//     count += 1 // what it does is like when we click the button the count will be like count = count + 1 which is one will be saved on count var memory location
//     // now that we changed the number as clicked we have to like textConent it on html element means change
//     countEl.textContent = count //so what it does is textContent change or say modify the h2 content whihc will be count each time the increase function is called
// }




// // 2️⃣ Counter with Reset
// // What
// // Increment button
// // Reset button (sets count to 0)
// // Focus:
// // Multiple buttons → multiple functions
// let countEl = document.getElementById("count-el")
// // since we have to like when reset btn is called right we gotta make h2 to 0 so we have to access h2 to modify for rest too so lest set varaible first
// let resetEl = document.getElementById("count-el")
// let count = 0 

// function increase() {
//     count += 1
//     countEl.textContent = count
// }

// // creating reset function 
// function reset() {
//     // since we wanna like display 0 when rest function is called right so i simpley put count as 0 so when it call reset the count will be 0
//     count = 0
//     // display the value of count in h2
//     resetEl.textContent = count
// }

// 3️⃣ Increment + Decrement
// What:
// button
// – button
// Focus:
// Same state, different actions
// let countEl = document.getElementById("count-el")
// // let decEl = document.getElementById("count-el")
// // let resEl = document.getElementById("count-el")
// let count = 0

// function increase() {
//     count += 1
//     countEl.textContent = count
// }
 
// function decrement() {
//     // so we are doing exact opposite of increment when increment plus count by 1 when its called but when decement is called it will -1 count every time
//     count -= 1 //i mean could have used like conditional statements to not go count below 0 but havent learned yet 
//     // so basially changing html element content
//     countEl.textContent = count
// }

// function reset() {
//     count = 0
//     countEl.textContent = count
// }

// 4️⃣ Save History Counter (Upgrade)
// What:
// Like your project
// Add a CLEAR button that wipes saved entries
// Focus:
// Replacing vs appending text
let countEl = document.getElementById("count-el")
let storeEl = document.getElementById("store-el")
let count = 0

function increase() {
    count+=1
    countEl.textContent = count
}

function decrement() {
    count-=1
    countEl.textContent = count
}

function reset() {
    count = 0
    countEl.textContent = count
}

function save() {
    // so making space
    count +="-"
    // so waht it does is what already exist in storeEl add count value to it
    storeEl.textContent+= count
    count = 0
}

function clearF() {
    storeEl.textContent ="Previous entries:"+ ""

}

