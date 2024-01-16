
//Logical Operators: &&(and),||(or),!(not)
//result true or false
let a = 10;
let b=20;
//true &&true =true;
//false &&false =false;
//true &&false =false;
//false&&true =false;
console.log(a>20 && b<30);  //false ;
console.log(a<20 && b<30);  //true;
//true ||true =true;
//true ||false =true;
//false||true =true;
//false ||false =false;

console.log(10>20 || 30<20);  //false;
console.log(30>20 || 30<30);  //true;
// !true=false
//!false =true
//!"something"=false
var result = !true;
console.log(result);
console.log(!false);
var result01 = !"something";
console.log(typeof result01);
console.log(result01);