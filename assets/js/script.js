// var questions = [
//     {
//         question: 'What is 1+1'
//     answerOptions: ['one', 'two',]
//     answerCorrect: 'two',
//     }
// ]

// This is pulling the ID start button from HTML & the CSS style
const startButton = document.querySelector('start-button');

const questionContainerElement = document.querySelector('question-container');

const shuffledQuestions, currentQuestionIndex;

//This is creating and event (or action) with that button to respond when a user clicks on Start button, and initiates the StartQuiz function.
startButton.addEventListener('click', startQuiz)

//When we start the quiz, we want to hide the Start button and show the questions + answers
function startQuiz() {
    console.log('start!')
    startButton.classList.add('hide');
    // shuffledQuestions = questions.sort(() => Math.random() - .5)
    // currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    setNextQuestion()

}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function selectAnswer() {

}

// // Pulling in the variables that will create the quiz
// var startButton = document.getElementById('start');
// var questionsEl = document.getElementById('questions');
// var answerOptionsEl = document.getElementById('answers');
// var submitButton = document.getElementById('submit');
// var nextButton = document.getElementByID('next');
// var timeEl = document.getElementById('time');
// var initialsEl = document.getElementById('initials');
// var feedbackEl = document.getElementById('feedback');

// // Create a function to start the start the quiz
// function start()

// // Create a function to pull in the questions & answers on a new screen
// function getQuestion()

// // Create a function to run through the questions
// function clickQuestion()

// // Create a function to end the quiz
// function endQuiz

// // Create a function for the timer

// // Create a function for the user to submit their initials & restart the quiz



// startBtn.onclick = saveHighscore;

// startBtn.onclick = startQuiz;
// startBtn.addEventListener("onClick", startQuiz)

// // use .hide (display: none) in css to hide the questions 