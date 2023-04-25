import { showFilter } from "../../script.js";
import { filterView } from "../../index.js";
import { clickableTasks } from "./taskPage.js";
import { showTaskCreation } from "../../script.js";

export function filter() {
    const filterButton = document.querySelector('.filter')
    filterButton.addEventListener('click', () => inputs())
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
                showFilter();
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

            filterView.filter({dateFrom, dateTo, assignee, description, priority, isPrivate});
            clickableTasks();

            const createTask = document.querySelectorAll('.tableHeader .plusIco');
            createTask.forEach(elem => elem.addEventListener('click', () => showTaskCreation()));

            console.log({dateFrom, dateTo, assignee, description, priority, isPrivate});
    }))
    } 
}

function clearInputs() {
    const filterLayoutInputs = document.querySelectorAll('.filterLayout input');
    filterLayoutInputs.forEach(e => {
        if (e.getAttribute('type') === 'radio') e.removeAttribute('checked');
        else e.value = '';
    });
    filterView.filter();
    clickableTasks();
}