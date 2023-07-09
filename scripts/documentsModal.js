const modal = document.querySelector(".document__modal");
const modalContent = document.querySelector(".document__modal__content");
const zoomIns = document.querySelectorAll(".zoom_in");

zoomIns.forEach((item) => {
  item.addEventListener("click", (event) => {
    const slideImage = event.target.parentNode.querySelector(".slide__image");
    const imageURL = slideImage.getAttribute("src");
    modal.classList.toggle("document__open");
    modal.classList.toggle("hidden");
    modalContent.innerHTML = `
      <div class="relative p-6">
        <div class="document__modal__close absolute right-2 top-4 text-4xl text-white z-50 cursor-pointer">&times;</div>
        <img src="${imageURL}" alt="" class="mx-auto my-16 max-h-full lg:max-h-screen lg:p-10 lg:my-0">
      </div>
    `;
    document
      .querySelector(".document__modal__close")
      .addEventListener("click", () => {
        modal.classList.toggle("document__open");
        modal.classList.toggle("hidden");
      });
  });
});