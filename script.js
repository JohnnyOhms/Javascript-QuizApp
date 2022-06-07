// import { questions } from "./questions";

const startBtn = document.querySelector(".start-btn"),
    body = document.querySelector(".quiz-main"),
    intro = document.querySelector(".start"),
    quizApp = document.querySelector(".container"),
    questionElement = document.querySelector(".ques-content"),
    btn_containers = document.querySelector(".buttons");
    let shuffleQues, questionIndex, progress = 1, score = 0, correct = "";

startBtn.addEventListener("click", startQuiz)
function startQuiz(){
    intro.classList.add("hide");
    quizApp.classList.remove("hide");
    shuffleQues = questions.sort(()=> Math.random() * -9)
    questionIndex = 0;
    setNextQuestion();
    countDownTime();
    nextPrevQuestion();
}

function setNextQuestion(){
    showQuestion(shuffleQues[questionIndex])
}

function showQuestion(ques){
    resetData();
    questionElement.innerHTML = ques.question;
        //show options
    let choice1 = ques.answers;
    ques.answers.map(txt => {
        let  OptionElement = document.createElement("button");
        let btn =  OptionElement;
        OptionElement.classList.add("btn")
        let choice = document.createElement("span");
        choice.classList.add("txt");
        choice.innerText = txt.text;
        checkOptions(choice, btn, OptionElement );
        OptionElement.appendChild(choice);
        btn_containers.appendChild(OptionElement);
        // console.log(choice);
    })
    displayProgress(progress);
}

function resetData(){
    while (btn_containers.hasChildNodes()){
        btn_containers.removeChild(btn_containers.firstChild);
    }
}

function score1(){
    let score = 0;
    score = score + 1;
    console.log(score);
}

function checkOptions(choice, btn, btn2 ){
    btn.addEventListener('click', (e)=>{
        let target = e.target;
        let targetValue = target.innerText;
        let confirm = targetValue.includes(".");
        if (!confirm == true) {
            score++;
            console.log(score);
            switch (score++) {
                case score:
                    break;
                default:
                    return;
            }
        }else{
            return;
        }
    })

}

function displayProgress(ques){
    let progress = document.getElementById("ques");
    let progressDisplay = `Question ${ques} of ${questions.length}`;
    progress.innerHTML = progressDisplay;
}

function nextPrevQuestion(){
    let nextBtn = document.querySelector(".next");
    nextBtn.addEventListener("click", ()=>{
        if (shuffleQues.length > questionIndex + 1) {
            questionIndex++;
            progress++;
            setNextQuestion();
        } else {
            let submit;
            nextBtn.textContent = "Submit ";
            nextBtn.style.backgroundColor = "orangeRed";
            submit = nextBtn
            submit.addEventListener("click",()=> showScores());
        }
    })

    let prevBtn = document.querySelector(".prev")
    prevBtn.addEventListener("click", ()=>{
        if(shuffleQues.length > questionIndex + 9){
            console.log("nothing");
            return;
        }else{
            console.log("prev");
            questionIndex--;
            progress--;
            setNextQuestion();
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
                <h1 id="score-display">YOUR SCORE ON THIS COURSE IS ${score} OUT OF ${questions.length}</h1>
                <h2 id="average">${got}</h2>;
                <button class="start-btn"><a id="take-again" href="index.html">Take Quiz Again</a></button>
            </div>
        </div>`;
        body.appendChild(scoreBody);
}

//countdown timer
    let countTime = 2;
    let time = countTime * 60;
    const countDownTime = function countDown(){
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
                seconds = seconds< 10 ? "0" + seconds : seconds;
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
        answers : [
            {text: `A This is when the event gets handled by the innermost element and propagate to the outer element ${correct}`},
            {text: 'B. Its a trickling process that happens when the outermost element propagate to the inner element'},
            {text: 'C. This process ocurs when the code is executed in strict mode'},
            {text: 'D. this is even an event is written to only fire once once executed'}
        ]

    },
    {
        question : "Q. Which is not among the Following features of JavaScript?",
        answers : [
            {text : "A. It is a lightweight, interpreted programming language"},
            {text : "B. it is designed for creating network-centric applications"},
            {text : "C. it is an open and cross-platform scripting language"},
            {text : `D it is a language for machine learning ${correct}`}
        ],
    },
    {
        question : "Q. which is not a data type supported by Javascript?",
        answers : [
            {text : "A. Boolean"},
            {text : "B. Undefine"},
            {text : "C. String"},
            {text : `D Arrays ${correct}`}
        ]
    },
    {
        question : "Q. which of these is not an inbuilt method in JavaScript?",
        answers : [
            {text: "A. reverse()"},
            {text: "B. push()"},
            {text: `C align()"  ${correct}`},
            {text: "D. forEach()"},
            
        ]
    },
    {
        question : "Q. which is not a way of accessing HTML object in a JavaScript?",
        answers : [
            {text: `A document.targetElement('') ${correct}`},
            {text: "B. document.getElementById('')"},
            {text: "C. document.querySelector('')"},
            {text: "D. document.querySelectorAll('')"},
            
        ]
    },
    {
        question : "Q. what's a typical use case for anonymous functions '=>'?",
        answers : [
            {text: "A. To create a callback hill anonymously in a local var"},
            {text: `B They can be used to encapsulate some code in a local scope so that var decleared do not leak in the global scope ${correct}`},
            {text: "C. To return a function globally inside another function"},
            {text: "D. It's used to declear a local variable globally"},
            
        ]
    },
    {
        question : "Q. what is the difference between = and == sign ?",
        answers :[
            {text : `A The = sign is used for asigning while the == is used for comparing values ${correct}`},
            {text : "B. The = sign is used for indicating equality while the == is used for asigning"},
            {text : "C. The = sign checks for condiction of a variable while the == does not check"},
            {text : "D. The = sign is used only in ES6 while the == is used in ES5 "}

        ]
    },
    {
        question : "Q. one of these is not a feature of Session storage ?",
        answers: [
            {text : "A. Session storage will leave as soon as the browser closes"},
            {text : `B session storage works together with cookie ${correct}`},
            {text : "C. Sessions storage gets cleared when the page session ends"},
            {text : "D. the opening of multiple tabs on browser leads to creation of a sepearte session for each tab"}   
        ]
    },
    {
        question : "Q .which one of these is not among Javascript frame work ?",
        answers : [
            {text : "A. Angular"},
            {text : "B. Vue"},
            {text : `C Django ${correct}`},
            {text : "D. React"}
        ]
    },
    {
        question : "Q. one difference between innerHTML and innerText is ?",
        answers : [
            {text: "A. innerHTML is always used while innerText is lessly used"},
            {text: "B. innerHTML stringify data if not stringed while innerText does not Stringify"},
            {text: "C. innerHTML is the parent of innerText"},
            {text: `D innerHTML process an HTML element if found in string while innerText does not process an HTML ${correct}`}
        ]
    }
    
]