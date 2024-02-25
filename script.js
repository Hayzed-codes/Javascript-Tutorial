// Variable: Global and local scope variables

// Global variable : This is a variable that is defined at the top of the page
// Local variable : These are variables that can not be used outside of where it has been declared.

// let i;


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
let results;
let age = 30;

if (age > 20 && age < 30) {
    results = age + 50;
}else {
    results = age;
}
console.log(results)


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
let p = 0;
while (p < num) {
    p++;
    console.log(p);
}

// FOR LOOP

for (let index = 0; index < num; index++) {
    
    console.log(index)
}

// Checking for a leap year
// CONDITIONS:
// The year must be divisible by 4 without any reminder
// The year divided by 100 should have a non-zero remainder
// If divided by 100  gives no remainder, then divided by 400 should give no remainder


const year = prompt('Enter year');

const checkLeap = (year)=> {
    let result;
    if((year % 4  === 0 && year % 100 !== 0) || (year % 4  === 0 && year % 100 === 0 && year % 400 === 0)){
        result = "Yes! it is a leap year"

    }else {
        result = "No! it is not a leap year"
    };

    return result;
};

const answer = checkLeap(year);
alert(answer)
// console.log(answer);


// writing a program or a function that prints 1 - 100 and,  check and  print FIZZ , BUZZ and FIZZBUZZ for multiples of 3, 5 and (3 and 5)

// let i;
let result = [];

const printNums = () => {
    for (i = 1; i <= 100; i++) {
    if ((i % 3 === 0 && i % 5 !== 0) || (i  % 3 !== 0 && i % 5 !== 0 )) {
        result.push("FIZZ");
    }
    else if ((i % 5 === 0 && i % 3 !== 0) || (i  % 3 !== 0 && i % 5 !== 0 )) {
        result.push("BUZZ");
    }
      else if (i % 5 === 0 && i % 3 === 0) {

      result.push("FIZZBUZZ");
    }
    else {
        result.push(i);
    }
    
}
return result;
}

console.log(printNums());

console.log(i);



