"use strict"
const arr = ['Siddhesh','Khushi',26,63,'John','David',['Chocolate','banana']]
console.log(arr);
console.log(typeof arr);

// Ways of declaring an Array

// Way-1 : Literal way
const iceCreamFlavours = ['Vanilla','Chocolate','Butterscotch']
console.log(iceCreamFlavours);

// Way-2: By creating Array object
const iceCreamFlavour = new Array('Vanilla','Chocolate','Butterscotch')
console.log(iceCreamFlavour)

console.log(iceCreamFlavours[1]);

// defining array elements after defining an array
const emptyArr = []
emptyArr[0] = 'Charger'
emptyArr[1] = 26
emptyArr[2] = 'power bank'
emptyArr[3] = ['mobile phone','laptop']

console.log(emptyArr);

// changing elements of an existing array
iceCreamFlavour[2] = 'Tender Coconut'
console.log(iceCreamFlavour);

// to get length of an array
console.log(emptyArr.length);


// Array Methods

// 1.) push
const randomArr = ['waterbottle','tiffin','stationary box']
console.log(randomArr);
randomArr.push('handkerchief');
console.log(randomArr);


const arr1 = [53,69,47]
const arr2 = ['mad','dad','sad']
// arr1.push(arr2)
console.log(arr1);
console.log(arr1.length)
// [53,69,47,'mad','dad','sad']

// 2.) concat() or spread opearator
const newarr = arr1.concat(arr2)
console.log(newarr);
// [53,69,47,'mad','dad','sad']
console.log(newarr.length);

// Spread Operator(...)
let myName = "Siddhesh"
console.log(...myName);

const socialMedia = ['instagram','x','snapchat']
console.log(...socialMedia);
// [53,69,47,'mad','dad','sad']
const spreadedArr = [...arr1,...arr2]
console.log(spreadedArr);
console.log(spreadedArr.length);

// pop()
console.log(socialMedia);
socialMedia.pop()
console.log(socialMedia);

//unshift()
const groceries = ['bread','egg','milk','chicken']
console.log(groceries);
groceries.unshift('cheese')
console.log(groceries);

// shift()
console.log(groceries);
groceries.shift()
console.log(groceries);

// includes()--> returns boolean value
console.log(groceries);
console.log(groceries.includes('fish')); 

// indexOf()
console.log(groceries);
console.log(groceries.indexOf('milk'));
console.log(groceries.indexOf('fish')); // -1

// join()--> returns string
const jsArr = ['Java','Script']
console.log(jsArr.join(' ')); 

// slice()
const bigNumArr = [150,250,500,960,300,600]
console.log(bigNumArr.slice(1,5));

// splice()
const foodItems = ['maggi','shawarma','fish and chips','paella']
let foodChange = foodItems.splice(1,1)
console.log(foodChange);
console.log(foodItems);

// flat()
const englandFClubs = ['Manchester United','Liverpool','Arsenal','Chelsea']
const spanishFClubs = ['Real Madrid','Barcelona',['Athletico Madrid','Sevilla']]

englandFClubs.push(spanishFClubs)
console.log(englandFClubs.flat(2));


// Array.from() --> reverse of spread
console.log(Array.from('Khushi'));

// Array.of()
console.log(Array.of('siddhesh','khushi','chocolate'));