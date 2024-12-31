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
    if (isMatch) {
      cardContainer.style.display = "";
      cardContainer.style.opacity = "1";
    } else {
      cardContainer.style.opacity = "0";
      setTimeout(() => {
        cardContainer.style.display = "none";
      }, 300);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector('input[type="search"]')
    .addEventListener("input", searchWebsites);
});
