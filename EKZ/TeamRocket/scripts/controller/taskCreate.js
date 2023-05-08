import { taskView, mainDB, userDB } from "../../index.js";
import { Task } from "../model/model.task.js";

export function taskCreate(e) {
    const closeButton = document.querySelector('.task .crossIco');
    const taskPage = document.querySelector('.task');
    const select = document.querySelectorAll('.taskCreationLayout select');

    select[0].innerHTML = getUserSelects(userDB.getCurrentUserFromLocalStorage().name);
    document.querySelector('.chooseImportance input[value="low"]').checked = true;
    TaskBoardSelected(e.target, select[1]);

    closeButton.addEventListener('click', () => {
        taskPage.remove();
    });

    const resetTaskButton = document.querySelector('.taskCreationLayout button.reset');
    const createTaskButton = document.querySelector('.taskCreationLayout button.create');

    resetTaskButton.addEventListener('click', () => reset(e));
    createTaskButton.addEventListener('click', () => creat());
}

export function getUserSelects(user) {
    userDB.getUserArrayFromLocalStorage();
    return userDB.userArray.map(e => {
        if (user === e.name) {
            return `<option selected>${e.name}</option>`;
        } else {
            return `<option>${e.name}</option>`;
        }     
    }).join('');
}

function TaskBoardSelected(elem, select) {
   
    const boardName = findElementBoard(elem).querySelector('h4').innerText;

    for (let i = 0; i < select.length; i++) {
        select[i].removeAttribute('selected');
        if (select[i].innerText === boardName) select[i].setAttribute('selected', true); 
    }
}

function findElementBoard(elem) {
    if (Element.prototype.closest) {
        return elem.closest('.tableHeader');
      }
  
      let parent = elem;
  
      while (parent) {
        if (parent.matches('.tableHeader')) {
          return parent;
        }
  
        parent = parent.parentElement;
      }
}

function creat() {
    const input = document.querySelector('.taskCreationLayout input');
    const textarea = document.querySelector('.taskCreationLayout textarea');
    const select = document.querySelectorAll('.taskCreationLayout select');
    
    const assignee = select[0].value;
    const name = input.value;
    const description = textarea.value;
    const status = select[1].value;
    let priority = document.querySelector('.chooseImportance input:checked')?.value;

    const isPrivate = !!+document.querySelector('.chooseAccess input:checked').value;

    const newTask = {name, priority, description, assignee, status, isPrivate};

    if (Task.validate(newTask)) {
        taskView.addTask(newTask);
        document.querySelector('.taskCreationLayout').remove();
        mainDB.saveInLocalStorage();
    }
}

function reset(e) {
    const select = document.querySelectorAll('.taskCreationLayout select');

    document.querySelector('.title input').value = '';
    document.querySelector('.description textarea').value = '';
    select[0].innerHTML = getUserSelects();

    document.querySelector('.chooseImportance input[value="low"]').checked = true;
    
    TaskBoardSelected(e.target, select[1]);

    document.querySelector('.chooseAccess input[value="0"]').checked = true;
}