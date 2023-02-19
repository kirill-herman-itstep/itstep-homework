const output = document.querySelector('.output');

const commandsTask1 = document.querySelector('.task1_commands');
document.querySelector('.button_task1').addEventListener('click', () => {
    commandsTask1.classList.toggle('flex');
})

const commandsTask2 = document.querySelector('.task2_commands');
document.querySelector('.button_task2').addEventListener('click', () => {
    commandsTask2.classList.toggle('flex');
    document.querySelector('.fraction').classList.toggle('flex');
})

const commandsTask3 = document.querySelector('.task3_commands');
document.querySelector('.button_task3').addEventListener('click', () => {
    commandsTask3.classList.toggle('flex');
})

// ============================ TASK 1 CONTROL ========================
document.querySelector('.show_info').innerText = `${auto.manufacturer} | ${auto.model} | ${auto.year} | ${auto.speed}`;
document.querySelector('.distance').addEventListener('input', () => {output.innerText = path(document.querySelector('.distance input').value)})

// ============================ TASK 2 CONTROL ========================
function getValue() {
    firstFraction = new Fraction(+document.querySelector('.first_fraction .numer input').value, +document.querySelector('.first_fraction .denom input').value)
    secondFraction = new Fraction(+document.querySelector('.second_fraction .numer input').value, +document.querySelector('.second_fraction .denom input').value)
}

let numer = document.querySelector('.simple .numer');
let denom = document.querySelector('.simple .denom');

let fullNum = document.querySelector('.full');
let bringetNumer = document.querySelector('.bringet .numer');
let bringetDenom = document.querySelector('.bringet .denom');

function bringetFraction() {
    let full = fullPart(+numer.value, +denom.value);
    fullNum.innerText = full[0];
    bringetNumer.innerText = full[1]
    bringetDenom.innerText = denom.innerText;
    if (fullNum.innerText === '0') {
        fullNum.style.display = 'none';
    } else fullNum.style.display = 'flex';

    if (bringetNumer.innerText === '0') {
        document.querySelector('.bringet').style.display = 'none';
    } else document.querySelector('.bringet').style.display = 'flex';
}

document.querySelector('.sum').addEventListener('click', () => {
    getValue()
    numer.innerText = sumFraction()[0]
    denom.innerText = sumFraction()[1]
    bringetFraction()
})
document.querySelector('.sub').addEventListener('click', () => {
    getValue()
    numer.innerText = subFraction()[0]
    denom.innerText = subFraction()[1]
    bringetFraction()
})
document.querySelector('.mult').addEventListener('click', () => {
    getValue()
    numer.innerText = multiplicationFraction()[0]
    denom.innerText = multiplicationFraction()[1]
    bringetFraction()
})
document.querySelector('.divide').addEventListener('click', () => {
    getValue()
    numer.innerText = divideFraction()[0]
    denom.innerText = divideFraction()[1]
    bringetFraction()
})
// ============================ TASK 3 CONTROL ========================
document.querySelector('.show_time').addEventListener('click', time.showTime);

document.querySelector('.change_sec .plus').addEventListener('click', () => time.changeSec(+document.querySelector('.change_sec input').value))
document.querySelector('.change_sec .minus').addEventListener('click', () => time.changeSec(-(+document.querySelector('.change_sec input').value)))

document.querySelector('.change_min .plus').addEventListener('click', () => time.changeMin(+document.querySelector('.change_min input').value))
document.querySelector('.change_min .minus').addEventListener('click', () => time.changeMin(-(+document.querySelector('.change_min input').value)))

document.querySelector('.change_hour .plus').addEventListener('click', () => time.changeHour(+document.querySelector('.change_hour input').value))
document.querySelector('.change_hour .minus').addEventListener('click', () => time.changeHour(-(+document.querySelector('.change_hour input').value)))