/**
 * Dynamically load resources into #resources-grid
 */
function loadDynamicResourcesGrid() {
  const container = document.querySelector("#resources-grid");
  if (!container) return;

  fetch("data/resources.json")
    .then((res) => {
      if (!res.ok) throw new Error("Resources data unavailable");
      return res.json();
    })
    .then((categories) => {
      if (!Array.isArray(categories)) return;
      container.innerHTML = "";

      categories.forEach((cat) => {
        const card = document.createElement("div");
        card.className = "card resource-card";

        let contentHTML = "";
        if (cat.items && Array.isArray(cat.items)) {
          contentHTML = `<ul>${cat.items.map(item => `<li>${item.text}</li>`).join("")}</ul>`;
        } else if (cat.html) {
          contentHTML = cat.html;
        }

        card.innerHTML = `
          <h3>${cat.category}</h3>
          ${contentHTML}
        `;

        container.appendChild(card);
      });
    })
    .catch((err) => {
      console.warn("Could not fetch resources.json dynamically:", err);
    });
}
