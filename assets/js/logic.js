let startButton = document.getElementById('start');
let wrapper = document.getElementsByClassName('wrapper')[0];

startButton.addEventListener('click', function () {
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