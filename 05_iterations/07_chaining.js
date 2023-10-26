// In chaining we will see that we can add more than one functions to the operations for eg : you can add 2 times map or can also add filter to it . 
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
let mynums = myNumbers.map((num) => num*10) 
                      .map((num) => num+1) 
                      .filter((num) => num >= 40)
console.log(mynums);

// lets talk about reduce 
// syntax : array.reduce((accumulator,current value) => accumulator + current value , initial value =0 )

const shoppingCart = [
    {
        course_name : "js course",
        price : 2999
} ,
{
    course_name : "mobile course",
    price : 12999
},
{
    course_name : "devops course",
    price : 5999
},
{
    course_name : "py course",
    price : 2999
}
]
// traditional and more readable way to express the function

// const pricetopay = shoppingCart.reduce (function(acc,currval){
//     return acc+currval
// },0) 

// using arrow function
const pricetopay = shoppingCart.reduce((acc,currval)=>acc+currval,0)