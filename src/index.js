import { updateTodoApp } from './list';
import { addEventListeners } from './tasks';


const form = document.querySelector('form');

// Creating a global variable and passing there an empty array, there we will store all the tasks.
addEventListeners();

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // getting input value from <form>:
    const formData = new FormData(form);

    const newTask = formData.get('task');

    // If newTask does not exist, it will get out of the function. 
    // !newTask will change value to trufy or falsy. If newTaks is trufy ! will change it to false and we will not get inside the if statement. 
    // If newTaks is flasy(its empty string), then ! will change it to value trufy and code will proceed into the if statement.
    if (!newTask) {
        return;
    }

    //calling the function and passing as a parametr the array
    updateTodoApp(newTask);


    form.reset()
})


