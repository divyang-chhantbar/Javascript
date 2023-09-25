// here we will study abou different loop and Maps in js 

// let greeting = "Hey Divyang !"
// for (const greet of greeting) {
//     console.log(greet);
// }

// let greetings =["Hey","Divyang","Heet"]
// for (const greets  of greetings) {
//     console.log(greets);
// } 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] /* due to this qarrqay get destructure */ of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }