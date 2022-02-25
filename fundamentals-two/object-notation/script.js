'use strict';

const myCountry = {
    country: 'America',
    capital: 'Washington',
    language: 'English',
    population: '579 million',
    neighbors: ['Canada', 'Brazil', 'Greenland']
}

console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population = '581 million';

console.log(myCountry);

myCountry['population'] = '579 million';

console.log(myCountry);