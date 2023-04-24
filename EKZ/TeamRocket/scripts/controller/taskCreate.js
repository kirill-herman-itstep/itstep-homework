import { taskView, mainDB } from "../../index.js";

export function taskCreate() {
    const closeButton = document.querySelector('.task .crossIco');
    const taskPage = document.querySelector('.task');
    closeButton.addEventListener('click', () => {
        taskPage.remove();
    });
    const createTaskButton = document.querySelector('.taskCreationLayout button.create');
    createTaskButton.addEventListener('click', () => {
        const inputs = document.querySelectorAll('.taskCreationLayout input');
        const textarea = document.querySelector('.taskCreationLayout textarea');
        const select = document.querySelector('.taskCreationLayout select');
        
        const assignee = inputs[0].value;
        const name = inputs[1].value;
        const description = textarea.value;
        const status = select.value;
        const priority = document.querySelector('.chooseImportance input:checked').value;
        const isPrivate = !!+document.querySelector('.chooseAccess input:checked').value;
        taskView.addTask({name, priority, description, assignee, status, isPrivate});
        console.log(mainDB.taskArray.at(-1));
        document.querySelector('.taskCreationLayout').remove();
        mainDB.saveInLocalStorage()
    })
}