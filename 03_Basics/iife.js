// Immediately Invoked Function Expressions (IIFE)
// global scope ke pollution ko hatane ke liye iife use kiya!


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();   // semi-colon is used to end the iife

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')