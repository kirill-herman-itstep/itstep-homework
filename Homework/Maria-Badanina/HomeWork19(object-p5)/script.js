// ===== Task 1 ===== 

console.log('Задание 1:');

class Marker {
    #remains;

    constructor(color, remains) {
        this.color = color;
        this.#remains = remains;
    }

    get remains() {
        return this.#remains + ' %';
    }

    set remains(value) {
        if (this.constructor.name === 'Marker') return;

        this.#remains = value;
    }

    print(string) {
        let result = '';

        for(let i = 0; i < string.length; i++) {
            if (this.#remains === 0) {
                console.log('Чернила закончились');
                break;
            }

            result += string[i];
            
            if ((/\s/).test(string[i])) {              
                continue;
            }

            this.#remains = +(this.#remains - 0.5).toFixed(1);
        }

        document.write(`<p style="color: ${this.color}">${result}</p>`);
        console.log(`Осталось ${this.remains} чернил`);
    }
}

class RefuelingMarker extends Marker {
    constructor(color, remains) {
        super(color, remains);
    }

    refuel(additional) {
        this.remains = +(parseFloat(this.remains) + additional).toFixed(1);
        console.log(`Вы заполнели маркер на ${additional} %. В маркере осталось ${this.remains}`);
    }
}

let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam necessitatibus quisquam alias qui aliquam consectetur quidem esse pariatur praesentium perspiciatis impedit hic magni unde molestiae voluptatibus exercitationem, expedita animi sint.';

const marker = new Marker('blue', 50);
marker.print(text);
console.log('');

const refuelMarker = new RefuelingMarker('red', 40);
refuelMarker.print(text);
refuelMarker.refuel(80);
refuelMarker.print(text);
console.log('');

// ===== Task 2 =====

console.log('Задание 2:');

class ExtendedDate extends Date {
    constructor(...args) {
        super(...args);
    }

    #days = [
        'Первого', 'Второго', 'Третьего', 'Четвертого', 'Пятого', 'Шетого', 'Седьмого', 'Восьмого', 'Девятого', 'Десятого',
        'Одинадцатого', 'Двенадцатого', 'Тринадцатого', 'Четырнадцатого', 'Пятнадцатого', 'Шестнадцатого', 'Семнадцатого',
        'Восемнадцатого', 'Девятнадцатого', 'Двадцатого', 'Двадцать первого', 'Двадцать второго', 'Двадцать третьго', 'Двадцать четветного',
        'Двадцать пятого', 'Двадцать шестого', 'Двадцать седьмого', 'Двадцать восьмого', 'Двадцать десятого', 'Тридцатого', 'Тридцать первого',
    ]

    #months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
    ]

    printDate() {
        let day = this.#days[this.getDate() - 1];
        let month = this.#months[this.getMonth()];

        console.log(`${day} ${month}`);
    }

    isFutureDate() {
        return this >= new Date();
    }

    isLeapYear() {
        let year = this.getFullYear();
        return (year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0);
    }

    nextDate() {
        return new ExtendedDate(this.getFullYear(), this.getMonth(), this.getDate() + 1)
    }
}

let date = new ExtendedDate(2024, 5, 10);
date.printDate();
console.log(date);
console.log(`${date.isFutureDate() ? 'Будущее' : 'Прошлое'}`);
console.log(`${date.isLeapYear() ? 'Вискосный год' : 'Не вискосный год'}`);
console.log(`Следующая дата: 
${date.nextDate()}`);

// ===== Task 3 =====

class Employee {
    constructor(name, old, post) {
        this.name = name;
        this.old = old;
        this.post = post;
    }
}

const employeesList = [
    new Employee('Бернард Гаррете', 42, 'Банкир'),
    new Employee('Майкл Бьюрри', 35, 'Финансовый аналитик'),
    new Employee('Джордан Белфорт', 36, 'Брокер'),
    new Employee('Джозеф Борг', 40, 'Кредитный эксперт'),
    new Employee('Галя', 46, 'Кассир'),
];

class EmpTable {
    constructor(emplList) {
        this.emplList = emplList;
    }

    getHtml() {
        return `<table class="${'class' + this.constructor.name}">
            <tr>
                <th>Должность</th>
                <th>Имя работника</th>
                <th>Возраст</th>
            </tr>
            ${this.emplList.reduce((acc, elem) => {
                acc += `<tr><td>${elem.post}</td>`;
                acc += `<td>${elem.name}</td>`;
                return acc += `<td>${elem.old}</td></tr>`;
            },'')}
        </table>`
    }
}

const employees = new EmpTable(employeesList);
document.write(employees.getHtml());


// ===== Task 4 =====

class StyledEmpTable extends EmpTable {
    constructor(emplList) {
        super(emplList);
    }

    getStyles() {
        return `<style>
table.classStyledEmpTable {
    margin: 1rem auto;
    border-collapse: collapse;
}

table.classStyledEmpTable tr > * {
    padding: 0.5rem;
    border: 1px solid;
}

table.classStyledEmpTable th {
    background: #9dd1e0;
}

table.classStyledEmpTable td {
    background: #edf7ff;
}
</style>`
    }

    getHtml() {
        return this.getStyles() + super.getHtml();
    }
}

const employeesWhithStyle = new StyledEmpTable(employeesList);
document.write(employeesWhithStyle.getHtml());