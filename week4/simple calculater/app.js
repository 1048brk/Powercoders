// basic calculater

let number1 = +prompt("Please enter a number");
while (isNaN(number1)) {
    alert("This is not a number, please try again.");
    number1 = +prompt("Please enter a number");
}

let number2 = +prompt("Please enter another number");
while (isNaN(number2)) {
    alert("This is not a number, please try again.");
    number2 = +prompt("Please enter a number");
}

let operator = prompt("Please enter one of these operaters: + - * / %");

let result = calculater(number1,number2, operator);

if (typeof (result) !== "undefined") {
    alert(`${number1} ${operator} ${number2} equals to ${result}.`);
} else {
    alert("This is not allowed operator, please try again.");
}

function calculater(num1, num2, op) {
    let result;

    switch (op) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
    }

    return result;

}

console.log(calculater(5, 12, "-"));  



const groceries = ["Banana", "Pasta", "Milk"];
groceries.forEach(function(item, index){
    console.log(item);
});
// const numbers = [1, 2, 5, 6];
// const mixItUp = [0, "string", true];


console.log(groceries[1]);
console.table(groceries);

const groceryItem = {
    item: "Banana",
    quantity: 5
}

const groceryList = [
    {
        item: "Banana",
        quantity: 5
    },{
        item: "Pasta",
        quantity: 1
    },{
        item: "Milk",
        quantity: 2
    }

]
console.table(groceryList);

groceryList.forEach(function(groceryItem){
    console.log(groceryItem.quantity+ " "+groceryItem.item);
});





// if(operator === "+" ){
//     let result = number1 + number2;
// }else if (operat0r === "-"){
//     let result = number1 - number2;
// }else if (operator === "*"){
//     let result = number1 * number2;
// }else if (operator === "/"){
//     let result = number1 / number2;
// }else if(operator === "/"){
//     let result = number1 - number2;
// }else if (operator === "%"){
//     let result = number1 % number2;
// }else{
//     alert("This is not allowed opeator, please try again");
// }
// alert(`the sum of ${number1} and ${number2} is ${result}.` );

