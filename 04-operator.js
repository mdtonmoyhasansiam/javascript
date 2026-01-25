/**
 * Three (3) types of Operators
 * 1. Arithmetic operator: Addition: + , Substitution: -, Multiplication: * , Division: / , Modulus operator: %
 * 2. Comparison operator: == (ইকুয়াল ইকুয়াল), === (ইকুয়াল ইকুয়াল ইকুয়াল), > (লেসদেন), < (গেটারদেন), >= (লেসদেন ইকুয়াল), <= (গেটারদেন ইকুয়াল), != (নট ইকুয়াল), !== (নট ইকুয়াল ইকুয়াল)
 * 3. Logical operator: && (ডাবল এন্ড), // (ডাবল ওর), ! (নট)
 */

// Arithmetic operator
// let bangla = 85;
// let english = 65;

// console.log(bangla + english);
// console.log(bangla - english);
// console.log(bangla * english);
// console.log((bangla / english).toFixed(2));
// console.log(13 % 2);

// Comparison operator  *******: always get boolean output অর্থাৎ আউটপুটে বুলিয়ান মানে true/false হিসেবে আউট দেখাবে।
let physics = 50;
let math = 50;
// == checks only value
// console.log(physics == math);

// === checks value and data type both
console.log(physics === math);

// > , < , >=, <=, !=, !==
let biology = 65;
let ict = 55;

console.log(biology > ict);
console.log(biology>=ict);
console.log(biology < ict);
console.log(biology <= ict);

console.log(biology != ict);
console.log(biology !== ict); // [!== checks value and data type both]

// Logical operator ****

// && operator [&& হচ্ছে সব কন্ডিশন সত্যি হতে হবে, যদি কন্ডিশন সত্যি হয় তাহলে আউটপুটে true দেখাবে। নাহয় কন্ডিশনে যদি যেকোনো একটা হলেও মিথ্যা হয় এবং বাকি সব সত্য হয় তাহলে আউটপুটে false দেখাবে।]
let isMatured = true;
let isInterested = true;
let isRich = false;

let isMarried = isMatured && isInterested && isRich;
console.log(isMarried); //(আউটপুটে false দেখাবে কারণ যেকোনো একটা কন্ডিশনে false পেয়েছে। যদি সব true হতো তাহলে আউটপুটে true দেখাতো।)

// || operator [|| ডাবল ওর হচ্ছে সব কন্ডিশন সত্যি না হলেও হবে, যেকোনো একটা কন্ডিশন যদি সেটিস্ফাইড বা সত্যি হয় তাহলে আউটপুটে true দেখাবে, বাকি সব সত্যি না হলেও চলবে। কিন্তু যদি সবগুলো কন্ডিশনই মিথ্যা হয় তাহলে আউটপুটে false দেখাবে।]
let isMatured = true;
let isInterested = false;
let isRich = false;

let isMarried = isMatured || isInterested || isRich;
console.log(isMarried); //(আউটপুটে isMatured true দেখাবে কারণ যেকোনো একটা true পেয়েছে।)

// ! operator [! (নট) এর কাজ হচ্ছে যেকোনো বুলিয়ান ভ্যালুকে রিভার্স করে উল্টিয়ে দেওয়া। যদি আগে কোন ভ্যালু true থাকে তাহলে আউটপুটে সেটা রিভার্স করে false দেখাবে।]
console.log(!isMatured); //(এখানে isMatured আগে true ছিলো কিন্তু console.log এ ! দেওয়ায় এখন আউটপুটে রিভার্স হয়ে false দেখাবে।)