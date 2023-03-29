const input = document.getElementById("input");
const submitBtn = document.getElementById("submit-btn");
const taskList = document.getElementById("tasks");
const taskSelect = document.getElementById("task-select");

let tasks = [];

function addTask(event) {
    event.preventDefault();

    if (input.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    const task = input.value;
    tasks.push(task);

    // Sort tasks alphabetically
    tasks.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    // Clear input field
    input.value = "";

    renderTasks();
    renderTaskSelect();
}

function renderTasks() {
    taskList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const li = document.createElement("li");
        li.innerText = task;
        li.addEventListener("click", completeTask);
        taskList.appendChild(li);
    }
}

function renderTaskSelect() {
    taskSelect.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const option = document.createElement("option");
        option.innerText = task;
        taskSelect.appendChild(option);
    }
}

function completeTask(event) {
    event.target.classList.toggle("completed");
}

submitBtn.addEventListener("click", addTask);
