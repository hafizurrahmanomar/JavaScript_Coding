//result true or false

let x = 15;
let y = 10;
console.log(x==15);   //true;
console.log(x==10);   //false;  
console.log(x!=20);     //true;
console.log(x>y);       //false;
console.log(x<y);       //true;
console.log(x>=y);      //false;
console.log(x<=y);      //true;

console.log(x=="15");   //true;
console.log(x==="15");  //false; 
console.log(x!="15");   //false; 
console.log(x!=="15"); //true;

//Logical Operators
//result true or false
var a = 10;
var b=20;
//true &&true =true;
//false &&false =false;
//true &&false =false;
//false&&true =false;
console.log(a>20 && b<30);  //false ;
console.log(a<20 && b<30);  //true;
//true &&true =true;
//true &&false =true;
//false&&true =true;
//false &&false =false;
console.log(a>20 || b<20);  //false;
console.log(a>20 || b<30);  //true;
// !true=false
//!false =true
var result = !true;
console.log(result);
var result01 = !"something";
console.log(typeof result01);
console.log(result01);

//Conditional/Ternary Operator;
// Syntax:variablename = condition ? value1 : value2; 
const number=10;
const color = number > 5 ? "Blue" : "Green";
console.log(color);