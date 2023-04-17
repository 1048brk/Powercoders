// Say Hello:

let name = prompt("Please enter your name");
alert("Hello " + name);


// Counting the number of characters:

let input = prompt("Please write a word");
console.log("Your word is " + input + " and it consists of " + input.length + " characters")

// Printing quotes:

let author =prompt("Please enter an author");
let quote =prompt("Please enter his sayings");
console.log(`${author} says, "${quote}"`);

// Fortune teller:

let numberOfChildren = 5;
let partnerName = 'Marry';
let geographicLocation = 'New York';
let jobTitle = 'Software Engineer';
console.log(`You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`);



// Age calculator:

let birthYear= 1990;
let futureYear= 2040;
let myAge= futureYear-birthYear;
console.log("I will be either " + myAge + " or "+ (myAge-1) + " years old in " + futureYear + ".");
