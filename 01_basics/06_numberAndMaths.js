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
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1)+min));
/*
let i=1
while(i<1000){
    if(
        Math.floor(Math.random()*(max-min+1)+min)==20){
        break;
    }
    i++;
}
console.log(i);
*/

while(true){
    let num=Math.floor(Math.random()*(max-min+1)+min);
    console.log(`This is Math.floor(Math.random()*(max-min+1)+min): ${num}`);
    
    if(
        num==20){
        break;
    }

}

/*
let num=Math.floor(Math.random()*(max-min+1)+min)
->let's decode it 
->firstly we have Math.floor() function which provides us the floor value
->Math.random() will return any value between 0 (inclusive) and 1  (exclusive)

->Now the problem is to find a number between 10 and 20 both inclusive
  case 1: if we multiply Math.random() with (max-min) and add min then we will never get max value
          for example if the max=20 and min=10 the max-min=10 so the min value will be 10 and max will be 19
          as the max value from Math.random() is 9(floor value) so max value we will get will be 19
          i.e max(Math.random())->9 +min->10=19
  case 2: if we multiply Math.random() with (max-min) and add min+1 the min value will be 11 and we
          will never get min value so we cannot make any change to the value added to the result of
          Math.random.
  case 3: (Solution)
          what if we add min but multiply with (max-min+1) 
          we will get min value when Math.random return 0 as 0*(max-min+1)+min will be min value.
          And we will get max value when Math.random() return 0.91 something and multiply it with 
          eleven will be bet 10.something and adding 10 to it will give us 20 as floor value..










*/ 



