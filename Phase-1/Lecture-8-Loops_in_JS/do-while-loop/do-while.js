"use strict"
/* Practice Question

A local coffee shop gives out a stamp for every coffee a customer buys, and once they collect enough stamps, they get a free coffee. You're building a quick simulation to see how many coffees a customer buys before earning their free one.

Create a variable to track the number of stamps collected, starting at 0

Use a do while loop so the customer always buys at least one coffee before any check happens

Inside the loop, increase the stamp count by 1 and print a message showing the current stamp count after each purchase

Keep the loop running as long as the stamp count is less than 6

Once the loop ends, print a message saying the customer has earned a free coffee, along with the total number of coffees it took */

let noOfStamps = 0
do {
    noOfStamps+= 1
    console.log(`You have total ${noOfStamps} stamps.`);
    
} while (noOfStamps < 6);

if(noOfStamps == 6){
    console.log(`Congratulations !! You earned a free coffee for ${noOfStamps} coffee you purchased before.`);
}