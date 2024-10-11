const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Madrid"]
    },
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"]
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"]
    },
    {
        question: "What is the boiling point of water?",
        choices: ["90°C", "100°C", "110°C", "120°C"]
    },
    {
        question: "Who was the first president of the Philippines?",
        choices: ["Emilio Aguinaldo", "Manuel L. Quezon", "Jose P. Laurel", "Ferdinand Marcos"]
    },
    {
        question: "What is the revolution that happened in the Philippines during the Marcos Sr. regime?",
        choices: ["Spanish Revolution", "Katipunan Revolution", "EDSA People Power Revolution", "Revolution of 1896"]
    },
    {
        question: "Who is the head of the Katipunan?",
        choices: ["Andres Bonifacio", "Emilio Aguinaldo", "Jose Rizal", "Antonio Luna"]
    }
];

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

document.addEventListener("DOMContentLoaded", () => {
    const questionElement = document.querySelector(".question");
    const choicesElement = document.querySelector(".choices");

    const randomQuestion = getRandomQuestion();
    questionElement.textContent = randomQuestion.question;

    choicesElement.innerHTML = "";
    randomQuestion.choices.forEach(choice => {
        const choiceElement = document.createElement("li");
        choiceElement.classList.add("choice-button");
        choiceElement.textContent = choice;
        choicesElement.appendChild(choiceElement);
    });
});