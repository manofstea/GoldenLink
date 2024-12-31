function searchWebsites() {
  // Get search input and all card elements
  const searchInput = document.querySelector('input[type="search"]');
  const cards = document.querySelectorAll(".card-wrapper");
  const searchTerm = searchInput.value.toLowerCase().trim();

  // Loop through each card and check if it matches search
  cards.forEach((card) => {
    const title = card.querySelector(".card-title").textContent.toLowerCase();
    const description = card
      .querySelector(".card-text")
      .textContent.toLowerCase();
    const isMatch =
      title.includes(searchTerm) || description.includes(searchTerm);

    // Show/hide cards based on match
    const cardContainer = card.closest(".col-6");
    cardContainer.style.display = isMatch ? "" : "none";
  });
}
