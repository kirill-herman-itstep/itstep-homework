'use strict'

function GreateNodeTop (textHint) {
    const divClassHint = document.createElement('div');
    divClassHint.classList = 'hint-top';
    divClassHint.style.display = 'flex';
    divClassHint.style.flexFlow = 'column nowrap';
    divClassHint.style.alignItems = 'center';
    divClassHint.style.position = 'absolute';
    divClassHint.style.width = 'max-content'
    divClassHint.style.color = 'rgb(255, 255, 255)'

    const divTextContainer = document.createElement('div');
    divTextContainer.innerText = textHint;
    divTextContainer.style.lineHeight = '20px';
    divTextContainer.style.padding = '5px';
    divTextContainer.style.backgroundColor = '#8A53A9'
    divTextContainer.style.borderRadius = '5px'
    divClassHint.append(divTextContainer);

    const divFlagHint = document.createElement('div');
    divFlagHint.style.borderTop = '10px solid #8A53A9';
    divFlagHint.style.borderLeft = '10px solid transparent';
    divFlagHint.style.borderRight = '10px solid transparent';
    divClassHint.append(divFlagHint);

    return divClassHint
}

function GreateNodeBottom (textHint) {
    const divClassHint = document.createElement('div');
    divClassHint.classList = 'hint-bottom';
    divClassHint.style.display = 'flex';
    divClassHint.style.flexFlow = 'column nowrap';
    divClassHint.style.alignItems = 'center';
    divClassHint.style.position = 'absolute';
    divClassHint.style.width = 'max-content'
    divClassHint.style.color = 'rgb(255, 255, 255)'

    const divTextContainer = document.createElement('div');
    divTextContainer.innerText = textHint;
    divTextContainer.style.lineHeight = '20px';
    divTextContainer.style.padding = '5px';
    divTextContainer.style.backgroundColor = '#8A53A9'
    divTextContainer.style.borderRadius = '5px'
    divClassHint.append(divTextContainer);

    const divFlagHint = document.createElement('div');
    divFlagHint.style.borderBottom = '10px solid #8A53A9';
    divFlagHint.style.borderLeft = '10px solid transparent';
    divFlagHint.style.borderRight = '10px solid transparent';
    divClassHint.prepend(divFlagHint);

    return divClassHint
}

let newHint;
const buttonOne = document.querySelector('.button-one button');
buttonOne.addEventListener('mouseover', event => {
    if (buttonOne.getBoundingClientRect().top >= 40) {
        newHint = GreateNodeTop('Tool tip 1');
        document.querySelector('.button-one').prepend(newHint)
        newHint.style.top = `${buttonOne.getBoundingClientRect().top + window.pageYOffset - 39.6}px`
    } else {
        newHint = GreateNodeBottom('Tool tip 1');
        document.querySelector('.button-one').append(newHint)
        newHint.style.top = `${buttonOne.offsetHeight + buttonOne.getBoundingClientRect().top + window.pageYOffset}px`
    }
})

buttonOne.addEventListener('mouseout', event => {
    newHint.remove();
})

const buttonTwo = document.querySelector('.button-two>button');
buttonTwo.addEventListener('mouseover', event => {
    if (buttonTwo.getBoundingClientRect().top >= 40) {
        newHint = GreateNodeTop('Tool tip 2');
        document.querySelector('.button-two').prepend(newHint)
        newHint.style.top = `${buttonTwo.getBoundingClientRect().top + window.pageYOffset - 39.6}px`
    } else {
        newHint = GreateNodeBottom('Tool tip 2');
        document.querySelector('.button-two').append(newHint)
        newHint.style.top = `${buttonTwo.offsetHeight + buttonTwo.getBoundingClientRect().top + window.pageYOffset}px`
    }
})

buttonTwo.addEventListener('mouseout', event => {
    newHint.remove();
})