import { TaskCollection } from "./scripts/model/model.taskCollection.js";
// import { UserCollection } from "./scripts/model/model.userCollection.js";

import { mockTasksArray } from "./scripts/mock-ups/mock.tasks.js";

export let currentUser = '';

export function setUser(elem) {
    currentUser = elem;
}

import { HeaderView } from "./scripts/view/header.js";
import { TaskView } from "./scripts/view/task.js";
import { TaskFeedView } from "./scripts/view/taskFeed.js";
// import { FilterView } from "./scripts/view/filter.js";

export const mainDB = new TaskCollection(mockTasksArray())
const headerView = new HeaderView('user')
export const taskView = new TaskView()
const taskFeedView = new TaskFeedView('taskBoard')



// Тестирование
document.addEventListener('DOMContentLoaded', () => {
    headerView.setCurrentUser({user: 'Isuzu'})
    taskFeedView.getFeed()
})

