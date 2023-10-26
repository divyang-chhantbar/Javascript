const friends = ["Divyang","Heet","Nisarg","Preet","Meet"]
// friends.forEach((item) => {
//     console.log(item);
// });

// friends.forEach( function (val) {
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }
// friends.forEach(printMe)

// console.log(friends);


// friends.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const coding = [
    {
        languagename : "javascript",
        languagefilename : "js"
    },
    {
        languagename : "JAVA",
        languagefilename : "java"
    },
    {
        languagename : "C++",
        languagefilename : "c"
    },
    {
        languagename : "Ruby",
        languagefilename : "rby"
    },
    {
        languagename : "Pearl",
        languagefilename : "plx"
    }
]
coding.forEach( (item) => {
    console.log(`My Coding language is ${item.languagename} whose filename is : ${item.languagefilename}`);
} )