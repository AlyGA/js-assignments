'use strict';

const populations = [1441000000, 311000000, 38000000, 212600000];

// Function that checks the length of array. Returns true if the length is equal to 4.
function arrayLength (array) {
    if (array.length === 4) {
        return true;
    } else {
        return false;
    }
}

console.log(arrayLength(populations));

// Gives the percentage of each location depending on their number
const percentageOfWorld = population => {
    const percentage = (population / 7900000000) * 100;
    return percentage.toFixed(1) + '%';
}

const percentages = [percentageOfWorld(populations[0]), percentageOfWorld(populations[1]), percentageOfWorld(populations[2]), percentageOfWorld(populations[3])];

console.log(percentages);