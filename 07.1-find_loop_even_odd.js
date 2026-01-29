//***** Note: এই সেকশনটি বুঝতে প্রব্লেম হলে PH-Conceptual Sessions এ গিয়ে Mileston 03: JavaScript Basics (Array, Object, Loop, String) থেকে Part-03 নাম্বার ভিডিও দেখতে হবে। অথবা YouTube থেকে শিখে এবং বুঝে নিতে হবে।

// even= jor songkha 0 , 2, 4, 6, 8, 10 ....
// odd = bijor songkha 1, 3, 5, 7, 9, 11 ....

// find 1 - 10 even number

// even number condition: i % 2 == 0
// odd number condition: i % 2 == 1

for (let i = 1; i <= 10; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// console.log(52 % 2 == 0);