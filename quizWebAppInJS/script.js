const quizDB = [
  {
    question: "Q1 : What does PHP stand for?",
    a: "PHP stands for Preprocessor Home Page",
    b: "PHP stands for Pretext Hypertext Processor",
    c: "PHP stands for Hypertext Preprocessor",
    d: "PHP stands for Personal Hyper Processor",
    ans: "ans3",
  },

  {
    question: "Q2 : Who is the father of PHP?",
    a: "Drek Kolkevi",
    b: "Rasmus Lerdorf",
    c: "Willam Makepiece",
    d: "List Barely",
    ans: "ans2",
  },

  {
    question: "Q3 : How to define a function in PHP?",
    a: "functionName(parameters) {function body}",
    b: "function {function body}",
    c: " function functionName(parameters) {function body}",
    d: "data type functionName(parameters) {function body}",
    ans: "ans3",
  },

  {
    question:
      "Q4 : Which one of the following is the default PHP session name?",
    a: "PHPSESSID",
    b: "PHPIDSESS",
    c: "PHPSESID",
    d: "PHPSESSIONID",
    ans: "ans1",
  },
  {
    question:
      "Q5 : If $a = 12 what will be returned when ($a == 12) ? 5 : 1 is executed?",
    a: "1",
    b: "5",
    c: "12",
    d: "Error",
    ans: "ans2",
  },
  {
    question:
      "Q6 : Which PHP function displays the web page’s most recent modification date??",
    a: "getlastmod()",
    b: "get_last_mod()",
    c: "astmod()",
    d: "last_mod()",
    ans: "ans1",
  },
  {
    question: "Q7 : Which PHP statement will give output as $x on the screen?",
    a: "echo “$x;”;",
    b: "echo “$$x”;",
    c: "echo “\\$x”;",
    d: "echo “/$x”;",
    ans: "ans3",
  },
  {
    question: "Q8 : PHP recognizes constructors by the name ___?",
    a: "function __construct()",
    b: "function _construct()",
    c: "classname()",
    d: "_construct()",
    ans: "ans1",
  },
  {
    question: "Q9 : How many error levels are available in PHP?",
    a: "15",
    b: "16",
    c: "17",
    d: "12",
    ans: "ans2",
  },
  {
    question: "Q10 :What does SPL stand for ?",
    a: "Standard PHP List",
    b: "Source PHP Library",
    c: "Source PHP List",
    d: "Standard PHP Library",
    ans: "ans1",
  },
];

const question = document.querySelector(".question");
const op1 = document.querySelector("#option1");
const op2 = document.querySelector("#option2");
const op3 = document.querySelector("#option3");
const op4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

let score = 0;
let questionCount = 0;
const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  op1.innerText = questionList.a;
  op2.innerText = questionList.b;
  op3.innerText = questionList.c;
  op4.innerText = questionList.d;
};

loadQuestion();

const getCheckAnswer = () => {
  let answer;

  answers.forEach((curAnsEle) => {
    if (curAnsEle.checked) {
      answer = curAnsEle.id;
    }
  });
  return answer;
};

const opSelectAll = () => {
  answers.forEach((curAnsEle) => (curAnsEle.checked = false));
};

submit.addEventListener("click", () => {
  const checkAnswer = getCheckAnswer();
  //console.log(checkAnswer);

  if (checkAnswer === quizDB[questionCount].ans) {
    score++;
  }

  questionCount++;
  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `<h5>&#11088;   Your Final Score :  ${score}/${quizDB.length}  &#11088;</h5>
         <button class="btn" onclick="location.reload()">Play Again &#128522</button>`;
    showScore.classList.remove("scoreArea");
  }
  opSelectAll();
});
