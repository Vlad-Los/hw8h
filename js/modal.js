(() => {
    const refs = {
        closeModalBtn: document.querySelector("[data-modal-close]"),
        openModalBtn: document.querySelector("[data-modal-open]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    }
})();