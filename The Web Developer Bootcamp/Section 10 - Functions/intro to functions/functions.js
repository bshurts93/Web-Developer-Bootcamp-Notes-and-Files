function isEven (num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function factorial(num) {
    var result = num;
    if (num === 0 || num === 1) {
        return 1;
    }
    while (num > 1) {
        num--;
        result *= num;
    }
    return result;
}

function kebabToSnake(str) {

    var snake = (str.replace(/-/g, "_"));
    return snake;
}

//////////SOLUTIONS/////////////

function isEvenV2 (num) {
    return (num % 2 === 0);
}

function factorialV2 (num) {
    //define a result variable
    var result = 1;
    //calculate factorial and store value in result
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    //return the result
    return result;
}

function kebabToSnakeV2 (str) {
    //replace all "-" with "_"
    var newStr = str.replace(/-/g, "_");
    //return string
    return newStr;
}










