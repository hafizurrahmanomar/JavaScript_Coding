// string  -> a sequences of characters
// string concatenation -> adding multiple strings

let Name = "Md Hafizur Rahman";
let name2 = "Hello,I 'am Hafizur Rahman ";
let name3 = "Hello,I 'am Hafizur Rahman";
let age = 34;
//old method
// adding multiple strings here
let address = ("Name: " + Name + " and age: " + age + ", Village:Ruppur");

//Backtick or template string

address = (`Name: ${Name} and age: ${age}  Village:Ruppur`);
console.log(address);

//Backtick or template string
const hello = `Name:${name2} and age:${age}`;
console.log(hello);

