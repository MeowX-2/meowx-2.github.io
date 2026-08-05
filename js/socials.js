/**
 * Dynamically load social profile cards into #social-grid
 */
function loadDynamicSocialGrid() {
  const container = document.querySelector("#social-grid");
  if (!container) return;

  fetch("data/socials.json")
    .then((res) => {
      if (!res.ok) throw new Error("Socials data unavailable");
      return res.json();
    })
    .then((socials) => {
      if (!Array.isArray(socials)) return;
      container.innerHTML = "";

      socials.forEach((social) => {
        const card = document.createElement("a");
        card.href = social.url;
        card.target = "_blank";
        card.rel = "noopener noreferrer";
        card.className = "social-card";
        card.title = social.title || social.name;

        card.innerHTML = `
          <i class="${social.icon}"></i>
          <span>${social.title || social.name}</span>
        `;

        container.appendChild(card);
      });
    })
    .catch((err) => {
      console.warn("Could not fetch socials.json dynamically:", err);
    });
}
