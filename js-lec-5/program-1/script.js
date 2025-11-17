let balanced = 10000 ;

const pin = 2008;

let enterPin = prompt('\t \t \t \t \t \t \t \t \t \t Enter Your ATM Pin \t \t \t \t \t \t \t \t \t \t');

if ( pin == enterPin ){
    prompt(
        "Welcome to JS ATM 💳\n\n" +
  "1️⃣ Check Balance\n" +
  "2️⃣ Withdraw\n" +
  "3️⃣ Deposit\n" +
  "4️⃣ Exit\n\n" +
  "Enter your choice (1-4):"
    )
} else{
    alert('Invalid Pin. Please try again.');
}
    



// let choice = prompt(
//   "Welcome to JS ATM 💳\n\n" +
//   "1️⃣ Check Balance\n" +
//   "2️⃣ Withdraw\n" +
//   "3️⃣ Deposit\n" +
//   "4️⃣ Exit\n\n" +
//   "Enter your choice (1-4):"
// );