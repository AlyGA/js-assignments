// Case 1
let heightMark = 1.69;
let weightMark = 78;

let heightJohn = 1.95;
let weightJohn = 92;

let bmiJohn = weightJohn / heightJohn ** 2;
let bmiMark = weightMark / heightMark ** 2;

let markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBMI);

// Case 2
heightMark = 1.88;
weightMark = 95;

heightJohn = 1.76;
weightJohn = 85;

bmiJohn = weightJohn / heightJohn ** 2;
bmiMark = weightMark / heightMark ** 2;


markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn, markHigherBMI);