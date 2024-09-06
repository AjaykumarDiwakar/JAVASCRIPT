// Nullish coalescing operator (??) : null undefined ->basically this operator is used avoid null
// and undefined values

let val=null ?? 10
console.log("null ?? 10: ",val);
let val1=undefined ?? 200
console.log("undefined ?? 200: ",val1);
let val2=null ?? undefined
console.log("null ?? undefined: ",val2);
let val3=null ?? 100 ?? 200
console.log("null ?? 100 ?? 200: ",val3);

let val4= undefined ?? 100 ?? 200
console.log("undefined ?? 100 ?? 200: ",val4);

let val5 =undefined ?? null ?? 100 ?? 200
console.log("undefined ?? null ?? 100 ?? 200: ",val5);
