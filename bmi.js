// input from terminal

const weight = process.argv[2];
const height = process.argv[3];
// console.log(weight, height);

function calcuBmi (weight, height){
    const bmi = weight/(height*height)
    return bmi;
}

const bmi = calcuBmi (weight, height);

if (bmi>20 || bmi>=30){
    console.log("Fit");
}

else if (bmi>15){
    console.log("Overright");
}

else{
    console.log("Improvment");
}

console.log(bmi);




