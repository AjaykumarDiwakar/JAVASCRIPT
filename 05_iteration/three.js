// for of

const arr=['Ajay','Aman','Tiwari','Anuj']

for(let name of arr){
    console.log(name);
}

const str="Hello World!"
console.log("-----------------------------");

for(let c of str){
    console.log(c);
}

console.log("-----------------------------");

// Map

const map=new Map()
map.set('Name','Ajay Kumar')
map.set('Std','B.Tech')
map.set('Phone','9953931080')
//get entry
for (const entry of map) {
    console.log(entry);
    
}
console.log("-----------------------------");

// get key and value separately
for (const [key,value] of map) {
    console.log(key,":-",value);    
}

console.log("-----------------------------");
// object
const myObj={
    username:'Kumar',
    uid:210,
    salary:120000
}

// for (const key of myObj) {
//     console.log(key);
    
// }
console.log("objects cannot be iterated using for of loop");


console.log("-----------------------------");

