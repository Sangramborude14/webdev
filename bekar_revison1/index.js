const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// 1. Load tasks from localStorage on startup
document.addEventListener('DOMContentLoaded', getTasks);

function addTask() {
    const taskText = input.value.trim();
    if (taskText === "") return;

    createTaskElement(taskText);
    
    // 2. Save to Local Storage
    saveLocalTasks(taskText);

    input.value = "";
}

function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    li.querySelector('.delete-btn').addEventListener('click', function() {
        removeLocalTasks(taskText); // Remove from storage
        li.remove();                // Remove from UI
    });

    todoList.appendChild(li);
}

// --- Local Storage Logic ---

function saveLocalTasks(task) {
    let tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasks() {
    let tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
    tasks.forEach(task => createTaskElement(task));
}

function removeLocalTasks(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    const taskIndex = tasks.indexOf(task);
    tasks.splice(taskIndex, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

addBtn.addEventListener('click', addTask);