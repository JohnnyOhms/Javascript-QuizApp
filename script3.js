const startBtn = document.querySelector(".start-btn"),
    body = document.querySelector(".quiz-main"),
    intro = document.querySelector(".start"),
    quizApp = document.querySelector(".container"),
    questionElement = document.querySelector(".ques-content"),
    btn_containers = document.querySelector(".buttons");
let shuffleQues, questionIndex, progress = 1, score = 0, fetchData, displayQuestion;

startBtn.addEventListener("click", startQuiz)
function startQuiz(){
    intro.classList.add("hide");
    quizApp.classList.remove("hide");
    fetchData = fetch('questions.json')
    .then((Response)=> Response.json())
    .then((data)=>{
        data.forEach(question => {
            Array.from(displayQuestion = `${question.questions}`);
            questionIndex = 0;
            console.log(displayQuestion);
            setNextQuestion();
        });
    })
}

function setNextQuestion(){
    showQuestion(displayQuestion)
}

function showQuestion(questions){
    questionElement.innerHTML = questions;
}


function nextPrevQuestion(){
    let nextBtn = document.querySelector(".next");
    nextBtn.addEventListener("click", ()=>{
        if (true) {
            displayQuestion++;
            progress++;
            console.log("worked");
            setNextQuestion();
        } else {
            let submit;
            nextBtn.textContent = "Submit ";
            nextBtn.style.backgroundColor = "orangeRed";
            submit = nextBtn;
            submit.addEventListener("click",()=> showScores());
        }
    })
}
nextPrevQuestion();
