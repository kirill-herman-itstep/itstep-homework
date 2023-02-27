// Задание №1
console.log('Задание №1');
const orange = {
    nameProduct: 'Orange',
    quantity: 5,
    status: true,
};
const apple = {
    nameProduct: 'Apple',
    quantity: 7,
    status: true,
};

const bread = {
    nameProduct: 'Bread',
    quantity: 1,
    status: false,
};

const milk = {
    nameProduct: 'Milk',
    quantity: 2,
    status: false,
};

const juice = {
    nameProduct: 'Juice',
    quantity: 1,
    status: false,
};

const purchaseList = [orange, apple, bread, milk];

// Функция сортировки на купленные некупленные

const showProducts = array => {
    const boughtproducts = array.filter(item => item.status === true);
    const unboughtproducts = array.filter(item => item.status === false);
    
    console.log('Купленные:');
    boughtproducts.forEach((item, index) => console.log(`${index + 1}. ${item.nameProduct} - ${item.quantity} шт.`))
    console.log('Некупленные:');
    unboughtproducts.forEach((item, index) => console.log(`${index + 1}. ${item.nameProduct} - ${item.quantity} шт.`))
}

showProducts(purchaseList);

// Функция добавления продукта в массив

const addPurchase = (product, array) => {
    const foundProduct = array.find(item => item.nameProduct === product.nameProduct);
    const foundProductIndex = array.findIndex(item => item.nameProduct === product.nameProduct);
    if(foundProduct !== undefined) array[foundProductIndex].quantity += product.quantity;
    else array.push(product);
    return array
}

// console.log(addPurchase(milk, purchaseList));
// console.log(addPurchase(juice, purchaseList));

// Функция покупки продукта

const productPurchase = (product, array = []) => {
    if (array.includes(product)) {
        array.map((item) => {
            if (item.nameProduct === product.nameProduct) item.status = true;
        })
    } else {
        return 'Данной покупки нет в списке';
    }

    return array
}

// console.log(productPurchase(milk, purchaseList));

// Задание №2
console.log('\nЗадание №2');

class CheckСargo {
    constructor(productName, quantity, price) {
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
    }
}

const sausage = new CheckСargo('Sausage', 1, 20);
const soap = new CheckСargo('Soap', 3, 5);
const towel = new CheckСargo('Towel', 2, 15);
const toiletWater = new CheckСargo('Toilet water', 1, 60);

const purchaseReceipt = [sausage, soap, towel, toiletWater];

// // Распечатка чека

const checkPrintout = (array) => {
    return array.map((item, index) => item = `${index + 1}. ${item.productName}, цена: ${item.price} byn, количество: ${item.quantity} шт, стоимость: ${item.price * item.quantity} byn`)
}

console.log('Распечатка чека');
checkPrintout(purchaseReceipt).forEach(item => {
    console.log(item);
});

// Расчет суммы чека

const checkAmount = (array) => {
    let amount = array.reduce((acc, item) => acc += item.price * item.quantity, 0)
    return `Общая сумма чека составляет ${amount} byn`
}

console.log(checkAmount(purchaseReceipt));

// Самая дорогая покупка в чеке

const maxAmount = (array) => {
    const newArray = array.slice();
    newArray.sort((a, b) =>  b.price * b.quantity - a.price * a.quantity);

    return newArray[0]
}
console.log(`Самая дорогая покупка - ${maxAmount(purchaseReceipt).productName} стоимостью ${maxAmount(purchaseReceipt).price * maxAmount(purchaseReceipt).quantity} byn`);

// Средняя стоимость одного товара в чеке 

const averagePriceCheck = (array) => {
    const averagePrice = array.reduce((acc,item) => acc += (item.price * item.quantity) / array.length, 0);
    return averagePrice
}

console.log(`Средняя стоимость одного товара составляет ${Math.round(averagePriceCheck(purchaseReceipt) * 100) / 100} byn`);

// Задание №3
console.log('\nЗадание №3');
console.log('Текст выведен на экран');

const userText = 'Этот текст написан на JavaScript';

const styleParagraph = [
    {'font-size': '3rem'},
    {color: 'purple'},
    {display: 'flex'},
    {'justify-content': 'center'},
    {'text-decoration': 'solid purple 3px underline'},
];

const writeText = (text, array) => {
    const arrayStyle = array.map(item => item = Object.keys(item) + ':' + item[Object.keys(item)]);
    document.write(`<p style = '${arrayStyle.join('; ') + ';'}'>${text}</p>`);
}

writeText(userText, styleParagraph);

// Задание №4
console.log('\nЗадание №4');

class Auditorium {
    constructor(auditoriumName, seatingCapacity, faculty) {
        this.auditoriumName = auditoriumName;
        this.seatingCapacity = seatingCapacity;
        this.faculty = faculty;
    }
}

const audienceMagicGryffindor = new Auditorium('Audience magic Gryffindor', 20, 'Gryffindor');
const audienceMagicSlytherin = new Auditorium('Audience magic Slytherin', 16, 'Slytherin');
const audienceMagicRavenclaw = new Auditorium('Audience magic Ravenclaw', 14, 'Ravenclaw');
const audienceMagicHufflepuff = new Auditorium('Audience magic Hufflepuf', 18, 'Hufflepuff');
const potteryAudienceGryffindor = new Auditorium('Pottery audience Gryffindor', 20, 'Gryffindor');
const potteryAudienceSlytherin = new Auditorium('Pottery audience Slytherin', 14, 'Slytherin');
const potteryAudienceRavenclaw = new Auditorium('Pottery audience Ravenclaw', 18, 'Ravenclaw');
const potteryAudienceHufflepuff = new Auditorium('Pottery audience Hufflepuff', 16, 'Hufflepuff');
const astronomyGryffindor = new Auditorium('Astronomy audience Gryffindor', 12, 'Gryffindor');
const astronomySlytherin = new Auditorium('Astronomy audience Slytherin', 14, 'Slytherin');
const astronomyRavenclaw = new Auditorium('Astronomy audience Ravenclaw', 16, 'Ravenclaw');
const astronomyHufflepuff = new Auditorium('Astronomy audience Hufflepuff', 20, 'Hufflepuff');

const audienceHogwarts = [audienceMagicGryffindor, audienceMagicSlytherin, audienceMagicRavenclaw, audienceMagicHufflepuff, potteryAudienceGryffindor, potteryAudienceSlytherin, potteryAudienceRavenclaw, potteryAudienceHufflepuff, astronomyGryffindor, astronomySlytherin, astronomyRavenclaw, astronomyHufflepuff];

// Функция списка аудиторий
let counter5 = 1; //Номер вызванной функции

const showAudince = (array) => {
    console.log(`${counter5}) Список аудиторий:`);
    array.forEach((item, index) => console.log(`${index + 1}. Аудитория "${item.auditoriumName}", мест: ${item.seatingCapacity}, факультет: "${item.faculty}"`));
    counter5++;
}

showAudince(audienceHogwarts);

// Функция списка аудиторий факультета

const showAudinceFaculty = (array, nameFaculty) => {
    console.log(`${counter5}) Аудитории факультета "${nameFaculty}":`);
    array.forEach(item => {
        if (item.faculty === nameFaculty) {
            console.log(`Аудитория "${item.auditoriumName}", мест: ${item.seatingCapacity}, факультет: "${item.faculty}"`);
        }
    });
    counter5++;
}

console.log('\n');
showAudinceFaculty(audienceHogwarts, 'Hufflepuff');

// Новая группа
const harryGroup = [{
    nameGroup: 'Harry Potter group',
    studentPopulation: 16,
    faculty: 'Gryffindor',
}];

// Функция определения аудиторий для группы

const showAudinceGroup = (array, group) => {
    let audienceGroup = array.filter((item) => (item.faculty === group[0].faculty && item.seatingCapacity >= group[0].studentPopulation));
    console.log(`${counter5}) Группе "${group[0].nameGroup}" факультета "${group[0].faculty}" для обучения подойдут аудитории:`);
    audienceGroup.forEach((item,index) => console.log(`${index + 1}. Аудитория "${item.auditoriumName}" (количество мест - ${item.seatingCapacity}) факультета "${item.faculty}"`));
    counter5++;
}

console.log('\n');
showAudinceGroup(audienceHogwarts, harryGroup);

// Функция сортировки аудиторий по количеству мест

const showAudiencePlace = (array) => {
    newArray = array.slice()
    newArray.sort((a, b) => a.seatingCapacity - b.seatingCapacity);
    console.log(`${counter5}) Список аудиторий по возрастанию количества мест:`);
    newArray.forEach((item, index) => console.log(`${index + 1}. Аудитория "${item.auditoriumName}" факультета "${item.faculty}" (количество мест - ${item.seatingCapacity})`));
    counter5++;
};

console.log('\n');
showAudiencePlace(audienceHogwarts);

// Функция сортировки аудиторий по алфавиту

const showAudienceAlphabet = (array) => {
    newArray = array.slice()
    newArray.sort((a, b) => a.auditoriumName.localeCompare(b.auditoriumName));
    console.log(`${counter5}) Список аудиторий по алфавиту:`);
    newArray.forEach((item, index) => console.log(`${index + 1}. "${item.auditoriumName}" факультета "${item.faculty}" (количество мест - ${item.seatingCapacity})`));
    counter5++;
};
console.log('\n');
showAudienceAlphabet(audienceHogwarts);