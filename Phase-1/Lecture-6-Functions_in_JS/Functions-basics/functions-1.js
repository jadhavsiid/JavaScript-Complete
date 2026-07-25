"use strict"
// syntax to create functions in JS

// function definition
function sayMyName(){
    // console.log(`khushi`);
    return `khushi`
}
// function calling
let funcRes = sayMyName()
console.log(funcRes);

// Ice cream order function (Parameters and Arguments)
function iceCreamOrder(flavour){
    return `You've ordered ${flavour} ice cream.`
}
let flavourOrder = iceCreamOrder('chocolate')
console.log(flavourOrder);

// Multiple parameters and arguments
function foodOrder(food,extra){
    return `Order placed for ${food} with extra ${extra}`
}
let orderFood = foodOrder('biryani','gravy')
console.log(orderFood); 

// default parameter
// current year, birth Year
function ageCalculator(birthYr, currentYr = 2026){
    return `Your current age is: ${currentYr - birthYr}.`
}

let currentAge = ageCalculator(2011)
console.log(currentAge);


/* You're building a small feature for a food delivery app. Write a function named placeOrder that takes two parameters, foodItem and quantity, and returns a string like "Ordering 2 portions of Biryani" when called with "Biryani" and 2.

Call the function with a food item and quantity of your choice

Store the returned result in a variable named myOrder. */

function placeOrder(foodItem, quantity){
    return `Ordering ${quantity} portions of ${foodItem}.`
}

let orderRes = placeOrder('Biryani',2)
console.log(orderRes);