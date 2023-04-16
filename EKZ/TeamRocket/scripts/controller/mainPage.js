import { headerView, taskFeedView } from "../../index.js";
import { clickableTasks } from "./taskPage.js";
import { showTaskCreation } from "../../script.js";


export function showMainPage() {
    headerView.setCurrentUser(user);
    
    taskFeedView.getFeed(0, 10, {status: 'complete'}, 'Complete');
    taskFeedView.getFeed(0, 10, {status: 'in progress'}, 'In progress');
    taskFeedView.getFeed(0, 10, {status: 'to do'}, 'To do');

    clickableTasks();

    const createTask = document.querySelectorAll('.tableHeader .plusIco');
    createTask.forEach( elem => elem.addEventListener('click', () => showTaskCreation()));
}
