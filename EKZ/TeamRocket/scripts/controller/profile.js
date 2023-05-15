import { currentUser, headerView, setUser, userDB, view } from "../../index.js";
import { hideProfileLayout } from "../../script.js";
import { edit } from "./taskPage.js";
import { showTaskFeed } from "./mainPage.js";
import { popUp } from "../helpers/popUp.js";

export function profileFunctional() {
    const profile = document.querySelector('.overlay .profile')
    const userAvatar = profile.querySelector('.avatarPlaceholder');
    userAvatar.innerHTML = `<image href="avatar/${currentUser.avatar}.png"></image>`;

    userAvatar.nextElementSibling.addEventListener('click', () => changeAvatar(current))

    let newAvatar;

    function changeAvatar(current) {
        document.body.append(view.get('avatarChange'))
        const avatarChangeLayout = document.querySelector('.avatarChangeLayout');
        const saveBtn = avatarChangeLayout.querySelector('button');
        const inputs = document.querySelectorAll('.avatarChangeLayout input');
        

        for (const input of inputs) {
            if (+input.value === current.avatar) input.checked = true;
        }

        saveBtn.addEventListener('click', () => {
            newAvatar = avatarChangeLayout.querySelector('input:checked').value;

            document.querySelector('.avatarChangeLayout').remove();
            document.querySelector('.avatarChangeOverlay').remove();

            userAvatar.innerHTML = `<image href="avatar/${newAvatar}.png"></image>`;
        })
    }

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
        if (newAvatar) {
            current.avatar = newAvatar
            currentUser.avatar = newAvatar
        }
        
        userDB.saveCurrentUserInLocalStorage(currentUser)
        userDB.saveUserArrayInLocalStorage()

        headerView.setCurrentUser(userDB.getCurrentUserFromLocalStorage());
        userDB.getUserArrayFromLocalStorage()
        hideProfileLayout()

        edit({lastUserName, newUserName, avatar: current.avatar});

        taskBoard.innerHTML = '';

        showTaskFeed();
        popUp('Changed')
    })
}

export function exit() {
    setUser('')
    userDB.saveCurrentUserInLocalStorage()
}