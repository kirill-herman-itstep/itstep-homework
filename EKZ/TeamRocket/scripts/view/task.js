import { mainDB, userDB } from "../../index.js";
import { view } from "../../index.js";

export class TaskView {

    arrayTaskView = ['to-do', 'in-progress', 'complete'];

    display(containerID, content) {
        const container = document.getElementById(`${containerID}`);
        container.prepend(content);
    }

    addTask(taskObj) {
        mainDB.add(taskObj.name, taskObj.priority, taskObj.description, taskObj.assignee, taskObj.status, taskObj.isPrivate = false);
        this.display(taskObj.status, this.getHTML(mainDB.taskArray.at(-1)));
    }

    getHTML(taskObj) {
        const taskHTML = view.get('taskForm');
        taskHTML.querySelector('.taskForm').id = taskObj.id;
        taskHTML.querySelector('.mark').classList.toggle(taskObj.priority);
        taskHTML.querySelector('.mark').innerText = taskObj.priority;
        taskHTML.querySelector('.taskName').innerText = taskObj.name;
        taskHTML.querySelector('.assigneeAvatar').innerHTML = `<image href="avatar/${userDB.userArray.find(e => e.name === taskObj.assignee).avatar}.png" width="100%"">`
        return taskHTML;
    }

    editTask(id, taskObj) {
        mainDB.edit(id, taskObj.name, taskObj.description, taskObj.assignee, taskObj.status, taskObj.priority, taskObj.isPrivate);
    }

    removeTask(id) {
        mainDB.remove(id);
    }

    showTask(id) {
        const task = mainDB.getTask(id);
        this.display(this.containerID, this.getHTML(task));
    }
}
