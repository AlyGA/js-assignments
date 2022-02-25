'use strict';
const myCountry = {
    country: 'America',
    capital: 'Washington',
    language: 'English',
    population: 579,
    neighbors: ['Canada', 'Brazil', 'Greenland'],

    describe: function() {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighbouring countries, and a capital called ${this.capital}.`
    }
}

console.log(myCountry.describe());

myCountry['checkIsland'] = true;

console.log(myCountry);

myCountry.describe = function() {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighbouring countries, and a capital called ${this.capital}. It ${this.checkIsland ? 'is' : 'is not'} an island.`
}

console.log(myCountry.describe());