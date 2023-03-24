class TaskCollection {
    taskArray = []; // мб сделать его статичным? (Тогда и методы необходимо будет делать статичными)

    constructor(tasks) {
        if (Array.isArray(tasks)) {
            this.taskArray.push(...tasks);
        }
    }

    sortTaskByDate() {
        return this.taskArray.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1)
        // return this.taskArray.sort((a, b) => a.createdAt - b.createdAt) 
        // обьект Date при операции вычисления автоматически преобразуется в миллисекунды
        // сортировать будем по дате создания карточки или по lastDate?
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

            if (filterConfig.priority) { // В фильтре можно будет выбрать только 1 приоритет?
                if (filterConfig.priority !== task.priority) return false;
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
        const invalidateTasks = [];
        tasks.forEach(task => {
            if (Task.validate(task)) {
                this.taskArray.push(task);
            } else {
                invalidateTasks.push(task);
            }
        });

        return invalidateTasks;
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

    remove(id) { // Удалять может только автор или испонителе тоже могут удалять?
        const task = this.getTask(id);

        if (task.assignee !== 'currentUser' || task === undefined) { // Не уверена, надо ли здесь проверка на undefined
            return false;
        }

        const index = this.taskArray.indexOf(task);
        this.taskArray.splice(index, 1);

        return true;
    }

    addComment(id, text) {
        const com = new Comment(text);
        const task = this.getTask(id);
        
        if (!Comment.validate(com) || task === undefined) {
            return false;
        }

        task.comments.push(com);
        return true;
    }
}

class Task {
    // static idGeneration = 0;

    constructor(name, priority, description = '', assignee = 'currentUser', status = 'to do', isPrivate = false, comments = []) {
        this.id = Math.random().toString(16).slice(2); // Может стоит создать статичную переменную или глабальную переменную и каждый раз при создании обьекта Task увеличивать на 1;
        // this.id = 'task' + ++Task.idGeneration;
        // И может сам id сделать приватной переменной и прописать ему только get
        this.name = name;
        this.description = description;
        this.createdAt = new Date(Date.now()); // createAt похоже должен быть приватным и иметь только get
        // this.lastDate = new Date(); то, что вчера обсуждалось с Кириллом. Следует добавить поле, которое обновляется при добавлении задачи на другую доску;
        this.assignee = assignee; // т.к. исполнителей у нас вроде будет несколько, может стоит лучще сделать массив?
        this.status = status;
        this.priority = priority
        this.isPrivate = isPrivate;
        this.comments = comments; // В задании comments должен быть пустым при создании задачи. Тоесть мы не принимаем значение comments в констукторе, а просто создаем пустой массив
        mainDB.taskArray.push(this) // Сперва необходима проверить на вилидность. метод add TaskColection позволяет это сделать
    }

    // addComment(text) { // Этот метод по заданию находится в TaskCollection  и с параметром id
    //     this.comments.push(new Comment(text))
    // }

    static validate(task) {
        return (task.name && task.name.length <= 100 && task.description.length <= 280 &&
                task.assignee && task.status && task.priority && (typeof task.isPrivate === 'boolean'));
    }
}

class Comment {
    constructor(text, author = 'currentUser') { // может в параметрах стоит оставить только text. Ведь человет не может написать комментарий от другого пользователя
        this.id = Math.random().toString(16).slice(2); // должно быть приветным полем с get
        this.text = text;
        this.createdAt = new Date(Date.now()); // должно быть приватным полем с get
        this.author = author;
    }

    static validate(com) {
        return com.text.length <= 280;
    }
}

class User { // Если у нас есть класс User, то думаю нужна коллекция users. 
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