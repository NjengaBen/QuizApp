//questions
const questions = [
    {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "In baseball, how many fouls are an out?",
        "correct_answer": "0",
        "incorrect_answers": [
        "5",
        "3",
        "2"
        ]
        },
        {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which country will host the 2020 Summer Olympics?",
        "correct_answer": "Japan",
        "incorrect_answers": [
        "China",
        "Australia",
        "Germany"
        ]
        },
        {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which country has hosted the 2018 FIFA World Cup?",
        "correct_answer": "Russia",
        "incorrect_answers": [
        "Germany",
        "United States",
        "Saudi Arabia"
        ]
        },
        {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who won the 2015 Formula 1 World Championship?",
        "correct_answer": "Lewis Hamilton",
        "incorrect_answers": [
        "Nico Rosberg",
        "Sebastian Vettel",
        "Jenson Button"
        ]
        },
        {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "How many points did LeBron James score in his first NBA game?",
        "correct_answer": "25",
        "incorrect_answers": [
        "19",
        "69",
        "41"
        ]
        },
        {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which player holds the NHL record of 2,857 points?",
        "correct_answer": "Wayne Gretzky",
        "incorrect_answers": [
        "Mario Lemieux ",
        "Sidney Crosby",
        "Gordie Howe"
        ]
        },
        {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which country will host the 2022 FIFA World Cup?",
        "correct_answer": "Qatar",
        "incorrect_answers": [
        "USA",
        "Japan",
        "Switzerland"
        ]
        },
        {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who won the 2017 Formula One World Drivers&#039; Championship?",
        "correct_answer": "Lewis Hamilton",
        "incorrect_answers": [
        "Sebastian Vettel",
        "Nico Rosberg",
        "Max Verstappen"
        ]
        },
        {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who won the UEFA Champions League in 2017?",
        "correct_answer": "Real Madrid C.F.",
        "incorrect_answers": [
        "Atletico Madrid",
        "AS Monaco FC",
        "Juventus F.C."
        ]
        },
        {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who won the UEFA Champions League in 2016?",
        "correct_answer": "Real Madrid C.F.",
        "incorrect_answers": [
        "FC Bayern Munich",
        "Atletico Madrid",
        "Manchester City F.C."
        ]
        }
]


//variables
let indexQuestion = 0
let scores = 0
let quizNum = 1
const scoreDisplay = document.querySelector('#scores')
const clickButton = document.querySelector('.btn')
const answerList = document.getElementsByClassName('option')


Array.from(answerList).forEach(function(choice){
    choice.addEventListener('click', getAnswer)
})

//eventlisteners
clickButton.addEventListener('click', getNext)

//functions
function addCategory(){    
    const category = document.querySelector('#category')
    const type = document.querySelector('#type')
    const difficulty = document.querySelector('#difficulty')
    const quiz = document.querySelector('.card-quiz')
    

    category.innerHTML = 'Category: ' + questions[indexQuestion].category
    type.innerHTML = 'Type: ' + questions[indexQuestion].type
    difficulty.innerHTML = 'Difficulty: ' + questions[indexQuestion].difficulty
    quiz.innerHTML = questions[indexQuestion].question

    //answers
    const correctAnswer = [questions[indexQuestion].correct_answer]
    const newArr = correctAnswer.concat(questions[indexQuestion].incorrect_answers)
    const getAnswers = newArr.sort((a,b) => 0.5 - Math.random()); 
   
   
    const optionOne = document.querySelector('#answer1')  
    const optionTwo = document.querySelector('#answer2')  
    const optionThree = document.querySelector('#answer3')  
    const optionFour = document.querySelector('#answer4')
    
    optionOne.innerHTML = getAnswers[0]
    optionTwo.innerHTML = getAnswers[1]
    optionThree.innerHTML = getAnswers[2]
    optionFour.innerHTML = getAnswers[3]
}

addCategory()

//get next set of questions
function getNext(){    
    if(indexQuestion<questions.length-1){
        indexQuestion++
        addCategory(indexQuestion)        
        quizNumber()
    }
    
    for (answer in answerList){
        answerList[answer].classList.remove('correct_answer', 'incorrect_answer')
    }   
}

function getScores(){
    const scoreOutput = document.querySelector('#scores')
    let newScore = ""
    scores = scores + 1
    newScore = scores

    //display scores
    scoreOutput.innerHTML = "Score: " + newScore
    //console.log(newScore)
}

function quizNumber(){
    const questionNumber = document.querySelector('#small')   
    quizNum = quizNum + 1

    //display the question number
    questionNumber.innerHTML = quizNum + "/10"  
}

function getAnswer(e){    
    if (questions[indexQuestion].correct_answer === e.target.innerHTML){ 
        console.log('True')
        e.target.classList.add('correct_answer')
        getScores()                             
    }
    else{
        console.log('False')
        e.target.classList.add('incorrect_answer')        
    }
   
}

