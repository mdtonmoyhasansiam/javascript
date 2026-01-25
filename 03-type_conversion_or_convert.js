// Converted String to Number
let age = "25";
let age2 = Number(age); // way 1
let age2 = parseInt(age); // way 2
console.log(age2);

let gpa = "4.64";
let gpa2 = parseFloat (gpa) // Number দশমিক সংখ্যা থাকায় parseFloat ইউস করে string কে number এ কনভার্ট করা হয়েছে।
console.log(gpa2);

let floatSum = 0.1 + 0.2;
console.log(floatSum.toFixed(1/2/3..)); //[মাঝেমধ্যে কিছু দশমিক সংখ্যা আউটপুটে দশমিকের পর অনেকগুলো হয়ে থাকে, সেক্ষেত্রে console এ যদি .toFixed দিয়ে দেওয়া হয় তাহলে আউটপুটে দশমিকের পর ফিক্সড করে নাম্বার দেওয়া হবে, যেমন- যদি toFixed (2) এভাবে দেওয়া হয় তাহলে আউটপুটে দশমিকের পর দুটি সংখ্যা দেখাবে, ব্র্যাকেটে যতগুলো নাম্বার ফিক্সড করতে বলা হবে আউটপুটে ঠিক ততগুলোই দেখাবে দশমিকের পর। সহজ ভাষায় toFixed দিয়ে লিমিট করে দেওয়া হয়।]

// Converted Number to String
let roll = 30;
let roll2 = String (roll); //way 1
console.log(roll2);