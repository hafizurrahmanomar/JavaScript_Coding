//ES6

let a = 6;
let b = 8;

const sum = () => { return a + b };
console.log(sum());

const sum1 = () => a + b;
console.log(sum1());

let x = 6,
result = (y) => x+y;
console.log(result(10));

//ES6
const sum2 = (a, b, c) => a + b + c

console.log(sum2(20, 5, 10));

//ES6
const addition = (num1, num2, num3) =>
    (num1 + num2) * num3;
console.log(addition(10, 5, 8));