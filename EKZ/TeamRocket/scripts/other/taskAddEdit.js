// Добавление задачи [РАБОТАЕТ]
function taskHTML(priority, name, id) {
    return `
            <div class="taskForm" id="${id}">
                <div class="taskStatus">
                    <div class="mark ${priority}">${priority}</div>
                    <svg class="optionsIco" viewBox="0 0 4 17">
                        <path d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"/>
                    </svg>
                </div>
                <div class="taskName">
                    ${name}
                </div>
                <div class="taskAssignee">
                    <div class="assignee">
                        <svg class="assigneeAvatar" viewBox="0 0 30 26" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0002 6C21.0002 9.31371 18.314 12 15.0002 12C11.6865 12 9.00024 9.31371 9.00024 6C9.00024 2.68629 11.6865 0 15.0002 0C18.314 0 21.0002 2.68629 21.0002 6ZM19.0002 6C19.0002 8.20914 17.2094 10 15.0002 10C12.7911 10 11.0002 8.20914 11.0002 6C11.0002 3.79086 12.7911 2 15.0002 2C17.2094 2 19.0002 3.79086 19.0002 6Z"/>
                            <path d="M15.0002 15C8.52586 15 3.00952 18.8284 0.908203 24.192C1.4201 24.7004 1.95934 25.1812 2.52353 25.6321C4.08827 20.7077 8.99696 17 15.0002 17C21.0035 17 25.9122 20.7077 27.477 25.6321C28.0412 25.1812 28.5804 24.7004 29.0923 24.1921C26.991 18.8284 21.4746 15 15.0002 15Z"/>
                        </svg>
                    </div>
                </div>
            </div>
    `
}

let priority = '';
let access = '';

function getCardData() {
    const inputs = document.querySelectorAll('.taskCreationLayout input');
    const textarea = document.querySelector('.taskCreationLayout textarea');
    const select = document.querySelector('.taskCreationLayout select')
    
    const assignee = inputs[0].value;
    const name = inputs[1].value;
    const description = textarea.value;
    const status = select.value;
    return cardData = {
        name,
        priority,
        description,
        assignee,
        status,
        access,
    }
}

function addCard() {
    
}

function addOnBoard() {
    const toDoBoard = document.querySelector('#toDo .taskTable .innerContent');
    const inProgressBoard = document.querySelector('#inProgress .taskTable .innerContent');
    const complete = document.querySelector('#complete .taskTable .innerContent');
    if (this.status === 'to do') {
        toDoBoard.insertAdjacentHTML('afterbegin', taskHTML(this.priority, this.name, this.id))
    } else if (this.status === 'in progress') {
        inProgressBoard.insertAdjacentHTML('afterbegin', taskHTML(this.priority, this.name, this.id))
    } else complete.insertAdjacentHTML('afterbegin', taskHTML(this.priority, this.name, this.id)) 
}