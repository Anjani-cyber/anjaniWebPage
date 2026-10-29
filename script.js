
/* 1. Welcome Message */
window.addEventListener("load", function () {
    alert("Welcome to FocusFlow! Let's achieve your goals.");
});

/* 2. Dark Mode */
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

/* 3. Task Counter */
let completedTasks = 0;
const totalTasks = 4;

function completeTask() {
    if (completedTasks < totalTasks) {
        completedTasks++;

        document.getElementById("task-count").textContent =
            completedTasks + " / " + totalTasks;

        let percentage = (completedTasks / totalTasks) * 100;

        document.getElementById("task-progress").style.width =
            percentage + "%";
    } else {
        alert("Great job! You completed all your tasks!");
    }
}

/* 4. Show Current Date */
function showDate() {
    const today = new Date();

    document.getElementById("date").textContent =
        today.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
}
