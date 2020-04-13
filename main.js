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
    {
        q: 'Which videogame holds the record for having the highest budget ever to produce?',
        answers: ['The Witcher 3: Wild Hunt', 'Destiny', 'GTA V', "COD: MW2"],
        correctAnswer: 'Destiny',
        points: 50,
        category: 'video-game-history'
    },
    {
        q: 'What was the name of the virtual pandemic that struck the "World of Warcraft" in 2005?',
        answers: ['Corrupted Blood', 'Covid-19', 'Laughing Death', "Morgellons"],
        correctAnswer: 'Corrupted Blood',
        points: 80,
        category: 'video-game-history'
    },
    {
        q: 'What is the highest level a player can reach in "Pac-Man"?',
        answers: ['180', '256', '225', "300"],
        correctAnswer: '256',
        points: 100,
        category: 'video-game-history'
    },

]
let totalScore = 0
//Function that creates all divs that can be clicked to answer questions
const addTenPointQuestions = () => {
    //for loop that creates the divs
    for (let i = 0; i < 5; i++) {
        let questions = document.createElement('div')
        questions.classList.add('tenQuestions')
        document.querySelector('.jeopardyBoard').appendChild(questions)
        questions.innerHTML = questionBank[i].points
        //event listener that will create dive to have questions reside in
        questions.addEventListener('click', (evt) => {
            questions.disabled = true;
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
                        // let myCorrectSound = document.getElementById('correct-sound')
                        // myCorrectSound.play()
                    } else if (questionBank[i].answers[j] !== questionBank[i].correctAnswer) {
                        // let myWrongSound = document.getElementById('wrong-sound')
                        // myWrongSound.play()
                        alert('Wrong answer!')
                    }
                    // answersDisplay.style.display = 'hidden'
                })
            }
        })
        document.querySelector('.jeopardyBoard').removeEventListener('click', questions)
    }
}
addTenPointQuestions();
