// =============    task ====================
// let currentTask = mainDB.getTask(taskID);
// Добавление
function createTaskController(name, priority, description, assignee, status, isPrivate) {
    if (name === '' && priority === '') {
        // функция изменения полей на красные
    } else mainDB.add(name, priority, description = '', assignee = currentUser, status = 'to do', isPrivate = false)
}
// Изменение
function editTask (name = currentTask.name, priority = currentTask.priority, description = currentTask.description, assignee = currentTask.assignee, status = currentTask.status, isPrivate = currentTask.isPrivate) {
    currentTask.edit(name, priority, description, assignee, status, isPrivate)
}
// =============    comments ====================
function addCommentController(text) {
    currentTask.addComment(text);
}

// =============    user    =====================
// Вход
function userAuth(login, password) {
    userDB.userArray.find((element) => {
        if (login === element.login && password === element.password) {
            userDB.auth(element);
            // crutchLogin()
        }
    })
    // if (currentUser === '') wrongInput();
}
// Регистрация
function userCreate(login, password, repeatPassword, name) {
    const existCheck = !!userDB.userArray.find((element) => {
        return login === element.login
    })
    if (login === '' && password === '' && repeatPassword === '' && name === '') return //функция неправильного ввода
    if (existCheck) {
        console.log('Already');
        // функция отображения пользователю что-то типа "This email already used"
    } else {
        if (password === repeatPassword) {
            password.length > 6 ? userDB.create(login, password, name) : return ;//функция слишком короткий пароль
        }   
    }
}
// Изменение логина/пароля
function userEdit(newPassword, newName = currentUser.name) {
    if (inputPassword !== currentUser.password) return //функция неверный пароль
    if (newName !== currentUser.name) currentUser.name = newName;
    if (currentUser.password = newPassword) {
        //функция новый пароль не может быть таким же, как предыдущий
    } else currentUser.edit(newPassword, newName)
}