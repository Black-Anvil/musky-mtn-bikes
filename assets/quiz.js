
const quizForm = document.querySelector("#quizForm");
const answers = {};

quizForm.addEventListener("change", updateAnswers);
function updateAnswers(event) {
  const key = event.target.name;
  const value = event.target.value;
  answers[key] = value;
}

let currentQuestionIndex = 0;
const previousBtn = document.getElementById("prev-button");
const nextBtn = document.getElementById("next-button");
const finishBtn = document.getElementById("finish-button");

function updateButtonStates(index) {
    previousBtn.disabled = (index === 0)
    nextBtn.disabled = (index === questions.length - 1);
    nextBtn.classList.toggle("hidden", index === questions.length - 1);
    finishBtn.classList.toggle("hidden", index !== questions.length - 1);
}

previousBtn.addEventListener("click", (event) => {
    currentQuestionIndex--;
    updateButtonStates(currentQuestionIndex);
    displayQuestion(currentQuestionIndex);
});

nextBtn.addEventListener("click", (event) => {
    currentQuestionIndex++;
    updateButtonStates(currentQuestionIndex);
    displayQuestion(currentQuestionIndex);
});

finishBtn.addEventListener("click", function () {
  if (answers.product_type && answers.bike_type && answers.color) {
    alert("Here are your answers: " + JSON.stringify(answers));
  } else {
    alert("Please answer all the questions!");
  }
});

function displayQuestion(index) {
    const currentQuestion = questions[index];
    const currentAnswer = answers[currentQuestion.name];
    quizForm.innerHTML = `
    <h2>${index + 1}) ${currentQuestion.text}</h2>
    <div class="label-container">
        ${currentQuestion.options.map((option) =>
            `
                <input type="radio" id="${option.value}" name="${currentQuestion.name}" value="${option.value}" ${option.value === currentAnswer ? 'checked' : ''}>
                <label for="${option.value}">
                    <div class="img-wrap">
                        <img src="${option.img}"/>
                    </div>
                    <span>${option.label}</span>
                </label>
            `
        ).join('')}
    `
}

// initialization
displayQuestion(currentQuestionIndex);
updateButtonStates(currentQuestionIndex);
