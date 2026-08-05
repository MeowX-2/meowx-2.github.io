/**
 * Dynamically load project cards into #projects-grid
 */
function loadDynamicProjectsGrid() {
  const container = document.querySelector("#projects-grid");
  if (!container) return;

  fetch("data/projects.json")
    .then((res) => {
      if (!res.ok) throw new Error("Projects data unavailable");
      return res.json();
    })
    .then((projects) => {
      if (!Array.isArray(projects)) return;
      container.innerHTML = "";

      projects.forEach((proj) => {
        const card = document.createElement("div");
        card.className = "card";

        const linksHTML = (proj.links || []).map(link => `
          <a href="${link.url}" ${link.external ? 'target="_blank" rel="noopener noreferrer"' : ''} class="read-more">
            ${link.text} <i class="${link.icon}"></i>
          </a>
        `).join("");

        card.innerHTML = `
          <div class="card-header">
            <h3>${proj.title}</h3>
            <span class="card-type">${proj.type}</span>
          </div>
          <div class="card-body">
            <p>${proj.description}</p>
          </div>
          <div class="card-footer">
            ${linksHTML}
          </div>
        `;

        container.appendChild(card);
      });
    })
    .catch((err) => {
      console.warn("Could not fetch projects.json dynamically:", err);
    });
}
