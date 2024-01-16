//জাভাস্ক্রিপ্ট ISO ডেট;
//ISO 8601 এর সিন্টেক্স (YYYY-MM-DD) জাভাস্ক্রিপ্ট Date ফরমেটে ব্যবহার হয়ে থাকে;তারিখ ও সময় প্রদর্শনের জন্য ISO 8601 হলো আন্তর্জাতিক স্ট্যান্ডার্ড।
//Note:সকল সংক্ষিপ্ত এবং ISO Date ফরমেটে মাসকে দিনের আগে লেখা হয়।

console.log(new Date("2021-11-27"));

//দিন(YYYY-MM),মাস ও দিন(YYYY) উল্লেখ না করেও ইহা লিখা যায়;নির্ণিত তারিখ  টাইম জোনের উপর নির্ভরশীল হবে।

console.log(new Date("2021-11"));
console.log(new Date("2021"));

//জাভাস্ক্রিপ্ট সংক্ষিপ্ত তারিখ("MM/DD/YYYY")
console.log(new Date("08/20/2021"));

//বিশদ তারিখ(Long Date) বেশিরভাগ সময় "MMM DD YYYY" একটি সিন্টেক্সে লেখা হয়,

console.log(new Date("Aug-20-2021"));
console.log(new Date("Aug/20/2021"));
console.log(new Date("Aug 20 2021"));

//জাভাস্ক্রিপ্ট তারিখ " DD MMM YYY" সিন্টেক্সে 
console.log(new Date("22 Aug 2021"));
console.log(new Date("22,Aug,2021"));
console.log(new Date("23 /Aug /2021"));
console.log(new Date("24-Aug-2021"));
console.log(new Date("25-August-2021"));