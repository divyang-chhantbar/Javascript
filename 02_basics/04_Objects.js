// just two ways of impenting objects ...
// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

// Objects can get nested multiple times and internally ...
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Divyang",
            lastname: "Chhantbar"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2 } 
//const obj3 = Object.assign({}, obj1, obj2, obj4) // it will join both objects

const obj3 = {...obj1, ...obj2 , ...obj4} // it will have the output as above and it is the best practise to follow ... 
 //console.log(obj3);

 const users = [
    {
        id: 1,
        email: "div@gmail.com"
    },
    {
        id: 2,
        email: "meet@gmail.com"
    },
    {
        id: 3,
        email: "divyang@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//(course.courseInstructor); 

//const {courseInstructor} = course

const {courseInstructor : Instructor} = course
//destructuring concept
// it will gonna give the same result but what it will do extraordinary 
// 1) we can change the variable name
// 2) Its a way to quickly get specific pieces of information from an object and store them in variables for easy access and use in your code.
console.log(Instructor);