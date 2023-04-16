export class FilterView {
    constructor(containerID) {
        this.containerID = containerID;
    }

    display(containerID, content) {
        const container = document.getElementById(`${containerID}`);
        container.insertAdjacentHTML('afterbegin', content);
    }
}