// =================    TASK 1    =============

const auto = {
    manufacturer: 'Porshe',
    model: 'Taycan',
    year: 2021,
    speed: 143,
}

function showInfo () {
    let path = document.querySelector('div');
    path.innerText = `${auto.manufacturer} ${auto.model} ${auto.year} ${auto.speed}`;
}

function path(distance) {
    let result = distance / auto.speed;
    result += Math.floor(result / 4);
    return  result.toFixed(2) + 'h';
}

// =================    TASK 2    =============
// Простые множители
function primeFactors (num) {
    const primeArray = [];
    let divider = 2;

    while (num >= 2) {
        if (num % divider === 0) {
            primeArray.push(divider);
            num /= divider;
        } else divider++
    }
    return primeArray;
}
// НОК
function findSCM (firstArray, secondArray) {
    let factors = [];
    factors.push(firstArray);
    for (i = 0; i < secondArray.length; i++) {
        if (!firstArray.includes(secondArray[i])) {
            factors.push(secondArray[i]);
        }
    }
    factors = factors.flat();
    return factors.reduce((a, b) => a * b);
}
// НОД
function findGCD (firstArray, secondArray) {
    let factors = [];
    for (i = 0; i < secondArray.length; i++) {
        if (firstArray.includes(secondArray[i])) {
            factors.push(secondArray[i]);
            firstArray.splice(firstArray.indexOf(secondArray[i]), 1)
        }
    }
    factors = factors.flat();
    if (factors.length < 1) return 1;
    return factors.reduce((a, b) => a * b)
}
// Приведение
function bringing() {
    let SCM = findSCM(primeFactors(firstFraction.denominator), primeFactors(secondFraction.denominator));
    let addFirst = SCM / firstFraction.denominator;
    let addSecond = SCM / secondFraction.denominator;
    newFirstNumer = firstFraction.numerator * addFirst;
    newFirstDenom = firstFraction.denominator * addFirst;
    newSecondNumer = secondFraction.numerator * addSecond;
    newSecondDenom = secondFraction.denominator * addSecond;
    return SCM;
}
// Сокращение
let cuttedFraction = '';

function cut(num, denom) {
    let GCD = findGCD(primeFactors(num), primeFactors(denom));
    convertedNumerator = num / GCD;
    convertedDenominator = denom / GCD;
    return cuttedFraction = [convertedNumerator, convertedDenominator];
}
//Выделение целой части
let fullPartOfFraction = 0;
let newNumerator = 0;

function fullPart() {
    fullPartOfFraction = parseInt(cuttedFraction[0] / cuttedFraction[1]);
    newNumerator = cuttedFraction[0] % cuttedFraction[1];
    return [fullPartOfFraction, newNumerator];
}
// Конструктор дроби + простых множителей
function Fraction (numer, denom) {
    this.numerator = numer,
    this.denominator = denom;
}
// Создание дробей
let firstFraction = new Fraction
let secondFraction = new Fraction

// =================    Сумма   ================
function sumFraction () {
    let SCM = bringing()
    // Операция 
    let convertedNumerator = newFirstNumer + newSecondNumer;
    let convertedDenominator = SCM;
    // Сокращение и вывод
    return cut(convertedNumerator, convertedDenominator);
}
// =================    Разность    ================
function subFraction () {
    let SCM = bringing()
    // Операция 
    let convertedNumerator = newFirstNumer - newSecondNumer;
    let convertedDenominator = SCM;
    // Сокращение и вывод
    return cut(convertedNumerator, convertedDenominator);
}
// =================    Умножение    ================
function multiplicationFraction () {
    let convertedNumerator = firstFraction.numerator * secondFraction.numerator;
    let convertedDenominator = firstFraction.denominator * secondFraction.denominator;   
    // Сокращение и вывод
    return cut(convertedNumerator, convertedDenominator);
}
// =================    Деление    ================
function divideFraction () {
    let convertedNumerator = firstFraction.numerator * secondFraction.denominator;
    let convertedDenominator = firstFraction.denominator * secondFraction.numerator;   
    // Сокращение и вывод
    return cut(convertedNumerator, convertedDenominator);
}

// =================    TASK 3    =============

let time = {
    hour: 21,
    minute: 40,
    second: 96,

    makeCorrect() {
        this.second < 0 ? this.minute -= Math.ceil(this.second / -60) : this.minute += parseInt(this.second / +60)
        this.minute < 0 ? this.hour -= Math.ceil(this.minute / -60) : this.hour += parseInt(this.minute / 60)
        this.second < 0 ? this.second = 60 - (-this.second % -60) : this.second %= 60;
        this.minute < 0 ? this.minute = 60 - (-this.minute % -60) : this.minute %= 60;
        this.hour < 0 ? this.hour = 24 - (-this.hour % -24) : this.hour %= 24;
    },
    
    showTime() {
        const box = document.querySelector('.output');
        time.makeCorrect()
        let rightHour = new Intl.NumberFormat('ru-RU', {minimumIntegerDigits: 2}).format(time.hour)
        let rightMinute = new Intl.NumberFormat('ru-RU', {minimumIntegerDigits: 2}).format(time.minute)
        let rightSecond = new Intl.NumberFormat('ru-RU', {minimumIntegerDigits: 2}).format(time.second)
        box.innerText = `${rightHour}:${rightMinute}:${rightSecond}`;
    },
    
    changeSec(amount) {
        this.second += amount;
        this.showTime()
    },
    
    changeMin(amount) {
        this.minute += amount;
        this.showTime()
    },

    changeHour(amount) {
        this.hour += amount;
        this.showTime()
    },
}
