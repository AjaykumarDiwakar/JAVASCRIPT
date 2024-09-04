//this keyword is used to refers to the current context --> which basically means that it refers to
//  the current object ...
const users={
    username:"Ajay Kumar",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, Welcome to our website`);
        console.log("this refers to : ",this);
        
    }
} 
users.welcomeMessage()
console.log(this);

// this in function Expression

const func=function(){
    let username="Ajay Kumar"
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    
    console.log(this.username);
    
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    

    console.log(this)
}
func();


//Arrow functions
const fun1=()=>{
    console.log(this);
}

fun1()
/*
it not correct to say that we cannot use this inside the arrow function as we can use it in the
arrow function but it is not usable as the context of the this inside arrow is an empty object
....whereas the context of this inside the other functions is Global Object.........
*/

// explicit return in arrow function
const func2=(num1,num2)=>{
    return num1+num2;
}

console.log("EXPLICIT RETURN : ",func2(3,5));

// implicit return 
// 1)
const func3=(num1,num2)=> num1+num2

console.log("IMPLICIT RETURN:FIRST METHOD:  ",func3(3,5));

// 2)
const func4=(num1,num2)=> (num1+num2)

console.log("IMPLICIT RETURN:SECOND METHOD:  ",func4(3,5));

// 3)->The parenthesis that we are using in above two method are optional if we are not returning
// a object but if we want to return an object than compulsary we should use parenthesis as shown
const func5=()=> ({
    name:"Ajay Kumar",
    std:"B.Tech",
    email:"kumarajay@gmail.com"
})

console.log("IMPLICIT RETURN:THIRD METHOD:  ",func5());
const func6=(name,std,mail)=> ({
    name:name,
    std:std,
    email:mail
})

console.log("IMPLICIT RETURN:THIRD METHOD:  ",func5("Tiwari","B.Tech","tiwari@gmail.com"));


