//objects can be implemented by two ways 
//1) Literal way or 2) Constructor
// Object Literal 

const mySym = Symbol("mykey1")

const Jsuser = {
    name:"Divyang",
    "full name" : "Divyang Chhantbar", 
    [mySym]: "mykey1", // its a correct way to declare a symbol ,  fixed syntx it is!
    age: 18,
    location: "Jaipur",
    email: "divyang@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
console.log(Jsuser["email"]);
Jsuser.email = "divyangchhantbar@meta.com"
Object.freeze(Jsuser)
Jsuser.email = "divyangchhantbar@microsoft.com"
console.log(Jsuser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

//this method is called string interpolation
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this/* this is used when we have to give reference to the same object */.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());