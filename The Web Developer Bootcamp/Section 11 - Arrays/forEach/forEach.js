var nums = [45,65,77,34];

var colors = ["red", "orange", "yellow"];

nums.forEach(function(num) {
    console.log(num);
});


function myForEach (arr, func) {
    for (i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

myForEach(colors, function() {
    console.log("Hello, this iteration is " + colors[i]);
});

myForEach(nums, function(nums) {
    console.log(nums);
});

Array.prototype.myForEach = function myForEach (func) {
    for (var i = 0; i < this.length; i++) {
        func(this[i]);
    }
}

var friends = ["Bob", "Dave", "Kate"]

friends.myForEach(function(name) {
    console.log("Whats up " + name + "?");
});


