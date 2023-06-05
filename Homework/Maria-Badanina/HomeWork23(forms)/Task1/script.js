const messageList = document.querySelector('.messages-list');

// messageList.scrollTo(0, messageList.offsetHeight + 500);
Array.from(messageList.children).at(-1).scrollIntoView(false)
messageList.scrollBy(0, 20);

const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
})

document.querySelector('form button').addEventListener('click', () => {
    const name = form.elements[0].value;
    const messages = form.elements[1].value;

    if (!name || !messages) return;

    const date = getFormatDate(new Date());
    messageList.insertAdjacentHTML('beforeend', `
    <div class="message">
        <div class="header">
            <span class="name">${name}</span>
            <span class="date">${date}</span>
        </div>
        <div class="text">${messages}</div>
    </div>`);
    Array.from(messageList.children).at(-1).scrollIntoView(false)
    messageList.scrollBy(0, 20);
})

function getFormatDate(date) {
    let x;
    const hours = Math.floor((x = date.getHours()) / 10) === 0 ? `0${x}` : x;
    const minutes = Math.floor((x = date.getMinutes()) / 10) === 0 ? `0${x}` : x;
    const seconds = Math.floor((x = date.getSeconds()) / 10) === 0 ? `0${x}` : x;
    const days = Math.floor((x = date.getDate()) / 10) === 0 ? `0${x}` : x;
    const month = Math.floor((x = date.getMonth() + 1) / 10) === 0 ? `0${x}` : x;
    const year = date.getFullYear();
    return `${hours}:${minutes}:${seconds} ${days}.${month}.${year}`;
}