// // Pulling in the variables that will create the quiz
var startButton = document.getElementById('start-button');
var questionsEl = document.getElementById('question');
var answerOptionsEl = document.getElementById('answer-button');
var submitButton = document.getElementById('submit');
// var nextButton = document.getElementByID('next');
// var timeEl = document.getElementById('time');
// var initialsEl = document.getElementById('initials');
// var feedbackEl = document.getElementById('feedback');

var questions = [
    {
        question: 'What is HTML an acronym for?',
        answerOptions: ['hipster text markup language ', 'hyper text markup language', 'hyper toddlers madeup lexicon', 'hysterical teen makeup montage'],
        answerCorrect: 'hyper text markup language',
    },
    {
        question: 'What is CSS an acronym for?',
        answerOptions: ['cascading style sheets', 'classy style superstar', 'corporate silly sheets', 'cascading shallow stream'],
        answerCorrect: 'two',
    },
    {
        question: 'What is JavaScript?',
        answerOptions: ['the official language of java the hut', 'the designs baristas put in the foam of your latte', 'a programming language birthed in 1995', 'the cool older sibling to LavaScript'],
        answerCorrect: 'a programming language birthed in 1995',
    },
    {
        question: 'What is APIs an acronym for?',
        answerOptions: ['athletic program institute', 'application for parenting infants', 'applied interface', 'application programming interface'],
        answerCorrect: 'two',
    },
    {
        question: 'Why do we code?',
        answerOptions: ['because we love learning', 'because we want more money', 'because it opens many doors', 'all of the above'],
        answerCorrect: 'all of the above',
    },
]

// This is pulling the ID start button from HTML & the CSS style
const startButton = document.querySelector('#start-button');

const questionContainerElement = document.querySelector('#question-container');

var shuffledQuestions, currentQuestionIndex;

//This is creating and event (or action) with that button to respond when a user clicks on Start button, and initiates the StartQuiz function.
startButton.el.addEventListener('click', startQuiz)

//When we start the quiz, we want to hide the Start button and show the questions + answers
function startQuiz() {
    console.log('start!')
    startButton.classList.add('#hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('#hide');
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    console.log("Testing")
}

function selectAnswer() {

}

function showQuestion(question) {
    // code display on html
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