const questionBank = [
    {
        q: 'What is this class?',
        answers: ['SEI27', 'SEI9', 'IDK', "Brandon's boys"],
        correctAnswer: 'SEI27',
        points: 10 },
    
]
//Function that creates all divs that can be clicked to answer questions
const addTenPointQuestions = () => {
for (let i = 0; i < 1; i++) {
    let questions = document.createElement('div')
    questions.classList.add('tenQuestions')
    document.querySelector('body').appendChild(questions)
    // questions.innerHTML = '10'
    questions.addEventListener('click', () => {
        let questionsDisplay = document.createElement('div')
        document.querySelector('body').appendChild(questionsDisplay)
        questionsDisplay.innerHTML = questionBank[0].q
        })
}
}
addTenPointQuestions();



// let questionButton = ''
// const openQuestion = () => {
//     questionButton = document.getElementByClassName('category-1').getElementByClassName('question-1')
//     questionButton.addEventListener('click', () => {

//     })
// }