// create secret number

var secretNumber = 4;

// ask user to guess

var guess = Number(prompt("Guess a number"));

alert(guess);

// check guess
if (guess === secretNumber) {
    alert("You got it!");
}
// otherwise, check if higher
else if (guess > secretNumber) {
    alert("too high bitch");
}
// otherwise, check if lower
else {
    alert("too low bitch");
}
