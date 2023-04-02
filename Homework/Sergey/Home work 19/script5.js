'use strict'

document.querySelector('ol').addEventListener('click', event => {
    for (const li of document.querySelectorAll('li')) {
        li.style.background = '#FBF2E9'
    }
    if (event.target.localName !== 'li') event.target.style.background = '#FBF2E9';
    else event.target.style.background = '#FFA984'
})