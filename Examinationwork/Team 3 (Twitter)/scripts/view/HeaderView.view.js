'use strict';

export class HeaderView {
    constructor(containerId = '') {
        this.element = document.getElementById(`${containerId}`);
    }

    display(user = '') {
        this.element.innerText = `Hi, ${user}`;
    }
}
