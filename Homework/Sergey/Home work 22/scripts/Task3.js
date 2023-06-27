'use strict';

function getText(event) {
    const userText = document.querySelector('textarea').value;
    const divText = document.querySelector('.finish-text');
    divText.innerText = userText;
    const textAlign = radioButton.find(item => item.checked).value;
    switch (true) {
        case textAlign === 'right':
            divText.style.textAlign = 'right';
            break;
        case textAlign === 'left':
            divText.style.textAlign = 'left';
            break;
        case textAlign === 'justify':
            divText.style.textAlign = 'justify';
            break;
    }

    checkboxes
        .filter(item => item.checked)
        .forEach(item => {
            if (item.value === 'bold') divText.style.fontWeight = 'bold';
            if (item.value === 'underline') divText.style.textDecoration = 'underline';
            if (item.value === 'italic') divText.style.fontStyle = 'italic';
        });

    document.querySelector('.container').classList.toggle('noreflect');
    document.querySelectorAll('.container.noreflect')[1].classList.toggle('noreflect');
}

const radioButton = [];
document.querySelectorAll('.text-align input').forEach(item => radioButton.push(item));
const checkboxes = [];
document.querySelectorAll('.font-style input').forEach(item => checkboxes.push(item));

const button = document.querySelector('.show-text');
button.addEventListener('click', getText);
