// === TASK 1 ===
const inputField = document.querySelector('.input_name input');

inputField.addEventListener('keypress', (event) => {
    if (/[a-zA-z]/.test(event.key)) {
        return true
    } else event.preventDefault(); 
})

// === TASK 2 === 
const openModalWindowButton = document.querySelector('.open_modal');
const closeModalWindowButton = document.querySelector('.modal_window button')
const modalWindow = document.querySelector('.modal_window');

openModalWindowButton.addEventListener('click', () => {
    modalWindow.style.display = 'flex';
})

closeModalWindowButton.addEventListener('click', () => {
    modalWindow.style.display = 'none';
})

// === TASK 3 ===
const fieldBorder = document.querySelector('.field .fieldBorder')
const footballBall = document.querySelector('.field .ball');

fieldBorder.addEventListener('click', (event) => {
    console.log(event.offsetY);
    if (event.offsetX > (fieldBorder.clientWidth - footballBall.offsetWidth / 2)) {
        footballBall.style.left = fieldBorder.clientWidth - fieldBorder.offsetLeft / 4 + 'px'
    } else if (event.offsetX < (footballBall.offsetWidth / 2)) {
        footballBall.style.left = fieldBorder.offsetLeft + 'px'
    } else footballBall.style.left = event.clientX - footballBall.offsetWidth / 2 + 'px';

    if (event.offsetY > (fieldBorder.clientHeight - footballBall.offsetHeight)) {
        footballBall.style.top = fieldBorder.clientHeight - fieldBorder.offsetTop * 3 + 'px'
    } else if (event.offsetY < footballBall.offsetHeight / 2) {
        footballBall.style.top = fieldBorder.offsetTop + 'px'
    } else footballBall.style.top = event.clientY - footballBall.offsetHeight / 2 + 'px';

})
// === TASK 4 ===
const redLight = document.querySelector('.lights .red');
const yellowLight = document.querySelector('.lights .yellow');
const greenLight = document.querySelector('.lights .green');
const switchButton = document.querySelector('.traffic_lights button');
let i = 0;

function makeAllGray() {
    redLight.style.backgroundColor = 'gray';
    yellowLight.style.backgroundColor = 'gray';
    greenLight.style.backgroundColor = 'gray';
}

switchButton.addEventListener('click', () => {
    switch (i) {
        case 0:
            makeAllGray()
            redLight.style.backgroundColor = 'red';
            i++
            break;
        case 1:
            makeAllGray()
            yellowLight.style.backgroundColor = 'yellow';
            i++
            break;
        case 2: 
            makeAllGray()
            greenLight.style.backgroundColor = 'green';
            i = 0;
            break;
    }
})

// TASK 5
const listItems = document.querySelectorAll('.mark_list_item li');

listItems.forEach((element, index) => {
    element.addEventListener('click', () => {
        listItems.forEach((e) => e.style.backgroundColor = 'white')
        listItems[index].style.backgroundColor = 'gold'
    })
})

// TASK 6
const tip = document.querySelector('.tooltip')
const buttons = document.querySelectorAll('.custom_tooltip_buttons .int_button');


buttons.forEach((element) => {
    element.addEventListener('mouseover', () => {
        tip.style.display = 'flex';
        tip.style.left = `${element.offsetLeft}px`;
        if (element.offsetTop > 30) {
            tip.style.top = `${element.offsetTop - 25}px`
        } else {tip.style.top = `${element.offsetTop + 25}px`}
    })

    element.addEventListener('mouseout', () => {
        tip.style.display = '';
    })
})