const questions = [
    {
        question: "Who was the first president of the Philippines?",
        choices: ["Emilio Aguinaldo", "Manuel L. Quezon", "Jose P. Laurel", "Ferdinand Marcos"],
        correct: "Emilio Aguinaldo"
    },
    {
        question: "What is the revolution that happened in the Philippines during the Marcos Sr. regime?",
        choices: ["Spanish Revolution", "Katipunan Revolution", "EDSA People Power Revolution", "Revolution of 1896"],
        correct: "EDSA People Power Revolution"
    },
    {
        question: "Who is the head of the Katipunan?",
        choices: ["Andres Bonifacio", "Emilio Aguinaldo", "Jose Rizal", "Antonio Luna"],
        correct: "Andres Bonifacio"
    },
    {
        question: "Which festival is celebrated in Baguio City?",
        choices: ["Higantes Festival", "Pahiyas Festival", "Sinulog Festival", "Panagbenga Festival"],
        correct: "Panagbenga Festival"
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
const totalQuestions = 10;

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function displayQuestion(question) {
    const questionElement = document.querySelector(".question");
    const choicesElement = document.querySelector(".choices");

    questionElement.textContent = question.question;
    choicesElement.innerHTML = "";

    question.choices.forEach(choice => {
        const choiceElement = document.createElement("li");
        choiceElement.classList.add("choice-button");
        choiceElement.textContent = choice;
        choiceElement.addEventListener("click", () => handleChoiceSelection(choice, question.correct));
        choicesElement.appendChild(choiceElement);
    });
}

function handleChoiceSelection(selectedChoice, correctChoice) {
    const choicesElement = document.querySelector(".choices");
    const choiceElements = choicesElement.querySelectorAll(".choice-button");

    choiceElements.forEach(choiceElement => {
        if (choiceElement.textContent === correctChoice) {
            choiceElement.classList.add("correct");
        } else if (choiceElement.textContent === selectedChoice) {
            choiceElement.classList.add("incorrect");
        }
    });

    if (selectedChoice === correctChoice) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < totalQuestions) {
            displayQuestion(getRandomQuestion());
        } else {
            displayResults();
        }
    }, 1000);
}

function displayResults() {
    const questionElement = document.querySelector(".question");
    const choicesElement = document.querySelector(".choices");

    questionElement.textContent = `Quiz Over! Correct: ${correctAnswers}, Incorrect: ${incorrectAnswers}`;
    choicesElement.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", () => {
    displayQuestion(getRandomQuestion());
});