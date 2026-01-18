"use strict"
console.log("Hello World")
console.log("Hello Khushi");
// alert("This is a funny alert")
// alert(5+6)
console.log(4);

// Variables in js
// a = 20
// console.log(a); // If "use strict" present => Uncaught referenceError
// str = "khushi"
// console.log(str);

// EcmaScript => Standard of writing JavaScript
// EcmaScript current standard after 2015 : ES6

// Using "var","let" and "const" keyword
// "var" keyword
var a = 20
console.log(a);
a = 40
console.log(a);

var unAssvar
console.log(unAssvar);

// "let" keyword
let myName = "siddhesh"
console.log(myName);
myName = "Khushi"
console.log(myName);

let unAsslet
console.log(unAsslet);

// "const" keyword
const constnum = 36
console.log(constnum);
// constnum = 69
// console.log(constnum); // Uncaught TypeError
// const unAssconst
// console.log(unAssconst); // Uncaught SyntaxError

// Datatypes

// Primitive Datatypes- Fixed size and stored in Stack memory
// 1.) Number
let num1 = 69
console.log(num1);
let num2 = 39.56
console.log(num2);
console.log(typeof num2);
// Nan
let notanum = NaN
console.log(notanum);
console.log(typeof notanum);

// 2.) String
let str = 'a'
console.log(str);
console.log(typeof str);
str = "Love"
console.log(str);

// 3.) BigInt
let BigIntvar = 564135547n
console.log(BigIntvar);
console.log(typeof BigIntvar);

// 4.) Boolean
let boolvar = false
console.log(boolvar);
console.log(typeof boolvar);

// 5.) null
const temp = null
console.log(temp);
console.log(typeof temp);

// 6.) Undefined
let undefvar
console.log(undefvar);

// 7.) Symbol
let sym1 = Symbol('123')
let sym2 = Symbol('123')
console.log(sym1 == sym2);

// Non-Primitve: Not of fixed size and value is stored in heap area and reference is stored in stack area

// 1.) Arrays
let arr1 = ['Paanipuri','Paav Bhaji','Chinese']
console.log(arr1);
console.log(typeof arr1);

// 2.) Functions
function greet(){
    console.log("Greeted Good Evening");
}
greet()

// 3.) Object
let mobile_phone = {
    'brand':'iPhone',
    'model':'iPhone 17 Pro Max',
    'color':'Cosmic Orange',
    'price':'₹1,83,000'
}
console.log(mobile_phone);
console.log(mobile_phone.price);

