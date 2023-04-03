import { User } from "./user.js";

export class UserCollection { 
    constructor () {
        this.userArray = [];
    }

    create(login, password, name) {
        new User(login, password, name)
        // crutchLogin()
        // createUserPanel() 
    }
}