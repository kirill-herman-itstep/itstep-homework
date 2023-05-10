import { crutchLogin } from "../../script.js";
import { userDB } from "../../index.js";

export function auth() {
    const loginForm = document.querySelector('form[name="login"]');
    const loginFormButton = loginForm.querySelector('button');
    loginFormButton.addEventListener('click', () => {
        let loginData = {};
        loginData = {
            login: loginForm[0].value,
            password: loginForm[1].value,
        };
        const user = userDB.userArray.find((element) => (loginData.login === element.login) && (loginData.password === element.password));
        if(user) {
            userDB.saveCurrentUserInLocalStorage(user)
            userDB.saveUserArrayInLocalStorage()
            crutchLogin();
        } else alert('You have entered an incorrect username or password.');
    })
}
