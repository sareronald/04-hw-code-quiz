var startBtn = document.getElementById("startBtn");
//var submitBtn = document.querySelector ("submitBtn");
var questionsArray = [
    {
        questionText: "Commonly used data types DO NOT include:",
        answerA: "alerts", 
        answerB: "booleans",
        answerC: "numbers", 
        answerD: "strings",
        correct: "A"
    },
    {
        questionText: "The condition in an if/else statement is enclosed within __________",
        answerA: "curly braces", 
        answerB: "parenthesis", 
        answerC: "quotes", 
        answerD: "square brackets",
        correct: "B"
    },
    {
        questionText: "Arrays in JavaScript can be used to store __________",
        answerA: "booleans", 
        answerB: "numbers and strings", 
        answerC: "other arrays",
        answerD: "all of the above",
        correct: "C"
    },
    {
        questionText: "String values must be enclosed within __________ when being assigned to variables.",
        answerA: "commas",
        answerB: "curly braces", 
        answerC: "quotes", 
        answerD: "parenthesis",
        correct: "B"
    },
    {
        questionText: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answerA: "JavaScript", 
        answerB: "terminal/bash", 
        answerC: "for loops", 
        answerD: "console.log",
        correct: "D"
    }
];
var secondsLeft = (questionsArray.length *15 +1);
var quiz = document.getElementById("quiz")

var timerEl = document.getElementById("#timer");
var mainEl = document.getElementById("home");
var answerChoices = document.getElementById("answers");


var lastQuestionIndex = questionsArray.length -1;
function generateQuestion (i) {
    var q = questionsArray[i];
    return "<div class=\"col-10 col-lg-8 question\"> id=\"question"+i+"\""+
    "<h3 class=\"mb-4\">"+q.questionText+"</h3>"+
    "<ul class=\"list-unstyled\">"+
        "<li class=\"answerChoice A\">A)"+q.answerA+"</li>"+
        "<li class=\"answerChoice B\">B)"+q.answerB+"</li>"+
        "<li class=\"answerChoice C\">C)"+q.answerC+"</li>"+
        "<li class=\"answerChoice D\">D)"+q.answerD+"</li>"+
    "</ul>"+
    "<p class=\"feedback\"></p>"+
"</div>"
    // questionText.innerHTML = "<li>" + q.questionText + "</li>";
    // A.innerHTML = q.answerA; // answerA is not defined? but isn't it defined in the array?
    // B.innerHTML = q.answerB;
    // C.innerHTML = q.answerC;
    // D.innerHTML = q.answerD;
}




// runningQuestionIndex++
// generateQuestion()

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

var questionCounter = 0;
//function to swap welcome message with question #1
startBtn.addEventListener("click", function(){
    var htmlString = ""
for(let i=0;i<=lastQuestionIndex;i++){
    htmlString += generateQuestion(i)
}

questions.innerHTML = htmlString
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

// if you choose the correct answer the background colour of the text will turn GREEN 
// and correct will come up at the bottom of the page
function answerIsCorrect(){
    document.getElementById().style.backgroundColor = "green"
}
// if you choose the wrong answer the background colour of the text will turn RED
// and incorrect will come up at the bottom of the page
// and the counter looses time
function answerIsWrong(){
    document.getElementById().style.backgroundColor = "green"
}


function selectOption(){
    console.log()
}



// Office Hours 07/09/2020
//WHEN I answer a question
// I am given feedback - correct OR INCORRECT. Try again.
//THEN I am presented with another question
// and I am given feedback

window.onclick = selectOption()