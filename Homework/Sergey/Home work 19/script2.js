'use strict'

document.querySelector('.container>button').addEventListener('click', event => {
    document.getElementsByClassName('modale')[0].style.opacity = 1;
})

document.querySelector('.modale>button').addEventListener('click', event => {
    document.getElementsByClassName('modale')[0].style.opacity = 0;
})