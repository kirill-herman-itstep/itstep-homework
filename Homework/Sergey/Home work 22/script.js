'use strict';

const send = document.querySelector('.send');

send.addEventListener('click', event => {
    const userName = document.querySelector('#userName').value;
    const userMessage = document.querySelector('#userMessage').value;

    const divHeaderLeft = document.createElement('div');
    divHeaderLeft.classList.add('header-left');
    divHeaderLeft.innerText = userName;

    const today = new Date();
    const divHeaderRight = document.createElement('div');
    divHeaderRight.classList.add('header-right');
    divHeaderRight.innerText = today.toLocaleString().split(',').reverse().join(' ');

    const divHeaderContent = document.createElement('div');
    divHeaderContent.classList.add('header-content');
    divHeaderContent.prepend(divHeaderLeft);
    divHeaderContent.append(divHeaderRight);

    const divMainContent = document.createElement('div');
    divMainContent.classList.add('main-content');
    divMainContent.innerText = userMessage;

    const li = document.createElement('li');
    li.prepend(divHeaderContent);
    li.append(divMainContent);
    const liNodes = document.querySelectorAll('li');
    liNodes[liNodes.length - 1].after(li);
    document.querySelector('#userName').value = '';
    document.querySelector('#userMessage').value = '';
});
