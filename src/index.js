import { updateTodoApp } from './list';
import { addEventListeners } from './tasks';

const form = document.querySelector('form');

addEventListeners();

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const newTask = formData.get('task');

    if (!newTask) {
        return;
    }

    updateTodoApp(newTask);

    form.reset()
})
