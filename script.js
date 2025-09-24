const prevBtns = document.querySelectorAll(".prev-btn");
const nextBtns = document.querySelectorAll(".next-btn");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach(step => {
    step.classList.remove("active");
  });
  formSteps[formStepsNum].classList.add("active");
}

function updateProgressbar() {
  progressSteps.forEach((step, idx) => {
    if (idx <= formStepsNum) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  const activeSteps = document.querySelectorAll(".progress-step.active");
  progress.style.width =
    ((activeSteps.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}
