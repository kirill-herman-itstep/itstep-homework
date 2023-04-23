export class User {
    constructor(login, password, name) {
        this.id = Math.random().toString(16).slice(2);
        this.login = login;
        this.password = password;
        this.name = name;
    }

    edit(newPassword, newName) {
        if (typeof newPassword === 'string') this.password = newPassword;
        else return false;

        if (typeof newName === 'string') this.name = newName;
        else return false;

        return true;
    }
}