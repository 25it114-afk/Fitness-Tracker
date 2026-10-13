const form = document.getElementById("fitnessForm");
const activityList = document.getElementById("activityList");

let totalSteps = 0;
let totalCalories = 0;

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const activity = document.getElementById("activity").value;
    const steps = parseInt(document.getElementById("steps").value);
    const calories = parseInt(document.getElementById("calories").value);

    const li = document.createElement("li");
    li.textContent = `${activity} - Steps: ${steps}, Calories: ${calories}`;
    activityList.appendChild(li);

    totalSteps += steps;
    totalCalories += calories;

    document.getElementById("totalSteps").textContent = totalSteps;
    document.getElementById("totalCalories").textContent = totalCalories;

    saveData();

    form.reset();
});

function saveData() {
    localStorage.setItem("activities", activityList.innerHTML);
    localStorage.setItem("steps", totalSteps);
    localStorage.setItem("calories", totalCalories);
}

window.onload = function() {
    activityList.innerHTML = localStorage.getItem("activities") || "";
    totalSteps = parseInt(localStorage.getItem("steps")) || 0;
    totalCalories = parseInt(localStorage.getItem("calories")) || 0;

    document.getElementById("totalSteps").textContent = totalSteps;
    document.getElementById("totalCalories").textContent = totalCalories;
};