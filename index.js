
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Paris", "Madrid", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "Which programming language is often used for web development?",
      options: ["Java", "Python", "JavaScript", "C++"],
      correctAnswer: "JavaScript"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Mars", "Venus"],
      correctAnswer: "Jupiter"
    }
  ];

  let currentQuestion = 0;
  let score = 0;

  function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    const resultContainer = document.getElementById("result");
    const scoreContainer = document.getElementById("score");
    const nextButton = document.getElementById("next-btn");

    if (currentQuestion < questions.length) {
      const currentQuestionObj = questions[currentQuestion];
      questionContainer.textContent = currentQuestionObj.question;

      optionsContainer.innerHTML = "";
      currentQuestionObj.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
      });

      resultContainer.textContent = "";
      scoreContainer.textContent = `Score: ${score}/${currentQuestion}`;
      nextButton.disabled = true;
    } else {
      // Quiz completed
      questionContainer.textContent = "";
      optionsContainer.innerHTML = "";
      resultContainer.textContent = `Your score is: ${score} out of ${questions.length}`;
      scoreContainer.textContent = "";
      nextButton.disabled = true;
    }
  }

  function checkAnswer(selectedOption) {
    const currentQuestionObj = questions[currentQuestion];
    const resultContainer = document.getElementById("result");
    const nextButton = document.getElementById("next-btn");

    if (selectedOption === currentQuestionObj.correctAnswer) {
      resultContainer.textContent = "Correct!";
      score++;
    } else {
      resultContainer.textContent = "Incorrect!";
    }

    nextButton.disabled = false;
  }

  function nextQuestion() {
    currentQuestion++;
    loadQuestion();
  }

  // Initial load
  loadQuestion();