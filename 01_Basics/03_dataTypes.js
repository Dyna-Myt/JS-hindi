// Primitive 
// 7 Types: String, bool, symbol, BigInt, Number, null, undefined




// Reference (Non-primitive)
// Array, Objects, Functions 

const hero = ["Almight", "Redroit", "deku"];

let myObj = {
    name: "raj",
    age: 21
}

const myFuntion = function(){  // returntype => funtion
    // console.log("Hello world");
}


console.log(typeof myFuntion); // findout returntypes!!


// ***************************************

// Stack (Primitive) => gives you value,  
// Heap (Non-primitive) => gives reference, if changes done, happens in original content.

let myYoutubename = "rajdotcom"

let anothername = myYoutubename  // it gives you a copy => stack
anothername = "chaiaurcode"

// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@upi"
}

let userTwo = userOne 
// it gives you reference, any changes make, happens in real one!

userTwo.email = "raj@germany.com"

console.log(userOne.email);  // here you can see
console.log(userTwo.email);