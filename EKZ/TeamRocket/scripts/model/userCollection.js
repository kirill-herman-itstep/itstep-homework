import { User } from "./user.js";
import { currentUser } from "../../index.js";

export class UserCollection { 
    constructor () {
        this.userArray = [];
    }

    create(login, password, name) {
        new User(login, password, name)
        crutchLogin()
        createUserPanel()
    }
}