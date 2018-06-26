var numSquares = 6;
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy-btn");
var hardButton = document.querySelector("#hard-btn");

var selectedBtn = document.querySelector(".selected");


easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares = 3
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    // remove hardBtn background style
    hardButton.style = "none";
});

hardButton.addEventListener("click", function(){
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    numSquares = 6
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
    // remove easyBtn background style
    easyButton.style = "none";
});

resetButton.addEventListener("click", function() {
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change color display to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of all squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    this.textContent = "New Colors"
    messageDisplay.textContent = "";
    
    easyButton.style = "none";
    hardButton.style = "none";
    selectedBtn.style.backgroundColor = "steelblue";

});


colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    
    // add click event listeners to squares
    squares[i].addEventListener("click", function(){ 
        
        // grab color of picked square
        var clickedColor = this.style.backgroundColor;
        
        // compare color to clicked color
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            messageDisplay.style.fontFamily = "Avenir";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
            
            // change seleceted to picked color
            if (numSquares === 6) {
                hardButton.style.backgroundColor = pickedColor;
            } else {
                easyButton.style.backgroundColor = pickedColor;
            }
        } else {
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent = "Try again!";
            messageDisplay.style.fontFamily = "Avenir";
        }
    }); 
}

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
