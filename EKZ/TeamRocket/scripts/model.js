
class TaskCollection {
    taskArray = [];

    constructor(tasks) {
        if (Array.isArray(tasks)) {
            this.taskArray.push(...tasks);
        }
    }

    sortTaskByDate() {
        return this.taskArray.sort((a, b) => a.lastDate - b.lastDate);
    }

    getTasks(skip = 0, top = 10, filterConfig = {}) {
        this.sortTaskByDate();

        const filteredTasks = this.taskArray.filter(task => {
            if (filterConfig.assignee) {
                if (task.assignee !== filterConfig.assignee) return false;
            }

            if (filterConfig.dateFrom) {
                if (filterConfig.dateFrom > task.createdAt) return false;
            }

            if (filterConfig.dateTo) {
                if (filterConfig.dateTo < task.createdAt) return false;
            }

            if (filterConfig.status) {
                if (filterConfig.status !== task.status) return false;
            }

            if (filterConfig.priority) {
                priority.forEach((element) => {
                    if (element.priority !== task.priority) return false;
                })
            }

            if (filterConfig.isPrivate !== undefined) {
                if (filterConfig.isPrivate !== task.isPrivate) return false;
            }

            if (filterConfig.description) {
                if (!task.description.includes(filterConfig.description) && 
                    !task.name.includes(filterConfig.description)) {
                    return false 
                } 
            }
            return true;
        });

        let returnedArray = [];
        for (let i = skip; i < skip + top && i < filteredTasks.length; i++) {
            returnedArray.push(filteredTasks[i])
        }
        
        return returnedArray;
    }

    getTask(id) {
        return this.taskArray.find(elem => elem.id === id)
    }

    add(name, description, assignee, status, priority, isPrivate) {
        const task = new Task(name, priority, description,assignee, status, isPrivate);
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
        this.taskArray.length = 0;
    }

    edit(id, name, description, assignee, status, priority, isPrivate = false) {
        const task = this.getTask(id);

        if (task.author !== 'currentUser' && task.assignee !== 'currentUser') {
            return false;
        }
        if (name !== task.name) {
            if (name.length > 100 || !name) {
                return false;
            }
            task.name = name;
        }
        if (description !== task.description) {
            if (description > 280) {
                return false;
            }
            task.description = description;
        }
        if (assignee !== task.assignee) {
            // Есть ли исполнитель в списке пользователей таск менеджера , если нет fasle
            task.assignee = assignee;
        }
        if (status !== task.status) {
            // Может проверка на существования такой доски?
            task.status = status;
            task.lastDate = new Date();
        }
        if (priority !== task.priority) {
            task.priority = priority;
        }
        if (isPrivate !== task.isPrivate) {
            task.isPrivate = isPrivate;
        }
        return true;
    }

    remove(id) {
        const task = this.getTask(id);

        if ((task.author !== 'currentUser' && task.assignee !== 'currentUser') || task === undefined) {
            return false;
        }

        const index = this.taskArray.indexOf(task);
        this.taskArray.splice(index, 1);

        return true;
    }
}

class Task {
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
        this.addOnBoard()
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
        const toDoBoard = document.querySelector('#toDo .taskTable .border.top');
        const inProgressBoard = document.querySelector('#inProgress .taskTable .border.top');
        const complete = document.querySelector('#complete .taskTable .border.top');
        if (this.status === 'to do') {
            toDoBoard.insertAdjacentHTML('afterend', taskHTML(this.priority, this.name))
        } else if (this.status === 'in progress') {
            inProgressBoard.insertAdjacentHTML('afterend', taskHTML(this.priority, this.name))
        } else complete.insertAdjacentHTML('afterend', taskHTML(this.priority, this.name)) 
    }

    static validate(task) {
        return (task.name && task.name.length <= 100 && task.description.length <= 280 &&
                task.assignee && task.status && task.priority && (typeof task.isPrivate === 'boolean'));
    }
}

class Comment {
    #id;
    #createdAt;
    #author;

    constructor(text) { 
        this.#id = Math.random().toString(16).slice(2);
        this.text = text;
        this.#createdAt = new Date(Date.now());
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

class UserCollection { 
    constructor () {
        this.userArray = [];
    }

    create(login, password, name) {
        new User(login, password, name)
        crutchLogin()
        createUserPanel()
    }

    auth(element) {
        currentUser = element;
    }
}

class User {
    constructor(login, password, name) {
        this.id = Math.random().toString(16).slice(2);
        this.login = login;
        this.password = password;
        this.name = name;
        userDB.userArray.push(this)
    }

    edit(newPassword, newName) {
        this.password = newPassword;
        this.name = newName;
    }

    logOut() {
        currentUser = '';
    }
}

const mainDB = new TaskCollection()
const userDB = new UserCollection()
let currentUser = '';

mainDB.addAll([
    new Task('Make world better', 'high', 'We can kill all people? Maybe not, but, we have superpower!!!', 'Mark', 'to do', false),
    new Task('Self-harm?', 'low', 'Overkill', 'Mark', 'in progress', true),
    new Task('Billy... We dont forget you...', 'high', 'Rest in piece...', 'Andrew', 'complete', false),
    new Task('AMD AM4 forever!!!', 'medium', '', 'Lena', 'to do', false),
    new Task('PC upgrade', 'low', 'Stone + GPU', 'Iliya', 'to do', true),
    new Task('New work form', 'high', 'Cotton only', 'Sophi', 'in progress', false),
    new Task('Chill and relax', 'high', 'Chiiiiil', 'Mark'),
    new Task('Listen Lo-fi radio', 'high'),
    new Task('Found new epic tracks', 'high', 'Sawano Hiroyuki maybe?'),
    new Task('Sawano always be the best', 'high', 'ALL THE TIME'),
    new Task('Kevin Penkin is not bad', 'high', 'Abyss', 'Kevin', 'complete'),
    new Task('Enter soft-lock', 'high', 'WTF?'),
    new Task('Pick up the phone', 'high', 'Okeeeey', 'Mark', 'in progress'),
    new Task('Great knowledge base found', 'high'),
]);

userDB.userArray = [
    new User('isuzuri@gmail.com', '9edl4', 'Isuzuri'),
    new User('ballage94@gmail.com', 'kmmc8g9p', 'BiYuLaLaLa'),
    new User('loremipsum2965@mail.ru', '1648734', 'LoremLorem'),
    new User('fishMachine2000@rambler.ru', 'hahaho879', 'FIIIIIISH'),
    new User('killmepls@yandex.ru', 'itsJOKE', 'Lena137'),
    new User('kitamuraRey@jap.com', 'undefinedSymbols', 'Rey Kitamura')
]