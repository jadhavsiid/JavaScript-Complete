"use strict"
// Using Object Literal
const phone = {
    name: "iphone",
    model: "17 Pro",
    weight: "206 gm",
    color: "Cosmic Orange",
    on: function(){
    }
}

console.log(phone);
// Using new keyword
const newPhone = new Object({
    name: "Samsung",
    model: "S24",
    weight: "300gm",
    color: "Black"
})
console.log(newPhone);

// Adding properties to an object
const phone2 = new Object()
console.log(phone2);

phone2.name = "OnePlus"
phone2.model = "Nord CE5"
phone2.weight = "250gm"
phone2.color = "Infinite black"
console.log(phone2);

// Deleting a property
delete newPhone.color
console.log(newPhone);

// Checking if a property exists in an object or not
console.log("color" in newPhone);

// Accessing Properties of an object
// Way-1 : Dot (.) Notation
// Way-2 : Bracket [] notation

const movieObj = {
    movieName: "Spiderman 1",
    ratings: 9.3,
    "released Year": 2009,
    platform: "JioHotstar"
}

console.log(movieObj.ratings);
console.log(movieObj["released Year"]);
console.log(movieObj["platform"]);

console.log(movieObj);

// Changing properties of an object

// movieObj.movieName = "Superman"
movieObj["movieName"] = "Superman"
console.log(movieObj);

// Freezing object
Object.freeze(movieObj)
// movieObj["released Year"] = 2010
console.log(movieObj);

// How to find out object is frozen or not
console.log(Object.isFrozen(movieObj));

// To get all the keys of an object
console.log(Object.keys(movieObj));

// To get all the values of an object
console.log(Object.values(movieObj));

// To get all the properties / entries of an object
console.log(Object.entries(movieObj));
