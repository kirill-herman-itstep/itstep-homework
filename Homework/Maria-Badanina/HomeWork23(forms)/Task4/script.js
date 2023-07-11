const form = document.querySelector('form');
const orders = [];

document.querySelectorAll('.books button').forEach(button => {
    button.addEventListener('click', e => {
        const book = e.target.closest('.book');
        form.bookName.value = book?.querySelector('.name-book').innerHTML;
    })
});

form.querySelector('button').addEventListener('click', () => {
    if (Date.now() > (Date.parse(form.deliveryDate.value) + 24 * 60 * 60 * 1000)) {
        form.deliveryDate.setCustomValidity("Incorrect date. We don't ship orders to the past.");
    } else {
        form.deliveryDate.setCustomValidity('');
    }
})

form.addEventListener('submit', e => {
    e.preventDefault();

    if (!form.bookName.value) {
        return;
    }

    orders.push({
        bookName: form.bookName.value,
        quantityBook: form.quantityBook.value,
        addresseeName: form.addresseeName.value,
        deliveryAddress: form.deliveryAddress.value,
        deliveryDate: form.deliveryDate.value,
        comment: form.comment.value
    });

    document.querySelector('.modal div').innerHTML = `${form.addresseeName.value}, thanks for the order!
    <br>
    <br>
    Book "${form.bookName.value}" will be delivered on ${getDate(form.deliveryDate.value)} to ${form.deliveryAddress.value}`;

    document.querySelector('.shadow').classList.remove('none');
    document.body.style.overflow = 'hidden';
});

function getDate(date) {
    date = date.split('-');
    return `${date[2]}.${date[1]}.${date[0]}`;
}

document.querySelector('.modal button').addEventListener('click', () => {
    document.querySelector('.shadow').classList.add('none');
    document.body.style.overflow = '';
    
    form.querySelectorAll('input, textarea').forEach(elem => {
        elem.value = '';
    })
})