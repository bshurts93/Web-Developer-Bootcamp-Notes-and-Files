var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var numInput = document.querySelector("input");
var playToNum = document.getElementById("play-to");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener('click', function () {
    if(!gameOver) {
        p1Score++;
        console.log(p1Score, winningScore);
        if(p1Score === winningScore) {
            p1Display.classList.add("winning-class");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    } 
});

p2Button.addEventListener('click', function () {
    if(!gameOver) {
        p2Score++;
        if(p2Score === winningScore) {
            p2Display.classList.add("winning-class");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    } 
});

resetButton.addEventListener('click', function() {
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winning-class");
    p2Display.classList.remove("winning-class");
    gameOver = false;
}

numInput.addEventListener('change', function () {
    winningScore = Number(numInput.value);
    playToNum.textContent = this.value;
    reset();
});





