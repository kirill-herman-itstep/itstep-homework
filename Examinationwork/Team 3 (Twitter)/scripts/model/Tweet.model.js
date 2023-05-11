'use strict';

import { _counter } from '../helper/id.helper.js';

export class Tweet {
    constructor(text = '', userDate = new Date(), author = '', id = `${_counter()}`, comments = []) {
        (this._id = id), (this.text = text), (this._createdAt = new Date(`${userDate}`)), (this._author = author), (this.comments = comments);
    }

    get id() {
        return this._id;
    }

    set id(value) {}

    get author() {
        return this._author;
    }

    set author(value) {}

    get createdAt() {
        return this._createdAt;
    }

    set createdAt(value) {}

    static validate(tweet) {
        for (const key in tweet) {
            if (Object.hasOwnProperty.call(tweet, key)) {
                if (key === '_id') {
                    if (typeof tweet[key] !== 'string') return false;
                }

                if (tweet[key] && key === 'text') {
                    if (tweet[key].length > 280) return false;
                    if (typeof tweet[key] !== 'string') return false;
                }

                if (key === '_createdAt') {
                    if (!(tweet[key] instanceof Date) || Number.isNaN(Date.parse(tweet[key]))) return false;
                }

                if (key === '_author') {
                    if (!tweet[key]) return false;
                    if (typeof tweet[key] !== 'string') return false;
                }
            }
        }
        return true;
    }
}
