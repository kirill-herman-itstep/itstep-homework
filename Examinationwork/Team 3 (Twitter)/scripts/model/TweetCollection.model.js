'use strict';

import { Tweet } from './Tweet.model.js';
import { Comment } from './Comment.model.js';

export class TweetCollection {
    constructor(user, tweets = []) {
        this._user = user;
        this._tweets = tweets.filter(item => Tweet.validate(item)).sort((a, b) => b._createdAt - a._createdAt);
    }

    get user() {
        return this._user;
    }

    set user(value) {}

    get tweets() {
        return this._tweets;
    }

    set tweets(value) {}

    getPage(skip = 0, top = 10, filterConfig = { author: '', dateFrom: '', dateTo: '', text: '', hashtags: [''] }) {
        if (arguments.length === 2) return this._tweets.filter((item, index) => index >= skip && index < skip + top).sort((a, b) => a._createdAt - b._createdAt);
        if (arguments.length > 2) {
            return this._tweets
                .filter(item => {
                    if (item._author !== filterConfig?.author && filterConfig?.author !== '') return false;

                    const dateStart = new Date(`${filterConfig?.dateFrom}`);
                    if (item._createdAt < dateStart && dateStart !== '') return false;

                    const dateEnd = new Date(`${filterConfig?.dateTo}`);
                    if (item._createdAt > dateEnd && dateEnd !== '') return false;

                    if (!item.text.includes(filterConfig?.text)) return false;

                    if (filterConfig?.hashtags[0] !== '') {
                        const arrayHashtags = item.text
                            .split(' ')
                            .filter(item => item.includes('#'))
                            .filter(item => item.slice(1) === filterConfig?.hashtags.find(itemFilter => itemFilter === item.slice(1)));
                        if (arrayHashtags.length === 0) return false;
                    }

                    return true;
                })
                .filter((item, index) => index >= skip && index < skip + top)
                .sort((a, b) => b._createdAt - a._createdAt);
        }
    }

    get(id = '') {
        return this._tweets.find(item => item._id === id);
    }

    add(text = '') {
        const newTweet = new Tweet(text, new Date(), this._user);
        if (Tweet.validate(newTweet)) {
            this._tweets.unshift(newTweet);
            localStorage.setItem('tweets', JSON.stringify(this.tweets));
            return true;
        } else {
            return false;
        }
    }

    edit(id = '', text = '') {
        const editTweet = this.get(id);
        if (editTweet && editTweet._author === this._user && text.length <= 280 && typeof text === 'string') {
            editTweet.text = text;
            localStorage.setItem('tweets', JSON.stringify(this.tweets));
            return true;
        } else {
            return false;
        }
    }

    remove(id = '') {
        const userRemoveTweet = this.get(id);
        if (userRemoveTweet && userRemoveTweet.author === this.user) {
            const index = this._tweets.findIndex(item => item === userRemoveTweet);
            this._tweets.splice(index, 1);
            localStorage.setItem('tweets', JSON.stringify(this.tweets));
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
            localStorage.setItem('tweets', JSON.stringify(this.tweets));
            return true;
        } else {
            return false;
        }
    }

    changeUser(user = '') {
        this._user = user;
    }

    clear() {
        this.tweets = [];
    }
}
