// Age calculator:



let corr = false;
let birthYear;
while (corr == false) {
    birthYear = +prompt("Please enter your birth year ex: 1990");
    if (isNaN(birthYear) || birthYear < 1900 || birthYear > new Date().getFullYear()) {
        alert("Come on, don't you know your age")
    } else {
        corr = true;
    }
}

let corr2 = false;
while (corr2 == false) {
    let futureYear = +prompt("Please enter a year in future ex:2040");
    if (isNaN(futureYear) || futureYear < new Date().getFullYear()) {
        alert("We are in 2023, so please enter a future date!")
    } else {
        corr2 = true;
        const yourAge = futureYear - birthYear;
        // alert("You will be either " + yourAge + " or " + (yourAge - 1) + " years old in " + futureYear + ".");
        document.getElementById("yourResult").textContent = "You will be either " + yourAge + " or " + (yourAge - 1) + " years old in " + futureYear + ".";


    }
}









