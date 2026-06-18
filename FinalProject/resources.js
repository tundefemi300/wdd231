const modal = document.querySelector("#resourceModal");
const closeBtn = document.querySelector("#closeModal");

card.addEventListener("click", () => {
    modal.showModal();
});

closeBtn.addEventListener("click", () => {
    modal.close();
});