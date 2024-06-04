const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
};
(() => {
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
})();
function toggleModal() {
  refs.modal.classList.toggle("is-hidden");
}

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  // Очистити попередні помилки
  document.getElementById("nameError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("emailError").textContent = "";

  // Перевірка імені
  const name = document.getElementById("name").value;
  if (!name) {
    isValid = false;
    document.getElementById("nameError").textContent =
      "Будь ласка, введіть ваше ім'я.";
  }

  // Перевірка телефону
  const phone = document.getElementById("phone").value;
  const phonePattern = /^\+?\d{10,15}$/;
  if (!phonePattern.test(phone)) {
    isValid = false;
    document.getElementById("phoneError").textContent =
      "Будь ласка, введіть правильний номер телефону.";
  }

  // Перевірка електронної пошти
  const email = document.getElementById("email").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    isValid = false;
    document.getElementById("emailError").textContent =
      "Будь ласка, введіть правильну електронну пошту.";
  }

  // Повідомлення про успіх
  if (isValid) {
    toggleModal();
    alert("Форма успішно заповнена!");
  }
});
