// Variable: Global and local scope variables

// Global variable : This is a variable that is defined at the top of the page
// Local variable : These are variables that can not be used outside of where it has been declared.

let i;

for (i = 0; i < 5; i++) {
    let p = 10
    console.log(i + p);
}

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