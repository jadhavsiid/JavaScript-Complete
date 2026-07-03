// Higher Order Function (HOF)

// greetings () is a callback function
const greetings = (greet) => greet

// greetingsOffered() is a higher order function
function greetingsOffered(greetfn, greeting){
    return greetfn(greeting)
}

let greetingVal = greetingsOffered(greetings,'Hello World')
// greetings('Hello World')
console.log(greetingVal);