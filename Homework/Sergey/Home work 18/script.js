'use strict'

// Задание №1
console.log('Задание №1');

/**
 * @param {string} color
 * @param {number} quantityOfInc
 * @param {string} userText
*/

class StandardMarker {
    constructor (color, quantityOfInc) {
        this.color = color;
        this.quantityOfInc = quantityOfInc;
    }

    writeText (userText = '') {
        const writeText = userText.split('')
        .reduce((acc, item) => {
            if (this.quantityOfInc >= 0.5 && item !== ' ') {
                acc += item;
                this.quantityOfInc -= 0.5;
            } else if (this.quantityOfInc >= 0.5 && item === ' ') {
                acc += item;
            }
            return acc;
        }, '')
        
        return document.write(`<div style = "color: ${this.color}; font-size: 2rem; font-style: italic;">${writeText}</div>`);
    }
}
 
class RefillableMarker extends StandardMarker {
    refillTheMarker (value) {
        this.quantityOfInc += value;
    }
}


const loremText = ' Lorem ipsum dolor Lorem ipsum dolor';

const myMarcer = new StandardMarker('red', 10);

myMarcer.writeText(loremText);

const myNewMarcer = new RefillableMarker('green', 5);

myNewMarcer.writeText(loremText);

myNewMarcer.refillTheMarker(10);

myNewMarcer.writeText(loremText);

// Задание №2
console.log('\nЗадание №2');

class ExtendedDate extends Date {
    dateWithText (){
        const dozensDate = ['', 'двадцатое', 'тридцатое', 'двадцать', 'тридцать'];
        const unitsDate = ['', 'первое', 'второе', 'третье', 'четвертое', 'пятое', 'шестое', 'седьмое', 'восьмое', 'девятое'];
        const tenToTwentyDate = ['десятое', 'одннадцатое', 'двенадцатое', 'тринадцатое', 'четырнадцатое', 'пятнадцатое', 'шестнадцатое', 'семнадцатое', 'восемнадцатое', 'девятнадцатое'];
        const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

        let date;
        if (`${super.getDate()}`.length === 1) date = unitsDate[super.getDate()];
        if (`${super.getDate()}`.length > 1 && super.getDate() < 20) date = tenToTwentyDate[super.getDate() - 10];
        if (`${super.getDate()}`.length > 1 && super.getDate() >= 20 && `${super.getDate()}`[1] === '0') date = dozensDate[+`${super.getDate()}`[0] - 1];
        if (`${super.getDate()}`.length > 1 && super.getDate() >= 20 && `${super.getDate()}`[1] !== '0') date = dozensDate[+`${super.getDate()}`[0] + 1] + ' ' + unitsDate[+(`${super.getDate()}`[1])];

        return date + ' ' + month[super.getMonth()]
    }

    showPastOrFuture () {
        return (Date.parse(this) >= Date.parse(new Date())) ? true : false;
    }

    showLeapOrNon () {
       return (this.getFullYear() % 400 === 0 || this.getFullYear() % 4 === 0 && this.getFullYear() % 100 !== 0) ? true : false;
    }

    showNextDate () {
        this.setDate(this.getDate() + 1);
        return this;
    }
}

let userDate = new ExtendedDate('2022-02-28')

console.log(userDate.dateWithText());
console.log(userDate.showPastOrFuture());
console.log(userDate.showLeapOrNon());
console.log(userDate.showNextDate());

// Задание №3
console.log('\nЗадание №3');

class Employee {
    constructor (name, forname, post, department) {
        this.name = name;
        this.forname = forname;
        this.post = post;
        this.department = department;
        listOfEmployees.push(this)
    }
}

class EmpTable {
    constructor (list = []) {
        this.list = list;
    }

    getHTML () {
        const copyList = this.list.slice()
        const ArrayValue = copyList.map(item => {
            const newArray = [];
            for (let key in item) {
                newArray.push(`<td>${item[key]}</td>`)
            }
            return item = newArray;
        })

        return `<table>\n${ArrayValue.map(item => item = `<tr>\n${item.join('\n')}\n</tr>`).join('\n')}\n</table>`
    }
}

const listOfEmployees = [];

const Andrey = new Employee('Andrey', 'Ivanov', 'Credit specialist', 'credit department');
const Ivan = new Employee('Ivan', 'Korolenko', 'Chief lending officer', 'credit department');
const Elena = new Employee('Elena', 'Minkovich', 'Head of Department of credit', 'credit department');
const Olga = new Employee('Olga', 'Sobolenko', 'Corporate Business Specialist', 'corporate business department');
const Aleksandr = new Employee('Aleksandr', 'Savchec', 'Chief Specialist of the Corporate Business Department', 'corporate business department');
const Maria = new Employee('Maria', 'Belkevich', 'Head of the Corporate Business Department', 'corporate business department');

const showTable = new EmpTable(listOfEmployees)

// Для корректной работы функции необходимо закомемнтировать код задания №4
// document.write(showTable.getHTML())

// Задание №4
console.log('\nЗадание №4');

class StyledEmpTable extends EmpTable {
    constructor (list = [], styleArray = []) {
        super(list);
        this.styleArray = styleArray;
    }

    getStyles() {
        return `<style>\n${this.styleArray.join('\n')}\n</style>`
    }

    getHTML () {
        return this.getStyles()  + '\n' + super.getHTML()
    }
}

class CssClass {
    constructor (className, arrayStyle =[]) {
        this.className = className;
        this.arrayStyle = arrayStyle;
    }

    set addStyle(value) {
        this.arrayStyle.push(value);
    }

    set deleteStyle(value) {
        delete this.arrayStyle[value];
    }

    getCss() {
        return `${this.className} {\n${this.arrayStyle.join(';\n') + ';'}\n}`
    }
}

const tdStyle = new CssClass('td', ['box-sizing: border-box', 'border: 1px solid black', 'padding: 0.5rem']);
const tableStyle = new CssClass('table', ['border-collapse: collapse']);

const collectionStyle = [tdStyle.getCss(), tableStyle.getCss()]

const showStylesTable = new StyledEmpTable(listOfEmployees, collectionStyle)

document.write(showStylesTable.getHTML())