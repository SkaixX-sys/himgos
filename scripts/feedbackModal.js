const feedbackWrapperDiv = document.querySelector(".feedback__wrapper");
const feedbackForm = document.querySelector(".feedback__form");
const feedbackButtons = document.querySelectorAll(".feedback__button");
const feedbackCloseDiv = document.querySelector(".close__feedback__modal");

function stopPropagationFunction(event) {
  event.stopPropagation();
}

function feedbackModalHandle() {
  feedbackWrapperDiv.classList.toggle("feedback__open");
  feedbackWrapperDiv.classList.toggle("hidden");
  feedbackWrapperDiv.classList.toggle("flex");
}

feedbackButtons.forEach((button) => {
  button.addEventListener("click", feedbackModalHandle);
});
feedbackForm.addEventListener("click", stopPropagationFunction);
feedbackWrapperDiv.addEventListener("click", feedbackModalHandle);
feedbackCloseDiv.addEventListener("click", feedbackModalHandle);
