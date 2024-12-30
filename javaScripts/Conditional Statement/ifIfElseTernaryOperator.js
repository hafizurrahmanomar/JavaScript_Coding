
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