// Weekly Goal: Calculate the total weekly task goal for a user.
        
// Declare variables and values
let userName;
let dailyGoal;
let bonusTasks;
let output;

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
