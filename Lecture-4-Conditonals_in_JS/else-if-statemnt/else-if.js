"use strict"
// Else if

/* Imagine a home automation tool which automatically turns on Heater, Fan or Air Conditioner based on sensing the current temperature of the house.

The conditions to be followed are:

If current temperature is below 18°C, then "Turn the Heater on"

If current temperature is between 18°C and 25°C (inclusive), then "Turn the Fan on"

If current temperature is above 25°C, then "Turn the AC on" */

let temperature = 10

if(temperature < 18){
    console.log("Turn the Heater on");
}
else if(temperature >= 18 && temperature <= 25){
    console.log("Turn the Fan on");
}
else if(temperature > 25){
    console.log("Turn the AC on");
}