//***** Loop হচ্ছে রিপিটেড কাজ বা বারবার যেই কাজগুলো হয় সেগুলো সহজ করে দেয়। 

//***** Loop কয়েকভাবেই লেখা যায়, এর সিনট্যাক্স অনেকগুলোই আছে। কিন্তু mos commonly হচ্ছে For loop অ্যান্ড while loope, এদুটি loop খুব বেশি ব্যবহার হয় এবং এদুটি loop এর বেজ করে অনেকগুলো loop তৈরি হয়েছে। কন্ডিশন যতবার সত্য বা true হবে ততবার চলবে। কন্ডিশনের জায়গায় যদি মিথ্যা বা false দেওয়া হয় তাহলে loop আর চলবে না। For আর while loop এক কিন্তু এদের লেখার ধরন আলাদা।

//***** Loop: for loop, while loop, do while loop*****
//***** Important keyword for loop: break, continue*****

//***** i=i+1 -> shortcut: i+=1 [এটা হচ্ছে কন্ডিশন variable update-increment/decrement এর শর্টকার্ট। অর্থাৎ বিয়োগ/গুণ/ভাগের ক্ষেত্রে- {i=i-1 (বিয়োগ), i-=1 (শর্টকার্ট)}, {i=i*1 (গুণ), i*=1 (শর্টকার্ট)}, {i=i/1 (ভাগ), i/=1 (শর্টকার্ট)}]

//*** For loop [For loop লেখার জন্য শুরুতে লিখতে হবে for () এবং ব্র্যাকেটে তিনটি জিনিস দিতে হবে যেমন- variable ডিক্লেয়ার; condition; varibale update-increment/decrement] Ex- for(variable; condition; update-increment/decrement){}

// Real Example
for (let i = 0; i < 50; i = i + 1) {
  console.log("Love you baba and ma"); // এখন আউটপুটে ৫০বার দেখায়ে ব্রেক হয়ে যাবে কারণ ভেরিয়েবল আপডেট দেওয়া হয়েছে ১ করে বারবে এবং শর্ত অনুযায়ী ৫০ এ গিয়ে থেমে যাবে।
}

//*** While loop [For loop এ আমরা যেভাবে ভিতরে একটা variable ডিক্লেয়ার করি, while loop এ ঠিক সেভাবে আমরা ভিতরে না করে বাইরে ডিক্লেয়ার করে, তারপর আমরা while (condition) লিখবো। তারপর সেকেন্ড ব্রাকেট দিয়ে variable update-increment/decrement এবং এক্সিকিউট করবো।] [First condition then execution]

//Ex-
// variable
// while(condition){
// variable update
// }

// Real Example
let i = 0;
while (i < 50) {
  console.log("Love you baba and ma"); //// এখন আউটপুটে ৫০বার দেখায়ে ব্রেক হয়ে যাবে কারণ ভেরিয়েবল আপডেট দেওয়া হয়েছে ১ করে বারবে এবং শর্ত অনুযায়ী ৫০ এ গিয়ে থেমে যাবে।
  i = i + 1;
}

//*** Do while loop (Optional) [Do while loop এটা অপশনাল, খুব বেশি ব্যবহার হয় না। তবে জেনে রাখা ভালো। এটা অনেকটা while loop এর মতো। যেমন- শুরুতে variable ডিক্লেয়ার করে, তারপর do {} এবং ব্র্যাকেটে এক্সিকিউট এবং variable update-increment/decrement করবো। তারপর ব্রাকেটের বাইরে while (condition)] (First execution then condition)

// Real Example
let i = 0;
do {
  console.log("Love you baba and ma");
  i = i + 1;
} while (5 > 100);


//*** Important keyword for loop: break, continue
//** break: break the loop
//** continue: just skip a single iteration

// Real Example (break)
for (let i = 0; i <= 50; i += 2) {
    if (i == 5) {
      break;
    //   continue;
    }
  console.log(i);
}

// Real Example (continue)
for (let i = 0; i <= 50; i += 2) {
    if (i == 5) {
    //   break;
      continue;
    }
  console.log(i);
}