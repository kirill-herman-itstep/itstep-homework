import { crutchLogin } from "../../script.js";
import { userDB } from "../../index.js";
import { headerView } from "../../index.js";
import { taskFeedView } from "../../index.js";
import { clickableTasks } from "./taskPage.js";
import { showTaskCreation } from "../../script.js";

export function registration() {
    const regForm = document.querySelector('form[name="registration"]');
    const regFormButton = regForm.querySelector('button')

    regFormButton.addEventListener('click', () => {
        let regData = {
            name: regForm[0].value,
            login: regForm[1].value,
            password: regForm[2].value,
            repeatPassword: regForm[3].value,
        };
    
        const existCheck = !!userDB.userArray.find((element) => {
            return regData.login === element.login;
        })
        if (regData.login === '' || regData.password === '' || regData.repeatPassword === '' || regData.name === '') return alert();
        if (existCheck) {
            alert('Email already used');
        } else {
            if ((regData.password === regData.repeatPassword) && (regData.password.length >= 6)) {
                userDB.create(regData.login, regData.password, regData.name);
                crutchLogin()
                headerView.setCurrentUser(userDB.getUserByLogin(regData.login));
                taskFeedView.getFeed(0, 10, {status: 'complete'}, 'Complete')
                taskFeedView.getFeed(0, 10, {status: 'in progress'}, 'In progress')
                taskFeedView.getFeed(0, 10, {status: 'to do'}, 'To do')
                clickableTasks()
                const createTask = document.querySelector('.tableHeader .plusIco')
                createTask.addEventListener('click', () => showTaskCreation())
            } else alert();
        }
    })
    
}
