// Task 1
 
class Marker {
    #content;
 
    constructor(color, content = 100) {
        this.color = color;
        this.#content = content;
    }
 
    print(str) {
        str = str.split('').filter(e => {
            if (this.#content >= 0.5) {
                if (e.match(/\S/)) this.#content -= 0.5;
                return true;
            }
            return false;
        }).join('');
        document.write(`<p style="color:${this.color};">${str}</p>`);
    }
 
    get content() {
        return this.#content + `%`;
    }
 
    set content(value) {
        if (parseInt(value)) this.#content = parseInt(value);
        else console.log('Wrong content value')
    }
}
 
class RefillableMarker extends Marker {
 
    constructor() {
        super(...arguments);
    }

    fill(value) {
        this.content = parseInt(this.content) + value;
        if (parseInt(this.content) > 100) this.content = 100;
    }
}
 
// let redMarker = new RefillableMarker('red', '5');
// redMarker.print('1,{^~6 78 901234');
// console.log(redMarker.content);
// redMarker.fill('110');
// console.log(redMarker.content);

 

// Task 2
 
class ExtendedDate extends Date {
    #month = ['January', 'February', 'March', 'April', 'May', 'Juny', 'July', 'August', 'September', 'October', 'November', 'December']
 
    constructor() {
        super(...arguments);
    }
 
    printDate() {
        return(`${this.#month[this.getMonth()]}, ${this.getDate()}`);
    }
 
    isFuture() {
        if (+this > Date.now()) return true;
        return false;
    }
 
    isLeap() {
        if (this.getFullYear() % 4 === 0) {
            if (this.getFullYear() % 100 === 0) {
                if (this.getFullYear() % 400 === 0) return true;
                return false;
            }
            return true;
        }
        return false;
    }
 
    nextDate() {
        return (new ExtendedDate(+this + 24*60*60*1000)).printDate();
    }
}
 
// let date = new ExtendedDate();
// console.log(date.printDate());
// console.log(date.isFuture());
// console.log(date.isLeap());
// console.log(date.nextDate());
 
// let date1 = new ExtendedDate(`01/01/2024`);
// console.log(date1.isFuture());
// console.log(date1.isLeap());
 
// let date2 = new ExtendedDate(`01/01/2100`);
// console.log(date2.isLeap());
 
// let date3 = new ExtendedDate(`01/01/2400`);
// console.log(date3.isLeap());


 
// Task 3

let arr = [];
 
class Employee {
    constructor(name = 'потап потапович коленков', features = '', character = 'скверный', status = 'не женат') {
        this.name = name.toUpperCase();
        this.features = features.toUpperCase();
        this.character = character.toUpperCase();
        this.status = status.toUpperCase();
        arr.push(this);
    }
}

new Employee('кабан кабаныч', 'туп, жаден, прожорлив, ленив, труслив, надменен', 'прескверный', 'женат');
new Employee('пупа', 'очень, очень хороший мальчик. вежлив, правдив, скромен, добр. слушает маму. каждое утро делает зарядку', 'очень мягкий', 'не женат');
new Employee('лупа', 'в детстве был благовоспитанным мальчиком, но начал играть в орлянку, связался с пиратами и покатился...', 'мягкий', 'не женат');
new Employee('поручик ржевский', 'очень хороший и весёлый человек', 'общительный', 'не женат');
new Employee('штирлиц', 'старый солдат и шпион. говорит правду в глаза, отчего и страдает', 'скрытный', 'не женат');
new Employee('василий иванович чапаев', 'любит исследовать природу нюанса', 'весёлый', 'не женат');
new Employee('петька', 'не любит исследовать природу нюанса', 'отсутствует', 'не женат');

class EmpTable {

    constructor(arr) {
        this.arr = arr.slice();
    }

    getHtml(t = this) {
        return `<table>
            <tr>
                <th>ИМЯ</th>
                <th>ПРИМЕТЫ</th>
                <th>ХАРАКТЕР</th>
                <th>СЕМЕЙНЫЙ СТАТУС</th>
            </tr>
        ${t.arr.map(e => {
            return `<tr>
                <td>${e.name}</td>
                <td>${e.features}</td>
                <td>${e.character}</td>
                <td>${e.status}</td>
            </tr>
            `;
        }).join('\n')}
        </table>`;
    }
}

// table = new EmpTable(arr);
// document.write(table.getHtml());



// Task 4

class StyledEmpTable extends EmpTable {

    constructor() {
        super(...arguments);
    }

    getStyles(...args) {
        return `<style>
        ${args.join('\n')}
        </style>`
    }

    getHtml() {
        return this.getStyles(...arguments) + this.__proto__.__proto__.getHtml(this);
    }
}

let styledTable = new StyledEmpTable(arr);
document.write(styledTable.getHtml(`table {border-collapse: collapse;
background-color: lightyellow;} 
table * {border: 1px solid black;
text-align: center;
padding: 0.5rem;}
th {background-color: lightsalmon;}`,));