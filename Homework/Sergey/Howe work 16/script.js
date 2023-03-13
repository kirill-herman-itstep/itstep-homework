'use strict';

// Задание №1
console.log('Задание №1');

const infoString = (string = 'Hello 25! World 36?') => {
    const arrayString = string.split('');
    const arrayStringNumber = arrayString.filter(item => !Number.isNaN(+item) && item !== ' ');
    const arrayStringLetter = arrayString.filter(item => item.toLowerCase().localeCompare('z') <= 0 && 'a'.localeCompare(item.toLowerCase()) <= 0);
    const arrayStringSymbol = arrayString.length - arrayStringNumber.length - arrayStringLetter.length;

    return `В строке "${string}" ${arrayStringLetter.length} букв, ${arrayStringNumber.length} цифр, ${arrayStringSymbol} символов.`
}

console.log(infoString());

// Задание №2
console.log('\nЗадание №2');

const userNumber = 42;

const infoNumber = (number) => {
    const dozensOfNumberText = ['',  'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семдесят', 'восемдесят', 'девяносто'];
    const tenToTwentyText = ['', 'десять',  'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    const unitsOfNumberText = ['', 'ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];

    const dozensOfNumber = dozensOfNumberText.find((item, index) => (Math.floor(number / 10) <= 1) ? index === 0 : index === Math.floor(number / 10) - 1);
    const tenToTwenty = tenToTwentyText.find((item, index) => (Math.floor(number / 10) !== 1) ? index === 0 : index === number % 10 + 1);
    const unitsOfNumber = unitsOfNumberText.find((item, index) => Math.floor(number / 10) !== 1 ? index === number % 10 + 1: index === 0)

    return `${number} - ${tenToTwenty}${dozensOfNumber} ${unitsOfNumber}`
}

console.log(infoNumber(userNumber)); 

// Задание №3
console.log('\nЗадание №3');

const userText = 'Lorem ipsum dolor, sit 156amet consectetur  15 adipisicing elit. Necessitatibus magni corrupti nobis excepturi minima veniam tenetur aperiam, perspiciatis id esse temporibus doloremque culpa perferendis sint. Autem facere sint distinctio quo!'
const changingLetters = (string) => {
    const stringArray = string
    .split('')
    .map(item => {
        switch (true) {
            case !Number.isNaN(+item) && item !== ' ':
                item = '_';
                break;
            case item === item.toUpperCase():
                item = item.toLowerCase();
                break;
            case item === item.toLowerCase():
                item = item.toUpperCase();
                break;
            default:
                break;
        }
        return item
    })
    .join('');

    return stringArray
}

console.log(changingLetters(userText));

// Задание №4
console.log('\nЗадание №4');

const cssStyle = 'background-color';

const conversionToCamelCase = (string) => {
    const stringCamelCase = string
    .split('-')
    .map((item, index) => index !== 0 ? item = item[0].toUpperCase() + item.slice(1): item)
    .join('');

    return stringCamelCase
}


console.log(conversionToCamelCase(cssStyle));

// Задание №5
console.log('\nЗадание №5');

const conversionToAcronymText = 'Белорусский государственный университет'
const conversionToAcronym = (string = '') => {
    const acronym = string
    .split(' ')
    .map(item => item = item[0].toUpperCase())
    .join('');

    return acronym;
}

console.log(conversionToAcronym(conversionToAcronymText));

// Задание №6
console.log('\nЗадание №6');

const conversionToLongString = (...strings) => {
    const longString = strings.join(' ')

    return longString
}

console.log(conversionToLongString('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'));

// Задание №7
console.log('\nЗадание №7');

const userExample = '25    +  20 '
const calculator = (string) => {
    const actionWithoutSpacesArray = string.split(' ').join('').split('');
    const mathematicalSymbol = actionWithoutSpacesArray.find(item => item === '+' || item === '-' || item === '*' || item === '/');
    const firstNumber = +actionWithoutSpacesArray.filter((item, index) => index < actionWithoutSpacesArray.indexOf(mathematicalSymbol))
    .join('');
    const secondNumber = +actionWithoutSpacesArray.filter((item, index) => index > actionWithoutSpacesArray.indexOf(mathematicalSymbol))
    .join('');

    switch (mathematicalSymbol) {
        case '+':
            return firstNumber + secondNumber
        case '-':
            return firstNumber - secondNumber
        case '*':
            return firstNumber * secondNumber
        case '/':
            return firstNumber / secondNumber
    
        default: return 'Не задан математический знак'
    }
}

console.log(calculator(userExample));

// Задание №8
console.log('\nЗадание №8');

const userURL = 'https://tech.onliner.by/2023/03/02/vo-chto-poigrat-v-marte';

const infoURL = (url) => {
    const protocolURL = url.split('://')
    .find((item, index) => index === 0);
    const domainURL = url.split('://')
    .pop()
    .split('/')
    .find((item, index) => index === 0);
    const pathURL = '/' + url.split('://')
    .pop()
    .split('/')
    .slice(1)
    .join('/');

    return `URL - ${url}\nПротокол - ${protocolURL}\nДомен - ${domainURL}\nпуть - ${pathURL}`
}

console.log(infoURL(userURL));

// Задание №9
console.log('\nЗадание №9');

const userFullString = '10/08/2020';
const userSign = '/';

const splitString = (string = '', sing = '') => {
    let itemArray = '';
    let resultArray = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== sing && sing !== '') itemArray += string[i];
        if (string[i] === sing && sing !== '') {
            resultArray.push(itemArray);
            itemArray = '';
        }
        if (sing === '') resultArray.push(string[i])
        if (i === string.length - 1 && sing !== '') resultArray.push(itemArray);
    }

    return resultArray
}

console.log(splitString(userFullString, userSign));

// Задание №10
console.log('\nЗадание №10');

const print =(...arg) => {
    const pattern = arg.find((item, index) => index === 0)
    .split('%')
    .map((item, index) => {
        let resultItem = '';
        for (let i = 0; i < item.length; i++) {
            if (!Number.isNaN(+item[i])) resultItem += item[i]
        }
        return item = +resultItem
    })
    let i = 1;
    const resultString = arg.slice(0, 1)[0]
    .split('')
    .map((item, index, array) => {
        if (item === '%') {
            item = '';
            array[index + 1] = arg[pattern[i]];
            i++;
        }
        return item
    })
    .join('')

    return resultString
}

console.log(print('Today is %1 %2.%3.%4', 'Monday', 10, 8, 2020));