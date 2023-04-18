import { mainDB } from "../../index.js";
import { view } from "../../index.js";
import { taskView } from "../../index.js";

export class TaskFeedView {
    constructor(containerID) {
        this.containerID = containerID;
    }

    display(containerID, content) {
        const container = document.getElementById(`${containerID}`);
        container.prepend(content);
    }

    getFeed(skip = 0, top = 10, filterConfig = {}, boardName) {
        const taskArray = mainDB.getTasks(skip, top, filterConfig);
        this.display(this.containerID, this.getBoardHTML(taskArray, boardName));
    }

    getBoardHTML(taskArray, boardName) {
        const idBoardName = boardName.split('').reduce((acc, elem) => {
            if (elem === ' ') return acc += '-';
            return acc += elem.toLowerCase();
        },'');

        const boardHTML = view.get('taskTable');
        boardHTML.querySelector('h4').innerText = boardName;
        boardHTML.querySelector('.tasks').id = idBoardName;
        this.getTasksHTML(taskArray).forEach(e => {
            boardHTML.querySelector('.tasks').append(e);
        });

        return boardHTML;
    }

    getTasksHTML(taskArray) {
        return taskArray.map(e => taskView.getHTML(e));
    }
}
