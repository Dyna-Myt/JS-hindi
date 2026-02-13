// Objects declaring => Constructor

// const tinderUser = new Object()  // Singelton object
const tinderUser = {}     // Non-singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Ronny"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

// Object inside Object (Nested object)
const regularUser = {
    email: "some@email.com",
    fullname: {
        userfullname: {
            firstname: "Raj",
            lastname: "Mishra"
        }
    }
}
// Accessing using dot(.) method
// console.log(regularUser.fullname.userfullname.firstname);


// Combining Objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}

// const obj3 = {obj1, obj2} // don't use this one 
// const obj3 = Object.assign({}, obj1, obj2, obj4) // syntax (target=>{}, source=>obj1,...)

const obj3 = {...obj1, ...obj2}  // Spread operator => glass tod do!!
console.log(obj3);

const users = [   // Objects inside array
    {
        id: 1,
        email: "r@email.com"
    },
    {
        id: 2,
        email: "r@email.com"
    },
    {
        id: 3,
        email: "r@email.com"
    },


] 

// console.log(users[1].email);
  
// Array Methods

console.log(Object.keys(tinderUser));  // Return type Array
console.log(Object.values(tinderUser));  // Return type Array
console.log(Object.entries(tinderUser)); 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // return type bool