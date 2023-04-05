import { TaskCollection } from "./scripts/model/model.taskCollection.js";
import { UserCollection } from "./scripts/model/model.userCollection.js";

import { mockTasksArray } from "./scripts/mock-ups/mock.tasks.js";
import { mockUserArray } from "./scripts/mock-ups/mock.users.js";

export const mainDB = new TaskCollection();
export const userDB = new UserCollection();
export let currentUser = '';

export function setUser(elem) {
    currentUser = elem;
}

mainDB.addAll(mockTasksArray());
userDB.userArray = mockUserArray();

console.log(mainDB);
console.log(userDB);