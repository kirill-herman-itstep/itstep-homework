import { taskPage } from "../../index.js";
import { mainDB } from "../../index.js";


export function clickableTasks() {
    const allTasks = document.querySelectorAll('.taskForm')
    allTasks.forEach(e => e.addEventListener('click', () => {
        console.log(e.id);
        taskPage.showTaskPage(mainDB.getTask(e.id))

        const closeButton = document.querySelector('.task .crossIco');
        const taskPageHTML = document.querySelector('.task');
        closeButton.addEventListener('click', () => taskPageHTML.remove());
    }))
}