import { headerView, taskFeedView, mainDB } from "../../index.js";
import { clickableTasks } from "./taskPage.js";
import { filter } from "./filter.js";
import { showTaskCreation } from "../../script.js";


export function showMainPage(user) {
    headerView.setCurrentUser(user);
    mainDB.getFromLocalStorage()
    
    taskFeedView.getFeed(0, 10, {status: 'complete'}, 'Complete');
    taskFeedView.getFeed(0, 10, {status: 'in-progress'}, 'In progress');
    taskFeedView.getFeed(0, 10, {status: 'to-do'}, 'To do');

    clickableTasks();
    filter()

    const createTask = document.querySelectorAll('.tableHeader .plusIco');
    createTask.forEach( elem => elem.addEventListener('click', () => showTaskCreation()));
}