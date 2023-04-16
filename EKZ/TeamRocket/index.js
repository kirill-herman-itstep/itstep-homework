import { TaskCollection } from "./scripts/model/model.taskCollection.js";
import { UserCollection } from "./scripts/model/model.userCollection.js";

import { mockTasksArray } from "./scripts/mock-ups/mock.tasks.js";
import { mockUserArray } from "./scripts/mock-ups/mock.users.js";

export let currentUser = '';
export function setUser(elem) {
    currentUser = elem;
}

import { HeaderView } from "./scripts/view/header.js";
import { TaskView } from "./scripts/view/task.js";
import { TaskPage } from "./scripts/view/taskPage.js";
import { TaskFeedView } from "./scripts/view/taskFeed.js";
// import { FilterView } from "./scripts/view/filter.js";

export const userDB = new UserCollection(mockUserArray());
export const mainDB = new TaskCollection(mockTasksArray());

export const headerView = new HeaderView('user');
export const taskView = new TaskView();
export const taskPage = new TaskPage('main');
export const taskFeedView = new TaskFeedView('taskBoard');

userDB.userArray = mockUserArray();



