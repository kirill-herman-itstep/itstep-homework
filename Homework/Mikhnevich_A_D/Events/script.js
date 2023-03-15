// Task 1

// Первая версия кода

// document.getElementById('input').addEventListener('input', e => {
//     if (e.data >= '0' && e.data <= '9') e.target.value = e.target.value.slice(0, e.target.value.length - 1);
// })


// Улучшенная версия

document.getElementById('input').addEventListener('keydown', e => {
    if (e.key >= '0' && e.key <= '9') e.preventDefault();
})



// Task 2

document.getElementById('modalshow').addEventListener('click', e => {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('blackout').style.display = 'flex';
})

document.getElementById('modalhide').addEventListener('click', e => {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('blackout').style.display = 'none';
})



// Task 3

document.getElementById('ball').style.top = `${document.getElementById('field').offsetTop + document.getElementById('field').offsetHeight/2 - document.getElementById('ball').offsetHeight/2}px`;

document.getElementById('ball').style.left = `${document.getElementById('field').offsetLeft + document.getElementById('field').offsetWidth/2 - document.getElementById('ball').offsetWidth/2}px`;

document.getElementById('field').addEventListener('click', e => {
    let field = document.getElementById('field');
    let ball = document.getElementById('ball');
    let top;
    let left;
    if (e.pageY - ball.offsetHeight/2 < field.offsetTop) {
        top = field.offsetTop;
    }
    else if (e.pageY + ball.offsetHeight/2 > field.offsetTop + field.offsetHeight) {
        top = field.offsetTop + field.offsetHeight - ball.offsetHeight;
    }
    else top = e.pageY - ball.offsetWidth/2;

    if (e.pageX - ball.offsetWidth/2 < field.offsetLeft) {
        left = field.offsetLeft;
    }
    else if (e.pageX + ball.offsetWidth/2 > field.offsetLeft + field.offsetWidth) {
        left = field.offsetLeft + field.offsetWidth - ball.offsetWidth;
    }
    else left = e.pageX - ball.offsetWidth/2;

    ball.style.top = `${top}px`;
    ball.style.left = `${left}px`;
})



// Task 4

document.getElementById('lightsBtn').addEventListener('click', e => {
    let arr = document.getElementById('lights').children;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].style.cssText.includes('!important')) {
            arr[i].style.cssText = arr[i].style.cssText.replace('!important', '');
            arr[++i % arr.length].style.setProperty('background-color', arr[i % arr.length].style.backgroundColor, 'important');
            break;
        }
    };
})



// Task 5

let previousBook;

document.getElementById('bookList').addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
        if (previousBook && previousBook !== e.target) previousBook.style.backgroundColor = '';
        e.target.style.backgroundColor = 'lightsalmon';
        previousBook = e.target;
    }
})



// Task 6

let tooltip;

document.querySelectorAll('[data-tooltip]').forEach(e => {
    e.addEventListener('mouseover', e => {
        if (e.target.offsetTop > document.getElementById('highTooltip').offsetHeight + 4) {
            tooltip = document.getElementById('highTooltip');
            tooltip.children[0].textContent = e.target.dataset.tooltip;
            tooltip.style.top = `${e.target.offsetTop + e.target.offsetParent.offsetTop - tooltip.offsetHeight - 4}px`;
            tooltip.style.visibility = 'visible';
        }
        else {
            tooltip = document.getElementById('lowTooltip');
            tooltip.children[1].textContent = e.target.dataset.tooltip;
            tooltip.style.top = `${e.target.offsetTop + e.target.offsetParent.offsetTop + e.target.offsetHeight + 4}px`;
            tooltip.style.visibility = 'visible';
        }
    })

    e.addEventListener('mouseout', e => {
        tooltip.style.visibility = 'hidden';
    })
})