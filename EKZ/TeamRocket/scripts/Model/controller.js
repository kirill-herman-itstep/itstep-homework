function userCreate(login, password, name) {
    
}

function userAuth(login, password) {
    userDB.userArray.forEach((element) => {
        if (login === element.login && password === element.password) userDB.auth(element);
    })
    if (currentUser === '') wrongInput();
}