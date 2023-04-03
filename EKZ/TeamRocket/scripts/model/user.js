export class User {
    constructor(login, password, name) {
        this.id = Math.random().toString(16).slice(2);
        this.login = login;
        this.password = password;
        this.name = name;
    }

    edit(newPassword, newName) {
        this.password = newPassword;
        this.name = newName;
    }
}