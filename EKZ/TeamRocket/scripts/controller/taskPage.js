import { taskPage } from "../../index.js";
import { mainDB } from "../../index.js";
import { showMainPage } from "./mainPage.js";
import { getUserSelects } from "./taskCreate.js";

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
            commentText.value = commentText.value.slice(0, 280);
            count = 280;
        }
        commentWordsCounter.innerHTML = `${count}/280`;
    });
    const sendButton = document.querySelector('.postComment');
    sendButton.addEventListener('click', () => {
        task.addComment(commentText.value);

        taskPageFunctional(task);
    });

    document.onclick = function(e) {
        if (!e.target.closest('.task') && !e.target.closest('.taskForm') && currentTaskOpen !== null) {
            currentTaskOpen.remove();
            currentTaskOpen = null;
            document.onclick = null;
        }
    }
    mainDB.saveInLocalStorage();
}

function deleteTask(task) {
    const deleteTaskBtn = document.querySelector('.deleteIco')
    deleteTaskBtn.addEventListener('click', () => {
        mainDB.remove(task.id);
        currentTaskOpen.remove();
        mainDB.saveInLocalStorage();

        user.innerHTML = '';
        taskBoard.innerHTML = '';

        showMainPage();
    }, {capture: true});
}

function taskPageFunctional(task) {
    if (currentTaskOpen) currentTaskOpen.remove();

    taskPage.showTaskPage(task);

    writeComment(task);
    deleteTask(task);
    assignField(task);

    const closeButton = document.querySelector('.task .crossIco');
    currentTaskOpen = document.querySelector('.task');

    closeButton.addEventListener('click', () => {
        currentTaskOpen.remove();
        currentTaskOpen = null;
    });
}

function assignField(task) {
    assignOnPage.innerHTML = getUserSelects();
    assignOnPage.value = task.assignee;
}