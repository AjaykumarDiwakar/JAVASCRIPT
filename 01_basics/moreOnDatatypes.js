// number
let num=123
console.log("Number: "+typeof num);

// bigint -> just place n after the number then you will get a number of type of bigint 

let bigint=123356879998n;

console.log("BigInt: "+typeof bigint);

// symbol

let symbol=Symbol('123')
let anotherSymbol=Symbol('123')

console.log(symbol==anotherSymbol);
console.log("Symbol: "+typeof symbol);

// Object
let myObj={
    fName:"Ajay",
    lName:"Kumar"
}

console.log("Object: "+typeof myObj);

// Arrays

const array=["Ajay","Kumar","Diwakar"]

console.log("Array: "+typeof array);

// function


const myFunc=function(){
    console.log("I am a function who doesnot do anything...");
    
}

console.log("Function: "+typeof myFunc);

