'use strict';
let currentElement;
window.addEventListener('mousedown', event => {
    switch (true) {
        case currentElement === undefined:
            event.target.nextElementSibling.classList.toggle('noreflect');
            currentElement = event.target;
            break;
        case currentElement === event.target:
            event.target.nextElementSibling.classList.toggle('noreflect');
            currentElement = undefined;
            break;
        case currentElement !== event.target:
            event.target.nextElementSibling.classList.toggle('noreflect');
            currentElement.nextElementSibling.classList.toggle('noreflect');
            currentElement = event.target;
            break;
    }
});
