// Array Method: includes, isArray, indexOf, reverse, join

//*****Array Includes [অর্থাৎ আমরা কোন একটা ভ্যালু খুজতেছি এবং আমরা দেখার চেষ্টা করবো যেই ভ্যালু খুজতেছি সেটা Array লিস্টে আছে কি না। যদি থাকে তাহলে বুলিয়ান ভাষায় জানাবে হয়তো true নাহয় false.]
let numbers = [12, 15, 50, 60, 70];
let sigarate = ["Banson", "Hollywood", "Goldlief", "Advanced"];

console.log(numbers.includes(50)); // এখানে numbers ভেরিয়েবলের মান ৫০ খোঁজা হচ্ছে এবং আউটপুটে true আসছে। কারণ ৫০ Array লিস্টে ভ্যালু হিসেবে আছে।
console.log(sigarate.includes("Biri")); //এখানে sigarate ভেরিয়েবলের মান হিসেবে Biri খোঁজা হচ্ছে এবং আউটপুটে false দেখাচ্ছে। কারণ Array লিস্টে Biri নেই।

//*****Array Indexof() [অর্থাৎ এখানে ভ্যালুর মান দিয়ে ইন্ডেক্সের নাম্বার খোঁজা হয়।]
let numbers = [12, 15, 50, 60, 70];
let sigarate = ["Banson", "Hollywood", "Goldlief", "Advanced"];

numbers.indexOf(15); //এখানে ভ্যালুর মান ১৫ দিয়ে খোঁজা হচ্ছে এটি কত নাম্বার ইন্ডেক্স, এবং আউটপুটে দেখাচ্ছে ০১ নাম্বার ইন্ডেক্সের মান ১৫।
sigarate.indexOf("Biri"); //এখানে ভ্যালুর মান Biri দিয়ে খোঁজা হচ্ছে এটি কত নাম্বার ইন্ডেক্স, এবং ভ্যালুর মানে এই মানটি পাওয়া যায়নি দেখে আউটপুটে দেখাচ্ছে -১। কারণ ইন্ডেক্সের মান ০ দিয়ে শুরু হয়, -১ অর্থ Array তে এই ভ্যালুটি নেই।

//*****Array isArray() [অর্থাৎ ভেরিয়েবলটি Array কিনা সেটা যাচাই করা হয়। এবং উত্তরটি বুলিয়ান পদ্ধতিতে দেওয়া হয়, হয়তো true নাহয় false]

let numbers = [12, 15, 50, 60, 70];
let sigarate = [];
let name = "Banani, Dhaka";

console.log(Array.isArray(numbers)); // এখানে চেক করার জন্য Array.isArray ইউস করা হয়েছে এবং ব্র্যাকেটে যে ভেরিয়েবল চেক করা হয়েছে সেটির নাম দেওয়া হয়েছে। এবং আউটপুটে true এসেছে অর্থাৎ numbers ভেরিয়েবলটি Array. 

console.log(Array.isArray(sigarate)); // এখানে চেক করার জন্য Array.isArray ইউস করা হয়েছে এবং ব্র্যাকেটে যে ভেরিয়েবল চেক করা হয়েছে সেটির নাম দেওয়া হয়েছে। এবং আউটপুটে true এসেছে অর্থাৎ sigarate ভেরিয়েবলটি Array কারণ ভ্যালু না থাকলেও Array এর সিস্টেম অর্থাৎ থার্ড ব্রাকেট দেওয়া আছে তাই true.

console.log(Array.isArray(name)); // এখানে চেক করার জন্য Array.isArray ইউস করা হয়েছে এবং ব্র্যাকেটে যে ভেরিয়েবল চেক করা হয়েছে সেটির নাম দেওয়া হয়েছে। এবং আউটপুটে false এসেছে অর্থাৎ name ভেরিয়েবলটি Array না কারণ ভ্যালু থাকলেও Array এর সিস্টেম অর্থাৎ থার্ড ব্রাকেট দেওয়া নেই তাই false.

//*****// Array Reverse [অর্থাৎ ভ্যালু বা উপাদানগুলো রিভার্স বা উল্টিয়ে দেওয়াই হলো reverse]

//*** Reverse করার Real Example-
console.log(variable name.reverse()); // এখন আউটপুটে ভ্যালুগুলো রিভার্স হয়ে যাবে।



//***** Join: to convert a string [অর্থাৎ Array কে string এ কনভার্ট করার জন্য join ব্যবহার হয়।] 
//***** Note: এই সেকশনটি বুঝতে প্রব্লেম হলে PH-Conceptual Sessions এ গিয়ে Mileston 03: JavaScript Basics (Array, Object, Loop, String) থেকে Part-04 নাম্বার ভিডিও দেখতে হবে। অথবা YouTube থেকে শিখে এবং বুঝে নিতে হবে।


//*** Array কে join এর মাধ্যমে string এ কনভার্ট করার Real Example-
let str = Array Variable name.join("_");
console.log(str); // আউটপুটে string এ কনভার্ট হয়ে যাবে।