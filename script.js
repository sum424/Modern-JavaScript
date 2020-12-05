var firstName = 'Suman';
var lastName = 'Thapa';

var fullName = firstName  +' ' + lastName;
console.log(fullName);
//for character
console.log(fullName.length, firstName.length, lastName.length);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
let index = fullName.indexOf('a');
console.log(index);

let result = fullName.slice(0, 4);
console.log(result);


let antimResult = fullName.replace('S', 'k');
console.log(antimResult);/*
console.log(finalResult);
console.log(result); */

let naam = 'chinnaswamimuttusamiarusamivengopaliyer'
let finalResult = naam.substr(6, 17);
console.log(finalResult);


