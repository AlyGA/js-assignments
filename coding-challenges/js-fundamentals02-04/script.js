'use script';
// Array for bills and empty array for tips and totals.
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

// Add the values of the tip and total cost to the tip and totals array.
for (i = 0; i < bills.length; i++) {
    function calcTip(bill) {
        if (bill >= 50 && bill <= 300) {
            return bill * 0.15;
        } else {
            return bill * 0.20;
        }
    }

    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i]);
}

console.log(tips);
console.log(totals);

// Takes the average of all the numbers in the given array.

function calcAverage (arr) {
    let sum = 0;
    for (let i  = 0; i < arr.length; i++) {
         sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));