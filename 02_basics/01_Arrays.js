// Arrays
 const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr.length);
// const myHeros = ["ironman", "batman"]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// // Array methods

// console.log(`${myArr.pop()}  my array will be ${myArr}`);
// myArr.push(7)
// myArr.pop() 

// myArr.unshift(9) // (it will shift 9v to pos arr[0])
// myArr.shift() // it is used to remove the element from pos arr[0]

//  console.log(myArr.includes(9)); 
// //  it will tell whether the array includes that number or not
// console.log(myArr.indexOf(3));

//  const newArr = myArr.join()

//  console.log(myArr); // type is array
//   console.log( newArr); // string banadega


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("Cjs ", myArr);
console.log(myn2);