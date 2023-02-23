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

function showList() {
    for (let value of shoppingList) {
        console.log(value);
    }
}

function notBuyedFirst() {
    return shoppingList.sort((a, b) => a.isBuyed > b.isBuyed ? 1 : -1)
}

function addInList(addedProductName, amount) {
    const product = shoppingList.find((elem) => elem.productName === addedProductName);
    if (product) {
        product.amount += amount
    } else shoppingList.push(new Product(addedProductName, amount))
}

function checkAsBuyed(productNameAsBuyed) {
    const product = shoppingList.find((elem) => elem.productName === productNameAsBuyed)
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

function showCheque() {
    for (let value of cheque) {
        document.write(`${value} <br>`)
    }
}

function total() {
    let totalPrice = 0;
    for (let value of cheque) {
        totalPrice += (value.amount * value.price);
    }
    return totalPrice.toFixed(2)
}

function mostExpansivePurchase() {
    cheque.sort((a, b) => (a.amount * a.price) > (b.amount * b.price) ? -1 : 1);
    return cheque[0];
}

function averagePrice() {
    let sumOfPrice = 0;
    for (let value of cheque) {
        sumOfPrice += value.price;
    }
    return (sumOfPrice / cheque.length).toFixed(2);
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

let academy = [
    new LectureHall('Electronic security systems', 16, 'Computer Engineering'),
    new LectureHall('Cardiolgy', 12, 'Clinical medicine'),
    new LectureHall('Infocommunication technologies', 15, 'Information security'),
    new LectureHall('Programmable mobile systems', 17, 'Computer Engineering'),
    new LectureHall('Radio informatics', 12, 'Radio engineering and electronics'),
    new LectureHall('Electronic information security', 13, 'Radio engineering and electronics'),
    new LectureHall('Email Marketing', 16, 'Engineering and economic'),
    new LectureHall('Medical electronics', 11, 'Computer Engineering')
]

let studyGroup = [
    new Group('1st year CE', 12, 'Computer Engineering'),
    new Group('3rd year medicine', 3, 'Clinical medicine'),
    new Group('2nd year CE', 10, 'Computer Engineering'),
    new Group('1st year REE', 12, 'Radio engineering and electronics'),
    new Group('4st year REE', 12, 'Radio engineering and electronics'),
]

function showAllLecture() {
    for (let value of academy) {
        document.write(`Lecture Hall of ${value} <br>`)
    }
}

function facultyLectureHalls(faculty) {
    document.write(`Lecture halls for ${faculty} faculty <br>`)
    for (let value of academy) {
        if (faculty === value.faculty) document.write(`${value.name}, ${value.numberOfSeats} seats <br>`);
    }
}

function lectureHallForGroup(group) {
    let facultyOfGroup = '';
    for (let value of studyGroup) {
        if (value.name === group) facultyOfGroup = value.faculty;
    }
    document.write(`Lectures for ${group} group <br>`);
    facultyLectureHalls(facultyOfGroup)
}

function sortByNumberOfSeats() {
    return academy.sort((a, b) => a.numberOfSeats > b.numberOfSeats ? -1 : 1)
}

function sortLectureHallByABC() {
    return academy.sort((a, b) => a.name > b.name ? 1 : -1)
}