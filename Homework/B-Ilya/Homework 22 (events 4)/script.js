// Task 1
function getHTML(name, text) {
    return `
    <div class="msg">
        <div class="msg-head">
            <div class="sender">${name}</div>
            <div class="time">${new Date().toString().slice(0, 24)}</div>
        </div>
        <div class="msg-text">${text}</div>
    </div>`
}

function sendMessage(name, text) {
    const msgField = document.querySelector('.add-msg-field')
    msgField.insertAdjacentHTML('beforebegin', getHTML(name,text))
}

const sendMessageButton = document.querySelector('form[name="msg"] button')
sendMessageButton.addEventListener('click', () => {
    const senderName = document.querySelector('form[name="msg"] input[name="name"]').value
    const senderText = document.querySelector('form[name="msg"] textarea[name="text"]').value
    sendMessage(senderName, senderText)
})

// Task 2
const testForm = document.querySelector('form[name="test"]')
const resultButton = document.querySelector('form[name="test"] button')
let result = 0;
resultButton.addEventListener('click', () => {
    const answer_1 = +document.querySelector('input[name="question-1"]:checked').value;
    if (answer_1 === 5) result += 1;  
    const answer_2 = +document.querySelector('input[name="question-2"]:checked').value;
    if (answer_2 === 5) result += 1;
    getResult(result)
})

function getResult(result) {
    resultButton.insertAdjacentHTML('afterend', `Result: ${result} correct answers to 2 questions`)
    return false
}

// Task 3
const showTextButton = document.querySelector('form[name="text-decor"] button')
let style = ''
showTextButton.addEventListener('click', () => {
    const activeStyleChooseButtons = document.querySelectorAll('div.style-choose input:checked')
    activeStyleChooseButtons.forEach(e => {
        style += e.value + `; `;
    })
    const inputedText = document.querySelector('form[name="text-decor"] textarea').value;
    const outputDiv = document.querySelector('.output-text .text')
    outputDiv.innerHTML = '';
    outputDiv.insertAdjacentHTML('afterbegin', `<p style="${style}">${inputedText}</p>`)
    style = ''
})
