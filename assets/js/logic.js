let startButton = document.getElementById('start');
let wrapper = document.getElementsByClassName('wrapper')[0];
let startingPage = document.getElementById("start-screen");
var correctAnswer = [];
let index = 0;
let score = 0;

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
        correctAnswer.push(answersArray[correctAnswerIndex]);
    }
};

function clearScreen() {
    document.getElementsByClassName("wrapper".innerText = "");
}

function displayQuestion(arr) {
    let questions = document.getElementById('questions');
    questions.classList.remove("hide");
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
            const text = button.textContent;
            button.setAttribute("btnText", text);

            button.addEventListener("click", () => {
                answerText = button.getAttribute("btnText");
                if (answerText === correctAnswer[index]) {
                    score += 1;
                    const correct = document.createElement("h4");
                    correct.innerText = "Correct!";
                    setTimeout(() => {
                        correct.remove();
                    }, 500);
                    wrapper.appendChild(correct);
                } else {
                    const wrong = document.createElement("h4");
                    wrong.innerText = "Wrong!";
                    setTimeout(() => {
                        wrong.remove();
                    }, 500);
                    wrapper.appendChild(wrong);
                }

                questions.innerHTML = "";
                index++;
                displayNextQuestion();
            });
        });
    };
    displayNextQuestion();
}

function runProgram() {
    startButton.addEventListener('click', function () {
        shuffleArray(questions);
        startingPage.classList.add("hide");
        var timeLeft = 75;
        var timeInterval = setInterval(function () {
            document.getElementById('time').innerText = timeLeft;
            timeLeft--;
            if (timeLeft === 0 || index >= questions.length) {
                clearInterval(timeInterval);
                document.getElementById('time').innerText = 0;
                document.getElementById("questions").innerHTML = "";
                clearScreen();
                displayResults();
                document.getElementById("final-score").innerText = score;
            }
        },1000)

        findCorrectAnswer(questions),
        clearScreen(),
        displayQuestion(questions),
        clearScreen();

    })
}

function displayResults () {
    document.getElementById("end-screen").style.display = "block";
    let initials = document.getElementById("initials");
    document.getElementById("submit").onclick = function () {
        if(initials.value !== "") {
            let scores = JSON.parse(localStorage.getItem("scores")) || [];
            let initialsAndScore = {initials: initials.value, score: score};
            scores.push(initialsAndScore);
            localStorage.setItem("scores", JSON.stringify(scores));
        }
    }
}

runProgram();