"use strict";
let uname="Ajay"
console.log(typeof uname);
// Another way of creating string
let uemail=new String('diwakar@gmail.com')
console.log(typeof uemail);
// String concatenation

console.log("Hi " +uname+", "+uemail+" is your email address...");//not recommended --> old method

// new method for string concatenation

console.log(`Hi ${uname}, ${uemail} is your email address...`) //yaha par single qutation ni valki
//  back tick `(~) vaali key vaala symbol ka use kia gya hai

// There are various method that we can call on the String
console.log(uname.includes('jay'));



