const header = " What is the Accounting Standard (AS)";
const header2 = "AS ";


const questionElement = document.getElementById("question");
const answerInput = document.getElementById("answerBox");
const submitButton = document.querySelector(".ansSubmitButn");
const resultElement = document.getElementById("result");

const questions = [
  { question: "1", correctAnswer: "disclosure of accounting policies" },
  { question: "2", correctAnswer: "valuation of inventories" },
  { question: "3", correctAnswer: "cash flow statement" },
  { question: "4", correctAnswer: "net profit or loss for the period, prior period items and changes in accounting policies" },
  { question: "5", correctAnswer: "contingencies and events occurring after the balance sheet date" },
  { question: "7", correctAnswer: "construction contracts" },
  { question: "9", correctAnswer: "revenue recognition" },
  { question: "10", correctAnswer: "property, plant and equipment" },
  { question: "11", correctAnswer: "the effects of changes in foreign exchange rates" },
  { question: "12", correctAnswer: "accounting for government grants" },
  { question: "13", correctAnswer: "accounting for investments" },
  { question: "14", correctAnswer: "accounting for amalgamations" },
  { question: "15", correctAnswer: "employee benefits" },
  { question: "16", correctAnswer: "borrowing costs" },
  { question: "17", correctAnswer: "segment reporting" },
  { question: "18", correctAnswer: "related party disclosures" },
  { question: "19", correctAnswer: "leases" },
  { question: "20", correctAnswer: "earnings per share" },
  { question: "21", correctAnswer: "consolidated financial statements" },
  { question: "22", correctAnswer: "accounting for taxes on income" },
  { question: "23", correctAnswer: "accounting for investments in associates in consolidated financial statements" },
  { question: "24", correctAnswer: "discontinuing operations" },
  { question: "25", correctAnswer: "interim financial reporting" },
  { question: "26", correctAnswer: "intangible assets" },
  { question: "27", correctAnswer: "financial reporting of interests in joint ventures" },
  { question: "28", correctAnswer: "impairment of assets" },
  { question: "29", correctAnswer: "provisions, contingent liabilities and contingent assets" }
];

let askedQuestions = [];
let score = 0;
let totalQuestions = 15;

function getRandomQuestion() {
  let index;
  do {
    index = Math.floor(Math.random() * questions.length);
  } while (askedQuestions.includes(index) && askedQuestions.length < totalQuestions);

  askedQuestions.push(index);
  return questions[index];
}

function getQuestionType() {
  return Math.round(Math.random()); 
}

function getCorrectAns() {
  return currentQuestionType === 0
    ? currentQuestion.correctAnswer.trim().toLowerCase()
    : currentQuestion.question.trim().toLowerCase();
}

let currentQuestion;
let currentQuestionType;

function showQuestion() {
  if (askedQuestions.length >= totalQuestions) {
    questionElement.textContent = `Quiz Over! Your Score: ${score}/${totalQuestions}`;
    submitButton.disabled = true;
    answerInput.disabled = true;
    return;
  }

  currentQuestion = getRandomQuestion();
  currentQuestionType = getQuestionType();

  if (currentQuestionType === 0) {
    questionElement.textContent = header + " " + currentQuestion.question + " for?";
  } else {
    questionElement.textContent = header + " for '" + currentQuestion.correctAnswer + "'?";
  }

  answerInput.value = "";
  resultElement.textContent = "";
}

submitButton.addEventListener("click", () => {
  const typedAns = answerInput.value.trim().toLowerCase();
  const correctAns = getCorrectAns();
  console.log("Correct:", correctAns);

  if (typedAns === correctAns) {
    score++;
    resultElement.textContent = "✅ Correct hai waah!";
  } else {
    resultElement.innerHTML = `❌ Wrong hai chii!<br>Correct answer is: <strong>${header2 + currentQuestion.question}: ${currentQuestion.correctAnswer}</strong>`;
  }

  setTimeout(() => {
    showQuestion();
  }, 5000); 
});

showQuestion();
