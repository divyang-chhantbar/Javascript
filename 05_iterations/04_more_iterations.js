const myObject = {
    js : "Javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}
for (const key in myObject) {
    console.log(`${key} shortcut is for my ${myObject[key]}`);
}

for (const [key,value] of Object.entries(myObject)) {
    console.log(`${key} shortcut is for my ${value}`);
}

// they both will give the same answer

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}