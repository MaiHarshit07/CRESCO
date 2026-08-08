const questions = [
  {
    question: " Who developed the theory of relativity?",
    options: [
      "A)Harshit",
      "B) Newton",
      "C) Albert Einstein",
      "D) Narendra Modi",
    ],
    correctAnswer: "a",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["A) Earth", "B) Mars", "C) Venus", "D) Jupiter"],
    correctAnswer: "b",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["A) Elephant", "B) Blue Whale", "C) Giraffe", "D) Shark"],
    correctAnswer: "b",
  },
  {
    question: "What is the capital of France?",
    options: ["A) Berlin", "B) Madrid", "C) Paris", "D) Rome"],
    correctAnswer: "c",
  },
  {
    question: " What is the boiling point of water?",
    options: [
      "A) 100 deg f",
      "B)100 deg c ",
      "C)100 kelvin ",
      "D)173.5 kelvin ",
    ],
    correctAnswer: "b",
  },
  {
    question: " What is the capital city of Australia?",
    options: ["A)Perth", "B)Melbourne", "C) Canberra", "D) Sydney"],
    correctAnswer: "c",
  },
  {
    question: " Who wrote the famous novel-To Kill a Mockingbird? ",
    options: [
      "A)F. Scott Fitzgeral",
      "B) Harper Lee ",
      "C)Jane Austen ",
      "D)J.K. Rowling ",
    ],
    correctAnswer: "b",
  },
  {
    question: "Who was the first President of the United States? ",
    options: [
      "A)Thomas Jefferson",
      "B)Abraham Lincoln ",
      "C)George Washington ",
      "D)Franklin D. Roosevelt ",
    ],
    correctAnswer: "c",
  },
  {
    question: " What is the chemical symbol for gold?",
    options: ["A)Au", "B)Hg ", "C)Ag ", "D)W "],
    correctAnswer: "a",
  },
  {
    question: " Which country is home to the ancient city of Machu Picchu?",
    options: ["A)Chile", "B)Israel ", "C)Brazil ", "D)Peru "],
    correctAnswer: "d",
  },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const options = document.querySelectorAll(".option");

  const currentQuestion = questions[currentQuestionIndex];

  questionElement.textContent = currentQuestion.question;

  options.forEach((button, index) => {
    button.textContent = currentQuestion.options[index];
    button.onclick = () => checkAnswer(String.fromCharCode(97 + index)); // 'a', 'b', 'c', 'd' check karne k liye hai
  });

  document.getElementById("result").textContent = "";
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedOption === currentQuestion.correctAnswer) {
    score++;
    document.getElementById("result").textContent = "Correct hai waah!";
  } else {
    document.getElementById("result").innerHTML =
      ` Wrong hai chii! <br> The correct answer was ` +
      currentQuestion.correctAnswer.toUpperCase();
  }

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showFinalScore();
    }
  }, 1000);
}

function showFinalScore() {
  const quizBox = document.querySelector(".quiz-box");
  quizBox.innerHTML = `<h2>Quiz Completed  <br> moj karo yay😁!!</h2><p>Your score: ${score}/${questions.length}</p>`;
}
document.addEventListener("DOMContentLoaded", loadQuestion);
