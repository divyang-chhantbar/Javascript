// const user = {
//     username : "Divyang",
//     email : "div@gmail.com",
//     welcomeMessage(){
//         console.log(`${this.username} , Welcome to Github`);
//         console.log(this);
//     }
//     }
// user.welcomeMessage()
// user.username = "Div"
// user.welcomeMessage()
// console.log(this);
// here in the node and other engines it will give us an empty object but in the console of any other browsers 

// const chai = function () {
//     username : "camerawalebhaiya"
//     console.log(this.username);
// }
// chai()

// ^ value we will get is undefined as this is not the correct way to write this in a function

// const chai = () => {
//     username : "camerawalebhaiya"
//     console.log(this);
// }
// chai()

// using arrow the answer will probably the same 

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()