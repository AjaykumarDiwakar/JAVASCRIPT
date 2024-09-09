// filter

console.log("-------------------1---------");
let arr=[1,2,3,4,5,6,7,8,9]

let rval=arr.filter((item)=> item>4)//implicit return
console.log(rval);
console.log("-------------------2---------");
rval=arr.filter((item)=>{item>4})
console.log(rval);//[] as no implicit return due to use of block{}
console.log("-------------------3---------");
const books=[
    {
        title:'Book one',genre:'Fiction',publish:1981,edition:2004
    },
    {
        title:'Book Two',genre:'Non-Fiction',publish:1992,edition:2008
    },
    {
        title:'Book Three',genre:'History',publish:1999,edition:2007
    },
    {
        title:'Book Four',genre:'Non-Fiction',publish:1989,edition:2010
    },
    {
        title:'Book Five',genre:'Science',publish:2009,edition:2014
    },
    {
        title:'Book Six',genre:'Fiction',publish:1987,edition:2010
    },
    {
        title:'Book Seven',genre:'History',publish:1986,edition:1990
    },
    {
        title:'Book Eight',genre:'Science',publish:2011,edition:2016
    },
    {
        title:'Book Nine',genre:'Non-Fiction',publish:1981,edition:1989
    }
    
];

let userBooks=books.filter((bk)=>bk.genre==='History')
userBooks=books.filter((bk)=>{return bk.publish>=1995})

console.log(userBooks);
console.log("-------------------4---------");
userBooks=books.filter((bk)=>{return bk.publish>=1995 && bk.genre==='History'})

console.log(userBooks);
