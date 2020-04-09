//Function that creates all divs that can be clicked to answer questions
function addTenQuestions() {
for (let i = 0; i < 5; i++) {
    let questions = document.createElement('div')
        questions.classList.add('tenQuestions')
        document.querySelector('body').appendChild(questions)
        // questions.innerHTML = '10'
        questions.addEventListener('click', () => {
            
        })
}
}
addTenQuestions();

// const questionBank = [
//     {
//         q: 'What is this class?',
//         answers: ['SEI27', 'SEI9', 'IDK', "Brandon's boys"],
//         correctAnswer: 'SEI27',
//         points: 10 },
    
// ]

// let questionButton = ''
// const openQuestion = () => {
//     questionButton = document.getElementByClassName('category-1').getElementByClassName('question-1')
//     questionButton.addEventListener('click', () => {

//     })
// }