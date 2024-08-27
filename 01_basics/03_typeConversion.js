//number related
let score=33
console.log(typeof score);
let score1="33"
console.log(typeof score1);
let intoNumber =Number(score1)
console.log(typeof intoNumber);
let score2="33abc"
let intoNumber1=Number(score2)
console.log(intoNumber1);//it will result as NaN because 33abc cannot be converted into number....but check typeof NaN
console.log(typeof intoNumber1)// it will be number


//boolean related

let flag=true
console.log(typeof flag)
// console.log(typeof Number(flag))
let someNumber=Number (flag)
console.log(someNumber);

// number to bool

let num=233434

let boolNum=Boolean(num)

console.log(boolNum);

let num1=-232424
let boolNum1=Boolean(num1)

console.log(boolNum1)

let num2=0

let boolNum2=Boolean(num2)

console.log(boolNum2);

//  so all the non-zero numbers ---> true
// 0(zero) will be false in boolean


// let us look at the conversion of the string into boolean

let str=""
console.log(typeof str);
let boolStr=Boolean(str)
console.log(boolStr);

let str1="Ajay"

console.log(typeof str1)
let boolStr1=Boolean(str1)
console.log(boolStr1);

// so the conclusion is that empty string i.e. "" means false in boolen
// Any non empty String means true
  
 