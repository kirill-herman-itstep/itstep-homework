// Task 1

function stringStat(str) {
    let letters = str.match(/\d/g);
    letters = letters ? letters.length : +letters;
    let numbers = str.match(/[a-zа-я]/gi);
    numbers = numbers ? numbers.length : +numbers;
    console.log(`letters: ${letters}, numbers: ${numbers}, other symbols: ${str.length - letters - numbers}`)
}


// Task 2

function callNumber(num) {
    num = String(num);
    let badNumber = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 
    'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    let dozens = ['', '', 'двадцать', 'тридцать', 'сорок', 
    'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    let units = ['', ' один', ' два', ' три', ' четыре', ' пять',
    ' шесть', ' семь', ' восемь', ' девять'];
    if (+num[0] === 1) return badNumber[+num[1]];
    return dozens[num[0]] + units[num[1]];
}


// Task 3

function sorryCaps(str) {
    str = str.split(/[0-9]/).join('_');
    let result = '';
    for (let c of str) result += c === c.toLocaleUpperCase() ? c.toLocaleLowerCase() : c.toLocaleUpperCase();
    return result;
}


// Task 4

function toCamelCase(str) {
    let arr = [];

    str = str.split('-');
    str.forEach (e => {arr.push(e[0].toUpperCase(), e.slice(1))});
    return arr.join('');
}


// Task 5

function abbreviate(str) {
    return str.split(' ').map(a => a[0] ? a[0].toLocaleUpperCase() : '').join('');
}


// Task 6

function unite(...args) {
    return args.join(' ');
}


// Task 7

function calc(str) {
    function calculate (str) {
        str = str.split('+');
        str = str.map(minus => {
            minus = minus.split('-');
            minus = minus.map(div => {
                div = div.split(`/`);
                div = div.map(multi => {
                    multi = multi.split('*');
                    return multi.reduce((res, e) => res * e);
                });
                return div.reduce((res, e) => res / e);
            });
            return minus.reduce((res, e) => res - e);
        })
        return +str.reduce((res, e) => +res + +e);
    }

    let i;
    while (i = str.match(/[\(][^\(\)]*[\)]/)) {
        str = str.replace(i[0], `${calculate(i[0].slice(1, i[0].length - 1))}`);
    }
    return calculate(str);
}

// Для проверки предлагаю ввести в консоль нижеуказанное по одной строке:

// calc('(2 + 2)*2 - 2/2')
// calc('(20 + 20)*20 - 400/20')
// calc('1500/30 - (20 + 2)*5')




// Task 8

function getUrl() {
    let a = window. location;
    return `протокол: ${a.protocol}, домен: ${a.host}, путь: ${a.pathname}`;
}


// Task 9

function divide(str, divider) {
    let i = [-Infinity];
    let j;
    let arr = [];
    while (j = i.length) {
        i.push(str.indexOf(divider, i[j - 1] + divider.length));
        if (i[j] === -1) break;
        arr.push(str.slice(i[j - 1] + divider.length, i[j]))
    }
    arr.push(str.slice(i[j - 1] + divider.length, str.length))
    return arr;
}


// Task 10

function printByExample(str, ...args) {
    return args.reduce((str, e, i) => str.replace(new RegExp(`%${i + 1}`, 'g'), e), str);
}