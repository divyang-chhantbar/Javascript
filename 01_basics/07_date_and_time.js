// Dates 
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2023,3,18)
console.log(myCreatedDate.toLocaleString());

let myCreatedDate1 = new Date(2023,3,18,1,0)
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("Apr 18 2004")
console.log(myCreatedDate2.toLocaleString());

// let myTimeStamp =  Date.now()
// myTimeStamp.toLocaleString('default',{
//     weekday : "long",
// }
// );


