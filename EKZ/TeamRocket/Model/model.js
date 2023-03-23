class TaskCollection {
    taskArray = [];

    sortTaskByDate() {
        return this.taskArray.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1)
    }

    getTasks(skip = 0, top = 10, filterConfig = {}) {
        this.sortTaskByDate();
        let returnedArray = [];
        for (let i = skip; i <= skip + top - 1; i++) {
            returnedArray.push(this.taskArray[i])
        }
        return returnedArray;
    }
}

class Task {
    constructor(name, priority, description = '', assignee = 'currentUser', status = 'to do', isPrivate = false, comments = []) {
        this.id = Math.random().toString(16).slice(2);
        this.name = name;
        this.description = description;
        this.createdAt = new Date(Date.now());
        this.assignee = assignee;
        this.status = status;
        this.priority = priority
        this.isPrivate = isPrivate;
        this.comments = comments;
        mainDB.taskArray.push(this)
    }

    addComment(text) {
        this.comments.push(new Comment(text))
    }
}

class Comment {
    constructor(text, author = 'currentUser') {
        this.id = Math.random().toString(16).slice(2);
        this.text = text;
        this.createdAt = new Date(Date.now());
        this.author = author;
    }
}

class User {
    constructor(login, password, name) {
        this.id = Math.random().toString(16).slice(2);
        this.login = login;
        this.password = password;
        this.name = name;
    }
}

const mainDB = new TaskCollection()

const task1 = new Task('Make world better', 'high')
const task2 = new Task('Self-harm?', 'low')
const task3 = new Task('Billy... We don;t forget you...', 'high')
const task4 = new Task('AMD AM4 forever!!!', 'medium')
const task5 = new Task('PC upgrade', 'low')
const task6 = new Task('New work form', 'high')
const task7 = new Task('Chill and relax', 'high')
const task8 = new Task('Listen Lo-fi radio', 'high')
const task9 = new Task('Found new epic tracks', 'high')
const task10 = new Task('Sawano always be the best', 'high')
const task11 = new Task('Kevin Penkin is not bad', 'high')
const task13 = new Task('Enter soft-lock', 'high')
const task14 = new Task('Pick up the phone', 'high')
const task15 = new Task('Great knowledge base found', 'high')