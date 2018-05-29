

console.log("ALL NUMBERS BETWEEN -10 AND 19")
var num1 = -10;

while (num1 < 20) {
    console.log(num1);
    num1++;
}





console.log("ALL EVEN NUMBERS BETWEEN 10 AND 40")
var num2 = 10;

while (num2 <= 40) {
    console.log(num2);
    num2 += 2;
}



/*
This version uses mod to check if the num is even

var num2 = 10;

while (num2 <= 40) {
    if (num2 % 2 === 0) {
        console.log(num2);
    }
    num2 += 1;
}
*/



console.log("ALL ODD NUMBERS BETWEEN 300 AND 333")

var num3 = 300;

while (num3 <= 333) {
    if (num3 % 2 !== 0) {
        console.log(num3);
    }
    num3 += 1;
}





console.log("ALL NUMBERS DIVISIBLE BY 3 AND 5 BETWEEN 5 AND 50")
var num4 = 5;

while (num4 <= 50) {
    if ((num4 % 5 === 0) && (num4 % 3 === 0)) {
        console.log(num4);
    }
    num4++;
}



