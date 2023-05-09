import { headerView, taskFeedView, userDB, mainDB } from "../../index.js";
import { clickableTasks } from "./taskPage.js";
import { filter } from "./filter.js";
import { showTaskCreation } from "../../script.js";


export function showMainPage() {
    headerView.setCurrentUser(userDB.getCurrentUserFromLocalStorage());

    filter();

    const assigneeAvatars = document.querySelectorAll('.taskBoard .assignee')
    assigneeAvatars.forEach(e => e.addEventListener('hover', () => {

    }))

    showTaskFeed();
}

export function showTaskFeed(completeBoardFilter = {status: 'complete'}, 
        inProgressBoardFilter = {status: 'in-progress'},
        toDoBoardFilter = {status: 'to-do'}) {

    mainDB.getFromLocalStorage();
    
    taskFeedView.getFeed(0, 10, completeBoardFilter, 'Complete');
    taskFeedView.getFeed(0, 10, inProgressBoardFilter, 'In progress');
    taskFeedView.getFeed(0, 10, toDoBoardFilter, 'To do');

    clickableTasks();

    const createTask = document.querySelectorAll('.tableHeader .plusIco');
    createTask.forEach( elem => elem.addEventListener('click', (e) => showTaskCreation(e)));
}