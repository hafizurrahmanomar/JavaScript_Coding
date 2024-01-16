//toString() মেথড নম্বরকে স্ট্রিং আকারে রিটার্ন করে।
let num = 297;
let num1 =num.toString();
console.log(num);
console.log(typeof num);
console.log(num1);
console.log(typeof num1);
console.log((26 +12).toString() );

//toExponential() মেথড স্ট্রিং আকারে একটি সংখ্যাকে পূর্ণ নম্বরে পরিনত করে এবং একে বীজগানিতিক নোটেশন আকারে লিখে রিটার্ন করে।

//দশমিক নম্বরের পরে কয়টি ক্যারেক্টার থাকবে একটি প্যারামিটার নম্বরের মাধ্যমে নির্দিষ্ট করে দেওয়া যায়।

let mynum = 5.907
console.log (mynum.toExponential());
console.log (mynum.toExponential(2));
console.log (mynum.toExponential(4));
console.log (mynum.toExponential(6));
console.log (typeof mynum.toExponential(6));

//toFixed() মেথড একটি সংখ্যাকে নির্দিষ্ট সংখ্যক দশমিক নম্বরে লিখে একটি স্ট্রিং রিটার্ন করে ।
//টাকার বিষয় নিয়ে কাজ করার জন্য, toFixed (2) উপযুক্ত।
let x = 3.765;
console.log(x.toFixed());
console.log(x.toFixed(1));
console.log(x.toFixed(2));
console.log(x.toFixed(4));
console.log(x.toFixed(6));
console.log(typeof x.toFixed(6));

//toPrecision() মেথড একটি নির্দিষ্ট দৈর্ঘ্যের সংখ্যাকে স্ট্রিং আকারে রিটার্ন করে।

console.log(x.toPrecision());
console.log(x.toPrecision(1));
console.log(x.toPrecision(2));
console.log(x.toPrecision(3));
console.log(x.toPrecision(5));
console.log(typeof x.toPrecision(5));

//valueOf() মেথড একটি নম্বরকে নম্বর হিসেবে রিটার্ন করে। কোডে ইহা ব্যবহারের প্রয়োজন নেই।
//NOTE:সকল জাভাস্ক্রিপ্ট ডাটা টাইপের একটি valueOf() এবং একটি toString() মেথড আছে।
let c = 297;
console.log(c.valueOf());
console.log((120).valueOf());
console.log((c +26).valueOf());
console.log((10 +26).valueOf());
console.log(typeof(10 +26).valueOf());

//ভ্যারিয়েবলকে নম্বরে রুপান্তর:-ভ্যারিয়েবলকে নম্বরে রুপান্তর করার জন্য ৩ ধরনের জাভাস্ক্রিপ্ট মেথড ব্যবহার করা হয়।

// Number()	:-আর্গুমেন্টকে রুপান্তর করে একটি নম্বর রিটার্ন করে।
//parseFloat():-	আর্গুমেন্ট পার্স করে এবং দশমিকযুক্ত নম্বর রিটার্ন করে ।
//parseInt():-	আর্গুমেন্ট পার্স করে এবং পূর্ণ নম্বর রিটার্ন করে ।

//NOTE: সকল নাম্বার মেথড একটি নতুন ভ্যালু রিটার্ন করে। কিন্তু অরিজিনাল ভ্যালুকে পরিবর্তন করে না।

//---Number() মেথড---

 console.log(Number(true));
  console.log(Number(false));
  console.log(+("13"));
  console.log(-("13"));
  console.log(typeof-("13"));
  console.log(Number("  13 "));
 console.log(Number("13 5"));
 //Note:Date() মেথড Number() মেথডে ব্যবহার করলে ১.১.১৯৭০ সাল থেকে মিলিসেকেন্ডকে নম্বরে রিটার্ন করে।
 console.log(Number(new Date()));

 //---parseInt() মেথড------

 //parseInt() মেথড একটি স্ট্রিংকে পার্স করে এবং একটি সম্পূর্ণ নম্বর রিটার্ন করে। এক্ষেত্রে স্পেস দেওয়া যায়। স্পেস দিলে শুধুমাত্র প্রথম নম্বরকেই রিটার্ন করে।যদি নম্বরে পরিবর্তিত না হয়, তাহলে NaN(Not a Number) রিটার্ন করবে।

 console.log(parseInt('12'));
 console.log(parseInt('12.78'));
 console.log(parseInt('17 78'));
 console.log(parseInt('34 javascript'));
 console.log(parseInt('javascript 34'))
 ;
 
 //---parseFloat() মেথড---
console.log(parseFloat(' 23 '));
console.log(parseFloat(' 23.57 '));
console.log(parseFloat(' 23 23.7 '));
console.log(parseFloat("javascript23  "));
console.log(parseFloat('23.4javascript 23  '));
