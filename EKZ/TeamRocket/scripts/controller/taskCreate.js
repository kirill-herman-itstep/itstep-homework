import { taskView, mainDB } from "../../index.js";

export function taskCreate() {
    const createTaskButton = document.querySelector('.taskCreationLayout button')
    createTaskButton.addEventListener('click', () => {
        const inputs = document.querySelectorAll('.taskCreationLayout input');
        console.log(inputs);
        const textarea = document.querySelector('.taskCreationLayout textarea');
        const select = document.querySelector('.taskCreationLayout select');
        
        const assignee = inputs[0].value;
        const name = inputs[1].value;
        const description = textarea.value;
        const status = select.value;
        const priority = document.querySelector('.chooseImportance input:checked').value
        const access = document.querySelector('.chooseAccess input:checked').value
        taskView.addTask({name, priority, description, assignee, status, access})
        console.log(mainDB);
    })
}