"use strict"
let foodName = `Biryani`
// let foodName = new String('Biryani')
// console.log(foodName);
console.log(foodName.toUpperCase());

console.log(foodName.toLowerCase());

console.log(foodName.charAt(3));

console.log(foodName.indexOf('a'));

console.log(foodName.slice(0,3));
console.log(foodName.slice(0,-3));

console.log(foodName.substring(3,6));
console.log(foodName.substring(2,-2));

let uName = "   Geek god     "
console.log(uName);
console.log(uName.trim());

let url = 'https://google.com/Micheal%20Jackson.com'
console.log(url.replace('%20','-'));

let sent = "I like eating Apples, Bananas and Bananas"
console.log(sent.replace(/Bananas/g,'Oranges')); // /g flag
console.log(sent.replace(/BANANAS/i, 'Watermelon')); // /i flag

console.log(url.includes('OpenAi'));

