//Bank that contains all questions
const questionBank = [
    //category 1: video game history
    {
        q: 'What is the name of the final course in all "Mario Kart" videogames?',
        answers: ['Coconut Mall', "Bowser's Castle", 'Rainbow Road', 'Moo Moo Meadows'],
        correctAnswer: 'Rainbow Road',
        points: 10,
        category: 'Video Game History'
    },
    {
        q: 'The classic Atari 2600 game controller has how many buttons?',
        answers: ['1', '3', '4', "7"],
        correctAnswer: '1',
        points: 30,
        category: 'Video Game History'
    },
    {
        q: 'Which videogame holds the record for having the highest budget ever to produce?',
        answers: ['The Witcher 3: Wild Hunt', 'Destiny', 'GTA V', "COD: MW2"],
        correctAnswer: 'Destiny',
        points: 50,
        category: 'Video Game History'
    },
    {
        q: 'What was the name of the virtual pandemic that struck the "World of Warcraft" in 2005?',
        answers: ['Corrupted Blood', 'Covid-19', 'Laughing Death', "Morgellons"],
        correctAnswer: 'Corrupted Blood',
        points: 80,
        category: 'Video Game History'
    },
    {
        q: 'What is the highest level a player can reach in "Pac-Man"?',
        answers: ['180', '256', '225', "300"],
        correctAnswer: '256',
        points: 100,
        category: 'Video Game History'
    },
    //category 2: video game systems
    {
        q: 'What Nintendo console was the successor to the NES?',
        answers: ['Nintendo 64', 'SNES', 'Game Boy Advance', "Game Cube"],
        correctAnswer: 'SNES',
        points: 10,
        category: 'Video Game Systems'
    },
    {
        q: 'The Nintendo Game Boy utilized which type of display system?',
        answers: ['CRT', 'OLED', 'LED', "LCD"],
        correctAnswer: 'LCD',
        points: 30,
        category: 'Video Game Systems'
    },
    {
        q: 'The PlayStation was first designed as a companion to this gaming console.',
        answers: ['SNES', 'Sony Dreamcast', 'Sega Genesis', "Game Cube"],
        correctAnswer: 'SNES',
        points: 50,
        category: 'Video Game Systems'
    },
    {
        q: 'How many games were out for the PlayStation when it was first released?',
        answers: ['30', '14', '6', "17"],
        correctAnswer: '17',
        points: 80,
        category: 'Video Game Systems'
    },
    {
        q: 'What was the first videogame console with a CD-ROM embedded into it?',
        answers: ['Panasonic 3DO', 'SNES', 'Genesis', "PSOne"],
        correctAnswer: 'Panasonic 3DO',
        points: 100,
        category: 'Video Game Systems'
    },
    //category 3: characters
    {
        q: 'Which "Mortal Kombat" character has the ability to transform into a dragon?',
        answers: ['Liu Kang', 'SNES', 'Genesis', "PSOne"],
        correctAnswer: 'Liu Kang',
        points: 50,
        category: 'Characters'
    },
    {
        q: 'Which "Mortal Kombat" character has the ability to transform into a dragon?',
        answers: ['Liu Kang', 'SNES', 'Genesis', "PSOne"],
        correctAnswer: 'Liu Kang',
        points: 50,
        category: 'Characters'
    },
    {
        q: 'Which "Mortal Kombat" character has the ability to transform into a dragon?',
        answers: ['Liu Kang', 'SNES', 'Genesis', "PSOne"],
        correctAnswer: 'Liu Kang',
        points: 50,
        category: 'Characters'
    },
    {
        q: 'Which "Mortal Kombat" character has the ability to transform into a dragon?',
        answers: ['Liu Kang', 'SNES', 'Genesis', "PSOne"],
        correctAnswer: 'Liu Kang',
        points: 50,
        category: 'Characters'
    },
    {
        q: 'Which "Mortal Kombat" character has the ability to transform into a dragon?',
        answers: ['Liu Kang', 'SNES', 'Genesis', "PSOne"],
        correctAnswer: 'Liu Kang',
        points: 50,
        category: 'Characters'
    },
    //category 4: Name of the game
    {
        q: 'Which "Mortal Kombat" character has the ability to transform into a dragon?',
        answers: ['Liu Kang', 'SNES', 'Genesis', "PSOne"],
        correctAnswer: 'Liu Kang',
        points: 50,
        category: 'Name of the Game'
    },
    {
        q: 'Which "Mortal Kombat" character has the ability to transform into a dragon?',
        answers: ['Liu Kang', 'SNES', 'Genesis', "PSOne"],
        correctAnswer: 'Liu Kang',
        points: 50,
        category: 'Name of the Game'
    },
    {
        q: 'Which "Mortal Kombat" character has the ability to transform into a dragon?',
        answers: ['Liu Kang', 'SNES', 'Genesis', "PSOne"],
        correctAnswer: 'Liu Kang',
        points: 50,
        category: 'Name of the Game'
    },
    {
        q: 'Which "Mortal Kombat" character has the ability to transform into a dragon?',
        answers: ['Liu Kang', 'SNES', 'Genesis', "PSOne"],
        correctAnswer: 'Liu Kang',
        points: 50,
        category: 'Name of the Game'
    },
    {
        q: 'Which "Mortal Kombat" character has the ability to transform into a dragon?',
        answers: ['Liu Kang', 'SNES', 'Genesis', "PSOne"],
        correctAnswer: 'Liu Kang',
        points: 50,
        category: 'Name of the Game'
    },
    //category 5: fame in the game
    {
        q: 'Which "Mortal Kombat" character has the ability to transform into a dragon?',
        answers: ['Liu Kang', 'SNES', 'Genesis', "PSOne"],
        correctAnswer: 'Liu Kang',
        points: 50,
        category: 'Fame in the Game'
    },
    {
        q: 'Which "Mortal Kombat" character has the ability to transform into a dragon?',
        answers: ['Liu Kang', 'SNES', 'Genesis', "PSOne"],
        correctAnswer: 'Liu Kang',
        points: 50,
        category: 'Fame in the Game'
    },
    {
        q: 'Which character in the "Street Fighter" series was inspired by Bruce Lee?',
        answers: ['Liu Kang', 'SNES', 'Fei Long', "PSOne"],
        correctAnswer: 'Liu Kang',
        points: 50,
        category: 'Fame in the Game'
    },
    {
        q: 'Which "Mortal Kombat" character has the ability to transform into a dragon?',
        answers: ['Liu Kang', 'SNES', 'Genesis', "PSOne"],
        correctAnswer: 'Liu Kang',
        points: 50,
        category: 'Fame in the Game'
    },
    {
        q: `Which iconic actor provided the voice of the titular character during the 1990's "Sonic the Hedgehog" cartoon?`,
        answers: ['Jaleel White', 'Tom Hanks', 'David Schwimmer', "Alfonso Ribeiro"],
        correctAnswer: 'Jaleel White',
        points: 100,
        category: 'Fame in the Game'
    },
]
const addCategoryTitles = () => {
    for (let k = 0; k < 5; k++) {
        let categoryTitles = document.createElement('div')
        categoryTitles.classList.add('.categoryTitles')
        document.querySelector('.categoryTitles').appendChild(categoryTitles)
        categoryTitles.innerHTML = questionBank[k].category
    }
}
addCategoryTitles()
let totalScore = 0
//Function that creates all divs that can be clicked to answer questions
const addJeopardyBoard = () => {
    //for loop that creates the divs
    for (let i = 0; i < 25; i++) {
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
                })
            }
        })
    }
}
addJeopardyBoard();