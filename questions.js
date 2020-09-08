//basic variables
var QuestionsIndex = 0;
var time = questions.length*20;
​
function startQuiz(){
	//hide start screen
​
	// unhide questions
​
	//start timer
			setInterval(clock, 1000)
	//show the time
			// textContent = time
	
	getQuestions();			
}
​
function clock(){
	// update time
	//end quiz if time <=0
​
}
function getQuestion() {
	//get current question from your array
	//update question element with this question
​
	//loop through choice questions.choices.forEach or a for loop
		//create button and append it to your html element
		//choice event listener => optionClick()
		
​
​
}
​
function optionClick(){
	// if condition 
	//if incorrect => penalize time by reducing the time
	//  if time < 0 time =0 
​
	// .play() //music
	// wrong right text setTimeout display for a sec
​
	//move next by increasing the question index
	// if condition to see if we have run out of questions 
		// if yes quizEnd()
		// else getQuestion()
}
​
​
function quizEnd() {
​
	// clearInterval
	// show end screen
	// hide questions element
	// finaScore elment to the time
​
}
​
function saveHighscore() {
	
}
​
​
​
​
