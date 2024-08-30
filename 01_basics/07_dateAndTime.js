// Date
let newDate=new Date()
console.log(newDate);
console.log(newDate.toString());
console.log(newDate.toDateString());
console.log(newDate.toJSON());
console.log(newDate.toTimeString());
console.log(newDate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
// console.log(newDate.toLocaleString()); it showing the wrong time as by default it is showing
// UTC which is is Coordinated Universal Time

// type of Date
console.log(typeof newDate);


//setting your own date
let dob=new Date(2003,8,5) //YYYY MM(0 based index) DD
console.log(dob.toLocaleString());
let compDOB=new Date(2003,8,5,5,37,25)//YYYY MM DD HH mm ss
console.log(compDOB.toLocaleString());
let newDate1=new Date("08-30-2024")//MM(1 based) DD YYYY
console.log(newDate1.toLocaleString());

// timestamp
let timestamp=Date.now()
console.log(timestamp);//timestamp will be provided in the milliseconds
console.log(Math.floor(Date.now()/1000))

// toLocaleString(locales, options) where options is basically a object
let newDate2=new Date();
console.log(newDate2.toLocaleString('en-IN',{
weekday:"long",
day:"2-digit",
month:"long",
year:"numeric",
hour:"2-digit",
minute:"numeric",
second:"2-digit",
timeZone: 'Asia/Kolkata' // Set to Indian Standard Time

}));
const optionObj={
weekday:"short",
day:"numeric",
month:"short",
year:"2-digit",
hour:"numeric",
minute:"numeric",
second:"2-digit",
timeZone: 'Asia/Kolkata' // Set to Indian Standard Time
}
let newDate3=new Date();
console.log(newDate3.toLocaleString("en-IN",optionObj));


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString






