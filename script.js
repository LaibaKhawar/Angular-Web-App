"use strict";
class Person {
    constructor(name, gender, height, weight) {
        this.name = name;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
    }
    ;
    calculateBMI() {
        const heightInMeters = this.height / 100; 
        return this.weight / (heightInMeters * heightInMeters);
    }
    ;
}
;
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('bmiForm');
    const resultLabel = document.getElementById('result');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const nameInput = document.getElementById('name');
        const genderInput = document.getElementById('gender');
        const heightInput = document.getElementById('height');
        const weightInput = document.getElementById('weight');
        const name = nameInput.value;
        const gender = genderInput.value;
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);
        const person = new Person(name, gender, height, weight);
        const bmi = person.calculateBMI().toFixed(2);
        resultLabel.textContent = `BMI: ${bmi}`;
    });
});
