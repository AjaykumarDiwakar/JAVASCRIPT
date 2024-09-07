// for in loop
// Array
const arr=[11,22,33,44,55,66,766]
for (const key in arr) {
    // key<-index of array
    console.log(arr[key]);    
}

console.log("-----------------------------");
// object
const myObj={
    username:'Kumar',
    uid:210,
    salary:120000
}

for (const key in myObj) {
   console.log(key,":-",myObj[key]);
   
}
console.log("-----------------------------");

// map
const map=new Map()
map.set('Name','Ajay Kumar')
map.set('Std','B.Tech')
map.set('Phone','9953931080')
//get entry
for (const entry in map) {
    console.log(entry);
    
}
console.log("------------- we cannot use for-in loop on the Map ----------------");