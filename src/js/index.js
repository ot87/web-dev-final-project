const galleryContainer = document.querySelector("#gallery");

function renderGallery(gallery) {
  let galleryHtml = "";

  gallery.forEach((item) => {
    galleryHtml += `
      <article class="gallery-card">
        <div class="gallery-card-cover">
          <figure>
            <img
              src="/assets/${item.image.src}"
              alt="${item.image.alt}"
              class="gallery-image"
            />
          </figure>
          <span class="rating">⭐ ${item.rating}</span>
        </div>
        <div class="gallery-card-content">
          <h4 class="title-sm">${item.name}</h4>
          <p><span class="text-cursive accent-color">Vibe:</span> ${item.vibe}</p>
          <p><span class="text-cursive accent-color">Neighbourhood:</span> ${item.neighbourhood}</p>
          <p><span class="text-cursive accent-color">Location:</span> ${item.address}</p>
        </div>
        <div class="gallery-card-bottom">
          <div class="gallery-feature-container">${item.features.map((feature) => `<span class="text-sm feature feature-${feature.replace(/\s+/g, "-").toLowerCase()}">${feature}</span>`).join("")}</div>
          <a href="${item.mapUrl}" class="button button-primary" target="_blank">View On Map</a>
        </div>
      </article>`;
  });

  if (galleryHtml.length) {
    galleryContainer.innerHTML = galleryHtml;
  } else {
    galleryContainer.innerHTML = "<p>No matches found.</p>";
  }
}

function filterGallery(e) {
  const searchString = e.target.value.trim().toLowerCase();
  const filteredGallery = data.filter(
    ({ name, vibe, neighbourhood }) =>
      name.toLowerCase().includes(searchString) ||
      vibe.toLowerCase().includes(searchString) ||
      neighbourhood.toLowerCase().includes(searchString),
  );

  renderGallery(filteredGallery);
}

document
  .querySelector("#search-input")
  .addEventListener("keyup", filterGallery);

document.querySelector("#clear-search").addEventListener("click", () => {
  document.querySelector("#search-input").value = "";
  renderGallery(data);
});

renderGallery(data);
