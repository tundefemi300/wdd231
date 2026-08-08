const modal = document.querySelector("#details-modal");
const closeButton = document.querySelector("#modal-close");

export function openAttractionModal(item) {
  if (!item) return;
  document.querySelector("#modal-image").src = item.image;
  document.querySelector("#modal-image").alt = item.name;
  document.querySelector("#modal-category").textContent = item.category;
  document.querySelector("#modal-title").textContent = item.name;
  document.querySelector("#modal-location").textContent = item.location;
  document.querySelector("#modal-description").textContent = item.description;
  document.querySelector("#modal-type").textContent = item.type;
  document.querySelector("#modal-area").textContent = item.area;
  modal.showModal();
}

closeButton?.addEventListener("click", () => modal.close());

modal?.addEventListener("click", event => {
  if (event.target === modal) modal.close();
});

modal?.addEventListener("keydown", event => {
  if (event.key === "Escape") modal.close();
});
