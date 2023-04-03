'use strict';

import { _tweets } from '../mock/tweets.mock.js';
import { Tweet } from './Tweet.model.js';
import { Comment } from './Comment.model.js';

export class TweetCollection {
    constructor(user, tweets = []) {
        this._user = user;
        this._tweets = tweets.filter(item => Tweet.validate(item));
    }

    get user() {
        return this._user;
    }

    set user(value) {}

    getPage(skip = 0, top = 10, filterConfig = { author: '', dateFrom: '', dateTo: '', text: '' }) {
        if (arguments.length === 2) return _tweets.filter((item, index) => index >= skip && index < skip + top).sort((a, b) => a._createdAt - b._createdAt);
        if (arguments.length > 2) {
            return this._tweets
                .filter(item => {
                    if (item._author !== filterConfig?.author) return false;

                    const dateStart = new Date(`${filterConfig?.dateFrom}`);
                    if (item._createdAt < dateStart) return false;

                    const dateEnd = new Date(`${filterConfig?.dateTo}`);
                    if (item._createdAt > dateEnd) return false;

                    if (!item.text.includes(filterConfig?.text)) return false;

                    return true;
                })
                .filter((item, index) => index >= skip && index < skip + top)
                .sort((a, b) => a._createdAt - b._createdAt);
        }
    }

    get(id = '') {
        return this._tweets.find(item => item._id === id);
    }

    add(text = '') {
        const newTweet = new Tweet(text, new Date(), this._user);
        if (Tweet.validate(newTweet)) {
            this._tweets.push(newTweet);
            return true;
        } else {
            return false;
        }
    }

    edit(id = '', text = '') {
        const editTweet = this.get(id);
        if (editTweet && editTweet._author === this._user && text.length <= 280 && typeof text === 'string') {
            editTweet.text = text;
            return true;
        } else {
            return false;
        }
    }

    remove(id = '') {
        const userRemoveTweet = this.get(id);
        if (userRemoveTweet && userRemoveTweet.author === this.user) {
            const index = _tweets.findIndex(item => item === userRemoveTweet);
            this._tweets.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }

    addComment(id = '', text = '') {
        const userTweet = this.get(id);
        const newComment = new Comment(text, this.user);
        if (userTweet && Comment.validate(newComment)) {
            userTweet.comments.push(newComment);
            return true;
        } else {
            return false;
        }
    }

    clear() {
        this.tweets = [];
    }
}
