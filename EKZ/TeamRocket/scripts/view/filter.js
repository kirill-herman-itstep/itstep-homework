import { view } from "../../index.js";

export class FilterView {
    _filterObj;

    constructor(containerID) {
        this.containerID = containerID;
    }

    set filterObj(value) {
        this._filterObj = value;
    }

    display() {
        document.body.append(view.get('filterPage'));

        if (this._filterObj) {
            const filterLayoutInputs = document.querySelectorAll('.filterLayout input');
            filterLayoutInputs[0].value = this._filterObj.dateFrom;
            filterLayoutInputs[1].value = this._filterObj.dateTo;
            filterLayoutInputs[2].value = this._filterObj.assignee;
            filterLayoutInputs[3].value = this._filterObj.description;

            // if (this._filterObj.priority) {
            //     const importance = document.querySelectorAll('.filterLayout .importance');
            //     for (const elem of importance) {
            //         if (elem.value === this._filterObj.priority) elem.value.setAttribute('checked', true)
            //     }  
            // }
        }
    }
}