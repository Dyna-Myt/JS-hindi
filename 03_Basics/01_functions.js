function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("J");
}

// sayMyName   // Giving reference
sayMyName() // execution

// arguments => Things written inside () while calling it
// parameter => things written in() after making funtion defination

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);  // here doing console doesn't mean fn is returning the value
// }


function addTwoNumbers(num1, num2){
    return num1 + num2 
    console.log("Raj") // result ke baad kuch bhi print nhi hota
}
const result = addTwoNumbers(10, 5)
// console.log("Result:", result);


function loginUSerMessage(username){
    return `${username} just logged in`

}
// loginUSerMessage("Raj") // Here it returns value but we don't say to print anything
// console.log(loginUSerMessage("Raj"));

// console.log(loginUSerMessage()); // when no argument is given it prints undefined..


// To save your life we can use if-else 
function loginUSerMessage1(username = "ronny"){  // or we can simply pass a parameter here so it never give undefined
    if(username === undefined){
        console.log("Enter a value")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUSerMessage1());



// Multiple arguments passed with less parameter
function calculateCarPrice(val1, val2, ...num1){   // (...) => Rest operator
   // val1 and val2 takes first 2 values rest is gone to ...num1
    return num1
}

// console.log(calculateCarPrice(200,400,600, 500, 700)) // will give result in array


// Objects in function

const user = {
    username: "raj",
    price: 2000
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

// Obejcts in Array

function retrunSecondValue(getArray){
    return getArray[1]
}

const myNewArray = [200, 400, 600]
console.log(retrunSecondValue(myNewArray));
console.log(retrunSecondValue([2, 5, 8, 7])); // directly pass array as arguments
