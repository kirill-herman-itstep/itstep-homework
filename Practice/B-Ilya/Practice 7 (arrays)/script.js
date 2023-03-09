// === TASK 1 ===
const numberArray = [2, 6, 8, 3, 6, 9, 0, 1, 5, 7];

function showArray(arr) {
    document.write(arr);
}

function showOdd(arr) {
    for (i = 1; i < arr.length; i += 2) {
        document.write(arr[i])
    }
}

function showEven(arr) {
    for (i = 0; i < arr.length; i += 2) {
        document.write(arr[i])
    }
}

function sumInArray(arr) {
    return arr.reduce((acc, value) => acc += value);
}

function maxValue(arr) {
    return Math.max.apply(0, arr);
}

function addInArray(arr, value, index) {
    const begin = arr.slice(0, index);
    const end = arr.slice(index);
    begin.push(value);
    return begin.concat(end);
}

function removeInArray(arr, index) {
    const begin = arr.slice(0, index);
    const end = arr.slice(index + 1);
    return begin.concat(end);
}

// === TASK 2 ===
const randomNumberArray = [13, 6, 24, 9, 56];

function concatWithoutRepeat(arr1, arr2) {
    arr2.forEach((element) => {
        if (!arr1.includes(element)) arr1.push(element)
    })
    return arr1
}

function concatRepeated(arr1, arr2) {
    let repeatedNumbersArray = [];
    arr1.forEach((element) => {
        if (arr2.includes(element) && !repeatedNumbersArray.includes(element)) repeatedNumbersArray.push(element);
    })
    return repeatedNumbersArray;
}

function notRepeated(arr1, arr2) {
    let notRepeatedArray = [];
    arr1.forEach((element) => {
        if (!arr2.includes(element)) notRepeatedArray.push(element)
    })
    return notRepeatedArray;
}

// === TASK 3 ===

let fruits = ['apple', 'grape', 'banana', 'mango', 'lemon', 'cherry', 'pineapple', 'peach'].sort((a, b) => a > b ? 1 : -1)

function showList(arr) {
    document.write('<ul>')
    fruits.forEach((element) => {
        document.write(`<li>${element}</li>`)
    })
    document.write('</ul>')
}

function findItem(itemName, arr) {
    itemName = itemName.toLowerCase();
    return arr.indexOf(itemName)
}