
let userInput;
let userName = prompt('Enter your name');
// if-else condition***
if (userName == "Hafiz") {
    userInput = 'Ruppur';

} else {
    userInput = 'Pabna';

};
console.log(userInput);

//if,if else,else condition***


if (userName == "Hafiz") {
    userInput = 'Ruppur';


} else if (userName == "Omar") {
    userInput = 'Aminpur';

} else {
    userInput = 'Pabna';

};
console.log(userInput);

//Ternery Operator***
userInput = (userName == "Hafiz") ? ('Ruppur') : ('Pabna');
console.log(userInput);

//Ternary operator 
let number=15;
let color = number > 10 ? 'Blue' : 'Green';
console.log(color);
