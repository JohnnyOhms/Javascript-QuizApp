const startBtn = document.querySelector(".start-btn"),
    body = document.querySelector(".quiz-main"),
    intro = document.querySelector(".start"),
    quizApp = document.querySelector(".container"),
    questionElement = document.querySelector(".ques-content"),
    nextBtn = document.querySelector(".next"),
    btn_containers = document.querySelector(".buttons");
    let options = Array.from(document.getElementsByClassName('txt'));
    let questionIndex, progress = 0, score = 0;
    let getQuestions = [];
    let currentQuestion;

startBtn.addEventListener("click", startQuiz)
function startQuiz(){
    nextBtn.classList.add("hide");
    intro.classList.add("hide");
    quizApp.classList.remove("hide");
    getQuestions = [...questions]; 
    setNextQuestion();
    countDownTime();
    nextButton();
}

let setNextQuestion = () => {
    progress++;
    questionIndex = Math.floor(Math.random() * getQuestions.length);
    currentQuestion = getQuestions[questionIndex];
    questionElement.innerText = currentQuestion.question;
    //options
    options.forEach(choice => {
        let num = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + num];
    })
    getQuestions.splice(questionIndex, 1)
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

let  displayProgress = ques => {
    let progress = document.getElementById("ques");
    let progressDisplay = `Question ${ques} of ${questions.length}`;
    progress.innerHTML = progressDisplay;
}

let nextButton = () =>{
    nextBtn.addEventListener('click', ()=>{
        if (getQuestions > questionIndex + 1) {
            console.log("ok");
        }else{
            setNextQuestion();
        }

    })
}

//countdown timer
let countTime = 2;
let time = countTime * 60;
let countDownTime = function countDown(){
    let countdown = setInterval(()=>{
        if (time <= 0) {
            clearInterval(countdown);
            intro.classList.add("hide");
            showScores();
            return;
        } else {
            let minute = Math.floor(time / 60);
            let seconds = time % 60;
            minute = minute < 10 ? "0" + minute : minute;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            let timerElement = document.getElementById("timer");
            timerElement.innerHTML = `00:${minute}:${seconds}`;
            let timeOut = minute <= 0 ? timerElement.style.border = "solid red":timerElement;
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
    }
]
