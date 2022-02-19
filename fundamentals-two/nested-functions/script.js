'use strict';

function percentageOfWorld(populationNum) {
    const percentage = (populationNum / 7900000000) * 100;
    return percentage.toFixed(1) + '%';
}

function describePopulation(country, population){
    const percentage = percentageOfWorld(population);

    return `${country} has ${population} people, which is about ${percentage} of the world`;
}

console.log(describePopulation('China', 1441000000));
console.log(describePopulation('America', 311000000));
console.log(describePopulation('Canada', 38000000));