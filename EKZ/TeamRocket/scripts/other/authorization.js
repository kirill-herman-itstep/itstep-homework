export function createUserPanel() {
    const userPanel = document.querySelector('header .user');
    userPanel.insertAdjacentHTML("beforeend", loginedUserHTML());
}

// Вход

function loginedUserHTML() {
    return `
    <svg class="avatarPlaceholder" viewBox="0 0 40 40" fill="none"">
        <rect x="0.1" y="0.1" width="39.8" height="39.8" rx="19.9"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0002 16C26.0002 19.3137 23.314 22 20.0002 22C16.6865 22 14.0002 19.3137 14.0002 16C14.0002 12.6863 16.6865 10 20.0002 10C23.314 10 26.0002 12.6863 26.0002 16ZM24.0002 16C24.0002 18.2091 22.2094 20 20.0002 20C17.7911 20 16.0002 18.2091 16.0002 16C16.0002 13.7909 17.7911 12 20.0002 12C22.2094 12 24.0002 13.7909 24.0002 16Z"/>
        <path d="M20.0002 25C13.5259 25 8.00952 28.8284 5.9082 34.192C6.4201 34.7004 6.95934 35.1812 7.52353 35.6321C9.08827 30.7077 13.997 27 20.0002 27C26.0035 27 30.9122 30.7077 32.477 35.6321C33.0412 35.1812 33.5804 34.7004 34.0923 34.1921C31.991 28.8284 26.4746 25 20.0002 25Z"/>
        <rect x="0.1" y="0.1" width="39.8" height="39.8" rx="19.9"/>
    </svg>`;
}

export function loginFormData() {
    const loginForm = document.querySelector('form[name="login"]');
    let loginData = {};
    return loginData = {
        login: loginForm[0].value,
        password: loginForm[1].value,
    };
}

export function wrongInputLogin() {
    const loginForm = document.querySelectorAll('form[name="login"] input');
    loginForm[0].innerHTML = '';
    loginForm[1].innerHTML = '';
    loginForm.forEach(element => {
        element.style.border = '0.5px solid red';
        setTimeout(() => {
            element.style.border = '';
        }, 1500);
    })
}

// Регистрация

export function regUserData() {
    const regForm = document.querySelectorAll('form[name="registration"] input');
    let regData = {
        name: regForm[0].value,
        login: regForm[1].value,
        password: regForm[2].value,
        repeatPassword: regForm[3].value,
    };
    return regData;
}

export function wrongInputReg() {
    const regForm = document.querySelectorAll('form[name="registration"] input');
    regForm.forEach(e => e.innerHTML = '');
    regForm.forEach(element => {
        element.style.border = '0.5px solid red';
        setTimeout(() => {
            element.style.border = '';
        }, 1500);
    });
}