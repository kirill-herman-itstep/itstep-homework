'use strict'

document.querySelector('.field').addEventListener('click', event => {
    if (event.pageX > 70 && event.pageY > 70 && event.pageX < (window.innerWidth - 70) && event.pageY < (window.innerHeight - 70) ) {
        document.querySelector('.ball').style.top = event.pageY + 'px'
        document.querySelector('.ball').style.left = event.pageX + 'px'
        document.querySelector('.ball').style.transition = 1 + 's'
    }
})