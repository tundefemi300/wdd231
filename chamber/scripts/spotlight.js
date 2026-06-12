const spotlightURL = "data/members.json";

async function loadSpotlights() {

    const response =
        await fetch(spotlightURL);

    const data =
        await response.json();

    const premiumMembers =
        data.filter(member =>
            member.membership >= 2
        );

    premiumMembers.sort(() =>
        Math.random() - 0.5
    );

    const selected =
        premiumMembers.slice(0, 3);

    displaySpotlights(selected);
}

function displaySpotlights(members) {

    const container =
        document.querySelector("#spotlights");

    container.innerHTML = "";

    members.forEach(member => {

        const card =
            document.createElement("article");

        card.classList.add("member-card");

        card.innerHTML = `
            <h3>${member.name}</h3>
            <img src="images/${member.image}"
                 alt="${member.name}">
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p>
                <a href="${member.website}"
                   target="_blank">
                   Website
                </a>
            </p>
            <p>
                ${member.membership === 3 ? "Gold Member" : "Silver Member"}
            </p>
        `;

        container.appendChild(card);
    });
}

loadSpotlights();