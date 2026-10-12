// Weekly Goal: Calculate the total weekly task goal for a user.
        
// Declare variables and values
let userName;
let dailyGoal;
let bonusTasks;
let output;
let myTasks = [];

let taskBTN;

function weeklyGoal(userName, dailyGoal, bonusTasks){
    // Calculate weekly goal based on number of workdays (5) per week
    let weeklyGoal = dailyGoal * 5
    // Add bonusTasks to weeklyGoal.
    let totalGoal = Number(weeklyGoal) + Number(bonusTasks);

    output = "User: " + userName + "<br>" + "Total Weekly Goal:"  + totalGoal;
    document.getElementById("goal-message").innerHTML = output;
}


document.getElementById("goal-btn").addEventListener("click", function(event) {
    event.preventDefault();

    let userName = document.getElementById("name").value
    let dailyGoal = document.getElementById("daily-goal").value
    let bonusTasks = document.getElementById("bonus-tasks").value

    weeklyGoal(userName, dailyGoal, bonusTasks)
});

// creates unordered list item
const ul = document.createElement("ul");
ul.id = "user-tasks";
document.getElementById("task-list").appendChild(ul); // adds it to the task list div

taskBTN = document.getElementById("add-task"); // variable reference to add task button

taskBTN.addEventListener("click", function(event) { // on click event listener
    event.preventDefault();
    let userTask = document.getElementById("task-name"); // task-name user input
    myTasks.push(userTask.value); // adds to myTasks array

    const li = document.createElement("li"); // creates list item
    li.append(myTasks[myTasks.length-1]); // appends the last item of the array to the list item
    ul.append(li); // add the list item to the unordered list

    userTask.value = ""; // clears input field for user
})