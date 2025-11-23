// TAsk 1 Print numbers from 1 to 20.

// for (let index = 1; index <= 20; index++) {
//     console.log(index);   
// }




// Task 2 Print even numbers from 2 to 20.

// for (let index = 0; index <= 20 ; index++) {
//     if (index % 2 === 0 ) 
//     console.log(index);
// }




// Task 3 Print numbers from 10 to 1 (reverse).

// for (let index = 10; index > 0; index--) {
//     console.log(index);
    
// }




// Tak 4 Print the multiplication table of 7.

// for (let index = 1; index <= 10; index++) {

//     console.log("7 * " + index + " = " + index * 7);
// }




// Task 5 Print the sum of first 50 natural numbers.

// for (let index = 1; index <= 50; index++) {
//     let sum = index
//     console.log(sum + index);
    
// }




// Task 6 Star Pyramid

// let stars = "";
// for (let i = 1; i <= 5; i++) {
//   stars += "*";
//   console.log(stars);
// }

let busArrived = false;

while (busArrived) {
  console.log("⏳ Waiting for the bus...");
  // simulate bus arrival after some time
  busArrived = Math.random() > 0.7;
}

console.log("🚌 Bus has arrived!");