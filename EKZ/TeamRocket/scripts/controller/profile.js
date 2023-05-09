import { currentUser, headerView, setUser, userDB, view } from "../../index.js";
import { hideProfileLayout } from "../../script.js";
import { edit } from "./taskPage.js";

export function profileFunctional() {
    const profile = document.querySelector('.profile')
    const userAvatar = profile.querySelector('.avatarPlaceholder');
    userAvatar.innerHTML = `<image href="avatar/${currentUser.avatar}.png">`;

    userAvatar.addEventListener('click', () => changeAvatar(current))

    const userName = profile.querySelector('input[value="Current login"]')
    userName.value = currentUser.name;
    const current = userDB.getUserByLogin(currentUser.login)

    const applyChangesBtn = document.querySelector('button')
    applyChangesBtn.addEventListener('click', () => {
        const newPass = profile.querySelector('input[placeholder="New password"]')
        const repeatNewPass = profile.querySelector('input[placeholder="Repeat new password"]')

        const lastUserName = currentUser.name;
        const newUserName = userName.value;
        
        

        currentUser.name = newUserName;
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
        // document.querySelector('.avatarChangeLayout').remove()

        edit({lastUserName, newUserName});
    })
}

function changeAvatar(current) {
    document.body.append(view.get('avatarChange'))
    const avatarChangeLayout = document.querySelector('.avatarChangeLayout');
    const saveBtn = avatarChangeLayout.querySelector('button');
    saveBtn.addEventListener('click', () => {
        current.avatar = avatarChangeLayout.querySelector('input:checked').value;
        currentUser.avatar = avatarChangeLayout.querySelector('input:checked').value;
    })
}

function exit() {
    setUser('')
    userDB.saveCurrentUserInLocalStorage()
}