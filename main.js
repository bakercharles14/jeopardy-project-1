//Bank that contains all questions
const questionBank = [
    {
        q: 'What is the name of the final course in all "Mario Kart" videogames?',
        answers: ['Coconut Mall', "Bowser's Castle", 'Rainbow Road', 'Moo Moo Meadows'],
        correctAnswer: 'Rainbow Road',
        points: 10,
        category: 'video-game-history'
    },
    {
        q: 'The classic Atari 2600 game controller has how many buttons?',
        answers: ['1', '3', '4', "7"],
        correctAnswer: '1',
        points: 30,
        category: 'video-game-history'
    },

]
let totalScore = 0
//Function that creates all divs that can be clicked to answer questions
const addTenPointQuestions = () => {
    //for loop that creates the divs
    for (let i = 0; i < 3; i++) {
        let questions = document.createElement('div')
        questions.classList.add('tenQuestions')
        document.querySelector('.jeopardyBoard').appendChild(questions)
        // questions.innerHTML = '10'
        //event listener that will create dive to have questions reside in
        questions.addEventListener('click', (evt) => {
            evt.preventDefault()
            let questionsDisplay = document.createElement('div')
            document.querySelector('footer').appendChild(questionsDisplay)
            questionsDisplay.innerHTML = questionBank[i].q
            questionsDisplay.style.backgroundColor = 'blue'
            questionsDisplay.style.color = 'white'
            //for loop to populate the answers in another div under questions
            for (let j = 0; j < questionBank[i].answers.length; j++) {
                let answersDisplay = document.createElement('div')
                document.querySelector('footer').appendChild(answersDisplay)
                answersDisplay.innerHTML = questionBank[i].answers[j]
                answersDisplay.style.backgroundColor = 'white'
                answersDisplay.style.color = 'blue'
                answersDisplay.addEventListener('click', () => {
                    // console.log(questionBank[i].answers[j])
                    if (questionBank[i].answers[j] === questionBank[i].correctAnswer) {
                        console.log('You get ' + questionBank[i].points + ' Points')
                        let score = questionBank[i].points
                        totalScore += score
                        document.getElementById('score').innerHTML = totalScore
                        console.log(totalScore)
                    } else if (questionBank[i].answers[j] !== questionBank[i].correctAnswer) {
                        alert('Wrong answer!')
                    }
                    document.querySelector('.jeopardyBoard').removeEventListener('click', (addTenPointQuestions))
                })
            }
        })
    }
}
addTenPointQuestions();
