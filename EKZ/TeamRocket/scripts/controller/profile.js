import { currentUser, headerView, userDB } from "../../index.js";
import { hideProfileLayout } from "../../script.js";

export function profileFunctional() {
    const profile = document.querySelector('.profile')
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