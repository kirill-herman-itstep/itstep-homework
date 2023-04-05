import { User } from "./model.user.js";

export class UserCollection { 
    constructor () {
        this.userArray = [];
    }

    create(login, password, name) {
        this.userArray.push(new User(login, password, name));
    }

    getUserByLogin(login) {
        return this.userArray.find(elem => elem.login === login);
    }
}