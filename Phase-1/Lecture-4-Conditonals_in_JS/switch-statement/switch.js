"use strict"

/* Imagine you're builiding a program for an tele caller of an bank application which does different tasks on basis of selection of different option by the user.

Initially, print message to the user "Welcome to the BANK OF INDIA"

Then print the message in following way:

      "Press 1 to know your account balance"

       "Press 2 to edit your account details"

       "Press 3 to verify your EKYC"

       "Press 4 to explore our loan options"

Take input from user using prompt()

Manipulate the input using switch case in following manner

If user inputs 1 print "You've selected to view your account balance"

If user inputs 2 print "You've selected to edit your account details"

If user inputs 3 print "You've selected to verify your EKYC"

If user inputs 4 print "You've selected to explore our loan options"
*/

console.log("Welcome to the BANK OF INDIA");
console.log("----------------------------");

console.log("Press 1 to know your account balance");
console.log("Press 2 to edit your account details");
console.log("Press 3 to verify your EKYC");
console.log("Press 4 to explore our loan options");

let userInput = Math.round(parseFloat(prompt("Enter a choice from 1 to 4 : ")))
console.log(userInput);

switch(userInput){
    case 1:
        console.log("You've selected to view your account balance");
        break;

    case 2:
        console.log("You've selected to edit your account details");
        break;

    case 3:
        console.log("You've selected to verify your EKYC");
        break;

    case 4:
        console.log("You've selected to explore our loan options");
        break;

    default:
        console.log("Invalid input");

}