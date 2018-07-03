var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

// Score counter MOD

var correctScore = parseInt(document.getElementById("correct-display").textContent);
var missedScore = parseInt(document.getElementById("missed-display").textContent);



init();

function init() {

    setupModeButtons();
    
    setupSquares();
    
    reset();
}


function reset() {
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change color display to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of all squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block"
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors"
    messageDisplay.textContent = "";

    document.querySelector(".mode").style.backgroundColor = null;
    document.querySelector(".selected").style.backgroundColor = null;
}

function setupModeButtons() {
        // MODE BUTTON EVENT LISTENERS
        for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setupSquares () {
    // COLOR CHANING LOGIC and CLICK LISTENERS
    for (var i = 0; i < squares.length; i++) {
        // add click event listeners to squares
        squares[i].addEventListener("click", function () {

            // grab color of picked square
            var clickedColor = this.style.backgroundColor;

            // compare color to clicked color
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                messageDisplay.style.fontFamily = "Avenir";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
                // change seleceted to picked color MOD
                document.querySelector(".selected").style.backgroundColor = clickedColor;
                
                //!!! SCORE COUNTER MOD !!!//
                
                // update correct score
                correctScore++;
                // display score to UI
                document.querySelector("#correct-display").textContent = correctScore;
            } else {
                this.style.backgroundColor = "#232323"
                messageDisplay.textContent = "Try again!";
                messageDisplay.style.fontFamily = "Avenir";
                
                //!!! SCORE COUNTER MOD !!!//
                
                // update correct score
                missedScore++;
                // display score to UI
                document.querySelector("#missed-display").textContent = missedScore;
            }
        });
    }
}

resetButton.addEventListener("click", function() {
    reset();
})

function changeColors(color) {
    // loop through all squares
    for (var i = 0; i < squares.length; i++) {
        // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    var arr = [];
    // add num random colors to array
    for (var i = 0; i < num; i++) {
        // get random color and push into array
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

function randomColor() {
    // pick a "red" from 0 to 255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 to 255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 to 255
    var b = Math.floor(Math.random() * 256);
    // string together
    return ("rgb(" + r + ", " + g + ", " + b + ")");    
}