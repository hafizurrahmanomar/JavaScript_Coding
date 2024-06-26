// Arrays
const Names = ['Hafiz', 'Nyeem', 'Toha'];
console.log(Names);
const name = 'Hafiz'; // array check
console.log(Array.isArray(Names));
console.log(Array.isArray(name));

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

//Lastvalue removes
Names.pop();
console.log(Names);
//Index 
console.log(Names.indexOf("Toha"));
Names[3] = 'Joly';

console.log(Names);
Names.pop([3]);
console.log(Names);