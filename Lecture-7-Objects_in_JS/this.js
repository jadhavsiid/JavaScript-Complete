"use strict"
const person = {
    "first name": "Khushi",
    "last name": "Vishwakarma",
    age: 21,
    greet: function(){
        return `Hello ${this["first name"]} ${this["last name"]}`
        // Hello Khushi Vishwakarma
    }
    // greet: () =>{
    //     return `Hello ${this["first name"]} ${this["last name"]}`
    // }

}

console.log(person.greet());

// console.log(this);

// JSON (JavaScript Object Notation)

// JS object
const prod = {
    "prod name": name,
    "prod price": price,
    "prod category": category
}

// JSON
{
    "prod name": "name",
    "prod price": "price",
    "prod category": "category"
}
