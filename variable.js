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