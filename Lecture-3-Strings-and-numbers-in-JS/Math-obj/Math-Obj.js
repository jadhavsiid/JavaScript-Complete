"use strict"
let value = 56.73
console.log(Math.round(value));

value = 69.99
console.log(Math.floor(value));
console.log(Math.ceil(value));

value = 2
console.log(Math.pow(value,4));

value = 144
console.log(Math.sqrt(value));

let negValue = -32
console.log(Math.abs(negValue));
console.log(Math.abs(28));

console.log(Math.min(25,12,8,45,69));
console.log(Math.max(25,12,8,45,69));

// Math.random()
console.log(Math.random());
// Suppose we've to generate a random number b/w 1 - 10
console.log(Math.round(Math.random()*10) + 1 );
// Suppose we've to generate a random number within a given range
let min = 1
let max = 6
console.log(Math.round(Math.random() * (max - min + 1) + min));
