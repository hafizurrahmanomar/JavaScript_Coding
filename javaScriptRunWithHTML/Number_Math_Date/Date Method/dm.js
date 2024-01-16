//getTime() মেথড
//getTime() মেথডটি জানুয়ারী ১,১৯৭০ সন থেকে সময়কে মিলিসেকেন্ডে গণনা করে সংখ্যায় রিটার্ন করে।

let time = new Date();
time = time.getTime();
console.log(time);

//getFullYear() মেথড একটি তারিখের পুরো বছরকে রিটার্ন করে ।

console.log(new Date().getFullYear());

//getDay() মেথডটি সাপ্তাহিক দিনকে সংখ্যায় রিটার্ন করে।
//Note:জাভাস্ক্রিপ্টে সপ্তাহের প্রথম দিন 0 মানে "রবিবার"।
console.log(new Date().getDay());


//একটি অ্যারেতে সাপ্তাহিক দিনের নাম ব্যবহার করে getDay() মেথডের মাধ্যমে সাপ্তাহিক দিনকে নাম হিসেবে রিটার্ন করতে পারা যায়।
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log( days[new Date().getDay()]);
//setDate() মাসের দিন(1-31) নির্ধারন করে
let date = new Date();
console.log(date.setDate(20));
console.log(new Date(1629468566892));

//setFullYear() মেথড একটি ডেট অবজেক্টকে একটি বিশেষ তারিখে স্থাপন করে।
//Note:জাভাস্ক্রিপ্ট মাসগুলো ০ থেকে হিসাব করা হয়। যেমন ১০ বলতে নভেম্বর মাসকে বুঝায়
console.log(date.setFullYear(2021, 07, 20));
console.log(new Date(1629468503950));

//Date.parse() নির্দিষ্ট তারিখ এবং জানুয়ারী 1, 1970-এর মধ্যকার সময়কে মিলিসেকেন্ডে প্রকাশ করে
console.log(Date.parse("Aug 21 2021"));
console.log(new Date(1629482400000));
