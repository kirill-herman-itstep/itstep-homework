function strStat(str) {
    const letters = str.match(/[A-Z]/gi);
    const numbers = str.match(/[0-9]/g);
    const symbols = str.match(/\W/g);
    console.log(`Letters amount: ${letters.length}`);
    console.log(`Numbers amount: ${numbers.length}`);
    console.log(`Symbols amount: ${symbols.length}`);
}

function numToStr(num) {
    const firstDigit = Math.floor(num / 10)
    const secondDigit = num % 10;
    const units = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    const ten = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    const assembled = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяноста'];

    switch (true) {
        case firstDigit === 0: 
            console.log(units[secondDigit]);
            break
        case firstDigit === 1:
            console.log(ten[secondDigit]);
            break
        default: console.log(`${assembled[firstDigit]} ${units[secondDigit]}`);
    }
}

function replaceInStr(str) {
    const chars = str.toLowerCase().split('')
    for (i = 0; i < str.length; i++) {
        if (chars[i] === str[i]) chars[i] = chars[i].toUpperCase();
        if (chars[i].match(/[0-9]/g)) chars[i] = '_';
    }
    console.log(chars.join(''));
}

function toCamelCase(style) {
    let arr = style.split('-');
    arr[1] = arr[1].charAt(0).toUpperCase() + arr[1].slice(1);
    console.log(arr.join(''));
}

function toAbr(str) {
    const abr = str.split(' ').map((element) => element = element.charAt(0).toUpperCase()).join('');
    console.log(abr);
}

function splitStr() {
    let str = '';
    for (i = 0; i < arguments.length; i++) {
        str += arguments[i]
    }
    console.log(str);
}

function calculate(str) {
    const arr = str.split(' ');
    answer = 0;
    switch (arr[1]) {
        case '+':
            answer = +arr[0] + +arr[2];
            break
        case '-':
            answer = +arr[0] - +arr[2];
            break
        case '*':
            answer = +arr[0] * +arr[2];
            break
        case '/':
            answer = +arr[0] / +arr[2];
            break
    }
    return answer;
}

function aboutURL(url) {
    const protocol = url.search(/\:/);
    console.log(`Протокол: ${url.slice(0, protocol)}`);
    url = url.slice(protocol + 3);
    const domen = url.search(/\//);
    console.log(`Домен: ${url.slice(0, domen)}`);
    console.log(`Путь: ${url.slice(domen)}`);
}

function separation(str, separator) {
    const arr = [];
    while (str.length > 1) {
        const separationPoint = str.search(separator)
        if (separationPoint >= 0) {
            arr.push(str.slice(0, separationPoint));
            str = str.slice(separationPoint + 1);
        } else {
            arr.push(str.slice(0))
            break
        }
    }
    console.log(arr);
}

function patternPrint(pattern, argumentsList) {
    for (i = 1; i < arguments.length; i++) {
        pattern = pattern.replace(`%${i}`, arguments[i])
    }
    console.log(pattern);
}