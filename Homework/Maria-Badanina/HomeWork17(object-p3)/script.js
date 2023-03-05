// ===== Task 1 =====

console.log('Задание 1: getStaticAboutString(str)');

function getStaticAboutString(str) {
    let numberLetters = str.match(/[a-zа-я]/gi)?.length ?? 0;
    let numberDigits = str.match(/\d/gi)?.length ?? 0;
    let numberOtherCharacters = str.length - (numberDigits + numberLetters);

    return `В стороке "${str}" количество букв равно ${numberLetters}, цифр ${numberDigits} и остальных символов ${numberOtherCharacters}`;
}

// ===== Task 2 =====

console.log('Задание 2: makeTestFormNumber(number)');

function makeTestFormNumber(number) {
    if (number < 10 || number >= 100) {
        return 'Вы введи не двухзачное число';
    }

    let firstNumberFrom20 = ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 
        'шестидесят', 'семьдесят', 'восемьдесят', 'десяность'];

    let secondNumberFrom20 = ['', 'один', 'два', 'три', 'четыре', 'пять',
        'шесть', 'семь', 'восемь', 'девять'];

    let numberUpTo20 = ['десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 
        'пятнадцать', 'шестнадцать', 'семьнадцать', 'восемьнадцать', 'девятнадцать',];

    if (number < 20) {
        return numberUpTo20[number % 10];
    } 

    let firstNumber = Math.trunc((number / 10) - 2);

    return `${firstNumberFrom20[firstNumber]} ${secondNumberFrom20[number % 10]}`.trim(); 
}

// ===== Task 3 =====

console.log('Задание 3: getConvertedString(str)');

function getConvertedString(str) {
    return str.replace(/./g, function(char) {
        if (char.match(/[a-zа-я]/)) {
            return char.toUpperCase();
        }
        if (char.match(/[A-ZА-Я]/)) {
            return char.toLowerCase();
        }
        if (char.match(/\d/)) {
            return '_';
        }
        return char;
    });
}

// ===== Task 4 =====

console.log('Задание 4: getСamelСaseStyle(style)');

function getСamelСaseStyle(style) {
    return style.replace(/-[a-zа-я]/gi, function(str){
        return str[1].toUpperCase();
    })
}

// ===== Task 5 =====

console.log('Задание 5: getAbbreviation(str)');

function getAbbreviation(str) {
    return str.split(/\s+/g).reduce((acc, elem) => {
        return acc + elem[0].toUpperCase();
    }, '');
}

// ===== Task 6 =====

console.log('Задание 6: connectStrings(...strings)');

function connectStrings(...strings) {
    return strings.reduce((acc, str) => {
        return acc + str;
    }, '');
}

// ===== Task 7 =====

console.log(`Задание 7: calculator(expression)
Между оператором и операндами должны быть пробелы. Можно передавать сложное выражения. 
Функция работает со скобками и делает приоритет для операция * и /`);

function calculator(expression) {
    expression.trim();
    while (expression.includes('(')) {
        let openingParenthesis = expression.indexOf('(');
        let closingParenthesis = expression.indexOf(')');
        let temporaryParenthesis = openingParenthesis;

        while (expression.includes('(', temporaryParenthesis + 1) && 
        expression.indexOf('(', temporaryParenthesis + 1) < closingParenthesis) {
            temporaryParenthesis = expression.indexOf('(', temporaryParenthesis + 1);
            closingParenthesis = expression.indexOf(')', closingParenthesis + 1);
        }

        let result = calculator(expression.slice(openingParenthesis + 1, closingParenthesis));
        let subexpression = expression.slice(openingParenthesis, closingParenthesis + 1);
        expression = expression.replace(subexpression, result);
    }

    elements = expression.split(' ');
    while(elements.length != 1) {
        if (elements.includes('*')) {
            let operator = elements.indexOf('*');
            elements.splice(operator - 1, 3, (+elements[operator - 1] * +elements[operator + 1]));

        } else if (elements.includes('/')) {
            let operator = elements.indexOf('/');
            elements.splice(operator - 1, 3, (+elements[operator - 1] / +elements[operator + 1]));

        } else {
            switch (elements[1]) {
                case '+': 
                    elements.splice(0, 3, (+elements[0] + +elements[2]));
                    break;
                case '-': 
                    elements.splice(0, 3, (+elements[0] - +elements[2]));
            }      
        }
    }
    return +elements;
}

// ===== Task 8 =====

console.log('Задание 8: infoURL(url)');

function infoURL(url) {
    url = url.split('://');
    let protocol = url[0];
    let domen = url[1].slice(0, url[1].indexOf('/'));
    let path = url[1].slice(url[1].indexOf('/'));

    return `Протокол: ${protocol}, домен: ${domen}, путь: ${path}`;
}

// ===== Task 9 =====

console.log('Задание 9: splitString(string, separator)');

function splitString(string, separator) {
    string += '';
    let index = 0;
    let strArr = [''];

    separation:
    for(let i = 0; i < string.length; i++) {
        for(let j = 0; j < separator.length; j++) {
            if (string[i + j] !== separator[j]) {
                strArr[index] += string[i];
                continue separation;
            }
        }

        i += separator.length - 1;
        index++;
        strArr[index] = '';
    }

    return strArr;
}

// ===== Task 10 =====

console.log('Задание 10: textOutputByPattern(pattern, ...args)');

function textOutputByPattern(pattern, ...args) {
    for(let i = args.length - 1; i >= 0; i--) {
        pattern = pattern.replace(`%${i + 1}`, args[i]);
    }

    console.log(pattern);
    return pattern;
}

console.log('');