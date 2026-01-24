// ***********************Types of Variables***********************
// Variable= Vary + able

// Need 5 thing to declare a variable
// Keyword->Name [any one]-> = -> Value [any one]-> ; [It's optional but should be given]
//     Example: var weight = 38 ;

// যেকোনো ভেরিয়েবলের মানের সাথে ভেরিয়েবলের নাম বুঝা যায় এবং এটি কোন ভেরিয়েবল সেটিও জানা যায়। সেক্ষেত্রে 'console.log(typesof ভেরিয়েবলের নাম)', অতঃপর টার্মিনাল থেকে দেখা যাবে ভেরিয়েবলের মান এবং এটি কোন ভেরিয়েবল।



// 01. Numeric/Number Variable [এই ভেরিয়েবলে শুধুমাত্র সংখ্যা দিয়ে ডিক্লেয়ার করতে হয়]
var price = 312100;
price = 100;
var age = 22;
var limit = 10;
console.log(limit);
console.log(typeof price); 
// [এখানে typeof দিয়ে বোঝানো হয়েছে এটি কোন ভেরিয়েবল সেটি জানার জন্য। আউটপুটে ভেরিয়েবলের মানের সাথে ভেরিয়েবলের নামও চলে আসবে।]

// 02. String Variable [এই ভেরিয়েবলের মান একাধিক বা যেকোনো হতে পারে। যেহেতু মান একাধিক হতে পারে সেহেতু মান অবশ্যই ডাবল কোটেশনের মধ্যে বসাতে হবে। অন্যথায় আউটপুটে error আসবে।]
var name = "Jackson";
var address = "CA, USA";
var gender = "Male";
console.log(name);
console.log(typeof address);
// [এখানে typeof দিয়ে বোঝানো হয়েছে এটি কোন ভেরিয়েবল সেটি জানার জন্য। আউটপুটে ভেরিয়েবলের মানের সাথে ভেরিয়েবলের নামও চলে আসবে।]

// 03. Boolean Variable [এই ভেরিয়েবলের মান সর্বোচ্চ দুইটি যেমন- true or false. এই ভেরিয়েবলে স্পেসিফিকভাবে সত্য-মিথ্যা/হ্যাঁ-না প্রকাশ পায়। যেহেতু সর্বোচ্চ দুটি মান সেহেতু এখানে মানগুলো কোন কোটেশনের মধ্যে রাখা যাবে না। নরমাল রাখতে হবে।]
var isrich = true;
var fail = false;
var passed = true;
console.log(isrich);
console.log (typeof fail);
// [এখানে typeof দিয়ে বোঝানো হয়েছে এটি কোন ভেরিয়েবল সেটি জানার জন্য। আউটপুটে ভেরিয়েবলের মানের সাথে ভেরিয়েবলের নামও চলে আসবে।]

// **********Important Points**********

// 01. No keyword in variable name beacuse they reserved keyword JavaScript

var false = 45; ❌
var var = 50; ❌

// 02. No space or gap in variable name

var is happy = false; ❌
var ishappy = true; ✅

// 03. No quote

var "addess" = "banani gulshan" ❌
var address = "banani gulshan" ✅

// 04. Can not start with a number. But number other than the first  letter is allowed

var money = 45; ✅
var money2 = 55; ✅
var 3money = 88; ❌

// 05. Name is case sensitive

address ✅
Address ❌
ADDRESS ❌
addRess ❌
ADDress ❌

// 06. How to write a long variable name

var my current home address = "Gulshan banani"; ❌
var mycurrenthomeaddress = "Gulshan banani"; ✅
var my_current_home_address = "Gulshan banani"; ✅ //Snake Case
var myCurrentHomeAddress = "Gulshan banani"; ✅ // Camel Case
var MyCurrentHomeAddress = "Gulshan banani"; ✅ // Pascal Case

// ************String বা কোটেশনের মধ্যে যদি কোন সংখ্যা দেওয়া হয় তখন সেটা সাধারনত আউটপুটে error আসতে পারে অথবা ভেরিয়েবলের নাম দেখার সময় string দেখাতে পারে আউটপুটে। কিন্তু string বা কোটেশনের মধ্যে থাকা সংখ্যাকে Intiger বা পূর্ণসংখ্যায় রুপান্তর করার জন্য কোটেশনের আগে parseInt এই শব্দটি দিতে হবে। তাহলে ইন্টিজার বা পূর্ণসংখ্যা হিসেবে আউটপুট আসবে এবং সঠিক ভেরিয়েবলের নাম জানা যাবে। চলুন আমরা উদাহরণ দেখে আসি-*****************

var price = "55"; ❌ //[এভাবে দিলে error আসবে কারণ string এর মধ্যে পূর্ণসংখ্যা বা নাম্বার দেওয়া হয়েছে। কিন্তু সিস্টেম এটিকে string হিসেবেই ধরে নিয়েছে।]
console.log(price);
console.log(typeof price); //[এভাবে ভেরিয়েবলের নাম হিসেবে সিস্টেম string হিসেবেই উল্লেখ করবে।]

//*******কিন্ত চলুন কোটেশনের মধ্যে পূর্ণসংখ্যা হিসেবে বা Intiger হিসেবে আউটপুট দেখে আসি-*******

var price = parseInt ("55"); ✅ //[এখন সিস্টেম এটিকে string হিসেবে না ধরে number বা Intiger হিসেবেই আউটপুট হিসেবে পূর্ণসংখ্যা দেখাবে কারণ এখানে parseInt ব্যবহার করা হয়েছে।]
console.log(price); 
console.log(typeof price); //[এবং ভেরিয়েবলের নাম হিসেবে সঠিক নামটি দেখাবে আউটপুটে।]

//**************String বা কোটেশনের মধ্যে যদি কোন দশমিক সংখ্যা দেওয়া হয় তখন সেটা সাধারনত আউটপুটে error আসতে পারে অথবা ভেরিয়েবলের নাম দেখার সময় string দেখাতে পারে আউটপুটে। কিন্তু string বা কোটেশনের মধ্যে থাকা সংখ্যাকে Intiger বা দশমিক সংখ্যায় রুপান্তর করার জন্য কোটেশনের আগে parseFloat এই শব্দটি দিতে হবে। তাহলে ইন্টিজার বা দশমিক সংখ্যা হিসেবে আউটপুট আসবে এবং সঠিক ভেরিয়েবলের নাম জানা যাবে। চলুন আমরা উদাহরণ দেখে আসি-**************

var price = "55.5"; ❌ //[এভাবে দিলে error আসবে কারণ string এর মধ্যে দশমিক সংখ্যা বা নাম্বার দেওয়া হয়েছে। কিন্তু সিস্টেম এটিকে string হিসেবেই ধরে নিয়েছে।]
console.log(price);
console.log(typeof price); //[এভাবে ভেরিয়েবলের নাম হিসেবে সিস্টেম string হিসেবেই উল্লেখ করবে।]

// *******কিন্ত চলুন কোটেশনের মধ্যে পূর্ণসংখ্যা হিসেবে বা Intiger হিসেবে আউটপুট দেখে আসি-*******

var price = parseFloat ("55.5"); ✅ //[এখন সিস্টেম এটিকে string হিসেবে না ধরে number বা Intiger হিসেবেই আউটপুট হিসেবে দশমিক সংখ্যা দেখাবে কারণ এখানে parseFloat ব্যবহার করা হয়েছে।]
console.log(price);
console.log (typeof price); //[এবং ভেরিয়েবলের নাম হিসেবে সঠিক নামটি দেখাবে আউটপুটে।]

// **********JavaScript-এ যোগ, বিয়োগ, গুণ, ভাগ এবং ভাগশেষ পাওয়ার জন্য কয়েকটি অপারেশন করা হয়। যেমন- ADDITION OPERATION [যোগ], SUBTRACTION OPERATION [বিয়োগ], MULTIPLICATION OPERATION [গুণ], DIVISION OPERATION [ভাগ], MODULUS OPERATOR [ভাগশেষ]**********

// এবং এইসব অপেরাশন করার জন্য প্রয়োজন হয় তিনটি জিনিসের যেমন- Oparator, Operands এবং Result. Example: X + Y = Z; [অর্থাৎ এখানে X এবং Y হচ্ছে Operands, + হচ্ছে Operator এবং Z হচ্ছে Result]

// *****ADDITION OPERATION*****
var onionPrice=20;
var eggPrice=10;
var totaPrice= onionPrice + eggPrice;

console.log(totalPrice);
// output: 30

// *****SUBTRACTION OPERATION*****
var onionPrice=20;
var eggPrice=10;
var totalPrice= onionPrice - eggPrice;

console.log(totalPrice);
// output: 10

// *****MULTIPLICATION OPERATION*****
var onionPrice= 20;
var eggPrice=10;
var totalPrice= onionPrice * eggPrice;

console.log(totalPrice);
// output: 200

// *****DIVISION OPERATION*****
var onionPrice= 20;
var eggPrice=10;
var totalPrice= onionPrice / eggPrice;

console.log(totalPrice);
// output: 2

// *****MODULUS OPERATION*****
var num1= 5;
var num2 = 2;
var result = num1 % num2;

console.log(result);
// output: 1

**Just test**

var name= Mia;
console.log(name);