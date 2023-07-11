document.addEventListener('submit', e => {
    e.preventDefault();
});

let currentDate = null;

document.forms[0].querySelector('button').addEventListener('click', e => {
    const inputs = document.forms[0].elements;
    currentDate = new Date(inputs.year.value, inputs.month.value - 1);

    if (isNaN(currentDate)) return
    viewCurrentDate();
    viewCalendar();
});

function viewCurrentDate() {
    const divCurrentDate = document.querySelector('.currentDate');
    const month = getMonth(currentDate.getMonth());
    divCurrentDate.innerHTML = `${month}, ${currentDate.getFullYear()}`
}

function getMonth(month) {
    switch (month) {
        case 0: return 'January';
        case 1: return 'February';
        case 2: return 'March';
        case 3: return 'April';
        case 4: return 'May';
        case 5: return 'June';
        case 6: return 'July'
        case 7: return 'August';
        case 8: return 'September';
        case 9: return 'October';
        case 10: return 'November';
        case 11: return 'December';
    }
}

function viewCalendar() {
    const tBody = document.querySelector('table').tBodies[0];

    const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
    const lastDay = (nextMonth - currentDate) / 24 / 60 / 60 / 1000;
    let dayMonth = 1;
    const day = (currentDate.getDay() || 7) - 1;

    const countRows = (lastDay + day) % 7 === 0 ? Math.trunc((lastDay + day) / 7) : Math.trunc((lastDay + day) / 7) + 1; 
    const rows = createRows(countRows);
    tBody.innerHTML = '';
    tBody.append(...rows);

    for (let i = 0; i < 7; i++) {
        if (i >= day) {
            rows[0].cells[i].innerHTML = dayMonth;
            dayMonth++;
        }
    }

    for (let i = 1; i < rows.length; i++) {
        for (let j = 0; j < 7; j++) {
            if (dayMonth <= lastDay) {
                rows[i].cells[j].innerHTML = dayMonth;
                dayMonth++;
            }
        }
    }
}

function createRows(countRows) {
    const rows = [];
    for (let i = 0; i < countRows; i++) {
        rows.push(document.createElement('tr'));
        for (let j = 0; j < 7; j++) {
            rows[i].append(document.createElement('td'));
        }
    }
    return rows;
}