let val1 = 10
let val2 = 20

function addVal(num, num1){
    let total = val1 + val2
    return total
}

let res1 = addVal(val1,val2)

// Call Stack
function one(){
    console.log("one");
    two()
}
function two(){
    console.log("two");
    three()
}
function three(){
    console.log("three");
}

one()
two()
three()