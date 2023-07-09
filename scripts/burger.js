const burgerWrapperDiv = document.querySelector(".burger__wrapper");
const burgerOpenButttonDiv = document.querySelector(".nav__burger__button");
const burgerFirstSpan = document.querySelector(".burger__span");
const closeBurgerDiv = document.querySelector(".close__burger");

function burgerButtonHandle() {
  burgerWrapperDiv.classList.toggle("burger__open");
  burgerWrapperDiv.classList.toggle("hidden");
  burgerWrapperDiv.classList.toggle("flex");
  burgerFirstSpan.classList.toggle("w-7");
  burgerFirstSpan.classList.toggle("w-5");
  burgerFirstSpan.classList.toggle("ms-2");
  closeBurgerDiv.classList.toggle("hidden");
}

burgerOpenButttonDiv.addEventListener("click", burgerButtonHandle);
burgerWrapperDiv.addEventListener("click", burgerButtonHandle);
