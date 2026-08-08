const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "Visitor";
const interest = params.get("interest") || "your chosen interests";
const days = params.get("days") || "your selected trip length";
const message = params.get("message") || "No additional message was supplied.";

document.querySelector("#result-title").textContent = `Thanks, ${name}!`;
document.querySelector("#form-results").innerHTML = `
  <p>Your visit request has been received as a demonstration of the WDD 231 form-action requirement.</p>
  <dl class="summary">
    <div><dt>Main interest</dt><dd>${interest}</dd></div>
    <div><dt>Trip length</dt><dd>${days}</dd></div>
    <div><dt>Message</dt><dd>${message}</dd></div>
  </dl>`;
document.querySelector("#year")?.replaceChildren(String(new Date().getFullYear()));
