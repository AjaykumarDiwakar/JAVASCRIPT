const language=["Python","C++","Java","Javascript"]
const project=["Hotel Management","Bank Management","Notetaker"]
language.push(project);//by pushing project array in the language we are adding project array as
// a single element of language
console.log(language);


// concat-> it will spread the elements of the array which we are concating to the original array
const main=[1,2,3,4]
const next=[5,6,7,8,9]
// const newArray=main.concat(next,project) we are allowed to concat multiple arrays
const newArray=main.concat(next)
console.log(newArray);


// ... operator -> it can also be used to spread array

let newArray1=[...main,...next,...language]
console.log(newArray1);


// flat() -> it can also be used as spread operator but it can we use when there are more depth used
// a single array

const arr=[1,2,3,[4,5,[6,7,[8,9,[10,[11,12]]]]],13,14]
const newarr=arr.flat(1)
console.log(arr.flat(1))
console.log(arr.flat(2))
console.log(arr.flat(3))
console.log(arr.flat(4))
console.log(arr.flat(5))
console.log(arr.flat(Infinity))


// isArray
let str="Ajay Kumar"
console.log(Array.isArray(str));

// from method to create Array

// let us create array from string

let arr2=Array.from(str)
console.log(arr2);

let arr4=Array.from({name:"Ajay",std:"B.Tech"})
console.log(arr4);//it will print empty array as there is slight confusion regarding the choice 
// of the element of the array among key and values as we have not sepcified whether we want array
// of keys or values


//of Method 
let math=100
let hindi=95
let science=97

const arr3=Array.of(math,hindi,science)
console.log(arr3);





