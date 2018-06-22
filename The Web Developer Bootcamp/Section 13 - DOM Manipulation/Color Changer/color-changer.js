var colorButton = document.querySelector("button");



/* USING BOOLEAN LOGIC */

/*
var isPurple = false

colorButton.addEventListener("click", function() {
    // if white, change to purple
    if (isPurple) {
        document.body.style.background = "white";
        isPurple = false;
    } else {
        document.body.style.background = "purple";
        isPurple = true;
    }
});
*/


/* USING CLASSLIST */

colorButton.addEventListener("click", function(){
   document.body.classList.toggle("body-color"); 
});