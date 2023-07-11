class BookedTicket {
    constructor(direction, date, seat) {
        this.direction = direction;
        this.date = date;
        this.seat = seat;
    }

    getInformationInTable() {
        const tr = document.createElement('tr');
        const tdDirection = document.createElement('td');
        const tdDate = document.createElement('td');
        const tdSeat = document.createElement('td');

        tdDirection.innerHTML = this.direction;
        tdDate.innerHTML = this.date;
        tdSeat.innerHTML = this.seat;

        tr.append(tdDirection, tdDate, tdSeat);
        return tr;
    }
}

const searchForm = document.forms[0];
const bookedTickets = [];

let directionsMock = [
    {name: "A - B", price: 17},
    {name: "A - C", price: 40},
    {name: "B - A", price: 17},
    {name: "B - C", price: 23},
    {name: "C - A", price: 40},
    {name: "C - B", price: 23},
];

const formSearch = document.forms[0];

for (let i = 0; i < directionsMock.length; i++) {
    const option = document.createElement('option');
    option.value = directionsMock[i].name;
    option.innerHTML = directionsMock[i].name;
    formSearch.direction.append(option);
}

const conteaner = document.querySelector('body > div.conteaner-book-form');

formSearch.addEventListener('submit', e => {
    e.preventDefault();

    const direction = directionsMock.find(elem => elem.name === formSearch.direction.value);
    const date = formSearch.date.value.split('-').join('.');
    viewInformation(direction, date);
});

function viewInformation(direction, date) {
    conteaner.innerHTML = '';

    const tmpBookForm = document.querySelector('template.tmp-book-form').content.cloneNode(true);
    conteaner.append(tmpBookForm);

    showBookedTickeds();

    const formBook = document.forms[1];

    const flightTickets = bookedTickets.filter(ticket => ticket.date === date && ticket.direction === direction.name);      
    flightTickets.forEach((ticket) => {
        formBook.site[ticket.seat - 1].disabled = true;
    });

    formBook.addEventListener('submit', e => e.preventDefault());

    const resirvationSites = [];

    formBook.querySelector('.sites-28').addEventListener('change', e => {
        if (e.target.checked) {
            resirvationSites.push(e.target.value);
        } else {
            const index = resirvationSites.indexOf(e.target.value);
            resirvationSites.splice(index, 1);
        }
        
        formBook.querySelector('.price').innerHTML = `${direction.price * resirvationSites.length}$`;
    });

    formBook.querySelector('.book').addEventListener('click', e => {
        resirvationSites.sort;
        resirvationSites.forEach(seat => {
            bookedTickets.push(new BookedTicket(direction.name, date, seat));
        });
        viewInformation(direction, date);
    });
}

function showBookedTickeds() {
    if (bookedTickets.length === 0) return; 

    const tmpBookTickets = document.querySelector('template.tmp-booked-tickets').content.cloneNode(true);
    conteaner.append(tmpBookTickets);
    const tbody = conteaner.querySelector('.tickets tbody');
    
    bookedTickets.forEach(ticket => {
        tbody.append(ticket.getInformationInTable());
    })
}
