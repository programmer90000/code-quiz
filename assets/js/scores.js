let newScore = JSON.parse(localStorage.getItem("scores"));

console.log(newScore);

for (let i = 0; i < newScore.length; i++) {
    let scoreElement = document.createElement("li");
    scoreElement.innerText = newScore[i].initials + " - " + newScore[i].score;
    document.getElementById("highscores").appendChild(scoreElement);
}

console.log(initialsAndScore);