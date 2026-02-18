// for loop

for (let i = 0; i < 10; i++) {    // use shortcut clr+D for multi cursor / duplicate
    const element = i;
    if (element == 7){
        // console.log("7 is best number");
        
    }
    // console.log(element);
    
}

for (let i = 2; i <=10; i++) {
    console.log(`Outer loop value: ${i}`);
    

    for (let j = 1; j <=10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop ${i}`);
        console.log(i + '*' + j + ' = ' + i*j);
        
        
    }
    
}

let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}