import { taskFeedView } from "../../index.js";
export class FilterView {
    constructor(containerID) {
        this.containerID = containerID;
    }

    display(containerID, content) {
        const container = document.getElementById(`${containerID}`);
        container.insertAdjacentHTML('afterbegin', content);
    }

    filter(filterObj) {
        taskBoard.innerHTML = '';

        const completeBoardFilter = Object.assign({status: 'complete'}, filterObj);
        const inProgressBoardFilter = Object.assign({status: 'in-progress'}, filterObj);
        const toDoBoardFilter = Object.assign({status: 'to-do'}, filterObj);

        taskFeedView.getFeed(0, 10, completeBoardFilter, 'Complete');
        taskFeedView.getFeed(0, 10, inProgressBoardFilter, 'In progress');
        taskFeedView.getFeed(0, 10, toDoBoardFilter, 'To do');

    }
}