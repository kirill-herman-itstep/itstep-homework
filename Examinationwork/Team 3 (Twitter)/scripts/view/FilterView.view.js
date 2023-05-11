'use strict';

export class FilterView {
    constructor(containerID = '') {
        this.element = document.getElementById(`${containerID}`);
    }

    display(filterTweets = []) {
        filterTweets.forEach(item => {
            const HTMLcode = `<div class="main-current-twit" id="twitNumber1">
                <div class="main-current-twit-autor">
                <div>${item._author}</div>
                <div>${item._createdAt.toLocaleString()}</div>
            </div>
            <div class="main-current-twit-text">${item.text}</div>
                <div class="main-current-twit-info">
                <div class="main-current-twit-info-edit"></div>
                <div class="main-current-twit-info-delete"></div>
                <div class="main-current-twit-info-messege"></div>
                <div id="mainQuantityMessege">${item.comments.length}</div>
            </div>
        </div>`;
            this.element.insertAdjacentHTML('beforeend', HTMLcode);
        });
    }
}
