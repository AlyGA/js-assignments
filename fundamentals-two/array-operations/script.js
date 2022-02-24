'use strict';

const neighbors = ['Canada', 'Brazil', 'Japan'];
neighbors.push('Utopia');
console.log(neighbors);

neighbors.pop();
console.log(neighbors);

if (neighbors.includes('Germany')) {
    console.log("Probably a central European country");
} else {
    console.log("Probably not a central European country");
}

console.log(neighbors.indexOf('Canada')); // Index 0

neighbors[0] = 'Republic of Canada'
console.log(neighbors);