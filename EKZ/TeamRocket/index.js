import { TaskCollection } from "./scripts/classes/taskCollection.js";
import { UserCollection } from "./scripts/classes/userCollection.js";

import { mockTasksArray } from "./scripts/mock-ups/tasks.js";
import { mockUserArray } from "./scripts/mock-ups/users.js";

import { update } from "./scripts/model.js";

export const mainDB = new TaskCollection()
export const userDB = new UserCollection()
export let currentUser = '';

export function setUser(elem) {
    currentUser = elem;
}

mainDB.addAll(mockTasksArray())
userDB.userArray = mockUserArray()

console.log(mainDB);
console.log(userDB);

setTimeout(() => {
    update()
}, 1200);