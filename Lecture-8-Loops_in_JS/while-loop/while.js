"use strict"
/* A football club's new signing has been given a fitness target by the coach. He needs to complete several training sessions before he's cleared to play in the next match, and the club wants a simple program to track his progress session by session.

Create a variable to track the number of sessions completed, starting at 0 Use a while loop that keeps running until he reaches 5 completed sessions On each loop iteration, increase the session count by 1 and print a message showing which session number he just finished Once the loop ends, print a final message saying "player is fit and ready to play."

The Output should be in a following way:

Player has completed 1 / 5 training sessions.

Player has completed 2 / 5 training sessions.

Player has completed 3 / 5 training sessions.

Player has completed 4 / 5 training sessions.

Player has completed 5 / 5 training sessions.

The Player is fit and ready to play */


// let noOfSessions = 1

// while (noOfSessions <= 5) {
//     console.log(`Player has completed ${noOfSessions}/5 training sessions.`);
//     noOfSessions+=1
// }
// console.log("The Player is fit and ready to play");

/* You're building a quick squad-check tool for your FIFA World Cup 2026 Predictor project. You have a list of player names for one of the teams, and you want to search through it using a while loop to find out if a specific player is part of the squad — without using any array search methods like includes() or indexOf().

Create an array of at least 6 player names - ['m. salah','vini jr','haaland','mbappe','neymar','messi','ronaldo']

Create a variable to hold the name of the player you're searching for 

Use a while loop with an index variable to go through the array one player at a time Inside the loop, check if the current player matches the one you're searching for — if it matches, print that the player was found and stop checking further players 

If the loop finishes without finding a match, print a message saying the Player not available. */

const playerArr = ['m. salah','vini jr','haaland','mbappe','neymar','messi','ronaldo']
let playerToLook = 'Ronalo'
let iterable = 0
let isExecuted = false
while(iterable < playerArr.length){
    if(playerToLook.toLowerCase() === playerArr[iterable]){
        console.log(`${playerToLook} was found at ${iterable} index.`);
        isExecuted = true
    }
    iterable+=1
}
if(isExecuted === false){
    console.log('Player not available');
}
