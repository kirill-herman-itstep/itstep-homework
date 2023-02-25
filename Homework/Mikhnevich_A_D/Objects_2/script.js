// Task 1.1

let purchaseList = [];

function printPurchaseList() {
    let value = false;
    console.log(`Wished:`)
    purchaseList.forEach(e => {
        if(e.status === false) {
            console.log(`   ${e.name}, ${e.amount}`);
            value = true;
        } 
    });
    if (value === false) console.log('   None');
    value = false;
    console.log(`Bought:`)
    purchaseList.forEach(e => {
        if(e.status === true) {
            console.log(`   ${e.name}, ${e.amount}`);
            value = true;
        } 
    });
    if (value === false) console.log('   None');
}

function add(data, value) {
    function Product(data, value) {
        this.name = data;
        this.amount = value;
        this.status = false;
        purchaseList.push(this);
    }

    if (typeof(data) !== 'string') return 'Invalid name';
    if (!Number.isFinite(parseInt(value)) && value !== undefined) return 'Invalid amount';
    value = value === undefined ? 0 : parseInt(value);

    let success = purchaseList.find(e => e.name === data);
    if (success) {
        success.amount += value;
            return 'Increased';
    }
    new Product(data, value);
    return 'Added';
}

function buy(data) {
    if (typeof(data) !== 'string') return 'Invalid name';
    let success = purchaseList.find(e => e.name === data);
    if (success) {
        success.status = true;
            return 'Bought';
    }
    return `There is no ${data} your purchase list`;
}


// Task 2

let check = [];

function Product(name, amount, price) {
    this.name = name;
    this.amount = amount;
    this.price = price;
    check.push(this)
}
new Product('rose', 7, 3);
new Product('champagnee', 1, 30);
new Product('candies', 1, 40);
new Product('cigarettes', 1, 5);
new Product('vodka', 1, 15);
new Product('condoms', 1, 10);

function printCheck() {
    check.forEach (e => {console.log(`${e.name}, ${e.amount} * ${e.price} BYN`)})
    console.log(`Total: ${summaryPrice()} BYN`)
}

function summaryPrice() {
    return check.reduce((sum, e) => sum + e.amount * e.price, 0);
}

function expensivePrice() {//В задании покупка, а не товар, поэтому цена*количество.
    return check.reduce((max, e) => {return max.price * max.amount > e.price * e.amount ? max : e}, 0).name;
}

function averagePrice() {
    return summaryPrice() / check.reduce((val, e) => val + e.amount, 0);
}


// Task 3

let styles = [];
function Style(name, value) {
    this.name = name;
    this.value = value;
    styles.push(this);
}
new Style('color', 'red');
new Style('font-size', '2rem');
new Style('text-align', 'center');
new Style('text-decoration', 'underline');
new Style('background-color', 'rgba(255, 255, 0, 0.5)');
new Style('margin', '2rem auto');
new Style('padding', '1rem');

function printText(...data) {
    data.forEach(text => {document.write(`<p style = "${styles.map(e => `${e.name}:${e.value}`).join('; ')}">${text}</p>`);});
}


// Task 4

let classroom = [];
function Class(name, seats, faculty) {
    this.name = name;
    if (seats < 10 || seats > 20) return 'wrong seats amount';
    this.seats = seats;
    this.faculty = faculty;
    classroom.push(this);
}
for (let i=1; i<11; i++) {
    new Class(`${100+i}`, Math.round(Math.random()*10+10), 'anime science faculty')
}
for (let i=1; i<11; i++) {
    new Class(`${200+i}`, Math.round(Math.random()*10+10), 'pantsushot art faculty')
}
for (let i=1; i<11; i++) {
    new Class(`${300+i}`, Math.round(Math.random()*10+10), 'faculty of applied fisting')
}
for (let i=1; i<11; i++) {
    new Class(`${400+i}`, Math.round(Math.random()*10+10), 'meme history faculty')
}
for (let i=1; i<11; i++) {
    new Class(`${500+i}`, Math.floor(Math.random()*11+10), 'faculty of applied shitposting')
}

let groups = [];
function Group(name, number, faculty) {
    this.name = name;
    this.number = number;
    this.faculty = faculty;
    groups.push(this);
}
for (let i=0; i<15; i++) {
    let r = Math.floor(Math.random()*classroom.length);
    new Group(`${i}`, Math.floor(Math.random()*15 + 6), classroom[r].faculty);
}


function printClasses() {
    classroom.forEach (e => {console.log(`Classroom ${e.name}, ${e.seats} seats, ${e.faculty}`);})
}

function printClassesForFaculty(name) {
    if (classroom.reduce((isEmpty, e) => {
        if (e.faculty === name) {
            console.log(`Classroom ${e.name}, ${e.seats} seats, ${e.faculty}`);
            isEmpty = false;
        }
        return isEmpty;
    }, true)) return 'Wrong faculty name';
}

//Так и не понял, как это должно работать, исходя из ТЗ, поэтому предварительно создал массив групп groups[]
//Предполоагаю, что функция будет задаваться следующим образом: printClassesForGroup(groups[число])
function printClassesForGroup(obj) {
    if (classroom.reduce ((isEmpty, e) => {
        if (e.faculty === obj.faculty && e.seats >= obj.number) {
            console.log(`Classroom ${e.name}, ${e.seats} seats, ${e.faculty}`);
            isEmpty = false;
        }
        return isEmpty;
    }, true)) return `Error occured: Either there is no enough seats in any auditory of groups faculty,  or group's faculty is invalid`;
}

function sortClassesBySeats() {
    classroom.sort(sort);
    function sort(b, a) {
        return a.seats - b.seats;
    }
}

function sortClassesByName() {
    classroom.sort(sort);
    function sort(a, b) {
        return a.name.localeCompare(b.name);
    }
}