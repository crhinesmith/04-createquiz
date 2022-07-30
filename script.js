var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionContainer= document.getElementById('question-container');
var questionEl = document.getElementById('question');
var answersEl = document.getElementById('answers');
var currentQuestion = 0;
var score = 0 ;
var timeEl = document.querySelector('.time');
var secondsLeft = 90;
var finalScore;
var highScore = document.querySelector('.highscore');
var backButton = document.getElementById('goBack-btn');


startButton.addEventListener('click', start)

function setTime(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time Left: " + secondsLeft + " s ";

        if(secondsLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }

    }, 1000);
}



function start() {
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    setTime()
    nextQuestion(currentQuestion)
}

function nextQuestion(index) {
    showQuestion(questions[index])

  
}

function showQuestion(questionObject){
    questionEl.innerText = questionObject.question
    answersEl.children
    for (var i = 0; i < answersEl.children.length; i++) {
        var answer = answersEl.children[i]
        var answerObject = questionObject.answers[i]
        answer.innerText = answerObject.text
        answer.setAttribute("data-value", answerObject.correct)
        answer.addEventListener('click', answerSelect)
    }
    }

function answerSelect(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.value
    console.log(typeof(correct))
    if (correct === "true"){
        selectedButton.classList.add("btn.correct")
        currentQuestion++
        nextQuestion(currentQuestion)
        score = score + 10
    }  
    if (correct === "false") {
        selectedButton.classList.add("btn.wrong")
        secondsLeft = secondsLeft - 10
        showTime()
    }
    if (currentQuestion === questions.length){
        endGame()
    }

}

function endGame(){
    questionContainer.classList.add('hide')
    highScore.classList.remove('hide')
    timeEl.classList.add('hide')
}


function inputInitials(){
}
backButton.addEventListener('click', function(e){
    location.reload();
}, false);
var questions = [
    {
        question: 'The condition in an if else statement is enclosed by',
        answers: [
            { text: 'Parentheses', correct: true},
            { text: 'Curly Brackets', correct: false},
            { text: 'Question Marks', correct: false},
            { text: 'Brackets', correct: false}
        ]

    },
    {
        question: 'Arrays in Javascript can be used to store',
        answers: [
            { text: 'Numbers', correct: false},
            { text: 'Strings', correct: false},
            { text: 'Other arrays', correct: false},
            { text: 'All of the above', correct: true}
        ]

    },
    {
        question: 'String values must be enclosed in',
        answers: [
            { text: 'Question marks', correct: false},
            { text: 'Exclamation marks', correct: false},
            { text: 'Quotation marks', correct: true},
            { text: 'All of the above', correct: false}
        ]

    },
    {
        question: 'Printing values to the console can be done using',
        answers: [
            { text: 'userlog', correct: false},
            { text: 'Bread', correct: false},
            { text: 'Print', correct: false},
            { text: 'console.log', correct: true}
        ]

    },    {
        question: 'Commonly used data types include',
        answers: [
            { text: 'Boolean', correct: false},
            { text: 'String', correct: false},
            { text: 'Number', correct: false},
            { text: 'All of the above', correct: true}
        ]

    },
]
