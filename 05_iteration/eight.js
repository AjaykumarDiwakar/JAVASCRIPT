// demonstration of reduce method

const myNums=[1,2,3]

const myTotal=myNums.reduce((acc,curr)=>{
    console.log("acc: ",acc);
    console.log("curr: ",curr);
    
    
   return acc+curr
},0)
console.log(myTotal);

const shoppingCart=[
    {
        itemName: "js course",
        price:2999
    },
    {
        itemName: "Java Fullstack",
        price:4999
    },
    {
        itemName: "Python Fullstack",
        price:2999
    },
    {
        itemName: "MERN",
        price:2499
    },
    {
        itemName: "Data Analyst",
        price:3999
    },
    {
        itemName: "Cyber Security",
        price:9999
    }
]
let amountPayable=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log("Amount Payable: ",amountPayable);
