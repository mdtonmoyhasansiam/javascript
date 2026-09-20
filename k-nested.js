// Object

let me = {
    name: "Md. Tonmoy Hasan Siam",
    religion: "Islam",
    address: "Dhaka"
}

// method or read terminal

// console.log(me["name"]);

// let output = me["religion"];
// console.log(output);


// delete or add or modify

// delete me.address;
// me["address"] = "Gulshan"
// me.address = "Bangladesh"

// console.log(me["address"]);

// object convert array and find out element
// let convertArray = Object.entries(me);
// console.log(convertArray[2]);

// Array convert object and find out key and values

let students = [
    {
        name: "Adib",
        id: 101
    },
    {
        name: "Ani",
        id: 202
    },
    {
        name: "Jackson",
        id: 303
    }
]

console.log(students[0]["name"]);
console.log(students[1].id);

let jackson = students[2]["name"];
// students[2].name = "Michel";
console.log(jackson);
