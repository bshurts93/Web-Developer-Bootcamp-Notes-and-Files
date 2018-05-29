/*
NOT A GOOD LIST 

var person = ["Ben", 25, "Nashville"];

var hometown = person[2];
*/

var person = {
    name: "Ben",
    age: 25,
    city: "Nashville"
}

var dog = {
    name: "Archer",
    age: 2,
    breed: "Border Collie"
}

/*
// adding to object and changing data

person.age += 1;
person.city = "Chicago";
*/

// Array
var dogs = ["Archer", "Scout", "Harley"];

// Object

var dog = {
    name: "Archer",
    age: 2,
    breed: "Border Collie",
    isNeutered: true,
    parents: ["Ben", "Julie"]
}

///////////////////////////////
// NESTED OBJECTS AND ARRAYS //

var posts = [
    {
        title: "Cats are terrible",
        author: "Ben",
        comments: ["I agree!", "Meh."]
    },
    {
        title: "Dogs are sweet",
        author: "Julie",
        comments: ["<3", "wowowowowowow"]
    }
]


///////////////////////////////
//        OBJECTS QUIZ       //

/*

var someObject = {};

// Which of the following are valid?


someObject._name = "Hedwig";     //---> valid

someObject.age = 6;              //---> valid

var prop = "color"

someObject[prop] = "red";       //---> valid

//someObject.123 = true;          //---> not valid



var someObject2 = {
    friends: [
        {name: "Malfoy"},
        {name: "Crabbe"},
        {name: "Goyle"}
    ],
    color: "baby blue",
    isEvil: true
}

someObject2.friends[0].name;

*/



///////////////////////////////
//       MOVIE DATABASE      //

var movies = [
    {
        title: "ThanksKilling",
        rating: "5 stars",
        hasWatched: true
    },
    {
        title: "Cars 2",
        rating: "2.5 stars",
        hasWatched: false
    },
    {
        title: "Get Out",
        rating: "4 stars",
        hasWatched: true
    },
    {
        title: "Black Swan",
        rating: "4.5 stars",
        hasWatched: false
    },
    {
        title: "Toy Story 3",
        rating: "5 stars",
        hasWatched: true
    }
];

// Function Version

function movieDB (arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i].hasWatched === true) {
            console.log("You have watched " + '"' + arr[i].title + '"' + " - " + arr[i].rating);
        } else {
            console.log("You have not seen " + '"' + arr[i].title + '"' + " - " + arr[i].rating);
        }
    }
}

// forEach version

movies.forEach(function(movie) {
    var result = "You have ";
    if (movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating;
    console.log(result);
});






