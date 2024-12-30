// Arrays
const arrayNames = new Array("Hafiz", "Nyeem", "Toha","Tohura");
console.log(arrayNames);
const Names = ['Hafiz', 'Nyeem', 'Toha'];
console.log(Names);
const name = 'Hafiz'; // array check
console.log(Array.isArray(Names));
console.log(Array.isArray(name));

//Index of value in
console.log(arrayNames[2]);
//array length
//Be care full array length decalaration
console.log(arrayNames.length);//convantion system
console.log(Names["length"]);
//Index Value add 
Names[3] = 8
console.log(Names);

//Index Value add 
Names[3] = "Tohura"
console.log(Names);

// First index value add
Names.unshift('Tasnim');
console.log(Names);

//Last index Value add
Names.push('Sojib');
console.log(Names);

//first Value remve 
Names.shift();
console.log(Names);

//Last value removes
Names.pop();
console.log(Names);
//Index 
console.log(Names.indexOf("Toha"));
Names[3] = 'Joly';

console.log(Names);
Names.pop([3]);
console.log(Names);

let num =[10,20,39,78,56,06,78];
//Array reverse
console.log(num);
num =num.reverse()
console.log(num);
//splice value
console.log(num);
num = num.splice(1,2);
console.log(num);

let villageName = ["Ruppur","Aminpur","Chorpara","Khasenathpur","masumdia"];
console.log(villageName);
//array sort
villageName = villageName.sort();
console.log(villageName);
//array number sort
let numbers = [13,4,3,41,15,61,17,8,19,100];

numbers = numbers.sort(function(a,b){
    return a-b;
});
console.log(numbers);

//reverse sort
numbers = numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers);

//splice method

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr);
// data add to array
 arr.splice(10,0,12,13);//10=idex number,0=data delet number, 12,13=data add
console.log(arr);
// data delet to array
arr.splice(5,3);
console.log(arr);
// data delet to array and data add
arr.splice(5,3,100);
console.log(arr);

//after index all data delet
arr.splice(2);
console.log(arr);

