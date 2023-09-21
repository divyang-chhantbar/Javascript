// lets talk about scope 
// scope divided into two type global and block 
//const c= 450 
let a = 330 // this variable is globally declared
if(true){
    let a  = 33
    const b = 222
     var d = 69
    //  console.log(`This is inner a : ${a}`);
} //  this is a block code
// console.log(a);

function one(){
    const username = "divyang"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}
// it will give the answer 6 but below no answer would come as you are calling the value before declaring .

addTwo(5)
const addTwo = function(num){
    return num + 2
}
