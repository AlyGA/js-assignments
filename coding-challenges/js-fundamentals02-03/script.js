'use strict';

// Test data 
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        return this.mass / this.height ** 2
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        return this.mass / this.height ** 2
    }
}

if (mark.calcBMI() < john.calcBMI()) {
    console.log(`${john.fullName}'s BMI (${john.calcBMI().toFixed(1)}) is higher than ${mark.fullName}'s BMI (${mark.calcBMI().toFixed(1)})`);
} else {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI().toFixed(1)}) is higher than ${john.fullName}'s BMI (${john.calcBMI().toFixed(1)})`);
}