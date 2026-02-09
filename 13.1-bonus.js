

function justTest(num1, num2){
    console.log(num1, num2);
    console.log(arguments);
    console.log(arguments[3]);
}

const result = justTest(12, 25, 10, 58, 89);
console.log(result);