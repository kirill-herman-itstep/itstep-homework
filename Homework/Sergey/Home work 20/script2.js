'use strict'

const computerList = document.querySelector('.this-PC');

computerList.addEventListener('click', event => {
    switch (true) {
        case event.target.className === 'this-PC-controller':
            event.target.parentNode.children[1].classList.toggle('not-reflect')
            break;
        case event.target.className === 'disk-C-controller':
            event.target.parentNode.children[1].classList.toggle('not-reflect')
            break;
        case event.target.className === 'disk-D-controller':
            event.target.parentNode.children[1].classList.toggle('not-reflect')
            break;
        case event.target.className === 'disk-E-controller':
            event.target.parentNode.children[1].classList.toggle('not-reflect')
            break;
    }
})
