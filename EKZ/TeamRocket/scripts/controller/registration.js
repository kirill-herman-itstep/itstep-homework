import { crutchLogin } from "../../script.js";
import { userDB } from "../../index.js";

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
                if (userDB.create(regData.login, regData.password, regData.name)) {
                    userDB.saveCurrentUserInLocalStorage(userDB.userArray.at(-1));
                    userDB.saveUserArrayInLocalStorage();
                    crutchLogin();
                } else alert(`User with this email already exist.`);

            } else alert(`Wrong password`);
        }
    })
}
