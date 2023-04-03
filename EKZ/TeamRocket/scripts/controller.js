import { userDB, currentUser, setUser } from "../index.js";
import { wrongInputLogin } from "./other/authorization.js";
import { crutchLogin } from "../script.js";

export function userAuth(loginData) {
    userDB.userArray.find((element) => {
        if (loginData.login === element.login && loginData.password === element.password) {
            setUser(element)
            crutchLogin()
        }
    })
    if (currentUser === '') wrongInputLogin()
}

function userCreate() {
    const existCheck = !!userDB.userArray.find((element) => {
        return regData.login === element.login
    })
    if (regData.login === '' || regData.password === '' || regData.repeatPassword === '' || regData.name === '') return wrongInputReg();
    if (existCheck) {
        // функция отображения пользователю что-то типа "This email already used"
    } else {
        if (regData.password === regData.repeatPassword) {
            regData.password.length >= 6 ? userDB.create(regData.login, regData.password, regData.name) : wrongInputReg();
        }   
    }
}

function addtask() {
    mainDB.add(cardData.name, cardData.priority, cardData.description, cardData.assignee, cardData.status, cardData.access);
    priority = '';
}