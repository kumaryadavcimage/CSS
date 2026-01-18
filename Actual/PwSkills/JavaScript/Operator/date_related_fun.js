const d = Date();
console.log(d); 
// The Date() function returns a new string which has date data
const dt = new Date() //  to get a date object we do new Date(), this returns a special object having date return
console.log(dt)
console.log(dt , typeof dt)

console.log(dt.getDate());
console.log(dt.getMonth()); // based on 0 based indexing, jan - 0, Dec - 11
console.log(dt.getFullYear());
console.log(dt.getHours());
console.log(dt.getMinutes());
console.log(dt.getSeconds());
console.log(dt.getDay())
console.log(dt.toDateString());
console.log(dt.toLocaleDateString());

// interesting function
console.log(dt.getTime());

const custom = new Date("1,10,2021");
console.log(custom.toDateString());

