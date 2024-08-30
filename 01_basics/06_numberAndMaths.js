// Number
const num=1234
const anotherNum=new Number(1234)
console.log(num);
console.log(anotherNum);
const balance=new Number(1123456670.8937837)
const remBalance=new Number()
// some operation on number
console.log(anotherNum.toFixed(4))//fix the number of digits that can come after the decimal
console.log(anotherNum.toString());//the value of the number object will be return as string
console.log(remBalance.toString());//if no value is passed while creating number object that it will return 0(string)
console.log(balance.toExponential());//it will return exponential form as string
console.log(balance.toLocaleString());//it will represent the number with commas used in International standard
console.log(balance.toLocaleString('en-IN'));//it will represent the number with commas used in Indian standard
console.log(balance.toPrecision(7));//Number of digit you want in the representation


//Math

console.log(Math.abs(-234));
console.log(Math.floor(4.4332));
console.log(Math.round(4.4543));
console.log(Math.ceil(23.33));





