// Weekly Goal: Calculate the total weekly task goal for a user.
        
// Declare variables and values
let userName;
let dailyGoal;
let bonusTasks;
let output;
let myTasks = [];

let taskBTN;
let deleteListBTN;
let idCounter = 1;

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
    /*
    ---- OLD VERSION OF TASK CODE
    let userTask = document.getElementById("task-name"); // task-name user input
    myTasks.push(userTask.value); // adds to myTasks array

    const li = document.createElement("li"); // creates list item
    li.append(myTasks[myTasks.length-1]); // appends the last item of the array to the list item
    ul.append(li); // add the list item to the unordered list

    userTask.value = ""; // clears input field for user
    */
    addTasks();
})

class Task { // task object constructor
    constructor(id, name, priority, isImportant, isCompleted){
        this.id = id;
        this.name = name;
        this.priority = priority;
        this.isImportant = isImportant;
        this.isCompleted = isCompleted;
    }

}


function addTasks(){ // add tasks via DOM
    let userTask = document.getElementById("task-name"); // task-name user input
    let taskPriority = document.getElementById("task-priority"); // task-priority
    let taskImportance = document.getElementById("important-task"); // important-task checkbox

    const complete = document.createElement("input"); // checkbox for isCompleted
    complete.id = "task-check"; // for css styling purposes
    complete.type = "checkbox";
    complete.checked = false; // ensures the task will be uncompleted by default

    const newTask = new Task (idCounter++, userTask.value, taskPriority.value, taskImportance.checked, complete.checked); // new task object
    myTasks.push(newTask); // add to list of tasks

    const li =  document.createElement("li"); // creates list item
    li.id = "task"; // for css styling purposes
    li.textContent = " " + newTask.name + " (Priority: " + newTask.priority + ")"; // displays name of task and priority level
    li.prepend(complete); // gives task a checkbox to mark it as completed (prepend is used to make it appear BEFORE the text instead of after)

    if (newTask.isImportant){ // if the task is important, makes text red
        li.style.color ="red";
    }

    ul.append(li); // adds list item to unordered list

    console.log(JSON.stringify(myTasks)); // logs change to console
    userTask.value = ""; // clears input field
    taskImportance.checked = false; // clears important? checkbox
    
    complete.addEventListener("change", function() { // listens for a change in the complete checkbox
        markTask(newTask, li, complete); // marks the task as complete/uncomplete
    })
};

function markTask(taskObj, taskElement, checkboxElement){ // marks task complete/uncomplete
    taskObj.isCompleted = checkboxElement.checked;

    if (taskObj.isCompleted) {
        taskElement.style.textDecoration = "line-through";
    }
    else{
        taskElement.style.textDecoration = "none";
    }

    console.log(JSON.stringify(myTasks)); // logs change to console
};

function deleteTasks(){ // empties out task list
    myTasks = [];
    ul.innerHTML = "";

    console.log(JSON.stringify(myTasks)); // logs change to console
};

deleteListBTN = document.getElementById("delete-list"); // variable reference to delete list button

deleteListBTN.addEventListener("click", function(event){ // on click event listener
    event.preventDefault();
    deleteTasks(); // deletes list
})