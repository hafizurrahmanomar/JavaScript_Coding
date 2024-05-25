//Date অবজেক্ট  বছর, মাস,দিন,ঘন্টা, মিনিট,সেকেন্ড এবং মিলিসেকেন্ড নিয়ে কাজ করতে সাহায্য করে।
//Note: জাভাস্ক্রিপ্ট মাসকে ০ থেকে ১১ পর্যন্ত গণনা করে। জানুয়ারীকে ০ ধরে এবং ডিসেম্বরকে ১১ ধরে।
//Note: This
console.log(Date());

//Date অবজেক্ট new Date() কনস্ট্রাক্টরের সাহায্যে তৈরি করা হয়।
console.log(new Date());
// new Date(dateString);
console.log(new Date("December 30,1986"));
// new Date(year, month, day
console.log(new Date(2021,08,18))
// new Date(year, month
console.log(new Date(2021, 08 ));
// new Date(year, month, day, hours, minutes, seconds, milliseconds);
console.log(new Date(2021, 08, 18, 12,30,7,99));
//জাভাস্ক্রিপ্টে ০১ জানুয়ারী ১৯৭০ ০০ঃ০০ঃ০০ UTC থেকে তারিখকে মিলিসেকেন্ডে গণনা করা হয়। একদিনে ৮৬,৪০০,০০ মিলিসেকেন্ড হয়।
console.log(new Date(86400000));

//Note:এইচটিএমএলে যখন Date অবজেক্ট প্রদর্শন করা হয়,ইহা স্বয়ংক্রিয়ভাবে toString() মেথডের সাহায্যে একটি স্ট্রিং-এ রুপান্তরিত হয়।

let time = new Date();
console.log(time.toString());
//toUTCString () মেথড একটি ইউটিসি স্ট্রিং-এর তারিখকে (তারিখের স্টান্ডার্ড ডিসপ্লে অনুযায়ী )GMT(Greenwich Mean Time) তে রুপান্তর করে।
console.log(time.toUTCString());

//Date অবজেক্ট স্থির। কম্পিউটারের সময় পরিবর্তিত হয়,কিন্তু Date অবজেক্ট একবার তৈরি হলে আর পরিবর্তিত হয় না।

console.log(time.toDateString());

//Note: যখন টাইম জোন উল্লেখ করা ছাড়াই তারিখ সেট করা হয়, জাভাস্ক্রিপ্ট সেক্ষেত্রে ব্রাউজারের টাইম জোন ব্যবহার করবে।তারিখ/সময় BST(Bangladesh standard time) এ রূপান্তরিত হবে যদি ইউজার বাংলাদেশ থেকে ব্যবহার করে।