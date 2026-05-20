const dialog = document.querySelector("#registerDialog");
const openButtons = document.querySelectorAll("[data-open-register]");
const closeButtons = document.querySelectorAll("[data-close-register]");

openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (dialog?.showModal) {
      dialog.showModal();
      return;
    }

    dialog?.setAttribute("open", "");
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => dialog?.close());
});
