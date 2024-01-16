let value
let num1 = 9;
let num2 = 7;
// =========== Arithmetic operator : +, -, *, / , %, ++, --, ** (exponentiation)================
value = num1+ num2;//Addition;
console.log(value);
value = num1 + num2 * 3;// Addition & Multiplication
console.log(value);
// Addition & Multiplication
value = (num1 + num2) * 3;
console.log(value);
//Subtraction
value = num1 - num2;
console.log(value);
//Multiplication
value = num1 * num2;
console.log(value);
//Exponentiation;the same result as Math.pow(num1,2)
value = num1 **2;
console.log(value);
//Division
value = num1 / num2;
console.log(value);
//Modulus(Remainder);
value = num1 % num2;
console.log(value);

//Increment(++)
//Prefix Increment
console.log(++num1);
console.log(++num1);
console.log(++num1);
// Postfix Increment
console.log(num1++);
console.log(num1++);
console.log(num1++);
console.log(num1);
//Decrement(--)
// Prefix Decrement
console.log(--num2);
// Postfix Decrement
console.log(num2--);
console.log(num2--);
console.log(num2--);
console.log(num2);

//  ==================Assignment operator : =, +=, -=, *=, /=, %==================

let a =10;
let b =5;
a+=b;//a=a+b;
console.log(a);
a-=b;//a=a-b;
console.log(a);
a*=b;//a=a*b;
console.log(a);
a/=b;//a=a/b;
console.log(a);
a %= b; //a=a%b;
console.log(a);

//number+string
let add_01 = ('10' + 2 + 3);
console.log(add_01);
let add_02 = (2 + 3 + '10');
console.log(add_02);
//String+string
let add_03 = ('12' + '10');
console.log(typeof add_03);
console.log(add_03);

//unary(-) Explain
let num = -3;
console.log(num);
console.log(typeof num);

//unary(+) Explain
let number1 = "";
console.log(typeof number1);
let num3 = +"";
console.log(typeof num3);
let num4 = +'19'; //type cuting of number
let num5 = -'11';
let result = num4 + num5;
console.log(result);
console.log(typeof result);
//boolean to number
let num6 = +true;
console.log(num6);
console.log(typeof num6);
let num7 = +false;
console.log(num7);