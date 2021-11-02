const todoList = document.querySelector('.list-group');
const emptyStatus = document.querySelector('.empty-status');
const btnTasksCompleted = document.getElementById('tasks-completed');

function updateList(newTask) {
    const todoItem = document.createElement('li');

    todoItem.classList.add('list-group-item');

    if (btnTasksCompleted.classList.contains('btn-success')) {
        todoItem.classList.add('d-none');
    }

    todoItem.innerHTML = `
        <div class="input-group mb-1">
            <div class="input-group-prepend">
                <div class="input-group-text">
                    <input type="checkbox" class="checkbox" checaria-label="Checkbox for following text input">
                </div>
            </div>
            <input type="text" class="task-name-input form-control" aria-label="Text input with checkbox" value="${newTask}">
        </div>
    `;

    const checkbox = todoItem.querySelector('.checkbox');

    checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            todoItem.classList.add('completed');
        } else {
            todoItem.classList.remove('completed');
        }
    })

    todoList.appendChild(todoItem);
}


export function updateTodoApp(newTask) {
    emptyStatus.classList.add('d-none')

    updateList(newTask);
}
