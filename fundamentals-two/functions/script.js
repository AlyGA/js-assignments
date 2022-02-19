'use strict';

function describeCountry(country, population, captialCity) {
    let result = `${country} has ${population} people and its capital city is ${captialCity}.`;

    return result;
}

const resultJapan = describeCountry('Japan', '40 million', 'Tokyo');
console.log(resultJapan);

const resultCanada = describeCountry('Canada', '100 million', 'Ottawa');
console.log(resultCanada);

const resultChina = describeCountry('China', '300 million', 'Beijing');
console.log(resultChina);