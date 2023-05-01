export class User {
    constructor(login, password, name, avatar = 0) {
        this.id = Math.random().toString(16).slice(2);
        this.login = login;
        this.password = password;
        this.name = name;
        this.avatar = avatar;
    }

    edit(newPassword, newName) {
        if (typeof newPassword === 'string') this.password = newPassword;
        else return false;

        if (typeof newName === 'string') this.name = newName;
        else return false;

        return true;
    }
}