// let's study about the string
const myName = "Divyang"
const mySurname = "Chhantbar"
const myFullname = myName + mySurname
//traditional way
console.log(myFullname + " I live in Morbi" + " Pursuing computer science");
//modern way
console.log(`Hello my name is ${myFullname} and I live in Morbi right now pursuing computer science`);
console.log(myFullname.length);
console.log(myFullname.charAt(5));
console.log(myFullname.toUpperCase);
console.log(myFullname.indexOf('C'));
console.log(myFullname.substring(0,4));
console.log(myFullname.slice(-10,7));
console.log(myFullname.replace('Divyang' , 'Div')); 
