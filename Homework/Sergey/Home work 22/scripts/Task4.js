'use strict';

const buttons = Array.from(document.querySelectorAll('.select'));

buttons.forEach(item => {
    item.addEventListener('click', addTittleBook);
});

function addTittleBook(event) {
    document.querySelector('#tittleBook').value = event.target.parentNode.children[1].innerText;
}

const buy = document.querySelector('.buy');

buy.addEventListener('click', showMessage);

function showMessage(event) {
    const tittleBook = document.querySelector('#tittleBook').value;
    const userName = document.querySelector('#userName').value;
    const dateDelivery = document.querySelector('#deliveryDate').value.split('-').reverse().join('.');
    const quantityBook = document.querySelector('#quantityBook').value;
    const addressDelivery = document.querySelector('#deliveryAddress').value;
    if (tittleBook !== '' && userName !== '' && dateDelivery !== '' && quantityBook !== '' && addressDelivery !== '') {
        const divMessage = document.querySelector('.message');
        document.querySelector('.thanksForOrder').innerText = `${userName}, спасибо за Ваш заказ! `;
        document.querySelector('.messageInfo').innerText = `Книга "${tittleBook}" в количестве ${quantityBook} шт. будет доставлена ${dateDelivery} по адресу ${addressDelivery}`;
        document.querySelector('.container').classList.toggle('norefresh');
        divMessage.classList.toggle('norefresh');
    }
}
