// for loop 
for(let i=0;i<10;i++){
    console.log("I am iteration ",i+1);
    
}

// break statement
console.log("----------------------------------");

for(let i=1;i<=10;i++){
    if(i>5){
        console.log("break is executed ");
        break;
    }
    console.log("iteration number is ",i);  
}
console.log("----------------------------------");
for(let i=1;i<=10;i++){
    if(i==5){
        console.log("continue is executed for iteration ",i);
        continue;
        
    }
    console.log("iteration number is ",i);  
}
console.log("----------------------------------");