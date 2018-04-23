/* Earlier to ES6 we use var keyword to store any value 
    but that if we what to specify if the value 
    will mutate in future or it will be same throughout.
    
    This problem is solved by let and const, we no more use var in ES6 code.
*/

var employeeName = 'Alex';
var salary = 56000;
var age = 23;

// name is not going to change anytime so can't we write it with const.
// salary is something which will vary with time so it's better to write with let.
// same goes with age, mark this be let.
const name = 'Alex';
let empSalary = 56000;
let empAge = 23;



