function searchWebsites() {
  const searchInput = document.querySelector('input[type="search"]');
  const cards = document.querySelectorAll(".card-wrapper");
  const searchTerm = searchInput.value.toLowerCase();

  cards.forEach((card) => {
    const title = card.querySelector(".card-title").textContent.toLowerCase();
    const description = card
      .querySelector(".card-text")
      .textContent.toLowerCase();
    const isMatch =
      title.includes(searchTerm) || description.includes(searchTerm);

    card.closest(".col-6").style.display = isMatch ? "block" : "none";
  });
}
