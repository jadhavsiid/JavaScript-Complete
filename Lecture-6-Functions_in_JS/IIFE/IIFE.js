
// normal named function
(function namedFunc(){
    console.log('Simple function');
})();

// anonyymous IIFE
(function(){
    console.log('Anonymous IIFE');
})();

// arrow IIFE
(() => {
    console.log('Arrow IIFE');
})();

// IFFE with parameter
((num) =>{
    console.log(`${num +  100}`);
})(50)
console.log(num);