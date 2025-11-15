const savedEmail = "admin@gmail.com";
const savedPassword = '12345';

let userEmail = prompt('Enter Your Email');
let userPassword = prompt('Enter Your Password');

alert(userEmail == savedEmail && userPassword == savedPassword ? "Login Successful" : 'Invalid Credentials' );