// Objects:

const oneCar = {
    brand: "Mazda",
    model: "3",
    color: "grey",
    fuel: "Diesel",
    doors: 4,
    year: 2005,
    checkTankAmount: function () {
        console.log(`You need to drive to the next gas station with your ${this.brand} ${this.model}`)
    }
}
oneCar.checkTankAmount();



// Object constructor:

function CarOC(brand, model, color, fuel, doors, year) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.fuel = fuel;
    this.doors = doors;
    this.year = year;
    this.checkTankAmount = function () {
        console.log(`You need to drive to the next gas station with your ${this.brand} ${this.model}`)
    }

}



// Create an instance

let susannesCar = new CarOC("Mazda", "3", "grey", "Diesel", 4, 2005);
console.log(susannesCar);


// Class vehicle, car, motorcycle, truck, plane, ship, bicycle

class Vehicle {
    constructor(brand, model, color, year) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;
    }
}

class Car extends Vehicle {
    constructor(brand, model, color, fuel, doors, year) {
        super(brand, model, color, year)
        this.fuel = fuel;
        this.doors = doors;
    }
    checkTankAmount() {
        console.log(`You need to drive to the next gas station with your ${this.brand} ${this.model}`)
    }
}

let mustafasCar = new Car("Ford", "Fiesta", "white", "Petrol", 2, 1990);
console.log(mustafasCar);


function Person(name, age, married) {
    this.name = name;
    this.age = age;
    this.isMarried = married;
    this.hello = function () {
        return "Hello " + this.name;
    }
};



function myClass(name, surname, age, nationalite) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.nationalite = nationalite;
    this.fullName = function () {
        console.log(`You are ${this.name} ${this.surname}`)
    }
}

let Burak = new myClass("Burak", "Bilkay", 33, "Turkish");
console.log(Burak);