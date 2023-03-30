// Авторизация

function createUserPanel() {
    const userPanel = document.querySelector('header .user')
    userPanel.insertAdjacentHTML("beforeend", loginedUserHTML())
}

function loginedUserHTML() {
    return `
    <svg class="avatarPlaceholder" viewBox="0 0 40 40" fill="none" onclick="crutchProfile()">
        <rect x="0.1" y="0.1" width="39.8" height="39.8" rx="19.9"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0002 16C26.0002 19.3137 23.314 22 20.0002 22C16.6865 22 14.0002 19.3137 14.0002 16C14.0002 12.6863 16.6865 10 20.0002 10C23.314 10 26.0002 12.6863 26.0002 16ZM24.0002 16C24.0002 18.2091 22.2094 20 20.0002 20C17.7911 20 16.0002 18.2091 16.0002 16C16.0002 13.7909 17.7911 12 20.0002 12C22.2094 12 24.0002 13.7909 24.0002 16Z"/>
        <path d="M20.0002 25C13.5259 25 8.00952 28.8284 5.9082 34.192C6.4201 34.7004 6.95934 35.1812 7.52353 35.6321C9.08827 30.7077 13.997 27 20.0002 27C26.0035 27 30.9122 30.7077 32.477 35.6321C33.0412 35.1812 33.5804 34.7004 34.0923 34.1921C31.991 28.8284 26.4746 25 20.0002 25Z"/>
        <rect x="0.1" y="0.1" width="39.8" height="39.8" rx="19.9"/>
    </svg>
    `
}

function loginFormData() {
    const loginForm = document.querySelector('form[name="login"]')
    return loginData = {
        login: loginForm[0].value,
        password: loginForm[1].value,
    }
}

function setCurrentUser(user) {
    currentUser = user;
    createUserPanel()
}

function wrongInputLogin() {
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

function regUserData() {
    const regForm = document.querySelectorAll('form[name="registration"] input')
    return regData = {
        name: regForm[0].value,
        login: regForm[1].value,
        password: regForm[2].value,
        repeatPassword: regForm[3].value,
    }
}

function wrongInputReg() {
    const regForm = document.querySelectorAll('form[name="registration"] input');
    regForm.forEach(e => e.innerHTML = '')
    regForm.forEach(element => {
        element.style.border = '0.5px solid red';
        setTimeout(() => {
            element.style.border = '';
        }, 1500);
    })
}

// Добавление задачи [НЕ ДОПИСАНО]
function taskHTML(priority, name) {
    return `
            <div class="taskForm">
                <div class="taskStatus">
                    <div class="mark ${priority}">${priority}</div>
                    <svg class="optionsIco" viewBox="0 0 4 17">
                        <path d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"/>
                    </svg>
                </div>
                <div class="taskName" onclick="showTaskOpen()">
                    ${name}
                </div>
                <div class="taskAssignee">
                    <div class="assignee">
                        <svg class="assigneeAvatar" viewBox="0 0 30 26" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0002 6C21.0002 9.31371 18.314 12 15.0002 12C11.6865 12 9.00024 9.31371 9.00024 6C9.00024 2.68629 11.6865 0 15.0002 0C18.314 0 21.0002 2.68629 21.0002 6ZM19.0002 6C19.0002 8.20914 17.2094 10 15.0002 10C12.7911 10 11.0002 8.20914 11.0002 6C11.0002 3.79086 12.7911 2 15.0002 2C17.2094 2 19.0002 3.79086 19.0002 6Z"/>
                            <path d="M15.0002 15C8.52586 15 3.00952 18.8284 0.908203 24.192C1.4201 24.7004 1.95934 25.1812 2.52353 25.6321C4.08827 20.7077 8.99696 17 15.0002 17C21.0035 17 25.9122 20.7077 27.477 25.6321C28.0412 25.1812 28.5804 24.7004 29.0923 24.1921C26.991 18.8284 21.4746 15 15.0002 15Z"/>
                        </svg>
                    </div>
                </div>
            </div>
    `
}

let priority = '';
let access = '';

function addCardData() {
    const inputs = document.querySelectorAll('.taskCreationLayout input');
    const textarea = document.querySelector('.taskCreationLayout textarea');
    const select = document.querySelector('.taskCreationLayout select')
    
    const assignee = inputs[0].value;
    const name = inputs[1].value;
    const description = textarea.value;
    const status = select.value;
    return cardData = {
        name,
        priority,
        description,
        assignee,
        status,
        access,
    }
}

function addCard() {
    addCardData()
    addtask()
}

