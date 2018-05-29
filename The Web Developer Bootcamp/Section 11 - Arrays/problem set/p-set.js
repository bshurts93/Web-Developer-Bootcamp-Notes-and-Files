
function printReverse (arr) {    
    // loop: print array beginning with last Index
    for (i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

var nums = [1, 2, 3, 4, 5];

var letters = ['a', 'b', 'c', 'd', 'e', 'f'];

//////////////////////////////////////////////

function isUniform (arr) {
    // get first index of array
    var firstIndex = arr[0];
    
    // loop and check to see if each index matches the first
    for (i = 1; i < arr.length; i++) {
        if (arr[i] !== firstIndex) {
            return false;
        }
        return true;
    }
}

var asdf = ["a", "a", "a"];

//////////////////////////////////////////////

function sumArray (arr) {
    var total = 0;
    arr.forEach(function(el) {
        total += el;
    });
    return total;
}

//////////////////////////////////////////////

function max (arr) {
    var arrMax = arr[0];
    
    for(i = 1; i < arr.length; i++) {
        if (arr[i] > arrMax) {
            arrMax = arr[i];
        }
    }
    return arrMax;
}












