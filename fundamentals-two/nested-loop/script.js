'use strict';

let listOfNeighbors = [
    ['Canada', 'Mexico'], 
    ['Spain'], 
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbors.length; i++) {
    for(let y = 0; y < listOfNeighbors[i].length; y++) {
        console.log(`Neighbour: ${listOfNeighbors[i][y]}.`);
    }
}