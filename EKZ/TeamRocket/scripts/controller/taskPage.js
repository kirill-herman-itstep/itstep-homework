import { taskPage } from "../../index.js";
import { mainDB } from "../../index.js";
import { showMainPage } from "./mainPage.js";
import { getUserSelects } from "./taskCreate.js";
import { showFilter } from "../../script.js";

let currentTaskOpen = null;
let task;

export function clickableTasks() {
    const allFeeds = document.querySelectorAll('.tasks');

    allFeeds.forEach(elem => elem.addEventListener('click', (e) => {

        if (e.target.closest('.taskForm')) {
            if (currentTaskOpen) closeTask(task);
            
            const taskElem = e.target.closest('.taskForm');
            task = mainDB.getTask(taskElem.id);


            if (document.querySelector('.filterLayout')) showFilter();
            taskPageFunctional(task);
        }
    }));
}

function taskPageFunctional(task) {

    taskPage.showTaskPage(task);

    writeComment(task);
    deleteTask(task);
    assignField(task);

    const closeButton = document.querySelector('.task .crossIco');
    currentTaskOpen = document.querySelector('.task');

    closeButton.addEventListener('click', () => {
        closeTask(task);
    });
}

export function closeTask(task) {
    edit(task);
    currentTaskOpen.remove();
    currentTaskOpen = null;
}

function writeComment(task) {
    const commentText = document.querySelector('textarea[name="newComment"]');
    const commentWordsCounter = document.querySelector('.newComment span');

    commentText.addEventListener('input', () => {
        let count = commentText.value.length;
        if (count >= 280) {
            commentText.value = commentText.value.slice(0, 280);
            count = 280;
        }
        commentWordsCounter.innerHTML = `${count}/280`;
    });
    const sendButton = document.querySelector('.postComment');

    sendButton.addEventListener('click', () => {
        if (commentText.value.length > 0) {
            task.addComment(commentText.value);
            taskPageFunctional(task);
        }
    });

    let mouseDowtMain = true;

    document.querySelector('.task').addEventListener('mousedown', () => mouseDowtMain = false);

    document.onclick = function(e) {
        if (!e.target.closest('.task') && !e.target.closest('.taskForm') 
        && currentTaskOpen !== null && mouseDowtMain
        ) {
            closeTask(task);
            document.onclick = null;
        }

        mouseDowtMain = true;
    }
    mainDB.saveInLocalStorage();
}

function deleteTask(task) {
    const deleteTaskBtn = document.querySelector('.deleteIco')
    deleteTaskBtn.addEventListener('click', () => {
        mainDB.remove(task.id);
        closeTask();
        mainDB.saveInLocalStorage();

        // user.innerHTML = '';
        taskBoard.innerHTML = '';

        showMainPage();
    }, {capture: true});
}


function assignField(task) {
    assignOnPage.innerHTML = getUserSelects();
    assignOnPage.value = task.assignee;
}

function edit(task) {
    if (currentTaskOpen && task) {
        const assignee = currentTaskOpen.querySelector('.assignTo select').value;
        const name = currentTaskOpen.querySelector('.title input').value;
        const description = currentTaskOpen.querySelector('.description textarea').value;
        const priority = currentTaskOpen.querySelector('.chooseImportance input:checked').value;
        const status = currentTaskOpen.querySelector('.chooseBoard select').value;
        const isPrivate = !!+currentTaskOpen.querySelector('.chooseAccess input:checked').value;

        if (assignee !== task.assignee ||
                name !== task.name ||
                description !== task.description ||
                priority !== task.priority ||
                status !== task.status ||
                isPrivate !== task.isPrivate) {
                    
            if (confirm('Do you want to change the task?')) {
                mainDB.edit(task.id, name, description, assignee, status, priority, isPrivate);
                mainDB.saveInLocalStorage();

                user.innerHTML = '';
                taskBoard.innerHTML = '';
                showMainPage();
            }
        }      
    }
}