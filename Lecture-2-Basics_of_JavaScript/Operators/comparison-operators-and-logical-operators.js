"use strict"
// Comparison
let str1 = 'khushi'
let str2 = 'khushi'
console.log(str1 == str2);
console.log(str1 === str2);
let str3 = '20'
let str4 = 'twenty'
console.log(str3 == str4);
console.log(str3 === str4);

console.log(str1 != str2);
console.log(str3 !== str4);

let var1 = 50
let var2 = 25
console.log(var2 < var1);

console.log(var1 <= var2);
console.log(var1 >= var2);

// Logical Operators
let num1 = 55
let num2 = 25
console.log(num1 > num2 && num1-num2 == 35);
console.log(num1 > num2 || num1-num2 == 30);
console.log(!(num1 == 55));

// Null coalescing operator
let variab = 'siddhesh'
let anothervariab = 'null'

let resvariab = variab ?? anothervariab
console.log(resvariab);