'use strict';

import { Tweet } from '../model/Tweet.model.js';

export class TweetView {
    constructor(consructorId = '') {
        this.element = document.getElementById(`${consructorId}`);
    }

    display(tweet) {
        if (tweet !== undefined) {
            const containerTweet = this.element.children[1];
            const HTMLTweet = `<div class="twit-current-twit" id="${tweet._id}">
                <div class="twit-current-twit-autor">
                    <div>${tweet._author}</div>
                    <div>${tweet._createdAt.toLocaleString()}</div>
                </div>
                <div class="twit-current-twit-text">${tweet.text}</div>
                <div class="twit-current-twit-info">
                    <div class="twit-current-twit-info-edit"></div>
                    <div class="twit-current-twit-info-delete"></div>
                    <div class="twit-current-twit-info-messege"></div>
                    <div id="twitQuantityMessege">${tweet.comments.length}</div>
                </div>
            </div>`;
            containerTweet.innerHTML = '';
            containerTweet.insertAdjacentHTML('beforeend', HTMLTweet);

            const containerComment = this.element.children[2];
            containerComment.innerHTML = '';
            tweet.comments.forEach(item => {
                const HTMLComment = `<div class="comments-twit" id="${item._id}">
                    <div class="comments-twit-autor">
                        <div>${item._author}</div>
                        <div>${item._createdAt.toLocaleString()}</div>
                    </div>
                    <div class="comments-twit-text">${item.text}</div>
                </div>`;
                containerComment.insertAdjacentHTML('beforeend', HTMLComment);
            });
        }
    }
}
