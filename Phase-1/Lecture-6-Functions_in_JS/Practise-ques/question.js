"use strict"

/* You're building a small feature for a food delivery app. Write a function named placeOrder that takes two
parameters, foodItem and quantity, and returns a string like "Ordering 2 portions of Biryani" when called with
"Biryani" and 2.
Call the function with a food item and quantity of your choice
Store the returned result in a variable named myOrder. */

function placeOrder(foodItem, quantity){
    return `Ordering ${quantity} portions of ${foodItem}.`
}
let myOrder = placeOrder('biryani','2')
console.log(myOrder);

/* You're building a simple booking system for a movie theatre. Create a anonymous function and store it in a
variable bookSeat that takes one parameter called movieName. Inside this function, create another named
function named as generateTicket that returns a message like "Ticket booked for Inception".
Call generateTicket from within bookSeat and return its result.
The message in generateTicket should use the movieName parameter passed to bookSeat
Do not call generateTicket outside of bookSeat */

const bookSeat = function(movieName){
    function generateTicket(){
        return `Ticket booked for ${movieName}.`
    }
    return generateTicket()
}
console.log(bookSeat('Inception')); 


/* You're building a quick greeter for a hotel check-in app. Write an arrow function named greetGuest that takes two
parameters, guestName and roomNumber, and returns a string like "Welcome Alex, your room number is 101".
Store the arrow function in a const variable named greetGuest
Call the function with a name and room number of your choice
Store the returned result in a variable named greeting */

const greetGuest = (guestName, roomNumber) =>{
    return `Welcome ${guestName}, your room number is ${roomNumber}.`
}

let greeting = greetGuest('Alex',101)
console.log(greeting);

/* Question 1 — Restaurant Bill Calculator

You're building a billing feature for a restaurant's website. The app needs to calculate the total bill for a customer based on the items they ordered.

Declare a regular function named calculateBill that takes two parameters — itemPrice and quantity — and a third parameter discount that has a default value of 0.

Inside the function, calculate the subtotal (itemPrice * quantity), then subtract the discount from it and return the final amount.

Write a separate arrow function named formatBill that takes one parameter amount and returns a string like "Your total bill is ₹540". Use the implicit return (shorthand).

Call calculateBill with an item price and quantity of your choice, pass the result into formatBill, and store the final formatted string in a variable named receipt.

Call calculateBill again, this time without passing a discount, to verify the default parameter kicks in, and console.log that result directly. */

function calculateBill(itemPrice, quantity, discount = 0){
    return (itemPrice * quantity) - discount
}

const formatBill = (amount) => `Your total bill is ₹${amount}.`

let receipt = formatBill(calculateBill(1500, 2))
console.log(receipt);

let receipt2 = formatBill(calculateBill(500,3,100))
console.log(receipt2);

/*
You're building the initialisation logic for a startup landing page. When the JavaScript file loads, the page
should immediately set up some config values and display a welcome banner — without polluting the global
scope with variables that don't need to be global.

Declare a let variable named appName in the global scope and assign it a name for your app (e.g.
"LaunchPad"). This represents a config value the whole app needs access to.

Write an IIFE (you can use either the named or arrow syntax) that runs immediately when the script loads.
Inside it, declare a let variable named bannerMessage that builds a string using appName from the global
scope, something like "Welcome to LaunchPad — We're live!".

Inside the same IIFE, declare another let variable named loadTime and assign it a string like "Loaded at 09:00
AM". This should stay private to the IIFE.

console.log both bannerMessage and loadTime from within the IIFE.

After the IIFE, write a regular named function called getAppName that returns appName (the global
variable), and call and console.log it below. This shows that global scope is still reachable even after the IIFE runs.

Finally, try to console.log(loadTime) outside the IIFE and add a comment explaining what happens and why
IIFE was the right choice here over a regular function.
*/

let appName = "LaunchPad"

let bannerMessage = ((appName) => {
    console.log(`Welcome to ${appName} - We're Live!`);
    let loadTime = `Loaded at 09:00 AM`
    console.log(loadTime);
})(appName)

function getAppName(){
    return appName
}
let appNameRes = getAppName()
console.log(appNameRes);


// console.log(loadTime);


/* You're working on a social media app where each user gets a profile card when they sign up. The card generation logic needs to be properly scoped so that private details don't leak outside.

Create an anonymous function and store it in a variable named generateCard. It should take two parameters — username and role.

Inside generateCard, declare a let variable named cardId and assign it any number (this simulates a private internal ID that shouldn't be accessible outside).

Inside generateCard, define a named inner function called buildCard that uses both username, role, and
cardId (from the outer function's scope) to return a string like "Profile Card | User: alex | Role: Admin | ID:1042".

Call buildCard from within generateCard and return its result. Do not call buildCard outside of
generateCard.

Store the result of calling generateCard with a username and role of your choice in a variable named myCard and console.log it.

After all this, try to console.log(cardId) outside the function and add a comment explaining what error
you'd expect and why. */

const generateCard = function(username, role){
    let cardId = 1042
    function buildCard(){
        return `Profile Card | User: ${username} | Role: ${role} | ID: ${cardId}.`
    }
    return buildCard()
}

let myCard = generateCard('alex','Admin')
console.log(myCard);
// console.log(cardId);