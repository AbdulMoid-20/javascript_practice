let a = prompt('Enter First Number');
a = Number(a);

let operator = prompt('Enter Operator : + , - , * , / , %');

let b = prompt('Enter Second Number');
b = Number(b);

let result = 
    operator === '+' ? a + b :
    operator === '-' ? a - b :
    operator === '*' ? a * b :
    operator === '/' ? a / b :
    operator === '%' ? a % b :
    "Invalid Operator!";

alert (result);
