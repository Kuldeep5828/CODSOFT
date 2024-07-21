const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c"
    },
    {
        question: "Who is the CEO of Tesla?",
        a: "Jeff Bezos",
        b: "Elon Musk",
        c: "Bill Gates",
        d: "Tony Stark",
        correct: "b"
    },
    {
        question: "What is the most used programming language in 2021?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    }
];

const quizContainer = document.getElementById('quiz-container');
const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result');

function loadQuiz() {
    quizData.forEach((quiz, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <h2>${index + 1}. ${quiz.question}</h2>
            <ul class="answers">
                <li>
                    <input type="radio" name="question${index}" id="a${index}" value="a">
                    <label for="a${index}">${quiz.a}</label>
                </li>
                <li>
                    <input type="radio" name="question${index}" id="b${index}" value="b">
                    <label for="b${index}">${quiz.b}</label>
                </li>
                <li>
                    <input type="radio" name="question${index}" id="c${index}" value="c">
                    <label for="c${index}">${quiz.c}</label>
                </li>
                <li>
                    <input type="radio" name="question${index}" id="d${index}" value="d">
                    <label for="d${index}">${quiz.d}</label>
                </li>
            </ul>
        `;
        quizContainer.appendChild(questionElement);
    });
}

function getSelectedAnswers() {
    const answers = [];
    quizData.forEach((quiz, index) => {
        const answerElements = document.getElementsByName(`question${index}`);
        answerElements.forEach((answerElement) => {
            if (answerElement.checked) {
                answers.push(answerElement.value);
            }
        });
    });
    return answers;
}

function calculateScore(answers) {
    let score = 0;
    answers.forEach((answer, index) => {
        if (answer === quizData[index].correct) {
            score++;
        }
    });
    return score;
}

function showResult(score) {
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
}

submitBtn.addEventListener('click', () => {
    const selectedAnswers = getSelectedAnswers();
    const score = calculateScore(selectedAnswers);
    showResult(score);
});

window.onload = loadQuiz;
