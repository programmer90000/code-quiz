// Get the scores from the local storage and sort them
let newScore = JSON.parse(localStorage.getItem("scores"));

newScore.sort((a, b) => b.score - a.score);

// Append the scores to the screen
for (let i = 0; i < newScore.length; i++) {
    let scoreElement = document.createElement("li");
    scoreElement.innerText = newScore[i].initials + " - " + newScore[i].score;
    document.getElementById("highscores").appendChild(scoreElement);
}


// Clear the scores
document.getElementById("clear").onclick = function () {
    localStorage.removeItem("scores");
    document.getElementById("highscores").innerHTML = "";
}