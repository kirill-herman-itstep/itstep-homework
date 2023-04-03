import { currentUser } from "../../index.js";

export class Comment {
    #id;
    #createdAt;
    #author;

    constructor(text) { 
        this.#id = Math.random().toString(16).slice(2);
        this.text = text;
        this.#createdAt = new Date();
        this.#author = currentUser;
    }

    get id() {
        return this.#id;
    }

    get createdAt() {
        return this.#createdAt;
    }

    get author() {
        return this.#author;
    }

    static validate(com) {
        return com.text.length <= 280;
    }
}