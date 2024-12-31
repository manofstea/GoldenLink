function searchWebsites() {
  const searchInput = document.querySelector('input[type="search"]');
  const cards = document.querySelectorAll(".card-wrapper");
  const searchTerm = searchInput.value.toLowerCase().trim();

  cards.forEach((card) => {
    const title = card.querySelector(".card-title").textContent.toLowerCase();
    const description = card
      .querySelector(".card-text")
      .textContent.toLowerCase();
    const isMatch =
      title.includes(searchTerm) || description.includes(searchTerm);

    const cardContainer = card.closest(".col-6");
    cardContainer.style.display = isMatch ? "" : "none";
  });
}
