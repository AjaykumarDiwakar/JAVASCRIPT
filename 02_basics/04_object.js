//declare a singleton object
const ob=new Object()
//declare a non singleton object
const obj={}

const regularUser={
    email:"god@gmail.com",
    fullname:{
        realUserName:{
            firstname:"Ajay",
            lastname:"Kumar"
        }
    }
}
console.log(regularUser.fullname.realUserName.firstname);

// merging objects to form a single object
const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}
const merged={obj1,obj2}//This method is not used widely as the new object itself contain
//  the object as its element 
console.log(merged);

// assign(target,source)-> all the entries will be copied to target.. multiple source allowed
const merged1=Object.assign(obj1,obj2)
console.log(merged1);
console.log(obj1);
console.log(obj1===merged1);
//so it is recommended to pass a empty object in place of source so that no chnage will be made
//in the objects that are being merged...

const obj3={1:"a",2:"b",3:"c"}
const obj4={4:"d",5:"e",6:"f"}

const merged2=Object.assign({},obj3,obj4)
console.log(merged2);
console.log(obj3);
console.log(obj3===merged2);

// spread operator for merging objects to form a single resultant object

const merged3={...obj3,...obj4}
console.log(merged3);

// JS object from database 
let data=[
{
    id:101,
    name:"Ajay"
},
{
    id:101,
    name:"Ajay"
},
{
    id:101,
    name:"Ajay"
}
]

// Access keys , values, entries

console.log(Object.keys(merged2));
console.log(Object.values(merged2));
console.log(Object.entries(merged2));
