
// . What is an object?
// JavaScript objects are containers for named values.
const person = {
    name: "John",
    age: 38,
    eyeColor: "green",
    isMarried: false
};
document.write(person.name.length);
document.write(person.name);
console.log(person.eyeColor);




// What is an array? Arrays store multiple values in a single variable.
// An array is a special type of object.
// An array is a collection of often similar data.
// The items in an array have a guaranteed order.
// An array uses numbers to access its elements, an object uses names

var topics = ["HTML", "CSS", "JS"];
console.log(topics.toString()); //consola bunu yazar HTML,CSS,JS

topics.push("MySQL") // This will add "MySQL" at the end of the array.
console.log(topics); //This will return the last element of the array and will remove it.
//alert(topics.pop());
topics.sort() // This will sort the array alphabetically.
console.log(topics)




//DOM Tree
// The DOM represents a document as a tree structure. HTML elements become nodes in that tree.
// All nodes in the tree have some kind of relation to each other:
// 1-parent  2-child  3-sibling

// document.body.textContent = "New text";

// document.getElementById(id)
// let elm = document.getElementById("test");



var h2 = document.querySelector("h2");
h2.onclick = function () { writeIntoConsole() };

function writeIntoConsole() {
    console.log("writeIntoConsole");
    alert("Open console!");
}
