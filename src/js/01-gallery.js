import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const lightBoxGalleryRef = document.querySelector('.gallery');

const imagesGalery = galleryItems
  .map(
    el => `
     <li class="gallery__item">
         <a class="gallery__link" href="${el.original}">
            <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
         </a>
     </li>
  `
  )
  .join('');
lightBoxGalleryRef.insertAdjacentHTML('afterbegin', imagesGalery);

lightBoxGalleryRef.style.listStyleType = 'none';

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  enableKeyboard: true,
  overlay: true,
  overlayOpacity: 0.8,
  nav: true,
  preloading: false,
  animationSlide: true,
  docClose: true,
  scaleImageToRatio: true,
  disableScroll: true,
});
