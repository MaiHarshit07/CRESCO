const header = " What is the Accounting Standard (AS)"
const header2 = "AS"
const questions = [
  
  {
    question: "1",
    correctAnswer: "disclosure of accounting policies",
  },
  {
    question:  "2",
    correctAnswer: "valuation of inventories",
  },
  {
    question: "3",
    correctAnswer: "cash flow statement",
  },
  {
    question:  "4",
    correctAnswer: "net profit or loss for the period, prior period items and changes in accounting policies",
  },
  {
    question:  "5",
    correctAnswer: "contingencies and events occurring after the balance sheet date",
  },
  {
    question:  "7",
    correctAnswer: "construction contracts",
  },
  {
    question:  "9",
    correctAnswer: "revenue recognition",
  },
  {
    question:  "10",
    correctAnswer: "property, plant and equipment",
  },
  {
    question: "11",
    correctAnswer: "the effects of changes in foreign exchange rates",
  },
  {
    question: "2",
    correctAnswer: "accounting for government grants",
  },
  {
    question:  "13",
    correctAnswer: "accounting for investments",
  },
  {
    question:  "14",
    correctAnswer: "accounting for amalgamations",
  },
  {
    question:  "15",
    correctAnswer: "employee benefits",
  },
  {
    question:  "16",
    correctAnswer: "borrowing costs",
  },
  {
    question:  "17",
    correctAnswer: "segment reporting",
  },
  {
    question:  "18",
    correctAnswer: "related party disclosures",
  },
  {
    question:  "19",
    correctAnswer: "leases",
  },
  {
    question:  "20",
    correctAnswer: "earnings per share",
  },
  {
    question:  "21",
    correctAnswer: "consolidated financial statements",
  },
  {
    question:  "22",
    correctAnswer: "accounting for taxes on income",
  },
  {
    question:  "23",
    correctAnswer: "accounting for investments in associates in consolidated financial statements",
  },
  {
    question:  "24",
    correctAnswer: "discontinuing operations",
  },
  {
    question:  "25",
    correctAnswer: "interim financial reporting",
  },
  {
    question:  "26",
    correctAnswer: "intangible assets",
  },
  {
    question:  "27",
    correctAnswer: "financial reporting of interests in joint ventures",
  },
  {
    question:  "28",
    correctAnswer: "impairment of assets",
  },
  {
    question:  "29",
    correctAnswer: "provisions, contingent liabilities and contingent assets",
  },
];

const questionElement = document.querySelector(".question");
const answerInput = document.querySelector("#answerBox");
const resultElement = document.getElementById("result");
const submitButton = document.querySelector(".ansSubmitButn");
const quizBox = document.querySelector(".quiz-container");

let askedQuestions = [];
let score = 0;
let totalQuestions = 15;

function getRandomQuestion() {
  let index;
  do {
    index = Math.floor(Math.random() * questions.length);
  } while (askedQuestions.includes(index));
  askedQuestions.push(index);
  return questions[index];
}

function getQuestionType() {
  let index;
  index = Math.round(Math.random())
  return index

let currentQuestion;
let currentQuestionType;

function showQuestion() {
  currentQuestion = getRandomQuestion();
  currentQuestionType = getQuestionType();
  if (currentQuestionType == 0) {
    questionElement.textContent = header + currentQuestion.question + " for?"
  } else {
    questionElement.textContent = header + " for '" + currentQuestion.correctAnswer + "'?"
  }
  answerInput.value = "";
  resultElement.textContent = "";
}

submitButton.addEventListener("click", () => {
  const typedAns = answerInput.value.trim().toLowerCase();
  const correctAns;
  if (currentQuestionType == 0) {
    correctAns = currentQuestion.correctAnswer.trim().toLowerCase();
  } else {
    correctAns = currentQuestion.question.trim().toLowerCase();
  if (typedAns === correctAns) {
    score++;
    resultElement.textContent = "Correct hai waah!";
  } else {
    resultElement.innerHTML = `Wrong hai chii! <br> Correct answer is: <strong>${header2 + currentQuestion.question + currentQuestion.correctAnswer}</strong>`;
  }

  setTimeout(() => {
    if (askedQuestions.length < totalQuestions) {
      showQuestion();
    } else {
       const quizBox = document.querySelector(".quiz-box");
      quizBox.innerHTML = `<h2>Quiz Completed 🎉</h2><p>Your score: ${score} / ${totalQuestions}</p>`;
    }
  }, 5000);
});

showQuestion();

