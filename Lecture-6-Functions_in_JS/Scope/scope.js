"use strict"

// global scope and function scope
const aVariable = 100 // global variable

function additonFn(num){
    console.log(num); // local variable
    return num + aVariable
}

let funcRes = additonFn(50)
console.log(funcRes);
// console.log(num);

// block scope
var c = 600
if (true) {
    let a = 20
    const b = 200
    var c = 500
    // console.log(a);    
    // console.log(b); 
    console.log(c);   
}
// console.log(a);
// console.log(b);
console.log(c);


// Scope inside a function

function func1(){
    let var1 = 'variable-1'

    function func2(){
        let var2 = 'variable-2'
        console.log(var1);
    }
    func2()
    // console.log(var2);
}
func1()


// Anonymous functions

// function expression
const anonymousFunc = function(){
    return `Hi i am a anonymous function`
}
console.log(anonymousFunc());


// Hoisting in JS

hoistingfunc1()

function hoistingfunc1 (){
    console.log(`Hoisting in JS eg 1`);
}

// hoistingfunc2()

const hoistingfunc2 = function(){
    console.log(`Hoisting in JS eg 2`);
}
hoistingfunc2()

