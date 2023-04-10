import { mainDB } from "../../index.js"
import { taskView } from "../../index.js"

export class TaskFeedView {
    constructor(containerID) {
        this.containerID = containerID;
    }

    display(containerID, content) {
        const container = document.getElementById(`${containerID}`)
        container.insertAdjacentHTML('afterbegin', content)
    }

    getFeed(skip = 0, top = 10, filterConfig = {}, boardName) {
        const taskArray = mainDB.getTasks(skip, top, filterConfig);
        this.display(this.containerID, this.getBoardHTML(taskArray, boardName))
    }

    getBoardHTML(taskArray, boardName) {
        return `
            <div class="taskTableWrapper">
                <div class="tableHeader">
                    <h4 contenteditable="true">${boardName}</h4>
                    <div>
                        <svg class="plusIco" viewBox="0 0 14 14">
                            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z"/>
                        </svg>
                    </div>
                </div>
                <div class="taskTable">
                    <div class="border top"></div>
                    <div class="innerContent">
                    ${this.getTasksHTML(taskArray)}
                    </div>
                    <div class="border bottom"></div>
                </div>
            </div>`
    }

    getTasksHTML(taskArray) {
        let accTaskHTML = ''; 
        taskArray.forEach(e => accTaskHTML += taskView.getHTML(e))
        return accTaskHTML;
    }
}
