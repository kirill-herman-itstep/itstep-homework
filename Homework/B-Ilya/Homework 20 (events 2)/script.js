// Task 1
const links = document.querySelectorAll('.href-list li');

links.forEach((element) => {
    if (element.innerText.search('http') === 0) element.classList.add('coma_underline')
})

// Task 2
const clickableListItems = document.querySelectorAll('.clickable')

clickableListItems.forEach((element) => {
    element.addEventListener('click', () => {
        if (element.nextElementSibling.style.display === 'none') {
            element.nextElementSibling.style.display = '';
        } else element.nextElementSibling.style.display = 'none';
    })
})

// Task 3
const olItems = document.querySelectorAll('.mark_list_item_upd li')
let lastClickedLiIndex = 0;

olItems.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        if (event.ctrlKey) {
            element.classList.toggle('highlightText')
        } else if (event.shiftKey){
            const isBeforeLastClickedLi = lastClickedLiIndex > index;
            if (isBeforeLastClickedLi) {
                for(i = lastClickedLiIndex; i >= index; i--) {
                    olItems[i].classList.add('highlightText')
                }
            } else {
                for(i = lastClickedLiIndex; i <= index; i++) {
                    olItems[i].classList.add('highlightText')
                }
            }
        } else {
            olItems.forEach((e) => {
                e.style.backgroundColor = ''
                e.classList.remove('highlightText')
            });
            element.classList.add('highlightText');
        }
        lastClickedLiIndex = index;
    })
})

// Task 4
const div = document.querySelector('.changeble div')
const textarea = document.querySelector('.changeble textarea')

document.addEventListener('keydown', (event) => {
    if (event.key === 'e' && event.ctrlKey === true) {
        event.preventDefault()
        textarea.value = div.innerText;
        textarea.style.visibility = 'visible';
    }

    if (event.key === 's' && event.ctrlKey === true) {
        event.preventDefault()
        div.innerText = textarea.value;
        textarea.style.visibility = '';
    }
})

// Task 5
const table = document.querySelector('table')

table.addEventListener('click', (event) => {
    let thead = event.target;
    sortTable(thead.cellIndex, thead.dataset.type)
})

function sortTable(columnNum, dataType) {
    const tableBody = document.querySelector('tbody')
    let rowsArray = Array.from(tableBody.rows);
    let compare;
    switch(dataType) {
        case 'string':
            compare = function(rowA, rowB) {
                return rowA.cells[columnNum].innerHTML > rowB.cells[columnNum].innerHTML ? 1 : -1;
            }
            break
        case 'number':
            compare = function(rowA, rowB) {
                console.log(rowA.cells[columnNum].innerHTML);
                return rowA.cells[columnNum].innerHTML - rowB.cells[columnNum].innerHTML;
                
            }
            break
    }
    rowsArray.sort(compare)
    tableBody.append(...rowsArray)
}

// Task 6
const triangle = document.querySelector('.triangle')
const resizeableDiv = document.querySelector('.resize')

let startX, startY, startWidth, startHeight;

triangle.addEventListener('mousedown', startDrag)

function startDrag(event) {
    startX = event.clientX;
    startY = event.clientY;
    startWidth = resizeableDiv.clientWidth;
    startHeight = resizeableDiv.clientHeight;
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', completeDrag);
}

function onDrag(event) {
    resizeableDiv.style.width = (startWidth + event.clientX - startX) + 'px';
    resizeableDiv.style.height = (startHeight + event.clientY - startY) + 'px';
}

function completeDrag() {
    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', completeDrag)
}