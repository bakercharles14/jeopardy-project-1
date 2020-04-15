//Bank that contains all questions
const questionBank = [
    {
        q: 'What was the first home video game system called?',
        answers: ['Fairchild Video Entertainment System', 'Atari Pong', 'Magnavox Odyssey', 'Coleco Telstar'],
        correctAnswer: 'Magnavox Odyssey',
        points: 10,
        category: 'Video Game History',
        explanation: 'The Magnavox Odyssey was released in 1972, whereas the other systems were released later.',
    },
    {
        q: 'Which videogame holds the record for having the highest budget ever to produce?',
        answers: ['The Witcher 3: Wild Hunt', 'Destiny', 'GTA V', 'COD: MW2'],
        correctAnswer: 'Destiny',
        points: 30,
        category: 'Video Game History',
        explanation: 'Destiny was $500 million, The Witcher 3 cost $81 million, GTA V was $265 Million, and MW2 cost $200 million.',
    },
    {
        q: 'What is the name of the first-ever video game?',
        answers: ['Tennis for Two', 'Pong', 'Spacewar!', 'Periscope'],
        correctAnswer: 'Tennis for Two',
        points: 50,
        category: 'Video Game History',
        explanation: 'In October 1958, Physicist William Higinbotham created what is thought to be the first video game, called Tennis for Two, a similar game to the 1970 hit Pong.',
    },
    {
        q: 'What is the highest level a player can reach in "Pac-Man"?',
        answers: ['180', '256', '225', '300'],
        correctAnswer: '256',
        points: 80,
        category: 'Video Game History',
        explanation: "The game becomes unplayable at the 256th level due to an integer overflow that affects the game's memory, rendering this level unbeatable",
    },
    {
        q: 'The classic Atari 2600 game controller has how many buttons?',
        answers: ['3', '1', '4', '0'],
        correctAnswer: '1',
        points: 100,
        category: 'Video Game History',
        explanation: 'The Atari 2600 Joystick is a tiltable stick attached to a base with one action button. ',
    },
    {
        q: 'What Nintendo console was the successor to the NES?',
        answers: ['Nintendo 64', 'SNES', 'Game Boy Advance', 'Game Cube'],
        correctAnswer: 'SNES',
        points: 10,
        category: 'Video Game Systems',
        explanation: 'The NES was released in North America in 1985, then the SNES was released 6 years later',
    },
    {
        q: 'The Nintendo Game Boy utilized which type of display system?',
        answers: ['CRT', 'OLED', 'LED', 'LCD'],
        correctAnswer: 'LCD',
        points: 30,
        category: 'Video Game Systems',
        explanation: 'As with most handheld videogames from the classic days, the Game Boy used a liquid-crystal display (LCD).',
    },
    {
        q: 'The PlayStation was first designed as a companion to this gaming console.',
        answers: ['SNES', 'Sony Dreamcast', 'Game Cube', 'Sega Genesis'],
        correctAnswer: 'SNES',
        points: 50,
        category: 'Video Game Systems',
        explanation: 'Sony originally designed the PlayStation as a CD-ROM companion to the SNES. The new system would play both discs and standard SNES cartridges.',
    },
    {
        q: 'How many games were out for the PlayStation when it was first released?',
        answers: ['30', '14', '6', '17'],
        correctAnswer: '17',
        points: 80,
        category: 'Video Game Systems',
        explanation: 'There were already 17 games to choose from when the PlayStation was released. That number would grow to well over 1000!',
    },
    {
        q: 'What was the first videogame console with a CD-ROM embedded into it?',
        answers: ['Panasonic 3DO', 'Atari Jaguar', 'Genesis', 'PSOne'],
        correctAnswer: 'Panasonic 3DO',
        points: 100,
        category: 'Video Game Systems',
        explanation: 'Panasonic shipped the first self-contained CD-ROM console, the 3DO. The market then became oversaturated, causing this system to fail due to its high price.',
    },
    //category 3: characters
    {
        q: 'Solid Snake is a hero in which famous videogame franchise?',
        answers: ['Resident Evil', 'Metal Gear', 'Mass Effect', "Uncharted"],
        correctAnswer: 'Metal Gear',
        points: 10,
        category: 'Characters',
        explanation: "Solid Snake's first appearance was in Metal Gear, released in 1987.",
    },
    {
        q: 'Which "Mortal Kombat" character has the ability to transform into a dragon?',
        answers: ['Liu Kang', 'Radon', 'Sonya', 'Scorpion'],
        correctAnswer: 'Liu Kang',
        points: 30,
        category: 'Characters',
        explanation: 'Liu Kang is able to transform himself into a Chinese dragon which includes a serpentine body with small arms.',
    },
    {
        q: 'Which Mario character has appeared in all but one "Mario Party" game?',
        answers: ['Luigi', 'Yoshi', 'Pricess Peach', 'Wario'],
        correctAnswer: 'Wario',
        points: 50,
        category: 'Characters',
        explanation: `In the 15+ games that makeup the "Mario Party" series, only "Mario Party Advance" didn't feature Wario.`,
    },
    {
        q: 'What is the name of the StarCraft computer game character who sacrificed himself to kill the Overmind?',
        answers: ['Artanis', 'Tassadar', 'Aldaris', 'Zeratul'],
        correctAnswer: 'Tassadar',
        points: 80,
        category: 'Characters',
        explanation: 'Tassadar dies when he sacrifices himself to destroy the Overmind on Aiur in the first StarCraft game.',
    },
    {
        q: `What type of animal is Sonic's companion "Knuckles"?`,
        answers: ['Platypus', 'Hedgehog', 'Echidna', "Anteater"],
        correctAnswer: 'Echidna',
        points: 100,
        category: 'Characters',
        explanation: 'Knuckles is an echidna, a type of animals that lives off of ants and termites and resides in Australia and New Guinea.',
    },

    //category 4: Name of the game
    {
        q: 'What is the name of the racing series that is a spinoff of "Super Mario Brothers"?',
        answers: ['Mario Kart', 'Mario Racing', 'Mario Party', 'Mario Cart'],
        correctAnswer: 'Mario Kart',
        points: 10,
        category: 'Name of the Game',
        explanation: `"Super Mario Kart" was originally released in 1992 and since then has become one of Nintendo's staple games, resulting in continuous sequels.`,
    },
    {
        q: 'Mario originated as a character in which classic video game?',
        answers: ['Super Mario Brothers', 'Donkey Kong', 'Mario Bros', 'Mario'],
        correctAnswer: 'Donkey Kong',
        points: 30,
        category: 'Name of the Game',
        explanation: 'Though originally called by other names, Mario was the protagonist in the legendary videogame "Donkey Kong", which was released in 1981.',
    },
    {
        q: 'Which videogame is generally considered to be the original first-person shooter?',
        answers: ['Wayout', 'Wolfenstein 3D', 'Maze War', 'Akalabeth: World of Doom '],
        correctAnswer: 'Maze War',
        points: 50,
        category: 'Name of the Game',
        explanation: 'Maze War was developed by NASA students and it included a first-person shooter point-of-view, though it is argued Wolfenstein 3D is the true original.',
    },
    {
        q: 'Ed Boon and John Tobias are the original designers of which renowned videogame franchise?',
        answers: ['Minecraft', 'Resident Evil', 'Mortal Kombat', 'Street Fighter'],
        correctAnswer: 'Liu Kang',
        points: 80,
        category: 'Name of the Game',
        explanation: 'Both Chicago born video game programmers, Boon and Tobias, are rather famous for creating the Mortal Kombat franchise.',
    },
    {
        q: 'What was the name of the last game released as a physical cartridge for the Super Nintendo?',
        answers: ['Frogger', "Timon & Pumbaa's Jungle Games", "Metal Slader Glory: Director's Cut", 'Fire Emblem: Thracia 776'],
        correctAnswer: 'Fire Emblem: Thracia 776',
        points: 100,
        category: 'Name of the Game',
        explanation: 'The last game to be officially published on a physical cartridge was Fire Emblem: Thracia 776 on January 21, 2000, even though Star Fox 2 was released in 2017 in an emulated format.',
    },
    //category 5: fame in the game

    {
        q: 'The most-popular American football videogame franchise is named after which individual?',
        answers: ['John Madden', 'John Gruden', 'Vince Lombardi', 'Bill Walsh'],
        correctAnswer: 'John Madden',
        points: 10,
        category: 'Fame in the Game',
        explanation: `Until 1993, Madden NFL was called John Madden Football, recieving it's namesake from Pro Football Hall of Fame coach and commentator John Madden.`,
    },
    {
        q: 'Which character in the "Street Fighter" series was inspired by Bruce Lee?',
        answers: ['Ryu', 'Gouken', 'Fei Long', 'Guy'],
        correctAnswer: 'Fei Long',
        points: 30,
        category: 'Fame in the Game',
        explanation: 'Fei Long, one of the most-popular characters in the "Street Fighter" franchise looks, moves and sounds like Bruce Lee.',
    },
    {
        q: 'What was the name of the videogame that officially featured Michael Jackson as the hero?',
        answers: ['Beat It', 'Billie Jean', 'Thriller', 'Moonwalker'],
        correctAnswer: 'Moonwalker',
        points: 50,
        category: 'Fame in the Game',
        explanation: 'Though forgettable in its home-console form, the arcade version of Michael Jackson "Moonwalker" (1990) is a much-more entertaining experience.',
    },
    {
        q: 'The protagonist in "Grand Theft Auto: Vice City" was voiced by which actor?',
        answers: ['Ray Liotta', 'Robert De Niro', 'Paul Sorvino', 'Joe Pesci'],
        correctAnswer: 'Ray Liotta',
        points: 80,
        category: 'Fame in the Game',
        explanation: 'Tommy Vercetti, voiced by Liotta, is the protagonist and playable character in the 2002 video game Grand Theft Auto: Vice City.',
    },
    {
        q: `Which iconic actor provided the voice of the titular character during the 1990's "Sonic the Hedgehog" cartoon?`,
        answers: ['Jaleel White', 'Tom Hanks', 'David Schwimmer', 'Alfonso Ribeiro'],
        correctAnswer: 'Jaleel White',
        points: 100,
        category: 'Fame in the Game',
        explanation: 'Actor Jaleel White voiced the character in all of the DiC-produced animated series: Adventures of Sonic the Hedgehog, Sonic SatAM, and Sonic Underground as well as the Christmas special, Sonic Christmas Blast.',
    },
]
//function that will populate the category titles
const addCategoryTitles = () => {
    for (let i = 0; i < questionBank.length; i += 5) {
        let categoryTitles = document.createElement('div')
        categoryTitles.classList.add('categoryTitles')
        document.querySelector('.categoryTitleBoard').appendChild(categoryTitles)
        categoryTitles.innerHTML = questionBank[i].category
    }
}
addCategoryTitles()
let totalScore = 0
document.querySelector('.score-board').innerHTML = 'Total Score: ' + totalScore
//Function that creates all divs that can be clicked to answer questions
const addJeopardyBoard = () => {
    //for loop that creates the divs
    for (let i = 0; i < 25; i++) {
        let questions = document.createElement('div')
        questions.classList.add('questionsStyle')
        document.querySelector('.questionBoard').appendChild(questions)
        questions.innerHTML = questionBank[i].points
        //event listener that will create dive to have questions reside in
        questions.addEventListener('click', (evt) => {
            let wholeQuestion = document.querySelector('.whole-question')
            wholeQuestion.innerHTML = ''
            if (questions.disabled === undefined) {
                evt.preventDefault()
                let questionsDisplay = document.createElement('div')
                questionsDisplay.classList.add('questionsDisplay')
                document.querySelector('.whole-question').appendChild(questionsDisplay)
                questionsDisplay.innerHTML = questionBank[i].q
                //for loop to populate the answers in another div under questions
                for (let j = 0; j < questionBank[i].answers.length; j++) {
                    let answersDisplay = document.createElement('div')
                    answersDisplay.classList.add('answersDisplay')
                    document.querySelector('.whole-question').appendChild(answersDisplay)
                    answersDisplay.innerHTML = questionBank[i].answers[j]
                    answersDisplay.addEventListener('click', () => {
                        let score = questionBank[i].points
                        if (questionBank[i].answers[j] === questionBank[i].correctAnswer) {
                            //commented out until off function complete
                            let myCorrectSound = document.getElementById('correct-sound')
                            myCorrectSound.play()
                            console.log('You get ' + questionBank[i].points + ' points')
                            totalScore += score
                            alert('Correct! You get ' + questionBank[i].points + ' points.' + ' Explanation: ' + questionBank[i].explanation)
                        } else if (questionBank[i].answers[j] !== questionBank[i].correctAnswer) {
                            //commented out until off function complete
                            let myWrongSound = document.getElementById('wrong-sound')
                            myWrongSound.play()
                            totalScore -= score
                            console.log('Wrong answer! You lose ' + questionBank[i].points + ' points!')
                            alert('Wrong! You lose ' + questionBank[i].points + ' points.' + ' The correct answer was ' + questionBank[i].correctAnswer + '. ' + 'Explanation: ' + questionBank[i].explanation)
                        }
                        console.log(totalScore)
                        document.querySelector('.score-board').innerHTML = 'Total Score: ' + totalScore
                        //for loop that will remove answers after it has been answered
                        let parentQuestion = document.querySelector('.whole-question')
                        let childQuestions = document.querySelector('.questionsDisplay')
                        let childAnswers = document.querySelectorAll('.answersDisplay')
                        parentQuestion.removeChild(childQuestions)
                        for (let k = 0; k < childAnswers.length; k++) {
                            parentQuestion.removeChild(childAnswers[k])
                        }
                        //for loop that will run winOrLose after all questions answered
                        let allQuestions = document.querySelectorAll('.questionsStyle')
                        for (let x = 0; x < allQuestions.length; x++) {
                            if ((document.querySelectorAll('.boxAfterClick')).length === questionBank.length) {
                                return winOrLose()
                            }
                        }
                    })
                    questions.disabled = true
                }
                if (questions.disabled = true) {
                    questions.classList.add('boxAfterClick')
                }
            }
        })
    }
}
//function that sets win/loss standards
addJeopardyBoard();
const winOrLose = () => {
    if (totalScore >= 150) {
        alert('Winner! Your total score was ' + totalScore + ' points!')
    } else if (totalScore < 150)
        alert('You lost! Your total score was ' + totalScore + ' points!')
}
// function that will be able to make aound button turn sound on/off
const soundOff = () => {
    let soundButton = document.querySelector('.sound-off')
    soundButton.addEventListener('click', () => {
        document.querySelector('.sound-off-clicker').innerHTML = 'Double Click to turn sound ON'
        document.querySelector('.sound-off-clicker').style.fontSize = '7px'
        let audioSources = document.querySelectorAll('audio')
        for (let i = 0; i < audioSources.length; i++) {
            audioSources[i].muted = true
        }
    })
    soundButton.addEventListener('dblclick', () => {
        document.querySelector('.sound-off-clicker').innerHTML = 'Turn sound OFF'
        document.querySelector('.sound-off-clicker').style.fontSize = '10px'
        let audioSources = document.querySelectorAll('audio')
        for (let i = 0; i < audioSources.length; i++) {
            audioSources[i].muted = false
        }

    })
}
soundOff()