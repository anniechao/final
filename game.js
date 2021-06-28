const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question:'舟山路速限幾公里?',
        choice1: '5',
        choice2: '10',
        choice3: '15',
        choice4: '20',
        answer: 1,
    },
    {
        question:'2021年台大世界大學排行第幾?',
        choice1: '49',
        choice2: '52',
        choice3: '66',
        choice4: '73',
        answer: 3,
    },
    {
        question:'台大總共幾個學院?',
        choice1: '9',
        choice2: '11',
        choice3: '13',
        choice4: '15',
        answer: 2,
    },
    {
        question:'下列宿舍何者位於城中校區?',
        choice1: '女二',
        choice2: '女三',
        choice3: '男四',
        choice4: '男六',
        answer: 3,
    },
    {
        question:'台大校長傅斯年曾說:一天只有_小時，剩下_小時是用來沉思的?',
        choice1: '12/12',
        choice2: '15/9',
        choice3: '18/6',
        choice4: '21/3',
        answer: 4,
    },
    {
        question:'下列哪句不是台大校歌?',
        choice1: '任勞任怨負責任',
        choice2: '近看蜿蜒的淡水',
        choice3: '臺大的環境鬱鬱蔥蔥',
        choice4: '正象徵我們目標的高崇',
        answer: 1,
    },
    {
        question:'台大校慶紀念日是哪一天?',
        choice1: '11/7',
        choice2: '11/15',
        choice3: '11/19',
        choice4: '11/23',
        answer: 2,
    },
    {
        question:'最多人轉出的台大科系為?',
        choice1: '地質系',
        choice2: '昆蟲系',
        choice3: '政治系公行組',
        choice4: '社會系',
        answer: 3,
    },
    {
        question:'下列何者為台大IP?',
        choice1: '111',
        choice2: '112',
        choice3: '113',
        choice4: '114',
        answer: 2,
    },
    {
        question:'下列何者為台大統一編號?',
        choice1: '03734301',
        choice2: '03735202',
        choice3: '03807654',
        choice4: '04126516',
        answer: 1,
    }
]

const SCORE_POINTS = 10
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()    
}   

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
    
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)
    
    acceptingAnswers = true
}
var button = new Howl({
    src: ['multimedia_button_click_006.mp3']
  });

choices.forEach(choice => {
    choice.addEventListener('click', e =>{
        button.play();
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() =>{
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)

    })
})

incrementScore = num =>{
    score +=num
    scoreText.innerText = score
}

var bgmusic = new Howl({
    src: ['Monkeys-Spinning-Monkeys.mp3'],  
  });
document.querySelector(".play-music").addEventListener("click", () => {
    if (!bgmusic.playing()) {
       bgmusic.play();
    }
 })
 document.querySelector(".stop-music").addEventListener("click", () => {
    bgmusic.pause();
 })  
  
startGame()
