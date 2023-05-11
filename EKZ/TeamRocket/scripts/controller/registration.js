import { crutchLogin } from "../../script.js";
import { userDB } from "../../index.js";
import { popUp } from "../helpers/popUp.js";

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
            popUp('Email already used');
        } else {
            if ((regData.password === regData.repeatPassword) && (regData.password.length >= 6)) {
                if (userDB.create(regData.login, regData.password, regData.name)) {
                    userDB.saveCurrentUserInLocalStorage(userDB.userArray.at(-1));
                    userDB.saveUserArrayInLocalStorage();
                    crutchLogin();
                } else popUp(`User with this email already exist.`);

            } else popUp(`Wrong password`);
        }
    })
}
