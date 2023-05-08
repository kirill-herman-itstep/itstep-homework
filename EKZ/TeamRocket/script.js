import { auth } from "./scripts/controller/login.js";
import { registration } from "./scripts/controller/registration.js";
import { taskCreate } from "./scripts/controller/taskCreate.js";
import { showMainPage } from "./scripts/controller/mainPage.js";
import { filterView, view } from "./index.js";
import { profileFunctional } from "./scripts/controller/profile.js";

// document.querySelectorAll('.taskTable').forEach(table => {
    //     table.addEventListener('scroll', e => {
//         console.dir(e.target.style);
//     })
// })

// document.write('<base href="' + document.location + '" />');


let body = document.body;
let hash = location.hash;

// CRUTCH

export function crutchLogin() {
    history.pushState('', '', '#table');
    hash = location.hash;
    body.innerHTML = '';
    choosePage();
}

function crutchProfile() {
    showProfileLayout();
}

function crutchTaskCreation() {
    showTaskCreation();
}

////////////////////////////////////////////////////////

// NAVIGATION

choosePage();

window.addEventListener("hashchange", e => {
    body.innerHTML = '';
    hash = location.hash;
    choosePage();
})

function choosePage() {
    if (!hash) {
        history.pushState('', '', '#login')
        gotoAuthorizationPage();
        gotoLoginForm();
    }
    else if (hash === '#login') {
        gotoAuthorizationPage();
        gotoLoginForm();
    }
    else if (hash === '#register') {
        gotoAuthorizationPage();
        gotoRegistrationForm();
    }
    else if (hash === '#table') {
        gotoMainPage();
        gotoTableLayout();
    }
};





function gotoAuthorizationPage() {
    body.append(view.get('authorizationPage'));
}

function gotoLoginForm() {
    document.querySelector('.functional').append(view.get('loginFunctional'));
    auth();
}

function gotoRegistrationForm() {
    document.querySelector('.functional').append(view.get('registrationFunctional'));
    registration();
}

function gotoMainPage() {
    body.append(view.get('header'));
    body.querySelector('main').append(view.get('toolbar'));
}

function gotoTableLayout() {
    showMainPage();

    ////////////////////////////////////////////// !!!

    document.querySelector('header .user').addEventListener('click', click => {
        showProfileLayout();
    })
}



function showProfileLayout() {
    body.append(view.get('profileLayoutTemplate'));
    profileFunctional()
    ////////////////////////////////////////////// !!!

    document.querySelector('.profileLayout .crossIco').addEventListener('click', click => {
        hideProfileLayout();
    })
}


export function hideProfileLayout() {
    body.removeChild(document.querySelector('.profileLayout'));
}

export function showTaskCreation(e) {
    body.append(view.get('taskCreationTemplate'));
    taskCreate(e);
    const closeButton = document.querySelector('.taskCreationLayout .crossIco');
    closeButton.addEventListener('click', () => {
        document.querySelector('.taskCreationLayout').remove();
    })
}

function hideTaskCreation() {
    body.removeChild(document.querySelector('.taskCreationLayout'));
}

export function showFilter() {
    if (document.querySelector('.filterLayout')) hideFilter();
    else {
        filterView.display();
    }
}

function hideFilter() {
    body.removeChild(document.querySelector('.filterLayout'));
}


/////////////////////////////////////////////////////////