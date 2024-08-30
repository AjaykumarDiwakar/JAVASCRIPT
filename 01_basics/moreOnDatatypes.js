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

//Primitive variables-> are declared in the Stack Memory

let a=34;
let b=a;
b=20
console.log(a);//a=34 as b=a here store a copy of a in b so change in b will not affect a
console.log(b);


// Non-Primitive variables take space in Heap

const obj1={
    email:"user@gmail.com",
    phone:9310807934
}

const obj2=obj1 //here the reference is copied so any change in obj2 will be reflected in obj1
obj2.email="diwakar@gmail.com"
console.log("obj1.email: "+obj1.email);
console.log("obj2.email: "+obj2.email);



