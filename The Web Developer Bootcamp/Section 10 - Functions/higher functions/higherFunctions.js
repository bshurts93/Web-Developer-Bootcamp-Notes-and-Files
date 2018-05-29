/*

function thisIsAmerica () {
    setTimeout(function () {
    console.log("This is America");
    }, 1000);

    setTimeout(function () {
        console.log("Don't catch you slippin up");
    }, 3000);

    setTimeout(function () {
        console.log("Don't catch you slippin up");
    }, 5000);

    setTimeout(function () {
        console.log("Look what I'm whippin up");
    }, 7000);
}
*/

function oddOrEven (array) {
    if (array = []) {
        return "even";
    }
    sum = array.reducefunction (a, b) {
        return a + b
    });
    if (sum % 2 === 0) {
        return "even";
    } else if (sum % 2 !== 0) {
        return "odd";
    }
}

function sum (numbers) {
    return numbers.reduce(function (a, b) {
        return a + b
    });
}

var myNumbers = [1, 2, 3];