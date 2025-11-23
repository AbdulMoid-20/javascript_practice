// BY Value

let num1 = 10;
let num2 = num1;

num2 = 20;

console.log(num2);
console.log(num1);

// by value it copies actual value


// BY Reference

let book = {name : 'No name'} ;
let book2 = book ;

book2.name = 'Abdul Moid';

console.log(book2);
console.log(book);

// by reference it copies the reference of the value