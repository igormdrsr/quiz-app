const quizData = [
  {
    question: "Qual é a capital do Brasil?",
    a: "Rio de Janeiro",
    b: "Brasília",
    c: "São Paulo",
    d: "Belo Horizonte",
    correct: "b",
  },
  {
    question: "Qual é a capital do Rio Grande do Norte?",
    a: "João Pessoa",
    b: "Porto Alegre",
    c: "Natal",
    d: "Recife",
    correct: "c",
  },
  {
    question: "Qual é o esporte mais popular no Brasil?",
    a: "Basquete",
    b: "Futebol",
    c: "Tênis",
    d: "Vôlei",
    correct: "b",
  },
  {
    question: "Qual é o prato nacional do Brasil?",
    a: "Feijoada",
    b: "Churrasco",
    c: "Coxinha",
    d: "Pizza",
    correct: "a",
  },
];

const submitButton = document.querySelector(".submit");
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.querySelector(".question-title");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentQuestion = 0;
let score = 0;

loadQuiz();

submitButton.addEventListener("click", () => {
  console.log("teste");
  currentQuestion++;
  loadQuiz();
});

function loadQuiz() {
  const currentQuizData = quizData[currentQuestion];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
