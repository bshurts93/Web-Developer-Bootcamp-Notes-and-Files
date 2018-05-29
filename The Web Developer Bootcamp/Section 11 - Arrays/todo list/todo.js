
var todos = [];


while (input !== "quit") {
    
    // handle input
    if (input === "list") {
        listTodos();
    } else if (input === "new") {
        newTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
    // ask again for new input
    var input = prompt("What would you like to do?");
}

    console.log("You have quit the app.")

function printList(listItem, index) {
    console.log("______________________");
    console.log(index + ": " + listItem);
};

function listTodos () {
    todos.forEach(printList);
}

function newTodo () {
    // ask for new todo
    var newItem = prompt("What would you like to add to your list?");
    // add todo to array
    todos.push(newItem);
    console.clear();
    todos.forEach(printList);
    function display () {
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(newItem));
        ul.appendChild(li);
    }
    display();
}

function deleteTodo () {
    // ask for index of todo to be removed
    var index = prompt("Which number do you want to remove?");
    // delete the selected todo
    todos.splice(index, 1);
    console.clear();
    todos.forEach(printList);  
}

function function1() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode());
    ul.appendChild(li);
}
/*
var colors = ["red", "orange", "yellow", "green", "blue"];

for(var i = 0; i < colors.length; i++) {
    console.log(colors[i] + " (for loop style)");
}

colors.forEach(function(color) {
    console.log(color + " (forEach style)");
});

function printColor (color) {
    console.log("***************");
    console.log(color);
}
*/
/*

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.forEach(function (color) {
    if (color % 3 === 0) {
        console.log(color);
    }
})

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        console.log(numbers[i]);
    }
}
*/







