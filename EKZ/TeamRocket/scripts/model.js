function update() {
    const toDoBoard = document.querySelector('#toDo .taskTable .innerContent');
    const inProgressBoard = document.querySelector('#inProgress .taskTable .innerContent');
    const complete = document.querySelector('#complete .taskTable .innerContent');
    toDoBoard.innerHTML = '';    
    inProgressBoard.innerHTML = '';    
    complete.innerHTML = '';    
    mainDB.taskArray.forEach(e => e.addOnBoard())

    const tasks = document.querySelectorAll('.taskForm')
    tasks.forEach(e => {
        e.addEventListener('click', () => showTaskOpen(e.id))
    })
}
