import { User } from "./model.user.js";
import { mockUserArray } from "../mock-ups/mock.users.js";

export class UserCollection { 
    constructor () {
        if (localStorage.getItem('userArray') === 'undefined' || localStorage.getItem('userArray') === null) {
            this.userArray = mockUserArray();
            this.saveUserArrayInLocalStorage();
        } else {
            this.getUserArrayFromLocalStorage()
        } 
    }

    create(login, password, name) {
        if (this.userArray.find(elem => elem.login === login)) {
            return false;
        }

        if (typeof login === 'string' && typeof password === 'string' && typeof name === 'string');
        this.userArray.push(new User(login, password, name));
        return true;
    }

    getUserByLogin(login) {
        if (typeof login === 'string') return this.userArray.find(elem => elem.login === login);
    }

    saveCurrentUserInLocalStorage(user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    getCurrentUserFromLocalStorage() {
        return JSON.parse(localStorage.getItem('currentUser'))
    }

    saveUserArrayInLocalStorage(data) {
        if (data) {
            localStorage.setItem('userArray', JSON.stringify(Object.assign(new User(), data)))
        } else localStorage.setItem('userArray', JSON.stringify(this.userArray));
    }

    getUserArrayFromLocalStorage() {
        let users = JSON.parse(localStorage.getItem('userArray'));
        this.userArray = users.map(e => Object.assign(new User(), e));
    }
}