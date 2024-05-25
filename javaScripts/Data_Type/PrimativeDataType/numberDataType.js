//Number Data Type

let string,value,number1,number2
string ="16";
number1 = 14;
number2= 17.8567788
console.log(Number(string));
console.log(parseFloat(number1));
console.log(parseInt(number2));
console.log(string+number1);
console.log(16+number1);
console.log(number2.toFixed(2));
// total number of characters including the decimal point
console.log(number2.toPrecision(1));
console.log(number2.toPrecision(2));
let mul = "abc" * 10;
console.log(mul);
console.log(typeof mul);
let mul_01 = "10" * 10;
console.log(mul_01);
console.log(typeof mul_01);
console.log(number1/0);
console.log(Number(true));
console.log(Number(false));
//Hexadecimal  must be before used 0x;
let hex = 0X454;
// octal must be before used 0;
let oct = 0745;
console.log(oct);
console.log(hex);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

