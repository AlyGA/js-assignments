//SCENARIO: Steven wants to build a very simple tip calculator for whenever he goes eating in a resteraunt. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%

//Bill 1
let bill = 275;

let tip = bill >= 50 && bill <= 300? 0.15: 0.2;

let totalTipAmount = bill * tip;

console.log(`The bill was ${bill}, the tip was ${totalTipAmount}, and the total value is ${totalTipAmount + bill}.`);

//Bill 2
bill = 40;

tip = bill >= 50 && bill <= 300? 0.15: 0.2;

totalTipAmount = bill * tip;

console.log(`The bill was ${bill}, the tip was ${totalTipAmount}, and the total value is ${totalTipAmount + bill}.`);

//Bill 3
bill = 430;

tip = bill >= 50 && bill <= 300? 0.15: 0.2;

totalTipAmount = bill * tip;

console.log(`The bill was ${bill}, the tip was ${totalTipAmount}, and the total value is ${totalTipAmount + bill}.`);