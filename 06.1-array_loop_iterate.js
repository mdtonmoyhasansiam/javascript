//***** Array তে loop ব্যবহার করার নিয়ম।
//***** Note: এই সেকশনটি বুঝতে প্রব্লেম হলে PH-Conceptual Sessions এ গিয়ে Mileston 03: JavaScript Basics (Array, Object, Loop, String) থেকে Part-04 নাম্বার ভিডিও দেখতে হবে। অথবা YouTube থেকে শিখে এবং বুঝে নিতে হবে।

let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// Using traditional for loop [Array তে loop ব্যবহার করার জন্য এই লুপটি ট্র্যাডিশনাল লুপ এবং বর্তমানে এটি কম ব্যবহার হয়।]
for (let i = 0; i < array.length; i += 1) {
  console.log(array[i]);
}

// For of loop [Array তে loop ব্যবহার করার জন্য for of loop এই লুপটি বানানো হয়েছে এবং এটি বেশি ব্যবহার হয়।]
for (let number of array) {
  console.log(number);
}