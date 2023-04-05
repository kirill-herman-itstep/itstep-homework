'use strict';
const visibility = document.querySelector('.visibility');
console.log(visibility);

const imageArray = visibility.children;
console.dir(imageArray);
let counter = 0;
if (counter === 0) {
    document.querySelector('.button-back').style.opacity = 0.3;
}

if (counter === imageArray.length - 1) {
    document.querySelector('.button-forward').style.opacity = 0.3;
}

window.addEventListener('mousedown', event => {
    if (event.target === document.querySelector('.button-forward') && counter !== imageArray.length - 1) {
        visibility.children[counter].classList.toggle('notreflect');
        counter++;
        visibility.children[counter].classList.toggle('notreflect');
    }

    if (event.target === document.querySelector('.button-back') && counter !== 0) {
        visibility.children[counter].classList.toggle('notreflect');
        counter--;
        visibility.children[counter].classList.toggle('notreflect');
    }

    if (counter === imageArray.length - 1) {
        document.querySelector('.button-forward').style.opacity = 0.3;
    }

    if (counter !== imageArray.length - 1) {
        document.querySelector('.button-forward').style.opacity = 1;
    }

    if (counter !== 0) {
        document.querySelector('.button-back').style.opacity = 1;
    }

    if (counter === 0) {
        document.querySelector('.button-back').style.opacity = 0.3;
    }
});
