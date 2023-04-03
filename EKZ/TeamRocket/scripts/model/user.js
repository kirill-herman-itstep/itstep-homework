import { currentUser } from "../../index.js";
import { userDB } from "../../index.js";

export class User {
    constructor(login, password, name) {
        this.id = Math.random().toString(16).slice(2);
        this.login = login;
        this.password = password;
        this.name = name;
        userDB.userArray.push(this)
    }

    edit(newPassword, newName) {
        this.password = newPassword;
        this.name = newName;
    }

    logOut() {
        currentUser = '';
    }
}