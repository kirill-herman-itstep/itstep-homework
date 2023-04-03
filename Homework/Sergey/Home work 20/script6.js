'use strict'

const editWindow = document.querySelector('.content-window');
const flag = document.querySelector('.flag');
let sensor = false;

function editSizes(event) {
    editWindow.style.width = event.pageX - flag.offsetWidth / 2 + 'px';
    editWindow.style.height = event.pageY - flag.offsetHeight / 2 + 'px';
}

flag.addEventListener('mousedown', event => {
    editSizes(event);
    sensor = true;
})

document.addEventListener('mousemove', event => {
    if (sensor) editSizes(event);
})

flag.addEventListener('mouseup', event => {
    if (sensor) editSizes(event);
    sensor = false;
})