"use strict";

let lines = ``; // Empty string to add information

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    lines += `...${arr[i]} in ${i + 1} days.`; // Add this information to empty string
  }
};

// Test Data 2
printForecast([12, 5, -5, 0, 4]);
console.log(lines);
