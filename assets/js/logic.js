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
})

function shuffleArray (arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = Math.floor(Math.random() * i);
        [arr[i-1], arr[j]] = [arr[j], arr[i-1]];
    }
}
