import { showFilter, hideFilter } from "../../script.js";
import { filterView } from "../../index.js";
import { closeTask } from "./taskPage.js";
import { showTaskFeed } from "./mainPage.js";
import { popUp } from "../helpers/popUp.js";

export function filter() {
    const filterButton = document.querySelector('.filter')
    filterButton.addEventListener('click', () => {
        if (document.querySelector('.task')) closeTask();
        inputs();
    })
}

function inputs() {
    if (document.querySelector('.filterLayout')) {
        showFilter();
    } else {
        showFilter();
        const clearButton = document.querySelector('.filterLayout button');
        clearButton.addEventListener('click', () => clearInputs());

        document.onclick = function(e) {
            if (!e.target.closest('.filterLayout') && !e.target.closest('.filter')) {
                hideFilter();
                document.onclick = null;
            }
        }

        const filterLayoutInputs = document.querySelectorAll('.filterLayout input');
        filterLayoutInputs.forEach(e => e.addEventListener('input', () => {
            const dateFrom = filterLayoutInputs[0].value;
            const dateTo = filterLayoutInputs[1].value;
            const assignee = filterLayoutInputs[2].value;
            const description = filterLayoutInputs[3].value;
            const priority = document.querySelector('.filterLayout .importance input:checked')?.value;
            
            let isPrivate = document.querySelector('.filterLayout .access input:checked')?.value;
            if (isPrivate !== undefined) isPrivate = !!+isPrivate;

            currentFilter({dateFrom, dateTo, assignee, description, priority, isPrivate});
            popUp('Filtered')
    }))
    }
}

function currentFilter(filterObj) {
    filterView.filterObj = filterObj;
    
    taskBoard.innerHTML = '';

    const completeBoardFilter = Object.assign({status: 'complete'}, filterObj);
    const inProgressBoardFilter = Object.assign({status: 'in-progress'}, filterObj);
    const toDoBoardFilter = Object.assign({status: 'to-do'}, filterObj);

    showTaskFeed(completeBoardFilter, inProgressBoardFilter, toDoBoardFilter);
}

function clearInputs() {
    const filterLayoutInputs = document.querySelectorAll('.filterLayout input');
    filterLayoutInputs.forEach(e => {
        if (e.getAttribute('type') === 'radio') e.checked = false;
        else e.value = '';
    });
    currentFilter();
    popUp('Cleared')
}