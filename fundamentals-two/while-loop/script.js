'use strict';

const populations = [1441000000, 311000000, 38000000, 212600000];
let percentages2 = [];
let percentages3 = [];

// The for loop would be the better choice. Not only do we already know how many times we want to loop to iterate, but we also have an array with a fixed amount of items.
for (let i = 0; i < populations.length; i++) {
    let percentageOfWorld = populations => {
        const percentage = (populations / 7900000000) * 100;
        return percentage.toFixed(1) + '%';
    }

    percentages2.push(percentageOfWorld(populations[i]));
}

console.log(percentages2);

console.log(`---PERCENTAGES 3---`);

let list = 0;
while (list < populations.length) {
    let percentageOfWorld = populations => {
        const percentage = (populations / 7900000000) * 100;
        return percentage.toFixed(1) + '%';
    }

    percentages3.push(percentageOfWorld(populations[list]));
    list++;
}
console.log(percentages3);