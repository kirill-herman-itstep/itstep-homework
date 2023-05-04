import { TaskCollection } from "./scripts/model/model.taskCollection.js";
import { UserCollection } from "./scripts/model/model.userCollection.js";

import { mockTasksArray } from "./scripts/mock-ups/mock.tasks.js";


export let currentUser = '';
export function setUser(elem) {
    currentUser = elem;
}

import { View } from "./scripts/view/view.js";
import { HeaderView } from "./scripts/view/header.js";
import { TaskView } from "./scripts/view/task.js";
import { TaskPage } from "./scripts/view/taskPage.js";
import { TaskFeedView } from "./scripts/view/taskFeed.js";
import { FilterView } from "./scripts/view/filter.js";

export const userDB = new UserCollection();
export const mainDB = new TaskCollection();

export const view = new View();
export const headerView = new HeaderView('user');
export const taskView = new TaskView();
export const taskPage = new TaskPage('main');
export const taskFeedView = new TaskFeedView('taskBoard');
export const filterView = new FilterView();

