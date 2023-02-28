'use strict'

//======= Task 1 ===========

console.log('Задание 1: Объект superCar с методами showInfo() и getTimeToOvercomeDistance(distance)');

const superCar = { 
    manufacturer: 'МЗМА',
    model: 'Москвич-400',
    yearOfRelease: 1950,
    averageSpeed: 50,

    showInfo() {
        console.log(`Производитель: ${this.manufacturer}
Модель: ${this.model}
Год выпуска: ${this.yearOfRelease}
Средняя скорость: ${this.averageSpeed}`);
    },

    getTimeToOvercomeDistance(distance) {
        if (!isFinite(distance) || distance === null || distance === undefined || distance === '' || distance < 0) {
            console.log('Invalid value');
            return;
        }

        let time = distance / this.averageSpeed;
        if (time % 4 === 0) {
            return time + Math.trunc(time / 4 - 1);
        }
        return time + Math.trunc(time / 4);
    }
}

console.log('');

//======= Task 2 ===========

console.log(`Задание 2: Объекты дроби firstFraction и secondFraction
Функции: 
- сложения  
addTwoFractions(firstFraction, secondFraction)
- вычитания  
subtractingTwoFractions(firstFraction, secondFraction)
- умножения  
multiplicationTwoFractions(firstFraction, secondFraction)
- деления  
dividingTwoFractions(firstFraction, secondFraction)
- сокращения 
fractionReduction(fraction)`);

const firstFraction = {numerator: 1, denominator: 3};
const secondFraction = {numerator: 6, denominator: 26};

function isValidFraction(fraction) {
    if (Number.isInteger(fraction.numerator) && Number.isInteger(fraction.denominator)) {
        return true;
    } 
    return false;
}

function addTwoFractions(firstFraction, secondFraction) {
    if (!isValidFraction(firstFraction) || !isValidFraction(secondFraction)) {
        return null;
    }

    const fraction1 = {numerator: firstFraction.numerator * secondFraction.denominator,
        denominator: firstFraction.denominator * secondFraction.denominator};
    const fraction2 = {numerator: secondFraction.numerator * firstFraction.denominator,
        denominator: secondFraction.denominator * firstFraction.denominator};

    return fractionReduction(
        {numerator: fraction1.numerator + fraction2.numerator,
        denominator: fraction1.denominator})
}


function subtractingTwoFractions(firstFraction, secondFraction) {
    if (!isValidFraction(firstFraction) || !isValidFraction(secondFraction)) {
        return null;
    }

    const fraction1 = {numerator: firstFraction.numerator * secondFraction.denominator,
        denominator: firstFraction.denominator * secondFraction.denominator};
    const fraction2 = {numerator: secondFraction.numerator * firstFraction.denominator,
        denominator: secondFraction.denominator * firstFraction.denominator};

    return fractionReduction(
        {numerator: fraction1.numerator - fraction2.numerator,
        denominator: fraction1.denominator})
}


function multiplicationTwoFractions(firstFraction, secondFraction) {
    if (!isValidFraction(firstFraction) || !isValidFraction(secondFraction)) {
        return null;
    }

    return fractionReduction(
        {numerator: firstFraction.numerator * secondFraction.numerator,
        denominator: firstFraction.denominator * secondFraction.denominator})
}


function dividingTwoFractions(firstFraction, secondFraction) {
    if (!isValidFraction(firstFraction) || !isValidFraction(secondFraction)) {
        return null;
    }

    return fractionReduction(
        {numerator: firstFraction.numerator * secondFraction.denominator,
        denominator: firstFraction.denominator * secondFraction.numerator})
}


function fractionReduction(fraction) {
    if (!isValidFraction(fraction)) {
        return null;
    }

    let commonDivisor;

    while (commonDivisor = getCommonDivisor(fraction.numerator, fraction.denominator)) {
        fraction.numerator /= commonDivisor;
        fraction.denominator /= commonDivisor;
    }

    return fraction;
}

function getCommonDivisor(firstNumber, secondNumber) {   
    let max = Math.abs(Math.max(firstNumber, secondNumber));
    let min = Math.abs(Math.min(firstNumber, secondNumber));

    if (min === 1) return 0;
    if (max % min === 0) return min;
    for(let i = 2; i < min / 2; i++) {
        if (max % i === 0 && min % i === 0) {
            return i;
        }
    }
    return 0;
}

console.log('');

//======= Task 3 ===========

console.log(`Задание 3: Объект time с функциями
showTime()
addSeconds(seconds)
addMinutes(minutes)
addHours(hours)`);

const time = {
    hours: 12,
    minutes: 30,
    seconds: 45,

    showTime() {
        console.log(`${this.hours < 10 ? ('0' + this.hours) : this.hours}:${this.minutes < 10 ? ('0' + this.minutes) : this.minutes}:${this.seconds < 10 ? ('0' + this.seconds) : this.seconds}`);
    },

    addHours(hours) {
        if (!Number.isInteger(hours)) {
            console.log('Invalid value');
            return;
        }

        this.hours += hours;

        this.hours = (24 + (this.hours % 24)) % 24;
    },

    addMinutes(minutes) {
        if (!Number.isInteger(minutes)) {
            console.log('Invalid value');
            return;
        }

        this.minutes += minutes;

        this.addHours(Math.floor(this.minutes / 60));

        this.minutes = (60 + (this.minutes % 60)) % 60;
    },

    addSeconds(seconds) {
        if (!Number.isInteger(seconds)) {
            console.log('Invalid value');
            return;
        }

        this.seconds += seconds;

        this.addMinutes(Math.floor(this.seconds / 60));
        this.seconds = (60 + (this.seconds % 60)) % 60;
    },
}



