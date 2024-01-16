// Arrays
const arrayNames = new Array("Hafiz", "Nyeem", "Toha","Tohura");
console.log(arrayNames);
const Names = ['Hafiz', 'Nyeem', 'Toha'];
console.log(Names);
const nam = 'Hafiz'; // array check
console.log(Array.isArray(Names));
console.log(Array.isArray(nam));

//Index of value in
console.log(arrayNames[2]);
//array length
//Be care full array length declaration
console.log(arrayNames.length);//convention system
console.log(Names);
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

//first Value remove 
Names.shift();
console.log(Names);

//Last value removes
Names.pop();
console.log(Names);
//Index 
console.log(Names.indexOf("Toha"));
Names[3] = 'Joly';

let num =[10,20,39,78,56,06,78];
//Array reverse
console.log(num);
num =num.reverse()
console.log(num);
