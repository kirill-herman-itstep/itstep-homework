'use strict';

import { UserCollection, User } from '../model/UserCollection.model.js';

export function showFormatUsers() {
    let users = JSON.parse(localStorage.getItem('users'))._users.map(item => new User(item._name, item._password));
    users = new UserCollection(users);

    return users;
}
