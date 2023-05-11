'use strict';

import { _counter } from '../helper/id.helper.js';

export class Comment {
    constructor(text = '', author = '', id = `${_counter()}`, createdAt = new Date()) {
        (this._id = id), (this.text = text), (this._createdAt = new Date(`${createdAt}`)), (this._author = author);
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

    static validate(comment) {
        for (const key in comment) {
            if (Object.hasOwnProperty.call(comment, key)) {
                if (key === '_id') {
                    if (typeof comment[key] !== 'string') return false;
                }

                if (comment[key] && key === 'text') {
                    if (comment[key].length > 280) return false;
                    if (typeof comment[key] !== 'string') return false;
                }
            }

            if (key === '_createdAt') {
                if (!(comment[key] instanceof Date) || Number.isNaN(Date.parse(comment[key]))) return false;
            }

            if (key === '_author') {
                if (!comment[key]) return false;
                if (typeof comment[key] !== 'string') return false;
            }
        }
        return true;
    }
}
