function userAuth() {
    userDB.userArray.find((element) => {
        if (loginData.login === element.login && loginData.password === element.password) {
            userDB.auth(element);
            crutchLogin()
            setCurrentUser(element);
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