"use strict"

// Normal function
function func1(){
    console.log('I am func1');
}
func1()

// Anonymous function
const anonymfunc = function(){
    console.log('I am anonymous func');
}
anonymfunc()

// Arrow function / Fat Arrow function
const arrowFn = () =>{
    console.log('I am arrow function');
}
arrowFn()


// const arrowFn2 = (num) => {return `your num is ${num}`}
// console.log(arrowFn2(5));

const arrowFn2 = (num) => `your num is ${num}`
console.log(arrowFn2(5));

// Implicit return
const addFunc = (num1, num2) => num1 + num2
console.log(addFunc(8,4));