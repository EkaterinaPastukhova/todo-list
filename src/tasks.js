export function addEventListeners() {
    const btnTasksAll = document.getElementById('tasks-all');
    const btnTasksInProgress = document.getElementById('tasks-in-progress');
    const btnTasksCompleted = document.getElementById('tasks-completed');
    const btnTasksDeleted = document.getElementById('tasks-delete');

    btnTasksAll.addEventListener('click', () => {
        btnTasksAll.classList.remove('btn-outline-secondary');
        btnTasksAll.classList.add('btn-secondary');

        btnTasksInProgress.classList.add('btn-outline-info');
        btnTasksInProgress.classList.remove('btn-info');

        btnTasksCompleted.classList.add('btn-outline-success');
        btnTasksCompleted.classList.remove('btn-success');

        const todoItems = document.querySelectorAll('.list-group-item');

        todoItems.forEach(todoItem => {
            todoItem.classList.remove('d-none')
        })
    })

    btnTasksInProgress.addEventListener('click', () => {
        btnTasksInProgress.classList.remove('btn-outline-info');
        btnTasksInProgress.classList.add('btn-info');

        btnTasksCompleted.classList.add('btn-outline-success');
        btnTasksCompleted.classList.remove('btn-success');

        btnTasksAll.classList.remove('btn-secondary');
        btnTasksAll.classList.add('btn-outline-secondary');

        const todoItems = document.querySelectorAll('.list-group-item');

        todoItems.forEach(todoItem => {
            if (todoItem.classList.contains('completed')) {
                todoItem.classList.add('d-none')
            } else {
                todoItem.classList.remove('d-none');
            }
        })
    })

    btnTasksCompleted.addEventListener('click', () => {
        btnTasksCompleted.classList.remove('btn-outline-success');
        btnTasksCompleted.classList.add('btn-success');

        btnTasksInProgress.classList.remove('btn-info');
        btnTasksInProgress.classList.add('btn-outline-info');

        btnTasksAll.classList.remove('btn-secondary');
        btnTasksAll.classList.add('btn-outline-secondary');

        const todoItems = document.querySelectorAll('.list-group-item');

        todoItems.forEach((todoItem) => {
            if (todoItem.classList.contains('completed')) {
                todoItem.classList.remove('d-none');
            } else {
                todoItem.classList.add('d-none')
            }
        })
    })

    btnTasksDeleted.addEventListener('click', () => {
        const todoItems = document.querySelectorAll('.list-group-item');

        todoItems.forEach((todoItem) => {
            if (todoItem.classList.contains('completed')) {
                todoItem.remove()
            }
        })
    })
}