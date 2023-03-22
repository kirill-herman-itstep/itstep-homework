'use strict'

let counerClick = 0;
let clickOne, clickTwo;

document.querySelector('ol').addEventListener('click', event => {
    if (!event.ctrlKey && !event.shiftKey) {
        for (const li of document.querySelectorAll('li')) {
            li.classList.remove('add-background')
        }
        if (event.target.localName !== 'li') event.target.style.background = '#FBF2E9';
        else event.target.classList.toggle('add-background')
        counerClick = 0;
        clickOne = undefined;
        clickTwo = undefined;
    }

    if (event.ctrlKey && !event.shiftKey) {
        if (event.target.localName !== 'li') event.target.style.background = '#FBF2E9'; 
        event.target.classList.toggle('add-background')
        counerClick = 0;
        clickOne = undefined;
        clickTwo = undefined;
    }

    if (!event.ctrlKey && event.shiftKey) {
        counerClick++;
        const elementArray = [];
        for (const value of document.querySelectorAll('ol li')) {
            elementArray.push(value)
        }

        switch (counerClick) {
            case 1:
                clickOne = elementArray.findIndex(item => item == event.target)
                break;
            case 2:
                clickTwo = elementArray.findIndex(item => item == event.target)
                if (clickOne <= clickTwo) {
                    let filterArray = elementArray.filter((item, index) => index >= clickOne && index <= clickTwo).map(item => item.classList.toggle('add-background'))
                }
                if (clickOne > clickTwo) {
                    let filterArray = elementArray.filter((item, index) => index <= clickOne && index >= clickTwo).map(item => item.classList.toggle('add-background'))
                }
                counerClick = 0;
                clickOne = undefined;
                clickTwo = undefined;
                break;
        }
        if (event.target.localName !== 'li') event.target.style.background = '#FBF2E9';
    }
})