// Immediately Invoked Function Expression
// It is the function that immediately runs and used because we get problems with global scope due to its pollution  and we need to remove it 

// one way 
// function chai()
// {
//     console.log(`Hello I am Divyang`);
// }
// chai()

//second way 
(function chai(){  // Named IIFE
    console.log(`Hey I am Div`);
})();

// another way using arrow function
((name)=>{  // Un-named IIFE
    console.log(`Hello Again ${name}!!!`);
})('Divyang')
