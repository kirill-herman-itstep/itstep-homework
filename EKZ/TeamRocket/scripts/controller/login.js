import { crutchLogin } from "../../script.js";
import { userDB } from "../../index.js";
import { headerView } from "../../index.js";
import { taskFeedView } from "../../index.js";
import { clickableTasks } from "./taskPage.js";
import { showTaskCreation } from "../../script.js";

export function auth() {
    const loginForm = document.querySelector('form[name="login"]');
    const loginFormButton = loginForm.querySelector('button')
    loginFormButton.addEventListener('click', () => {
        let loginData = {};
        loginData = {
            login: loginForm[0].value,
            password: loginForm[1].value,
        };
        const user = userDB.userArray.find((element) => (loginData.login === element.login) && (loginData.password === element.password));
        if(user) {
            crutchLogin()
            headerView.setCurrentUser(user)
            taskFeedView.getFeed(0, 10, {status: 'complete'}, 'Complete')
            taskFeedView.getFeed(0, 10, {status: 'in progress'}, 'In progress')
            taskFeedView.getFeed(0, 10, {status: 'to do'}, 'To do')
            clickableTasks()
            const createTask = document.querySelector('.tableHeader .plusIco')
            createTask.addEventListener('click', () => showTaskCreation())
        } else alert()
    })
}
