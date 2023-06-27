'use strict';

const checkboxArray = Array.from(document.querySelectorAll('input[type="checkbox"]'));

class Tickets {
    constructor(date, direction) {
        this.date = date;
        this.direction = direction;
        this.purchasedtTickets = [];
        this.price = '15';
    }

    buy(text = '') {
        if (!this.purchasedtTickets.find(item => item === text)) {
            this.purchasedtTickets.push(text);
        }
    }

    showBuyTickets() {
        checkboxArray.forEach(item => {
            item.disabled = false;
            item.classList.remove('reserve');
            item.parentElement.classList.remove('reserve-parrent');
        });

        checkboxArray.forEach(item =>
            this.purchasedtTickets.forEach(value => {
                if (value === item.id) {
                    item.disabled = true;
                    item.classList.add('reserve');
                    item.parentElement.classList.add('reserve-parrent');
                }
            })
        );
    }

    showPrice() {
        return this.purchasedtTickets.length * +this.price;
    }
}

const ticketsCollection = [];

const search = document.querySelector('.search');
search.addEventListener('click', event => {
    const userDate = document.querySelector('#searchDate').value;
    const userDirection = Array.from(document.querySelector('#searchDirrection')).find(item => item.selected).innerText;
    const userTickets = ticketsCollection.filter(item => item.date === userDate).find(item => item.direction === userDirection);

    if (userTickets === undefined && userDate !== '') {
        const newTickets = new Tickets(userDate, userDirection);
        newTickets.showBuyTickets();
        ticketsCollection.push(newTickets);
    }
    if (userTickets !== undefined) {
        userTickets.showBuyTickets();
    }

    const cost = ticketsCollection.reduce((acc, item) => (acc += item.showPrice()), 0);
    document.querySelector('#price').innerText = cost + '$';
});

const book = document.querySelector('.book');
book.addEventListener('click', event => {
    const userDate = document.querySelector('#searchDate').value;
    const userDirection = Array.from(document.querySelector('#searchDirrection')).find(item => item.selected).innerText;
    const userTickets = ticketsCollection.filter(item => item.date === userDate).find(item => item.direction === userDirection);

    if (userTickets === undefined && userDate !== '') {
        const newTickets = new Tickets(userDate, userDirection);
        newTickets.showBuyTickets();
        ticketsCollection.push(newTickets);
        checkboxArray.filter(item => item.checked).forEach(item => newTickets.buy(item.id));
        checkboxArray.forEach(item => (item.checked = false));
        newTickets.showBuyTickets();
    }

    if (userTickets !== undefined) {
        checkboxArray.filter(item => item.checked).forEach(item => userTickets.buy(item.id));
        checkboxArray.forEach(item => (item.checked = false));
        userTickets.showBuyTickets();
    }

    const cost = ticketsCollection.reduce((acc, item) => (acc += item.showPrice()), 0);
    document.querySelector('#price').innerText = cost + '$';
});

const showMyTickets = document.querySelector('#showMyTickets');
showMyTickets.addEventListener('click', event => {
    const table = document.querySelector('.table-my-tickets');
    Array.from(table.children).forEach(item => item.remove());
    ticketsCollection.forEach(item =>
        item.purchasedtTickets.forEach(value => {
            const tr = document.createElement('tr');
            const tdDirection = document.createElement('td');
            const tdDate = document.createElement('td');
            const tdPlase = document.createElement('td');

            tdDirection.innerText = item.direction;
            tdDate.innerText = item.date;
            tdPlase.innerText = value;
            tr.append(tdDirection, tdDate, tdPlase);

            document.querySelector('.table-my-tickets').append(tr);
        })
    );
    document.querySelector('.info-my-tickets').classList.remove('norefresh');
});
