// === TASK 1 ===
class Marker {
    constructor (color, inkAmount = 100) {
        this.color = color;
        this.inkAmount = inkAmount;
    }

    print(str) {
        let printedStr = '';
        for (let i = 0; this.inkAmount > 0 && i < str.length; i++) {
            printedStr += str[i];
            if (str[i] !== ' ') this.inkAmount -= 0.5;
        }
        document.write(`<p style="color: ${this.color}">${printedStr}</p>`)
    }
}

const seaOfBlood = new Marker('red')

class RecoveryMarker extends Marker {
    recover () {
        this.inkAmount = 100;
    }
}

const newBlood = new RecoveryMarker('blue');

// === TASK 2 ===
class ExtendedDate extends Date {
    dateToStr() {
        let dayOfMonth = this.getDate();
        const month = this.getMonth();
        const firstDigit = Math.floor(dayOfMonth / 10)
        const secondDigit = dayOfMonth % 10;
        const units = ['', 'Первое', 'Второе', 'Третье', 'Четвёртое', 'Пятое', 'Шестое', 'Седьмое', 'Восьмое', 'Девятое'];
        const ten = ['Десятое', 'Одиннадцатое', 'Двенадцатое', 'Тринадцатое', 'Четырнадцатое', 'Пятнадцатое', 'Шестнадцатое', 'Семнадцатое', 'Восемнадцатое', 'Девятнадцатое'];
        const assembled = ['Тридцатое', 'Двадцатое', 'Двадцать', 'Тридцать'];
        const monthArray = ['Января' , 'Февраля' , 'Марта' , 'Апреля' , 'Мая' , 'Июня' , 'Июля' , 'Августа' , 'Сентября' , 'Октября' , 'Ноября' , 'Декабря']

        switch (true) {
            case dayOfMonth < 10: 
                dayOfMonth = (units[secondDigit]);
                break
            case dayOfMonth < 20:
                dayOfMonth = (ten[secondDigit]);
                break
            case dayOfMonth === 20:
                dayOfMonth = (assembled[firstDigit - 1]);
                break
            case dayOfMonth === 30:
                dayOfMonth = (assembled[firstDigit - 3]);
                break
            default: dayOfMonth = (`${assembled[firstDigit]} ${units[secondDigit]}`);
        }
        console.log(`${dayOfMonth} ${monthArray[month]}`);
    }

    isFuture() {
        const userDay = this.getDate()
        const currentDay = new Date().getDate()
        return  userDay >= currentDay;
    }

    isLeapYear() {
        const year = this.getFullYear()
        return year % 400 === 0 ? true : 
        year % 4 === 0 && year % 100 != 0 ? true : false;
    }

    nextDay() {
        const nextDate = new Date(this.setDate(this.getDate() + 1));
        console.log(nextDate);
    }
}

const sameTime = new ExtendedDate('9 March 2024')

// === TASK 3 === 
class Employee {
    constructor (firstName, secondName, sex, age, workExp) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.sex = sex;
        this.age = age;
        this.workExp = workExp;
    }   
}

const markBenkins = new Employee('Mark', 'Benkins', 'Male', 32, 6);
const seoKim = new Employee('Seo', 'Kim', 'Female', 24, 2);
const kevinPenkin = new Employee('Kevin', 'Penkin', 'Male', 29, 5);
const sawanoHiroyuki = new Employee('Sawano', 'Horiyuki', 'Male', 36, 9)

class EmpTable {
    constructor (workersArray) {
        this.workersArray = workersArray;
    }

    getHtml() {
        let headTitle = [];
        for (let key in this.workersArray[0]) {
            headTitle.push(`<td>${key}</td>`)
        }

        let workerInfo = '<tr> ';
        this.workersArray.forEach((element) => {
            for (const key in element) {
                workerInfo += `<td>${element[key]}</td>`
            }
            workerInfo += '</tr>'
        })

        return (`<table><thead>${headTitle.join(' ')}</thead><tbody>${workerInfo}</tbody></table>`)        
    }
}

const bankWorkers = new EmpTable([markBenkins, seoKim, kevinPenkin, sawanoHiroyuki]);

class StyledEmpTable extends EmpTable {
    getStyles() {
        const tableStyle = 'table {width: 100%; border: 3px solid red}';
        const tdStyle = 'td {border: 1px solid black}'
        const theadStyle = 'thead {text-align: center}'
        return `<style>${tableStyle}\n${tdStyle}\n${theadStyle}</style>`;
    }

    getHtml() {
        return this.getStyles() + super.getHtml()
    }


}

const stylishBankWorkers = new StyledEmpTable([markBenkins, seoKim, kevinPenkin, sawanoHiroyuki]);