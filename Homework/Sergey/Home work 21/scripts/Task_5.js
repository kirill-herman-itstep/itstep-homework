'use strict';

function getMonthOfText(month, year) {
    const arrayMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${arrayMonth[month - 1]}, ${year}`;
}

function getQuantityDay(month, year) {
    switch (month) {
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
            return 31;
        case '4':
        case '6':
        case '9':
        case '11':
            return 30;
        case '2':
            if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
                return 29;
            } else return 28;
    }
}

function generateTable(event) {
    const userMonth = document.querySelector('#userMonth').value;
    const userYear = document.querySelector('#userYear').value;
    document.querySelector('.text-month').innerText = getMonthOfText(userMonth, userYear);
    let numberFirstDayMonth = new Date(`${userYear}-${userMonth}-01`).getDay();
    const monthCode = [];
    const firstWeek = [];
    let counter = 1;
    let counterDays = getQuantityDay(userMonth, userYear);

    function generateWithoutFirstWeek() {
        while (counterDays >= 7) {
            const week = [];
            for (let i = 0; i < 7; i++) {
                week.push(`${counter}`);
                counter++;
                counterDays--;
            }
            monthCode.push(week);
        }

        if (counterDays > 0) {
            const lastweek = [];
            for (let i = 0; i < counterDays; i++) {
                lastweek.push(`${counter}`);
                counter++;
            }

            for (let i = 0; i < 7 - counterDays; i++) {
                lastweek.push('');
            }
            monthCode.push(lastweek);
        }
    }

    if (numberFirstDayMonth > 0) {
        for (let i = 0; i < numberFirstDayMonth - 1; i++) {
            firstWeek.push('');
        }
        for (let i = numberFirstDayMonth; i <= 6; i++) {
            firstWeek.push(`${counter}`);
            counter++;
            counterDays--;
        }
        firstWeek.push(counter);

        monthCode.push(firstWeek);
        counter++;
        counterDays--;

        generateWithoutFirstWeek();
        const result = monthCode.map(item => `<tr>${item.map(item => `<td>${item}</td>`).join('\n')}</tr>`).join('\n');
        document.querySelector('.table-month>tbody').innerHTML = result;
    } else {
        for (let i = 0; i < 6; i++) {
            firstWeek.push('');
        }
        firstWeek.push(counter);

        monthCode.push(firstWeek);
        counter++;
        counterDays--;

        generateWithoutFirstWeek();
        const result = monthCode.map(item => `<tr>${item.map(item => `<td>${item}</td>`).join('\n')}</tr>`).join('\n');
        document.querySelector('.table-month>tbody').innerHTML = result;
    }
}

const generateMonth = document.querySelector('.buttun-generate');

generateMonth.addEventListener('click', generateTable);
