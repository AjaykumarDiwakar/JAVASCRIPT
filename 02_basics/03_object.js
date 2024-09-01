// object literal
const jsUser={
    name:"Ajay",
    "full name":"Diwakar Ajay Kumar",
    age:21,
    location:"UttarPradesh",
    email:"kumarajay7160@gmail.com",
    isLoggedIn:true,
    lastLogInDays:["Monday","Thursday"]
}
// Accessing elements of object

console.log(jsUser.age);
// console.log(jsUsers.full name); error
console.log(jsUser["full name"]);
console.log(jsUser["location"]);


// let us use Symbol as a key

let mysym=Symbol("420")

const jsUser1={
    name:"Ajay",
    "full name":"Diwakar Ajay Kumar",
    age:21,
    mysym:"Nice One",
    location:"UttarPradesh",
    email:"kumarajay7160@gmail.com",
    isLoggedIn:true,
    lastLogInDays:["Monday","Thursday"]
}
// console.log(jsUser1[mysym]); //result will be undefined as object is not used as key 
console.log(jsUser1["mysym"]);//here we are using mysym string i.e. using the above syntax
// mysym is used as a string key like other keys


const jsUser2={
    name:"Ajay",
    "full name":"Diwakar Ajay Kumar",
    age:21,
    [mysym]:"Nice One",//this is the right syntax to use object as key
    location:"UttarPradesh",
    email:"kumarajay7160@gmail.com",
    isLoggedIn:true,
    lastLogInDays:["Monday","Thursday"]
}
// console.log(mysym.valueOf())
console.log(jsUser2[mysym]);
console.log(typeof jsUser2[mysym]);

//freeze the object
// if you want to change value then you can change using the below syntax

jsUser2.email="diwakar@google.com"
console.log(jsUser2);
// but if you want to avoid any change in the object then you can freeze the object .after freezing
// no change can we made to any value
Object.freeze(jsUser2)
jsUser2.email="change@budbak.com"//will not be in the object as the object is already freeze
console.log(jsUser2);

jsUser1.greeting=function() {
    console.log(`Greeting ${jsUser1.name}`);
    return 0;
}
// console.log(jsUser1.greeting());
jsUser1.greeting()
