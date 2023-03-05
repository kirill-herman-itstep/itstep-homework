'use strict'

// ====== Task 1 ======

console.log(`Задание 1:
printListProducts()
addProduct(product)
buyProduct(name)`);

function Product(name, quantity) {
    this.name = name;
    this.quantity = quantity;
    this.isAcquired = false;
}

const listProducts = [
    new Product('Помидоры', 5),
    new Product('Подсолнечное масло', 1),
    new Product('Сливочное масло', 1),
    new Product('Соль', 1),
    new Product('Мороженое', 2),
    new Product('Сметана', 1),
];

function printListProducts() {
    console.log('Надо купить:')

    let count = listProducts.reduce((acc, element) => {
        if(element.isAcquired === false) {
            console.log(`${element.name} - ${element.quantity} шт.`);
        return acc + 1;
        }
        return acc;
    }, 0);

    if (count === 0) {
        console.log('Ничего');
    }
    console.log('');

    console.log('Куплено:')

    count = listProducts.reduce((acc, element) => {
        if(element.isAcquired === true) {
            console.log(`${element.name} - ${element.quantity} шт.`);
        return acc + 1;
        }
        return acc;
    }, 0);

    if (count === 0) {
        console.log('Ничего');
    }
    console.log('');
}

function addProduct(product) {
    let index = listProducts.findIndex(element => 
        element.name === product.name);

    if(index !== -1) {
        if(listProducts[index].isAcquired) {
            console.log(`Продукт "${product.name}" уже куплен`);
        } else {
            listProducts[index].quantity += product.quantity;
        }
    } else {
        listProducts.push(product);
    }
}

function buyProduct(name) {
    let index = listProducts.findIndex(element => element.name === name);
    listProducts[index].isAcquired = true;
}

console.log('');

// printListProducts();
// buyProduct('Соль');
// buyProduct('Мороженое');
// printListProducts();
// addProduct(new Product('Кефир', 1));
// addProduct(new Product('Соль', 2));
// printListProducts();


// ====== Task 2 ======

console.log(`Задание 2:
printCheck()
getPurchaseAmount()
getMostExpensiveCommodity()
getAverageCostOneCommodity()`);

function Commodity(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
}

const check = [
    new Commodity('Cube', 3, 15), 
    new Commodity('Pivo', 10, 4),
    new Commodity('Ell', 2, 100),
    new Commodity('Apple', 100, 1),
]

function printCheck() {
    check.forEach(element => {
        console.log(`${element.name} - ${element.quantity} шт.`);
        console.log(`Цена за штуку ${element.price} руб.`);
        console.log('');
    });
}

function getPurchaseAmount() {
    let amount = check.reduce(
        (summ, element) => summ + element.price * element.quantity, 0);
    console.log(`Общая сумма покупки равна ${amount} руб.`);

    return amount;
}

function getMostExpensiveCommodity() {
    let expensiv = check.reduce((acc, element) => {
        let prime = element.price * element.quantity;
        if (acc[0] < prime) {
            acc[0] = prime;
            acc[1] = element; 
        }
        return acc;
    }, [0, {}]);

    console.log(`Самая дорогая покупка в чеке "${expensiv[1].name}" 
    в количестве ${expensiv[1].quantity} шт. стоимостью за штуку ${expensiv[1].price} руб.`);

    return expensiv[1];
}

function getAverageCostOneCommodity() {
    let averageCost = check.reduce((acc, elem) => {
        return acc + elem.price;
    }, 0) / check.length;

    console.log(`Средняя стоимость одного товара равна ${averageCost} руб.`);

    return averageCost;
}

console.log('');


// ====== Task 3 ======

console.log(`Задание 3:
printStyles(styles, 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.')`);

const styles = [
    {'color': 'red'},
    {'font-size': '24px'},
    {'text-align': 'center'},
    {'text-decoration': 'underline'},
    {'font-style': 'italic'},
    {'border': '2px dashed black'},
    {'padding': '1rem'},
    {'margin': '1rem auto'},
    {'width': '325px'}
]

function printStyles(styles, text) {
    let style = '';

    styles.forEach(elem => {
        for(let key in elem) {
            style += `${key}: ${elem[key]}; `
        }
    });

    document.write(`<p style="${style}">
    ${text}
    </p>`)
}

console.log('');


// ====== Task 4 ======

console.log(`Задание 4:
infoAcademyAudiences()
infoAudiencesForFaculty('ФРЭ')
infoAudiencesForGroup(new Group('FFF', 20, 'ФРЭ'))
sortByNumberSeats()
sortByAudienceName()`);

/**
 * @param {string} name
 * @param {number} numberSeats
 * @param {string} nameFaculty
 */

function Auditorium(name, numberSeats, nameFaculty) {
    this.name = name;
    this.numberSeats = numberSeats;
    this.nameFaculty = nameFaculty;
}

const academyAudiences = [
    new Auditorium('101', 20, 'ФИТУ'),
    new Auditorium('102', 19, 'ФРЭ'),
    new Auditorium('103', 11, 'ФКП'),
    new Auditorium('104', 10, 'ФРЭ'),
    new Auditorium('105', 15, 'ФРЭ'),
    new Auditorium('106', 13, 'ФКСиС'),
    new Auditorium('107', 18, 'ФИТУ'),
    new Auditorium('108', 11, 'ФКСиС'),
    new Auditorium('109', 20, 'ФКП'),
    new Auditorium('110', 18, 'ФИТУ'),
    new Auditorium('111', 12, 'ФКСиС'),
    new Auditorium('112', 16, 'ФКП'),
    new Auditorium('113', 11, 'ФИТУ'),
    new Auditorium('114', 19, 'ФКСиС'),
    new Auditorium('115', 10, 'ФКП'),
    new Auditorium('116', 17, 'ФРЭ'),
];

function infoAcademyAudiences() {
    academyAudiences.forEach(elem => {
        console.log(`Аудитория ${elem.name}, ${elem.nameFaculty}, количество посадочных мест ${elem.numberSeats}`)
    }); 
}

function infoAudiencesForFaculty(nameFaculty) {
    console.log(`Аудитории для факультета ${nameFaculty}:`);

    let count = academyAudiences.reduce((acc, elem) => {
        if (elem.nameFaculty === nameFaculty) {
            console.log(`Аудитория ${elem.name}, количество посадочных мест ${elem.numberSeats}`);
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);

    if (count === 0) {
        console.log('Для этого факультета нет аудиторий ');
    }
}

/**
 * @param {string | number} name
 * @param {number} numbemStudents
 * @param {string} nameFaculty
 */

function Group(name, numbemStudents, nameFaculty) {
    this.name = name;
    this.numbemStudents = numbemStudents;
    this.nameFaculty = nameFaculty;
}

/**
* @param {Group} group
*/

function infoAudiencesForGroup(group) {
    console.log(`Аудитории для группы "${group.name}":`);

    let count = academyAudiences.reduce((acc, elem) =>{
        if (elem.nameFaculty === group.nameFaculty
         && elem.numberSeats >= group.numbemStudents) {
            console.log(`Аудитория ${elem.name}, количество посадочных мест ${elem.numberSeats}`);
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);

    if (count === 0) {
        console.log('Для этой группы нет аудиторий ');
    }
}

function sortByNumberSeats() {
    academyAudiences.sort((a, b) => a.numberSeats - b.numberSeats);
}

function sortByAudienceName() {
    academyAudiences.sort((a, b) => a.name > b.name ? 1 : -1);
}

console.log('');