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
    const outputDiv = document.querySelector('div.result')
    outputDiv.innerHTML = `Result: ${result} correct answers to 2 questions`
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

// Task 4

const bookSelectButtons = document.querySelectorAll('.book-list button')
bookSelectButtons.forEach(e => {
    e.addEventListener('click', (event) => {
        const selectedBook = document.querySelector('form[name="order"] input:disabled')
        selectedBook.setAttribute('placeholder', event.target.value)
    })
})

const buyBookButton = document.querySelector('form[name="order"] button')
buyBookButton.addEventListener('click', () => {
    const orderFormElements = document.querySelector('form[name="order"]').elements
    const book = orderFormElements[0].placeholder;
    const quantity = orderFormElements[1].value
    const name = orderFormElements[2].value
    const delAddres = orderFormElements[3].value
    const delDate = orderFormElements[4].value
    const comment = orderFormElements[5].value
    alert(`${name} thank you for order. ${book} will be delivered ${delDate} to ${delAddres}`)
})

// Task 5

class Pair {
    constructor(group, lesson, students, topic) {
        this.group = group;
        this.lesson = lesson;
        this.students = students;
        this.topic = topic;
    }

    static isExist(group, lesson) {
        return allPairs.find((e) => {
            return (group === e.group) && (lesson === e.lesson);
        })
    }
}

class Group {
    constructor(studentArray) {
        this.studentArray = studentArray;
    }
    
    getHTML() {
        return this.studentArray.map((e, i) => {
            return `
            <tr>
            <td class="student-name">${e}</td>
            <td><input type="checkbox" name="isPresent" id="" value="${i}"></td>
            </tr>
            `
        }).join('')
    }
}

const allPairs = []
const groups = [
    new Group(['Zapp', 'Yuuri', 'Quilow']),
    new Group(['Fuffelschmerz', 'Mark', 'Tiffani']),
    new Group(['Yarik', 'Sanya', 'Toha'])
]

const tableBody = document.querySelector('table tbody')
const changeGroupAndLessonButton = document.querySelector(`.lessons-wrap .head button`)

changeGroupAndLessonButton.addEventListener('click', () => {
    drawTable()
    const group = +document.querySelector('select[name="groups"]').value;
    const lesson = +document.querySelector('select[name="lessons"]').value;
    const existPair = Pair.isExist(group, lesson);
    if (existPair) {
        completedPair(existPair.students, existPair.topic)
    } else {
        uncompletedPair()
    }
})

function drawTable() {
    const selectedGroup = +document.querySelector('select[name="groups"]').value
    tableBody.innerHTML = groups[selectedGroup].getHTML()
}

const saveButton = document.querySelector('#saveLesson')
saveButton.addEventListener('click', () => {
    const group = +document.querySelector('select[name="groups"]').value;
    const lesson = +document.querySelector('select[name="lessons"]').value;
    const topic = document.querySelector('.topic input').value;
    const presentedStudents = document.querySelectorAll('tbody input:checked');
    const presentArrayValue = []
    presentedStudents.forEach(e => e = presentArrayValue.push(e.value));
    allPairs.push(new Pair(group, lesson, presentArrayValue, topic))
    completedPair(presentArrayValue, topic)
})

function completedPair(presentedStudents, completedLessonTopic) {
    drawTable()
    const allCheckboxes = document.querySelectorAll('input[name="isPresent"]')
    const topic = document.querySelector('.topic input');
    topic.value = completedLessonTopic;
    topic.setAttribute('disabled', ' ')
    allCheckboxes.forEach(e => {
        if (presentedStudents.find(value => value === e.value)) {
            e.outerHTML = `<div>Is Present</div>`
        } else e.outerHTML = ' '
    })
    saveButton.setAttribute('disabled', ' ')
}

function uncompletedPair() {
    drawTable()
    const topic = document.querySelector('.topic input');
    topic.value = '';
    topic.removeAttribute('disabled', ' ')
    saveButton.removeAttribute('disabled', ' ')
}

