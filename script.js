// Variable: Global and local scope variables

// Global variable : This is a variable that is defined at the top of the page
// Local variable : These are variables that can not be used outside of where it has been declared.

// let i;

// for (i = 0; i < 5; i++) {
//     let p = 10
//     console.log(i + p);
// }

// console.log(i);

//OPERATORS AND EQUALIIES

//Arithmetical operators

// +, -, *, /, %, ==, ===

//minus (-)
let profits;
let costs = 15;
let salesPrices = 20;

profits = salesPrices - costs;
console.log(profits)

//Addition (+) : for number

let cost = 15, profit = 5, salesPrice = cost + profit;
console.log(salesPrice);

// Addition (+) : for strings

let firstNames = "Olatunde", surnames = "Tobi ", fullNames = surnames + firstNames;
console.log(fullNames + " is a big boy")

let firstName = "Olatunde", surname = "Tobi ", fullName = surname + firstName;
console.log(`${fullName} is a big boy`)

let a = 2
a *= 4;
console.log(a)


// AND OPERATOR
let result;
let age = 30;

if (age > 20 && age < 30) {
    result = age + 50;
}else {
    result = age;
}
console.log(result)


// OR OPERATOR

let price = 50;
let selPrice;
let gain = 10;

if (price >= 50 || price === 550){
    selPrice = price + gain;
}
else{
    selPrice = price;
}

console.log(selPrice)

// NOT OPERATOR

let name = "Hayzed";

if (name !== "Hayzed") {
    console.log("Why are you lying?");
}
else {
    console.log("That is good");
}

// LOOP

// While Loop

let num = 5;
let i = 0;
while (i < num) {
    i++;
    console.log(i);
}

// FOR LOOP

for (let index = 0; index < num; index++) {
    
    console.log(index)
}

// Checking for a leap year
// CONDITIONS:
// The year must be divisible by 4 without any reminder
// The year divided by 100 should have a non-zero remainder
//   If divided by 100  gives no remainder, then divided by 400  should give a remainder
