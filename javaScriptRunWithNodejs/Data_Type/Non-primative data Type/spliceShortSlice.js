//splice value
let num =[1,2,3,4,5,6,7];
console.log(num);
num.splice(1,2);
console.log(num);
let num1 =[1,2,3,4,5];
num1.splice(1,3,10);
console.log(num1);

//splice method

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr);
// data add to array
 arr.splice(10,0,12,13);//10=idex number,0=data delete number, 12,13=data add
console.log(arr);
// data delete to array
arr.splice(5,3);
console.log(arr);
// data delete to array and data add
arr.splice(5,3,100);
console.log(arr);

//after index all data delete
arr.splice(2);
console.log(arr);



//total array convert to string by toString method
let num2 =[1,2,3,4,5];
console.log(num2.toString());

//total array convert to string by join method
let num3 =[1,2,3,4,5];
console.log(num3.join("*"));

//slice => condition(startIndex,endIndexNumber(optional))

console.log(num3.slice(1,4))

let villageName = ["Ruppur","Aminpur","Chorpara","Khasenathpur","masumdia"];
console.log(villageName);
//array sort
villageName = villageName.sort();
console.log(villageName);
//array number sort
let numbers = [1,2,3,10,12,5];

// numbers = numbers.sort(function(a,b){
//     return a-b;
// });

numbers = numbers.sort((a,b)=>{
  return a,b
})

console.log(numbers);
console.log(numbers);

//reverse sort
// numbers = numbers.sort(function (a, b) {
//   return b - a;
// });

numbers = numbers.sort((a,b)=> a>b?-1:1)

console.log(numbers);
// every
let numberList = [1,2,3,5,8,10];
let num_1 = numberList.every((item)=>item>4);
// some
let numberList1 = [2,3,4,5,10];
let num_2 = numberList1.some((item)=>item>4);
console.log(num_2);