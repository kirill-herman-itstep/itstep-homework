// ************** Task 1 ****************
function raisingNumberToAPower(a, b) {
    if (b === 1) {
        return a;
    } else {
        return a * raisingNumberToAPower(a, b - 1);
    }
}

// ************** Task 2 ****************
function largestDivisor(a, b) {
    if (b > a) return largestDivisor(b, a);
    if (!b) return a;
    return largestDivisor(b, a % b);
}

// ************** Task 3 ****************
function maxNum(n) {
    let maxNumber = 0;
    function biggerNum(n) {
        if (n % 10 > maxNumber) { maxNumber = n % 10 };
        if (n > 10) { biggerNum(parseInt(n / 10)) }
        return maxNumber;
    }
    biggerNum(n)
    return maxNumber;
}

// ************** Task 4 ****************
function simpleNum(number, divider = 2) {
    if (number === 0 || number === 1) return `Число ${number} не является простым`;
    if (number / 2 < divider) return `Число ${number} является простым`;
    if (number % divider == 0) return `Число ${number} не является простым`;
    return simpleNum(number, divider + 1);
}

// ************** Task 5 ****************
function allFactorsNumber(a, arr = [], b = 2) {
    if (b > Math.sqrt(a)) {
        arr.push(a);
        return arr;
    } else if (a % b == 0) {
        arr.push(b);
        allFactorsNumber(a / b, arr, b);
    } else {
        allFactorsNumber(a, arr, ++b);
    }
    return arr.join(" * ");
}

// ************** Task 6 ****************
function fibonachi(number) {
    return number <= 1 ? number : fibonachi(number - 1) + fibonachi(number - 2);
}
