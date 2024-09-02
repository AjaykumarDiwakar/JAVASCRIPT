function func(parameter1="default value",parameter2){
    //body
    // if return statement is not used then by default undefined is returned
    // return
}
// demo

function greetings(name){
    console.log("Good Morning ",name);
}

greetings("Ajay")

const greet=function(name){
    console.log("Hello ",name)
}

let returned=greet("Kumar")
console.log(returned);//will print undefined as the return value will be undefined

// if parameters are not passed

const wish=function(name){
    console.log("Hello , ",name)
}

wish();

// passing some default value

const wish1=function(name="John Doe"){
    console.log("Hello , ",name);
    
}
wish1();
wish1("Ajay Kumar")

// return addition of two numbers

const add=function(a,b){
    return a+b;
}
console.log(add(2323,1111));
//Note: undefined, "", 0 can we use false boolean value


// Rest operator to bind te multiple value into a single array

const calculateCartPrice=function(...num){
    return num;
}

console.log(calculateCartPrice(10,20,30,40));

const calculateCartPrice1=function(n1,n2,...num){
    return num;
}
console.log(calculateCartPrice1(1,2,3,4,5,6,7));//1->n1, 2->n2 remaining in  the num

const user={
    username:"Ajay Kumar",
    useremail:"kumar@google.com"
}

const handleObj=function(anyObject){
    console.log(`Hello ${anyObject.username} your registered mail is ${anyObject.useremail}`);
    
}

handleObj(user)

handleObj({
    username:"John Doe",
    useremail:"doe@meta.com"
})

// Take an array and return the value at index 1
const array=[11,22,33,44,55,66]

const arrayHandler=function(myarray){
    return myarray[1];
}
console.log(arrayHandler(array));

console.log(arrayHandler([22,33,44,55,66,77]));

