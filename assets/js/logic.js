let startButton = document.getElementById('start');

startButton.addEventListener('click', function () {
    var timeLeft = 75;
    var timeInterval = setInterval(function () {
        document.getElementById('time').innerText = timeLeft;
        timeLeft--;
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            document.getElementById('time').innerText = "";
        }
    },1000)
})