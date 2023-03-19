// ===== Task 1 =====

withoutNumbers.addEventListener('keydown', e => {
    if (e.key >= 0 && e.key <= 9) {
        e.preventDefault();
    }
});

// ===== Task 2 =====

task2.addEventListener('click', e => {
    if (e.target.innerText === 'Open modal') {
        task2.querySelector('.modal').style.display = 'block';
        task2.querySelector('.window').style.visibility = 'visible';
    }
    if (e.target.innerText === 'Close') {
        task2.querySelector('.modal').style.display = '';
        task2.querySelector('.window').style.visibility = '';
    }
});

// ===== Task 3 =====

const ball = task3.querySelector('[alt="ball"]');

football.addEventListener('click', function(e) {
    if (e.offsetX > (football.clientWidth - 50)) {
        ball.style.left = (football.clientWidth - 50) + 'px';
    } else if (e.offsetX < 50) {
        ball.style.left = 50 + 'px';
    } else {
        ball.style.left = e.offsetX + 'px';
    }

    if (e.offsetY > (football.clientHeight - 50)) {
    ball.style.top = (football.clientHeight - 50) + 'px';
    } else if (e.offsetY < 50) {
        ball.style.top = 50 + 'px'
    } else {
        ball.style.top = e.offsetY + 'px';
    }
});

window.addEventListener('resize', () => {
    ball.style.transition = 'none';
    if (parseFloat(ball.style.top) > (football.clientHeight - 50)) {
        ball.style.top = (football.clientHeight - 50) + 'px';
    }
    if (parseFloat(ball.style.left) > (football.clientWidth - 50)) {
        ball.style.left = (football.clientWidth - 50) + 'px';
    }
    ball.style.transition = '';
});

// ===== Task 4 =====

const list = [
    task4.querySelector('.green'),
    task4.querySelector('.yellow'),
    task4.querySelector('.red'),
];

list[1].style.backgroundColor = '#969393';
list[2].style.backgroundColor = '#969393';


task4.querySelector('[type="button"]').addEventListener('click', () => {
    const index = list.findIndex((elem) => !elem.style.backgroundColor);
    list[index].style.backgroundColor = '#969393';
    list[(index +1) % list.length].style.backgroundColor = '';
});

// ===== Task 5 =====

let selectedText;

task5.addEventListener('click', e => {
    if (e.target.tagName !== 'LI') {
        return;
    }
    if (selectedText) selectedText.style.backgroundColor = '';
    e.target.style.backgroundColor = 'lightsalmon';
    selectedText = e.target;
});

// ===== Task 6 =====

const hint = task6.querySelector('.hint');

task6.addEventListener('mouseover', e => {
    if (e.target.tagName !== 'BUTTON') {
        return;
    }

    const button = e.target;
    const hintElem = hint.querySelector('.hintElem');

    insertingText(e);

    hint.style.display = 'block';
    hint.style.left = (button.offsetLeft + (button.offsetWidth/2 - hint.offsetWidth/2)) + 'px';

    if (e.target.offsetTop > hint.offsetHeight + 12) {
        hint.style.top = (button.offsetTop - hint.offsetHeight - 12) + 'px';
        hintElem.classList.remove('bottom');
        hintElem.classList.add('top');
    } else {
        hint.style.top = (button.offsetTop + button.offsetHeight + 12) + 'px';
        hintElem.classList.remove('top');
        hintElem.classList.add('bottom');
    }
});

function insertingText(e) {
    const buttons = task6.getElementsByTagName('button');
    for(const key in buttons) {
        if (e.target === buttons[key]) {
            hint.querySelector('.hintText').innerText = `Tool tip ${+key + 1}`;
        }
    }
}

task6.addEventListener('mouseout', e => {
    if (e.target.tagName === 'BUTTON') {
        hint.style.display = 'none';
    }
});