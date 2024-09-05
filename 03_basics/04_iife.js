// Immediately Invoked Function Expression

(function look() {
    console.log("Hi Aj,This is look function");  
})();

// have a look at the syntax
/*
(->outer parenthesis in which method is declared

Method body

)()->Here the Parenthesis for invokation as we used ealier like func()

it is reccommended to use the semicolon after the iife ,as it semicolon refers to the end of 
the function  execution otherwise if we write any iife after it(current iife) we will get error.
*/ 
// (
// function name() {
//     console.log("Hi ,Ajay");
    
// }

// )()

(()=>{
    console.log("We can use arrow function within a iife...");
})();

//we are allowed to pass the parameter in the iife 

((name)=>{
    console.log("Hello ,",name);
})("Ajay");

(function(name){
    console.log("Hello ,",name);
    
});
