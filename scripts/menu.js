(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.menu.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal-nav")) {
      toggleModal();
    }
  });

  function toggleModal() {
    refs.menu.classList.toggle("is-open");
  }
})();
