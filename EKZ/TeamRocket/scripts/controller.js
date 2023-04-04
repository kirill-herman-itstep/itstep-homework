import { userDB, setUser, mainDB } from "../index.js";
import { wrongInputLogin, createUserPanel, wrongInputReg } from "./other/authorization.js";
import { crutchLogin } from "../script.js";

export function userAuth(loginData) {
    userDB.userArray.find((element) => {
        if (loginData.login === element.login && loginData.password === element.password) {
            setUser(element)
            crutchLogin()
            createUserPanel()
        } else wrongInputLogin()
    })
}

export function userCreate(regData) {
    const existCheck = !!userDB.userArray.find((element) => {
        return regData.login === element.login
    })
    if (regData.login === '' || regData.password === '' || regData.repeatPassword === '' || regData.name === '') return wrongInputReg();
    if (existCheck) {
        alert('Email already used')
    } else {
        if ((regData.password === regData.repeatPassword) && (regData.password.length >= 6)) {
            userDB.create(regData.login, regData.password, regData.name)
            setUser(userDB.getUserByLogin(regData.login))
            crutchLogin()
            createUserPanel() 
        } else wrongInputReg()
    }
}

export function addtask(cardData) {
    mainDB.add(cardData.name, cardData.priority, cardData.description, cardData.assignee, cardData.status, cardData.access);
    console.log(mainDB)
}