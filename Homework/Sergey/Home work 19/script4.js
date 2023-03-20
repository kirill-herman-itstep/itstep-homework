'use strict'

let counter = 0;
document.querySelector('.traffic-light-controller').addEventListener('click', event => {
    counter++;
    if (counter === 1) {
        document.querySelector('.red').style.backgroundColor = '#FBF2E9';
        document.querySelector('.yellow').style.backgroundColor = 'yellow';
        counter++
    }

    if (counter === 3) {
        document.querySelector('.yellow').style.backgroundColor = '#FBF2E9';
        document.querySelector('.green').style.backgroundColor = 'green';
        counter++;
    }

    if (counter === 5) {
        document.querySelector('.green').style.backgroundColor = '#FBF2E9';
        document.querySelector('.red').style.backgroundColor = 'red';
        counter = 0;
    }
})