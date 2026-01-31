// 

// console.log(count)
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") //document.getElementById are functions ("count-el") is pass in argument which means we are give this function some data to work wiht
// console.log(countEl)
let count = 0

function increment() { //increment() is the function we used on html btn clicked attibute
    count += 1
    countEl.textContent = count
}


// create a function, save() which logs out the count when its called


function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let saved = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += saved
    // NB: Make sure to not delete the existing content of the paragraph
    countEl.textContent = "0"
    count = 0
}

