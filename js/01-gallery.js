import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery")

const images = galleryItems
  .map(
    (item) =>
      `<div class = "gallery__item">
            <a class = "gallery__link" href="${item.original}">
            <img class = "gallery__image" src="${item.preview} "data-source="${item.original}" alt="${item.description}"/>
            </a></div>`
  )
  .join("");
  console.log(galleryItems);
gallery.insertAdjacentHTML("beforeend", images);
const galleryAllImages = document.querySelectorAll(".gallery__image");
galleryAllImages.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();

    const modal = basicLightbox.create(
      `<img src="${item.dataset.source}" alt="${item.alt}">`
    );
    modal.show();
    if (modal.visible() === true) {
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          modal.close();
        }
      });
    }
  });
});