// getting the input from user as string
//let text = prompt("Enter your name : ");
let text = "Md hafizur rahman";
console.log("Your name : " + text);

//finding the length of a string
let len = text.length;
console.log("Number of characters : " + len);

// finding the character at a specific position
console.log(text.charAt(3));

// converting the string
const myString = "hello JavaScript";
console.log(myString);
console.log(myString.length);
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.split(""));
console.log(myString.substring(0, 5).toUpperCase());
console.log(myString.split(" "));

// concatenation function
let text1 = "Hafiz ";
let text2 = "Rahman";
let text3 = text1.concat(text2);
console.log(text3);

// slice function
let text4 = "Bangladesh";
let result = text4.slice(0, 2);
console.log(result);

let myText = "Hello javaScript Programer ";
let product = "Mobile,Laptop, Car ,Bike";

//JavaScript string Methods Cheat Sheet

//charAt()
console.log(myText.charAt(6));

//concat()
console.log(myText.concat(product));

//replace
console.log(myText.replace("javaScript", "python"));

//search
console.log(myText.search("JavaScript"));
//lenth
console.log(myText.length);

//toUpperCase()
console.log(myText.toUpperCase());

//toLowerCase()
console.log(myText.toLowerCase());

//split()
console.log(myText.split(" "));
console.log(myText.split(""));
console.log(product.split(","));

//substring(strat,end)
console.log(myText.substring(0, 5));
console.log(myText.substring(5, 12).toUpperCase());
console.log(myText.substring(5, 12).toLowerCase());

//substr(strat,length)
console.log(myText.substr(8, 15));

//trim()
let str = " Trim both side  ;     ";
console.log(str.trim());

//toString
let number1 = 24;
console.log(number1.toString());
console.log(typeof number1);

//includes()
let myName = "Md.Hafizur rahman";
console.log(myName.includes("rahman"));

//charCodeAt()
let s = "test";
console.log(s.charCodeAt(0));
