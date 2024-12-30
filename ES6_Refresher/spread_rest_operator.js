// Spread operator

let num1 = [1,2,3,4];
let num2 = [5,6,7,8];

let arr=[...num1];
console.log(arr);
let arr1 =[...num1,num2];
console.log(arr1);
let arr2=[...num1, ...num2];
console.log(arr2);

let car ={
    Brand:'BMW',
    Color:'White',

};

let bmw = {...car, price: '$50000'};
console.log(bmw);


// Rest Operator

let num = (param) =>console.log(param);
num(1,2,3,4);
let num3 = (...param) =>console.log(param);

num3(1,2,3,4)

