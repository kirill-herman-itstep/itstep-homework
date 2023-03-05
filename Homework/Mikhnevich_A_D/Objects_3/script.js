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
    function badNumber() {
        switch (+num[1]) {
            case 0 :
                return 'десять';
            case 1:
                return 'одиннадцать';
            case 2:
                return 'двенадцать';
            case 3:
                return 'тринадцать';
            case 4:
                return 'четырнадцать';
            case 5:
                return 'пятнадцать';
            case 6:
                return 'шестнадцать';
            case 7:
                return 'семнадцать';
            case 8:
                return 'восемнадцать';
            case 9:
                return 'девятнадцать';
            default:
                return 'Error';
        }
    }
    let a;
    num = `${num}`;
    
    switch (+num[0]) {
        case 1:
            return badNumber();
        case 2:
            a = 'двадцать';
            break;
        case 3:
            a = 'тридцать';
            break;
        case 4:
            a = 'сорок';   
            break;
        case 5:
            a = 'пятьдесят';
            break;
        case 6:
            a = 'шестьдесят';
            break;
        case 7:
            a = 'семьдесят';
            break;
        case 8:
            a = 'восемьдесят';
            break;
        case 9:
            a = 'девяносто';
            break;
        default:
            return 'Error';
    }
    
    switch (+num[1]) {
        case 0 :
            return a;
        case 1:
            return a + ' один';
        case 2:
            return a + ' два';
        case 3:
            return a + ' три';
        case 4:
            return a + ' четыре';
        case 5:
            return a + ' пять';
        case 6:
            return a + ' шесть';
        case 7:
            return a + ' семь';
        case 8:
            return a + ' восемь';
        case 9:
            return a + ' девять';
        default:
            return 'Error';
    }
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

// Это мы не проходили, это нам не задавали.

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