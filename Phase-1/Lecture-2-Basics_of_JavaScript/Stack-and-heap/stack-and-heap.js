"use strict"
let vegeName = 'lemon'
let anothervegeName = vegeName

console.log(anothervegeName);

anothervegeName = 'citrus'

console.log(anothervegeName);

console.log(vegeName);


let user = {
    email : 'userOne@gmail.com',
    upiId : 'one@axisBank'

}

let user2 = user
user2.email = 'userTwo@gmail.com'

console.log(user2.email);
console.log(user.email);
