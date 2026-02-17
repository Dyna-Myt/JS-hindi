const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  // current context
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);   // in node environment this refers to empty object..

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);  // result => undefined coz we are inside a fn. works inside object
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {  // arrow function 
    let username = "hitesh"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {    // curly braces use kiya toh return keyword likho
//     return num1 + num2             // explicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2  // implicit return => without return keyword kaam hoga

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})   // object return 


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()