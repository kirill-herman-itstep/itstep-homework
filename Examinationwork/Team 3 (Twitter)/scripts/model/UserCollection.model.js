'use strict';

export class User {
    constructor(name = '', password = '') {
        this._name = name;
        this._password = password;
    }

    get name() {
        return this._name;
    }

    set name(value) {}

    get password() {}

    set password(value) {}
}

export class UserCollection {
    constructor(users = []) {
        this._users = users;
    }

    get users() {}

    set users(value) {}

    userRegistration(user = '', password, confirmPassword) {
        if (this._users.find(item => item._name === user) === undefined && password !== '' && password === confirmPassword) {
            this._users.push(new User(user, password));
            localStorage.setItem('users', JSON.stringify({ _users: this._users }));
            return true;
        }
        return false;
    }

    userAuthorization(user = '', password = '') {
        if (this._users.find(item => item._name === user) !== undefined && this._users.find(item => item._name === user)._password === password) return true;
        else return false;
    }
}
