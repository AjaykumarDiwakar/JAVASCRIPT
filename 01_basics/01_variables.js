let a=200
const b=2000
let c
// const a; redeclaration of const and let type variable will show error
var d=200
var d=300;
let e="Ajay"
let f="Kumar"
const salary=40000
// redeclaration of var type variable will not throw error
{
    let a=300
    // here we do not make any change or redeclare the variable 'a' but here 'a' is
    //  a local variable for the block
    console.log("I am a of block level: "+a)

}
console.table([a,b,c,d,e,f,salary])


