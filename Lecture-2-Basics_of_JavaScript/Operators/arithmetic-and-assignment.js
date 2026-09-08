"use strict"
let var1 = 56
let var2 = 4
console.log(var1 + var2);
var2 += var1
console.log(var2);
var1 -= 6
console.log(var1);
var2 *= 3
console.log(var2);
var1 /= 2
console.log(var1);

let var3 = 5
let var4 = 3
var3 **= var4
console.log(var3);

var3 %= var4
console.log(var3);

var4 ++
console.log(var4); // 4

-- var3
console.log(var3); // 3


let resultVar = -- var4
console.log(resultVar);
resultVar = var4 --
console.log(resultVar);