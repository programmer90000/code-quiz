let startButton = document.getElementById('start');
let wrapper = document.getElementsByClassName('wrapper')[0];
let startingPage = document.getElementById("start-screen");

startButton.addEventListener('click', function () {
    shuffleArray(questions);
    var timeLeft = 75;
    var timeInterval = setInterval(function () {
        startingPage.classList.add("hide");
        document.getElementById('time').innerText = timeLeft;
        timeLeft--;
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            document.getElementById('time').innerText = "";
        }
    },1000)

    findCorrectAnswer(questions);
    clearScreen();
    displayQuestion(questions);
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
    document.getElementsByClassName("wrapper".innerText = "");
}

function displayQuestion(arr) {
    let questions = document.getElementById('questions');
    questions.classList.remove("hide");
    let index = 0;
    const displayNextQuestion = () => {
        if (index >= arr.length) {
            return;
        }
        const question = arr[index];
        const element = document.createElement("h3");
        element.innerText = question.question;
        element.classList.add("start")
        questions.appendChild(element);

        question.possibleAnswers.forEach((answer) => {
            const answerElement = document.createElement("button");
            answerElement.innerText = answer;
            answerElement.style.display = "block";
            questions.appendChild(answerElement);
        });

        const answerButtons = questions.querySelectorAll("button");
        answerButtons.forEach((button) => {
            button.addEventListener("click", () => {
                questions.innerHTML = "";
                index++;
                displayNextQuestion();
            });
        });
    };
    displayNextQuestion();
}
