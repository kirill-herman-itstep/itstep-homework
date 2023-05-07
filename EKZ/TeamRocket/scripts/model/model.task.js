import { currentUser } from "../../index.js";
import { Comment } from "./model.comment.js";

export class Task {
    _id;
    _createdAt;
    _author;

    constructor(name, priority, description = '', assignee = currentUser, status = 'to do', isPrivate = false) {
        this._id = Math.random().toString(16).slice(2);
        this.name = name;
        this.description = description;
        this._createdAt = new Date();
        this.lastDate = new Date(); 
        this.assignee = assignee;
        this.status = status;
        this.priority = priority
        this.isPrivate = isPrivate;
        this.comments = [];
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

    addComment(value) {
        if (typeof value === 'string') {
            this.comments.push(new Comment(value));
        } else if (typeof value === 'object') {
            this.comments.push(value)
        } else return false;
        
        return true;
    }

    static validate(task) {
        return (task.name && typeof task.name === 'string' && task.name.length <= 100 
                && task.description.length <= 280 && typeof task.description === 'string' 
                && task.assignee && typeof task.assignee === 'string' 
                && task.status && typeof task.status === 'string' 
                && task.priority && typeof task.priority === 'string' 
                && (typeof task.isPrivate === 'boolean'));
    }
}