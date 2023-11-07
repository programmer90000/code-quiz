let newScore = JSON.parse(localStorage.getItem("scores"));

newScore.sort((a, b) => b.score - a.score);

for (let i = 0; i < newScore.length; i++) {
    let scoreElement = document.createElement("li");
    scoreElement.innerText = newScore[i].initials + " - " + newScore[i].score;
    document.getElementById("highscores").appendChild(scoreElement);
}

document.getElementById("clear").onclick = function () {
    localStorage.removeItem("scores");
    document.getElementById("highscores").innerHTML = "";
}