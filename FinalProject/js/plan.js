const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("#site-nav");
menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("open", !open);
});

document.querySelector("#year")?.replaceChildren(String(new Date().getFullYear()));

const interest = document.querySelector("#interest");
const days = document.querySelector("#days");
const saved = document.querySelector("#saved-preference");
const form = document.querySelector("#visit-form");

function showSaved() {
  const preference = JSON.parse(localStorage.getItem("ibadanVisitPreference") || "null");
  if (preference) {
    saved.textContent = `Saved preference: ${preference.interest} • ${preference.days}.`;
    interest.value = preference.interest;
    days.value = preference.days;
  } else {
    saved.textContent = "No preference saved yet. Your choices will be remembered when you submit.";
  }
}

form?.addEventListener("submit", () => {
  localStorage.setItem("ibadanVisitPreference", JSON.stringify({
    interest: interest.value,
    days: days.value,
    savedAt: Date.now()
  }));
});

showSaved();
