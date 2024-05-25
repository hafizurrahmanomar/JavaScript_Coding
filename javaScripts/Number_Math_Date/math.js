
//Math কন্সট্যান্ট(ধ্রুবক):-জাভাস্ক্রিপ্টে ৮ টি গানিতিক ধ্রুবক রয়েছে যাদেরকে Math অবজেক্ট দ্বারা এক্সেস করা যায়।
console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);
 //-----Math অবজেক্ট----Math এর কোনো কন্সট্রাক্টর(constructor) নেই।

 //Math.min() সর্বনিম্ন ভ্যালু রিটার্ন করে।
 console.log(Math.min(1,-1, 5, 7, 9.4, 90, 34, 24, 12, 54, 100,-5,-6.5));
//Math.max() সর্বোচ্চ ভ্যালু রিটার্ন করে।
 console.log(Math.max(1, -1, 5, 7, 9.4, 90, 34, 24, 12, 54, 100, -5, -6.5));
 //Math.random() ০ এবং ১ এর মধ্যে একটি এলোমেলো নম্বর রিটার্ন করে।
 //Note:Math.random() সর্বদা ১ এর চেয়ে ছোট নম্বর রিটার্ন করে।

 console.log(Math.random());
 console.log(Math.random() * 10);
 console.log(Math.floor(Math.random() * 10));
 console.log(Math.random()*10);

 console.log (parseInt((Math.random() * 10)));
 
//Math.round() নিকটবর্তী পূর্ণ নম্বরে পরিনত করে।

console.log(Math.round(3.4));
console.log(Math.round(3.5));
console.log(Math.round(3.9));
console.log(Math.round(3.49));
console.log(Math.round(0.4));
console.log(Math.round(0.6));

//Math.ceil() নম্বরকে উপরের নিকটবর্তী পূর্ণ নম্বরে পরিনত করে।
console.log(Math.ceil(6.3));
console.log(Math.ceil(6.4));
console.log(Math.ceil(6.8));
console.log(Math.ceil(0.8));
console.log(Math.ceil(0.1));
//Math.floor() প্রদত্ত নম্বরের নিচে নিকটবর্তী পূর্ণ নম্বরে পরিনত করে।
console.log(Math.floor(2.8));
console.log(Math.floor(2.3));
console.log(Math.floor(0.8));
//Number Valueএর নিশ্চিত মান রিটার্ন করে।
 console.log(Math.abs(-15));

 //2 কে 5 এর পাওয়ার ধরে 5 এর মান রিটার্ন করে।

console.log(Math.pow(5, 2));
//Value এর বর্গমূল রিটার্ন করে।
 console.log(Math.sqrt(16));
 