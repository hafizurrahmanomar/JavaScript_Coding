// conditional control statement -> if, else if, else, switch

// a program that will find a large number between 2 numbers
var num1 = parseInt(prompt("Enter first numebr : "));
var num2 = parseInt(prompt("Enter second numebr : "));

// first method using only if
if (num1 > num2) {
  console.log("Large Number is : " + num1);
}
if (num1 < num2) {
  console.log("Small Number is : " + num1);
}
if (num1 == num2) {
  console.log("Equal numbers");
}

// second method, more efficient than first method
let Num = 15;
let Num1 = 23;
if (Num > Num1) {
  console.log("Large Number is : " + Num);
} else if (Num < Num1) {
  console.log("Small Number is : " + Num);
} else if (Num == Num1) {
  console.log("Equal numbers");
}

// third method, more efficient than first and second method
let myNum =13;
let myNum1 =10;
if (myNum > myNum1) {
  console.log("Large Number is : " + myNum);
} else if (myNum < myNum1) {
  console.log("Large Number is : " + myNum1);
} else {
  console.log("Equal numbers");
}

//switch
const colorName = 'Black';
switch (colorName) {
    case ('Blue'):
        console.log('color is Blue');
        break;


    case ('Green'):
        console.log('color is Green');
        break;

    default:
        console.log('color is Red');
        break;
}