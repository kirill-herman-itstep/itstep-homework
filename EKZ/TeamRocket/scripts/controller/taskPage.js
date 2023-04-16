import { taskPage } from "../../index.js";
import { mainDB } from "../../index.js";

let currentTaskOpen = null;

export function clickableTasks() {
    const allTasks = document.querySelectorAll('.taskForm');
    allTasks.forEach(e => e.addEventListener('click', () => {
        if (currentTaskOpen) currentTaskOpen.remove();

        console.log(e.id);
        taskPage.showTaskPage(mainDB.getTask(e.id));

        const closeButton = document.querySelector('.task .crossIco');
        currentTaskOpen = document.querySelector('.task');

        closeButton.addEventListener('click', () => {
            currentTaskOpen.remove();
            currentTaskOpen = null;
        });
    }))
}