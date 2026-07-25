"use strict"
/* You're checking attendance for a college lecture. You have a list of registered student names, and the moment you spot a particular student you're looking for, you don't need to keep checking the rest of the list — you can just stop right there and move on.

Create an array of at least 6 student names Create a variable holding the name of the student you're looking for (make sure it's somewhere in the array) Use a for loop to go through the array from start to finish On each iteration, print the name of the student currently being checked As soon as you find a match with the student you're looking for, print a message saying they've been found, along with their position in the list Use the break keyword right after finding the match, so the loop stops checking the remaining students immediately After the loop, print a message confirming attendance check is complete */

const studentArr = ["John","Mike","Rose","Mia",'Florentino',"Alex"]
let findStud = 'mia'

for(let i = 0; i < studentArr.length; i++){
    console.log(`Currently checking: ${studentArr[i]}`);
    if(studentArr[i].toLowerCase() === findStud){
        console.log(`${studentArr[i]} has been found on ${i+1} position.`);
        break
    }
}
console.log("Loop has been completed.");


// ----------------------------------------------------------------------------

const menuArr = ['Biryani','Chole Bhature','Noodles','Dosa','Chowmien']
let outOfStock = 'noodles'

for (let i = 0; i < menuArr.length; i++) {

     if(menuArr[i].toLowerCase() === outOfStock){
        continue
    }
    console.log(`Reading ${menuArr[i]}`);
    
}