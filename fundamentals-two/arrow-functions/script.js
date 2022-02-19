'use strict';

const percentageOfWorld3 = population => {
    const percentage = (population / 7900000000) * 100;
    return percentage.toFixed(1) + '%';
}

const resultChina = percentageOfWorld3(1441000000);
console.log(resultChina);

const resultAmerica = percentageOfWorld3(311000000);
console.log(resultAmerica);

const resultCanada = percentageOfWorld3(38000000);
console.log(resultCanada);