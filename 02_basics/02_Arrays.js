const marvel_heros = ["ironman","spiderman","thor"]
const dc_heros = ["batman ","superman","joker"]

marvel_heros.push(dc_heros) // returns the existing array with the another array
console.log(marvel_heros);
const Allheros = marvel_heros.concat(dc_heros) // This creates a new array and merge both .
console.log(Allheros);

//spread operator zyada use krte he practise me compared to above vala
const all_new_heroes = [...marvel_heros,...dc_heros] 
console.log(all_new_heroes);

const myArray = [1,2,3 , [4,5,6,], ["Hello My Name is Divyang "]]
console.log(myArray);
const myRealArray = myArray.flat(Infinity)
console.log(myRealArray);
console.log(Array.isArray("Array"));
console.log(Array.from("Array"));
console.log(Array.from({name : "Divyang"}));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));