let math = prompt('Enter Mark of Math');
math = Number(math);

let physics = prompt('Enter Mark of Physics');
physics = Number(physics);

let computerScience = prompt('Enter Mark of Computer Science');
computerScience = Number(computerScience);

let english = prompt('Enter Mark of English');
english = Number(english);

let chemistry = prompt('Enter Mark of Chemistry');
chemistry= Number(chemistry);

let totalMarks = math + physics + computerScience + english + chemistry;
let percentage = totalMarks / 500 * 100;  

alert('Total Marks: ' + totalMarks + '\nPercentage: ' + percentage + '%' + '\nAwarded Grade: ' +
    (percentage >= 90 ? 'A1' :
    percentage >= 80 ? 'A' :
    percentage >= 70 ? 'B' :
    percentage >= 60 ? 'C' :
    percentage >= 50 ? 'D' : 'Fail'));