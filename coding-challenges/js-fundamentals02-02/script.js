'use strict';

// Function that makes the tip 15% if the bill is between 50 and 300
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

//Bonus Section

// Another option is to do [tips[0] + bills[0], ..., ...]
const total = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[0], calcTip(bills[2]) + bills[2]];

console.log(total);