var startBtn = document.getElementById("startBtn");
//var submitBtn = document.querySelector ("submitBtn");
var questionsArray = [
    {
        questionText: "Commonly used data types DO NOT include:",
        answers: ["alerts", "booleans", "numbers", "strings"],
        answerId: 0
    },
    {
        questionText: "The condition in an if/else statement is enclosed within __________",
        answers: ["curly braces", "parenthesis", "quotes", "square brackets"],
        answerId: 1
    },
    {
        questionText: "Arrays in JavaScript can be used to store __________",
        answers: ["booleans", "numbers and strings", "other arrays", "all of the above"],
        answerId: 3
    },
    {
        questionText: "String values must be enclosed within __________ when being assigned to variables.",
        answers: ["commas", "curly braces", "quotes", "parenthesis"],
        answerId: 2
    },
    {
        questionText: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answerId: 3
    }
];
var secondsLeft = (questionsArray.length *15 +1);
var timerEl = document.getElementById("#timer");
var mainEl = document.getElementById("home");
var answerChoices = document.getElementById("answers");

var questionCounter = 0;
//WHEN the START button is clicked, the timer starts = addEventListener(click, function(){})
//When a TIMER starts, the first question pops up ? 
//document.textContent OR document.createElement OR appendChild?
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;
        
        if(secondsLeft === 0) {
            clearInterval(timerInterval);  
        }
    }, 1000); 
}

//function to swap welcome message with question #1
startBtn.addEventListener("click", function(){
    var question = questionsArray[questionCounter]["questionText"]
    document.getElementById("questionText").innerHTML=question
    console.log (question)
});

//function to get questionOptions (possible Multiple Choice answers)
startBtn.addEventListener("click", function (){
   var questionOptions = questionsArray[questionCounter]["answers"]
   document.querySelector("li").innerHTML=questionOptions
//} generateQuizQuestions(){
});

function startTimer() {
    document.getElementById("home").onclick= "New Text";
}

startTimer;

// startBtn.addEventListener("click", startTimer);
// submitBtn.addEventListener("click", function (event) {
//    event.stopPropagation();
//    addScore();
// });







// Office Hours 07/09/2020
//WHEN I answer a question
// I am given feedback - correct OR INCORRECT. Try again.
//THEN I am presented with another question
// and I am given feedback

