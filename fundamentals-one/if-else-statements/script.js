let country = 'US';
let continent = 'NA';
const population = 50000000;
let isIsland = false;
const finlandPopulation = 6000000
let language = 'English';

halfPopulation = population / 2; //5000
halfPopulation ++; // halfPopulation = halfPopulation + 1 // 5001

if(population >= 33000000) {
    console.log(`${country}'s population is above average`);
} else {
    yearAverage = 33000000 - population;
    console.log(`${country}'s population is ${yearAverage} below average`)
}