///// Warm up: Arrays   \\\\\\

let array = ["Banana", "Apples", "Oranges", "Blueberries"];

// Access and output Oranges.
console.log(array[2]);

// Remove the Banana from the array.
array.splice(0, 1);
console.log(array);


// Sort the array in order.
array.sort();
console.log(array);

// Put "Kiwi" at the end of the array.
array.push("Kiwi");
console.log(array);

// Remove "Apples" from the array.
array.splice(array.indexOf("Apples"), 1);
// array.splice(0,1); we can do with this also
console.log(array);

// Sort the array in reverse order, i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a']
array.reverse();
console.log(array);


////Exercise: Your top choices: \\\\\
// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

let myCars = ["Ford Taunus 2.0 GLS", "Dogan SLX", "Murat 131", "Sahin", "Serce", "Kartal", "Renault 9 Broadway"];
myCars.forEach(function (element, index) {
    console.log(`My ${index + 1}. choice is ${element} `)
});



////// Exercise: Recipe card \\\\\\\\
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
//      Soup
//      Serves: 2
//      Ingredients: cinnamon, cumin, cocoa
const blackTea = {
    title: "Black Tea",
    serving: 4,
    ingredient: ["1 litre Water", "50 gr Black Tea", "1 slice of Lemon", "Turkish Demlik"]
};
console.log(blackTea.title);
console.log(`Serving: ${blackTea.serving}`);
console.log(`Ingredient: ${blackTea.ingredient.join(", ")}`);


let o = {
    k: "value",
};
// console.log(o.k);

function Person(name, imagesrc, age) {
    this.name = name;
    this.imagesrc = imagesrc;
    this.age = age;
}

function Person() {
    this.name = "Hello";
}

let caner = new Person("Caner", "img/Caner.jpg", 31);

// console.log(caner);

let city = {}; // {}
let city2; // undefined
let city3 = null; // null
city3 = "Lausanne";

// console.log(city);
// console.log(city2);
// console.log(city3);

typeof null; // "object" (not "null" for legacy reasons)
typeof undefined; // "undefined"
null === undefined; // false
null == undefined; // true
null === null; // true
null == null; // true
!null; // true
Number.isNaN(1 + null); // false
Number.isNaN(1 + undefined); // true

// console.log(1 + null);

/*** Exercise: Your top choices ***/
let choices = [
    ["Age of Empires 4", "Cyberpunk 2077", "Sea of Thieves"],
    ["snowboarding", "football", "yoga"],
    ["not Trump", "not Bush", "not Clinton"],
];

choices.forEach((elements) => {
    elements.forEach((element, index) => {
        console.log(`My #${index + 1} choice is ${element}`);
    });
});

/*** Exercise: Recipe Card ***/

function Recipe(title, servings, ...args) {
    this.name = title;
    this.servings = servings;
    this.ingredients = args;
    this.get = () => {
        console.log(this.name);
        console.log("Serves: " + this.servings);
        console.log("Ingredients: " + this.ingredients.join(", "));
    };
}

const lasagne = new Recipe(
    "Lasagne",
    2,
    "Tomato sauce",
    "Lasagne sheets",
    "Parmesan",
    "Carrots",
    "Bechamel sauce"
);

lasagne.get();