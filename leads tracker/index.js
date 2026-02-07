// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field
let myLeads = ["weee.com","wwweeeeeee","sdfhdflshf"]
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")
// 2. Grab the unordered list and store it in a const variable called ulEl

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})


// Replace .textContent with .innerHTML and use <li> tags
for (let i = 0; i < myleads.length; i++) {
    ulEl.innerHTML += "<li>" + myleads[i] + "</li>"
    // const li=  document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
}