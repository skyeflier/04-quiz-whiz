// Pulling in the variables that will create the quiz
var startButton = document.getElementById('start-button'); // This is pulling the ID start button from HTML & the CSS style
var introContainerEl = document.getElementById('intro-container');

var questionsEl = document.getElementById('question');
var answerOptionsEl = document.getElementById('answer-buttons');

var submitButton = document.getElementById('submit');
var endOfQuizEl = document.getElementById('end-of-quiz-container');

var currentQuestionAndChoicesEl = document.getElementById('current-question-and-choices');
let currentQuestionIndex = 0;

var scoreEl = document.getElementById('score');
let score = 0;

var timerEl = document.getElementById('time');
let timeSecond = 50;

var questions = [
    {
        question: 'Which of the following is a self closing tag?',
        answerOptions: ['paragraph', 'header', 'image', 'video'],
        answerCorrect: 'image',
    },
    {
        question: 'Which data type is supported by JavaScript?',
        answerOptions: ['Boolean', 'Coolean', 'Doolean', 'Foolean'],
        answerCorrect: 'Boolean',
    },
    {
        question: 'What is JavaScript?',
        answerOptions: ['the official language of java the hut', 'the designs baristas put in the foam of your latte', 'a popular programming language birthed in 1995', 'the cool older sibling to LavaScript'],
        answerCorrect: 'a popular programming language birthed in 1995',
    },
    {
        question: 'What is APIs an acronym for?',
        answerOptions: ['athletic program institute', 'application for parenting infants', 'all people interact', 'application programming interface'],
        answerCorrect: 'application programming interface',
    },
    {
        question: 'Why do we code?',
        answerOptions: ['because we love learning', 'because we want more money', 'because it opens many doors', 'all of the above'],
        answerCorrect: 'all of the above',
    },
]

function startQuiz() {
    console.log('start!')
    startButton.classList.add('hide');
    introContainerEl.classList.remove('hide');
    currentQuestionAndChoicesEl.classList.remove('hide');
    questionsEl.classList.remove('hide');
    answerOptionsEl.classList.remove('hide');
    scoreEl.classList.remove('hide');
    timerEl.classList.remove('hide');
    showQuestion()

    timerEl.textContent = timeSecond;
    const countDown = setInterval(() => {
        timeSecond--;
        timerEl.textContent = timeSecond;
        if (timeSecond <= 0 || timeSecond < 1)
            clearInterval(countDown)
    }, 1000)
}

function showQuestion() {
    var question = questions[currentQuestionIndex]
    introContainerEl.classList.add('hide');
    questionsEl.textContent = question.question
    answerOptionsEl.textContent = ""
    question.answerOptions.forEach(function (answerOptions, i) {
        const button = document.createElement('button')
        button.classList.add('button-style')
        button.textContent = answerOptions
        button.addEventListener('click',
            answerCheck)
        answerOptionsEl.appendChild(button)
    })
}

function answerCheck(event) {
    var val = event.target.textContent;
    scoreEl.textContent = "Score:";
    if (val !== questions[currentQuestionIndex].answerCorrect) {
        console.log('wrong answer')
        if (val !== questions[currentQuestionIndex].answerCorrect) {
            console.log('WRONG answer')
            timeSecond -= 10;
        }
        if (currentQuestionIndex === questions.length - 1) {
            endOfQuiz();
        } else {
            currentQuestionIndex++;
            showQuestion();
        }
        scoreEl.textContent = "Score:" + (score - 100);
        return (score -= 100);
    } else {
        console.log("correct answer");
        scoreEl.textContent = "Score:" + (score + 100);
        if (currentQuestionIndex === questions.length - 1) {
            endOfQuiz();
        } else {
            currentQuestionIndex++;
            showQuestion();
        }
        return (score += 100)
    }

    function endOfQuiz() {
        endOfQuizEl.classList.remove('hide');
        currentQuestionAndChoicesEl.classList.add('hide');
        if (currentQuestionIndex === questions.length - 1 || (timeSecond == 0)) {
            localStorage.setItem('mostRecentScore', score);
            return (endOfQuiz)
        }
    }
}

function selectAnswer() { }

startButton.addEventListener('click', startQuiz) //This is creating and event (or action) with that button to respond when a user clicks on Start button, and initiates the StartQuiz function.