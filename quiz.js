const startBtn = document.querySelector(".start-quiz"), 
    body = document.querySelector(".quiz-main"),
    quizApp = document.querySelector(".container"),
    questionElement = document.querySelector(".ques-content"),
    instruction = document.querySelector(".instructions"),
    btn_containers = document.querySelector(".buttons");
let options = Array.from(document.getElementsByClassName('txt')),
    nextBtn = document.querySelector(".next"),
    colorOption = Array.from(document.getElementsByClassName('btn')),
    questionIndex, progress = 0, score = 0,
    getQuestions = [],
    currentQuestion = {},
    logo = document.getElementById("logo"),
    quit = document.querySelector('.quit'),
    begin = document.querySelector('.begin');
 
let resetCorrect = ()=>{
   colorOption.map(reset =>{
        return reset.classList.remove('correct');
   })
}

let resetWrong = ()=>{
    colorOption.map(reset =>{
        return reset.classList.remove("wrong");
    })
}
    
startBtn.addEventListener("click", loadInstructions)
function loadInstructions(){
    instruction.classList.remove("hide");
    startBtn.classList.add("hide");
    logo.classList.remove("hide");  
}

quit.addEventListener("click", ()=>{
    logo.classList.add("slide-up");
    instruction.classList.add('slide-up');
    setTimeout(()=>{
        instruction.classList.add('hide');
        logo.classList.add("hide");
        startBtn.classList.remove('hide');
        instruction.classList.remove('slide-up');
        logo.classList.remove("slide-up");
    },500)
})


begin.addEventListener("click", startQuiz)
function startQuiz(){
    logo.classList.add('slide-right');
    instruction.classList.add('slide-left');
    setTimeout(()=>{
        quizApp.classList.add('slide-down')
        quizApp.classList.remove("hide");
        instruction.classList.add("hide");
        nextBtn.classList.add("hide");
        logo.classList.add('hide');
        getQuestions = [...questions];
        setNextQuestion();
        countDownTime();
        nextButton();

    },500)
}

let setNextQuestion = () => {
    progress++;
    resetCorrect();
    resetWrong();
    questionIndex = Math.floor(Math.random() * getQuestions.length);
    currentQuestion = getQuestions[questionIndex];
    questionElement.innerText = currentQuestion.question;
    //options
    options.forEach(choice => {
        let num = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + num];
    })
    getQuestions.splice(questionIndex, 1)
    nextBtn.classList.add('hide');
    displayProgress(progress);
}
options.forEach(choice =>{
    choice.addEventListener('click', e=>{
        let selectedChoice = e.target;
        let selectedNumber = selectedChoice.dataset["number"];
        if(selectedNumber == currentQuestion.answer){
            score++;
            selectedChoice.parentElement.classList.add("correct");
            nextBtn.classList.remove("hide");
        }else{
            choice.parentElement.classList.add("wrong");
            nextBtn.classList.remove("hide");
        }
    })
})

function displayProgress(ques) {
    let progress = document.getElementById("ques");
    let progressDisplay = `Question ${ques} of ${questions.length}`;
    progress.innerHTML = progressDisplay;
}

let nextButton = () =>{
    nextBtn.addEventListener('click', ()=>{
        if (progress == 10) {
        //    getQuestions.length === 0
        let submit;
        nextBtn.innerText = "Submit";
        nextBtn.style.backgroundColor = "orangeRed"
        submit = nextBtn;
        submit.addEventListener('click', ()=>{
            quizApp.classList.remove("slide-down");
            quizApp.classList.add("slide-right");
            setTimeout(()=>{
                return showScores();
            },700)
        })
        quizApp.classList.remove("slide-from-left");
        }else{
            quizApp.classList.remove("slide-down");
            quizApp.classList.add("slide-right");
            setTimeout(()=>{
                quizApp.classList.remove("slide-right");
                quizApp.classList.add("slide-from-left");
                questionIndex++;
                setNextQuestion();
            },700)
            quizApp.classList.remove("slide-from-left");
        }
    })
}

function showScores(){
    let got = document.getElementById("above-average");
    if (score >= 5) {
        let average = "You scored 'ABOVE' average, keep up the Good works";
        got = average;
    }else{
        let Notaverage= " You scored 'BELOW' average, better luck next time";
        got = Notaverage;
    }
    quizApp.classList.add("hide");
    let scoreBody= document.createElement("div");
    scoreBody.innerHTML = `
        <div class="start">
            <div class="score">
                <h1 id="score-display">YOUR SCORE ON THIS QUIZ IS <span id ="score">${score}</span> OUT OF <span id="score">${questions.length}</span></h1>
                <h2 id="average">${got}</h2>;
                <button class="start-btn"><a id="take-again" href="index.html">Take Quiz Again</a></button>
            </div>
        </div>`;
        body.appendChild(scoreBody);
}

//countdown timer
let countTime = 2;
let time = countTime * 60;
let countDownTime = function countDown(){
    let countdown = setInterval(()=>{
        if (time <= 0) {
            clearInterval(countdown);
            quizApp.classList.add('slide-right');
            setTimeout(()=>{
                startBtn.classList.add("hide");
                showScores();
            },1000)
        } else {
            let minute = Math.floor(time / 60);
            let seconds = time % 60;
            minute = minute < 10 ? "0" + minute : minute;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            let timerElement = document.getElementById("timer");
            timerElement.innerHTML = `00:${minute}:${seconds}`;
            let timeOut = minute <= 0 ? timerElement.style.border = "solid red": timerElement.style.border="solid green";
            time--;
        }
    },1000)
}

const questions = [
    {
        question : "Q. what is event Bubbling?",
        choice1: `A. This is when the event gets handled by the innermost element and propagate to the outer element`,
        choice2: 'B. Its a trickling process that happens when the outermost element propagate to the inner element',
        choice3: 'C. This process ocurs when the code is executed in strict mode',
        choice4: 'D. this is even an event is written to only fire once once executed',
        answer: 1

    },
    {
        question : "Q. Which is not among the Following features of JavaScript?",
        choice1: "A. It is a lightweight, interpreted programming language",
        choice2: "B. it is designed for creating network-centric applications",
        choice3: "C. it is an open and cross-platform scripting language",
        choice4: `D. it is a language for machine learning`,
        answer:  4
    },
    {
        question : "Q. which is not a data type supported by Javascript?",
        choice1: "A. Boolean",
        choice2: "B. Undefine",
        choice3: "C. String",
        choice4: `D. Arrays`,
        answer: 4
        
    },
    {
        question : "Q. which of these is not an inbuilt method in JavaScript?",
        choice1: "A. reverse()",
        choice2: "B. push()",
        choice3: `C. align()`,
        choice4: "D. forEach()",
        answer: 3
        
    },
    {
        question : "Q. which is not a way of accessing HTML object in a JavaScript?",
        choice1:`A. document.targetElement('')`,
        choice2:"B. document.getElementById('')",
        choice3:"C. document.querySelector('')",
        choice4:"D. document.querySelectorAll('')",
        answer: 1
        
    },
    {
        question : "Q. what's a typical use case for anonymous functions '=>'?",
        choice1: "A. To create a callback hill anonymously in a local var",
        choice2: `B. They can be used to encapsulate some code in a local scope so that var decleared do not leak in the global scope`,
        choice3: "C. To return a function globally inside another function",
        choice4: "D. It's used to declear a local variable globally",
        answer: 2
    },
    {
        question : "Q. what is the difference between = and == sign ?",
        choice1 : `A. The = sign is used for asigning while the == is used for comparing values`,
        choice2 : "B. The = sign is used for indicating equality while the == is used for asigning",
        choice3 : "C. The = sign checks for condiction of a variable while the == does not check",
        choice4 : "D. The = sign is used only in ES6 while the == is used in ES5 ",
        answer : 1
    },
    {
        question : "Q. one of these is not a feature of Session storage ?",
        choice1: "A. Session storage will leave as soon as the browser closes",
        choice2: `B. session storage works together with cookie `,
        choice3: "C. Sessions storage gets cleared when the page session ends",
        choice4: "D. the opening of multiple tabs on browser leads to creation of a sepearte session for each tab",
        answer : 2  
    },
    {
        question : "Q .which one of these is not among Javascript frame work ?",
        choice1: "A. Angular",
        choice2: "B. Vue",
        choice3: `C. Django `,
        choice4: "D. React",
        answer: 3
    },
    {
        question : "Q. one difference between innerHTML and innerText is ?",
        choice1: "A. innerHTML is always used while innerText is lessly used",
        choice2: "B. innerHTML stringify data if not stringed while innerText does not Stringify",
        choice3: "C. innerHTML is the parent of innerText",
        choice4: `D. innerHTML process an HTML element if found in string while innerText does not process an HTML`,
        answer: 4
    },
]



