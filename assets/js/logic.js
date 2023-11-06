let startButton = document.getElementById('start');
let wrapper = document.getElementsByClassName('wrapper')[0];

startButton.addEventListener('click', function () {
    shuffleArray(questions);
    var timeLeft = 75;
    var timeInterval = setInterval(function () {
        wrapper.classList.add("hide");
        document.getElementById('time').innerText = timeLeft;
        timeLeft--;
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            document.getElementById('time').innerText = "";
        }
    },1000)

    findCorrectAnswer(questions);
    clearScreen();
})

function shuffleArray(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = Math.floor(Math.random() * i);
        [arr[i-1], arr[j]] = [arr[j], arr[i-1]];
    }
}

function findCorrectAnswer(arr) {
    for (let i = 0; i < arr.length; i++) {
        let questionArray = Object.values(arr[i]);
        let correctAnswerIndex = questionArray[2];
        let answersArray = questionArray[1];
        let correctAnswer = answersArray[correctAnswerIndex];
    }
};

function clearScreen() {
    document.getElementByClassName("wrapper".innerText = "");
}