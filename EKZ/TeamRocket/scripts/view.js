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

// Добавление задачи [РАБОТАЕТ]
function taskHTML(priority, name, id) {
    return `
            <div class="taskForm" id="${id}">
                <div class="taskStatus">
                    <div class="mark ${priority}">${priority}</div>
                    <svg class="optionsIco" viewBox="0 0 4 17">
                        <path d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"/>
                    </svg>
                </div>
                <div class="taskName">
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

// Страница задачи

function pageHTML(task) {
    return `
    <div class="task">
            <div class="actionsBar">
                <svg class="deleteIco" viewBox="0 0 14 18">
                    <path d="M11 6V16H3V6H11ZM9.5 0H4.5L3.5 1H0V3H14V1H10.5L9.5 0ZM13 4H1V16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4Z"/>
                </svg>
                <svg class="crossIco" viewBox="0 0 14 14" onclick="hideTaskOpen()">
                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"/>
                </svg>
            </div>
            <div class="assignTo">
                <span>Assign to</span>
                <input type="text" value="${task.assignee}">
            </div>
            <div class="title">
                <span>Title</span>
                <input type="text" value="${task.name}">
            </div>
            <div class="description">
                <span>Description</span>
                <textarea name="" id="" cols="30" rows="10" placeholder="Ненавижу блять (циган) вёрстку.">${task.description}</textarea>
            </div>
            <div class="options">
                <div class="chooseImportance">
                    <span>Importance</span>
                    <div id="importance">
                        <div class="low"></div>
                        <div class="medium"></div>
                        <div class="high"></div>
                    </div>
                </div>
                <div class="chooseBoard">
                    <span>Current board</span>
                    <span class="boardName">${task.status}</span>
                </div>
                <div class="chooseAccess">
                    <span>Access</span>
                    <div>
                        <svg class="peopleIco" viewBox="0 0 22 16">
                            <path d="M15.67 9.13C17.04 10.06 18 11.32 18 13V16H22V13C22 10.82 18.43 9.53 15.67 9.13Z"/>
                            <path d="M14 8C16.21 8 18 6.21 18 4C18 1.79 16.21 0 14 0C13.53 0 13.09 0.0999998 12.67 0.24C13.5 1.27 14 2.58 14 4C14 5.42 13.5 6.73 12.67 7.76C13.09 7.9 13.53 8 14 8Z"/>
                            <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 2C9.1 2 10 2.9 10 4C10 5.1 9.1 6 8 6C6.9 6 6 5.1 6 4C6 2.9 6.9 2 8 2Z"/>
                            <path d="M8 9C5.33 9 0 10.34 0 13V16H16V13C16 10.34 10.67 9 8 9ZM14 14H2V13.01C2.2 12.29 5.3 11 8 11C10.7 11 13.8 12.29 14 13V14Z"/>
                        </svg>
                        <svg class="lockIco" viewBox="0 0 16 22">
                            <path d="M14 7.5H13V5.5C13 2.74 10.76 0.5 8 0.5C5.24 0.5 3 2.74 3 5.5V7.5H2C0.9 7.5 0 8.4 0 9.5V19.5C0 20.6 0.9 21.5 2 21.5H14C15.1 21.5 16 20.6 16 19.5V9.5C16 8.4 15.1 7.5 14 7.5ZM5 5.5C5 3.84 6.34 2.5 8 2.5C9.66 2.5 11 3.84 11 5.5V7.5H5V5.5ZM14 19.5H2V9.5H14V19.5ZM8 16.5C9.1 16.5 10 15.6 10 14.5C10 13.4 9.1 12.5 8 12.5C6.9 12.5 6 13.4 6 14.5C6 15.6 6.9 16.5 8 16.5Z">
                        </svg>
                    </div>
                </div>
            </div>
            <div class="commentSection">
                <div class="newComment">
                    <textarea name="newComment" id="" cols="30" rows="10"></textarea>
                    <img class="postComment" src="assets/png/postCommentIco.png" alt="">
                    <span>0/280</span>
                </div>
                ${getCommentsHTML(task)}
                <div class="placeholder"></div>
            </div>
            <!-- <button>Create</button> -->
        </div>
        `
}

function getCommentsHTML(task) {
    let commentList = ''
    if (task.comments.length === 0) {
        return commentList
    } else {
        task.comments.forEach(comment => commentList += commentHTML(comment))
        return commentList;
    }
}

function commentHTML(comment) {
    return `
    <div class="comment">
    <svg class="avatarPlaceholder" viewBox="0 0 40 40" fill="none">
        <rect x="0.1" y="0.1" width="39.8" height="39.8" rx="19.9"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0002 16C26.0002 19.3137 23.314 22 20.0002 22C16.6865 22 14.0002 19.3137 14.0002 16C14.0002 12.6863 16.6865 10 20.0002 10C23.314 10 26.0002 12.6863 26.0002 16ZM24.0002 16C24.0002 18.2091 22.2094 20 20.0002 20C17.7911 20 16.0002 18.2091 16.0002 16C16.0002 13.7909 17.7911 12 20.0002 12C22.2094 12 24.0002 13.7909 24.0002 16Z"/>
        <path d="M20.0002 25C13.5259 25 8.00952 28.8284 5.9082 34.192C6.4201 34.7004 6.95934 35.1812 7.52353 35.6321C9.08827 30.7077 13.997 27 20.0002 27C26.0035 27 30.9122 30.7077 32.477 35.6321C33.0412 35.1812 33.5804 34.7004 34.0923 34.1921C31.991 28.8284 26.4746 25 20.0002 25Z"/>
        <rect x="0.1" y="0.1" width="39.8" height="39.8" rx="19.9"/>
    </svg>
    <p>${comment.text}</p>
    <span class="date">${comment.createdAt}</span>
</div>
    `
}
