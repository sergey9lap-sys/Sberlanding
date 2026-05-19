const dialog = document.querySelector("#registerDialog");
const form = document.querySelector("#registerForm");
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

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  form.innerHTML = `
    <p class="panel-label">Заявка принята</p>
    <h2>Спасибо, вы в списке участников</h2>
    <p class="form-note">Мы сохранили фронтовой сценарий. Когда появится форма регистрации, подключим отправку данных.</p>
    <button class="primary-cta form-submit" type="button" data-close-register>Закрыть</button>
  `;
  form.querySelector("[data-close-register]")?.addEventListener("click", () => dialog?.close());
});
