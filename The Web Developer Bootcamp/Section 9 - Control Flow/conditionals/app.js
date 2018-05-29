var age = prompt("How old are you?")

if (age < 0) {
    console.log("What bitch? You Benjamin Button?");
    document.querySelector(".bouncer").textContent = "What bitch? You Benjamin Button?";
    
} else if (age < 18) {
    console.log("Sorry, you ain't old enough for this shit.");
    document.querySelector(".bouncer").textContent = "Sorry, you ain't old enough for this shit.";
    
} else if (age < 21) {
    console.log("Fine, you can come in but yo ass can't drank.");
    document.querySelector(".bouncer").textContent = "Fine, you can come in but yo ass can't drank.";
    
} else if (age = 21) {
    console.log("Happy birfday son, lets get you turnt!");
    document.querySelector(".bouncer").textContent = "Happy birfday son, lets get you turnt!";
    
} else if (age > 21) {
    console.log("Get yo old ass in here and have a drank!");
    document.querySelector(".bouncer").textContent = "Get yo old ass in here and have a drank!";
} 
