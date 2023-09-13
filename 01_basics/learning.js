// there are two types of datatypes 
// # Primitive and Non-Primitive 
// lets study about the primitive 
// All the primitie datatypes are of type call by value function
// 7 types of primitive : Strings,Number , boolean , null , undefined , symbol , BigInt

// Reference type (non-primitive) : these are the values in which refernce are given to the memory
// Array , Objects , Functions

/*There are two types of languages :
1) Statically  : data types are predefined and eg are c,c++,java
2) Dynamically : no need to define datatypes , eg are ruby , javascript and perl 
*/
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

/* there is a memory allocation in it in which there is a memory called 
Stacks (Primitive) and Heaps (Non-Primtive)  */
let myInstaId = "divakki07"
let myanotherId = myInstaId
myanotherId = "equriztz"
// here we will get different values as the values get stored in stack memory in which the copy
// of the values get passed ...
console.log(myInstaId);
console.log(myanotherId);

let user1 = {
   username : "Divyang Chhantbar",
   email : "divyangchhantbar@gmail.com" ,
   enrol : 221260107013
}
let user2 = user1
user2.enrol = 221260107050
// here we will get the same value as this is stored in heap memory and the whole reference is passed
console.log(user1.enrol);
console.log(user2.enrol);