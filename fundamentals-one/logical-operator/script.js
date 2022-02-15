/* 
//Case 1: Leads to false result

const country = "America";
const language = "English";
const population = 3290000000;
const isIsland = false;

if (language == "English" && population < 50000000 && !isIsland) {
    console.log(`You should live in ${country} :).`);
} else {
    console.log(`${country} does not meet your criteria :(.`);
} */
 
//Case 2: Changing variables to make result true.

const country = "Canada";
const language = "English";
const population = 1000000;
const isIsland = false;

if (language == "English" && population < 50000000 && !isIsland) {
    console.log(`You should live in ${country} :).`);
} else {
    console.log(`${country} does not meet your criteria :(.`);
} 