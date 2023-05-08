import { currentUser, headerView, setUser, userDB } from "../../index.js";
import { hideProfileLayout } from "../../script.js";

export function profileFunctional() {
    const profile = document.querySelector('.profile')
    const userAvatar = profile.querySelector('.avatarPlaceholder');
    userAvatar.innerHTML = `<image href="avatar/${currentUser.avatar}.png">`;

    userAvatar.addEventListener('click', () => changeAvatar(current)) // Здесь при клике должна открываться менюшка. Сама функция ниже

    const userName = profile.querySelector('input[value="Current login"]')
    userName.value = currentUser.name;
    const current = userDB.getUserByLogin(currentUser.login)

    const applyChangesBtn = document.querySelector('button')
    applyChangesBtn.addEventListener('click', () => {
        const newPass = profile.querySelector('input[placeholder="New password"]')
        const repeatNewPass = profile.querySelector('input[placeholder="Repeat new password"]')
        
        currentUser.name = userName.value;
        if ((newPass.value === repeatNewPass.value) && (newPass.value !== '' && repeatNewPass.value !== '')) {
            current.edit(newPass.value, userName.value)
            currentUser.password = newPass.value;
        }
        current.name = userName.value;
        userDB.saveCurrentUserInLocalStorage(currentUser)
        userDB.saveUserArrayInLocalStorage()
        user.innerHTML = '';
        headerView.setCurrentUser(userDB.getCurrentUserFromLocalStorage());
        userDB.getUserArrayFromLocalStorage()
        hideProfileLayout()
    })
}

function changeAvatar(current) {
    const avatarChangeLayout = document.querySelector('#avatarChangeLayout');
    const saveBtn = avatarChangeLayout.querySelector('button');
    saveBtn.addEventListener('click', () => {
        current.avatar = avatarChangeLayout.querySelector('input:checked').value;
        currentUser.avatar = avatarChangeLayout.querySelector('input:checked').value;
    })
}

function exit() {
    // *возвращение на страницу входа*
    setUser('')
    userDB.saveCurrentUserInLocalStorage()
}