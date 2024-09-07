// forEach-> array.forEach(function(currentValue, index, arr), thisValue)
// Array
console.log("----------------1-------------");
const arr = [11, 22, 33, 44, 55, 66, 777, 909]
arr.forEach(function (item) {
    console.log(item);
})
console.log("-----------------2------------");
// using arrow function as callback function
arr.forEach((item) => {
    console.log(item);

})
console.log("------------------3-----------");

// passing refernce of arrow function
const print = (item) => {
    console.log(item);

}
arr.forEach(print)
console.log("-------------------4----------");
//passing reference of function expression
const printAgain = function (item) {
    console.log(item);

}

arr.forEach(printAgain);
console.log("--------------------5---------");
//passing reference of function expression
const printAll = function (item, index, arr) {
    console.log("current value: ", item, " current index: ", index, "Array: ", arr);

    console.log("This: ", this);

}

arr.forEach(printAll, 800);
console.log("---------------------6--------");
const list = ['Ajay Kumar', 'Aditya Tiwari', 'Aman Thakur', 'Anuj Kumar']
list.forEach(function(item, index, list) {
    console.log("Item: ", item, "index: ", "List: ", list);
    console.log(this);


}, arr)
console.log("---------------------7--------");
list.forEach(function(item, index, list){
    console.log("Item: ", item, "index: ", "List: ", list);
    console.log(this);//[1] as we have passed collection of values but we are allowed to pass
    // single value (can we collection holding mutiple values like array)


}, 1, 2, 3, 4, 5)
console.log("---------------------8--------");
list.forEach(function (item, index, list) {
    console.log("Item: ", item, "index: ", "List: ", list);
    console.log(this);


}, this)//as the passed 'this' refers to empty object 


console.log("---------------------9--------");
list.forEach((item, index, list) => {
    console.log("Item: ", item, "index: ", "List: ", list);
    console.log(this);/*{} as
    you're passing the second argument (thisArg) to forEach, but inside the arrow function, 
    this will not refer to 'this' argument. It will refer to the 'this' from where the function 
    is defined (likely the global object, or undefined in strict mode).
    
    */
/*
for all the examples that we have demonstrated if we use arrow function as callback then
this will refers to {} 
*/

}, {
    username: 'Ajay Kumar',
    roll_no: 5,
    date: new Date().toLocaleString("en-IN")
})


console.log("---------------------10-------");
list.forEach(function(item, index, list) {
    console.log("Item: ", item, "index: ", "List: ", list);
    console.log(this);
}, {
    username: 'Ajay Kumar',
    roll_no: 5,
    date: new Date().toLocaleString("en-IN",{timeZone: 'Asia/Kolkata'})
})
console.log("---------------------11-------");
// objects inside an Array
const array=[

    {
       username:'Ajay Kumar',
       r_number:5

    },
    {
       username:'Aditya Tiwari',
       r_number:6
       
    },
    {
        username:'Aman',
        r_number:7
        
    },
    {
        username:'Anuj',
        r_number:8
        
    },
    {
       username:'Himanshu',
       r_number:9

    }
]
 array.forEach((item)=>{
     for(const key in item){
         console.log(key,":-",item[key]);
         
        }
    })
    console.log("---------------------12-------");

    