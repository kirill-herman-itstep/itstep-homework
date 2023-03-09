// === TASK 1 ===
const inputField = document.querySelector('.input_name input');

inputField.addEventListener('keypress', (event) => {
    if (/[a-zA-z]/.test(event.key)) {
        return true
    } else event.preventDefault(); 
})

// === TASK 2 === 
const openModalWindowButton = document.querySelector('.open_modal');
const closeModalWindowButton = document.querySelector('.modal_window button')
const modalWindow = document.querySelector('.modal_window');

openModalWindowButton.addEventListener('click', () => {
    modalWindow.style.display = 'flex';
})

closeModalWindowButton.addEventListener('click', () => {
    modalWindow.style.display = 'none';
})

// === TASK 3 ===
// const footballFieldBorder = document.querySelector('.field .border');
// const footballBall = document.querySelector('.field .ball');

// footballFieldBorder.addEventListener('click', (event) => {
//     footballBall.style.left = `${event.clientX - 50}px`;
//     footballBall.style.top = `${event.clientY - 50}px`;
// })
// === TASK 4 ===
const redLight = document.querySelector('.lights .red')
const yellowLight = document.querySelector('.lights .yellow')
const greenLight = document.querySelector('.lights .green')