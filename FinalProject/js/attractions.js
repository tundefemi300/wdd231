import { openAttractionModal } from "./modules/modal.js";

const grid = document.querySelector("#attractions-grid");
const filter = document.querySelector("#category-filter");
const count = document.querySelector("#result-count");
const status = document.querySelector("#status");
let attractions = [];

async function getAttractions() {
  try {
    status.textContent = "Loading attractions…";
    const response = await fetch("data/attractions.json");
    if (!response.ok) throw new Error(`Unable to load data: ${response.status}`);
    attractions = await response.json();
    render(attractions);
    status.textContent = "";
  } catch (error) {
    status.textContent = "We could not load the attraction guide. Check your connection and try again.";
    console.error(error);
  }
}

function render(items) {
  count.textContent = `${items.length} place${items.length === 1 ? "" : "s"} shown`;
  grid.innerHTML = items.map(item => `
    <article class="place-card">
      <img src="${item.image}" alt="${item.name}" width="640" height="400" loading="lazy">
      <div class="card-content">
        <span class="tag">${item.category}</span>
        <h2>${item.name}</h2>
        <p class="muted">${item.location}</p>
        <p>${item.description}</p>
        <dl class="mini-facts"><div><dt>Type</dt><dd>${item.type}</dd></div><div><dt>Area</dt><dd>${item.area}</dd></div></dl>
        <button class="button small" data-id="${item.id}">Learn more</button>
      </div>
    </article>`).join("");
  grid.querySelectorAll("[data-id]").forEach(button => {
    button.addEventListener("click", () => {
      const item = attractions.find(attraction => attraction.id === Number(button.dataset.id));
      openAttractionModal(item);
    });
  });
}

filter.addEventListener("change", () => {
  const selected = filter.value;
  render(selected === "all" ? attractions : attractions.filter(item => item.category === selected));
});

document.querySelector(".menu-button")?.addEventListener("click", event => {
  const button = event.currentTarget;
  const nav = document.querySelector("#site-nav");
  const open = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("open", !open);
});

document.querySelector("#year")?.replaceChildren(String(new Date().getFullYear()));
getAttractions();
