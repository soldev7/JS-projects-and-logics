let homeScoreCount = document.getElementById("home-score")
let guestScoreCount = document.getElementById("guest-score")
let homeScorePoints = 0
let guestScorePoints = 0

function homeOnePlus() {
    homeScorePoints += 1
    homeScoreCount.textContent = homeScorePoints
}

function homeTwoPlus() {
    homeScorePoints += 2
    homeScoreCount.textContent = homeScorePoints
}

function homeThreePlus() {
    homeScorePoints += 3
    homeScoreCount.textContent = homeScorePoints
}

function guestOnePlus() {
    guestScorePoints +=1
    guestScoreCount.textContent = guestScorePoints
}
function guestTwoPlus() {
    guestScorePoints +=2
    guestScoreCount.textContent = guestScorePoints
}
function guestThreePlus() {
    guestScorePoints +=3
    guestScoreCount.textContent = guestScorePoints
}
