//***** Store more than one value in a variable using Array (Array symble: []) [Array 0 based index]

const numbers = [12, 15, 50, 60, 70]; // Number Array
const sigarate = ["Banson", "Hollywood", "Goldlief", "Advanced"]; // String Array
const failed = [true, false, true, true]; // Boollean Array
const mixedArray = ["Derby", true, 21, 0.1]; // mixedArry

console.log(mixedArray); // Array Output

//***** Array length [অর্থাৎ Array তে কতগুলো উপাদান আছে বা কতটি এলিমেন্ট আছে সেগুলোর মোট কাউন্টকে Array length বলা হয়।]
let numbers = [12, 15, 50, 60, 70]; 
let sigarate = ["Banson", "Hollywood", "Goldlief", "Advanced"]; 
let failed = [true, false, true, true]; 
let mixedArray = ["Derby", true, 21, 0.1]; 

console.log(mixedArray.length); // এখানে .length দিয়ে স্পেসিফিক ভেরিয়েবলে কতগুলো উপাদান রয়েছে সেগুলোর মোট এলিমেন্ট বা কাউন্ট বের করা যাবে আউটপুটে।

//***** Array Index [সাধারণত বিভিন্ন উপাদান বা কোন কিছু আমরা সিরিয়ালি ১, ২, ৩,.... এভাবে কাউন্ট করি। কিন্তু Programming Language-এ Array Index এ ০ থেকে শুরু হয় অর্থাৎ উপাদানগুলোর সিরিয়াল হয় ০, ১, ২, ৩,.... এভাবে। এবং যদি বলা হয় অমুক ভেরিয়েবলের এত নাম্বার ইন্ডেক্সের মান বা ভ্যালু কত, তখন ০ থেকে শুরু হয়ে চাহিদানুযায়ী নাম্বারের ভ্যালু যা হবে তাই বলতে হবে, ফিডব্যাক হবে।]

let numbers = [12, 15, 50, 60, 70]; // এখানে উপাদানগুলোর মান ইন্ডেক্স অনুসারে ০ থেকে শুরু হবে, যেমন- ০ ইন্ডিক্সের মান ১২, ১ ইন্ডেক্সের মান ১৫......, এবং ইন্ডেক্স ৪ এর মান ৭০
let sigarate = ["Banson", "Hollywood", "Goldlief", "Advanced"]; //এখানে উপাদানগুলোর মান ইন্ডেক্স অনুসারে ০ থেকে শুরু হবে, যেমন- ০ ইন্ডিক্সের মান Banson, ১ ইন্ডেক্সের মান Hollywood......, এবং ইন্ডেক্স ৩ এর মান Advanced 
let failed = [true, false, true, true]; // ঐ
let mixedArray = ["Derby", true, 21, 0.1]; // ঐ

//*** Array Index এর মান কয়েকভাবে বের করা যায়। যেমন-

console.log(numbers[2]); //Way 1 [এখানে থার্ড ব্র্যাকেটে যেই মান দেওয়া হবে সেটাই ইন্ডেক্সের মান এবং এই মান অনুসারে উপাদান বা এলিমেন্ট থেকে আউটপুটে সেই ভ্যালুটি বের করার চেষ্টা করবে।]

const three = numbers[4]; //Way 2 [এখানে ২৯ এবং ৩০ নাম্বারের রো হচ্ছে দুই নাম্বার ওয়ে। অর্থাৎ এখানে একটি ভেরিয়েবল ডিক্লেয়ার করে, তারপর ভ্যালুতে পুর্বের ভেরিয়েবলের নাম দিয়ে ইন্ডেক্সের মান বসানো হয়েছে। এবং তার পরের লাইনে console.log দিয়ে ইন্ডের মান বের করার চেষ্টা করা হয়েছে।]
console.log(three);

//***** Set or Update element value by index [অর্থাৎ ইন্ডেক্সের মাধ্যমে বা ইন্ডেক্স ব্যবহার করে কীভাবে ভ্যারিয়েবলের উপাদান/এলিমেন্ট/ভ্যালুর মান পরিবর্তন করা যায়।]
let numbers = [12, 15, 50, 60, 70];
let sigarate = ["Banson", "Hollywood", "Goldlief", "Advanced"];

numbers[2] = 999; // এখানে numbers ভেরিয়েবলের ২নাম্বার ইন্ডেক্সের মান ৫০ থেকে চেঞ্জ করে ৯৯৯ করার চেষ্টা করা হচ্ছে।
console.log(numbers); //এখানে আউটপুট দেখাচ্ছে যে ৫০ চেঞ্জ হয়ে ৯৯৯ হয়ে গিয়েছে।

sigarate[2] = "Oris";
console.log(sigarate);

//***** Add/remove elements from arrays using push, pop shift & unshift [অর্থাৎ Array মান বা ভ্যালু থেকে নতুন ভ্যালু যোগ করা বা বাদ/বিয়োগ করা।] [দুইভাবে যোগ করা যায়, সামনে থেকে এবং পেছন থেকে, ঠিক তেমনই  দুইভাবে বিয়োগ করা যায়।]

//*** Add elements
let numbers = [12, 15, 50, 60, 70];
let sigarate = ["Banson", "Hollywood", "Goldlief", "Advanced"];

numbers.push(195); // এখানে push মানে পেছন থেকে যোগ করা। অর্থাৎ numbers ভেরিয়েবলের মানের শেষ থেকে ১৯৫ যোগ হবে।
console.log(numbers); // এখানে আউটপুটে দেখাচ্ছে নতুন করে ভেরিয়েবলের শেষের মান ৭০ এর পর নতুন করে ১৯৫ যোগ হয়েছে।

sigarate.unshift("Mond"); //এখানে unshift মানে সামনে থেকে যোগ করা। অর্থাৎ sigarate ভেরিয়েবলের মানের প্রথম থেকে Mond যোগ হবে।
console.log(sigarate); // এখানে আউটপুটে দেখাচ্ছে নতুন করে ভেরিয়েবলের শুরুর মান Banson এর আগে নতুন করে Mond যোগ হয়েছে।

//*** Remove elements
let numbers = [12, 15, 50, 60, 70];
let sigarate = ["Banson", "Hollywood", "Goldlief", "Advanced"];

numbers.pop(); // এখানে pop মানে পেছন থেকে বিয়োগ করা। অর্থাৎ numbers ভেরিয়েবলের শেষ মান ৭০ বিয়োগ হবে।
console.log(numbers); //এখানে আউটপুটে দেখাচ্ছে ভেরিয়েবলের শেষ মান ৭০ বিয়োগ হয়েছে।

sigarate.shift(); //এখানে shift মানে হচ্ছে সামনে থেকে বিয়োগ করা। অর্থাৎ sigarate ভেরিয়েবলের মানের প্রথম থেকে Banson ভ্যালুটি বিয়োগ হবে।
console.log(sigarate); // এখানে আউটপুটে দেখাচ্ছে ভেরিয়েবলের প্রথম মান Banson বিয়োগ হয়েছে।