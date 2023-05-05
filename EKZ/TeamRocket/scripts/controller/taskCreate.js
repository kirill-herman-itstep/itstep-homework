import { taskView, mainDB, userDB } from "../../index.js";

export function taskCreate() {
    const closeButton = document.querySelector('.task .crossIco');
    const taskPage = document.querySelector('.task');
    const select = document.querySelectorAll('.taskCreationLayout select');
    select[0].innerHTML = getUserSelects();
    closeButton.addEventListener('click', () => {
        taskPage.remove();
    });
    const createTaskButton = document.querySelector('.taskCreationLayout button.create');
    createTaskButton.addEventListener('click', () => {
        const input = document.querySelector('.taskCreationLayout input');
        const textarea = document.querySelector('.taskCreationLayout textarea');
        const select = document.querySelectorAll('.taskCreationLayout select');
        
        console.dir(select[0].value);
        const assignee = select[0].value;
        const name = input.value;
        const description = textarea.value;
        const status = select[1].value;
        let priority;
        if (document.querySelector('.chooseImportance input:checked')) {
            priority = document.querySelector('.chooseImportance input:checked').value;
        } else priority = 'low';
        let isPrivate;
        if (document.querySelector('.chooseAccess input:checked')) {
            isPrivate = !!+document.querySelector('.chooseAccess input:checked').value;
        } else isPrivate = false;

        taskView.addTask({name, priority, description, assignee, status, isPrivate});
        document.querySelector('.taskCreationLayout').remove();
        mainDB.saveInLocalStorage();
    })
}

export function getUserSelects() {
    userDB.getUserArrayFromLocalStorage();
    const currentUser = userDB.getCurrentUserFromLocalStorage();
    return userDB.userArray.map(e => {
        if (currentUser.name === e.name) {
            return `<option selected>${e.name}</option>`;
        } else {
            return `<option>${e.name}</option>`;
        }     
    }).join('');
}