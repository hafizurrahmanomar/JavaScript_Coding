

//ইন্টিজারগুলো ১৫ সংখ্যা পর্যন্ত নির্ভুল বিবেচনা করে।

  let num1= 999999999999999;   
  console.log(num1);   
  //result : 999999999999999
  let num2= 999999999999999999; 
  console.log(num2);
  // result : 10000000000000000
 



//দশমিক সংখ্যার বীজগনিত সব সময় ১০০% সঠিক নাও হতে পারে।

  var a = 0.2 + 0.1;
  console.log(a);
  //result: 0.2 + 0.1 = 0.30000000000000004


//সঠিক নাম্বার পেতে হলে ১০ দিয়ে গুণ কর এবং ১০ দিয়ে  ভাগ করতে হবে।

 let  b = (0.3 * 10 + 0.1 * 10) / 10;
 console.log(b);
 //result = 0.4,


//আমরা toString() মেথড ব্যবহার করে নম্বরগুলোকে ১৬ ভিত্তিক (হেক্স), ৮ ভিত্তিক(অক্টাল), অথবা ২ ভিত্তিক(বাইনারি) হিসেবে আউটপুট নিতে পারি।

let number = 112;
//Decimal
console.log(number.toString(10));
//Octal
console.log(number.toString(8));
//Hexadecimal
console.log(number.toString(16));
//Bainary
console.log(number.toString(2));
 
//০(শূণ্য) দ্বারা Number ভাগ করলে ইনফিনিটি মান প্রদর্শন করবে :
let result =7/0;
console.log(result);

//ইনফিনিটি হচ্ছে একটি সংখ্যা।
console.log( typeof result)
//result:number,

//সংখ্যা ছাড়া বীজগনিত করার চেষ্টা করলে ফলাফল NaN((Not a Number)) আসবে।

console.log(20/"hello");
console.log("hello"/20);

//একটি সংখ্যা ,সাংখ্যিক স্ট্রিং দ্বারা বিভক্ত হয়ে একটি সংখ্যা হয়ঃ
console.log("10"/20);
console.log(10/"20");

//একটি গাণিতিক অপারেশন মধ্যে NaN ব্যবহার করা হলে, ফলাফল এ NaN হবে।
var nan = NaN;
var x = 10;
var resul = nan + 10;
console.log(resul);
console.log(isNaN (resul));
//NaN একটি নম্বর এবং typeof NaN নম্বর রিটার্ণ করে।
console.log( typeof resul);

//একটি গাণিতিক সংখ্যার  স্ট্রিং/ স্ট্রিং সাথে NaN যোগ করার ফলে এটি কনকাটিনেশন হতে পারে।

console.log('javascript' +NaN);
console.log('10' +NaN);

 //new Number keyword ব্যবহার করে Number অবজেক্ট করা হয়।
 //new কি-ওয়ার্ড কোডকে জটিল করে তোলে।এটি এক্সিকিউশন স্পিড ধীরগতির করে দেয়।

 let n = 124;
 let n1 = new Number(124);
 console.log(typeof n);
 console.log(typeof n1);

//  যখন == (equality) অপারেটর ব্যবহার করা হয়, তখন নম্বরগুলো সমান দেখায়  কিন্তু যখন === equality অপারেটর ব্যবহার করা হয়,তখন equal নম্বরগুলো সমান নয়, কারন === অপারেটর ধরন এবং মান দুইটাই সমান প্রকাশ করে।জাভাস্ক্রিপ্ট অবজেক্ট তুলনাযোগ্য নয়।

console.log(n==n1);
console.log(n===n1);


