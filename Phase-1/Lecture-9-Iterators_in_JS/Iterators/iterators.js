const foodItems = ['PaaniPuri','Momos','Noodles','Manchurian','VadaPao']

// for loop

// for (let i = 0; i < foodItems.length; i++) {
//     console.log(foodItems[i]);   
// }

// for of 

// for(let fitem of foodItems){
//     console.log(fitem);
// }

// forEach()

let foodItem = foodItems.forEach((item,index,arr) => {
    // console.log(`${item} is at ${index} index.`);
    console.log(arr);
})


const movies = [
    {
        name: "Movie-1",
        releasedYr: 2009
    },
    {
        name: "Movie-2",
        releasedYr: 2015
    },
    {
        name: "Movie-3",
        releasedYr: 2021
    },
    {
        name: "Movie-4",
        releasedYr: 2006
    },
    {
        name: "Movie-5",
        releasedYr: 2022
    }
]

movies.forEach((movie) =>{
    console.log(movie.releasedYr);
})


// .filter()

const randomNumbers = [1,10,33,8,100,56] //[15,105,1005]

let filteredNum = randomNumbers.filter((num) => num < 10)
console.log(filteredNum);


let movieFilter = movies.filter((movie) => {return movie.releasedYr > 2020})
console.log(movieFilter);


// .map()

//[11,20,43,18,110.66]

let randomNumbersPlusTen = randomNumbers.map((num) => num + 10)
console.log(randomNumbersPlusTen);

// .map() and .filter() chaining

let filteredRandomNumbers = randomNumbers
                                         .map((num) => num * 10)
                                         .map((num) => num + 5)
                                         .filter((num) => num % 3 == 0)


console.log(filteredRandomNumbers);


// .reduce()

const someNumbers = [12,4,2,1] // 19

let sumOfSomeNumbers = someNumbers.reduce((accumulator, currentVal) => accumulator + currentVal)
console.log(sumOfSomeNumbers);


sumOfSomeNumbers = someNumbers.reduce((accumulator, currentVal) => accumulator + currentVal, 22)
console.log(sumOfSomeNumbers); // 41


// .findIndex()

const numArr = [40, 5, 9, 25, 63]

let lessThanten = numArr.findIndex((num) => num < 10)
console.log(lessThanten);

// .some() => boolean output

const evenOddnum = [25,12,58,63,91]

let divisibleByTwo = evenOddnum.some((num) => num % 2 == 0 )
console.log(divisibleByTwo);