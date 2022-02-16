// Step 1: Calulate average score for each of the teams using provided data.

let averageScoreDolphin = (96 + 108 + 89) / 3;

let averageScoreKoalas = (88 + 91 + 110) / 3;

// Step 2: Compae the team's average scores to determine the winner.

if (averageScoreDolphin > averageScoreKoalas) {
    console.log(`The winner are the Dolphins! With the average score of ${averageScoreDolphin.toFixed(1)}. Unfortunately, the Koalas fell short as their average score was ${averageScoreKoalas.toFixed(1)}.`);
} else if (averageScoreDolphin < averageScoreKoalas) {
    console.log(`The winner are the Koalas! With the average score of ${averageScoreKoalas.toFixed(1)}. Unfortunately, the Dolphins fell short as their average score was ${averageScoreDolphin.toFixed(1)}.`);

} else if (averageScoreDolphin == averageScoreKoalas) {
    console.log(`Looks like it's a tie`);
}

//BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a high score than the other team, and a scire if at least 100 points.
//New case numbers
averageScoreDolphin = (97 + 112 + 81) / 3;
averageScoreKoalas = (109 + 95 + 86) / 3;

if (averageScoreDolphin > averageScoreKoalas && averageScoreDolphin >= 100){
    console.log(`Congrajulations! The Koalas win with a score of ${averageScoreDolphin.toFixed(1)}.`);
} else if (averageScoreDolphin < averageScoreKoalas && averageScoreKoalas >= 100) {
    console.log(`Congrajulations! The Koalas win with a score of ${averageScoreKoalas.toFixed(1)}.`);
} else if (averageScoreDolphin < 100 || averageScoreKoalas < 100) {
    console.log(`Sorry, the minimum is score is 100. No team wins a trophy.`);
} else {
    console.log(`It seems that there was an issue! Please re-enter and try again!`);
}

//BONUS 2: Minimum score also applies to a draw! So, a draw only happens when both teams have the same score and both have a score greater than or equal to 100 points.

averageScoreDolphin = (97 + 112 + 101) / 3;
averageScoreKoalas = (109 + 95 + 106) / 3;

if (averageScoreDolphin > averageScoreKoalas && averageScoreDolphin >= 100){
    console.log(`Congrajulations! The Koalas win with a score of ${averageScoreDolphin.toFixed(1)}.`);
} else if (averageScoreDolphin < averageScoreKoalas && averageScoreKoalas >= 100) {
    console.log(`Congrajulations! The Koalas win with a score of ${averageScoreKoalas.toFixed(1)}.`);
} else if (averageScoreDolphin < 100 || averageScoreKoalas < 100) {
    console.log(`Sorry, the minimum is score is 100. No team wins a trophy.`);
} else if (averageScoreDolphin === averageScoreKoalas && averageScoreKoalas >= 100 && averageScoreDolphin >= 100) {
    console.log(`Congrajulations! We have a draw, with both teams scoring ${averageScoreKoalas.toFixed(1)}. Everyone gets a trophy!`);
} else {
    console.log(`It seems that there was an issue! Please re-enter and try again!`);
}