export class View {
    constructor() {
        document.querySelectorAll('template').forEach(template => {
            this[template.id] = template.content.cloneNode(true);
        })
    };

    get(name) {
        return this[name].cloneNode(true);
    }
}