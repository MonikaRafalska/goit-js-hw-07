import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

function galleryAllImages(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                    <a class="gallery__link" href=${original}>
                         <img class="gallery__image"
                          src=${preview}
                          data-source=${original}
                          alt=${description} />
                    </a>
                    </li>`;
    })
    .join("");
}

function galeryGrid() {
  gallery.innerHTML = galleryAllImages(galleryItems);
  new SimpleLightbox(".gallery a", {
    captionPosition: "outside",
    captionsData: "alt",
    captionDelay: "250",
  });
}

galeryGrid();