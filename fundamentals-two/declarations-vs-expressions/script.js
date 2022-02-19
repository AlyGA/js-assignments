'use script';

// Function Decelaration
function percentageOfWorld1(population) {
    const percentage = (population / 7900000000) * 100;
    return percentage.toFixed(1) + '%';
}

const resultChina = percentageOfWorld1(1441000000);
console.log(resultChina);

const resultAmerica = percentageOfWorld1(311000000);
console.log(resultAmerica);

const resultCanada = percentageOfWorld1(38000000);
console.log(resultCanada);

// Function Expression
const percentageOfWorld2 = function(population) {
    const percentage = (population / 7900000000) * 100;
    return percentage.toFixed(1) + '%';
}

const resultJapan = percentageOfWorld2(122000000);
console.log(resultJapan);

const resultSpain = percentageOfWorld2(47000000);
console.log(resultSpain);

const resultItaly = percentageOfWorld2(59000000);
console.log(resultItaly);
