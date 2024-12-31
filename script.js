async function fetchWebsites() {
  const folders = [
    "design",
    "developments",
    "education",
    "exel",
    "hiburan",
    "images",
    "musik",
    "tools",
    "video",
  ];
  let allWebsites = [];

  for (const folder of folders) {
    try {
      const response = await fetch(`/${folder}/index.html`);
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const cards = doc.querySelectorAll(".card-wrapper");
      cards.forEach((card) => {
        allWebsites.push({
          name: card.querySelector(".card-title").textContent,
          url: card.getAttribute("href"),
          description: card.querySelector(".card-text").textContent,
          category: folder,
        });
      });
    } catch (error) {
      console.error(`Error fetching ${folder}/index.html:`, error);
    }
  }
  return allWebsites;
}

async function searchWebsites() {
  const searchInput = document.getElementById("search-input");
  const resultsContainer = document.getElementById("results-container");
  const query = searchInput.value.toLowerCase();

  if (!window.websiteData) {
    window.websiteData = await fetchWebsites();
  }

  resultsContainer.innerHTML = "";

  const filteredWebsites = window.websiteData.filter(
    (website) =>
      website.name.toLowerCase().includes(query) ||
      website.description.toLowerCase().includes(query)
  );

  filteredWebsites.forEach((website) => {
    const card = `
        <div class="col-12 col-md-6 col-lg-4 mb-4">
          <a href="${website.url}" class="card-wrapper" target="_blank">
            <div class="card h-100">
              <div class="card-body p-4">
                <h6 class="card-title fw-bold mb-2">${website.name}</h6>
                <p class="card-text text-muted small">${website.description}</p>
                <div class="d-flex align-items-center justify-content-between mt-2">
                  <span class="badge bg-secondary">${website.category}</span>
                  <i class="fas fa-arrow-right arrow text-primary"></i>
                </div>
              </div>
            </div>
          </a>
        </div>
      `;
    resultsContainer.innerHTML += card;
  });
}
