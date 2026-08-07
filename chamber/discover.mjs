import discoverItems from "./data/discover.mjs";

// ---------- Build the 8 cards ----------
const grid = document.querySelector("#discover-grid");

discoverItems.forEach((item) => {
  const card = document.createElement("section");
  card.classList.add("card");

  card.innerHTML = `
    <figure>
      <img src="${item.image}" alt="${item.name}" loading="lazy" width="300" height="200">
    </figure>
    <h2>${item.name}</h2>
    <address>${item.address}</address>
    <p>${item.description}</p>
    <button type="button">Learn More</button>
  `;

  grid.appendChild(card);
});

// ---------- localStorage last-visit message ----------
const messageArea = document.querySelector("#visit-message");
const now = Date.now();
const lastVisit = localStorage.getItem("lastVisit");

let message = "";

if (!lastVisit) {
  message = "Welcome! Let us know if you have any questions.";
} else {
  const msPerDay = 1000 * 60 * 60 * 24;
  const daysSince = Math.floor((now - Number(lastVisit)) / msPerDay);

  if (daysSince < 1) {
    message = "Back so soon! Awesome!";
  } else if (daysSince === 1) {
    message = "You last visited 1 day ago.";
  } else {
    message = `You last visited ${daysSince} days ago.`;
  }
}

messageArea.textContent = message;
localStorage.setItem("lastVisit", now);
