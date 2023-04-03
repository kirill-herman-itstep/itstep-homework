'use strict'

const hrefArray = document.getElementsByTagName('a');

for (const value of hrefArray) {
    console.dir(value.innerText.startsWith('http'))
    if (value.innerText.startsWith('http')) {
        value.classList.add('dashed-element');
    }
}