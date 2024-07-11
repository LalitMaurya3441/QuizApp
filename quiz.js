

const questions =[
    {
        question: "Which is favourite meal",
        answers:[
            {text: "Kadhai Paneer" , correct: false},
            {text: "Mutton-Biryani" , correct: false},
            {text: "Chicken-Biryani" , correct: false},
            {text: "Homemade-Chicken" , correct: true},
        ]
    },
    {
        question: "Which is favourite sports",
        answers:[
            {text: "Table-Tennis" , correct: false},
            {text: "Vollyball" , correct: false},
            {text: "Cricket" , correct: true},
            {text: "Carrom" , correct: false},
        ]
    },
    {
        question: "Which is favourite tourist places",
        answers:[
            {text: "Relatives-House" , correct: false},
            {text: "Hilly Stations" , correct: true},
            {text: "Temple-Area" , correct: false},
            {text: "Home-Better" , correct: false},
        ]
    },
    {
        question: "Which is favourite Hobby",
        answers:[
            {text: "Guitar_playing" , correct: false},
            {text: "Chilling with friends" , correct: true},
            {text: "Playing online games" , correct: false},
            {text: "Sharing secrets with loved one" , correct: true},
        ]
    },
];
const QuestionsElement = document.getElementById("Question");
const answerButton = document.getElementById("button");
const nextButton = document.getElementById("nxt-btn");

let currQuestionindex =0;
let score =0;

function Quizmap () {
    currQuestionindex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();

}
function showQuestion(){
    reserstate();
    let currQuestion = questions[currQuestionindex];
    let questionNo = currQuestionindex+1;
    QuestionsElement.innerHTML= questionNo + "-" + currQuestion.question;

    currQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click',selectAnswer);
    })
}
function reserstate(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
};
function selectAnswer(e){
    const selectbtn = e.target;
    const iscorrect = selectbtn.dataset.correct ==="true";
    if(iscorrect){
        selectbtn.classList.add("correct");
        score++;
    }
    else{
        selectbtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextButton.style.display = "block";
}
nextButton.addEventListener("click", ()=>{
    if(currQuestionindex <questions.length){
        handleNextbtn();
    }else{
        Quizmap();
    }
})

function handleNextbtn(){
    currQuestionindex++;
    if(currQuestionindex< questions.length){
        showQuestion();
    }
    else{
        showscore();
    }

}
function showscore(){
    reserstate();
    QuestionsElement.innerHTML= `your score is ${score} out of ${questions.length}`
    nextButton.innerHTML="Play again";
    nextButton.style.display = "Blocked";
}

Quizmap();