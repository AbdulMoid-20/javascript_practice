let name = prompt("Enter your name:");

name= String(name);

let age = prompt("Enter your age:");

age = Number(age);

let isStudent = confirm ("Are you a student?");


isStudent = Boolean(isStudent);

let favNumber = prompt("Enter your favorite number:");

favNumber = Number(favNumber);

let nickname = prompt("Enter your nickname:");

nickname = String(nickname);

console.log("Name:", name, "Type:", typeof name);
console.log("Age:", age, "Type:", typeof age);
console.log("Is Student:", isStudent, "Type:", typeof isStudent);
console.log("Favorite Number:", favNumber, "Type:", typeof favNumber);
console.log("Nickname:", nickname, "Type:", typeof nickname);   