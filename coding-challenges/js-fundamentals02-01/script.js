'use strict';

//Case 1
let calcAverage = (score1, score2, score3)=> (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
    avgDolphins = calcAverage(44, 23, 71);
    avgKoalas = calcAverage(65, 54, 49);
   if (avgDolphins < avgKoalas && avgKoalas >= 2 * avgDolphins) {
       console.log(`The winners are the Koalas! With a score of ${avgKoalas}. The other team only scored ${avgDolphins} points.`);
   } else if (avgKoalas < avgDolphins && avgDolphins >= 2 * avgKoalas) {
    console.log(`The winners are the Dolphins! With a score of ${avgDolphins}. The other team only scored ${avgKoalas} points.`);
   } else if (avgDolphins < 2 * avgKoalas || avgKoalas < 2 * avgDolphins) {
       console.log(`Unfortunately, this team did not meet the requirements!`);
   } else {
       console.log(`Invalid log`);
   }
}

console.log(checkWinner('Dolphins', 'Koalas'));

// Case 2
function checkWinner2(avgDolphins, avgKoalas) {
    avgDolphins = calcAverage(85, 54, 41);
    avgKoalas = calcAverage(23, 34, 27);
    if (avgDolphins < avgKoalas && avgKoalas >= 2 * avgDolphins) {
        console.log(`The winners are the Koalas! With a score of ${avgKoalas}. The other team only scored ${avgDolphins} points.`);
    } else if (avgKoalas < avgDolphins && avgDolphins >= 2 * avgKoalas) {
     console.log(`The winners are the Dolphins! With a score of ${avgDolphins}. The other team only scored ${avgKoalas} points.`);
    } else if (avgDolphins < 2 * avgKoalas || avgKoalas < 2 * avgDolphins) {
        console.log(`Unfortunately, this team did not meet the requirements!`);
    } else {
        console.log(`Invalid log`);
    }
}

console.log(checkWinner2('Dolphins', 'Koalas'));