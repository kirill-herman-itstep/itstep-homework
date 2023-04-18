import { taskPage } from "../../index.js";
import { mainDB } from "../../index.js";

let currentTaskOpen = null;

export function clickableTasks() {
    const allTasks = document.querySelectorAll('.taskForm');
    allTasks.forEach(e => e.addEventListener('click', () => {
        if (currentTaskOpen) currentTaskOpen.remove();
        const task = mainDB.getTask(e.id);
        taskPageFunctional(task)
    }))
}

function writeComment(task) {
    const commentText = document.querySelector('textarea[name="newComment"]')
    const commentWordsCounter = document.querySelector('.newComment span')
    commentText.addEventListener('input', (event) => {
        let count = commentText.value.length;
        if (count >= 280) {
            commentText.value = commentText.value.slice(0, 280)
            count = 280
        }
        commentWordsCounter.innerHTML = `${count}/280`
    })
    const sendButton = document.querySelector('.postComment')
    sendButton.addEventListener('click', () => {
        task.addComment(commentText.value)

        taskPageFunctional(task)
    })
}

function taskPageFunctional(task) {
    if (currentTaskOpen) currentTaskOpen.remove();

    taskPage.showTaskPage(task);

    writeComment(task)

    const closeButton = document.querySelector('.task .crossIco');
    currentTaskOpen = document.querySelector('.task');

    closeButton.addEventListener('click', () => {
        currentTaskOpen.remove();
        currentTaskOpen = null;
    });
}