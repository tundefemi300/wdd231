const membersContainer = document.querySelector('#members');
const gridBtn = document.querySelector('#gridBtn');
const listBtn = document.querySelector('#listBtn');

async function getMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();

    displayMembers(data);
}

function displayMembers(members) {

    members.forEach(member => {

        const card = document.createElement('section');

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p>${member.description}</p>
            <a href="${member.website}" target="_blank">
                Visit Website
            </a>
        `;

        membersContainer.appendChild(card);
    });
}

gridBtn.addEventListener('click', () => {
    membersContainer.classList.add('grid-view');
    membersContainer.classList.remove('list-view');
});

listBtn.addEventListener('click', () => {
    membersContainer.classList.add('list-view');
    membersContainer.classList.remove('grid-view');
});

document.querySelector('#year').textContent =
    new Date().getFullYear();

document.querySelector('#lastModified').textContent =
    `Last Modification: ${document.lastModified}`;

getMembers();