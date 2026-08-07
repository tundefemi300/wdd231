
import { attractions } from "../data/discover.mjs";

const discoverGrid = document.querySelector("#discover-grid");
const visitorMessage = document.querySelector("#visitor-message");


// ==========================================
// CREATE ATTRACTION CARDS
// ==========================================

function displayAttractions(items) {

    items.forEach((item, index) => {

        const card = document.createElement("article");

        card.classList.add("discover-card");
        card.classList.add(`card-${index + 1}`);

        card.innerHTML = `
            <h2>${item.name}</h2>

            <figure>
                <img
                    src="${item.image}"
                    alt="${item.name}"
                    width="300"
                    height="200"
                    loading="lazy"
                >
            </figure>

            <address>
                ${item.address}
            </address>

            <p>
                ${item.description}
            </p>

            <button type="button">
                Learn More
            </button>
        `;

        discoverGrid.appendChild(card);
    });
}

displayAttractions(attractions);


// ==========================================
// LAST VISIT LOCAL STORAGE
// ==========================================

const currentTime = Date.now();

const lastVisit = localStorage.getItem("discoverLastVisit");

if (!lastVisit) {

    visitorMessage.textContent =
        "Welcome! Let us know if you have any questions.";

} else {

    const previousTime = Number(lastVisit);

    const difference = currentTime - previousTime;

    const millisecondsPerDay = 1000 * 60 * 60 * 24;

    const daysSinceVisit = Math.floor(
        difference / millisecondsPerDay
    );

    if (daysSinceVisit < 1) {

        visitorMessage.textContent =
            "Back so soon! Awesome!";

    } else if (daysSinceVisit === 1) {

        visitorMessage.textContent =
            "You last visited 1 day ago.";

    } else {

        visitorMessage.textContent =
            `You last visited ${daysSinceVisit} days ago.`;
    }
}


// Save the current visit time after calculating
// the previous visit.

localStorage.setItem(
    "discoverLastVisit",
    currentTime
);

