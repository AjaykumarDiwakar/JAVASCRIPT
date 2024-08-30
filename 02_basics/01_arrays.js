// array
const array=[1,2,3,4,5,6,7]
// push-> add element at the end
console.log(`Original Array: ${array}`);
array.push(8)
console.log(`After push operation: ${array}`);


// pop ->remove last element of the Array...
array.pop();
console.log(`After pop operation: ${array}`);

// unshift -> add element at the 0th index and all the elements are shifted one index right

array.unshift("Ajay")
console.log(`After unshift operation: ${array}`);

// shift -> remove element from the 0th index and all the elements are shifted one index left

array.shift()
console.log(`After shift operation: ${array}`);

// slice->slice(start(inclusive),end(exclusive)) it will return a array of range specified with
// excluding the end index and without making any change in the original array
let subArray=array.slice(0,3)
console.log(`array.slice(0,3) : ${subArray}`);
console.log(`Orgnl Array slice operation: ${array}`);


//splice(start,end)->both start and end are inclusive but the elements return by the splice will be
// removed from the original array

let subArray1=array.splice(0,3)
console.log(`array.splice(0,3) : ${subArray}`);
console.log(`Orgnl Array slice operation: ${array}`);






