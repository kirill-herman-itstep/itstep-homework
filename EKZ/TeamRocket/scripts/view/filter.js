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

            for (const input of filterLayoutInputs) {
                if (this._filterObj.priority && this._filterObj.priority === input.value) input.checked = true;
                if (this._filterObj.isPrivate !== undefined && this._filterObj.isPrivate === input.value) input.checked = true;
            }
        }
    }
}