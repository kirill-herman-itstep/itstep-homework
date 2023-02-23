// Task 1.1

let purchaseList = [];

function printPurchaseList() {
    let value = false;
    console.log(`Wished:`)
    for (let i = 0; i < purchaseList.length; i++) {
        if (purchaseList[i].status === false) {
            console.log(`   ${purchaseList[i].name}, ${purchaseList[i].amount}`);
            value = true;
        }
    }
    if (value === false) console.log('   None');
    value = false;
    console.log(`Bought:`)
    for (let i = 0; i < purchaseList.length; i++) {
        if (purchaseList[i].status === true) {
            console.log(`   ${purchaseList[i].name}, ${purchaseList[i].amount}`);
            value = true;
        }
    }
    if (value === false) console.log('   None');
}

function add(data, value = 0) {
    function Product(data, value) {
        this.name = data;
        this.amount = value;
        this.status = false;
        purchaseList.push(this);
    }

    if (typeof(data) !== 'string') return 'Invalid name';
    if (!Number.isInteger(parseInt(value))) return 'Invalid amount';
    value = parseInt(value);
    let i = purchaseList.findIndex(new Function('data', 'return data.name == this'), data);
    if (i === -1) {
        new Product(data, value);
        return 'Added';
    }
    purchaseList[i].amount += value;
    return 'Increased';
}

function buy(data) {
    if (typeof(data) !== 'string') return 'Invalid name';
    let i = purchaseList.findIndex(new Function('data', 'return data.name == this'), data);
    if (i === -1) return `There is no ${data} in your purchase list`;
    purchaseList[i].status = true;
    return 'Bought';
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
    for (let i = 0; i < check.length; i++) {
        console.log(`${check[i].name}, ${check[i].amount} * ${check[i].price}BYN`)
    }
    console.log(`Total: ${summaryPrice()} BYN`)
}

function summaryPrice() {
    let sum = 0;
    for (let i = 0; i < check.length; i++) {
        sum += check[i].amount * check[i].price;
    }
    return sum;
}

function expensivePrice() {
    let price = 0;
    let num = 0;
    for (let i = 0; i < check.length; i++) {
        price = Math.max(price, check[i].amount * check[i].price);
        if (!(price - check[i].amount * check[i].price)) num = i;
    }
    return check[num].name; //В задании покупка, а не товар, поэтому цена*количество.
}

function averagePrice() {
    let price = 0;
    let amount = 0;
    for (let i = 0; i < check.length; i++) {
        price += check[i].price;
        amount += check[i].amount;
    }
    return price / amount;
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

function printText(arr, data) {
    let value = '';
    for (let i = 0; i < arr.length; i++) {
        value += `${arr[i].name}:${arr[i].value};`
    }
    document.write(`<p style = "${value}">${data}</p>`);
}


// Task 4

let classroom = [];
function Class(name, seats, faculty) {
    this.name = name;
    if (seats < 10 || seats > 20) return;
    this.seats = seats;
    this.faculty = faculty;
    classroom.push(this);
}
for (let i = 1; i < 11; i++) {
    new Class(`${100+i}`, Math.floor(Math.random() * 11 + 10), 'anime science faculty')
}
for (let i=1; i<11; i++) {
    new Class(`${200+i}`, Math.floor(Math.random() * 11 + 10), 'pantsushot art faculty')
}
for (let i=1; i<11; i++) {
    new Class(`${300+i}`, Math.floor(Math.random() * 11 + 10), 'faculty of applied fisting')
}
for (let i=1; i<11; i++) {
    new Class(`${400+i}`, Math.floor(Math.random() * 11 + 10), 'meme history faculty')
}
for (let i=1; i<11; i++) {
    new Class(`${500+i}`, Math.floor(Math.random()  *11 + 10), 'faculty of applied shitposting')
}

let groups = [];
function Group(name, number, faculty) {
    this.name = name;
    this.number = number;
    this.faculty = faculty;
    groups.push(this);
}
for (let i = 0; i < 15; i++) {
    let r = Math.floor(Math.random() * classroom.length);
    new Group(`${i}`, Math.floor(Math.random() * 15 + 6), classroom[r].faculty);
}


function printClasses() {
    for(let i = 0; i < classroom.length; i++){
        console.log(`Classroom ${classroom[i].name}, ${classroom[i].seats} seats, ${classroom[i].faculty}`);
    }
}

function printClassesForFaculty(name) {
    let data = false;
    for (let i = 0; i < classroom.length; i++) {
        if (classroom[i].faculty === name) {
            console.log(`Classroom ${classroom[i].name}, ${classroom[i].seats} seats, ${classroom[i].faculty}`);
            data = true;
        }
    }
    if (data === false) return 'Wrong faculty name';
}

//Так и не понял, как это должно работать, исходя из ТЗ, поэтому предварительно создал массив групп groups[]
//Предполоагаю, что функция будет задаваться следующим образом: printClassesForGroup(groups[число])
function printClassesForGroup(obj) {
    let data = false;
    for (let i = 0; i < classroom.length; i++) {
        if (classroom[i].faculty === obj.faculty && classroom[i].seats >= obj.number) {
            console.log(`Classroom ${classroom[i].name}, ${classroom[i].seats} seats, ${classroom[i].faculty}`);
            data = true;
        }
    }
    if (data === false) return `Error occured:    Either there is no enough seats in any auditory of groups faculty    Or group's faculty is invalid`;
}

function sortClassesBySeats() {
    function sort(b, a) {
        return a.seats - b.seats;
    }
    
    classroom.sort(sort);
}

function sortClassesByName() {
    function sort(a, b) {
        return a.name.localeCompare(b.name);
    }

    classroom.sort(sort);
}