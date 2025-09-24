const prevBtns = document.querySelectorAll(".prev-btn");
const nextBtns = document.querySelectorAll(".next-btn");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
const form = document.getElementById("applicationForm");

let formStepsNum = 0;

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // Validate required fields before going next
    const inputs = formSteps[formStepsNum].querySelectorAll("input, select");
    for (let input of inputs) {
      if (!input.checkValidity()) {
        input.reportValidity();
        return;
      }
    }
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
    window.scrollTo({ top: 0, behavior: "smooth" });
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

// Add loading state on submit
form.addEventListener("submit", (e) => {
  const submitBtn = form.querySelector(".submit-btn");
  submitBtn.classList.add("submitting");
});
