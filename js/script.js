console.log('JavaScript is working!');

function addTask() { 
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;
    taskList.appendChild(newTask);
    taskInput.value = ''; // Clear the input field

}

function deleteAllTask() {
    const taskList = document.getElementById('taskList');
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

}

function filter() {    const filterInput = document.getElementById('filterInput').value.toLowerCase();
    const taskList = document.getElementById('taskList');
    const tasks = taskList.getElementsByTagName('li');

    for (let i = 0; i < tasks.length; i++) {
        const taskText = tasks[i].textContent.toLowerCase();
        if (taskText.includes(filterInput)) {
            tasks[i].style.display = '';
        } else {
            tasks[i].style.display = 'none';
        }
    }
}