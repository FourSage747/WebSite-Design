(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelectorAll("[data-modal-close]"),
    modals: document.querySelectorAll("[data-modal]"),
    vectors: document.querySelectorAll("[open-paragraf]"),
  };

  refs.openModalBtn.forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-modal-open");
      const modal = document.getElementById(modalId);
      modal.classList.remove("is-hidden");
    });
  });
  refs.closeModalBtn.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest("[data-modal]");
      modal.classList.add("is-hidden");
    });
  });
  refs.modals.forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.add("is-hidden");
      }
    });
  });
  refs.vectors.forEach((vector) => {
    vector.addEventListener("click", () => {
      const paragrafId = vector.getAttribute("open-paragraf");
      const paragraf = document.getElementById(paragrafId);
      paragraf.classList.toggle("visible");
      vector.classList.toggle("rotate");
    });
  });
})();
