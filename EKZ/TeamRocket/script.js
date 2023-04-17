import { auth } from "./scripts/controller/login.js";
import { registration } from "./scripts/controller/registration.js";
import { taskCreate } from "./scripts/controller/taskCreate.js";
import { showMainPage } from "./scripts/controller/mainPage.js";

// document.querySelectorAll('.taskTable').forEach(table => {
    //     table.addEventListener('scroll', e => {
//         console.dir(e.target.style);
//     })
// })

// document.write('<base href="' + document.location + '" />');



// CRUTCH

export function crutchLogin() {
    history.pushState('', '', '#table');
    clearBody();
    hash = location.hash;
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

let body = document.body;
let hash = location.hash;
choosePage();

window.addEventListener("hashchange", e => {
    clearBody();
    hash = location.hash;
    choosePage();
})

function choosePage() {
    if (!hash) {
        history.pushState('', '', '#login')
        gotoLoginPage();
        gotoLoginForm();
    }
    else if (hash === '#login') {
        gotoLoginPage();
        gotoLoginForm();
    }
    else if (hash === '#register') {
        gotoLoginPage();
        gotoRegistrationForm();
    }
    else if (hash === '#table') {
        gotoMainPage();
        gotoTableLayout();
    }
};





function gotoLoginPage() {
    let loginLayoutTemplate = document.querySelector('#loginLayoutTemplate');
    let clone = loginLayoutTemplate.content.cloneNode(true);
    body.append(clone);
}

function gotoLoginForm() {
    let loginTemplate = document.querySelector('#loginTemplate');
    let clone = loginTemplate.content.cloneNode(true);
    document.getElementById('inputs').append(clone);
    auth();
}

function gotoRegistrationForm() {
    let loginTemplate = document.querySelector('#registrationTemplate');
    let clone = loginTemplate.content.cloneNode(true);
    document.getElementById('inputs').append(clone);
    registration();
}

function gotoMainPage() {
    let mainLayoutTemplate = document.querySelector('#mainLayoutTemplate');
    let clone = mainLayoutTemplate.content.cloneNode(true);
    body.append(clone);
}

function gotoTableLayout() {
    let tableLayoutTemplate = document.querySelector('#tableLayoutTemplate');
    let clone = tableLayoutTemplate.content.cloneNode(true);
    body.querySelector(`main`).append(clone);
    showMainPage();
}



function showProfileLayout() {
    let profileLayoutTemplate = document.querySelector('#profileLayoutTemplate');
    let clone = profileLayoutTemplate.content.cloneNode(true);
    body.append(clone);
}


function hideProfileLayout() {
    body.removeChild(document.querySelector('.profileLayuot'));
}

export function showTaskCreation() {
    let taskCreationTemplate = document.querySelector('#taskCreationTemplate');
    let clone = taskCreationTemplate.content.cloneNode(true);
    body.append(clone);
    taskCreate();
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
        let filterLayoutTemplate = document.querySelector('#filterLayoutTemplate');
        let clone = filterLayoutTemplate.content.cloneNode(true);
        body.append(clone);
    }
}

function hideFilter() {
    body.removeChild(document.querySelector('.filterLayout'));
}

let clearAnchor;
body.childNodes.forEach((e, i) => {
    if(e.nodeName === 'SCRIPT') clearAnchor = i + 1;
});

let mess = [];
function clearBody() {
    mess.length = 0;
    for (let i = clearAnchor; i < body.childNodes.length; i++) {
        mess.push(body.childNodes[i]);
    }
    mess.forEach(e => {
        body.removeChild(e);
    })
}

/////////////////////////////////////////////////////////