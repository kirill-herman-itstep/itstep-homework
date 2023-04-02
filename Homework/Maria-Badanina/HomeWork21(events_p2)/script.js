// ===== Task 1 =====

let links = task1.querySelectorAll('a');

for (const link of links) {
    const content = link.textContent;
    if (content.startsWith('http://') || content.startsWith('https://')) {
        link.classList.add("external");
    }
}

// ===== Task 2 =====

task2.addEventListener('click', e => {
    if (e.target.tagName === 'SPAN') {
        const child = e.target.parentNode.querySelector('ul');

        if (!child) {
            return;
        }

        if (child.style.display === '') {
            child.style.opacity = '0';
            setTimeout(function(){child.style.display = 'none'}, 300);
        } else {
            child.style.display = '';
            setTimeout(function(){child.style.opacity = ''}, 20);
        }
    }
});

// ===== Task 3 =====

let selectedText = [];
selectedText.pushElem = function(elem) {
    elem.style.backgroundColor = 'lightsalmon';
    selectedText.push(elem);
}

let pressingCtrl = false;

task3.querySelector('ol').addEventListener('mousedown', (e) => {
    if (e.shiftKey) e.preventDefault();
})

task3.addEventListener('click', e => {
    if (e.target.tagName !== 'LI') {
        return;
    }

    if (e.ctrlKey) {
        if (selectedText.includes(e.target)) {
            e.target.style.backgroundColor = '';
            const index = selectedText.indexOf(e.target);
            selectedText.splice(index, 1);

        } else {
            selectedText.pushElem(e.target);
        }
    } else if (e.shiftKey) {
        const list = task3.querySelector('ol').children;
        let index;
        let indexLastElem;

        for (const key in list) {
            if (list[key] === e.target) index = key;
            if (list[key] === selectedText.at(-1)) indexLastElem = key;
        }

        const max = Math.max(index, indexLastElem);
        const min = Math.min(index, indexLastElem);

        for (let i = min; i <= max; i++) {
            if (!selectedText.includes(list[i])) {
                selectedText.pushElem(list[i]);
            }
        }
    } else {
        if (selectedText.length > 0) {
            selectedText.forEach(elem => elem.style.backgroundColor = '');
            selectedText.length = 0;
        } 

        selectedText.pushElem(e.target);
    }
});

// ===== Task 4 =====

document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 'e') {
        e.preventDefault();

        let text = task4.querySelector('.text');
        if (!text) return;
        
        text.outerHTML = `<textarea rows="8">${text.innerHTML}</textarea>`;
    }

    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();

        let text = task4.querySelector('textarea');
        if (!text) return;

        text.outerHTML = `<div class="text">${text.value}</div>`;
    }
});

// ===== Task 5 =====

const table = task5.querySelector('table');

table.tHead.addEventListener('click', e => {
    const index = e.target.cellIndex;
    const rows = [];
    for (const row of table.tBodies[0].rows) {
        rows.push(row.cloneNode(true));
    }

    const firstRow = rows[0].cells[index].innerHTML;
    const lastRow = rows[rows.length - 1].cells[index].innerHTML;
    
    if (rows.reduce((acc, elem) => acc ? isFinite(elem.cells[index].innerHTML) : acc, true)) {   
        if (+firstRow > lastRow) {
            rows.sort((a, b) => a.cells[index].innerHTML - b.cells[index].innerHTML);
            
        } else {
            rows.sort((a, b) => b.cells[index].innerHTML - a.cells[index].innerHTML);
        }
    } else {
        if (firstRow > lastRow) {
            rows.sort((a, b) => a.cells[index].innerHTML > b.cells[index].innerHTML ? 1 : -1);
        } else {
            rows.sort((a, b) => b.cells[index].innerHTML > a.cells[index].innerHTML ? 1 : -1);
        }
    }
    
    for (let i = 0; i < rows.length; i++) {
        table.tBodies[0].rows[i].replaceWith(rows[i]);
    }
})

// ===== Task 6 =====

task6.querySelector('.toffee').addEventListener('mousedown', e => {
    task6.style.cursor = 'grabbing';
    e.target.style.cursor = 'grabbing';

    const conteiner = task6.querySelector('.conteiner');

    let shiftX = e.target.offsetWidth - (e.clientX - e.target.getBoundingClientRect().left);
    let shiftY = e.target.offsetHeight - (e.clientY - e.target.getBoundingClientRect().top);

    function changeTheSize(e) {
        e.preventDefault();
        let width = e.pageX - conteiner.offsetLeft + shiftX;

        if (width + 18 < task6.offsetWidth) conteiner.style.width = width + 'px';
        conteiner.style.height = e.pageY - conteiner.offsetTop + shiftY + 'px';
    }
    
    document.addEventListener('mousemove', changeTheSize);

    document.onmouseup = function() {
        task6.style.cursor = '';
        e.target.style.cursor = '';

        document.removeEventListener('mousemove', changeTheSize);
        document.onmouseup = null;
    }
});

window.addEventListener('resize', e => {
    const conteiner = task6.querySelector('.conteiner');

    if (task6.offsetWidth <= conteiner.offsetWidth + 18) {
        conteiner.style.width = task6.offsetWidth - 20 + 'px';
    }
})