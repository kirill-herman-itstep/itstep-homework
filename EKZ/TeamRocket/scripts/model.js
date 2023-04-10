import {mainDB} from "../index.js";
import {addOnBoard} from "./other/taskAddEdit.js";
import {showTaskOpen} from "../script.js";

export function update() {
    return 
    const toDoBoard = document.querySelector('#toDo .taskTable .innerContent');
    const inProgressBoard = document.querySelector('#inProgress .taskTable .innerContent');
    const complete = document.querySelector('#complete .taskTable .innerContent');
    toDoBoard.innerHTML = '';    
    inProgressBoard.innerHTML = '';    
    complete.innerHTML = '';
    mainDB.taskArray.forEach(e => addOnBoard(e));

    const tasks = document.querySelectorAll('.taskForm');
    tasks.forEach(e => {
        e.addEventListener('click', () => showTaskOpen(e.id));
    });
}
