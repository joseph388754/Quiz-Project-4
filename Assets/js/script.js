 const QuestionsAnswers = [
    {
        q: "What heading tag has the largest font size?",
        a: "<h1>",
        b: "<h4>",
        c: "<h3>",
        d: "<h6>",
        z: "<h1>",
    },
    {
        q: "What does CSS stand for?",
        a: "Cross Style State",
        b: "Country Style Sheets",
        c: "Cascading Style Sheets",
        d: "Can't Style Sheets",
        z: "Cascading Style Sheets",
    },
    {
        q: "HTML is an acronym for ____.",
        a: "Honda Toyota Mazda Long",
        b: "Hyper Text Markup Language",
        c: "Human Text Markup Language",
        d: "all of the above",   
        z: "all of the above",
    },
    {
        q: "The content of your webpage",
        a: "<body>",
        b: "<p>",
        c: "<ol>",
        d: "<webpage>",
        z: "<body>",
    },
    {
        q:"How do you make a numbered list?",
        a: "<css>",
        b: "<a>",
        c: "<ol>",
        d: "<html>",
        z: "<ol>",
    },
];
var timerEl = document.getElementById("timer");
var timeLeft = 80;
var startbtn = document.getElementById("begin-btn");
var startscreen = document.getElementById("first-page");
var quizscreen = document.getElementById("container");
var question = document.getElementById("question");
var answerA = document.getElementById("choice-a");
var answerB = document.getElementById("choice-b");
var answerC = document.getElementById("choice-c");
var answerD = document.getElementById("choice-d");
var check = document.getElementById("results");
var donescreen = document.getElementById("last-page")
var scorescreen = document.getElementById("highscores");
var quizscore = document.getElementById("final-score");
var score = 1;


var questionsindex = 0;

function start() {
    donescreen.style.display = "none";
    scorescreen.style.display = "none";
    quizscreen.style.display = "none";
}

start()


function count () {
    var timerInterval = setInterval(function () {
        timeLeft--;
        if (timeLeft > 0) {
            timerEl.textContent = "Timer: "+timeLeft;
        
        } else {
            timerEl.textContent = "0";
            clearInterval(timerInterval);
            finished();}
        
}, 1000); };

var beginQz = function () {
    startscreen.style.display = "none";
    quizscreen.style.display = "flex";
    

    showQuestion()
    count()
}

function showQuestion () {
    var current = QuestionsAnswers[questionsindex]; 
    question.textContent = current.q;
    answerA.textContent = current.a;
    answerB.textContent = current.b;
    answerC.textContent = current.c;
    answerD.textContent = current.d;
    
};

var nextqst = function () {
    questionsindex++;
    if(questionsindex > 4) {
        finished()
    } else {
        showQuestion();
    }
    

};

var checkAnswer = function (event) {
    
    var current = QuestionsAnswers[questionsindex];
    var userans = event.target.textContent;

    if (userans === current.z) {
      console.log(userans)
      check.textContent = "Correct!";
      score += 1;
      console.log(score)
    } else {
      check.textContent = "Incorrect!";
      score -= 1;
      timeLeft = timeLeft - 15;
      console.log(score)
    }
    nextqst();
    
 };
 
 
function finished () {
    quizscreen.style.display = "none";
    donescreen.style.display = "initial";
    var finalscore = ((score*2)*10)
    quizscore.textContent = "Your final score is " + finalscore + "!";
    console.log(finalscore)
};


startbtn.onclick = beginQz;