// for loop

// for (let i = 0; i<5; i++){
//     console.log(`count, ${i}`);
// }

let food = ["Chiken Fry", "Frens Fry", "Fried Rice"]

// for (let i = 0; i<food.length; i++){
//     console.log(`${food[i]} khabooo`);
// }

// while loop

// let i = 0;
// while (i <= 10){
//     console.log(`Yes ${i}`);
//     i++;
// }

// let i = 0;
// while(i<food.length){
//     console.log(`${food[i]} khabooooooo`);
//     i++;
// }


// for of loop
// for (let foodie of food){
//     console.log(foodie, "Khabooo");
// }


// for in loop

let me = {
    name: "Siam",
    age: 10,
    address: "Dhaka"
}

for (let my in me){
    console.log(my, "->", me[my]);
}