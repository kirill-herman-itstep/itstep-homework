import { User } from "./model.user.js";

export class UserCollection { 
    constructor () {
        this.userArray = [];
    }

    create(login, password, name) {
        if (this.userArray.find(elem => elem.login === login)) {
            return false;
        }

        if (typeof login === 'string' && typeof password === 'string' && typeof name === 'string')
        this.userArray.push(new User(login, password, name));
        return true;
    }

    getUserByLogin(login) {
        if (typeof login === 'string') return this.userArray.find(elem => elem.login === login);
    }
}