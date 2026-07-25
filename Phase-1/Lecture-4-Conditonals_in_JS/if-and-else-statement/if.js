"use strict"

//  If statement
let isUserLoggedIn = false

// if (isUserLoggedIn) console.log("Welcome to home page");
if (isUserLoggedIn){
    console.log("Welcome to home page");
}

// Else Statement
else{
    console.log("First login or signup");
}

/* Write a simple JavaScript program to check whether the person is eligible to drive or not.

Create 2 variables to store a person's Age and the Country which he's living in

If the person's age is greater than or equal to 16 and country is USA , print "You're eligible to drive !!"

else print "You're not eligible to drive !!" */

let userAge = 18
let userCountry = 'uSA'

if(userAge >= 16 && userCountry.toUpperCase() === 'USA'){
    console.log("You're eligible to drive !!");
}
else{
    console.log("You're not eligible to drive !!");
}



let healthStatus = 'sick'
// if(healthStatus.toLowerCase() === 'sick'){
//     console.log("Go to see a doctor");
// }
// else{
//     console.log("Enjoy at home");
// }


// Ternary operator
console.log(healthStatus.toLowerCase() === 'sick' ? "Go to see a doctor" : "Enjoy at home" );
