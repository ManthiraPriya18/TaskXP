let taskCounter = 0;

// Show Add Task Popup
function showPopup() {
    document.getElementById("popup").style.display = "flex";
}

// Close Popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Add Task
function addTask() {
    let taskText = document.getElementById("task-input").value;
    if (taskText === "") return;

    let taskList = document.getElementById("task-list");
    let li = document.createElement("li");
    li.classList.add("task");
    li.innerHTML = `${taskText} 
        <button class="complete-btn" onclick="completeTask(this)">✅</button>
        <button class="delete-btn" onclick="deleteTask(this)">🗑️</button>`;

    taskList.appendChild(li);
    document.getElementById("task-input").value = "";
    closePopup();
}

// Mark Task as Completed
function completeTask(button) {
    button.parentElement.remove();
    taskCounter++;
    document.getElementById("task-counter").innerText = taskCounter;
}

// Move Task to Trash
function deleteTask(button) {
    let trashList = document.getElementById("trash-list");
    let li = document.createElement("li");
    li.classList.add("task");
    li.innerText = button.parentElement.textContent;
    trashList.appendChild(li);
    button.parentElement.remove();
}

// Show Trash
function showTrash() {
    document.getElementById("trash-popup").style.display = "flex";
}

// Close Trash
function closeTrash() {
    document.getElementById("trash-popup").style.display = "none";
}

// Countdown Timer
setInterval(() => {
    let now = new Date();
    let midnight = new Date();
    midnight.setHours(23, 59, 59, 999);
    let diff = midnight - now;
    let hours = Math.floor(diff / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerText = `${hours}h ${minutes}m ${seconds}s`;
}, 1000);
