//! toString 

let a=34;
console.log(typeof a);

a=a.toString()
console.log(typeof a);

console.log("-------------------");

//! Number

let b="354";
console.log(typeof b);

b=Number(b)
console.log(typeof b);

console.log("-------------------");
//! lastIndexOf
let arr=[1,2,3,4,4,3,1,2]

console.log(arr.lastIndexOf(2));

console.log("-------------------");
//! indexOf
console.log(arr.indexOf(2));

console.log("-------------------");
//! shift

console.log(arr.shift());//! remove first element and return
console.log("Remaining: ",arr);

console.log("-------------------");
//!unshift ->add element at the  0th index ->will return size of the new array
console.log(arr.unshift(9,9,9,9));

console.log(arr);

console.log("-------------------");
//! join

console.log(arr.join(" ----- "));

//!slice
console.log("-------------------");
console.log(arr.slice(3));

