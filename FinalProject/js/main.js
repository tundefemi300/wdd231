const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("#site-nav");

menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("open", !open);
});

document.querySelector("#year")?.replaceChildren(String(new Date().getFullYear()));

async function loadFeatured() {
  const grid = document.querySelector("#featured-grid");
  if (!grid) return;
  try {
    const response = await fetch("data/attractions.json");
    if (!response.ok) throw new Error(`Request failed: ${response.status}`);
    const attractions = await response.json();
    const featured = attractions.filter(item => item.featured).slice(0, 6);
    grid.innerHTML = featured.map(item => `
      <article class="place-card">
        <img src="${item.image}" alt="${item.name}" width="640" height="400" loading="lazy">
        <div class="card-content"><span class="tag">${item.category}</span><h3>${item.name}</h3>
        <p>${item.description}</p><a class="text-link" href="attractions.html">View details →</a></div>
      </article>`).join("");
  } catch (error) {
    grid.innerHTML = `<p class="error">The featured attractions could not be loaded. Please try again.</p>`;
    console.error(error);
  }
}
loadFeatured();
