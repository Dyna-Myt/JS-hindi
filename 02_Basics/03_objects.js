// Two ways of declaring objects(Key-value pair) => literals, constructor

// Singleton
// object.create

// Object literals  

const mySys = Symbol("key1") // Using symbol as a key

const JsUser = {     // Object declaration
    "full name": "Raj Mishra",
    [mySys]: "mykey1",  // here we are using it --> remember the way of declaring
    name: "Raj",
    age: 21,
    location: "Mumbai",
    isLoggedIn: false,
}

// Object accessing methods

// console.log(JsUser.location)
// console.log(JsUser["location"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySys])  // Special case


JsUser.location = "ladakh"  // Changing value in objects
// console.log(JsUser["location"])

// Object.freeze(JsUser)  // Value locked in (no changes)
JsUser.location = "Manali" 
// console.log(JsUser)

// ************** FUNCTIONS ****************

JsUser.greeting = function(){
    console.log("Hello JS user");
}

// Refering name inside the object(JsUser)
// "this" => used for refering same objects
JsUser.greetingTwo = function(){ 
    console.log(`Hello JS user, ${this.age}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

