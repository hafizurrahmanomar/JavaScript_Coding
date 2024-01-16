//typeof(variableName) or typeof variableName
// Mathmatical string to Number
let num = "24";
num = Number("24");
//num = Number(num);

console.log(num);
console.log(typeof num);

//text string to Number
let Num = "Md.Hafizur Rahman";
Num = Number("Md.Hafizur Rahman");
console.log(Num);
console.log(typeof Num);

//Number to string
let myNumber = 10;
//myNumber =String(10);
myNumber =(10).toString();
console.log(myNumber);
console.log(typeof myNumber);

//boolean to string
let bul = true;
bul =String(true);
console.log(bul);
console.log(typeof bul);

//boolean to Number
let _bul = false;
_bul =Number(false);
console.log(_bul);
console.log(typeof _bul);

let _Bul = true;
_Bul = Number(true);
console.log(_Bul);
console.log(typeof _Bul);

//Date function to string
let todayDate = (new Date()).toString();
console.log(todayDate);
console.log(typeof todayDate);

let TodayDate = String(new Date());
console.log(TodayDate);
console.log(typeof TodayDate);

//Array to string
let myArray = String(["January","February","March","April","May",19,23,24]);
console.log(myArray);
console.log(typeof myArray);


