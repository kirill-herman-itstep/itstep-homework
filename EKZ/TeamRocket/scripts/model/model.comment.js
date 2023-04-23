import { currentUser } from "../../index.js";

export class Comment {
    _id;
    _createdAt;
    _author;

    constructor(text) { 
        this._id = Math.random().toString(16).slice(2);
        this.text = text;
        this._createdAt = new Date();
        this._author = currentUser;
    }

    get id() {
        return this._id;
    }

    get createdAt() {
        return this._createdAt;
    }

    get author() {
        return this._author;
    }

    static validate(com) {
        return com.text.length <= 280 && typeof com.text === 'string';
    }
}