import { taskView, mainDB, userDB } from "../../index.js";

export function taskCreate() {
    const closeButton = document.querySelector('.task .crossIco');
    const taskPage = document.querySelector('.task');
    const select = document.querySelectorAll('.taskCreationLayout select');
    select[0].innerHTML = getUserSelects()
    closeButton.addEventListener('click', () => {
        taskPage.remove();
    });
    const createTaskButton = document.querySelector('.taskCreationLayout button.create');
    createTaskButton.addEventListener('click', () => {
        const input = document.querySelector('.taskCreationLayout input');
        const textarea = document.querySelector('.taskCreationLayout textarea');
        const select = document.querySelectorAll('.taskCreationLayout select');
        
        const assignee = select[0]
        const name = input.value;
        const description = textarea.value;
        const status = select[1].value;
        const priority = document.querySelector('.chooseImportance input:checked').value;
        const isPrivate = !!+document.querySelector('.chooseAccess input:checked').value;
        taskView.addTask({name, priority, description, assignee, status, isPrivate});
        console.log(mainDB.taskArray.at(-1));
        document.querySelector('.taskCreationLayout').remove();
        mainDB.saveInLocalStorage()
    })
}

function getUserSelects() {
    userDB.getUserArrayFromLocalStorage()
    return userDB.userArray.map(e => `<option>${e.name}</option>`).join('')
}