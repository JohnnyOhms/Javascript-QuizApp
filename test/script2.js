//test javscript file

const startBtn = document.querySelector(".start-btn");
    intro = document.querySelector(".start"),
    quizApp = document.querySelector(".container"),
    questionElement = document.querySelector(".ques-content");
let shuffleQues;

class Quiz {
    constructor(question){
        this.score = 0;
        this.questionIndex = 0;
        this.question = question;
    }

    getQuestionIndex(){
        return this.question[this.questionIndex];
    }

    guess(answer){
        if(this.questions.correctAnswer(answer)){
            this.score++;
        }
    }

    questionEnded(){
        return this.questionIndex === this.question.length
    }
}

class Question {
    constructor(ques,options,answer){
        this.ques = ques;
        this.options = options;
        this.answer = answer;
    }

    correctAnswer(options){
        return this.answer === options;
    }
}

startBtn.onclick = (()=>{
    intro.classList.add("hide");
    shuffleQues = questions.sort(()=> Math.random() * -5)
})

function displayQuestion(){
    if (quiz.questionEnded()) {
        showScore();
    }else{
        questionElement.innerHTML= quiz.getQuestionIndex().ques;

        let options = getQuestionIndex().options;
        for(let i = 0; i < options.length; i++){
            let  optionElement = document.getElementsById("choice"+i);
            optionElement.innerHTML = options[i];
            guess("btn"+ i, options[i]);
        }
    }
}

let questions = [
    new Question(
        "Q. Which is the not among the Following features of JavaScript?",
        [ 
        "It is a lightweight, interpreted programming language",
        "it is designed for creating network-centric applications",
        "it is an open and cross-platform scripting language",
        "it is a language for machine learning"],"it is a language for machine learning"
    ),
]

let quiz = new Quiz(questions);
