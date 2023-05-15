import { Task } from "./model.task.js";
import { Comment } from "./model.comment.js";
import { currentUser, mainDB } from "../../index.js";

export class TaskCollection {
    taskArray = [];

    constructor(tasks) {
        if (Array.isArray(tasks)) {
            this.taskArray.push(...tasks);
        }
    }

    getTasks(skip = 0, top = 10, filterConfig = {}) {

        const filteredTasks = this.taskArray.filter(task => {
            if (filterConfig.assignee && task.assignee !== filterConfig.assignee) {
                return false;
            }

            if (filterConfig.dateFrom && Date.parse(filterConfig.dateFrom) > Date.parse(task.createdAt)) {
                return false;
            }

            if (filterConfig.dateTo && (Date.parse(filterConfig.dateTo) + (24 * 60 * 60 * 1000)) < Date.parse(task.createdAt)) {
                return false;
            }

            if (filterConfig.status && filterConfig.status !== task.status) {
                return false;
            }

            if (filterConfig.priority && filterConfig.priority !== task.priority) {
                return false;
            }

            if (filterConfig.isPrivate !== undefined && filterConfig.isPrivate !== task.isPrivate) {
                return false;
            }

            if (filterConfig.description && !task.description.includes(filterConfig.description) && 
            !task.name.includes(filterConfig.description)) {
                    return false;
            }
            return true;
        });

        this.sortTaskByDate();

        let returnedArray = filteredTasks.slice(skip, top + skip);
        
        return returnedArray;
    }

    sortTaskByDate() {
        return this.taskArray.sort((a, b) => Date.parse(b.lastDate) - Date.parse(a.lastDate));
    }

    getTask(id) {
        if (typeof id === 'string') return this.taskArray.find(elem => elem.id === id);
    }

    add(name, priority, description, assignee, status, isPrivate = false) {
        const task = new Task(name, priority, description, assignee, status, isPrivate);
        if (Task.validate(task)) {
            this.taskArray.push(task);
            return true;
        }
        return false;
    }

    addAll(tasks) {
        const invalidTasks = [];
        tasks.forEach(task => {
            if (Task.validate(task)) {
                this.taskArray.push(task);
            } else {
                invalidTasks.push(task);
            }
        });

        return invalidTasks;
    }

    clear() {
        this.taskArray = [];
    }

    edit(id, name, description, assignee, status, priority, isPrivate = false) {
        const task = this.getTask(id);

        if (!task) return false;

        if (name !== task.name && typeof name === 'string') {
            if (name.length > 100 || !name) return false;
            else task.name = name;
        }

        if (description !== task.description && typeof description === 'string') {
            if (description > 280) return false;
            else task.description = description;
        }
    
        if (assignee !== task.assignee && typeof assignee === 'string') {
            task.assignee = assignee;
        }
        if (status !== task.status && typeof status === 'string') {
            task.status = status;
            task.lastDate = new Date();
        }
        if (priority !== task.priority && typeof priority === 'string') {
            task.priority = priority;
        }
        if (isPrivate !== task.isPrivate && typeof isPrivate === 'boolean') {
            task.isPrivate = isPrivate;
        }
        return true;
    }

    editWhenChangUserName(lastName, newName, avatar) {
        for (const task of this.taskArray) {
            if (task.assignee === lastName) task.assignee = newName;

            if (task._author.name === lastName) {
                task._author.name = newName;
                task._author.avatar = avatar;
            }

            for (const comment of task.comments) {
                if (comment._author === lastName) {
                    comment._author.name = newName;
                    comment._author.avatar = avatar;
                }
            }
        }
    }

    remove(id) {
        const task = this.getTask(id);

        const index = this.taskArray.indexOf(task);
        this.taskArray.splice(index, 1);

        return true;
    }

    saveInLocalStorage() {
        localStorage.setItem('taskArray', JSON.stringify(this.taskArray));
    }

    getFromLocalStorage() {
        let tasks = JSON.parse(localStorage.getItem('taskArray'));
        if (!tasks) {
            localStorage.setItem('taskArray', `[{"_id":"fed45c959023a","_createdAt":"2023-05-11T15:34:08.190Z","_author":{"id":"bb9d3efe28203","login":"ballage94@gmail.com","password":"kmmc8g9p","name":"BiYuLaLaLa","avatar":0},"name":"Go to the courses today","description":"","lastDate":"2023-05-11T15:34:08.190Z","assignee":"LoremLorem","status":"to-do","priority":"low","isPrivate":false,"comments":[{"_id":"b82232828db79","_createdAt":"2023-05-11T15:34:51.350Z","_author":{"id":"bb9d3efe28203","login":"ballage94@gmail.com","password":"kmmc8g9p","name":"BiYuLaLaLa","avatar":0},"text":"Oh, today is the exam!"}]},{"_id":"bc4bd99bbb316","_createdAt":"2023-05-11T15:29:24.950Z","_author":{"id":"45e1f3060e8ed","login":"kitamuraRey@jap.com","password":"undefinedSymbols","name":"Rey Kitamura","avatar":5},"name":"Learn Angular","description":"","lastDate":"2023-05-11T15:29:24.950Z","assignee":"FIIIIIISH","status":"to-do","priority":"medium","isPrivate":false,"comments":[{"_id":"321b25e4bffb3","_createdAt":"2023-05-11T15:30:45.271Z","_author":{"id":"bb9d3efe28203","login":"ballage94@gmail.com","password":"kmmc8g9p","name":"BiYuLaLaLa","avatar":0},"text":"Probably starting next week"}]},{"_id":"af8e9b95e8635","_createdAt":"2023-05-11T15:24:10.624Z","_author":{"id":"8188914b4c4be","login":"isuzuri@gmail.com","password":"9edl4","name":"Isuzuri","avatar":2},"name":"Show Kirill the term paper","description":"!!!!","lastDate":"2023-05-11T15:24:10.624Z","assignee":"Isuzuri","status":"in-progress","priority":"high","isPrivate":false,"comments":[{"_id":"3c4b02a5b9ea4","_createdAt":"2023-05-11T15:26:02.495Z","_author":{"id":"8188914b4c4be","login":"isuzuri@gmail.com","password":"9edl4","name":"Isuzuri","avatar":2},"text":"Do you think we'll get 10?"},{"_id":"c60c66b1a960c","_createdAt":"2023-05-11T15:27:45.183Z","_author":{"id":"45e1f3060e8ed","login":"kitamuraRey@jap.com","password":"undefinedSymbols","name":"Rey Kitamura","avatar":5},"text":"I really hope!"},{"_id":"1fffbbf490bab","_createdAt":"2023-05-11T15:31:54.702Z","_author":{"id":"bb9d3efe28203","login":"ballage94@gmail.com","password":"kmmc8g9p","name":"BiYuLaLaLa","avatar":0},"text":"In my opinion it turned out well"}]},{"_id":"5826a5aa08fdf","_createdAt":"2023-05-11T15:19:02.585Z","_author":{"id":"8188914b4c4be","login":"isuzuri@gmail.com","password":"9edl4","name":"Isuzuri","avatar":2},"name":"Write tasks for the board","description":"","lastDate":"2023-05-11T15:19:02.585Z","assignee":"Isuzuri","status":"in-progress","priority":"low","isPrivate":true,"comments":[{"_id":"be95a26c0d5d","_createdAt":"2023-05-11T15:21:17.576Z","_author":{"id":"8188914b4c4be","login":"isuzuri@gmail.com","password":"9edl4","name":"Isuzuri","avatar":2},"text":" How difficult! It's not easy T.T"}]},{"_id":"0ecde25783113","_createdAt":"2023-05-11T15:14:14.545Z","_author":{"id":"8188914b4c4be","login":"isuzuri@gmail.com","password":"9edl4","name":"Isuzuri","avatar":2},"name":"Do something!","description":"","lastDate":"2023-05-11T15:14:14.545Z","assignee":"Rey Kitamura","status":"to-do","priority":"high","isPrivate":false,"comments":[]},{"_id":"447119a62c6c6","_createdAt":"2023-05-11T15:12:23.554Z","_author":{"id":"8188914b4c4be","login":"isuzuri@gmail.com","password":"9edl4","name":"Isuzuri","avatar":2},"name":"Feed the fish","description":"Feed the fish with canned food","lastDate":"2023-05-11T15:12:23.554Z","assignee":"BiYuLaLaLa","status":"complete","priority":"medium","isPrivate":false,"comments":[{"_id":"f8532371f2271","_createdAt":"2023-05-11T15:12:34.162Z","_author":{"id":"8188914b4c4be","login":"isuzuri@gmail.com","password":"9edl4","name":"Isuzuri","avatar":2},"text":"My fish are dead!"}]}]`);
            
            this.taskArray = JSON.parse(localStorage.getItem('taskArray'));
        } else {
            tasks = tasks.map(e => {
                const task = Object.assign(new Task(), e);

                for (let i = 0; i < e.comments.length; i++) {
                    task.comments[i] =  Object.assign(new Comment(), e.comments[i]);
                }
                
                return task;
            });
            this.taskArray = [];
            this.addAll(tasks);
        }
    }
}