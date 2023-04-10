import { Task } from "./model.task.js";
import { currentUser } from "../../index.js";

export class TaskCollection {
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
                    return false;
                } 
            }
            return true;
        });

        this.sortTaskByDate();

        let returnedArray = filteredTasks.slice(skip, top + skip);
        
        return returnedArray;
    }

    getTask(id) {
        return this.taskArray.find(elem => elem.id === id);
    }

    add(name, priority, description, assignee, status, isPrivate) {
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
        this.taskArray.length = 0;
    }

    edit(id, name, description, assignee, status, priority, isPrivate = false) {
        const task = this.getTask(id);

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
            task.assignee = assignee;
        }
        if (status !== task.status) {
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

        if ((task.author !== currentUser && task.assignee !== currentUser) || task === undefined) {
            return false;
        }

        const index = this.taskArray.indexOf(task);
        this.taskArray.splice(index, 1);

        return true;
    }
}