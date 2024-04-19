class Person {
    name: string;
    gender: string;
    height: number;
    weight: number;

    constructor(name: string, gender: string, height: number, weight: number) {
        this.name = name;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
    };

    calculateBMI(): number {
        const heightInMeters = this.height / 100;
        return this.weight / (heightInMeters * heightInMeters);
    };
};

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('bmiForm') as HTMLFormElement;
    const resultLabel = document.getElementById('result') as HTMLParagraphElement;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nameInput = document.getElementById('name') as HTMLInputElement;
        const genderInput = document.getElementById('gender') as HTMLSelectElement;
        const heightInput = document.getElementById('height') as HTMLInputElement;
        const weightInput = document.getElementById('weight') as HTMLInputElement;

        const name = nameInput.value;
        const gender = genderInput.value;
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        const person = new Person(name, gender, height, weight);
        const bmi = person.calculateBMI().toFixed(2);
        resultLabel.textContent = `BMI: ${bmi}`;
    });
});
