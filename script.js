// JavaScript for adding tasks
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const newTask = document.createElement("li");
        newTask.innerHTML = `
            ${taskText}
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

// JavaScript for deleting tasks
function deleteTask(button) {
    const taskList = document.getElementById("taskList");
    const taskItem = button.parentNode;
    taskList.removeChild(taskItem);
}
