// === TASK 1 ===
function Product(productName, amount, isBuyed = false) {
    this.productName = productName;
    this.amount = amount;
    this.isBuyed = isBuyed;
}

let shoppingList = [
    new Product('Apple', 12, false),
    new Product('Banana', 3, true),
    new Product('Ketchup', 1, true),
    new Product('Baguette ', 2, false),
    new Product('Sausage ', 7, false),
    new Product('Mayonese', 2, true),
    new Product('Cheese', 0.43, false),
]

function showList(list) {
    list.forEach((element) => console.log(element));
}

function notBuyedFirst(list) {
    return list.sort((a, b) => a.isBuyed > b.isBuyed ? 1 : -1)
}

function addInList(list, addedProductName, amount) {
    const product = list.find((elem) => elem.productName === addedProductName);
    if (product) {
        product.amount += amount
    } else list.push(new Product(addedProductName, amount))
}

function checkAsBuyed(list, productNameAsBuyed) {
    const product = list.find((elem) => elem.productName === productNameAsBuyed)
    if (product) {
        product.isBuyed = true;
    }
}
// === TASK 2 ===
function Purchase(itemName, amount, price) {
    this.itemName = itemName;
    this.amount = amount;
    this.price = price;

    this.toString = function() {
        return `${this.itemName}  ${this.amount}  ${this.price}rub`;
    }
}

let cheque = [
    new Purchase('Apple', 12, 1.2),
    new Purchase('Banana', 3, 5.7),
    new Purchase('Ketchup', 1, 4.04),
    new Purchase('Baguette ', 2, 1.26),
    new Purchase('Sausage ', 7, 13.84),
    new Purchase('Mayonese', 2, 1.94),
    new Purchase('Cheese', 0.43, 15.94),
]

function showCheque(listOfPurchased) {
    listOfPurchased.forEach(element => document.write(`${element} <br>`));
}

function total(listOfPurchased) {
    let totalPrice = 0;
    listOfPurchased.forEach((element) => totalPrice += (element.amount * element.price))
    return totalPrice.toFixed(2)
}

function mostExpansivePurchase(listOfPurchased) {
    listOfPurchased.sort((a, b) => (a.amount * a.price) > (b.amount * b.price) ? -1 : 1);
    return listOfPurchased[0];
}

function averagePrice(listOfPurchased) {
    return (total(listOfPurchased) / listOfPurchased.length);
}
// === TASK 3 ===
function CssStyle(property, value) {
    this.property = property;
    this.value = value;
}

let styleArray = [
    new CssStyle('font-size', '3rem'),
    new CssStyle('text-transform', 'uppercase'),
    new CssStyle('color', 'red'),
    new CssStyle('text-decoration', 'underline'),
    new CssStyle('text-align', 'center'),
    new CssStyle('border', '3px solid black'),
]

function showStyledText(text) {
    let style = '';
    for (let value of styleArray) {
        style += `${value.property}:${value.value}; `;
    }
    document.write(`<p style="${style}">${text}</p>`)
}
// === TASK 4 ===
function LectureHall(name, numberOfSeats, faculty) {
    this.name = name;
    this.numberOfSeats = numberOfSeats;
    this.faculty = faculty;

    this.toString = function() {
        return (`${this.name}, ${this.numberOfSeats} seats. Faculty: ${this.faculty}`)
    }
}

function Group(name, numberOfStudents, faculty) {
    this.name = name;
    this.numberOfStudents = numberOfStudents;
    this.faculty = faculty
}

let lectureOfAcademy = [
    new LectureHall('Electronic security systems', 16, 'Computer Engineering'),
    new LectureHall('Cardiolgy', 12, 'Clinical medicine'),
    new LectureHall('Infocommunication technologies', 15, 'Information security'),
    new LectureHall('Programmable mobile systems', 17, 'Computer Engineering'),
    new LectureHall('Radio informatics', 9, 'Radio engineering and electronics'),
    new LectureHall('Electronic information security', 13, 'Radio engineering and electronics'),
    new LectureHall('Email Marketing', 16, 'Engineering and economic'),
    new LectureHall('Medical electronics', 11, 'Computer Engineering')
]

let studyGroupList = [
    new Group('1st year CE', 12, 'Computer Engineering'),
    new Group('3rd year medicine', 3, 'Clinical medicine'),
    new Group('2nd year CE', 10, 'Computer Engineering'),
    new Group('1st year REE', 12, 'Radio engineering and electronics'),
    new Group('4st year REE', 12, 'Radio engineering and electronics'),
]

function showAllLectures(lectureList) {
    lectureList.forEach((element) => document.write(`Lecture Hall of ${element} <br>`))
}

function facultyLectureHalls(lectureList, faculty) {
    document.write(`Lecture halls for ${faculty} faculty <br>`);
    lectureList.forEach((element) => {
        if (faculty === element.faculty) document.write(`${element.name}, ${element.numberOfSeats} seats <br>`);
    });
}

function lectureHallForGroup(lectureList, groupList, groupTitle) {
    const group = groupList.find((element) => element.name === groupTitle);
    document.write(`Lectures for ${groupTitle} group (${group.numberOfStudents} students)<br>`);
    lectureList.forEach((element) => {
        if (group.numberOfStudents >= element.numberOfSeats) document.write(`Lecture Hall of ${element} <br>`)
    })
}

function sortByNumberOfSeats(lectureList) {
    return lectureList.sort((a, b) => a.numberOfSeats > b.numberOfSeats ? -1 : 1)
}

function sortLectureHallByABC(lectureList) {
    return lectureList.sort((a, b) => a.name > b.name ? 1 : -1)
}