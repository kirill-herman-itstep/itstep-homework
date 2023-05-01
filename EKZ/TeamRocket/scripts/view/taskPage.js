import { view } from "../../index.js";

export class TaskPage {
    constructor(containerID) {
        this.containerID = containerID;
    }

    display(containerID, content) {
        const container = document.getElementById(`${containerID}`);
        container.prepend(content);

        // container.insertAdjacentHTML('afterbegin', content);
    }

    showTaskPage(task) {
        this.display(this.containerID, this.returnPageHTML(task));
        this.setCurrentImportance(task)
        this.setCurrentPrivate(task)
    }

    returnPageHTML(task) {
        const pageHTML = view.get('taskPage');
        pageHTML.querySelector('.assignTo select').value = task.assignee;
        pageHTML.querySelector('.title input').value = task.name;
        pageHTML.querySelector('.description textarea').value = task.description;
        pageHTML.querySelector('.boardName').innerText = task.status;
        this.returnCommentsHTML(task).forEach(comment => {
            pageHTML.querySelector('.commentSection').append(comment);
        })

        return pageHTML;
    }

    returnCommentsHTML(task) {
        return task.comments.map(comment => this.returnCommentHTML(comment));
    }
    
    returnCommentHTML(comment) {
        const commentHTML = view.get('comment');
        commentHTML.querySelector('p').innerText = comment.text;
        commentHTML.querySelector('.date').innerText = Date(comment._createdAt);

        return commentHTML;
    }

    setCurrentImportance(task) {
        const currentImportance = task.priority;
        const importances = document.querySelectorAll('#importance input')
        importances.forEach(e => {
            if (e.value === currentImportance) e.setAttribute('checked', ' ')
        })
    }

    setCurrentPrivate(task) {
        const currentAccess = task.isPrivate;
        const access = document.querySelectorAll('.chooseAccess input')
        if (currentAccess) {
            access[1].setAttribute('checked', ' ')
        } else access[0].setAttribute('checked', ' ')
    }
}
