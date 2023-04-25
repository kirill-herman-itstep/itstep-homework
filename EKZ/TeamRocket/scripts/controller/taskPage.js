import { taskPage } from "../../index.js";
import { mainDB } from "../../index.js";

let currentTaskOpen = null;

export function clickableTasks() {
    const allFeeds = document.querySelectorAll('.tasks');

    allFeeds.forEach(elem => elem.addEventListener('click', (e) => {
        if (e.target.closest('.taskForm')) {
            if (currentTaskOpen) currentTaskOpen.remove();
            const taskElem = e.target.closest('.taskForm');
            const task = mainDB.getTask(taskElem.id);

            taskPageFunctional(task);
        }
    }));
}

function writeComment(task) {
    const commentText = document.querySelector('textarea[name="newComment"]');
    const commentWordsCounter = document.querySelector('.newComment span');

    commentText.addEventListener('input', (event) => {
        let count = commentText.value.length;
        if (count >= 280) {
            commentText.value = commentText.value.slice(0, 280)
            count = 280
        }
        commentWordsCounter.innerHTML = `${count}/280`
    });
    const sendButton = document.querySelector('.postComment')
    sendButton.addEventListener('click', () => {
        task.addComment(commentText.value)

        taskPageFunctional(task)
    });

    document.onclick = function(e) {
        if (!e.target.closest('.task') && !e.target.closest('.taskForm')) {
            currentTaskOpen.remove();
            currentTaskOpen = null;
            document.onclick = null;
        }
    }
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