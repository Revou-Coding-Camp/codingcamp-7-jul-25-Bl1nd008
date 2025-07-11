console.log('JavaScript is working!');

// Global array to store tasks
let tasks = [];

// Add a new task
function addTask() {
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date-input');

    if (taskInput.value === '' || dueDateInput.value === '') {
        alert('Please enter a task and a due date.');
        return;
    }

    const newTask = {
        task: taskInput.value,
        dueDate: dueDateInput.value,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = '';
    dueDateInput.value = '';
    displayTasks();
}

// Display the task list (default: full list)
function displayTasks(taskArray = tasks) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    if (taskArray.length === 0) {
        taskList.innerHTML = '<li class="text-white font-comic-sans">No Tasks At The Moment</li>';
        return;
    }

    taskArray.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = 'flex items-center gap-4';

        // Completion checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.onchange = () => toggleComplete(index);

        // Task text
        const text = document.createElement('span');
        text.textContent = `${task.task} - Due: ${task.dueDate}`;
        if (task.completed) {
            text.classList.add('line-through', 'text-gray-400');
        }

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '🗑️';
        deleteBtn.className = 'ml-auto text-red-400 hover:text-red-600';
        deleteBtn.onclick = () => deleteTask(index);

        taskItem.appendChild(checkbox);
        taskItem.appendChild(text);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
    });
}

// Mark task as completed/incomplete
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

// Delete a single task
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Delete all tasks
function deleteAllTask() {
    tasks = [];
    displayTasks();
}

// Filter tasks based on search input
function filterTasks() {
    const filterInput = document.getElementById('filter-input').value.toLowerCase();
    const filtered = tasks.filter(task =>
        task.task.toLowerCase().includes(filterInput)
    );
    displayTasks(filtered);
}
