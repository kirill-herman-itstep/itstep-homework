import { mainDB, taskPage, taskFeedView } from "../../index.js";
import { showTaskFeed } from "./mainPage.js";
import { getUserSelects } from "./taskCreate.js";
import { showFilter } from "../../script.js";

let currentTaskOpen = null;
let task;

export function clickableTasks() {
    const allFeeds = document.querySelectorAll('.taskTable');

    allFeeds.forEach(elem => elem.addEventListener('mousedown', e => {

        if (e.target.closest('.taskForm')) {
            let currentBoard;
            const taskElem = e.target.closest('.taskForm');

            if (document.querySelector('.filterLayout')) showFilter();

            const startX = e.clientX;
            const startY = e.clientY;
            let moveX = startX;
            let moveY = startY;

            taskElem.style.position = 'relative';

            let mousePositionX = startX - (startX - elem.offsetLeft - e.offsetX - e.target.offsetLeft);
            let mousePositionY = startY - (startY - elem.offsetTop - e.offsetY - e.target.offsetTop);

            if (e.target === taskElem) {
                mousePositionX = startX - (startX - elem.offsetLeft - e.offsetX);
                mousePositionY = startY - (startY - elem.offsetTop - e.offsetY);
            }

            

            taskElem.style.width = `${taskElem.offsetWidth}px`;
            taskElem.style.position = 'absolute';
            taskElem.style.left = `${startX - mousePositionX}px`;
            taskElem.style.top = `${startY - mousePositionY}px`;
            taskElem.style.zIndex = '10';
            
            
            const emptyDiv = document.createElement('div');
            emptyDiv.classList.add('empty-div');
            emptyDiv.style.minHeight = `${taskElem.offsetHeight}px`;
            taskElem.before(emptyDiv);

            
            function moveTask(e) {

                moveX = e.clientX;
                moveY = e.clientY;
                
                taskElem.style.left = `${moveX - mousePositionX}px`;
                taskElem.style.top = `${moveY - mousePositionY}px`;

                

                if (identifyBoard(e, allFeeds)) {
                    currentBoard = identifyBoard(e, allFeeds);
                    currentBoard.style.boxShadow = '0 0 2px';
                } else {
                    if (currentBoard) currentBoard.style.boxShadow = '';
                }
            }


            document.addEventListener('mousemove', moveTask);

            document.onmouseup = () => {
                document.removeEventListener('mousemove', moveTask);

                taskElem.style.position = '';
                taskElem.style.top = '';
                taskElem.style.left = '';
                taskElem.style.width = '';
                taskElem.style.zIndex = '';
                taskElem.style.position = '';
                if (currentBoard) currentBoard.style.boxShadow = '';
                
                document.querySelector('.empty-div').remove();

                if (currentTaskOpen) closeTask(task);
                
                if (startX === moveX && startY === moveY) {
                    task = mainDB.getTask(taskElem.id);
                    taskPageFunctional(task);
                }

                document.onmouseup = null;
            }          
        }
    }));
}

function identifyBoard(e, allFeeds) {
    allFeeds = Array.from(allFeeds);
    return allFeeds.find(elem => {
        const top = elem.offsetTop;
        const left = elem.offsetLeft;
        const height = elem.offsetHeight;
        const width = elem.offsetWidth;

        if (e.clientX > left && e.clientX < left + width && e.clientY > top && e.clientY < top + height) {
            return true;
        } else return false;
    })
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

    mainDB.saveInLocalStorage();
}

function deleteTask(task) {
    const deleteTaskBtn = document.querySelector('.deleteIco')
    deleteTaskBtn.addEventListener('click', () => {
        if (confirm('Do you want to delete the task?')) {
            mainDB.remove(task.id);
            closeTask();
            mainDB.saveInLocalStorage();

            taskBoard.innerHTML = '';

            showTaskFeed();
        }
    }, {capture: true});
}


function assignField(task) {
    assignOnPage.innerHTML = getUserSelects();
    assignOnPage.value = task.assignee;
}

export function edit(task) {
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

                taskBoard.innerHTML = '';

                showTaskFeed();
            }
        }
        
        return;
    }

    if (task && task.lastUserName && task.newUserName) {
        mainDB.editWhenChangUserName(task.lastUserName, task.newUserName);
        mainDB.saveInLocalStorage();

        taskBoard.innerHTML = '';

        showTaskFeed();
    }
}