"use strict"
/* You're managing the playlist for a friend's birthday party, and you've got a list of songs queued up. Before the party starts, you want a quick script that announces each song in order as it's about to play, along with its position in the queue.

Create an array of at least 5 song names (or song + artist pairs, your choice) Use a for loop to go through the array from start to finish On each iteration, print a message showing the song's position in the queue (like "Song 1: ...") along with the song name After the loop finishes, print a final message saying the playlist has ended, along with the total number of songs that played */

// const songArr = ['Dai Dai','Ole Ole',"It's time for Africa","Sheesha","Tujhko"]

// for (let i = 0; i < songArr.length; i++) {
//     console.log(`Song-${i+1} - ${songArr[i]}`);
// }
// console.log(`Playlist has ended with ${songArr.length} songs played`);

/* You're setting up seating for a wedding reception. There are several tables, and each table has a fixed number of seats. You want a script that prints out a seating label for every single seat at every table, so the venue staff can stick labels on each chair.

Create a variable for the number of tables (for example, 4), Create a variable for the number of seats per table (for example, 6). Use an outer for loop to go through each table Inside it, use an inner for loop to go through each seat at that table On each inner iteration, print a label like "Table 1 - Seat 1", "Table 1 - Seat 2", and so on After each table's seats are fully labeled, print a short separator message before moving to the next table Once both loops finish, print a final message showing the total number of seats labeled across the whole venue */

// let noOfTables = 4
// let noOfSeats = 6
// for (let i = 1; i <= 4; i++) {
    
//     for (let j = 1; j <= 6; j++) {
//         console.log(`Table ${i} - Seat ${j}`);
//     }
//     console.log("---------------------------------");
// }

// console.log(`Total number of seats ${noOfTables * noOfSeats}`);


// for ...of loop
const songArr = ['Dai Dai','Ole Ole',"It's time for Africa","Sheesha","Tujhko"]

// for(let i = 0; i < songArr.length; i++){
//     console.log(songArr[i]);
// }

// for (let song of songArr){
//     console.log(song);
// }



// for ...in loop
const doraemon = {
    color: "blue",
    model: "robot",
    feature: "pocket"
}
// console.log(Object.entries(doraemon));
for(let key in doraemon){
    console.log(`${key} : ${doraemon[key]}`);
}