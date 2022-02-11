// Case 1
let heightMark = 1.69;
let weightMark = 78;

let heightJohn = 1.95;
let weightJohn = 92;

let bmiJohn = weightJohn / heightJohn ** 2;
let bmiMark = weightMark / heightMark ** 2;

let markHigherBMI = bmiMark > bmiJohn;

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark.toFixed(1)}) is higher than John's BMI (${bmiJohn.toFixed(1)}).`);
} else {
    console.log(`Mark's BMI (${bmiMark.toFixed(1)}) is lower than John's BMI (${bmiJohn.toFixed(1)}).`)
}