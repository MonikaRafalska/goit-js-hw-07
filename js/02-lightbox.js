import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const images = galleryItems
  .map(
    (item) =>
      `<li class = "gallery__item">
            <a class = "gallery__link" href="${item.original}">
            <img class = "gallery__image" src="${item.preview}"  alt="${item.description}"/>
            </a></li>`
  )
  .join("");
  console.log(galleryItems);
gallery.insertAdjacentHTML("beforeend", images);

new SimpleLightbox(`.gallery a`, {
  captionPosition: "outside",
  captionsData: "alt",
  captionDelay: 250,
});