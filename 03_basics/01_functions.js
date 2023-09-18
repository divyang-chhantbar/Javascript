// Functions : makes our work easy when same things qare repeated or used multiple times 

// let add two numbers
// function AddNums (num1,num2) { // () parameters and inside values are the arguments
//     return num1+num2
// }
// let sum = AddNums(10,12)

// console.log("Sum is : ",sum);

// function SaymyName() {
//     console.log("hey i am Divyang");
// }
// SaymyName // reference 
// SaymyName() // execution

// function IsloggedIn(username){
//     if(!username) {
//         console.log("Please enter the username");
//     return
//     }
//     return `${username} is just logged in `
// }
// console.log(IsloggedIn());

// function calculateCartprice(...num){ // It is a rest operator 
//     //rest and spread operator are denoted by same symbols but the functions of both are different  
//     return num
// }
//console.log(calculateCartprice(1999,233,44,666));
//the values will be added in array 

// lets talk about using objects in functions
//  let user = {
//     username : "Divyang",
//     email : "divakki07@gmail.com",
//     phone_numb : 9929663120,
//     price : 88
//  }
 function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and my price is ${anyobject.price}`);
 }
//  handleObject(user)
// it is a another way to display the result upper is when you have declare the object and below is you are directly assigning values to function while calling of it .

// handleObject({
//     username : "div",
//     price : 88
// })

const myArr = [44,21,30,98]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArr));
console.log(returnSecondValue([200, 400, 500, 1000]));
