var startBtn = document.getElementById("startBtn");
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
        correct: "D"
    },
    {
        questionText: "String values must be enclosed within __________ when being assigned to variables.",
        answerA: "commas",
        answerB: "curly braces",
        answerC: "quotes",
        answerD: "parenthesis",
        correct: "C"
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
var timerEl = document.querySelector(".timer");
var introEl = document.getElementById("intro");
var finalEl = document.getElementById("final-score")
var questionEl = document.getElementById("questions")
var feedback = document.querySelector(".feedback")
var score = 0;

// Generate Question
// hide start screen ~ unhide questions
var currentQuestionIndex = 0;
function generateQuestion(i) {
    var q = questionsArray[i];
    return "<div class=\"col-10 col-lg-8 question\"> id=\"question" + i + "\"" +
        "<h3 class=\"mb-4\">" + q.questionText + "</h3>" +
        "<ul class=\"list-unstyled\">" +
        "<li class=\"answerChoice\" data-answer='A'>A)" + q.answerA + "</li>" +
        "<li class=\"answerChoice\" data-answer='B'>B)" + q.answerB + "</li>" +
        "<li class=\"answerChoice\" data-answer='C'>C)" + q.answerC + "</li>" +
        "<li class=\"answerChoice\" data-answer='D'>D)" + q.answerD + "</li>" +
        "</ul>" +
        "<p class=\"feedback\"></p>" +
        "</div>"
}

//WHEN the START button is clicked, the timer starts = addEventListener(click, function(){})
//When a TIMER starts, the first question pops up ? 
//document.textContent OR document.createElement OR appendChild?
//show the time
var secondsLeft = 80;
function setTime() {
    var timerInterval = setInterval(function () {
        timerEl.textContent = "Time: " + secondsLeft + " seconds remaining";
        secondsLeft--;

        if (secondsLeft === 0) {
            timerEl.textContent = "";
            // or there are no more questions left?
            clearInterval(timerInterval);
            showFinalScore();
        }
    }, 1000);
}

//function to swap welcome message with question #1
startBtn.addEventListener("click", function () {
    introEl.style.display = "none";
    setTime()
    var htmlString = "";
    htmlString += generateQuestion(currentQuestionIndex);
    questions.innerHTML = htmlString
});

questions.addEventListener("click", function (event) {
    if (event.target.matches("li")) {
        var userChoice = event.target.getAttribute("data-answer");
        var correctAnswer = questionsArray[currentQuestionIndex].correct;
    }

    if (userChoice === correctAnswer) {
        var answerIsCorrect = document.createElement(correctAnswer);
        answerIsCorrect.textContent = "Correct!";
        feedback.innerHTML = answerIsCorrect;
        score = score++
    }
    else {
        var answerIsIncorrect = document.createElement(correctAnswer);
        answerIsIncorrect.textContent = "Incorrect!";
        feedback.innerHTML = answerIsIncorrect;
        timerEl--
    }
    currentQuestionIndex = currentQuestionIndex + 1
    // if (questionsArray) has a quesiton for currentQuestionIndex { 
    // if (currentQuestionIndex = questionArray.length) {
    var htmlString = "";
    htmlString += generateQuestion(currentQuestionIndex);
    questions.innerHTML = htmlString;
    console.log(htmlString)
})
// else {
// else you advance to the end of the quiz
// questionEl.style.display = none;
// finalEl.style.display = "block";

//to add a name to the list of high scores in highscores.html
var people = "";
var currentId = 0;
var nameEl = document.querySelector("#name");
var finalScoreEl = document.querySelector("#final-score");

function addPersonToList(event) {
    event.preventDefault();
    var name = nameEl.value;
    var li = docuemtn.createElement("li");
    li.id = people.length;
    li.innerHTML = name;
    people.push({ name: name });
    finalScoreEl.append(li);
}

function handleClick(event) {
    if (event.target.matches("button")){
        event.presentDefault();
        currentId = parseInt(event.target.parentElement.id);
        var name = people[currentId].name;
        modalNameEl.textContent = name;
    }
}