import { currentUser } from "../../index.js";
import { Comment } from "./comment.js"

export class Task {
    #id;
    #createdAt;
    #author;

    constructor(name, priority, description = '', assignee = currentUser, status = 'to do', isPrivate = false) {
        this.#id = Math.random().toString(16).slice(2);
        this.name = name;
        this.description = description;
        this.#createdAt = new Date();
        this.lastDate = new Date(); 
        this.assignee = assignee;
        this.status = status;
        this.priority = priority
        this.isPrivate = isPrivate;
        this.comments = [];
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

    addComment(text) {
        this.comments.push(new Comment(text));
        return true;
    }

    addOnBoard() {
        const toDoBoard = document.querySelector('#toDo .taskTable .innerContent');
        const inProgressBoard = document.querySelector('#inProgress .taskTable .innerContent');
        const complete = document.querySelector('#complete .taskTable .innerContent');
        if (this.status === 'to do') {
            toDoBoard.insertAdjacentHTML('afterbegin', taskHTML(this.priority, this.name, this.id))
        } else if (this.status === 'in progress') {
            inProgressBoard.insertAdjacentHTML('afterbegin', taskHTML(this.priority, this.name, this.id))
        } else complete.insertAdjacentHTML('afterbegin', taskHTML(this.priority, this.name, this.id)) 
    }

    static validate(task) {
        return (task.name && task.name.length <= 100 && task.description.length <= 280 &&
                task.assignee && task.status && task.priority && (typeof task.isPrivate === 'boolean'));
    }
}