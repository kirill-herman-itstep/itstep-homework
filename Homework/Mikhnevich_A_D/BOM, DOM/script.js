// Task 1

document.querySelectorAll('a').forEach(e => {
    if(e.href.includes('https://')) e.style.borderBottom = `2px dotted ${e.style.color}`;
    e.style.textDecoration = 'none';
})



// Task 2

let ninjarr = [];

document.querySelectorAll('span').forEach(e => e.addEventListener('click', () => {
    if (!e.dataset.iterator) {
        ninjarr.push(e.nextElementSibling);
        e.dataset.iterator = `${ninjarr.length - 1}`;
        e.nextElementSibling.remove();
    }
    else {
        e.parentNode.append(ninjarr[e.dataset.iterator]);
        e.dataset.iterator = "";
        ninjarr[e.dataset.iterator] = '';
    }

    // Нормальное решение
    // 
    // if (!e.dataset.iterator) {
    //     e.nextElementSibling.style.display = 'none';
    //     e.dataset.iterator = `plop`;
    // }
    // else {
    //     e.nextElementSibling.style.display = '';
    //     e.dataset.iterator = ``;
    // }
}))



// Task 3

let highlighted = [];
let lastHighlighted;
function highlight(e) {
    if (highlighted.indexOf(e) === -1) {
        highlighted.push(e); 
        e.style.backgroundColor = 'lightSalmon';
    } 
    lastHighlighted = e;
}
function unhighlight(e) {
    if (e) {
        highlighted[highlighted.indexOf(e)] = undefined;
        e.style.backgroundColor = '';
        lastHighlighted = e;
    }
}

document.querySelectorAll('.task3 li').forEach(e => e.addEventListener('click', event => {
    event.preventDefault();
    if (event.shiftKey) {
        if (highlighted[0]) {
            let arr = Object.values(e.parentNode.children);
            let lastHighlightedIndex = arr.indexOf(lastHighlighted);
            let currentIndex = arr.indexOf(e);
            for (let i = Math.min(currentIndex, lastHighlightedIndex); i <= Math.max(currentIndex, lastHighlightedIndex); i++) {
                highlight(e.parentNode.children[i]);
            }
            return;
        }
    }
    if (event.ctrlKey) {
        if (e.style.backgroundColor) {
            unhighlight(e);
            return;
        }
    }
    else {
        highlighted.forEach(e => {
            unhighlight(e);
        })
        highlighted.length = 0;
    }
    highlight(e);
}))



// Task 4

let div = document.querySelector('.task4 div');
let area = document.createElement('textarea');
area.value = div.innerHTML;

document.addEventListener('keydown', event => {
    if (event.key === 'e' && event.ctrlKey) {
        event.preventDefault();
        if (document.querySelector('.task4 div')) {
            area.style.height = `${div.offsetHeight}px`;
            div.parentNode.append(area);
            div.remove();
        }
    }
})

document.addEventListener('keydown', event => {
    if (event.key === 's' && event.ctrlKey) {
        event.preventDefault();
        if (document.querySelector('.task4 textarea')) {
            div.innerHTML = area.value;
            area.parentNode.append(div);
            area.remove();
        }
    }
})



// Task 5

document.querySelectorAll('th').forEach(e => {e.addEventListener('click', event => {
    let i = e.cellIndex;
    let arr = Object.values(document.querySelectorAll(`table tr td:nth-child(${i + 1})`));
    if (arr.reduce((isNumber, elem) => {
        return isNumber && elem.innerHTML === `${Number(elem.innerHTML)}`;
    }, true)) {
        arr.sort((a, b) => a.innerHTML - b.innerHTML);
    }
    else {
        arr.sort((a, b) => a.innerHTML.localeCompare(b.innerHTML));
    }
    arr.forEach(elem => {
        document.querySelector('table').append(elem.parentElement);
    })
})})



// Task 6

let lastX = 0;
let lastY = 0;
function dragEvent(e) {
    let parent = e.target.parentElement;
    // parent.style.width = `${parseInt(parent.style.width) + e.movementX}px`;
    // parent.style.height = `${parseInt(parent.style.height) + e.movementY}px`;

    parent.style.width = `${parseInt(parent.style.width) + e.pageX - lastX}px`;
    parent.style.height = `${parseInt(parent.style.height) + e.pageY - lastY}px`;
    lastX = e.pageX;
    lastY = e.pageY;
    // console.log(e.pageX, e.pageY);
}

document.querySelector('.button').addEventListener('mousedown', e => {
    e.preventDefault();
    let parent = e.target.parentElement;
    parent.style.left = `${parent.offsetLeft}px`;
    parent.style.top = `${parent.offsetTop}px`;
    parent.style.position = 'absolute';
    parent.style.width = `${parent.offsetWidth}px`;
    parent.style.height = `${parent.offsetHeight}px`;
    // console.log(e)

    lastX = e.pageX;
    lastY = e.pageY;
    // let startX = e.layerX;
    // let startY = e.layerY;
    e.target.addEventListener('mousemove', dragEvent);
    document.onmouseup = () => {
        e.target.removeEventListener('mousemove', dragEvent);
        document.onmouseup = null;
    }
})