// scope of two types ->1)Global scope. 2)Block scope

let a=11
let b=22
let c=33
// a ,b are global variable as they are not declared inside any block

if(true){
    let a=111
    let b=3333
    console.log("Inner a: ",a," Inner b: ",b)
    console.log("Global c:",c);
     
    c=888   //reassignment of global variable will also be visible outside the current block
}

console.log("Outer a: ",a," Outer b: ",b,"Outer c:",c)

function one(){
    const username="Ajay Kumar"
    function two(){
        const website=" youtube"
        console.log(username+website);
        
    }
    // console.log(website);// cannot access outside the block
    two()
}
// console.log(username);//cannot access outside the block
one()

//+++++++++++++++++++++Some Javascript function types+++++++++++++++++++++

//function declaration-> These types of functions can be called above the function declaration

one(5)//it will be executed without any error

function one(num){
    return num+1;
}

//function expression-> cannot be declared above the declaration
//two(55)//throw an error

const two=function(num){
    return num+1;
}
