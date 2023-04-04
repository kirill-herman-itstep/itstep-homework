import { getCardData } from "./scripts/other/taskAddEdit.js";
import { loginFormData, regUserData } from "./scripts/other/authorization.js";
import { userAuth, userCreate, addtask } from "./scripts/controller.js";

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
    showProfileLayuot()
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

    const subBut = document.querySelector('form[name="login"] button')
    subBut.addEventListener('click', () => userAuth(loginFormData()))
}

function gotoRegistrationForm() {
    let loginTemplate = document.querySelector('#registrationTemplate');
    let clone = loginTemplate.content.cloneNode(true);
    document.getElementById('inputs').append(clone);

    const subBut = document.querySelector('form[name="registration"] button')
    subBut.addEventListener('click', () => userCreate(regUserData()))
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

    const addTaskButton = document.querySelectorAll('svg.plusIco')
    addTaskButton.forEach(e => e.addEventListener('click', () => crutchTaskCreation()))
}



function showProfileLayuot() {
    let profileLayoutTemplate = document.querySelector('#profileLayoutTemplate');
    let clone = profileLayoutTemplate.content.cloneNode(true);
    body.append(clone);
}


function hideProfileLayout() {
    body.removeChild(document.querySelector('.profileLayuot'));
}

export let priority = '';
export let access = '';

function showTaskCreation() {
    let taskCreationTemplate = document.querySelector('#taskCreationTemplate');
    let clone = taskCreationTemplate.content.cloneNode(true);
    body.append(clone);

    const importancesList = document.querySelectorAll('.chooseImportance #importance div')
    importancesList.forEach(e => {
        e.addEventListener('click', (event) => {
            priority = event.target.className;
            importancesList.forEach(elem => elem.style = '')
            event.target.style.outline = '2px solid white'
        })
    })

    const accessList = document.querySelectorAll('.chooseAccess svg')
    accessList.forEach(e => {
        e.addEventListener('click', (event) => {
            accessList.forEach(elem => elem.style = '')
            if (event.target === accessList[1]) {
                access = true;
            } else access = false
            event.target.style.outline = '1px solid white'
        })
    })

    const submitButton = document.querySelector('.taskCreationLayout button')
    submitButton.addEventListener('click', () => addtask(getCardData()))

    const closeTaskCreation = document.querySelector('svg.crossIco')
    closeTaskCreation.addEventListener('click', () => hideTaskCreation())
}

function hideTaskCreation() {
    body.removeChild(document.querySelector('.taskCreationLayout'));
}

let currentTaskOpen;

function showTaskOpen(id) {
    if (currentTaskOpen) {
        const taskPage = document.querySelector('.task');
        taskPage.remove();
        currentTaskOpen = null;
    }
    const main = document.querySelector('main');
    const task = mainDB.getTask(id);
    currentTaskOpen = task;
    main.insertAdjacentHTML('afterbegin', pageHTML(task));

    const closeButton = document.querySelector('.task .crossIco');
    const taskPage = document.querySelector('.task');
    closeButton.addEventListener('click', () => {
        taskPage.remove();
        currentTaskOpen = null;
    } );
}

function showFilter() {
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