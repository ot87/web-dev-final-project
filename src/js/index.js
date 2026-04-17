const galleryContainer = document.querySelector(".gallery");

function renderGallery(gallery) {
  let galleryHtml = "";

  gallery.forEach((item) => {
    galleryHtml += `
      <article>
        <div>
          <figure>
            <img
              src="/assets/${item.image.src}"
              alt="${item.image.alt}"
            />
          </figure>
          <span>Rating: ${item.rating}</span>
        </div>
        <h4>${item.name}</h4>
        <p>Vibe: ${item.vibe}</p>
        <p>Features: ${item.features.join(", ")}</p>
        <p>Neighbourhood: ${item.neighbourhood}</p>
        <p>Location: ${item.address}</p>
        <a href="${item.mapUrl}" target="_blank">View On Map</a>
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

document
  .querySelector("#clear-search")
  .addEventListener("click", () => {
    document.querySelector("#search-input").value = "";
    renderGallery(data);
  });

renderGallery(data);
