'use strict';

const populations = [1441000000, 311000000, 38000000, 212600000];
let percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    let percentageOfWorld = populations => {
        const percentage = (populations / 7900000000) * 100;
        return percentage.toFixed(1) + '%';
    }

    percentages2.push(percentageOfWorld(populations[i]));
}

console.log(percentages2);