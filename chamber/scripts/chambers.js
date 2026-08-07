


const menuBtn = document.querySelector('#menuBtn');
const navMenu = document.querySelector('#navMenu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

const membersContainer = document.querySelector('#members');

const gridBtn = document.querySelector('#gridBtn');
const listBtn = document.querySelector('#listBtn');

async function getMembers() {

    const response = await fetch('data/members.json');

    const data = await response.json();

    displayMembers(data);
}

function displayMembers(members) {

    membersContainer.innerHTML = '';

    members.forEach(member => {

        const card = document.createElement('section');

        card.classList.add('member-card');

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">

            <div>
                <h3>${member.name}</h3>

                <p>${member.address}</p>

                <p>${member.phone}</p>

                <p>${member.description}</p>

                <a href="${member.website}" target="_blank">
                    Visit Website
                </a>
            </div>
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
    `Last Modified: ${document.lastModified}`;

getMembers();