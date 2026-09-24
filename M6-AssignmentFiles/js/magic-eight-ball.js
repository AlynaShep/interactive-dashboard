// Put your JavaScript code in this file

// array with 6 possible magic 8 ball answers
let answers = ["Most likely", "Yes", "Ask Again Later", "Reply Hazy, Try Again", "Very Doubtful", "Don't Count On It"]

// displays magic 8 ball answers
function displayAnswer() {
    let index = Math.floor(Math.random() * answers.length);// selects random number to index answers array
    document.getElementById("circle").style.display = "block";// makes the circle div visible
    document.getElementById("circle").innerHTML = '<br><br><br>' + answers[index];// writes the answer in the circle div
}


document.getElementById("ball").addEventListener("mousedown", function (event) { // when holding click on the magic 8 ball image...
    event.preventDefault();

    // checks if something has been entered into the question field
    if (document.getElementById("question").value.length == 0) {
        window.alert("Enter a question to receive an answer."); // alerts the user they need to input a question before shaking the 8 ball
    }
    else {
        displayAnswer(); // shakes the 8 ball and displays the answer
    }

});


document.getElementById("reset").addEventListener("click", function (event) { // when reset button is clicked...
    event.preventDefault();
    
    document.getElementById("circle").style.display = "none"; // makes circle div invisible
});

document.getElementById("addResponse").addEventListener("click", function (event){ // prompts user to add a new response to the answers array
    event.preventDefault();

    let userResponse = prompt("Enter a new 8-ball response: "); // user enters new response
    if (userResponse){
        answers.push(userResponse); // new response is added to end of answers array
    }
});
