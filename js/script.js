console.log('JavaScript is working!');
//Global variable to store tasks
let tasks = [];

// Function to add a task
function addTask() { 
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date-input');


    //validate input
    if (taskInput.value === '' || dueDateInput.value === '') {
        alert('Please enter a task and a due date.');
        return;
    } else {
        // Create a new task object
        const newTask = {
            task: taskInput.value,
            dueDate: dueDateInput.value
        };

        // Add the new task to the tasks array
        tasks.push(newTask);

        // Clear the input fields
        taskInput.value = '';
        dueDateInput.value = '';

        // Log the tasks array to the console
        console.log(tasks);
    }        console.log('Adding task:', taskInput.value, 'Due date:', dueDateInput.value);

// Function to delete a task
function deleteAllTask() {
  

}

// Function to show all tasks
function filter() {  
}